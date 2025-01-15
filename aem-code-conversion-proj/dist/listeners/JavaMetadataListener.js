"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavaMetadataListener = void 0;
const JavaParser = __importStar(require("../grammar/JavaParser"));
const loggingService_1 = require("../services/loggingService");
const logger = loggingService_1.LoggingService.getInstance();
class JavaMetadataListener {
    constructor(metadata) {
        this.currentClass = null;
        this.classes = [];
        this.metadata = metadata;
    }
    // visitTerminal(node: TerminalNode): void {
    //     /
    // }
    // implement the visitTerminal method
    visitTerminal(node) {
        //console.log(`Method visitTerminal ${node.getText()}`);
    }
    visitErrorNode(node) {
        //console.log(`Method not implemented. visitErrorNode ${node.getText()}`);
        throw new Error("Method not implemented.");
    }
    enterEveryRule(ctx) {
        // console.log(`Entering rule: enterEveryRule ${ctx.getText()}`);
        // console.log(`Entering rule: ${ctx.getText()}`);
    }
    exitEveryRule(ctx) {
        // console.log(`Exiting rule: exitEveryRule ${ctx.getText()}`);
        //console.log(`Exiting rule: ${ctx.constructor.name}`);
    }
    enterImportDeclaration(ctx) {
        const qualifiedName = ctx.qualifiedName();
        if (qualifiedName) {
            const importPath = qualifiedName.getText();
            if (importPath) {
                this.metadata.imports.push(importPath);
            }
        }
    }
    enterPackageDeclaration(ctx) {
        //console.log('enterPackageDeclaration');
        const packageName = ctx.qualifiedName().getText();
        if (packageName) {
            this.metadata.packageName = (packageName);
        }
    }
    // handle class level fields
    enterFieldDeclaration(ctx) {
        var _a, _b, _c;
        //console.log('enterFieldDeclaration');
        const fieldMetadata = {
            fieldName: ((_b = (_a = ctx.variableDeclarators()) === null || _a === void 0 ? void 0 : _a.variableDeclarator()) === null || _b === void 0 ? void 0 : _b.map(varDec => varDec.variableDeclaratorId().getText()).join(', ')) || '',
            modifiers: ctx.getRuleContexts(JavaParser.ModifierContext).map(mod => mod.getText()),
            fieldType: ((_c = ctx.typeSpec()) === null || _c === void 0 ? void 0 : _c.getText()) || '',
            annotations: ctx.getRuleContexts(JavaParser.AnnotationContext).map(ann => ann.getText())
        };
        console.log("Field Metadata -----------------------" + fieldMetadata.fieldName + " " + fieldMetadata.modifiers + " " + fieldMetadata.annotations);
        // Add the field to the last class
        if (this.metadata.classes.length > 0) {
            this.metadata.classes[this.metadata.classes.length - 1].fields.push(fieldMetadata);
        }
    }
    enterClassDeclaration(ctx) {
        var _a, _b, _c, _d;
        logger.logDebug(`Class found: ${ctx.Identifier().getText()}`);
        const className = ctx.Identifier().getText();
        const classMetadata = {
            className,
            modifiers: [],
            superclass: '',
            interfaces: [],
            annotations: ((_b = (_a = ctx.classBody()) === null || _a === void 0 ? void 0 : _a.classBodyDeclaration()) === null || _b === void 0 ? void 0 : _b.map(ann => ann.getText())) || [],
            fields: [],
            methods: [],
            constructors: []
        };
        classMetadata.className = className;
        // Handle superclass and interfaces
        if (ctx.typeSpec()) {
            const superclass = (_c = ctx.typeSpec()) === null || _c === void 0 ? void 0 : _c.getText();
            classMetadata.superclass = superclass;
            console.log("Superclass for class ------------- " + superclass);
        }
        // Handle multiple interfaces
        if (ctx.typeList()) {
            const interfaces = ((_d = ctx.typeList()) === null || _d === void 0 ? void 0 : _d.typeSpec().map(type => type.getText())) || [];
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
    enterClassOrInterfaceModifier(ctx) {
        console.log("inside enterClassOrInterfaceModifier" + ctx.getText());
        if (this.currentClass) {
            this.currentClass.modifiers.push(ctx.getText());
            console.log("Modifier for class ------------- " + ctx.getText());
        }
    }
    enterMethodDeclaration(ctx) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        logger.logDebug(`Method found: enterMethodDeclaration ${ctx.Identifier().getText()}`);
        const methodName = ctx.Identifier().getText();
        const methodMetadata = {
            methodName,
            modifiers: [],
            returnType: ((_b = (_a = ctx.typeSpec()) === null || _a === void 0 ? void 0 : _a.classOrInterfaceType()) === null || _b === void 0 ? void 0 : _b.getText()) || 'void',
            parameters: ((_e = (_d = (_c = ctx.formalParameters()) === null || _c === void 0 ? void 0 : _c.formalParameterList()) === null || _d === void 0 ? void 0 : _d.formalParameter()) === null || _e === void 0 ? void 0 : _e.map(param => {
                var _a, _b;
                return ({
                    parameterName: ((_a = param.variableDeclaratorId()) === null || _a === void 0 ? void 0 : _a.getText()) || '',
                    parameterType: ((_b = param.typeSpec()) === null || _b === void 0 ? void 0 : _b.getText()) || ''
                });
            })) || [],
            annotations: ctx.getRuleContexts(JavaParser.AnnotationContext).map(ann => ann.getText()),
            start: ((_f = ctx.start) === null || _f === void 0 ? void 0 : _f.line) || -1,
            end: ctx.stop ? ctx.stop.line : -1
        };
        // Handle multiple modifiers for method
        const modifiers = ctx.getRuleContexts(JavaParser.ModifierContext).map((mod) => mod.getText());
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
        const formalParameters = ((_h = (_g = ctx.formalParameters()) === null || _g === void 0 ? void 0 : _g.formalParameterList()) === null || _h === void 0 ? void 0 : _h.formalParameter().map(param => {
            var _a, _b;
            return ({
                parameterName: ((_a = param.variableDeclaratorId()) === null || _a === void 0 ? void 0 : _a.getText()) || '',
                parameterType: ((_b = param.typeSpec()) === null || _b === void 0 ? void 0 : _b.getText()) || ''
            });
        })) || [];
        if (formalParameters) {
            for (let i = 0; i < formalParameters.length; i++) {
                const paramList = (_j = ctx.formalParameters()) === null || _j === void 0 ? void 0 : _j.formalParameterList();
                if (paramList) {
                    const param = paramList.formalParameter(i);
                    methodMetadata.parameters.push({
                        parameterName: (param === null || param === void 0 ? void 0 : param.variableDeclaratorId().getText()) || '',
                        parameterType: ((_k = param === null || param === void 0 ? void 0 : param.typeSpec()) === null || _k === void 0 ? void 0 : _k.getText()) || ''
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
exports.JavaMetadataListener = JavaMetadataListener;
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
//# sourceMappingURL=JavaMetadataListener.js.map