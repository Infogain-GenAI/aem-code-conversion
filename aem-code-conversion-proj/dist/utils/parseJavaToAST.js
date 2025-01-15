"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJavaToAST = parseJavaToAST;
// FILEPATH: /d:/myNewTSProject/src/utils/parseJavaToAST.ts
const antlr4ng_1 = require("antlr4ng");
const JavaLexer_1 = require("../grammar/JavaLexer");
const JavaParser_1 = require("../grammar/JavaParser");
const antlr4ng_2 = require("antlr4ng");
const JavaASTListener_1 = require("../listeners/JavaASTListener");
function parseJavaToAST(content) {
    const inputStream = antlr4ng_1.CharStream.fromString(content);
    const lexer = new JavaLexer_1.JavaLexer(inputStream);
    const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
    const parser = new JavaParser_1.JavaParser(tokenStream);
    const compilationUnit = parser.compilationUnit();
    console.log('--- Parse Tree ---');
    console.log(compilationUnit.toStringTree(parser.ruleNames, parser));
    // Walk the parse tree and build the AST
    const metadata = {}; // Replace with actual metadata if available
    const listener = new JavaASTListener_1.JavaASTListener(metadata);
    antlr4ng_2.ParseTreeWalker.DEFAULT.walk(listener, compilationUnit);
    // Print or use the AST
    console.log('--- AST ---');
    console.log(listener.getAST());
}
const javaCode = `
package com.test;

import java.util.*;

public class Test {
    public void method() {
        System.out.println("Hello");
    }
}
`;
parseJavaToAST(javaCode);
//# sourceMappingURL=parseJavaToAST.js.map