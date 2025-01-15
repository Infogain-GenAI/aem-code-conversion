"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ng_1 = require("antlr4ng");
const JavaLexer_1 = require("./grammar/JavaLexer");
const JavaParser_1 = require("./grammar/JavaParser");
const input = `package com.test;

import java.util.*;

public class Test {
    public void method() {
        System.out.println("Hello");
    }
	
	public static void main(String[] args)
	{
		System.out.println("Hello world");
	}
}`;
const inputStream = antlr4ng_1.CharStream.fromString(input);
const lexer = new JavaLexer_1.JavaLexer(inputStream);
const tokenStream = new antlr4ng_1.CommonTokenStream(lexer);
const parser = new JavaParser_1.JavaParser(tokenStream);
const tree = parser.compilationUnit();
console.log(tree.toStringTree(parser));
//# sourceMappingURL=index.js.map