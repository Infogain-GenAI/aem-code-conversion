"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateParseTree = validateParseTree;
// FILEPATH: /d:/myNewTSProject/src/utils/metadataUtils.ts
const antlr4ng_1 = require("antlr4ng");
const JavaLexer_1 = require("../grammar/JavaLexer");
const JavaParser_1 = require("../grammar/JavaParser");
function validateParseTree(content) {
    const inputStream = antlr4ng_1.CharStream.fromString(content);
    const lexer = new JavaLexer_1.JavaLexer(inputStream);
    const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
    const parser = new JavaParser_1.JavaParser(tokenStream);
    const compilationUnit = parser.compilationUnit();
    console.log('--- Parse Tree ---');
    console.log(compilationUnit.toStringTree(parser.ruleNames, parser));
}
// Example usage
const javaCode = `
package com.test;

import java.util.*;

public class Test {
    public void method() {
        System.out.println("Hello");
    }
	
	public static void main(String[] args)
	{
		System.out.println("Hello world");
	}
}
`;
validateParseTree(javaCode);
//# sourceMappingURL=validateParseTree.js.map