// FILEPATH: /d:/myNewTSProject/src/utils/JavaASTListener.ts
import { JavaListener }from '../grammar/JavaListener'; // Adjust the path as needed
import { PackageDeclarationContext, ImportDeclarationContext, ClassDeclarationContext, MethodDeclarationContext } from '../grammar/JavaParser'; // Adjust the path as needed

import { TerminalNode, ErrorNode,ParserRuleContext } from 'antlr4ng'; 


interface ASTNode {
    type: string;
    children: ASTNode[];
    text?: string;
}

export class JavaASTListener implements JavaListener {
    private ast: ASTNode = { type: 'CompilationUnit', children: [] };
    private currentNode: ASTNode = this.ast;
    private metadata: any;

    constructor(metadata: any) {
        this.metadata = metadata;
    }

    getAST(): ASTNode {
        console.log('--- AST ---');
        console.log(this.ast);

        return this.ast;
    }

    // Extract package name
    enterPackageDeclaration(ctx: PackageDeclarationContext): void {
        console.log('enterPackageDeclaration');
        const packageName = ctx.qualifiedName().getText();
        this.metadata.packageName = packageName;
        console.log(`Extracted Package Name: ${packageName}`);
    }

    // Extract imports
    enterImportDeclaration(ctx: ImportDeclarationContext): void {
        console.log('enterImportDeclaration');
        const importName = ctx.qualifiedName().getText();
        this.metadata.imports.push(importName);
        console.log(`Extracted Import: ${importName}`);
    }

    // Extract class names
    enterNormalClassDeclaration(ctx: ClassDeclarationContext): void {
        console.log('enterNormalClassDeclaration');
        const className = ctx.Identifier().getText();
        this.metadata.classes.push(className);
        console.log(`Extracted Class: ${className}`);
    }

    // Extract method names
    enterMethodDeclaration(ctx: MethodDeclarationContext): void {
        console.log('enterMethodDeclaration');
        const methodName = ctx.Identifier().getText();
        this.metadata.javaMethods.push(methodName);
        console.log(`Extracted Method: ${methodName}`);
    }

    // Handle additional details if needed
    enterEveryRule(ctx: ParserRuleContext): void {
        // implement additional logic if needed
        console.log('enterEveryRule ' + ctx.getText());
        const node: ASTNode = { type: ctx.constructor.name.replace('Context', ''), children: [] };
        if (ctx.getText().trim() !== '') {
            node.text = ctx.getText();
        }
        this.currentNode.children.push(node);
        this.currentNode = node;
    }

    exitEveryRule(ctx: ParserRuleContext): void {
        // Debugging for rule exits, if necessary
        console.log('exitEveryRule ' + ctx.getText());
        if (this.currentNode.type === ctx.constructor.name.replace('Context', '')) {
            this.currentNode = this.ast; // Move back to the parent node
        }
    }

     visitTerminal(node: TerminalNode): void {
         // Debugging for terminal nodes, if necessary
         console.log('visitTerminal ' + node.getText());
    }

     visitErrorNode(node: ErrorNode): void {
         // Debugging for error nodes, if necessary
            console.log('visitErrorNode ' + node.getText());
     }
    
}

