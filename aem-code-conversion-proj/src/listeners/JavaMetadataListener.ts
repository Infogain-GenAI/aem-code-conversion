import { JavaListener } from "../grammar/JavaListener";
import * as JavaParser from "../grammar/JavaParser";
import { JavaMetadata, JavaClassMetadata, JavaMethodMetadata, JavaFieldMetadata } from '../types/JavaMetadata';
import { TerminalNode, ErrorNode, ParserRuleContext, Parser } from "antlr4ng";
import { LoggingService } from '../services/loggingService';
import { getModifiers } from "typescript";

const logger = LoggingService.getInstance();

export class JavaMetadataListener implements JavaListener {
    private metadata: JavaMetadata;
    private currentClass: JavaClassMetadata | null = null;
    private classes: string[] = [];

    constructor(metadata: JavaMetadata) {
        this.metadata = metadata;
    }

    // visitTerminal(node: TerminalNode): void {
    //     /

    // }

    // implement the visitTerminal method
    visitTerminal(node: TerminalNode): void {
        //console.log(`Method visitTerminal ${node.getText()}`);
       
    }


    visitErrorNode(node: ErrorNode): void {
        //console.log(`Method not implemented. visitErrorNode ${node.getText()}`);
        throw new Error("Method not implemented.");
    }
    enterEveryRule(ctx: ParserRuleContext): void {
       // console.log(`Entering rule: enterEveryRule ${ctx.getText()}`);
       // console.log(`Entering rule: ${ctx.getText()}`);
    }
    exitEveryRule(ctx: ParserRuleContext): void {
       // console.log(`Exiting rule: exitEveryRule ${ctx.getText()}`);
        //console.log(`Exiting rule: ${ctx.constructor.name}`);
    }

    enterImportDeclaration(ctx: JavaParser.ImportDeclarationContext): void {
        const qualifiedName = ctx.qualifiedName();
        if (qualifiedName) {
            const importPath = qualifiedName.getText();
            if (importPath) {
                this.metadata.imports.push(importPath);
            }
        }
    }

    enterPackageDeclaration(ctx: JavaParser.PackageDeclarationContext): void {
        //console.log('enterPackageDeclaration');
        const packageName = ctx.qualifiedName().getText();
        if (packageName) {
            this.metadata.packageName = (packageName);
        }
    }

    // handle class level fields
    enterFieldDeclaration(ctx: JavaParser.FieldDeclarationContext): void {
        //console.log('enterFieldDeclaration');
        const fieldMetadata: JavaFieldMetadata = {
            fieldName: ctx.variableDeclarators()?.variableDeclarator()?.map(varDec => varDec.variableDeclaratorId().getText()).join(', ') || '',
            modifiers: ctx.getRuleContexts(JavaParser.ModifierContext).map(mod => mod.getText()),
            fieldType: ctx.typeSpec()?.getText() || '',
            annotations: ctx.getRuleContexts(JavaParser.AnnotationContext).map(ann => ann.getText())
        };
        console.log("Field Metadata -----------------------" + fieldMetadata.fieldName + " " + fieldMetadata.modifiers + " " + fieldMetadata.annotations);
        // Add the field to the last class
        if (this.metadata.classes.length > 0) {
            this.metadata.classes[this.metadata.classes.length - 1].fields.push(fieldMetadata);
        }        
    }

    enterClassDeclaration(ctx: JavaParser.ClassDeclarationContext): void {
        logger.logDebug(`Class found: ${ctx.Identifier().getText()}`);
        const className = ctx.Identifier().getText();
        const classMetadata: JavaClassMetadata = {
            className,
            modifiers: [],
            superclass: '',
            interfaces: [],
            annotations: ctx.classBody()?.classBodyDeclaration()?.map(ann => ann.getText()) || [],
            fields: [],
            methods: [],
            constructors: []
        };
        classMetadata.className = className;
        // Handle superclass and interfaces
        if(ctx.typeSpec())
            {
                const superclass = ctx.typeSpec()?.getText();
                classMetadata.superclass = superclass;
                console.log("Superclass for class ------------- " + superclass);
            }

        // Handle multiple interfaces
        if (ctx.typeList()) {
            const interfaces = ctx.typeList()?.typeSpec().map(type => type.getText()) || [];
            classMetadata.interfaces = interfaces;
            console.log("Interfaces for class ------------- " + interfaces);
        }

        // Handle multiple modifiers for class
        
        

        // Handle multiple annotations for class
        // for (const ann of ctx.getRuleContexts(JavaParser.AnnotationContext)) {
        //     console.log("annotations for class  ------------- " + ann.getText());
        //     classMetadata.annotations.push(ann.getText());
        // }
        

         // add the class to the metadata
        if (this.metadata.classes.length > 0) {
            this.metadata.classes.push(classMetadata);
        }

        //console.log("Class Metadata -----------------------" + classMetadata.className + " " + classMetadata.modifiers + " " + classMetadata.annotations);
        this.metadata.classes.push(classMetadata);

    }

    enterClassOrInterfaceModifier(ctx: JavaParser.ClassOrInterfaceModifierContext): void {
        console.log("inside enterClassOrInterfaceModifier" + ctx.getText());
        if (this.currentClass) {
            this.currentClass.modifiers.push(ctx.getText());
            console.log("Modifier for class ------------- " + ctx.getText());
        }
    }

