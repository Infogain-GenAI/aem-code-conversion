"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaASTListener = void 0;
class JavaASTListener {
    constructor(metadata) {
        this.ast = { type: 'CompilationUnit', children: [] };
        this.currentNode = this.ast;
        this.metadata = metadata;
    }
    getAST() {
        console.log('--- AST ---');
        console.log(this.ast);
        return this.ast;
    }
    // Extract package name
    enterPackageDeclaration(ctx) {
        console.log('enterPackageDeclaration');
        const packageName = ctx.qualifiedName().getText();
        this.metadata.packageName = packageName;
        console.log(`Extracted Package Name: ${packageName}`);
    }
    // Extract imports
    enterImportDeclaration(ctx) {
        console.log('enterImportDeclaration');
        const importName = ctx.qualifiedName().getText();
        this.metadata.imports.push(importName);
        console.log(`Extracted Import: ${importName}`);
    }
    // Extract class names
    enterNormalClassDeclaration(ctx) {
        console.log('enterNormalClassDeclaration');
        const className = ctx.Identifier().getText();
        this.metadata.classes.push(className);
        console.log(`Extracted Class: ${className}`);
    }
    // Extract method names
    enterMethodDeclaration(ctx) {
        console.log('enterMethodDeclaration');
        const methodName = ctx.Identifier().getText();
        this.metadata.javaMethods.push(methodName);
        console.log(`Extracted Method: ${methodName}`);
    }
    // Handle additional details if needed
    enterEveryRule(ctx) {
        // implement additional logic if needed
        console.log('enterEveryRule ' + ctx.getText());
        const node = { type: ctx.constructor.name.replace('Context', ''), children: [] };
        if (ctx.getText().trim() !== '') {
            node.text = ctx.getText();
        }
        this.currentNode.children.push(node);
        this.currentNode = node;
    }
    exitEveryRule(ctx) {
        // Debugging for rule exits, if necessary
        console.log('exitEveryRule ' + ctx.getText());
        if (this.currentNode.type === ctx.constructor.name.replace('Context', '')) {
            this.currentNode = this.ast; // Move back to the parent node
        }
    }
    visitTerminal(node) {
        // Debugging for terminal nodes, if necessary
        console.log('visitTerminal ' + node.getText());
    }
    visitErrorNode(node) {
        // Debugging for error nodes, if necessary
        console.log('visitErrorNode ' + node.getText());
    }
}
exports.JavaASTListener = JavaASTListener;
//# sourceMappingURL=JavaASTListener.js.map