// Generated from ./src/grammar/Java.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { CompilationUnitContext } from "./JavaParser.js";
import { PackageDeclarationContext } from "./JavaParser.js";
import { ImportDeclarationContext } from "./JavaParser.js";
import { TypeDeclarationContext } from "./JavaParser.js";
import { ModifierContext } from "./JavaParser.js";
import { ClassOrInterfaceModifierContext } from "./JavaParser.js";
import { VariableModifierContext } from "./JavaParser.js";
import { ClassDeclarationContext } from "./JavaParser.js";
import { TypeParametersContext } from "./JavaParser.js";
import { TypeParameterContext } from "./JavaParser.js";
import { TypeBoundContext } from "./JavaParser.js";
import { EnumDeclarationContext } from "./JavaParser.js";
import { EnumConstantsContext } from "./JavaParser.js";
import { EnumConstantContext } from "./JavaParser.js";
import { EnumBodyDeclarationsContext } from "./JavaParser.js";
import { InterfaceDeclarationContext } from "./JavaParser.js";
import { TypeListContext } from "./JavaParser.js";
import { ClassBodyContext } from "./JavaParser.js";
import { InterfaceBodyContext } from "./JavaParser.js";
import { ClassBodyDeclarationContext } from "./JavaParser.js";
import { MemberDeclarationContext } from "./JavaParser.js";
import { MethodDeclarationContext } from "./JavaParser.js";
import { GenericMethodDeclarationContext } from "./JavaParser.js";
import { ConstructorDeclarationContext } from "./JavaParser.js";
import { GenericConstructorDeclarationContext } from "./JavaParser.js";
import { FieldDeclarationContext } from "./JavaParser.js";
import { InterfaceBodyDeclarationContext } from "./JavaParser.js";
import { InterfaceMemberDeclarationContext } from "./JavaParser.js";
import { ConstDeclarationContext } from "./JavaParser.js";
import { ConstantDeclaratorContext } from "./JavaParser.js";
import { InterfaceMethodDeclarationContext } from "./JavaParser.js";
import { GenericInterfaceMethodDeclarationContext } from "./JavaParser.js";
import { VariableDeclaratorsContext } from "./JavaParser.js";
import { VariableDeclaratorContext } from "./JavaParser.js";
import { VariableDeclaratorIdContext } from "./JavaParser.js";
import { VariableInitializerContext } from "./JavaParser.js";
import { ArrayInitializerContext } from "./JavaParser.js";
import { EnumConstantNameContext } from "./JavaParser.js";
import { TypeSpecContext } from "./JavaParser.js";
import { ClassOrInterfaceTypeContext } from "./JavaParser.js";
import { PrimitiveTypeContext } from "./JavaParser.js";
import { TypeArgumentsContext } from "./JavaParser.js";
import { TypeArgumentContext } from "./JavaParser.js";
import { QualifiedNameListContext } from "./JavaParser.js";
import { FormalParametersContext } from "./JavaParser.js";
import { FormalParameterListContext } from "./JavaParser.js";
import { FormalParameterContext } from "./JavaParser.js";
import { LastFormalParameterContext } from "./JavaParser.js";
import { MethodBodyContext } from "./JavaParser.js";
import { ConstructorBodyContext } from "./JavaParser.js";
import { QualifiedNameContext } from "./JavaParser.js";
import { LiteralContext } from "./JavaParser.js";
import { AnnotationContext } from "./JavaParser.js";
import { AnnotationNameContext } from "./JavaParser.js";
import { ElementValuePairsContext } from "./JavaParser.js";
import { ElementValuePairContext } from "./JavaParser.js";
import { ElementValueContext } from "./JavaParser.js";
import { ElementValueArrayInitializerContext } from "./JavaParser.js";
import { AnnotationTypeDeclarationContext } from "./JavaParser.js";
import { AnnotationTypeBodyContext } from "./JavaParser.js";
import { AnnotationTypeElementDeclarationContext } from "./JavaParser.js";
import { AnnotationTypeElementRestContext } from "./JavaParser.js";
import { AnnotationMethodOrConstantRestContext } from "./JavaParser.js";
import { AnnotationMethodRestContext } from "./JavaParser.js";
import { AnnotationConstantRestContext } from "./JavaParser.js";
import { DefaultValueContext } from "./JavaParser.js";
import { BlockContext } from "./JavaParser.js";
import { BlockStatementContext } from "./JavaParser.js";
import { LocalVariableDeclarationStatementContext } from "./JavaParser.js";
import { LocalVariableDeclarationContext } from "./JavaParser.js";
import { StatementContext } from "./JavaParser.js";
import { CatchClauseContext } from "./JavaParser.js";
import { CatchTypeContext } from "./JavaParser.js";
import { FinallyBlockContext } from "./JavaParser.js";
import { ResourceSpecificationContext } from "./JavaParser.js";
import { ResourcesContext } from "./JavaParser.js";
import { ResourceContext } from "./JavaParser.js";
import { SwitchBlockStatementGroupContext } from "./JavaParser.js";
import { SwitchLabelContext } from "./JavaParser.js";
import { ForControlContext } from "./JavaParser.js";
import { ForInitContext } from "./JavaParser.js";
import { EnhancedForControlContext } from "./JavaParser.js";
import { ForUpdateContext } from "./JavaParser.js";
import { ParExpressionContext } from "./JavaParser.js";
import { ExpressionListContext } from "./JavaParser.js";
import { StatementExpressionContext } from "./JavaParser.js";
import { ConstantExpressionContext } from "./JavaParser.js";
import { ExpressionContext } from "./JavaParser.js";
import { PrimaryContext } from "./JavaParser.js";
import { CreatorContext } from "./JavaParser.js";
import { CreatedNameContext } from "./JavaParser.js";
import { InnerCreatorContext } from "./JavaParser.js";
import { ArrayCreatorRestContext } from "./JavaParser.js";
import { ClassCreatorRestContext } from "./JavaParser.js";
import { ExplicitGenericInvocationContext } from "./JavaParser.js";
import { NonWildcardTypeArgumentsContext } from "./JavaParser.js";
import { TypeArgumentsOrDiamondContext } from "./JavaParser.js";
import { NonWildcardTypeArgumentsOrDiamondContext } from "./JavaParser.js";
import { SuperSuffixContext } from "./JavaParser.js";
import { ExplicitGenericInvocationSuffixContext } from "./JavaParser.js";
import { ArgumentsContext } from "./JavaParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `JavaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class JavaVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `JavaParser.compilationUnit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.packageDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.importDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.modifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitModifier?: (ctx: ModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classOrInterfaceModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceModifier?: (ctx: ClassOrInterfaceModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableModifier?: (ctx: VariableModifierContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameters?: (ctx: TypeParametersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeParameter?: (ctx: TypeParameterContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeBound`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeBound?: (ctx: TypeBoundContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumConstants`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstants?: (ctx: EnumConstantsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumConstant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstant?: (ctx: EnumConstantContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumBodyDeclarations`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeList?: (ctx: TypeListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassBody?: (ctx: ClassBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classBodyDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.memberDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.methodDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.genericMethodDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericMethodDeclaration?: (ctx: GenericMethodDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constructorDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.genericConstructorDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericConstructorDeclaration?: (ctx: GenericConstructorDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.fieldDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceBodyDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceBodyDeclaration?: (ctx: InterfaceBodyDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceMemberDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstDeclaration?: (ctx: ConstDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constantDeclarator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantDeclarator?: (ctx: ConstantDeclaratorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.interfaceMethodDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.genericInterfaceMethodDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGenericInterfaceMethodDeclaration?: (ctx: GenericInterfaceMethodDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableDeclarators`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarators?: (ctx: VariableDeclaratorsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableDeclarator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableDeclaratorId`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.variableInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.arrayInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enumConstantName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeSpec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeSpec?: (ctx: TypeSpecContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classOrInterfaceType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.primitiveType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeArgument`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.qualifiedNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedNameList?: (ctx: QualifiedNameListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.formalParameters`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameters?: (ctx: FormalParametersContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.formalParameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.formalParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFormalParameter?: (ctx: FormalParameterContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.lastFormalParameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.methodBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMethodBody?: (ctx: MethodBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constructorBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.qualifiedName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitQualifiedName?: (ctx: QualifiedNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotation?: (ctx: AnnotationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationName?: (ctx: AnnotationNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValuePairs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValuePairs?: (ctx: ElementValuePairsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValuePair`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValuePair?: (ctx: ElementValuePairContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValue?: (ctx: ElementValueContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.elementValueArrayInitializer`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeBody`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeElementDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationTypeElementRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationTypeElementRest?: (ctx: AnnotationTypeElementRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationMethodOrConstantRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationMethodOrConstantRest?: (ctx: AnnotationMethodOrConstantRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationMethodRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationMethodRest?: (ctx: AnnotationMethodRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.annotationConstantRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAnnotationConstantRest?: (ctx: AnnotationConstantRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.defaultValue`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDefaultValue?: (ctx: DefaultValueContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.blockStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockStatement?: (ctx: BlockStatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.localVariableDeclarationStatement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.localVariableDeclaration`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.catchClause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchClause?: (ctx: CatchClauseContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.catchType`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCatchType?: (ctx: CatchTypeContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.finallyBlock`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFinallyBlock?: (ctx: FinallyBlockContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.resourceSpecification`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.resources`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResources?: (ctx: ResourcesContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.resource`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitResource?: (ctx: ResourceContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.switchBlockStatementGroup`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.switchLabel`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.forControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForControl?: (ctx: ForControlContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.forInit`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForInit?: (ctx: ForInitContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.enhancedForControl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnhancedForControl?: (ctx: EnhancedForControlContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.forUpdate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitForUpdate?: (ctx: ForUpdateContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.parExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParExpression?: (ctx: ParExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.expressionList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpressionList?: (ctx: ExpressionListContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.statementExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatementExpression?: (ctx: StatementExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.constantExpression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.primary`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrimary?: (ctx: PrimaryContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.creator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreator?: (ctx: CreatorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.createdName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCreatedName?: (ctx: CreatedNameContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.innerCreator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInnerCreator?: (ctx: InnerCreatorContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.arrayCreatorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayCreatorRest?: (ctx: ArrayCreatorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.classCreatorRest`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitClassCreatorRest?: (ctx: ClassCreatorRestContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.explicitGenericInvocation`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicitGenericInvocation?: (ctx: ExplicitGenericInvocationContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.nonWildcardTypeArguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonWildcardTypeArguments?: (ctx: NonWildcardTypeArgumentsContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.typeArgumentsOrDiamond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.nonWildcardTypeArgumentsOrDiamond`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNonWildcardTypeArgumentsOrDiamond?: (ctx: NonWildcardTypeArgumentsOrDiamondContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.superSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSuperSuffix?: (ctx: SuperSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.explicitGenericInvocationSuffix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExplicitGenericInvocationSuffix?: (ctx: ExplicitGenericInvocationSuffixContext) => Result;
    /**
     * Visit a parse tree produced by `JavaParser.arguments`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArguments?: (ctx: ArgumentsContext) => Result;
}

