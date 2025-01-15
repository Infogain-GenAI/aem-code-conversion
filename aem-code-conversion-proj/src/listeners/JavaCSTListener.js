"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// FILEPATH: /d:/my-typescript-project/src/JavaCSTGenerator.ts
var antlr4ts_1 = require("antlr4ts");
var Java8Lexer_1 = require("../generated/Java8Lexer");
var Java8Parser_1 = require("../generated/Java8Parser");
var ParseTreeWalker_1 = require("antlr4ts/tree/ParseTreeWalker");
var JavaCSTListener = /** @class */ (function () {
    function JavaCSTListener() {
    }
    JavaCSTListener.prototype.visitTerminal = function (node) {
        throw new Error("Method not implemented.");
    };
    JavaCSTListener.prototype.visitErrorNode = function (node) {
        throw new Error("Method not implemented.");
    };
    JavaCSTListener.prototype.enterEveryRule = function (ctx) {
        console.log(ctx.getText());
    };
    JavaCSTListener.prototype.exitEveryRule = function (ctx) {
        console.log(ctx.getText());
    };
    JavaCSTListener.prototype.enterMethodDeclaration = function (ctx) {
        console.log("Found method:", ctx.methodHeader().getText());
    };
    JavaCSTListener.prototype.enterClassDeclaration = function (ctx) {
        console.log("Found class:", ctx.normalClassDeclaration().getText());
    };
    return JavaCSTListener;
}());
function generateCST(javaCode) {
    var inputStream = new antlr4ts_1.ANTLRInputStream(javaCode);
    console.log("inputStream----------------------" + inputStream);
    var lexer = new Java8Lexer_1.default(inputStream);
    //console.log("lexer----------------------"+lexer);
    var tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    //console.log("tokenStream----------------------"+tokenStream);
    var parser = new Java8Parser_1.default(tokenStream);
    var listener = new JavaCSTListener();
    //parser.addParseListener(listener as any);
    var tree = parser.compilationUnit();
    var walker = new ParseTreeWalker_1.ParseTreeWalker();
    //parser.compilationUnit().enterRule(listener as any);
    //walk the tree
    //walker.walk(listener as any, tree as any);
    ParseTreeWalker_1.ParseTreeWalker.DEFAULT.walk(listener, tree);
}
// Example usage
var javaCode = "\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}\n";
generateCST(javaCode);
