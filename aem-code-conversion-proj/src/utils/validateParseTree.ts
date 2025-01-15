// FILEPATH: /d:/myNewTSProject/src/utils/metadataUtils.ts
import { CharStream, CommonTokenStream } from 'antlr4ng';
import {JavaLexer} from '../grammar/JavaLexer';
import {JavaParser} from '../grammar/JavaParser';
//import { ParseTreeWalker } from 'antlr4ts/tree';
import { JavaMetadataListener } from "../listeners/JavaMetadataListener"; // Ensure you have this listener implemented
import { JavaMetadata } from '../types/JavaMetadata'; // Ensure you have this interface defined

export function validateParseTree(content: string): void {
    const inputStream = CharStream.fromString(content);
    const lexer = new JavaLexer(inputStream as any);
    const tokenStream = new CommonTokenStream(lexer as any);
    const parser = new JavaParser(tokenStream as any);

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