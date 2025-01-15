// FILEPATH: /d:/my-typescript-project/src/JavaCSTGenerator.ts
import { CharStream, CommonTokenStream, TokenSource, ParseTreeWalker } from 'antlr4ng';
import { JavaLexer }from '../grammar/JavaLexer';
import { MethodDeclarationContext, ClassDeclarationContext, JavaParser } from '../grammar/JavaParser';


import { JavaListener } from "../grammar/JavaListener";

import { TerminalNode, ErrorNode,ParserRuleContext  } from "antlr4ng";

class JavaCSTListener implements JavaListener  {
    visitTerminal(node: TerminalNode): void {
            throw new Error("Method not implemented.");
        }
        visitErrorNode(node: ErrorNode): void {
            throw new Error("Method not implemented.");
        }
        enterEveryRule(ctx: ParserRuleContext): void {
            console.log(ctx.getText());
        }
        exitEveryRule(ctx: ParserRuleContext): void {
            console.log(ctx.getText());
        }

        enterMethodDeclaration(ctx: MethodDeclarationContext): void {
            console.log("Found method:", ctx.Identifier().getText());
          }
        
          enterClassDeclaration(ctx: ClassDeclarationContext): void {
            console.log("Found class:", ctx.Identifier().getText()); ;
          }

    
}

function generateCST(javaCode: string) {

    
    const inputStream = CharStream.fromString(javaCode);
    console.log("inputStream----------------------"+inputStream);
    const lexer = new JavaLexer(inputStream as any);
    //console.log("lexer----------------------"+lexer);
    const tokenStream = new CommonTokenStream(lexer as any);
    //console.log("tokenStream----------------------"+tokenStream);
    const parser = new JavaParser(tokenStream as any);
    const listener = new JavaCSTListener();
    //parser.addParseListener(listener as any);
    const tree = parser.compilationUnit();
    const walker = new ParseTreeWalker();
    
    //parser.compilationUnit().enterRule(listener as any);

    //walk the tree
    //walker.walk(listener as any, tree as any);
    //TreeWalker.DEFAULT.walk(listener as any, tree as any);

    // walk the tree
    walker.walk(listener as any, tree as any);
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