    enterMethodDeclaration(ctx: JavaParser.MethodDeclarationContext): void {
        logger.logDebug(`Method found: enterMethodDeclaration ${ctx.Identifier().getText()}`);
        const methodName = ctx.Identifier().getText();
        const methodMetadata: JavaMethodMetadata = {
            methodName,
            modifiers: [],
            returnType: ctx.typeSpec()?.classOrInterfaceType()?.getText() || 'void',
            parameters: ctx.formalParameters()?.formalParameterList()?.formalParameter()?.map(param => ({
                parameterName: param.variableDeclaratorId()?.getText() || '',
                parameterType: param.typeSpec()?.getText() || ''
            })) || [],
            annotations: ctx.getRuleContexts(JavaParser.AnnotationContext).map(ann => ann.getText()),
            start: ctx.start?.line || -1,
            end: ctx.stop ? ctx.stop.line : -1
        };

        // Handle multiple modifiers for method
        const modifiers: string[] = ctx.getRuleContexts(JavaParser.ModifierContext).map((mod: JavaParser.ModifierContext) => mod.getText());
        console.log("modifiers for method  ------------- " + modifiers.length); 
        for (const mod of modifiers) {
            console.log("Modifier for method ------------- " + mod);
            methodMetadata.modifiers.push(mod);
        }

        // Handle multiple annotations for method
        for (const ann of ctx.getRuleContexts(JavaParser.AnnotationContext).map(ann => ann.getText())) {
            console.log("annotations for method  ------------- " + ann);
            methodMetadata.annotations.push(ann);
        }

        // Add parameters to methodMetadata
        const formalParameters = ctx.formalParameters()?.formalParameterList()?.formalParameter().map(param => ({
            parameterName: param.variableDeclaratorId()?.getText() || '',
            parameterType: param.typeSpec()?.getText() || ''
        })) || [];
        if (formalParameters) {
            for (let i = 0; i < formalParameters.length; i++) {
                const paramList = ctx.formalParameters()?.formalParameterList();
                if (paramList) {
                    const param = paramList.formalParameter(i);
                    methodMetadata.parameters.push({
                        parameterName: param?.variableDeclaratorId().getText() || '',
                        parameterType: param?.typeSpec()?.getText() || ''
                    });
                }
            }
        }

        // Add the method to the last class
        if (this.metadata.classes.length > 0) {
            this.metadata.classes[this.metadata.classes.length - 1].methods.push(methodMetadata);
        }

        // Add method to global javaMethods
        this.metadata.javaMethods.push(methodMetadata);
    }


    
}

//}

// enterMethodDeclaration(ctx: JavaParser.MethodDeclarationContext): void {
//     if (!this.currentClass) return;

//     const methodName = ctx.methodHeader()?.methodDeclarator()?.getText();
//     if (methodName) {
//         const methodMetadata: JavaMethodMetadata = {
//             methodName,
//             modifiers: ctx.methodModifier()?.map(mod => mod.getText()) || [],
//             returnType: ctx.typeTypeOrVoid()?.getText() || 'void',
//             parameters: ctx.formalParameters()?.formalParameterList()?.formalParameter()?.map(param => ({
//                 parameterName: param.variableDeclaratorId()?.getText() || '',
//                 parameterType: param.typeType()?.getText() || ''
//             })) || [],
//             annotations: [],
//             start: ctx.start.line,
//             end: ctx.stop ? ctx.stop.line : -1
//         };

//         this.currentClass.methods.push(methodMetadata);
//         this.metadata.javaMethods.push(methodMetadata);
//     }
// }

// enterMethodDeclaration(ctx: JavaParser.MethodDeclarationContext): void {
//     const methodName = ctx.identifier().getText();
//     let annotations;
//     const methodMetadata: JavaMethodMetadata = {
//         methodName,
//         modifiers: ctx.qualifiedNameList()?.getText().split(' ') || [],
//         returnType: ctx.getTypedRuleContext(JavaParser.TypeTypeContext, 0).getText(),
//         parameters: ctx.formalParameters()?.formalParameterList()?.formalParameter_list().map(param => ({parameterName: param.variableDeclaratorId().getText(), parameterType: param.typeType().getText()})) || [],
//         annotations: ctx.identifier().getTypedRuleContext(JavaParser.AnnotationContext, 0).getText().split(' ') || [],
//         start: ctx.start.line,
//         end: ctx.stop ? ctx.stop.line : -1
//     };

//     // Add the method to the last class
//     if (this.metadata.classes.length > 0) {
//         this.metadata.classes[this.metadata.classes.length - 1].methods.push(methodMetadata);
//     }

//     // Add parameters to methodMetadata
//     for(let i = 0; i < ctx.formalParameters().formalParameterList().formalParameter_list().length; i++) {
//         const param = ctx.formalParameters().formalParameterList().formalParameter(i);
//         methodMetadata.parameters.push({
//             parameterName: param.variableDeclaratorId().getText(),
//             parameterType: param.typeType().getText()
//         });
//     }

//     // Add method to global javaMethods
//     this.metadata.javaMethods.push(methodMetadata);
// }