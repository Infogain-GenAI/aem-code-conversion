import { getTrailingCommentRanges } from 'typescript';
import { JavaVisitor } from '../grammar/JavaVisitor';
import * as JavaParser from '../grammar/JavaParser';

interface JavaClassMetadata {
    className: string;
    modifiers: string[];
    superclass: string | null;
    interfaces: string[];
}

export class JavaClassVisitor extends JavaVisitor<any> {
    public classes: JavaClassMetadata[] = [];

    visitClassDeclaration = (ctx: JavaParser.ClassDeclarationContext): JavaClassMetadata => {
        const className = ctx.Identifier().getText();
        const classMetadata: JavaClassMetadata = {
            className,
            modifiers: [],
            superclass: null,
            interfaces: []
        };

        // Handle superclass
        if (ctx.typeSpec()) {
            const superclass = ctx.typeSpec()?.getText() || null;
            classMetadata.superclass = superclass;
        }

        // Handle interfaces
        if (ctx.typeList()) {
            const interfaces = ctx.typeList() ? ctx.typeList()?.typeSpec().map(type => type.getText()) || [] : [];
            classMetadata.interfaces = interfaces;
        }

        // Handle modifiers
        const modifiers = ctx.parent?.children?.filter(child => child instanceof JavaParser.ClassOrInterfaceModifierContext)
            .map(modifierCtx => modifierCtx.getText()) || [];
        classMetadata.modifiers = modifiers;
        modifiers.forEach(modifier => { console.log('------------------ ' + modifier)  }        )

        this.classes.push(classMetadata);
        console.log('Class metadata:', classMetadata);

        return classMetadata;
    }
}