import { File, Metadata, MethodMetadata } from "../types/types";
import { JavaMetadataListener } from "../listeners/JavaMetadataListener";
import { LoggingService } from "../services/loggingService";
import { JavaMetadata, JavaClassMetadata, JavaMethodMetadata, JavaFieldMetadata, JavaConstructorMetadata, JavaParameterMetadata } from '../types/JavaMetadata';
import { CharStream, CommonTokenStream, ANTLRErrorListener, ParseTreeWalker } from "antlr4ng";
import { JavaLexer } from "../grammar/JavaLexer";
import { JavaParser } from "../grammar/JavaParser";
import { listeners } from "process";
import { Recognizer, Token, RecognitionException, DFA, ATNConfigSet, BaseErrorListener } from 'antlr4ng';
import { JavaClassVisitor } from '../listeners/JavaClassVisitor';



const logger = LoggingService.getInstance();

/**
 * Extract metadata for methods in a file.
 * @param file - File object containing name and content.
 * @returns Metadata object with method details.
 */
/**
 * Extract metadata based on file type.
 * @param file - File object containing name and content.
 * @returns Metadata object with method details.
 */
export function extractMetadata(file: File): Metadata {

    logger.logDebug(`Extracting metadata for file: ${file.name}`);
    const extension = file.name.split(".").pop()?.toLowerCase();
    const metadata = { fileName: file.name, methods: [] };

    if (extension === "java") {
        const javaMetadata = extractJavaMetadata(file.content);
        //console.log("-------------------- extractMetadata in Java" + javaMetadata + javaMetadata.classes.toString() + " " + javaMetadata.imports + " " + javaMetadata.javaMethods + " " + javaMetadata.packageName + " " + javaMetadata.fileName);
        return { ...javaMetadata, methods: javaMetadata.javaMethods };
    } else if (extension === "py") {
        //return extractPythonMetadata(file.content);
        // } else if (extension === "ts" || extension === "js") {
        //     return extractTypeScriptMetadata(file.content);
        // } else {
        logger.logError(`Error extracting metadata for file ${file.name}`);
        throw new Error(`Unsupported file type: ${extension}`);
    }
    return metadata;
}

/**
 * Extract metadata for Java files.
 * @param content - The full file content as a string.
 * @returns Metadata object with method details.
 */
// export function extractJavaMetadata(content: string): Metadata {
//     const methods = analyzeFileMethodsUsingAST(content);
//     return { fileName: "Java", methods };
// }

// export function extractJavaMetadata(content: string): JavaMetadata {
//     const cst = parse(content); // Parse the content into a Concrete Syntax Tree (CST)
//     const javametadata: JavaMetadata = {
//         fileName: '',
//         packageName: '',
//         imports: [],
//         classes: [],
//         javaMethods: [] // Add the methods property
//     };

//     traverseCST(cst, javametadata);

//     return {fileName: javametadata.fileName,packageName: javametadata.packageName, imports: javametadata.imports,
//         classes: javametadata.classes,javaMethods: javametadata.javaMethods};

// }


// class CustomErrorListener implements ErrorListener<Token> {
//     syntaxError(
//         recognizer: Recognizer<Token>,
//         offendingSymbol: Token,
//         line: number,
//         charPositionInLine: number,
//         msg: string,
//         e: RecognitionException | undefined
//     ): void {
//         console.error(`Error at line ${line}:${charPositionInLine} - ${msg}`);
//     }
// }

class CustomErrorListenerNew implements BaseErrorListener {
    private errors: string[] = [];

    syntaxError(
        recognizer: Recognizer<any>,
        offendingSymbol: Token | null,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException
    ): void {
        const error = `Error at line ${line}:${charPositionInLine} - ${msg}`;
        console.error(error);
        this.errors.push(error);
    }

    getErrors(): string[] {
        return this.errors;
    }

    reportAmbiguity(
        recognizer: Recognizer<any>,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        exact: boolean,
        ambigAlts: any,
        configs: ATNConfigSet
    ): void {
        // Optional: Handle ambiguity errors
        // console.log('Ambiguity error' + (ambigAlts ? ambigAlts.toString() : ''));
    }

    reportAttemptingFullContext(
        recognizer: Recognizer<any>,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: any,
        configs: ATNConfigSet
    ): void {
        // Optional: Handle full-context attempt errors
        //console.log('Full context error' + (conflictingAlts ? conflictingAlts.toString() : ''));
    }

    reportContextSensitivity(
        recognizer: Recognizer<any>,
        dfa: DFA,
        startIndex: number,
        stopIndex: number,
        prediction: number,
        configs: ATNConfigSet
    ): void {
        // Optional: Handle context sensitivity errors
        //console.log('Context sensitivity error' + prediction.toString());
    }
}

