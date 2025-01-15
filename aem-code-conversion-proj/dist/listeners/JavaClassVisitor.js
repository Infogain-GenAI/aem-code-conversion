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
exports.JavaClassVisitor = void 0;
const JavaVisitor_1 = require("../grammar/JavaVisitor");
const JavaParser = __importStar(require("../grammar/JavaParser"));
class JavaClassVisitor extends JavaVisitor_1.JavaVisitor {
    constructor() {
        super(...arguments);
        this.classes = [];
        this.visitClassDeclaration = (ctx) => {
            var _a, _b, _c, _d;
            const className = ctx.Identifier().getText();
            const classMetadata = {
                className,
                modifiers: [],
                superclass: null,
                interfaces: []
            };
            // Handle superclass
            if (ctx.typeSpec()) {
                const superclass = ((_a = ctx.typeSpec()) === null || _a === void 0 ? void 0 : _a.getText()) || null;
                classMetadata.superclass = superclass;
            }
            // Handle interfaces
            if (ctx.typeList()) {
                const interfaces = ctx.typeList() ? ((_b = ctx.typeList()) === null || _b === void 0 ? void 0 : _b.typeSpec().map(type => type.getText())) || [] : [];
                classMetadata.interfaces = interfaces;
            }
            // Handle modifiers
            const modifiers = ((_d = (_c = ctx.parent) === null || _c === void 0 ? void 0 : _c.children) === null || _d === void 0 ? void 0 : _d.filter(child => child instanceof JavaParser.ClassOrInterfaceModifierContext).map(modifierCtx => modifierCtx.getText())) || [];
            classMetadata.modifiers = modifiers;
            modifiers.forEach(modifier => { console.log('------------------ ' + modifier); });
            this.classes.push(classMetadata);
            console.log('Class metadata:', classMetadata);
            return classMetadata;
        };
    }
}
exports.JavaClassVisitor = JavaClassVisitor;
//# sourceMappingURL=JavaClassVisitor.js.map