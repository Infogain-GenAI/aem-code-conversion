"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// FILEPATH: /d:/my-typescript-project/src/JavaCSTGenerator.ts
const antlr4ng_1 = require("antlr4ng");
const JavaLexer_1 = require("../grammar/JavaLexer");
const JavaParser_1 = require("../grammar/JavaParser");
class JavaCSTListener {
    visitTerminal(node) {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node) {
        throw new Error("Method not implemented.");
    }
    enterEveryRule(ctx) {
        console.log(ctx.getText());
    }
    exitEveryRule(ctx) {
        console.log(ctx.getText());
    }
    enterMethodDeclaration(ctx) {
        console.log("Found method:", ctx.Identifier().getText());
    }
    enterClassDeclaration(ctx) {
        console.log("Found class:", ctx.Identifier().getText());
        ;
    }
}
function generateCST(javaCode) {
    const inputStream = antlr4ng_1.CharStream.fromString(javaCode);
    console.log("inputStream----------------------" + inputStream);
    const lexer = new JavaLexer_1.JavaLexer(inputStream);
    //console.log("lexer----------------------"+lexer);
    const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
    //console.log("tokenStream----------------------"+tokenStream);
    const parser = new JavaParser_1.JavaParser(tokenStream);
    const listener = new JavaCSTListener();
    //parser.addParseListener(listener as any);
    const tree = parser.compilationUnit();
    const walker = new antlr4ng_1.ParseTreeWalker();
    //parser.compilationUnit().enterRule(listener as any);
    //walk the tree
    //walker.walk(listener as any, tree as any);
    //TreeWalker.DEFAULT.walk(listener as any, tree as any);
    // walk the tree
    walker.walk(listener, tree);
}
// Example usage
const javaCode = `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`;
generateCST(javaCode);
//# sourceMappingURL=JavaCSTListener.js.map