/**
 * Extract metadata for Java files using ANTLR.
 * @param content - The Java file content as a string.
 * @returns Extracted metadata.
 */
// export function extractJavaMetadata(content: string): JavaMetadata {
//     //const inputStream = new ANTLRInputStream(content);
//     const inputStream = CharStreams.fromString(content);
//     const lexer = new Java8Lexer(inputStream as any);
//     const tokenStream = new CommonTokenStream(lexer as any);
//     const parser = new JavaParser(tokenStream as any);

//     lexer.removeErrorListeners();
//     parser.removeErrorListeners();


//     const customErrorListener = new CustomErrorListener();
//     // lexer.addErrorListener(customErrorListener as any);
//     // parser.addErrorListener(customErrorListener as any);

//     tokenStream.fill();
//     const tokens = tokenStream.getTokens();
//     tokens.forEach((token, index) => {
//         console.log(`Token ${index}:`, token.toString());
//         console.log(`Token Type: ${token.type} , Text: '${token.text}'`);


//     });


//     const metadata: JavaMetadata = {
//         fileName: '',
//         packageName: '',
//         imports: [],
//         classes: [],
//         javaMethods: []
//     };

//     // Parse the content and walk the parse tree
//     const compilationUnit = parser.compilationUnit();

//     console.log("ParserTree --------- " + compilationUnit.toStringTree(parser.ruleNames, parser));


//     const listener = new JavaMetadataListener(metadata);
//     ParseTreeWalker.DEFAULT.walk(listener as any, compilationUnit as any);


//     return metadata;
// }

export function extractJavaMetadata(content: string): JavaMetadata {
    const arry = [];
    if (!content || content.trim().length === 0) {
        throw new Error('Input content is empty or invalid.');
    }

    const inputStream = CharStream.fromString(content);
    const lexer = new JavaLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new JavaParser(tokenStream);

    // Error Listener
    const customErrorListener = new CustomErrorListenerNew();
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    lexer.addErrorListener(customErrorListener as any);
    parser.addErrorListener(customErrorListener as any);

    tokenStream.fill();
    console.log('--- Tokens ---');
    const tokens = tokenStream.getTokens();
    tokens.forEach((token, index) => {
        const tokenMap: { [key: number]: string } = {
            [JavaLexer.PACKAGE]: 'PACKAGE',
            [JavaLexer.IMPORT]: 'IMPORT',
            [JavaLexer.CLASS]: 'CLASS',
            [JavaLexer.INTERFACE]: 'INTERFACE',
            [JavaLexer.ENUM]: 'ENUM',
            [JavaLexer.ABSTRACT]: 'ABSTRACT',
            [JavaLexer.FINAL]: 'FINAL',
            [JavaLexer.PUBLIC]: 'PUBLIC',
            [JavaLexer.PROTECTED]: 'PROTECTED',
            [JavaLexer.PRIVATE]: 'PRIVATE',
            [JavaLexer.STATIC]: 'STATIC',
            [JavaLexer.VOID]: 'VOID',
            [JavaLexer.BOOLEAN]: 'BOOLEAN',
            [JavaLexer.CHAR]: 'CHAR',
            [JavaLexer.BYTE]: 'BYTE',
            [JavaLexer.SHORT]: 'SHORT',
            [JavaLexer.INT]: 'INT',
            [JavaLexer.LONG]: 'LONG',
            [JavaLexer.FLOAT]: 'FLOAT',
            [JavaLexer.DOUBLE]: 'DOUBLE',
        };
        //console.log(`Token ${index}: Type: ${token.type} (${tokenMap[token.type] || 'Unknown'}), Text: '${token.text}'`);
    });

    // Metadata Initialization
    const metadata: JavaMetadata = {
        fileName: '',
        packageName: '',
        imports: [],
        classes: [],
        javaMethods: [],
        ast: ''
    };

    const classmetadata: JavaClassMetadata = {
        className: '',
        modifiers: [],
        superclass: '',
        interfaces: [],
        annotations: [],
        fields: [],
        methods: [],
        constructors: []
    };

    // Parse the content and walk the parse tree
    const compilationUnit = parser.compilationUnit();

    console.log('--- Parse Tree ---');
    //console.log(compilationUnit);
    const cst = compilationUnit.toStringTree(parser.ruleNames, parser);

    // if (customErrorListener.syntaxError.length > 0) {
    //     console.log('--- Errors --- customErrorListener');
    //      throw new Error(`Parsing failed with errors:\n${customErrorListener.syntaxError.name}`);
    // }

    // const listener = new JavaMetadataListener(metadata);
    // ParseTreeWalker.DEFAULT.walk(listener as any, compilationUnit as any);

    // Parse the content and walk the parse tree
    const listener = new JavaMetadataListener(metadata);
    ParseTreeWalker.DEFAULT.walk(listener as any, compilationUnit as any);
    metadata.ast = cst

    const visitor = new JavaClassVisitor();
    visitor.visit(compilationUnit);
    console.log('--- Visitor ---');

    for (const clazz of visitor.classes) {
        console.log(`Class: ${clazz.className}`);
        console.log(`Modifiers: ${clazz.modifiers.join(', ')}`);
        console.log(`Superclass: ${clazz.superclass}`);
        console.log(`Interfaces: ${clazz.interfaces.join(', ')}`);

        
        
    }
   // metadata.classes = visitor.classes;

    return metadata;
}

