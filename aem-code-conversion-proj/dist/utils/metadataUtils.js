"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractMetadata = extractMetadata;
exports.extractJavaMetadata = extractJavaMetadata;
exports.safeExtractMetadata = safeExtractMetadata;
exports.cachedTokenEstimate = cachedTokenEstimate;
const JavaMetadataListener_1 = require("../listeners/JavaMetadataListener");
const loggingService_1 = require("../services/loggingService");
const antlr4ng_1 = require("antlr4ng");
const JavaLexer_1 = require("../grammar/JavaLexer");
const JavaParser_1 = require("../grammar/JavaParser");
const JavaClassVisitor_1 = require("../listeners/JavaClassVisitor");
const logger = loggingService_1.LoggingService.getInstance();
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
function extractMetadata(file) {
    var _a;
    logger.logDebug(`Extracting metadata for file: ${file.name}`);
    const extension = (_a = file.name.split(".").pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const metadata = { fileName: file.name, methods: [] };
    if (extension === "java") {
        const javaMetadata = extractJavaMetadata(file.content);
        //console.log("-------------------- extractMetadata in Java" + javaMetadata + javaMetadata.classes.toString() + " " + javaMetadata.imports + " " + javaMetadata.javaMethods + " " + javaMetadata.packageName + " " + javaMetadata.fileName);
        return Object.assign(Object.assign({}, javaMetadata), { methods: javaMetadata.javaMethods });
    }
    else if (extension === "py") {
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
class CustomErrorListenerNew {
    constructor() {
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        const error = `Error at line ${line}:${charPositionInLine} - ${msg}`;
        console.error(error);
        this.errors.push(error);
    }
    getErrors() {
        return this.errors;
    }
    reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
        // Optional: Handle ambiguity errors
        // console.log('Ambiguity error' + (ambigAlts ? ambigAlts.toString() : ''));
    }
    reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
        // Optional: Handle full-context attempt errors
        //console.log('Full context error' + (conflictingAlts ? conflictingAlts.toString() : ''));
    }
    reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
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
function extractJavaMetadata(content) {
    const arry = [];
    if (!content || content.trim().length === 0) {
        throw new Error('Input content is empty or invalid.');
    }
    const inputStream = antlr4ng_1.CharStream.fromString(content);
    const lexer = new JavaLexer_1.JavaLexer(inputStream);
    const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
    const parser = new JavaParser_1.JavaParser(tokenStream);
    // Error Listener
    const customErrorListener = new CustomErrorListenerNew();
    lexer.removeErrorListeners();
    parser.removeErrorListeners();
    lexer.addErrorListener(customErrorListener);
    parser.addErrorListener(customErrorListener);
    tokenStream.fill();
    console.log('--- Tokens ---');
    const tokens = tokenStream.getTokens();
    tokens.forEach((token, index) => {
        const tokenMap = {
            [JavaLexer_1.JavaLexer.PACKAGE]: 'PACKAGE',
            [JavaLexer_1.JavaLexer.IMPORT]: 'IMPORT',
            [JavaLexer_1.JavaLexer.CLASS]: 'CLASS',
            [JavaLexer_1.JavaLexer.INTERFACE]: 'INTERFACE',
            [JavaLexer_1.JavaLexer.ENUM]: 'ENUM',
            [JavaLexer_1.JavaLexer.ABSTRACT]: 'ABSTRACT',
            [JavaLexer_1.JavaLexer.FINAL]: 'FINAL',
            [JavaLexer_1.JavaLexer.PUBLIC]: 'PUBLIC',
            [JavaLexer_1.JavaLexer.PROTECTED]: 'PROTECTED',
            [JavaLexer_1.JavaLexer.PRIVATE]: 'PRIVATE',
            [JavaLexer_1.JavaLexer.STATIC]: 'STATIC',
            [JavaLexer_1.JavaLexer.VOID]: 'VOID',
            [JavaLexer_1.JavaLexer.BOOLEAN]: 'BOOLEAN',
            [JavaLexer_1.JavaLexer.CHAR]: 'CHAR',
            [JavaLexer_1.JavaLexer.BYTE]: 'BYTE',
            [JavaLexer_1.JavaLexer.SHORT]: 'SHORT',
            [JavaLexer_1.JavaLexer.INT]: 'INT',
            [JavaLexer_1.JavaLexer.LONG]: 'LONG',
            [JavaLexer_1.JavaLexer.FLOAT]: 'FLOAT',
            [JavaLexer_1.JavaLexer.DOUBLE]: 'DOUBLE',
        };
        //console.log(`Token ${index}: Type: ${token.type} (${tokenMap[token.type] || 'Unknown'}), Text: '${token.text}'`);
    });
    // Metadata Initialization
    const metadata = {
        fileName: '',
        packageName: '',
        imports: [],
        classes: [],
        javaMethods: [],
        ast: ''
    };
    const classmetadata = {
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
    const listener = new JavaMetadataListener_1.JavaMetadataListener(metadata);
    antlr4ng_1.ParseTreeWalker.DEFAULT.walk(listener, compilationUnit);
    metadata.ast = cst;
    const visitor = new JavaClassVisitor_1.JavaClassVisitor();
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
function findMethodEnd(content, start) {
    const stack = [];
    for (let i = start; i < content.length; i++) {
        if (content[i] === "{")
            stack.push("{");
        if (content[i] === "}")
            stack.pop();
        if (stack.length === 0)
            return i + 1;
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
function traverseAST(node, callback) {
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
function safeExtractMetadata(file) {
    try {
        if (!file.content.trim())
            throw new Error("File is empty");
        const metadata = extractMetadata(file);
        if (metadata.methods.length === 0)
            throw new Error("No methods found");
        return metadata;
    }
    catch (error) {
        console.error(`Error processing file ${file.name}:`, error);
        return null;
    }
}
const tokenCache = new Map();
function cachedTokenEstimate(content) {
    if (tokenCache.has(content))
        return tokenCache.get(content);
    const tokenCount = estimateTokens(content);
    tokenCache.set(content, tokenCount);
    return tokenCount;
}
/**
 * Estimate the number of tokens in the content.
 * @param content - The full file content as a string.
 * @returns The estimated number of tokens.
 */
function estimateTokens(content) {
    // Simple token estimation by splitting content by whitespace and punctuation
    const tokens = content.split(/\s+|[.,;:{}()]/).filter(token => token.length > 0);
    return tokens.length;
}
function traverseCST(node, javametadata) {
    var _a, _b, _c;
    if (node.node === 'packageDeclaration') {
        javametadata.packageName = node.children.packageName[0].image;
    }
    else if (node.node === 'importDeclaration') {
        javametadata.imports.push(node.children.packageName[0].image);
    }
    else if (node.node === 'classDeclaration') {
        const javaclassMetadata = {
            className: node.children.Identifier[0].image,
            modifiers: ((_a = node.children.classModifier) === null || _a === void 0 ? void 0 : _a.map((mod) => mod.image)) || [],
            superclass: ((_b = node.children.superclass) === null || _b === void 0 ? void 0 : _b[0].children.typeName[0].image) || '',
            interfaces: ((_c = node.children.superinterfaces) === null || _c === void 0 ? void 0 : _c[0].children.interfaceTypeList[0].children.typeName.map((iface) => iface.image)) || [],
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
            node.children[key].forEach((child) => traverseCST(child, javametadata));
        }
    }
}
function traverseClassBody(node, javaclassMetadata, javametadata) {
    node.children.classBodyDeclaration.forEach((decl) => {
        var _a, _b, _c, _d, _e;
        if (decl.children.memberDeclaration) {
            const member = decl.children.memberDeclaration[0];
            if (member.children.methodDeclaration) {
                const method = member.children.methodDeclaration[0];
                const javamethodMetadata = {
                    methodName: method.children.methodHeader[0].children.methodDeclarator[0].children.Identifier[0].image,
                    modifiers: ((_a = decl.children.modifier) === null || _a === void 0 ? void 0 : _a.map((mod) => mod.image)) || [],
                    returnType: method.children.methodHeader[0].children.result[0].children.unannType[0].image,
                    parameters: ((_b = method.children.methodHeader[0].children.methodDeclarator[0].children.formalParameterList) === null || _b === void 0 ? void 0 : _b[0].children.formalParameter.map((param) => ({
                        parameterName: param.children.variableDeclaratorId[0].children.Identifier[0].image,
                        parameterType: param.children.unannType[0].image
                    }))) || [],
                    annotations: [],
                    start: method.location.startLine,
                    end: method.location.endLine
                };
                javaclassMetadata.methods.push(javamethodMetadata);
                javametadata.javaMethods.push(javamethodMetadata);
            }
            else if (member.children.fieldDeclaration) {
                const field = member.children.fieldDeclaration[0];
                const fieldMetadata = {
                    fieldName: field.children.variableDeclaratorList[0].children.variableDeclarator[0].children.variableDeclaratorId[0].children.Identifier[0].image,
                    modifiers: ((_c = decl.children.modifier) === null || _c === void 0 ? void 0 : _c.map((mod) => mod.image)) || [],
                    fieldType: field.children.unannType[0].image,
                    annotations: []
                };
                javaclassMetadata.fields.push(fieldMetadata);
            }
            else if (member.children.constructorDeclaration) {
                const constructor = member.children.constructorDeclaration[0];
                const constructorMetadata = {
                    constructorName: constructor.children.constructorDeclarator[0].children.Identifier[0].image,
                    modifiers: ((_d = decl.children.modifier) === null || _d === void 0 ? void 0 : _d.map((mod) => mod.image)) || [],
                    parameters: ((_e = constructor.children.constructorDeclarator[0].children.formalParameterList) === null || _e === void 0 ? void 0 : _e[0].children.formalParameter.map((param) => ({
                        parameterName: param.children.variableDeclaratorId[0].children.Identifier[0].image,
                        parameterType: param.children.unannType[0].image
                    }))) || [],
                    annotations: []
                };
                javaclassMetadata.constructors.push(constructorMetadata);
            }
        }
    });
}
//# sourceMappingURL=metadataUtils.js.map