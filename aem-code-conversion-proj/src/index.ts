import { CharStream, CommonTokenStream } from 'antlr4ng';
import { JavaLexer } from './grammar/JavaLexer';
import { JavaParser } from './grammar/JavaParser';

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
const inputStream = CharStream.fromString(input);
const lexer = new JavaLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new JavaParser(tokenStream);

const tree = parser.compilationUnit();
console.log(tree.toStringTree(parser));