// export function parseJavaFile(filePath: string) {
//     const input = fs.readFileSync(filePath, 'utf8');
//     const inputStream = CharStreams.fromString(input);
//     const lexer = new JavaLexer(inputStream);
//     const tokenStream = new CommonTokenStream(lexer);
//     const parser = new JavaParser(tokenStream);

//     const tree = parser.compilationUnit();
//     const visitor = new JavaClassVisitor();
//     visitor.visit(tree);

//     return visitor.classes;
// }

/**
 * Extract metadata for Python files.
 * @param content - The full file content as a string.
 * @returns Metadata object with method details.
 */
// export function extractPythonMetadata(content: string): Metadata {
//     const methods = analyzeFileMethods(content);
//     return { fileName: "Python", methods };

// }

/**
 * Extract metadata for TypeScript files.
 * @param content - The full file content as a string.
 * @returns Metadata object with method details.
 */
// export function extractTypeScriptMetadata(content: string): Metadata {
//     const methods = analyzeFileMethodsUsingAST(content);
//     return { fileName: "TypeScript", methods };
// }

/**
 * Analyze the file content and extract methods with their positions.
 * @param content - The full file content as a string.
 * @returns Array of MethodMetadata with method name, start, and end positions.
 */
// export function analyzeFileMethods(content: string): MethodMetadata[] {
//     const methodRegex = /(?<methodName>\w+)\s*\([\w\s,]*\)\s*{/g; // Regex to find method declarations
//     const methods: MethodMetadata[] = [];
//     let match;

//     while ((match = methodRegex.exec(content)) !== null) {
//         const methodName = match.groups?.methodName || "UnknownMethod";
//         const start = match.index;
//         const end = findMethodEnd(content, start);

//         methods.push({ methodName, start, end });
//     }

//     return methods;
// }

/**
 * Find the end position of a method by matching curly braces.
 * @param content - The file content.
 * @param start - The start index of the method.
 * @returns The end index of the method.
 */
function findMethodEnd(content: string, start: number): number {
    const stack: string[] = [];
    for (let i = start; i < content.length; i++) {
        if (content[i] === "{") stack.push("{");
        if (content[i] === "}") stack.pop();

        if (stack.length === 0) return i + 1;
    }
    throw new Error("Unbalanced braces detected");
}


/**
 * Analyze file content and extract methods using AST.
 * @param content - The full file content as a string.
 * @returns Array of MethodMetadata with method name, start, and end positions.
 */
// export function analyzeFileMethodsUsingAST(content: string): MethodMetadata[] {
//     const methods: MethodMetadata[] = [];

//     // Parse the content into an Abstract Syntax Tree (AST)
//     //const ast = parse(content, { loc: true });

//     const ast = parse(content);

//     // Traverse the AST to find methods
//     traverseAST(ast, node => {
//         if (node.type === "MethodDefinition") {
//             methods.push({
//                 methodName: node.key.name,
//                 start: node.loc.start.line,
//                 end: node.loc.end.line
//             });
//         }
//     });

//     return methods;
// }

/**
 * Traverse an AST and apply a callback to each node.
 * @param node - Current AST node.
 * @param callback - Function to apply to each node.
 */
function traverseAST(node: any, callback: (node: any) => void) {
    callback(node);
    for (const key in node) {
        if (node[key] && typeof node[key] === "object") {
            traverseAST(node[key], callback);
        }
    }
}

/**
 * Recursively find nested methods or lambdas in the content.
 * @param content - The file content as a string.
 * @returns Array of MethodMetadata including nested methods.
 */
// function findNestedMethods(content: string): MethodMetadata[] {
//     const nestedRegex = /(?<methodName>\w+)\s*\([^)]*\)\s*{\s*(([^{}]*){([^{}]*)})+/g;
//     const methods: MethodMetadata[] = [];
//     let match;

//     while ((match = nestedRegex.exec(content)) !== null) {
//         const methodName = match.groups?.methodName || "AnonymousMethod";
//         const start = match.index;
//         const end = findMethodEnd(content, start);

//         methods.push({ methodName, start, end });
//     }

//     return methods;
// }

