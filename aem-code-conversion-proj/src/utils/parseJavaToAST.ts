// FILEPATH: /d:/myNewTSProject/src/utils/parseJavaToAST.ts
import { CharStream, CommonTokenStream } from 'antlr4ng';
import {JavaLexer} from '../grammar/JavaLexer';
import {JavaParser} from '../grammar/JavaParser';
import { ParseTreeWalker } from 'antlr4ng';
import { JavaASTListener } from '../listeners/JavaASTListener';

export function parseJavaToAST(content: string): void {
    const inputStream = CharStream.fromString(content);
    const lexer = new JavaLexer(inputStream as any);
    const tokenStream = new CommonTokenStream(lexer as any);
    const parser = new JavaParser(tokenStream as any);

    const compilationUnit = parser.compilationUnit();
    console.log('--- Parse Tree ---');
    console.log(compilationUnit.toStringTree(parser.ruleNames, parser));

    // Walk the parse tree and build the AST
    const metadata = {}; // Replace with actual metadata if available
    const listener = new JavaASTListener(metadata);
    ParseTreeWalker.DEFAULT.walk(listener as any, compilationUnit as any);

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