/**
 * Handle edge cases during metadata extraction.
 * @param file - File to process.
 * @returns Metadata or an error message.
 */
export function safeExtractMetadata(file: File): Metadata | null {
    try {
        if (!file.content.trim()) throw new Error("File is empty");
        const metadata = extractMetadata(file);
        if (metadata.methods.length === 0) throw new Error("No methods found");
        return metadata;
    } catch (error) {
        console.error(`Error processing file ${file.name}:`, error);
        return null;
    }
}

const tokenCache = new Map<string, number>();

export function cachedTokenEstimate(content: string): number {
    if (tokenCache.has(content)) return tokenCache.get(content)!;

    const tokenCount = estimateTokens(content);
    tokenCache.set(content, tokenCount);
    return tokenCount;
}
/**
 * Estimate the number of tokens in the content.
 * @param content - The full file content as a string.
 * @returns The estimated number of tokens.
 */
function estimateTokens(content: string): number {
    // Simple token estimation by splitting content by whitespace and punctuation
    const tokens = content.split(/\s+|[.,;:{}()]/).filter(token => token.length > 0);
    return tokens.length;
}

function traverseCST(node: any, javametadata: JavaMetadata) {
    if (node.node === 'packageDeclaration') {
        javametadata.packageName = node.children.packageName[0].image;
    } else if (node.node === 'importDeclaration') {
        javametadata.imports.push(node.children.packageName[0].image);
    } else if (node.node === 'classDeclaration') {
        const javaclassMetadata: JavaClassMetadata = {
            className: node.children.Identifier[0].image,
            modifiers: node.children.classModifier?.map((mod: any) => mod.image) || [],
            superclass: node.children.superclass?.[0].children.typeName[0].image || '',
            interfaces: node.children.superinterfaces?.[0].children.interfaceTypeList[0].children.typeName.map((iface: any) => iface.image) || [],
            annotations: [],
            fields: [],
            methods: [],
            constructors: []
        };
        javametadata.classes.push(javaclassMetadata);
        traverseClassBody(node.children.classBody[0], javaclassMetadata, javametadata);
    }

    // Recursively traverse child nodes
    for (const key in node.children) {
        if (Array.isArray(node.children[key])) {
            node.children[key].forEach((child: any) => traverseCST(child, javametadata));
        }
    }
}

function traverseClassBody(node: any, javaclassMetadata: JavaClassMetadata, javametadata: JavaMetadata) {
    node.children.classBodyDeclaration.forEach((decl: any) => {
        if (decl.children.memberDeclaration) {
            const member = decl.children.memberDeclaration[0];
            if (member.children.methodDeclaration) {
                const method = member.children.methodDeclaration[0];
                const javamethodMetadata: JavaMethodMetadata = {
                    methodName: method.children.methodHeader[0].children.methodDeclarator[0].children.Identifier[0].image,
                    modifiers: decl.children.modifier?.map((mod: any) => mod.image) || [],
                    returnType: method.children.methodHeader[0].children.result[0].children.unannType[0].image,
                    parameters: method.children.methodHeader[0].children.methodDeclarator[0].children.formalParameterList?.[0].children.formalParameter.map((param: any) => ({
                        parameterName: param.children.variableDeclaratorId[0].children.Identifier[0].image,
                        parameterType: param.children.unannType[0].image
                    })) || [],
                    annotations: [],
                    start: method.location.startLine,
                    end: method.location.endLine
                };
                javaclassMetadata.methods.push(javamethodMetadata);
                javametadata.javaMethods.push(javamethodMetadata);

            } else if (member.children.fieldDeclaration) {
                const field = member.children.fieldDeclaration[0];
                const fieldMetadata: JavaFieldMetadata = {
                    fieldName: field.children.variableDeclaratorList[0].children.variableDeclarator[0].children.variableDeclaratorId[0].children.Identifier[0].image,
                    modifiers: decl.children.modifier?.map((mod: any) => mod.image) || [],
                    fieldType: field.children.unannType[0].image,
                    annotations: []
                };
                javaclassMetadata.fields.push(fieldMetadata);
            } else if (member.children.constructorDeclaration) {
                const constructor = member.children.constructorDeclaration[0];
                const constructorMetadata: JavaConstructorMetadata = {
                    constructorName: constructor.children.constructorDeclarator[0].children.Identifier[0].image,
                    modifiers: decl.children.modifier?.map((mod: any) => mod.image) || [],
                    parameters: constructor.children.constructorDeclarator[0].children.formalParameterList?.[0].children.formalParameter.map((param: any) => ({
                        parameterName: param.children.variableDeclaratorId[0].children.Identifier[0].image,
                        parameterType: param.children.unannType[0].image
                    })) || [],
                    annotations: []
                };
                javaclassMetadata.constructors.push(constructorMetadata);
            }
        }
    });

}



