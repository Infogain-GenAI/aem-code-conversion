"use strict";
// Generated from ./src/grammar/Java8.g4 by ANTLR 4.13.1
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
exports.InterfaceTypeListContext = exports.SuperinterfacesContext = exports.SuperclassContext = exports.TypeParameterListContext = exports.TypeParametersContext = exports.ClassModifierContext = exports.NormalClassDeclarationContext = exports.ClassDeclarationContext = exports.TypeDeclarationContext = exports.StaticImportOnDemandDeclarationContext = exports.SingleStaticImportDeclarationContext = exports.TypeImportOnDemandDeclarationContext = exports.SingleTypeImportDeclarationContext = exports.ImportDeclarationContext = exports.PackageModifierContext = exports.PackageDeclarationContext = exports.CompilationUnitContext = exports.AmbiguousNameContext = exports.MethodNameContext = exports.ExpressionNameContext = exports.PackageOrTypeNameContext = exports.TypeNameContext = exports.PackageNameContext = exports.WildcardBoundsContext = exports.WildcardContext = exports.TypeArgumentContext = exports.TypeArgumentListContext = exports.TypeArgumentsContext = exports.AdditionalBoundContext = exports.TypeBoundContext = exports.TypeParameterModifierContext = exports.TypeParameterContext = exports.DimsContext = exports.ArrayTypeContext = exports.TypeVariableContext = exports.InterfaceType_lfno_classOrInterfaceTypeContext = exports.InterfaceType_lf_classOrInterfaceTypeContext = exports.InterfaceTypeContext = exports.ClassType_lfno_classOrInterfaceTypeContext = exports.ClassType_lf_classOrInterfaceTypeContext = exports.ClassTypeContext = exports.ClassOrInterfaceTypeContext = exports.ReferenceTypeContext = exports.FloatingPointTypeContext = exports.IntegralTypeContext = exports.NumericTypeContext = exports.PrimitiveTypeContext = exports.TypeContext = exports.LiteralContext = exports.Java8Parser = void 0;
exports.EnumBodyDeclarationsContext = exports.EnumConstantModifierContext = exports.EnumConstantContext = exports.EnumConstantListContext = exports.EnumBodyContext = exports.EnumDeclarationContext = exports.ExplicitConstructorInvocationContext = exports.ConstructorBodyContext = exports.SimpleTypeNameContext = exports.ConstructorDeclaratorContext = exports.ConstructorModifierContext = exports.ConstructorDeclarationContext = exports.StaticInitializerContext = exports.InstanceInitializerContext = exports.MethodBodyContext = exports.ExceptionTypeContext = exports.ExceptionTypeListContext = exports.Throws_Context = exports.ReceiverParameterContext = exports.LastFormalParameterContext = exports.VariableModifierContext = exports.FormalParameterContext = exports.FormalParametersContext = exports.FormalParameterListContext = exports.MethodDeclaratorContext = exports.ResultContext = exports.MethodHeaderContext = exports.MethodModifierContext = exports.MethodDeclarationContext = exports.UnannArrayTypeContext = exports.UnannTypeVariableContext = exports.UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext = exports.UnannInterfaceType_lf_unannClassOrInterfaceTypeContext = exports.UnannInterfaceTypeContext = exports.UnannClassType_lfno_unannClassOrInterfaceTypeContext = exports.UnannClassType_lf_unannClassOrInterfaceTypeContext = exports.UnannClassTypeContext = exports.UnannClassOrInterfaceTypeContext = exports.UnannReferenceTypeContext = exports.UnannPrimitiveTypeContext = exports.UnannTypeContext = exports.VariableInitializerContext = exports.VariableDeclaratorIdContext = exports.VariableDeclaratorContext = exports.VariableDeclaratorListContext = exports.FieldModifierContext = exports.FieldDeclarationContext = exports.ClassMemberDeclarationContext = exports.ClassBodyDeclarationContext = exports.ClassBodyContext = void 0;
exports.EnumConstantNameContext = exports.SwitchLabelContext = exports.SwitchLabelsContext = exports.SwitchBlockStatementGroupContext = exports.SwitchBlockContext = exports.SwitchStatementContext = exports.AssertStatementContext = exports.IfThenElseStatementNoShortIfContext = exports.IfThenElseStatementContext = exports.IfThenStatementContext = exports.StatementExpressionContext = exports.ExpressionStatementContext = exports.LabeledStatementNoShortIfContext = exports.LabeledStatementContext = exports.EmptyStatementContext = exports.StatementWithoutTrailingSubstatementContext = exports.StatementNoShortIfContext = exports.StatementContext = exports.LocalVariableDeclarationContext = exports.LocalVariableDeclarationStatementContext = exports.BlockStatementContext = exports.BlockStatementsContext = exports.BlockContext = exports.VariableInitializerListContext = exports.ArrayInitializerContext = exports.SingleElementAnnotationContext = exports.MarkerAnnotationContext = exports.ElementValueListContext = exports.ElementValueArrayInitializerContext = exports.ElementValueContext = exports.ElementValuePairContext = exports.ElementValuePairListContext = exports.NormalAnnotationContext = exports.AnnotationContext = exports.DefaultValueContext = exports.AnnotationTypeElementModifierContext = exports.AnnotationTypeElementDeclarationContext = exports.AnnotationTypeMemberDeclarationContext = exports.AnnotationTypeBodyContext = exports.AnnotationTypeDeclarationContext = exports.InterfaceMethodModifierContext = exports.InterfaceMethodDeclarationContext = exports.ConstantModifierContext = exports.ConstantDeclarationContext = exports.InterfaceMemberDeclarationContext = exports.InterfaceBodyContext = exports.ExtendsInterfacesContext = exports.InterfaceModifierContext = exports.NormalInterfaceDeclarationContext = exports.InterfaceDeclarationContext = void 0;
exports.MethodInvocation_lfno_primaryContext = exports.MethodInvocation_lf_primaryContext = exports.MethodInvocationContext = exports.ArrayAccess_lfno_primaryContext = exports.ArrayAccess_lf_primaryContext = exports.ArrayAccessContext = exports.FieldAccess_lfno_primaryContext = exports.FieldAccess_lf_primaryContext = exports.FieldAccessContext = exports.TypeArgumentsOrDiamondContext = exports.ClassInstanceCreationExpression_lfno_primaryContext = exports.ClassInstanceCreationExpression_lf_primaryContext = exports.ClassInstanceCreationExpressionContext = exports.PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext = exports.PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext = exports.PrimaryNoNewArray_lfno_primaryContext = exports.PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext = exports.PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext = exports.PrimaryNoNewArray_lf_primaryContext = exports.PrimaryNoNewArray_lfno_arrayAccessContext = exports.PrimaryNoNewArray_lf_arrayAccessContext = exports.PrimaryNoNewArrayContext = exports.PrimaryContext = exports.ResourceContext = exports.ResourceListContext = exports.ResourceSpecificationContext = exports.TryWithResourcesStatementContext = exports.Finally_Context = exports.CatchTypeContext = exports.CatchFormalParameterContext = exports.CatchClauseContext = exports.CatchesContext = exports.TryStatementContext = exports.SynchronizedStatementContext = exports.ThrowStatementContext = exports.ReturnStatementContext = exports.ContinueStatementContext = exports.BreakStatementContext = exports.EnhancedForStatementNoShortIfContext = exports.EnhancedForStatementContext = exports.StatementExpressionListContext = exports.ForUpdateContext = exports.ForInitContext = exports.BasicForStatementNoShortIfContext = exports.BasicForStatementContext = exports.ForStatementNoShortIfContext = exports.ForStatementContext = exports.DoStatementContext = exports.WhileStatementNoShortIfContext = exports.WhileStatementContext = void 0;
exports.CastExpressionContext = exports.PostDecrementExpression_lf_postfixExpressionContext = exports.PostDecrementExpressionContext = exports.PostIncrementExpression_lf_postfixExpressionContext = exports.PostIncrementExpressionContext = exports.PostfixExpressionContext = exports.UnaryExpressionNotPlusMinusContext = exports.PreDecrementExpressionContext = exports.PreIncrementExpressionContext = exports.UnaryExpressionContext = exports.MultiplicativeExpressionContext = exports.AdditiveExpressionContext = exports.ShiftExpressionContext = exports.RelationalExpressionContext = exports.EqualityExpressionContext = exports.AndExpressionContext = exports.ExclusiveOrExpressionContext = exports.InclusiveOrExpressionContext = exports.ConditionalAndExpressionContext = exports.ConditionalOrExpressionContext = exports.ConditionalExpressionContext = exports.AssignmentOperatorContext = exports.LeftHandSideContext = exports.AssignmentContext = exports.AssignmentExpressionContext = exports.LambdaBodyContext = exports.InferredFormalParameterListContext = exports.LambdaParametersContext = exports.LambdaExpressionContext = exports.ExpressionContext = exports.ConstantExpressionContext = exports.DimExprContext = exports.DimExprsContext = exports.ArrayCreationExpressionContext = exports.MethodReference_lfno_primaryContext = exports.MethodReference_lf_primaryContext = exports.MethodReferenceContext = exports.ArgumentListContext = void 0;
const antlr = __importStar(require("antlr4ng"));
class Java8Parser extends antlr.Parser {
    get grammarFileName() { return "Java8.g4"; }
    get literalNames() { return Java8Parser.literalNames; }
    get symbolicNames() { return Java8Parser.symbolicNames; }
    get ruleNames() { return Java8Parser.ruleNames; }
    get serializedATN() { return Java8Parser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new antlr.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, Java8Parser._ATN, Java8Parser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    literal() {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 0, Java8Parser.RULE_literal);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 474;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 63) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    type_() {
        let localContext = new TypeContext(this.context, this.state);
        this.enterRule(localContext, 2, Java8Parser.RULE_type);
        try {
            this.state = 478;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 476;
                        this.primitiveType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 477;
                        this.referenceType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primitiveType() {
        let localContext = new PrimitiveTypeContext(this.context, this.state);
        this.enterRule(localContext, 4, Java8Parser.RULE_primitiveType);
        let _la;
        try {
            this.state = 494;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 3, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 483;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 480;
                                    this.annotation();
                                }
                            }
                            this.state = 485;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 486;
                        this.numericType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 490;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 487;
                                    this.annotation();
                                }
                            }
                            this.state = 492;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 493;
                        this.match(Java8Parser.BOOLEAN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    numericType() {
        let localContext = new NumericTypeContext(this.context, this.state);
        this.enterRule(localContext, 6, Java8Parser.RULE_numericType);
        try {
            this.state = 498;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.SHORT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 496;
                        this.integralType();
                    }
                    break;
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 497;
                        this.floatingPointType();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    integralType() {
        let localContext = new IntegralTypeContext(this.context, this.state);
        this.enterRule(localContext, 8, Java8Parser.RULE_integralType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 500;
                _la = this.tokenStream.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & 671088928) !== 0) || _la === 37)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    floatingPointType() {
        let localContext = new FloatingPointTypeContext(this.context, this.state);
        this.enterRule(localContext, 10, Java8Parser.RULE_floatingPointType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 502;
                _la = this.tokenStream.LA(1);
                if (!(_la === 14 || _la === 20)) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    referenceType() {
        let localContext = new ReferenceTypeContext(this.context, this.state);
        this.enterRule(localContext, 12, Java8Parser.RULE_referenceType);
        try {
            this.state = 507;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 504;
                        this.classOrInterfaceType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 505;
                        this.typeVariable();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 506;
                        this.arrayType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classOrInterfaceType() {
        let localContext = new ClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 14, Java8Parser.RULE_classOrInterfaceType);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 511;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context)) {
                    case 1:
                        {
                            this.state = 509;
                            this.classType_lfno_classOrInterfaceType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 510;
                            this.interfaceType_lfno_classOrInterfaceType();
                        }
                        break;
                }
                this.state = 517;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            this.state = 515;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context)) {
                                case 1:
                                    {
                                        this.state = 513;
                                        this.classType_lf_classOrInterfaceType();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 514;
                                        this.interfaceType_lf_classOrInterfaceType();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 519;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classType() {
        let localContext = new ClassTypeContext(this.context, this.state);
        this.enterRule(localContext, 16, Java8Parser.RULE_classType);
        let _la;
        try {
            this.state = 542;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 13, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 523;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 520;
                                    this.annotation();
                                }
                            }
                            this.state = 525;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 526;
                        this.match(Java8Parser.Identifier);
                        this.state = 528;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 527;
                                this.typeArguments();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 530;
                        this.classOrInterfaceType();
                        this.state = 531;
                        this.match(Java8Parser.DOT);
                        this.state = 535;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 532;
                                    this.annotation();
                                }
                            }
                            this.state = 537;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 538;
                        this.match(Java8Parser.Identifier);
                        this.state = 540;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 539;
                                this.typeArguments();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classType_lf_classOrInterfaceType() {
        let localContext = new ClassType_lf_classOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 18, Java8Parser.RULE_classType_lf_classOrInterfaceType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 544;
                this.match(Java8Parser.DOT);
                this.state = 548;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 545;
                            this.annotation();
                        }
                    }
                    this.state = 550;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 551;
                this.match(Java8Parser.Identifier);
                this.state = 553;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 15, this.context)) {
                    case 1:
                        {
                            this.state = 552;
                            this.typeArguments();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classType_lfno_classOrInterfaceType() {
        let localContext = new ClassType_lfno_classOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 20, Java8Parser.RULE_classType_lfno_classOrInterfaceType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 558;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 555;
                            this.annotation();
                        }
                    }
                    this.state = 560;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 561;
                this.match(Java8Parser.Identifier);
                this.state = 563;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 17, this.context)) {
                    case 1:
                        {
                            this.state = 562;
                            this.typeArguments();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceType() {
        let localContext = new InterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 22, Java8Parser.RULE_interfaceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 565;
                this.classType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceType_lf_classOrInterfaceType() {
        let localContext = new InterfaceType_lf_classOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 24, Java8Parser.RULE_interfaceType_lf_classOrInterfaceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 567;
                this.classType_lf_classOrInterfaceType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceType_lfno_classOrInterfaceType() {
        let localContext = new InterfaceType_lfno_classOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 26, Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 569;
                this.classType_lfno_classOrInterfaceType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeVariable() {
        let localContext = new TypeVariableContext(this.context, this.state);
        this.enterRule(localContext, 28, Java8Parser.RULE_typeVariable);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 574;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 571;
                            this.annotation();
                        }
                    }
                    this.state = 576;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 577;
                this.match(Java8Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arrayType() {
        let localContext = new ArrayTypeContext(this.context, this.state);
        this.enterRule(localContext, 30, Java8Parser.RULE_arrayType);
        try {
            this.state = 588;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 579;
                        this.primitiveType();
                        this.state = 580;
                        this.dims();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 582;
                        this.classOrInterfaceType();
                        this.state = 583;
                        this.dims();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 585;
                        this.typeVariable();
                        this.state = 586;
                        this.dims();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    dims() {
        let localContext = new DimsContext(this.context, this.state);
        this.enterRule(localContext, 32, Java8Parser.RULE_dims);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 593;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 590;
                            this.annotation();
                        }
                    }
                    this.state = 595;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 596;
                this.match(Java8Parser.LBRACK);
                this.state = 597;
                this.match(Java8Parser.RBRACK);
                this.state = 608;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 601;
                                this.errorHandler.sync(this);
                                _la = this.tokenStream.LA(1);
                                while (_la === 103) {
                                    {
                                        {
                                            this.state = 598;
                                            this.annotation();
                                        }
                                    }
                                    this.state = 603;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                }
                                this.state = 604;
                                this.match(Java8Parser.LBRACK);
                                this.state = 605;
                                this.match(Java8Parser.RBRACK);
                            }
                        }
                    }
                    this.state = 610;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeParameter() {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 34, Java8Parser.RULE_typeParameter);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 614;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 611;
                            this.typeParameterModifier();
                        }
                    }
                    this.state = 616;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 617;
                this.match(Java8Parser.Identifier);
                this.state = 619;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 618;
                        this.typeBound();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeParameterModifier() {
        let localContext = new TypeParameterModifierContext(this.context, this.state);
        this.enterRule(localContext, 36, Java8Parser.RULE_typeParameterModifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 621;
                this.annotation();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeBound() {
        let localContext = new TypeBoundContext(this.context, this.state);
        this.enterRule(localContext, 38, Java8Parser.RULE_typeBound);
        let _la;
        try {
            this.state = 633;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 623;
                        this.match(Java8Parser.EXTENDS);
                        this.state = 624;
                        this.typeVariable();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 625;
                        this.match(Java8Parser.EXTENDS);
                        this.state = 626;
                        this.classOrInterfaceType();
                        this.state = 630;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 85) {
                            {
                                {
                                    this.state = 627;
                                    this.additionalBound();
                                }
                            }
                            this.state = 632;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    additionalBound() {
        let localContext = new AdditionalBoundContext(this.context, this.state);
        this.enterRule(localContext, 40, Java8Parser.RULE_additionalBound);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 635;
                this.match(Java8Parser.BITAND);
                this.state = 636;
                this.interfaceType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeArguments() {
        let localContext = new TypeArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 42, Java8Parser.RULE_typeArguments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 638;
                this.match(Java8Parser.LT);
                this.state = 639;
                this.typeArgumentList();
                this.state = 640;
                this.match(Java8Parser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeArgumentList() {
        let localContext = new TypeArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 44, Java8Parser.RULE_typeArgumentList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 642;
                this.typeArgument();
                this.state = 647;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 643;
                            this.match(Java8Parser.COMMA);
                            this.state = 644;
                            this.typeArgument();
                        }
                    }
                    this.state = 649;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeArgument() {
        let localContext = new TypeArgumentContext(this.context, this.state);
        this.enterRule(localContext, 46, Java8Parser.RULE_typeArgument);
        try {
            this.state = 652;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 28, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 650;
                        this.referenceType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 651;
                        this.wildcard();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    wildcard() {
        let localContext = new WildcardContext(this.context, this.state);
        this.enterRule(localContext, 48, Java8Parser.RULE_wildcard);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 657;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 654;
                            this.annotation();
                        }
                    }
                    this.state = 659;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 660;
                this.match(Java8Parser.QUESTION);
                this.state = 662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17 || _la === 40) {
                    {
                        this.state = 661;
                        this.wildcardBounds();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    wildcardBounds() {
        let localContext = new WildcardBoundsContext(this.context, this.state);
        this.enterRule(localContext, 50, Java8Parser.RULE_wildcardBounds);
        try {
            this.state = 668;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.EXTENDS:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 664;
                        this.match(Java8Parser.EXTENDS);
                        this.state = 665;
                        this.referenceType();
                    }
                    break;
                case Java8Parser.SUPER:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 666;
                        this.match(Java8Parser.SUPER);
                        this.state = 667;
                        this.referenceType();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    packageName(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PackageNameContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 52;
        this.enterRecursionRule(localContext, 52, Java8Parser.RULE_packageName, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 671;
                    this.match(Java8Parser.Identifier);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 678;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new PackageNameContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_packageName);
                                this.state = 673;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 674;
                                this.match(Java8Parser.DOT);
                                this.state = 675;
                                this.match(Java8Parser.Identifier);
                            }
                        }
                    }
                    this.state = 680;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 32, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    typeName() {
        let localContext = new TypeNameContext(this.context, this.state);
        this.enterRule(localContext, 54, Java8Parser.RULE_typeName);
        try {
            this.state = 686;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 681;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 682;
                        this.packageOrTypeName(0);
                        this.state = 683;
                        this.match(Java8Parser.DOT);
                        this.state = 684;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    packageOrTypeName(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new PackageOrTypeNameContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 56;
        this.enterRecursionRule(localContext, 56, Java8Parser.RULE_packageOrTypeName, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 689;
                    this.match(Java8Parser.Identifier);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 696;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new PackageOrTypeNameContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_packageOrTypeName);
                                this.state = 691;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 692;
                                this.match(Java8Parser.DOT);
                                this.state = 693;
                                this.match(Java8Parser.Identifier);
                            }
                        }
                    }
                    this.state = 698;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    expressionName() {
        let localContext = new ExpressionNameContext(this.context, this.state);
        this.enterRule(localContext, 58, Java8Parser.RULE_expressionName);
        try {
            this.state = 704;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 699;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 700;
                        this.ambiguousName(0);
                        this.state = 701;
                        this.match(Java8Parser.DOT);
                        this.state = 702;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodName() {
        let localContext = new MethodNameContext(this.context, this.state);
        this.enterRule(localContext, 60, Java8Parser.RULE_methodName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 706;
                this.match(Java8Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    ambiguousName(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AmbiguousNameContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 62;
        this.enterRecursionRule(localContext, 62, Java8Parser.RULE_ambiguousName, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 709;
                    this.match(Java8Parser.Identifier);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 716;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new AmbiguousNameContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_ambiguousName);
                                this.state = 711;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 712;
                                this.match(Java8Parser.DOT);
                                this.state = 713;
                                this.match(Java8Parser.Identifier);
                            }
                        }
                    }
                    this.state = 718;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    compilationUnit() {
        let localContext = new CompilationUnitContext(this.context, this.state);
        this.enterRule(localContext, 64, Java8Parser.RULE_compilationUnit);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 720;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context)) {
                    case 1:
                        {
                            this.state = 719;
                            this.packageDeclaration();
                        }
                        break;
                }
                this.state = 725;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 25) {
                    {
                        {
                            this.state = 722;
                            this.importDeclaration();
                        }
                    }
                    this.state = 727;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 731;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268763650) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073741927) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 728;
                            this.typeDeclaration();
                        }
                    }
                    this.state = 733;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 734;
                this.match(Java8Parser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    packageDeclaration() {
        let localContext = new PackageDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 66, Java8Parser.RULE_packageDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 739;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 736;
                            this.packageModifier();
                        }
                    }
                    this.state = 741;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 742;
                this.match(Java8Parser.PACKAGE);
                this.state = 743;
                this.match(Java8Parser.Identifier);
                this.state = 748;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 65) {
                    {
                        {
                            this.state = 744;
                            this.match(Java8Parser.DOT);
                            this.state = 745;
                            this.match(Java8Parser.Identifier);
                        }
                    }
                    this.state = 750;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 751;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    packageModifier() {
        let localContext = new PackageModifierContext(this.context, this.state);
        this.enterRule(localContext, 68, Java8Parser.RULE_packageModifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 753;
                this.annotation();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    importDeclaration() {
        let localContext = new ImportDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 70, Java8Parser.RULE_importDeclaration);
        try {
            this.state = 759;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 755;
                        this.singleTypeImportDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 756;
                        this.typeImportOnDemandDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 757;
                        this.singleStaticImportDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 758;
                        this.staticImportOnDemandDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    singleTypeImportDeclaration() {
        let localContext = new SingleTypeImportDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 72, Java8Parser.RULE_singleTypeImportDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 761;
                this.match(Java8Parser.IMPORT);
                this.state = 762;
                this.typeName();
                this.state = 763;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeImportOnDemandDeclaration() {
        let localContext = new TypeImportOnDemandDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 74, Java8Parser.RULE_typeImportOnDemandDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 765;
                this.match(Java8Parser.IMPORT);
                this.state = 766;
                this.packageOrTypeName(0);
                this.state = 767;
                this.match(Java8Parser.DOT);
                this.state = 768;
                this.match(Java8Parser.MUL);
                this.state = 769;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    singleStaticImportDeclaration() {
        let localContext = new SingleStaticImportDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 76, Java8Parser.RULE_singleStaticImportDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 771;
                this.match(Java8Parser.IMPORT);
                this.state = 772;
                this.match(Java8Parser.STATIC);
                this.state = 773;
                this.typeName();
                this.state = 774;
                this.match(Java8Parser.DOT);
                this.state = 775;
                this.match(Java8Parser.Identifier);
                this.state = 776;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    staticImportOnDemandDeclaration() {
        let localContext = new StaticImportOnDemandDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 78, Java8Parser.RULE_staticImportOnDemandDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 778;
                this.match(Java8Parser.IMPORT);
                this.state = 779;
                this.match(Java8Parser.STATIC);
                this.state = 780;
                this.typeName();
                this.state = 781;
                this.match(Java8Parser.DOT);
                this.state = 782;
                this.match(Java8Parser.MUL);
                this.state = 783;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeDeclaration() {
        let localContext = new TypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 80, Java8Parser.RULE_typeDeclaration);
        try {
            this.state = 788;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 785;
                        this.classDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 786;
                        this.interfaceDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 787;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classDeclaration() {
        let localContext = new ClassDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 82, Java8Parser.RULE_classDeclaration);
        try {
            this.state = 792;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 44, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 790;
                        this.normalClassDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 791;
                        this.enumDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    normalClassDeclaration() {
        let localContext = new NormalClassDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 84, Java8Parser.RULE_normalClassDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 797;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || _la === 18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 794;
                            this.classModifier();
                        }
                    }
                    this.state = 799;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 800;
                this.match(Java8Parser.CLASS);
                this.state = 801;
                this.match(Java8Parser.Identifier);
                this.state = 803;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 802;
                        this.typeParameters();
                    }
                }
                this.state = 806;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 805;
                        this.superclass();
                    }
                }
                this.state = 809;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                        this.state = 808;
                        this.superinterfaces();
                    }
                }
                this.state = 811;
                this.classBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classModifier() {
        let localContext = new ClassModifierContext(this.context, this.state);
        this.enterRule(localContext, 86, Java8Parser.RULE_classModifier);
        try {
            this.state = 821;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 813;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 814;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.PROTECTED:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 815;
                        this.match(Java8Parser.PROTECTED);
                    }
                    break;
                case Java8Parser.PRIVATE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 816;
                        this.match(Java8Parser.PRIVATE);
                    }
                    break;
                case Java8Parser.ABSTRACT:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 817;
                        this.match(Java8Parser.ABSTRACT);
                    }
                    break;
                case Java8Parser.STATIC:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 818;
                        this.match(Java8Parser.STATIC);
                    }
                    break;
                case Java8Parser.FINAL:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 819;
                        this.match(Java8Parser.FINAL);
                    }
                    break;
                case Java8Parser.STRICTFP:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 820;
                        this.match(Java8Parser.STRICTFP);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeParameters() {
        let localContext = new TypeParametersContext(this.context, this.state);
        this.enterRule(localContext, 88, Java8Parser.RULE_typeParameters);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 823;
                this.match(Java8Parser.LT);
                this.state = 824;
                this.typeParameterList();
                this.state = 825;
                this.match(Java8Parser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeParameterList() {
        let localContext = new TypeParameterListContext(this.context, this.state);
        this.enterRule(localContext, 90, Java8Parser.RULE_typeParameterList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 827;
                this.typeParameter();
                this.state = 832;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 828;
                            this.match(Java8Parser.COMMA);
                            this.state = 829;
                            this.typeParameter();
                        }
                    }
                    this.state = 834;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    superclass() {
        let localContext = new SuperclassContext(this.context, this.state);
        this.enterRule(localContext, 92, Java8Parser.RULE_superclass);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 835;
                this.match(Java8Parser.EXTENDS);
                this.state = 836;
                this.classType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    superinterfaces() {
        let localContext = new SuperinterfacesContext(this.context, this.state);
        this.enterRule(localContext, 94, Java8Parser.RULE_superinterfaces);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 838;
                this.match(Java8Parser.IMPLEMENTS);
                this.state = 839;
                this.interfaceTypeList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceTypeList() {
        let localContext = new InterfaceTypeListContext(this.context, this.state);
        this.enterRule(localContext, 96, Java8Parser.RULE_interfaceTypeList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 841;
                this.interfaceType();
                this.state = 846;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 842;
                            this.match(Java8Parser.COMMA);
                            this.state = 843;
                            this.interfaceType();
                        }
                    }
                    this.state = 848;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classBody() {
        let localContext = new ClassBodyContext(this.context, this.state);
        this.enterRule(localContext, 98, Java8Parser.RULE_classBody);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 849;
                this.match(Java8Parser.LBRACE);
                this.state = 853;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1140957815) !== 0) || _la === 68 || _la === 102 || _la === 103) {
                    {
                        {
                            this.state = 850;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 855;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 856;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classBodyDeclaration() {
        let localContext = new ClassBodyDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 100, Java8Parser.RULE_classBodyDeclaration);
        try {
            this.state = 862;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 53, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 858;
                        this.classMemberDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 859;
                        this.instanceInitializer();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 860;
                        this.staticInitializer();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 861;
                        this.constructorDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classMemberDeclaration() {
        let localContext = new ClassMemberDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 102, Java8Parser.RULE_classMemberDeclaration);
        try {
            this.state = 869;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 54, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 864;
                        this.fieldDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 865;
                        this.methodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 866;
                        this.classDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 867;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 868;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fieldDeclaration() {
        let localContext = new FieldDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 104, Java8Parser.RULE_fieldDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 874;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 2417197057) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 871;
                            this.fieldModifier();
                        }
                    }
                    this.state = 876;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 877;
                this.unannType();
                this.state = 878;
                this.variableDeclaratorList();
                this.state = 879;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fieldModifier() {
        let localContext = new FieldModifierContext(this.context, this.state);
        this.enterRule(localContext, 106, Java8Parser.RULE_fieldModifier);
        try {
            this.state = 889;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 881;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 882;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.PROTECTED:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 883;
                        this.match(Java8Parser.PROTECTED);
                    }
                    break;
                case Java8Parser.PRIVATE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 884;
                        this.match(Java8Parser.PRIVATE);
                    }
                    break;
                case Java8Parser.STATIC:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 885;
                        this.match(Java8Parser.STATIC);
                    }
                    break;
                case Java8Parser.FINAL:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 886;
                        this.match(Java8Parser.FINAL);
                    }
                    break;
                case Java8Parser.TRANSIENT:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 887;
                        this.match(Java8Parser.TRANSIENT);
                    }
                    break;
                case Java8Parser.VOLATILE:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 888;
                        this.match(Java8Parser.VOLATILE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variableDeclaratorList() {
        let localContext = new VariableDeclaratorListContext(this.context, this.state);
        this.enterRule(localContext, 108, Java8Parser.RULE_variableDeclaratorList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 891;
                this.variableDeclarator();
                this.state = 896;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 892;
                            this.match(Java8Parser.COMMA);
                            this.state = 893;
                            this.variableDeclarator();
                        }
                    }
                    this.state = 898;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variableDeclarator() {
        let localContext = new VariableDeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 110, Java8Parser.RULE_variableDeclarator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 899;
                this.variableDeclaratorId();
                this.state = 902;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 66) {
                    {
                        this.state = 900;
                        this.match(Java8Parser.ASSIGN);
                        this.state = 901;
                        this.variableInitializer();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variableDeclaratorId() {
        let localContext = new VariableDeclaratorIdContext(this.context, this.state);
        this.enterRule(localContext, 112, Java8Parser.RULE_variableDeclaratorId);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 904;
                this.match(Java8Parser.Identifier);
                this.state = 906;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61 || _la === 103) {
                    {
                        this.state = 905;
                        this.dims();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variableInitializer() {
        let localContext = new VariableInitializerContext(this.context, this.state);
        this.enterRule(localContext, 114, Java8Parser.RULE_variableInitializer);
        try {
            this.state = 910;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.BOOLEAN:
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.NEW:
                case Java8Parser.SHORT:
                case Java8Parser.SUPER:
                case Java8Parser.THIS:
                case Java8Parser.VOID:
                case Java8Parser.IntegerLiteral:
                case Java8Parser.FloatingPointLiteral:
                case Java8Parser.BooleanLiteral:
                case Java8Parser.CharacterLiteral:
                case Java8Parser.StringLiteral:
                case Java8Parser.NullLiteral:
                case Java8Parser.LPAREN:
                case Java8Parser.BANG:
                case Java8Parser.TILDE:
                case Java8Parser.INC:
                case Java8Parser.DEC:
                case Java8Parser.ADD:
                case Java8Parser.SUB:
                case Java8Parser.Identifier:
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 908;
                        this.expression();
                    }
                    break;
                case Java8Parser.LBRACE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 909;
                        this.arrayInitializer();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannType() {
        let localContext = new UnannTypeContext(this.context, this.state);
        this.enterRule(localContext, 116, Java8Parser.RULE_unannType);
        try {
            this.state = 914;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 912;
                        this.unannPrimitiveType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 913;
                        this.unannReferenceType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannPrimitiveType() {
        let localContext = new UnannPrimitiveTypeContext(this.context, this.state);
        this.enterRule(localContext, 118, Java8Parser.RULE_unannPrimitiveType);
        try {
            this.state = 918;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.SHORT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 916;
                        this.numericType();
                    }
                    break;
                case Java8Parser.BOOLEAN:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 917;
                        this.match(Java8Parser.BOOLEAN);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannReferenceType() {
        let localContext = new UnannReferenceTypeContext(this.context, this.state);
        this.enterRule(localContext, 120, Java8Parser.RULE_unannReferenceType);
        try {
            this.state = 923;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 63, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 920;
                        this.unannClassOrInterfaceType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 921;
                        this.unannTypeVariable();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 922;
                        this.unannArrayType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannClassOrInterfaceType() {
        let localContext = new UnannClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 122, Java8Parser.RULE_unannClassOrInterfaceType);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 927;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 64, this.context)) {
                    case 1:
                        {
                            this.state = 925;
                            this.unannClassType_lfno_unannClassOrInterfaceType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 926;
                            this.unannInterfaceType_lfno_unannClassOrInterfaceType();
                        }
                        break;
                }
                this.state = 933;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            this.state = 931;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 65, this.context)) {
                                case 1:
                                    {
                                        this.state = 929;
                                        this.unannClassType_lf_unannClassOrInterfaceType();
                                    }
                                    break;
                                case 2:
                                    {
                                        this.state = 930;
                                        this.unannInterfaceType_lf_unannClassOrInterfaceType();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 935;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 66, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannClassType() {
        let localContext = new UnannClassTypeContext(this.context, this.state);
        this.enterRule(localContext, 124, Java8Parser.RULE_unannClassType);
        let _la;
        try {
            this.state = 952;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 70, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 936;
                        this.match(Java8Parser.Identifier);
                        this.state = 938;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 937;
                                this.typeArguments();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 940;
                        this.unannClassOrInterfaceType();
                        this.state = 941;
                        this.match(Java8Parser.DOT);
                        this.state = 945;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 942;
                                    this.annotation();
                                }
                            }
                            this.state = 947;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 948;
                        this.match(Java8Parser.Identifier);
                        this.state = 950;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 949;
                                this.typeArguments();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannClassType_lf_unannClassOrInterfaceType() {
        let localContext = new UnannClassType_lf_unannClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 126, Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 954;
                this.match(Java8Parser.DOT);
                this.state = 958;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 955;
                            this.annotation();
                        }
                    }
                    this.state = 960;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 961;
                this.match(Java8Parser.Identifier);
                this.state = 963;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 962;
                        this.typeArguments();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannClassType_lfno_unannClassOrInterfaceType() {
        let localContext = new UnannClassType_lfno_unannClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 128, Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 965;
                this.match(Java8Parser.Identifier);
                this.state = 967;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 966;
                        this.typeArguments();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannInterfaceType() {
        let localContext = new UnannInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 130, Java8Parser.RULE_unannInterfaceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 969;
                this.unannClassType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannInterfaceType_lf_unannClassOrInterfaceType() {
        let localContext = new UnannInterfaceType_lf_unannClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 132, Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 971;
                this.unannClassType_lf_unannClassOrInterfaceType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannInterfaceType_lfno_unannClassOrInterfaceType() {
        let localContext = new UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 134, Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 973;
                this.unannClassType_lfno_unannClassOrInterfaceType();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannTypeVariable() {
        let localContext = new UnannTypeVariableContext(this.context, this.state);
        this.enterRule(localContext, 136, Java8Parser.RULE_unannTypeVariable);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 975;
                this.match(Java8Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unannArrayType() {
        let localContext = new UnannArrayTypeContext(this.context, this.state);
        this.enterRule(localContext, 138, Java8Parser.RULE_unannArrayType);
        try {
            this.state = 986;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 74, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 977;
                        this.unannPrimitiveType();
                        this.state = 978;
                        this.dims();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 980;
                        this.unannClassOrInterfaceType();
                        this.state = 981;
                        this.dims();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 983;
                        this.unannTypeVariable();
                        this.state = 984;
                        this.dims();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodDeclaration() {
        let localContext = new MethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 140, Java8Parser.RULE_methodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 991;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1074003970) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 615) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 988;
                            this.methodModifier();
                        }
                    }
                    this.state = 993;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 994;
                this.methodHeader();
                this.state = 995;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodModifier() {
        let localContext = new MethodModifierContext(this.context, this.state);
        this.enterRule(localContext, 142, Java8Parser.RULE_methodModifier);
        try {
            this.state = 1007;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 997;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 998;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.PROTECTED:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 999;
                        this.match(Java8Parser.PROTECTED);
                    }
                    break;
                case Java8Parser.PRIVATE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1000;
                        this.match(Java8Parser.PRIVATE);
                    }
                    break;
                case Java8Parser.ABSTRACT:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1001;
                        this.match(Java8Parser.ABSTRACT);
                    }
                    break;
                case Java8Parser.STATIC:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1002;
                        this.match(Java8Parser.STATIC);
                    }
                    break;
                case Java8Parser.FINAL:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1003;
                        this.match(Java8Parser.FINAL);
                    }
                    break;
                case Java8Parser.SYNCHRONIZED:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1004;
                        this.match(Java8Parser.SYNCHRONIZED);
                    }
                    break;
                case Java8Parser.NATIVE:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 1005;
                        this.match(Java8Parser.NATIVE);
                    }
                    break;
                case Java8Parser.STRICTFP:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 1006;
                        this.match(Java8Parser.STRICTFP);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodHeader() {
        let localContext = new MethodHeaderContext(this.context, this.state);
        this.enterRule(localContext, 144, Java8Parser.RULE_methodHeader);
        let _la;
        try {
            this.state = 1026;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.BOOLEAN:
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.SHORT:
                case Java8Parser.VOID:
                case Java8Parser.Identifier:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1009;
                        this.result();
                        this.state = 1010;
                        this.methodDeclarator();
                        this.state = 1012;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 45) {
                            {
                                this.state = 1011;
                                this.throws_();
                            }
                        }
                    }
                    break;
                case Java8Parser.LT:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1014;
                        this.typeParameters();
                        this.state = 1018;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 1015;
                                    this.annotation();
                                }
                            }
                            this.state = 1020;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1021;
                        this.result();
                        this.state = 1022;
                        this.methodDeclarator();
                        this.state = 1024;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 45) {
                            {
                                this.state = 1023;
                                this.throws_();
                            }
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    result() {
        let localContext = new ResultContext(this.context, this.state);
        this.enterRule(localContext, 146, Java8Parser.RULE_result);
        try {
            this.state = 1030;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.BOOLEAN:
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.SHORT:
                case Java8Parser.Identifier:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1028;
                        this.unannType();
                    }
                    break;
                case Java8Parser.VOID:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1029;
                        this.match(Java8Parser.VOID);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodDeclarator() {
        let localContext = new MethodDeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 148, Java8Parser.RULE_methodDeclarator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1032;
                this.match(Java8Parser.Identifier);
                this.state = 1033;
                this.match(Java8Parser.LPAREN);
                this.state = 1035;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || _la === 37 || _la === 102 || _la === 103) {
                    {
                        this.state = 1034;
                        this.formalParameterList();
                    }
                }
                this.state = 1037;
                this.match(Java8Parser.RPAREN);
                this.state = 1039;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61 || _la === 103) {
                    {
                        this.state = 1038;
                        this.dims();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    formalParameterList() {
        let localContext = new FormalParameterListContext(this.context, this.state);
        this.enterRule(localContext, 150, Java8Parser.RULE_formalParameterList);
        try {
            this.state = 1046;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 84, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1041;
                        this.formalParameters();
                        this.state = 1042;
                        this.match(Java8Parser.COMMA);
                        this.state = 1043;
                        this.lastFormalParameter();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1045;
                        this.lastFormalParameter();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    formalParameters() {
        let localContext = new FormalParametersContext(this.context, this.state);
        this.enterRule(localContext, 152, Java8Parser.RULE_formalParameters);
        try {
            let alternative;
            this.state = 1064;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1048;
                        this.formalParameter();
                        this.state = 1053;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 1049;
                                        this.match(Java8Parser.COMMA);
                                        this.state = 1050;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 1055;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 85, this.context);
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1056;
                        this.receiverParameter();
                        this.state = 1061;
                        this.errorHandler.sync(this);
                        alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
                        while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                            if (alternative === 1) {
                                {
                                    {
                                        this.state = 1057;
                                        this.match(Java8Parser.COMMA);
                                        this.state = 1058;
                                        this.formalParameter();
                                    }
                                }
                            }
                            this.state = 1063;
                            this.errorHandler.sync(this);
                            alternative = this.interpreter.adaptivePredict(this.tokenStream, 86, this.context);
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    formalParameter() {
        let localContext = new FormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 154, Java8Parser.RULE_formalParameter);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1069;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 18 || _la === 103) {
                    {
                        {
                            this.state = 1066;
                            this.variableModifier();
                        }
                    }
                    this.state = 1071;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1072;
                this.unannType();
                this.state = 1073;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variableModifier() {
        let localContext = new VariableModifierContext(this.context, this.state);
        this.enterRule(localContext, 156, Java8Parser.RULE_variableModifier);
        try {
            this.state = 1077;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1075;
                        this.annotation();
                    }
                    break;
                case Java8Parser.FINAL:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1076;
                        this.match(Java8Parser.FINAL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    lastFormalParameter() {
        let localContext = new LastFormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 158, Java8Parser.RULE_lastFormalParameter);
        let _la;
        try {
            this.state = 1096;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 92, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1082;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 18 || _la === 103) {
                            {
                                {
                                    this.state = 1079;
                                    this.variableModifier();
                                }
                            }
                            this.state = 1084;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1085;
                        this.unannType();
                        this.state = 1089;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 1086;
                                    this.annotation();
                                }
                            }
                            this.state = 1091;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1092;
                        this.match(Java8Parser.ELLIPSIS);
                        this.state = 1093;
                        this.variableDeclaratorId();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1095;
                        this.formalParameter();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    receiverParameter() {
        let localContext = new ReceiverParameterContext(this.context, this.state);
        this.enterRule(localContext, 160, Java8Parser.RULE_receiverParameter);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 1098;
                            this.annotation();
                        }
                    }
                    this.state = 1103;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1104;
                this.unannType();
                this.state = 1107;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 102) {
                    {
                        this.state = 1105;
                        this.match(Java8Parser.Identifier);
                        this.state = 1106;
                        this.match(Java8Parser.DOT);
                    }
                }
                this.state = 1109;
                this.match(Java8Parser.THIS);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    throws_() {
        let localContext = new Throws_Context(this.context, this.state);
        this.enterRule(localContext, 162, Java8Parser.RULE_throws_);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1111;
                this.match(Java8Parser.THROWS);
                this.state = 1112;
                this.exceptionTypeList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    exceptionTypeList() {
        let localContext = new ExceptionTypeListContext(this.context, this.state);
        this.enterRule(localContext, 164, Java8Parser.RULE_exceptionTypeList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1114;
                this.exceptionType();
                this.state = 1119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 1115;
                            this.match(Java8Parser.COMMA);
                            this.state = 1116;
                            this.exceptionType();
                        }
                    }
                    this.state = 1121;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    exceptionType() {
        let localContext = new ExceptionTypeContext(this.context, this.state);
        this.enterRule(localContext, 166, Java8Parser.RULE_exceptionType);
        try {
            this.state = 1124;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 96, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1122;
                        this.classType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1123;
                        this.typeVariable();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodBody() {
        let localContext = new MethodBodyContext(this.context, this.state);
        this.enterRule(localContext, 168, Java8Parser.RULE_methodBody);
        try {
            this.state = 1128;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.LBRACE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1126;
                        this.block();
                    }
                    break;
                case Java8Parser.SEMI:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1127;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    instanceInitializer() {
        let localContext = new InstanceInitializerContext(this.context, this.state);
        this.enterRule(localContext, 170, Java8Parser.RULE_instanceInitializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1130;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    staticInitializer() {
        let localContext = new StaticInitializerContext(this.context, this.state);
        this.enterRule(localContext, 172, Java8Parser.RULE_staticInitializer);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1132;
                this.match(Java8Parser.STATIC);
                this.state = 1133;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    constructorDeclaration() {
        let localContext = new ConstructorDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 174, Java8Parser.RULE_constructorDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1138;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 7) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 1135;
                            this.constructorModifier();
                        }
                    }
                    this.state = 1140;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1141;
                this.constructorDeclarator();
                this.state = 1143;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 45) {
                    {
                        this.state = 1142;
                        this.throws_();
                    }
                }
                this.state = 1145;
                this.constructorBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    constructorModifier() {
        let localContext = new ConstructorModifierContext(this.context, this.state);
        this.enterRule(localContext, 176, Java8Parser.RULE_constructorModifier);
        try {
            this.state = 1151;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1147;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1148;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.PROTECTED:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1149;
                        this.match(Java8Parser.PROTECTED);
                    }
                    break;
                case Java8Parser.PRIVATE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1150;
                        this.match(Java8Parser.PRIVATE);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    constructorDeclarator() {
        let localContext = new ConstructorDeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 178, Java8Parser.RULE_constructorDeclarator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1154;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 1153;
                        this.typeParameters();
                    }
                }
                this.state = 1156;
                this.simpleTypeName();
                this.state = 1157;
                this.match(Java8Parser.LPAREN);
                this.state = 1159;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || _la === 37 || _la === 102 || _la === 103) {
                    {
                        this.state = 1158;
                        this.formalParameterList();
                    }
                }
                this.state = 1161;
                this.match(Java8Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    simpleTypeName() {
        let localContext = new SimpleTypeNameContext(this.context, this.state);
        this.enterRule(localContext, 180, Java8Parser.RULE_simpleTypeName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1163;
                this.match(Java8Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    constructorBody() {
        let localContext = new ConstructorBodyContext(this.context, this.state);
        this.enterRule(localContext, 182, Java8Parser.RULE_constructorBody);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1165;
                this.match(Java8Parser.LBRACE);
                this.state = 1167;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 103, this.context)) {
                    case 1:
                        {
                            this.state = 1166;
                            this.explicitConstructorInvocation();
                        }
                        break;
                }
                this.state = 1170;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2826267454) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
                    {
                        this.state = 1169;
                        this.blockStatements();
                    }
                }
                this.state = 1172;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    explicitConstructorInvocation() {
        let localContext = new ExplicitConstructorInvocationContext(this.context, this.state);
        this.enterRule(localContext, 184, Java8Parser.RULE_explicitConstructorInvocation);
        let _la;
        try {
            this.state = 1220;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 113, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1175;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 1174;
                                this.typeArguments();
                            }
                        }
                        this.state = 1177;
                        this.match(Java8Parser.THIS);
                        this.state = 1178;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1180;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 1179;
                                this.argumentList();
                            }
                        }
                        this.state = 1182;
                        this.match(Java8Parser.RPAREN);
                        this.state = 1183;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1185;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 1184;
                                this.typeArguments();
                            }
                        }
                        this.state = 1187;
                        this.match(Java8Parser.SUPER);
                        this.state = 1188;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1190;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 1189;
                                this.argumentList();
                            }
                        }
                        this.state = 1192;
                        this.match(Java8Parser.RPAREN);
                        this.state = 1193;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1194;
                        this.expressionName();
                        this.state = 1195;
                        this.match(Java8Parser.DOT);
                        this.state = 1197;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 1196;
                                this.typeArguments();
                            }
                        }
                        this.state = 1199;
                        this.match(Java8Parser.SUPER);
                        this.state = 1200;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1202;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 1201;
                                this.argumentList();
                            }
                        }
                        this.state = 1204;
                        this.match(Java8Parser.RPAREN);
                        this.state = 1205;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1207;
                        this.primary();
                        this.state = 1208;
                        this.match(Java8Parser.DOT);
                        this.state = 1210;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 1209;
                                this.typeArguments();
                            }
                        }
                        this.state = 1212;
                        this.match(Java8Parser.SUPER);
                        this.state = 1213;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1215;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 1214;
                                this.argumentList();
                            }
                        }
                        this.state = 1217;
                        this.match(Java8Parser.RPAREN);
                        this.state = 1218;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enumDeclaration() {
        let localContext = new EnumDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 186, Java8Parser.RULE_enumDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1225;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || _la === 18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 1222;
                            this.classModifier();
                        }
                    }
                    this.state = 1227;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1228;
                this.match(Java8Parser.ENUM);
                this.state = 1229;
                this.match(Java8Parser.Identifier);
                this.state = 1231;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 24) {
                    {
                        this.state = 1230;
                        this.superinterfaces();
                    }
                }
                this.state = 1233;
                this.enumBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enumBody() {
        let localContext = new EnumBodyContext(this.context, this.state);
        this.enterRule(localContext, 188, Java8Parser.RULE_enumBody);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1235;
                this.match(Java8Parser.LBRACE);
                this.state = 1237;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 102 || _la === 103) {
                    {
                        this.state = 1236;
                        this.enumConstantList();
                    }
                }
                this.state = 1240;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                        this.state = 1239;
                        this.match(Java8Parser.COMMA);
                    }
                }
                this.state = 1243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 63) {
                    {
                        this.state = 1242;
                        this.enumBodyDeclarations();
                    }
                }
                this.state = 1245;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enumConstantList() {
        let localContext = new EnumConstantListContext(this.context, this.state);
        this.enterRule(localContext, 190, Java8Parser.RULE_enumConstantList);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1247;
                this.enumConstant();
                this.state = 1252;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 119, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1248;
                                this.match(Java8Parser.COMMA);
                                this.state = 1249;
                                this.enumConstant();
                            }
                        }
                    }
                    this.state = 1254;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 119, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enumConstant() {
        let localContext = new EnumConstantContext(this.context, this.state);
        this.enterRule(localContext, 192, Java8Parser.RULE_enumConstant);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1258;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 1255;
                            this.enumConstantModifier();
                        }
                    }
                    this.state = 1260;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1261;
                this.match(Java8Parser.Identifier);
                this.state = 1267;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 57) {
                    {
                        this.state = 1262;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1264;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 1263;
                                this.argumentList();
                            }
                        }
                        this.state = 1266;
                        this.match(Java8Parser.RPAREN);
                    }
                }
                this.state = 1270;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 59) {
                    {
                        this.state = 1269;
                        this.classBody();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enumConstantModifier() {
        let localContext = new EnumConstantModifierContext(this.context, this.state);
        this.enterRule(localContext, 194, Java8Parser.RULE_enumConstantModifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1272;
                this.annotation();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enumBodyDeclarations() {
        let localContext = new EnumBodyDeclarationsContext(this.context, this.state);
        this.enterRule(localContext, 196, Java8Parser.RULE_enumBodyDeclarations);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1274;
                this.match(Java8Parser.SEMI);
                this.state = 1278;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1140957815) !== 0) || _la === 68 || _la === 102 || _la === 103) {
                    {
                        {
                            this.state = 1275;
                            this.classBodyDeclaration();
                        }
                    }
                    this.state = 1280;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceDeclaration() {
        let localContext = new InterfaceDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 198, Java8Parser.RULE_interfaceDeclaration);
        try {
            this.state = 1283;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 125, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1281;
                        this.normalInterfaceDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1282;
                        this.annotationTypeDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    normalInterfaceDeclaration() {
        let localContext = new NormalInterfaceDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 200, Java8Parser.RULE_normalInterfaceDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1288;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 1285;
                            this.interfaceModifier();
                        }
                    }
                    this.state = 1290;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1291;
                this.match(Java8Parser.INTERFACE);
                this.state = 1292;
                this.match(Java8Parser.Identifier);
                this.state = 1294;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 1293;
                        this.typeParameters();
                    }
                }
                this.state = 1297;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17) {
                    {
                        this.state = 1296;
                        this.extendsInterfaces();
                    }
                }
                this.state = 1299;
                this.interfaceBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceModifier() {
        let localContext = new InterfaceModifierContext(this.context, this.state);
        this.enterRule(localContext, 202, Java8Parser.RULE_interfaceModifier);
        try {
            this.state = 1308;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1301;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1302;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.PROTECTED:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1303;
                        this.match(Java8Parser.PROTECTED);
                    }
                    break;
                case Java8Parser.PRIVATE:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1304;
                        this.match(Java8Parser.PRIVATE);
                    }
                    break;
                case Java8Parser.ABSTRACT:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1305;
                        this.match(Java8Parser.ABSTRACT);
                    }
                    break;
                case Java8Parser.STATIC:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1306;
                        this.match(Java8Parser.STATIC);
                    }
                    break;
                case Java8Parser.STRICTFP:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1307;
                        this.match(Java8Parser.STRICTFP);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    extendsInterfaces() {
        let localContext = new ExtendsInterfacesContext(this.context, this.state);
        this.enterRule(localContext, 204, Java8Parser.RULE_extendsInterfaces);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1310;
                this.match(Java8Parser.EXTENDS);
                this.state = 1311;
                this.interfaceTypeList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceBody() {
        let localContext = new InterfaceBodyContext(this.context, this.state);
        this.enterRule(localContext, 206, Java8Parser.RULE_interfaceBody);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1313;
                this.match(Java8Parser.LBRACE);
                this.state = 1317;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 940921642) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073774711) !== 0) || _la === 68 || _la === 102 || _la === 103) {
                    {
                        {
                            this.state = 1314;
                            this.interfaceMemberDeclaration();
                        }
                    }
                    this.state = 1319;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1320;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceMemberDeclaration() {
        let localContext = new InterfaceMemberDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 208, Java8Parser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 1327;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 131, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1322;
                        this.constantDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1323;
                        this.interfaceMethodDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1324;
                        this.classDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1325;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1326;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    constantDeclaration() {
        let localContext = new ConstantDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 210, Java8Parser.RULE_constantDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1332;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & 1179649) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 1329;
                            this.constantModifier();
                        }
                    }
                    this.state = 1334;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1335;
                this.unannType();
                this.state = 1336;
                this.variableDeclaratorList();
                this.state = 1337;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    constantModifier() {
        let localContext = new ConstantModifierContext(this.context, this.state);
        this.enterRule(localContext, 212, Java8Parser.RULE_constantModifier);
        try {
            this.state = 1343;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1339;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1340;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.STATIC:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1341;
                        this.match(Java8Parser.STATIC);
                    }
                    break;
                case Java8Parser.FINAL:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1342;
                        this.match(Java8Parser.FINAL);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceMethodDeclaration() {
        let localContext = new InterfaceMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 214, Java8Parser.RULE_interfaceMethodDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1348;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || _la === 12 || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 25) !== 0) || _la === 103) {
                    {
                        {
                            this.state = 1345;
                            this.interfaceMethodModifier();
                        }
                    }
                    this.state = 1350;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1351;
                this.methodHeader();
                this.state = 1352;
                this.methodBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    interfaceMethodModifier() {
        let localContext = new InterfaceMethodModifierContext(this.context, this.state);
        this.enterRule(localContext, 216, Java8Parser.RULE_interfaceMethodModifier);
        try {
            this.state = 1360;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1354;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1355;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.ABSTRACT:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1356;
                        this.match(Java8Parser.ABSTRACT);
                    }
                    break;
                case Java8Parser.DEFAULT:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1357;
                        this.match(Java8Parser.DEFAULT);
                    }
                    break;
                case Java8Parser.STATIC:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1358;
                        this.match(Java8Parser.STATIC);
                    }
                    break;
                case Java8Parser.STRICTFP:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1359;
                        this.match(Java8Parser.STRICTFP);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    annotationTypeDeclaration() {
        let localContext = new AnnotationTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 218, Java8Parser.RULE_annotationTypeDeclaration);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1365;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 136, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1362;
                                this.interfaceModifier();
                            }
                        }
                    }
                    this.state = 1367;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 136, this.context);
                }
                this.state = 1368;
                this.match(Java8Parser.AT);
                this.state = 1369;
                this.match(Java8Parser.INTERFACE);
                this.state = 1370;
                this.match(Java8Parser.Identifier);
                this.state = 1371;
                this.annotationTypeBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    annotationTypeBody() {
        let localContext = new AnnotationTypeBodyContext(this.context, this.state);
        this.enterRule(localContext, 220, Java8Parser.RULE_annotationTypeBody);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1373;
                this.match(Java8Parser.LBRACE);
                this.state = 1377;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 940917546) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073741943) !== 0) || _la === 102 || _la === 103) {
                    {
                        {
                            this.state = 1374;
                            this.annotationTypeMemberDeclaration();
                        }
                    }
                    this.state = 1379;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1380;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    annotationTypeMemberDeclaration() {
        let localContext = new AnnotationTypeMemberDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 222, Java8Parser.RULE_annotationTypeMemberDeclaration);
        try {
            this.state = 1387;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 138, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1382;
                        this.annotationTypeElementDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1383;
                        this.constantDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1384;
                        this.classDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1385;
                        this.interfaceDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1386;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    annotationTypeElementDeclaration() {
        let localContext = new AnnotationTypeElementDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 224, Java8Parser.RULE_annotationTypeElementDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1392;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || _la === 35 || _la === 103) {
                    {
                        {
                            this.state = 1389;
                            this.annotationTypeElementModifier();
                        }
                    }
                    this.state = 1394;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1395;
                this.unannType();
                this.state = 1396;
                this.match(Java8Parser.Identifier);
                this.state = 1397;
                this.match(Java8Parser.LPAREN);
                this.state = 1398;
                this.match(Java8Parser.RPAREN);
                this.state = 1400;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 61 || _la === 103) {
                    {
                        this.state = 1399;
                        this.dims();
                    }
                }
                this.state = 1403;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 12) {
                    {
                        this.state = 1402;
                        this.defaultValue();
                    }
                }
                this.state = 1405;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    annotationTypeElementModifier() {
        let localContext = new AnnotationTypeElementModifierContext(this.context, this.state);
        this.enterRule(localContext, 226, Java8Parser.RULE_annotationTypeElementModifier);
        try {
            this.state = 1410;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1407;
                        this.annotation();
                    }
                    break;
                case Java8Parser.PUBLIC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1408;
                        this.match(Java8Parser.PUBLIC);
                    }
                    break;
                case Java8Parser.ABSTRACT:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1409;
                        this.match(Java8Parser.ABSTRACT);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    defaultValue() {
        let localContext = new DefaultValueContext(this.context, this.state);
        this.enterRule(localContext, 228, Java8Parser.RULE_defaultValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1412;
                this.match(Java8Parser.DEFAULT);
                this.state = 1413;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    annotation() {
        let localContext = new AnnotationContext(this.context, this.state);
        this.enterRule(localContext, 230, Java8Parser.RULE_annotation);
        try {
            this.state = 1418;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 143, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1415;
                        this.normalAnnotation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1416;
                        this.markerAnnotation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1417;
                        this.singleElementAnnotation();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    normalAnnotation() {
        let localContext = new NormalAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 232, Java8Parser.RULE_normalAnnotation);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1420;
                this.match(Java8Parser.AT);
                this.state = 1421;
                this.typeName();
                this.state = 1422;
                this.match(Java8Parser.LPAREN);
                this.state = 1424;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 102) {
                    {
                        this.state = 1423;
                        this.elementValuePairList();
                    }
                }
                this.state = 1426;
                this.match(Java8Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    elementValuePairList() {
        let localContext = new ElementValuePairListContext(this.context, this.state);
        this.enterRule(localContext, 234, Java8Parser.RULE_elementValuePairList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1428;
                this.elementValuePair();
                this.state = 1433;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 1429;
                            this.match(Java8Parser.COMMA);
                            this.state = 1430;
                            this.elementValuePair();
                        }
                    }
                    this.state = 1435;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    elementValuePair() {
        let localContext = new ElementValuePairContext(this.context, this.state);
        this.enterRule(localContext, 236, Java8Parser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1436;
                this.match(Java8Parser.Identifier);
                this.state = 1437;
                this.match(Java8Parser.ASSIGN);
                this.state = 1438;
                this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    elementValue() {
        let localContext = new ElementValueContext(this.context, this.state);
        this.enterRule(localContext, 238, Java8Parser.RULE_elementValue);
        try {
            this.state = 1443;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 146, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1440;
                        this.conditionalExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1441;
                        this.elementValueArrayInitializer();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1442;
                        this.annotation();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    elementValueArrayInitializer() {
        let localContext = new ElementValueArrayInitializerContext(this.context, this.state);
        this.enterRule(localContext, 240, Java8Parser.RULE_elementValueArrayInitializer);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1445;
                this.match(Java8Parser.LBRACE);
                this.state = 1447;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 6277193) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                    {
                        this.state = 1446;
                        this.elementValueList();
                    }
                }
                this.state = 1450;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                        this.state = 1449;
                        this.match(Java8Parser.COMMA);
                    }
                }
                this.state = 1452;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    elementValueList() {
        let localContext = new ElementValueListContext(this.context, this.state);
        this.enterRule(localContext, 242, Java8Parser.RULE_elementValueList);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1454;
                this.elementValue();
                this.state = 1459;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 149, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1455;
                                this.match(Java8Parser.COMMA);
                                this.state = 1456;
                                this.elementValue();
                            }
                        }
                    }
                    this.state = 1461;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 149, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    markerAnnotation() {
        let localContext = new MarkerAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 244, Java8Parser.RULE_markerAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1462;
                this.match(Java8Parser.AT);
                this.state = 1463;
                this.typeName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    singleElementAnnotation() {
        let localContext = new SingleElementAnnotationContext(this.context, this.state);
        this.enterRule(localContext, 246, Java8Parser.RULE_singleElementAnnotation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1465;
                this.match(Java8Parser.AT);
                this.state = 1466;
                this.typeName();
                this.state = 1467;
                this.match(Java8Parser.LPAREN);
                this.state = 1468;
                this.elementValue();
                this.state = 1469;
                this.match(Java8Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arrayInitializer() {
        let localContext = new ArrayInitializerContext(this.context, this.state);
        this.enterRule(localContext, 248, Java8Parser.RULE_arrayInitializer);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1471;
                this.match(Java8Parser.LBRACE);
                this.state = 1473;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 6277193) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                    {
                        this.state = 1472;
                        this.variableInitializerList();
                    }
                }
                this.state = 1476;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                        this.state = 1475;
                        this.match(Java8Parser.COMMA);
                    }
                }
                this.state = 1478;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    variableInitializerList() {
        let localContext = new VariableInitializerListContext(this.context, this.state);
        this.enterRule(localContext, 250, Java8Parser.RULE_variableInitializerList);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1480;
                this.variableInitializer();
                this.state = 1485;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1481;
                                this.match(Java8Parser.COMMA);
                                this.state = 1482;
                                this.variableInitializer();
                            }
                        }
                    }
                    this.state = 1487;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 152, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    block() {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 252, Java8Parser.RULE_block);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1488;
                this.match(Java8Parser.LBRACE);
                this.state = 1490;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2826267454) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
                    {
                        this.state = 1489;
                        this.blockStatements();
                    }
                }
                this.state = 1492;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    blockStatements() {
        let localContext = new BlockStatementsContext(this.context, this.state);
        this.enterRule(localContext, 254, Java8Parser.RULE_blockStatements);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1494;
                this.blockStatement();
                this.state = 1498;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2826267454) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
                    {
                        {
                            this.state = 1495;
                            this.blockStatement();
                        }
                    }
                    this.state = 1500;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    blockStatement() {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 256, Java8Parser.RULE_blockStatement);
        try {
            this.state = 1504;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 155, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1501;
                        this.localVariableDeclarationStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1502;
                        this.classDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1503;
                        this.statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    localVariableDeclarationStatement() {
        let localContext = new LocalVariableDeclarationStatementContext(this.context, this.state);
        this.enterRule(localContext, 258, Java8Parser.RULE_localVariableDeclarationStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1506;
                this.localVariableDeclaration();
                this.state = 1507;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    localVariableDeclaration() {
        let localContext = new LocalVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 260, Java8Parser.RULE_localVariableDeclaration);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1512;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 18 || _la === 103) {
                    {
                        {
                            this.state = 1509;
                            this.variableModifier();
                        }
                    }
                    this.state = 1514;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1515;
                this.unannType();
                this.state = 1516;
                this.variableDeclaratorList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statement() {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 262, Java8Parser.RULE_statement);
        try {
            this.state = 1524;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 157, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1518;
                        this.statementWithoutTrailingSubstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1519;
                        this.labeledStatement();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1520;
                        this.ifThenStatement();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1521;
                        this.ifThenElseStatement();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1522;
                        this.whileStatement();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1523;
                        this.forStatement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statementNoShortIf() {
        let localContext = new StatementNoShortIfContext(this.context, this.state);
        this.enterRule(localContext, 264, Java8Parser.RULE_statementNoShortIf);
        try {
            this.state = 1531;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 158, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1526;
                        this.statementWithoutTrailingSubstatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1527;
                        this.labeledStatementNoShortIf();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1528;
                        this.ifThenElseStatementNoShortIf();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1529;
                        this.whileStatementNoShortIf();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1530;
                        this.forStatementNoShortIf();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statementWithoutTrailingSubstatement() {
        let localContext = new StatementWithoutTrailingSubstatementContext(this.context, this.state);
        this.enterRule(localContext, 266, Java8Parser.RULE_statementWithoutTrailingSubstatement);
        try {
            this.state = 1545;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.LBRACE:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1533;
                        this.block();
                    }
                    break;
                case Java8Parser.SEMI:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1534;
                        this.emptyStatement();
                    }
                    break;
                case Java8Parser.BOOLEAN:
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.NEW:
                case Java8Parser.SHORT:
                case Java8Parser.SUPER:
                case Java8Parser.THIS:
                case Java8Parser.VOID:
                case Java8Parser.IntegerLiteral:
                case Java8Parser.FloatingPointLiteral:
                case Java8Parser.BooleanLiteral:
                case Java8Parser.CharacterLiteral:
                case Java8Parser.StringLiteral:
                case Java8Parser.NullLiteral:
                case Java8Parser.LPAREN:
                case Java8Parser.INC:
                case Java8Parser.DEC:
                case Java8Parser.Identifier:
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1535;
                        this.expressionStatement();
                    }
                    break;
                case Java8Parser.ASSERT:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1536;
                        this.assertStatement();
                    }
                    break;
                case Java8Parser.SWITCH:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1537;
                        this.switchStatement();
                    }
                    break;
                case Java8Parser.DO:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1538;
                        this.doStatement();
                    }
                    break;
                case Java8Parser.BREAK:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1539;
                        this.breakStatement();
                    }
                    break;
                case Java8Parser.CONTINUE:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1540;
                        this.continueStatement();
                    }
                    break;
                case Java8Parser.RETURN:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 1541;
                        this.returnStatement();
                    }
                    break;
                case Java8Parser.SYNCHRONIZED:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 1542;
                        this.synchronizedStatement();
                    }
                    break;
                case Java8Parser.THROW:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 1543;
                        this.throwStatement();
                    }
                    break;
                case Java8Parser.TRY:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 1544;
                        this.tryStatement();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    emptyStatement() {
        let localContext = new EmptyStatementContext(this.context, this.state);
        this.enterRule(localContext, 268, Java8Parser.RULE_emptyStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1547;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    labeledStatement() {
        let localContext = new LabeledStatementContext(this.context, this.state);
        this.enterRule(localContext, 270, Java8Parser.RULE_labeledStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1549;
                this.match(Java8Parser.Identifier);
                this.state = 1550;
                this.match(Java8Parser.COLON);
                this.state = 1551;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    labeledStatementNoShortIf() {
        let localContext = new LabeledStatementNoShortIfContext(this.context, this.state);
        this.enterRule(localContext, 272, Java8Parser.RULE_labeledStatementNoShortIf);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1553;
                this.match(Java8Parser.Identifier);
                this.state = 1554;
                this.match(Java8Parser.COLON);
                this.state = 1555;
                this.statementNoShortIf();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    expressionStatement() {
        let localContext = new ExpressionStatementContext(this.context, this.state);
        this.enterRule(localContext, 274, Java8Parser.RULE_expressionStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1557;
                this.statementExpression();
                this.state = 1558;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statementExpression() {
        let localContext = new StatementExpressionContext(this.context, this.state);
        this.enterRule(localContext, 276, Java8Parser.RULE_statementExpression);
        try {
            this.state = 1567;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 160, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1560;
                        this.assignment();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1561;
                        this.preIncrementExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1562;
                        this.preDecrementExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1563;
                        this.postIncrementExpression();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1564;
                        this.postDecrementExpression();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1565;
                        this.methodInvocation();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1566;
                        this.classInstanceCreationExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    ifThenStatement() {
        let localContext = new IfThenStatementContext(this.context, this.state);
        this.enterRule(localContext, 278, Java8Parser.RULE_ifThenStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1569;
                this.match(Java8Parser.IF);
                this.state = 1570;
                this.match(Java8Parser.LPAREN);
                this.state = 1571;
                this.expression();
                this.state = 1572;
                this.match(Java8Parser.RPAREN);
                this.state = 1573;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    ifThenElseStatement() {
        let localContext = new IfThenElseStatementContext(this.context, this.state);
        this.enterRule(localContext, 280, Java8Parser.RULE_ifThenElseStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1575;
                this.match(Java8Parser.IF);
                this.state = 1576;
                this.match(Java8Parser.LPAREN);
                this.state = 1577;
                this.expression();
                this.state = 1578;
                this.match(Java8Parser.RPAREN);
                this.state = 1579;
                this.statementNoShortIf();
                this.state = 1580;
                this.match(Java8Parser.ELSE);
                this.state = 1581;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    ifThenElseStatementNoShortIf() {
        let localContext = new IfThenElseStatementNoShortIfContext(this.context, this.state);
        this.enterRule(localContext, 282, Java8Parser.RULE_ifThenElseStatementNoShortIf);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1583;
                this.match(Java8Parser.IF);
                this.state = 1584;
                this.match(Java8Parser.LPAREN);
                this.state = 1585;
                this.expression();
                this.state = 1586;
                this.match(Java8Parser.RPAREN);
                this.state = 1587;
                this.statementNoShortIf();
                this.state = 1588;
                this.match(Java8Parser.ELSE);
                this.state = 1589;
                this.statementNoShortIf();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    assertStatement() {
        let localContext = new AssertStatementContext(this.context, this.state);
        this.enterRule(localContext, 284, Java8Parser.RULE_assertStatement);
        try {
            this.state = 1601;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 161, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1591;
                        this.match(Java8Parser.ASSERT);
                        this.state = 1592;
                        this.expression();
                        this.state = 1593;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1595;
                        this.match(Java8Parser.ASSERT);
                        this.state = 1596;
                        this.expression();
                        this.state = 1597;
                        this.match(Java8Parser.COLON);
                        this.state = 1598;
                        this.expression();
                        this.state = 1599;
                        this.match(Java8Parser.SEMI);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    switchStatement() {
        let localContext = new SwitchStatementContext(this.context, this.state);
        this.enterRule(localContext, 286, Java8Parser.RULE_switchStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1603;
                this.match(Java8Parser.SWITCH);
                this.state = 1604;
                this.match(Java8Parser.LPAREN);
                this.state = 1605;
                this.expression();
                this.state = 1606;
                this.match(Java8Parser.RPAREN);
                this.state = 1607;
                this.switchBlock();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    switchBlock() {
        let localContext = new SwitchBlockContext(this.context, this.state);
        this.enterRule(localContext, 288, Java8Parser.RULE_switchBlock);
        let _la;
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1609;
                this.match(Java8Parser.LBRACE);
                this.state = 1613;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 162, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1610;
                                this.switchBlockStatementGroup();
                            }
                        }
                    }
                    this.state = 1615;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 162, this.context);
                }
                this.state = 1619;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 6 || _la === 12) {
                    {
                        {
                            this.state = 1616;
                            this.switchLabel();
                        }
                    }
                    this.state = 1621;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1622;
                this.match(Java8Parser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    switchBlockStatementGroup() {
        let localContext = new SwitchBlockStatementGroupContext(this.context, this.state);
        this.enterRule(localContext, 290, Java8Parser.RULE_switchBlockStatementGroup);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1624;
                this.switchLabels();
                this.state = 1625;
                this.blockStatements();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    switchLabels() {
        let localContext = new SwitchLabelsContext(this.context, this.state);
        this.enterRule(localContext, 292, Java8Parser.RULE_switchLabels);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1627;
                this.switchLabel();
                this.state = 1631;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 6 || _la === 12) {
                    {
                        {
                            this.state = 1628;
                            this.switchLabel();
                        }
                    }
                    this.state = 1633;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    switchLabel() {
        let localContext = new SwitchLabelContext(this.context, this.state);
        this.enterRule(localContext, 294, Java8Parser.RULE_switchLabel);
        try {
            this.state = 1644;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 165, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1634;
                        this.match(Java8Parser.CASE);
                        this.state = 1635;
                        this.constantExpression();
                        this.state = 1636;
                        this.match(Java8Parser.COLON);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1638;
                        this.match(Java8Parser.CASE);
                        this.state = 1639;
                        this.enumConstantName();
                        this.state = 1640;
                        this.match(Java8Parser.COLON);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1642;
                        this.match(Java8Parser.DEFAULT);
                        this.state = 1643;
                        this.match(Java8Parser.COLON);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enumConstantName() {
        let localContext = new EnumConstantNameContext(this.context, this.state);
        this.enterRule(localContext, 296, Java8Parser.RULE_enumConstantName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1646;
                this.match(Java8Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    whileStatement() {
        let localContext = new WhileStatementContext(this.context, this.state);
        this.enterRule(localContext, 298, Java8Parser.RULE_whileStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1648;
                this.match(Java8Parser.WHILE);
                this.state = 1649;
                this.match(Java8Parser.LPAREN);
                this.state = 1650;
                this.expression();
                this.state = 1651;
                this.match(Java8Parser.RPAREN);
                this.state = 1652;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    whileStatementNoShortIf() {
        let localContext = new WhileStatementNoShortIfContext(this.context, this.state);
        this.enterRule(localContext, 300, Java8Parser.RULE_whileStatementNoShortIf);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1654;
                this.match(Java8Parser.WHILE);
                this.state = 1655;
                this.match(Java8Parser.LPAREN);
                this.state = 1656;
                this.expression();
                this.state = 1657;
                this.match(Java8Parser.RPAREN);
                this.state = 1658;
                this.statementNoShortIf();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    doStatement() {
        let localContext = new DoStatementContext(this.context, this.state);
        this.enterRule(localContext, 302, Java8Parser.RULE_doStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1660;
                this.match(Java8Parser.DO);
                this.state = 1661;
                this.statement();
                this.state = 1662;
                this.match(Java8Parser.WHILE);
                this.state = 1663;
                this.match(Java8Parser.LPAREN);
                this.state = 1664;
                this.expression();
                this.state = 1665;
                this.match(Java8Parser.RPAREN);
                this.state = 1666;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    forStatement() {
        let localContext = new ForStatementContext(this.context, this.state);
        this.enterRule(localContext, 304, Java8Parser.RULE_forStatement);
        try {
            this.state = 1670;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 166, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1668;
                        this.basicForStatement();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1669;
                        this.enhancedForStatement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    forStatementNoShortIf() {
        let localContext = new ForStatementNoShortIfContext(this.context, this.state);
        this.enterRule(localContext, 306, Java8Parser.RULE_forStatementNoShortIf);
        try {
            this.state = 1674;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 167, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1672;
                        this.basicForStatementNoShortIf();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1673;
                        this.enhancedForStatementNoShortIf();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    basicForStatement() {
        let localContext = new BasicForStatementContext(this.context, this.state);
        this.enterRule(localContext, 308, Java8Parser.RULE_basicForStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1676;
                this.match(Java8Parser.FOR);
                this.state = 1677;
                this.match(Java8Parser.LPAREN);
                this.state = 1679;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819899688) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
                    {
                        this.state = 1678;
                        this.forInit();
                    }
                }
                this.state = 1681;
                this.match(Java8Parser.SEMI);
                this.state = 1683;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                    {
                        this.state = 1682;
                        this.expression();
                    }
                }
                this.state = 1685;
                this.match(Java8Parser.SEMI);
                this.state = 1687;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
                    {
                        this.state = 1686;
                        this.forUpdate();
                    }
                }
                this.state = 1689;
                this.match(Java8Parser.RPAREN);
                this.state = 1690;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    basicForStatementNoShortIf() {
        let localContext = new BasicForStatementNoShortIfContext(this.context, this.state);
        this.enterRule(localContext, 310, Java8Parser.RULE_basicForStatementNoShortIf);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1692;
                this.match(Java8Parser.FOR);
                this.state = 1693;
                this.match(Java8Parser.LPAREN);
                this.state = 1695;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819899688) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
                    {
                        this.state = 1694;
                        this.forInit();
                    }
                }
                this.state = 1697;
                this.match(Java8Parser.SEMI);
                this.state = 1699;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                    {
                        this.state = 1698;
                        this.expression();
                    }
                }
                this.state = 1701;
                this.match(Java8Parser.SEMI);
                this.state = 1703;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 25165827) !== 0)) {
                    {
                        this.state = 1702;
                        this.forUpdate();
                    }
                }
                this.state = 1705;
                this.match(Java8Parser.RPAREN);
                this.state = 1706;
                this.statementNoShortIf();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    forInit() {
        let localContext = new ForInitContext(this.context, this.state);
        this.enterRule(localContext, 312, Java8Parser.RULE_forInit);
        try {
            this.state = 1710;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 174, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1708;
                        this.statementExpressionList();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1709;
                        this.localVariableDeclaration();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    forUpdate() {
        let localContext = new ForUpdateContext(this.context, this.state);
        this.enterRule(localContext, 314, Java8Parser.RULE_forUpdate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1712;
                this.statementExpressionList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    statementExpressionList() {
        let localContext = new StatementExpressionListContext(this.context, this.state);
        this.enterRule(localContext, 316, Java8Parser.RULE_statementExpressionList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1714;
                this.statementExpression();
                this.state = 1719;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 1715;
                            this.match(Java8Parser.COMMA);
                            this.state = 1716;
                            this.statementExpression();
                        }
                    }
                    this.state = 1721;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enhancedForStatement() {
        let localContext = new EnhancedForStatementContext(this.context, this.state);
        this.enterRule(localContext, 318, Java8Parser.RULE_enhancedForStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1722;
                this.match(Java8Parser.FOR);
                this.state = 1723;
                this.match(Java8Parser.LPAREN);
                this.state = 1727;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 18 || _la === 103) {
                    {
                        {
                            this.state = 1724;
                            this.variableModifier();
                        }
                    }
                    this.state = 1729;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1730;
                this.unannType();
                this.state = 1731;
                this.variableDeclaratorId();
                this.state = 1732;
                this.match(Java8Parser.COLON);
                this.state = 1733;
                this.expression();
                this.state = 1734;
                this.match(Java8Parser.RPAREN);
                this.state = 1735;
                this.statement();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    enhancedForStatementNoShortIf() {
        let localContext = new EnhancedForStatementNoShortIfContext(this.context, this.state);
        this.enterRule(localContext, 320, Java8Parser.RULE_enhancedForStatementNoShortIf);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1737;
                this.match(Java8Parser.FOR);
                this.state = 1738;
                this.match(Java8Parser.LPAREN);
                this.state = 1742;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 18 || _la === 103) {
                    {
                        {
                            this.state = 1739;
                            this.variableModifier();
                        }
                    }
                    this.state = 1744;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1745;
                this.unannType();
                this.state = 1746;
                this.variableDeclaratorId();
                this.state = 1747;
                this.match(Java8Parser.COLON);
                this.state = 1748;
                this.expression();
                this.state = 1749;
                this.match(Java8Parser.RPAREN);
                this.state = 1750;
                this.statementNoShortIf();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    breakStatement() {
        let localContext = new BreakStatementContext(this.context, this.state);
        this.enterRule(localContext, 322, Java8Parser.RULE_breakStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1752;
                this.match(Java8Parser.BREAK);
                this.state = 1754;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 102) {
                    {
                        this.state = 1753;
                        this.match(Java8Parser.Identifier);
                    }
                }
                this.state = 1756;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    continueStatement() {
        let localContext = new ContinueStatementContext(this.context, this.state);
        this.enterRule(localContext, 324, Java8Parser.RULE_continueStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1758;
                this.match(Java8Parser.CONTINUE);
                this.state = 1760;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 102) {
                    {
                        this.state = 1759;
                        this.match(Java8Parser.Identifier);
                    }
                }
                this.state = 1762;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    returnStatement() {
        let localContext = new ReturnStatementContext(this.context, this.state);
        this.enterRule(localContext, 326, Java8Parser.RULE_returnStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1764;
                this.match(Java8Parser.RETURN);
                this.state = 1766;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                    {
                        this.state = 1765;
                        this.expression();
                    }
                }
                this.state = 1768;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    throwStatement() {
        let localContext = new ThrowStatementContext(this.context, this.state);
        this.enterRule(localContext, 328, Java8Parser.RULE_throwStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1770;
                this.match(Java8Parser.THROW);
                this.state = 1771;
                this.expression();
                this.state = 1772;
                this.match(Java8Parser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    synchronizedStatement() {
        let localContext = new SynchronizedStatementContext(this.context, this.state);
        this.enterRule(localContext, 330, Java8Parser.RULE_synchronizedStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1774;
                this.match(Java8Parser.SYNCHRONIZED);
                this.state = 1775;
                this.match(Java8Parser.LPAREN);
                this.state = 1776;
                this.expression();
                this.state = 1777;
                this.match(Java8Parser.RPAREN);
                this.state = 1778;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    tryStatement() {
        let localContext = new TryStatementContext(this.context, this.state);
        this.enterRule(localContext, 332, Java8Parser.RULE_tryStatement);
        let _la;
        try {
            this.state = 1792;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 182, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1780;
                        this.match(Java8Parser.TRY);
                        this.state = 1781;
                        this.block();
                        this.state = 1782;
                        this.catches();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1784;
                        this.match(Java8Parser.TRY);
                        this.state = 1785;
                        this.block();
                        this.state = 1787;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 7) {
                            {
                                this.state = 1786;
                                this.catches();
                            }
                        }
                        this.state = 1789;
                        this.finally_();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1791;
                        this.tryWithResourcesStatement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    catches() {
        let localContext = new CatchesContext(this.context, this.state);
        this.enterRule(localContext, 334, Java8Parser.RULE_catches);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1794;
                this.catchClause();
                this.state = 1798;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                        {
                            this.state = 1795;
                            this.catchClause();
                        }
                    }
                    this.state = 1800;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    catchClause() {
        let localContext = new CatchClauseContext(this.context, this.state);
        this.enterRule(localContext, 336, Java8Parser.RULE_catchClause);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1801;
                this.match(Java8Parser.CATCH);
                this.state = 1802;
                this.match(Java8Parser.LPAREN);
                this.state = 1803;
                this.catchFormalParameter();
                this.state = 1804;
                this.match(Java8Parser.RPAREN);
                this.state = 1805;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    catchFormalParameter() {
        let localContext = new CatchFormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 338, Java8Parser.RULE_catchFormalParameter);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1810;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 18 || _la === 103) {
                    {
                        {
                            this.state = 1807;
                            this.variableModifier();
                        }
                    }
                    this.state = 1812;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1813;
                this.catchType();
                this.state = 1814;
                this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    catchType() {
        let localContext = new CatchTypeContext(this.context, this.state);
        this.enterRule(localContext, 340, Java8Parser.RULE_catchType);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1816;
                this.unannClassType();
                this.state = 1821;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 86) {
                    {
                        {
                            this.state = 1817;
                            this.match(Java8Parser.BITOR);
                            this.state = 1818;
                            this.classType();
                        }
                    }
                    this.state = 1823;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    finally_() {
        let localContext = new Finally_Context(this.context, this.state);
        this.enterRule(localContext, 342, Java8Parser.RULE_finally_);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1824;
                this.match(Java8Parser.FINALLY);
                this.state = 1825;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    tryWithResourcesStatement() {
        let localContext = new TryWithResourcesStatementContext(this.context, this.state);
        this.enterRule(localContext, 344, Java8Parser.RULE_tryWithResourcesStatement);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1827;
                this.match(Java8Parser.TRY);
                this.state = 1828;
                this.resourceSpecification();
                this.state = 1829;
                this.block();
                this.state = 1831;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 7) {
                    {
                        this.state = 1830;
                        this.catches();
                    }
                }
                this.state = 1834;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                        this.state = 1833;
                        this.finally_();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    resourceSpecification() {
        let localContext = new ResourceSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 346, Java8Parser.RULE_resourceSpecification);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1836;
                this.match(Java8Parser.LPAREN);
                this.state = 1837;
                this.resourceList();
                this.state = 1839;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 63) {
                    {
                        this.state = 1838;
                        this.match(Java8Parser.SEMI);
                    }
                }
                this.state = 1841;
                this.match(Java8Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    resourceList() {
        let localContext = new ResourceListContext(this.context, this.state);
        this.enterRule(localContext, 348, Java8Parser.RULE_resourceList);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1843;
                this.resource();
                this.state = 1848;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 189, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1844;
                                this.match(Java8Parser.SEMI);
                                this.state = 1845;
                                this.resource();
                            }
                        }
                    }
                    this.state = 1850;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 189, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    resource() {
        let localContext = new ResourceContext(this.context, this.state);
        this.enterRule(localContext, 350, Java8Parser.RULE_resource);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1854;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 18 || _la === 103) {
                    {
                        {
                            this.state = 1851;
                            this.variableModifier();
                        }
                    }
                    this.state = 1856;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1857;
                this.unannType();
                this.state = 1858;
                this.variableDeclaratorId();
                this.state = 1859;
                this.match(Java8Parser.ASSIGN);
                this.state = 1860;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primary() {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 352, Java8Parser.RULE_primary);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 1864;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 191, this.context)) {
                    case 1:
                        {
                            this.state = 1862;
                            this.primaryNoNewArray_lfno_primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1863;
                            this.arrayCreationExpression();
                        }
                        break;
                }
                this.state = 1869;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 1866;
                                this.primaryNoNewArray_lf_primary();
                            }
                        }
                    }
                    this.state = 1871;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 192, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray() {
        let localContext = new PrimaryNoNewArrayContext(this.context, this.state);
        this.enterRule(localContext, 354, Java8Parser.RULE_primaryNoNewArray);
        let _la;
        try {
            this.state = 1901;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 194, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1872;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1873;
                        this.typeName();
                        this.state = 1878;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 61) {
                            {
                                {
                                    this.state = 1874;
                                    this.match(Java8Parser.LBRACK);
                                    this.state = 1875;
                                    this.match(Java8Parser.RBRACK);
                                }
                            }
                            this.state = 1880;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1881;
                        this.match(Java8Parser.DOT);
                        this.state = 1882;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1884;
                        this.match(Java8Parser.VOID);
                        this.state = 1885;
                        this.match(Java8Parser.DOT);
                        this.state = 1886;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1887;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1888;
                        this.typeName();
                        this.state = 1889;
                        this.match(Java8Parser.DOT);
                        this.state = 1890;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1892;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1893;
                        this.expression();
                        this.state = 1894;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1896;
                        this.classInstanceCreationExpression();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1897;
                        this.fieldAccess();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 1898;
                        this.arrayAccess();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 1899;
                        this.methodInvocation();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 1900;
                        this.methodReference();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lf_arrayAccess() {
        let localContext = new PrimaryNoNewArray_lf_arrayAccessContext(this.context, this.state);
        this.enterRule(localContext, 356, Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lfno_arrayAccess() {
        let localContext = new PrimaryNoNewArray_lfno_arrayAccessContext(this.context, this.state);
        this.enterRule(localContext, 358, Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess);
        let _la;
        try {
            this.state = 1933;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 196, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1905;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1906;
                        this.typeName();
                        this.state = 1911;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 61) {
                            {
                                {
                                    this.state = 1907;
                                    this.match(Java8Parser.LBRACK);
                                    this.state = 1908;
                                    this.match(Java8Parser.RBRACK);
                                }
                            }
                            this.state = 1913;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1914;
                        this.match(Java8Parser.DOT);
                        this.state = 1915;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1917;
                        this.match(Java8Parser.VOID);
                        this.state = 1918;
                        this.match(Java8Parser.DOT);
                        this.state = 1919;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1920;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1921;
                        this.typeName();
                        this.state = 1922;
                        this.match(Java8Parser.DOT);
                        this.state = 1923;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1925;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1926;
                        this.expression();
                        this.state = 1927;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1929;
                        this.classInstanceCreationExpression();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1930;
                        this.fieldAccess();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 1931;
                        this.methodInvocation();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 1932;
                        this.methodReference();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lf_primary() {
        let localContext = new PrimaryNoNewArray_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 360, Java8Parser.RULE_primaryNoNewArray_lf_primary);
        try {
            this.state = 1940;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 197, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1935;
                        this.classInstanceCreationExpression_lf_primary();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1936;
                        this.fieldAccess_lf_primary();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1937;
                        this.arrayAccess_lf_primary();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1938;
                        this.methodInvocation_lf_primary();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1939;
                        this.methodReference_lf_primary();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary() {
        let localContext = new PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 362, Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary() {
        let localContext = new PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 364, Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary);
        try {
            this.state = 1948;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 198, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1944;
                        this.classInstanceCreationExpression_lf_primary();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1945;
                        this.fieldAccess_lf_primary();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1946;
                        this.methodInvocation_lf_primary();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1947;
                        this.methodReference_lf_primary();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lfno_primary() {
        let localContext = new PrimaryNoNewArray_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 366, Java8Parser.RULE_primaryNoNewArray_lfno_primary);
        let _la;
        try {
            this.state = 1990;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 201, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1950;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1951;
                        this.typeName();
                        this.state = 1956;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 61) {
                            {
                                {
                                    this.state = 1952;
                                    this.match(Java8Parser.LBRACK);
                                    this.state = 1953;
                                    this.match(Java8Parser.RBRACK);
                                }
                            }
                            this.state = 1958;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1959;
                        this.match(Java8Parser.DOT);
                        this.state = 1960;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 1962;
                        this.unannPrimitiveType();
                        this.state = 1967;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 61) {
                            {
                                {
                                    this.state = 1963;
                                    this.match(Java8Parser.LBRACK);
                                    this.state = 1964;
                                    this.match(Java8Parser.RBRACK);
                                }
                            }
                            this.state = 1969;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 1970;
                        this.match(Java8Parser.DOT);
                        this.state = 1971;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 1973;
                        this.match(Java8Parser.VOID);
                        this.state = 1974;
                        this.match(Java8Parser.DOT);
                        this.state = 1975;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 1976;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 1977;
                        this.typeName();
                        this.state = 1978;
                        this.match(Java8Parser.DOT);
                        this.state = 1979;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 1981;
                        this.match(Java8Parser.LPAREN);
                        this.state = 1982;
                        this.expression();
                        this.state = 1983;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 1985;
                        this.classInstanceCreationExpression_lfno_primary();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 1986;
                        this.fieldAccess_lfno_primary();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 1987;
                        this.arrayAccess_lfno_primary();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 1988;
                        this.methodInvocation_lfno_primary();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(localContext, 12);
                    {
                        this.state = 1989;
                        this.methodReference_lfno_primary();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary() {
        let localContext = new PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 368, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary);
        try {
            this.enterOuterAlt(localContext, 1);
            // tslint:disable-next-line:no-empty
            {
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary() {
        let localContext = new PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 370, Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary);
        let _la;
        try {
            this.state = 2033;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 204, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 1994;
                        this.literal();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 1995;
                        this.typeName();
                        this.state = 2000;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 61) {
                            {
                                {
                                    this.state = 1996;
                                    this.match(Java8Parser.LBRACK);
                                    this.state = 1997;
                                    this.match(Java8Parser.RBRACK);
                                }
                            }
                            this.state = 2002;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2003;
                        this.match(Java8Parser.DOT);
                        this.state = 2004;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2006;
                        this.unannPrimitiveType();
                        this.state = 2011;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 61) {
                            {
                                {
                                    this.state = 2007;
                                    this.match(Java8Parser.LBRACK);
                                    this.state = 2008;
                                    this.match(Java8Parser.RBRACK);
                                }
                            }
                            this.state = 2013;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2014;
                        this.match(Java8Parser.DOT);
                        this.state = 2015;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2017;
                        this.match(Java8Parser.VOID);
                        this.state = 2018;
                        this.match(Java8Parser.DOT);
                        this.state = 2019;
                        this.match(Java8Parser.CLASS);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2020;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2021;
                        this.typeName();
                        this.state = 2022;
                        this.match(Java8Parser.DOT);
                        this.state = 2023;
                        this.match(Java8Parser.THIS);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 2025;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2026;
                        this.expression();
                        this.state = 2027;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(localContext, 8);
                    {
                        this.state = 2029;
                        this.classInstanceCreationExpression_lfno_primary();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(localContext, 9);
                    {
                        this.state = 2030;
                        this.fieldAccess_lfno_primary();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(localContext, 10);
                    {
                        this.state = 2031;
                        this.methodInvocation_lfno_primary();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(localContext, 11);
                    {
                        this.state = 2032;
                        this.methodReference_lfno_primary();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classInstanceCreationExpression() {
        let localContext = new ClassInstanceCreationExpressionContext(this.context, this.state);
        this.enterRule(localContext, 372, Java8Parser.RULE_classInstanceCreationExpression);
        let _la;
        try {
            this.state = 2118;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 222, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2035;
                        this.match(Java8Parser.NEW);
                        this.state = 2037;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2036;
                                this.typeArguments();
                            }
                        }
                        this.state = 2042;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 2039;
                                    this.annotation();
                                }
                            }
                            this.state = 2044;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2045;
                        this.match(Java8Parser.Identifier);
                        this.state = 2056;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 65) {
                            {
                                {
                                    this.state = 2046;
                                    this.match(Java8Parser.DOT);
                                    this.state = 2050;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 103) {
                                        {
                                            {
                                                this.state = 2047;
                                                this.annotation();
                                            }
                                        }
                                        this.state = 2052;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                    this.state = 2053;
                                    this.match(Java8Parser.Identifier);
                                }
                            }
                            this.state = 2058;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2060;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2059;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 2062;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2064;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2063;
                                this.argumentList();
                            }
                        }
                        this.state = 2066;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2068;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 59) {
                            {
                                this.state = 2067;
                                this.classBody();
                            }
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2070;
                        this.expressionName();
                        this.state = 2071;
                        this.match(Java8Parser.DOT);
                        this.state = 2072;
                        this.match(Java8Parser.NEW);
                        this.state = 2074;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2073;
                                this.typeArguments();
                            }
                        }
                        this.state = 2079;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 2076;
                                    this.annotation();
                                }
                            }
                            this.state = 2081;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2082;
                        this.match(Java8Parser.Identifier);
                        this.state = 2084;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2083;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 2086;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2088;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2087;
                                this.argumentList();
                            }
                        }
                        this.state = 2090;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2092;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 59) {
                            {
                                this.state = 2091;
                                this.classBody();
                            }
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2094;
                        this.primary();
                        this.state = 2095;
                        this.match(Java8Parser.DOT);
                        this.state = 2096;
                        this.match(Java8Parser.NEW);
                        this.state = 2098;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2097;
                                this.typeArguments();
                            }
                        }
                        this.state = 2103;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 2100;
                                    this.annotation();
                                }
                            }
                            this.state = 2105;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2106;
                        this.match(Java8Parser.Identifier);
                        this.state = 2108;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2107;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 2110;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2112;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2111;
                                this.argumentList();
                            }
                        }
                        this.state = 2114;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2116;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 59) {
                            {
                                this.state = 2115;
                                this.classBody();
                            }
                        }
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classInstanceCreationExpression_lf_primary() {
        let localContext = new ClassInstanceCreationExpression_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 374, Java8Parser.RULE_classInstanceCreationExpression_lf_primary);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2120;
                this.match(Java8Parser.DOT);
                this.state = 2121;
                this.match(Java8Parser.NEW);
                this.state = 2123;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 2122;
                        this.typeArguments();
                    }
                }
                this.state = 2128;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 2125;
                            this.annotation();
                        }
                    }
                    this.state = 2130;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2131;
                this.match(Java8Parser.Identifier);
                this.state = 2133;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 2132;
                        this.typeArgumentsOrDiamond();
                    }
                }
                this.state = 2135;
                this.match(Java8Parser.LPAREN);
                this.state = 2137;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                    {
                        this.state = 2136;
                        this.argumentList();
                    }
                }
                this.state = 2139;
                this.match(Java8Parser.RPAREN);
                this.state = 2141;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 227, this.context)) {
                    case 1:
                        {
                            this.state = 2140;
                            this.classBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    classInstanceCreationExpression_lfno_primary() {
        let localContext = new ClassInstanceCreationExpression_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 376, Java8Parser.RULE_classInstanceCreationExpression_lfno_primary);
        let _la;
        try {
            this.state = 2202;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.NEW:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2143;
                        this.match(Java8Parser.NEW);
                        this.state = 2145;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2144;
                                this.typeArguments();
                            }
                        }
                        this.state = 2150;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 2147;
                                    this.annotation();
                                }
                            }
                            this.state = 2152;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2153;
                        this.match(Java8Parser.Identifier);
                        this.state = 2164;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 65) {
                            {
                                {
                                    this.state = 2154;
                                    this.match(Java8Parser.DOT);
                                    this.state = 2158;
                                    this.errorHandler.sync(this);
                                    _la = this.tokenStream.LA(1);
                                    while (_la === 103) {
                                        {
                                            {
                                                this.state = 2155;
                                                this.annotation();
                                            }
                                        }
                                        this.state = 2160;
                                        this.errorHandler.sync(this);
                                        _la = this.tokenStream.LA(1);
                                    }
                                    this.state = 2161;
                                    this.match(Java8Parser.Identifier);
                                }
                            }
                            this.state = 2166;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2168;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2167;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 2170;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2172;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2171;
                                this.argumentList();
                            }
                        }
                        this.state = 2174;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2176;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 234, this.context)) {
                            case 1:
                                {
                                    this.state = 2175;
                                    this.classBody();
                                }
                                break;
                        }
                    }
                    break;
                case Java8Parser.Identifier:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2178;
                        this.expressionName();
                        this.state = 2179;
                        this.match(Java8Parser.DOT);
                        this.state = 2180;
                        this.match(Java8Parser.NEW);
                        this.state = 2182;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2181;
                                this.typeArguments();
                            }
                        }
                        this.state = 2187;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 103) {
                            {
                                {
                                    this.state = 2184;
                                    this.annotation();
                                }
                            }
                            this.state = 2189;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2190;
                        this.match(Java8Parser.Identifier);
                        this.state = 2192;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2191;
                                this.typeArgumentsOrDiamond();
                            }
                        }
                        this.state = 2194;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2196;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2195;
                                this.argumentList();
                            }
                        }
                        this.state = 2198;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2200;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 239, this.context)) {
                            case 1:
                                {
                                    this.state = 2199;
                                    this.classBody();
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    typeArgumentsOrDiamond() {
        let localContext = new TypeArgumentsOrDiamondContext(this.context, this.state);
        this.enterRule(localContext, 378, Java8Parser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 2207;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 241, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2204;
                        this.typeArguments();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2205;
                        this.match(Java8Parser.LT);
                        this.state = 2206;
                        this.match(Java8Parser.GT);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fieldAccess() {
        let localContext = new FieldAccessContext(this.context, this.state);
        this.enterRule(localContext, 380, Java8Parser.RULE_fieldAccess);
        try {
            this.state = 2222;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 242, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2209;
                        this.primary();
                        this.state = 2210;
                        this.match(Java8Parser.DOT);
                        this.state = 2211;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2213;
                        this.match(Java8Parser.SUPER);
                        this.state = 2214;
                        this.match(Java8Parser.DOT);
                        this.state = 2215;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2216;
                        this.typeName();
                        this.state = 2217;
                        this.match(Java8Parser.DOT);
                        this.state = 2218;
                        this.match(Java8Parser.SUPER);
                        this.state = 2219;
                        this.match(Java8Parser.DOT);
                        this.state = 2220;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fieldAccess_lf_primary() {
        let localContext = new FieldAccess_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 382, Java8Parser.RULE_fieldAccess_lf_primary);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2224;
                this.match(Java8Parser.DOT);
                this.state = 2225;
                this.match(Java8Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    fieldAccess_lfno_primary() {
        let localContext = new FieldAccess_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 384, Java8Parser.RULE_fieldAccess_lfno_primary);
        try {
            this.state = 2236;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.SUPER:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2227;
                        this.match(Java8Parser.SUPER);
                        this.state = 2228;
                        this.match(Java8Parser.DOT);
                        this.state = 2229;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case Java8Parser.Identifier:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2230;
                        this.typeName();
                        this.state = 2231;
                        this.match(Java8Parser.DOT);
                        this.state = 2232;
                        this.match(Java8Parser.SUPER);
                        this.state = 2233;
                        this.match(Java8Parser.DOT);
                        this.state = 2234;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arrayAccess() {
        let localContext = new ArrayAccessContext(this.context, this.state);
        this.enterRule(localContext, 386, Java8Parser.RULE_arrayAccess);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2248;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 244, this.context)) {
                    case 1:
                        {
                            this.state = 2238;
                            this.expressionName();
                            this.state = 2239;
                            this.match(Java8Parser.LBRACK);
                            this.state = 2240;
                            this.expression();
                            this.state = 2241;
                            this.match(Java8Parser.RBRACK);
                        }
                        break;
                    case 2:
                        {
                            this.state = 2243;
                            this.primaryNoNewArray_lfno_arrayAccess();
                            this.state = 2244;
                            this.match(Java8Parser.LBRACK);
                            this.state = 2245;
                            this.expression();
                            this.state = 2246;
                            this.match(Java8Parser.RBRACK);
                        }
                        break;
                }
                this.state = 2257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 61) {
                    {
                        {
                            this.state = 2250;
                            this.primaryNoNewArray_lf_arrayAccess();
                            this.state = 2251;
                            this.match(Java8Parser.LBRACK);
                            this.state = 2252;
                            this.expression();
                            this.state = 2253;
                            this.match(Java8Parser.RBRACK);
                        }
                    }
                    this.state = 2259;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arrayAccess_lf_primary() {
        let localContext = new ArrayAccess_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 388, Java8Parser.RULE_arrayAccess_lf_primary);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2260;
                    this.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary();
                    this.state = 2261;
                    this.match(Java8Parser.LBRACK);
                    this.state = 2262;
                    this.expression();
                    this.state = 2263;
                    this.match(Java8Parser.RBRACK);
                }
                this.state = 2272;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 246, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 2265;
                                this.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary();
                                this.state = 2266;
                                this.match(Java8Parser.LBRACK);
                                this.state = 2267;
                                this.expression();
                                this.state = 2268;
                                this.match(Java8Parser.RBRACK);
                            }
                        }
                    }
                    this.state = 2274;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 246, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arrayAccess_lfno_primary() {
        let localContext = new ArrayAccess_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 390, Java8Parser.RULE_arrayAccess_lfno_primary);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2285;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 247, this.context)) {
                    case 1:
                        {
                            this.state = 2275;
                            this.expressionName();
                            this.state = 2276;
                            this.match(Java8Parser.LBRACK);
                            this.state = 2277;
                            this.expression();
                            this.state = 2278;
                            this.match(Java8Parser.RBRACK);
                        }
                        break;
                    case 2:
                        {
                            this.state = 2280;
                            this.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary();
                            this.state = 2281;
                            this.match(Java8Parser.LBRACK);
                            this.state = 2282;
                            this.expression();
                            this.state = 2283;
                            this.match(Java8Parser.RBRACK);
                        }
                        break;
                }
                this.state = 2294;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 248, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 2287;
                                this.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary();
                                this.state = 2288;
                                this.match(Java8Parser.LBRACK);
                                this.state = 2289;
                                this.expression();
                                this.state = 2290;
                                this.match(Java8Parser.RBRACK);
                            }
                        }
                    }
                    this.state = 2296;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 248, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodInvocation() {
        let localContext = new MethodInvocationContext(this.context, this.state);
        this.enterRule(localContext, 392, Java8Parser.RULE_methodInvocation);
        let _la;
        try {
            this.state = 2365;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 260, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2297;
                        this.methodName();
                        this.state = 2298;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2300;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2299;
                                this.argumentList();
                            }
                        }
                        this.state = 2302;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2304;
                        this.typeName();
                        this.state = 2305;
                        this.match(Java8Parser.DOT);
                        this.state = 2307;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2306;
                                this.typeArguments();
                            }
                        }
                        this.state = 2309;
                        this.match(Java8Parser.Identifier);
                        this.state = 2310;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2312;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2311;
                                this.argumentList();
                            }
                        }
                        this.state = 2314;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2316;
                        this.expressionName();
                        this.state = 2317;
                        this.match(Java8Parser.DOT);
                        this.state = 2319;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2318;
                                this.typeArguments();
                            }
                        }
                        this.state = 2321;
                        this.match(Java8Parser.Identifier);
                        this.state = 2322;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2324;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2323;
                                this.argumentList();
                            }
                        }
                        this.state = 2326;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2328;
                        this.primary();
                        this.state = 2329;
                        this.match(Java8Parser.DOT);
                        this.state = 2331;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2330;
                                this.typeArguments();
                            }
                        }
                        this.state = 2333;
                        this.match(Java8Parser.Identifier);
                        this.state = 2334;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2336;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2335;
                                this.argumentList();
                            }
                        }
                        this.state = 2338;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2340;
                        this.match(Java8Parser.SUPER);
                        this.state = 2341;
                        this.match(Java8Parser.DOT);
                        this.state = 2343;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2342;
                                this.typeArguments();
                            }
                        }
                        this.state = 2345;
                        this.match(Java8Parser.Identifier);
                        this.state = 2346;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2348;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2347;
                                this.argumentList();
                            }
                        }
                        this.state = 2350;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2351;
                        this.typeName();
                        this.state = 2352;
                        this.match(Java8Parser.DOT);
                        this.state = 2353;
                        this.match(Java8Parser.SUPER);
                        this.state = 2354;
                        this.match(Java8Parser.DOT);
                        this.state = 2356;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2355;
                                this.typeArguments();
                            }
                        }
                        this.state = 2358;
                        this.match(Java8Parser.Identifier);
                        this.state = 2359;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2361;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2360;
                                this.argumentList();
                            }
                        }
                        this.state = 2363;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodInvocation_lf_primary() {
        let localContext = new MethodInvocation_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 394, Java8Parser.RULE_methodInvocation_lf_primary);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2367;
                this.match(Java8Parser.DOT);
                this.state = 2369;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 2368;
                        this.typeArguments();
                    }
                }
                this.state = 2371;
                this.match(Java8Parser.Identifier);
                this.state = 2372;
                this.match(Java8Parser.LPAREN);
                this.state = 2374;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                    {
                        this.state = 2373;
                        this.argumentList();
                    }
                }
                this.state = 2376;
                this.match(Java8Parser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodInvocation_lfno_primary() {
        let localContext = new MethodInvocation_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 396, Java8Parser.RULE_methodInvocation_lfno_primary);
        let _la;
        try {
            this.state = 2434;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 272, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2378;
                        this.methodName();
                        this.state = 2379;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2381;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2380;
                                this.argumentList();
                            }
                        }
                        this.state = 2383;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2385;
                        this.typeName();
                        this.state = 2386;
                        this.match(Java8Parser.DOT);
                        this.state = 2388;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2387;
                                this.typeArguments();
                            }
                        }
                        this.state = 2390;
                        this.match(Java8Parser.Identifier);
                        this.state = 2391;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2393;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2392;
                                this.argumentList();
                            }
                        }
                        this.state = 2395;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2397;
                        this.expressionName();
                        this.state = 2398;
                        this.match(Java8Parser.DOT);
                        this.state = 2400;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2399;
                                this.typeArguments();
                            }
                        }
                        this.state = 2402;
                        this.match(Java8Parser.Identifier);
                        this.state = 2403;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2405;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2404;
                                this.argumentList();
                            }
                        }
                        this.state = 2407;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2409;
                        this.match(Java8Parser.SUPER);
                        this.state = 2410;
                        this.match(Java8Parser.DOT);
                        this.state = 2412;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2411;
                                this.typeArguments();
                            }
                        }
                        this.state = 2414;
                        this.match(Java8Parser.Identifier);
                        this.state = 2415;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2417;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2416;
                                this.argumentList();
                            }
                        }
                        this.state = 2419;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2420;
                        this.typeName();
                        this.state = 2421;
                        this.match(Java8Parser.DOT);
                        this.state = 2422;
                        this.match(Java8Parser.SUPER);
                        this.state = 2423;
                        this.match(Java8Parser.DOT);
                        this.state = 2425;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2424;
                                this.typeArguments();
                            }
                        }
                        this.state = 2427;
                        this.match(Java8Parser.Identifier);
                        this.state = 2428;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2430;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2082889) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 15363) !== 0) || _la === 102 || _la === 103) {
                            {
                                this.state = 2429;
                                this.argumentList();
                            }
                        }
                        this.state = 2432;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    argumentList() {
        let localContext = new ArgumentListContext(this.context, this.state);
        this.enterRule(localContext, 398, Java8Parser.RULE_argumentList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2436;
                this.expression();
                this.state = 2441;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 2437;
                            this.match(Java8Parser.COMMA);
                            this.state = 2438;
                            this.expression();
                        }
                    }
                    this.state = 2443;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodReference() {
        let localContext = new MethodReferenceContext(this.context, this.state);
        this.enterRule(localContext, 400, Java8Parser.RULE_methodReference);
        let _la;
        try {
            this.state = 2491;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 280, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2444;
                        this.expressionName();
                        this.state = 2445;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2447;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2446;
                                this.typeArguments();
                            }
                        }
                        this.state = 2449;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2451;
                        this.referenceType();
                        this.state = 2452;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2454;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2453;
                                this.typeArguments();
                            }
                        }
                        this.state = 2456;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2458;
                        this.primary();
                        this.state = 2459;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2461;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2460;
                                this.typeArguments();
                            }
                        }
                        this.state = 2463;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2465;
                        this.match(Java8Parser.SUPER);
                        this.state = 2466;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2468;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2467;
                                this.typeArguments();
                            }
                        }
                        this.state = 2470;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2471;
                        this.typeName();
                        this.state = 2472;
                        this.match(Java8Parser.DOT);
                        this.state = 2473;
                        this.match(Java8Parser.SUPER);
                        this.state = 2474;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2476;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2475;
                                this.typeArguments();
                            }
                        }
                        this.state = 2478;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2480;
                        this.classType();
                        this.state = 2481;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2483;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2482;
                                this.typeArguments();
                            }
                        }
                        this.state = 2485;
                        this.match(Java8Parser.NEW);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(localContext, 7);
                    {
                        this.state = 2487;
                        this.arrayType();
                        this.state = 2488;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2489;
                        this.match(Java8Parser.NEW);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodReference_lf_primary() {
        let localContext = new MethodReference_lf_primaryContext(this.context, this.state);
        this.enterRule(localContext, 402, Java8Parser.RULE_methodReference_lf_primary);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2493;
                this.match(Java8Parser.COLONCOLON);
                this.state = 2495;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                        this.state = 2494;
                        this.typeArguments();
                    }
                }
                this.state = 2497;
                this.match(Java8Parser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    methodReference_lfno_primary() {
        let localContext = new MethodReference_lfno_primaryContext(this.context, this.state);
        this.enterRule(localContext, 404, Java8Parser.RULE_methodReference_lfno_primary);
        let _la;
        try {
            this.state = 2539;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 287, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2499;
                        this.expressionName();
                        this.state = 2500;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2502;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2501;
                                this.typeArguments();
                            }
                        }
                        this.state = 2504;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2506;
                        this.referenceType();
                        this.state = 2507;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2509;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2508;
                                this.typeArguments();
                            }
                        }
                        this.state = 2511;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2513;
                        this.match(Java8Parser.SUPER);
                        this.state = 2514;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2516;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2515;
                                this.typeArguments();
                            }
                        }
                        this.state = 2518;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2519;
                        this.typeName();
                        this.state = 2520;
                        this.match(Java8Parser.DOT);
                        this.state = 2521;
                        this.match(Java8Parser.SUPER);
                        this.state = 2522;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2524;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2523;
                                this.typeArguments();
                            }
                        }
                        this.state = 2526;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2528;
                        this.classType();
                        this.state = 2529;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2531;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                                this.state = 2530;
                                this.typeArguments();
                            }
                        }
                        this.state = 2533;
                        this.match(Java8Parser.NEW);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(localContext, 6);
                    {
                        this.state = 2535;
                        this.arrayType();
                        this.state = 2536;
                        this.match(Java8Parser.COLONCOLON);
                        this.state = 2537;
                        this.match(Java8Parser.NEW);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    arrayCreationExpression() {
        let localContext = new ArrayCreationExpressionContext(this.context, this.state);
        this.enterRule(localContext, 406, Java8Parser.RULE_arrayCreationExpression);
        try {
            this.state = 2563;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 290, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2541;
                        this.match(Java8Parser.NEW);
                        this.state = 2542;
                        this.primitiveType();
                        this.state = 2543;
                        this.dimExprs();
                        this.state = 2545;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 288, this.context)) {
                            case 1:
                                {
                                    this.state = 2544;
                                    this.dims();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2547;
                        this.match(Java8Parser.NEW);
                        this.state = 2548;
                        this.classOrInterfaceType();
                        this.state = 2549;
                        this.dimExprs();
                        this.state = 2551;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 289, this.context)) {
                            case 1:
                                {
                                    this.state = 2550;
                                    this.dims();
                                }
                                break;
                        }
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2553;
                        this.match(Java8Parser.NEW);
                        this.state = 2554;
                        this.primitiveType();
                        this.state = 2555;
                        this.dims();
                        this.state = 2556;
                        this.arrayInitializer();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2558;
                        this.match(Java8Parser.NEW);
                        this.state = 2559;
                        this.classOrInterfaceType();
                        this.state = 2560;
                        this.dims();
                        this.state = 2561;
                        this.arrayInitializer();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    dimExprs() {
        let localContext = new DimExprsContext(this.context, this.state);
        this.enterRule(localContext, 408, Java8Parser.RULE_dimExprs);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2565;
                this.dimExpr();
                this.state = 2569;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            {
                                this.state = 2566;
                                this.dimExpr();
                            }
                        }
                    }
                    this.state = 2571;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 291, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    dimExpr() {
        let localContext = new DimExprContext(this.context, this.state);
        this.enterRule(localContext, 410, Java8Parser.RULE_dimExpr);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2575;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 103) {
                    {
                        {
                            this.state = 2572;
                            this.annotation();
                        }
                    }
                    this.state = 2577;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 2578;
                this.match(Java8Parser.LBRACK);
                this.state = 2579;
                this.expression();
                this.state = 2580;
                this.match(Java8Parser.RBRACK);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    constantExpression() {
        let localContext = new ConstantExpressionContext(this.context, this.state);
        this.enterRule(localContext, 412, Java8Parser.RULE_constantExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2582;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    expression() {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 414, Java8Parser.RULE_expression);
        try {
            this.state = 2586;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 293, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2584;
                        this.lambdaExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2585;
                        this.assignmentExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    lambdaExpression() {
        let localContext = new LambdaExpressionContext(this.context, this.state);
        this.enterRule(localContext, 416, Java8Parser.RULE_lambdaExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2588;
                this.lambdaParameters();
                this.state = 2589;
                this.match(Java8Parser.ARROW);
                this.state = 2590;
                this.lambdaBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    lambdaParameters() {
        let localContext = new LambdaParametersContext(this.context, this.state);
        this.enterRule(localContext, 418, Java8Parser.RULE_lambdaParameters);
        let _la;
        try {
            this.state = 2602;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 295, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2592;
                        this.match(Java8Parser.Identifier);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2593;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2595;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || _la === 37 || _la === 102 || _la === 103) {
                            {
                                this.state = 2594;
                                this.formalParameterList();
                            }
                        }
                        this.state = 2597;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2598;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2599;
                        this.inferredFormalParameterList();
                        this.state = 2600;
                        this.match(Java8Parser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    inferredFormalParameterList() {
        let localContext = new InferredFormalParameterListContext(this.context, this.state);
        this.enterRule(localContext, 420, Java8Parser.RULE_inferredFormalParameterList);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2604;
                this.match(Java8Parser.Identifier);
                this.state = 2609;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 64) {
                    {
                        {
                            this.state = 2605;
                            this.match(Java8Parser.COMMA);
                            this.state = 2606;
                            this.match(Java8Parser.Identifier);
                        }
                    }
                    this.state = 2611;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    lambdaBody() {
        let localContext = new LambdaBodyContext(this.context, this.state);
        this.enterRule(localContext, 422, Java8Parser.RULE_lambdaBody);
        try {
            this.state = 2614;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.BOOLEAN:
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.NEW:
                case Java8Parser.SHORT:
                case Java8Parser.SUPER:
                case Java8Parser.THIS:
                case Java8Parser.VOID:
                case Java8Parser.IntegerLiteral:
                case Java8Parser.FloatingPointLiteral:
                case Java8Parser.BooleanLiteral:
                case Java8Parser.CharacterLiteral:
                case Java8Parser.StringLiteral:
                case Java8Parser.NullLiteral:
                case Java8Parser.LPAREN:
                case Java8Parser.BANG:
                case Java8Parser.TILDE:
                case Java8Parser.INC:
                case Java8Parser.DEC:
                case Java8Parser.ADD:
                case Java8Parser.SUB:
                case Java8Parser.Identifier:
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2612;
                        this.expression();
                    }
                    break;
                case Java8Parser.LBRACE:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2613;
                        this.block();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    assignmentExpression() {
        let localContext = new AssignmentExpressionContext(this.context, this.state);
        this.enterRule(localContext, 424, Java8Parser.RULE_assignmentExpression);
        try {
            this.state = 2618;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 298, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2616;
                        this.conditionalExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2617;
                        this.assignment();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    assignment() {
        let localContext = new AssignmentContext(this.context, this.state);
        this.enterRule(localContext, 426, Java8Parser.RULE_assignment);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2620;
                this.leftHandSide();
                this.state = 2621;
                this.assignmentOperator();
                this.state = 2622;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    leftHandSide() {
        let localContext = new LeftHandSideContext(this.context, this.state);
        this.enterRule(localContext, 428, Java8Parser.RULE_leftHandSide);
        try {
            this.state = 2627;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 299, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2624;
                        this.expressionName();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2625;
                        this.fieldAccess();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2626;
                        this.arrayAccess();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    assignmentOperator() {
        let localContext = new AssignmentOperatorContext(this.context, this.state);
        this.enterRule(localContext, 430, Java8Parser.RULE_assignmentOperator);
        let _la;
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2629;
                _la = this.tokenStream.LA(1);
                if (!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4261412865) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & 15) !== 0))) {
                    this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    conditionalExpression() {
        let localContext = new ConditionalExpressionContext(this.context, this.state);
        this.enterRule(localContext, 432, Java8Parser.RULE_conditionalExpression);
        try {
            this.state = 2638;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 300, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2631;
                        this.conditionalOrExpression(0);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2632;
                        this.conditionalOrExpression(0);
                        this.state = 2633;
                        this.match(Java8Parser.QUESTION);
                        this.state = 2634;
                        this.expression();
                        this.state = 2635;
                        this.match(Java8Parser.COLON);
                        this.state = 2636;
                        this.conditionalExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    conditionalOrExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ConditionalOrExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 434;
        this.enterRecursionRule(localContext, 434, Java8Parser.RULE_conditionalOrExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2641;
                    this.conditionalAndExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2648;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 301, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new ConditionalOrExpressionContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_conditionalOrExpression);
                                this.state = 2643;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 2644;
                                this.match(Java8Parser.OR);
                                this.state = 2645;
                                this.conditionalAndExpression(0);
                            }
                        }
                    }
                    this.state = 2650;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 301, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    conditionalAndExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ConditionalAndExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 436;
        this.enterRecursionRule(localContext, 436, Java8Parser.RULE_conditionalAndExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2652;
                    this.inclusiveOrExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2659;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 302, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new ConditionalAndExpressionContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_conditionalAndExpression);
                                this.state = 2654;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 2655;
                                this.match(Java8Parser.AND);
                                this.state = 2656;
                                this.inclusiveOrExpression(0);
                            }
                        }
                    }
                    this.state = 2661;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 302, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    inclusiveOrExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new InclusiveOrExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 438;
        this.enterRecursionRule(localContext, 438, Java8Parser.RULE_inclusiveOrExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2663;
                    this.exclusiveOrExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2670;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 303, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new InclusiveOrExpressionContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_inclusiveOrExpression);
                                this.state = 2665;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 2666;
                                this.match(Java8Parser.BITOR);
                                this.state = 2667;
                                this.exclusiveOrExpression(0);
                            }
                        }
                    }
                    this.state = 2672;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 303, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    exclusiveOrExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExclusiveOrExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 440;
        this.enterRecursionRule(localContext, 440, Java8Parser.RULE_exclusiveOrExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2674;
                    this.andExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2681;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 304, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new ExclusiveOrExpressionContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_exclusiveOrExpression);
                                this.state = 2676;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 2677;
                                this.match(Java8Parser.CARET);
                                this.state = 2678;
                                this.andExpression(0);
                            }
                        }
                    }
                    this.state = 2683;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 304, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    andExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AndExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 442;
        this.enterRecursionRule(localContext, 442, Java8Parser.RULE_andExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2685;
                    this.equalityExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2692;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 305, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            {
                                localContext = new AndExpressionContext(parentContext, parentState);
                                this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_andExpression);
                                this.state = 2687;
                                if (!(this.precpred(this.context, 1))) {
                                    throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                }
                                this.state = 2688;
                                this.match(Java8Parser.BITAND);
                                this.state = 2689;
                                this.equalityExpression(0);
                            }
                        }
                    }
                    this.state = 2694;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 305, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    equalityExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new EqualityExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 444;
        this.enterRecursionRule(localContext, 444, Java8Parser.RULE_equalityExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2696;
                    this.relationalExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2706;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 307, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2704;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 306, this.context)) {
                                case 1:
                                    {
                                        localContext = new EqualityExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_equalityExpression);
                                        this.state = 2698;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 2699;
                                        this.match(Java8Parser.EQUAL);
                                        this.state = 2700;
                                        this.relationalExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new EqualityExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_equalityExpression);
                                        this.state = 2701;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 2702;
                                        this.match(Java8Parser.NOTEQUAL);
                                        this.state = 2703;
                                        this.relationalExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2708;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 307, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    relationalExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new RelationalExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 446;
        this.enterRecursionRule(localContext, 446, Java8Parser.RULE_relationalExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2710;
                    this.shiftExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2729;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2727;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 308, this.context)) {
                                case 1:
                                    {
                                        localContext = new RelationalExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_relationalExpression);
                                        this.state = 2712;
                                        if (!(this.precpred(this.context, 5))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                                        }
                                        this.state = 2713;
                                        this.match(Java8Parser.LT);
                                        this.state = 2714;
                                        this.shiftExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new RelationalExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_relationalExpression);
                                        this.state = 2715;
                                        if (!(this.precpred(this.context, 4))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                                        }
                                        this.state = 2716;
                                        this.match(Java8Parser.GT);
                                        this.state = 2717;
                                        this.shiftExpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new RelationalExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_relationalExpression);
                                        this.state = 2718;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 2719;
                                        this.match(Java8Parser.LE);
                                        this.state = 2720;
                                        this.shiftExpression(0);
                                    }
                                    break;
                                case 4:
                                    {
                                        localContext = new RelationalExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_relationalExpression);
                                        this.state = 2721;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 2722;
                                        this.match(Java8Parser.GE);
                                        this.state = 2723;
                                        this.shiftExpression(0);
                                    }
                                    break;
                                case 5:
                                    {
                                        localContext = new RelationalExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_relationalExpression);
                                        this.state = 2724;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 2725;
                                        this.match(Java8Parser.INSTANCEOF);
                                        this.state = 2726;
                                        this.referenceType();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2731;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 309, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    shiftExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ShiftExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 448;
        this.enterRecursionRule(localContext, 448, Java8Parser.RULE_shiftExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2733;
                    this.additiveExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2750;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2748;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 310, this.context)) {
                                case 1:
                                    {
                                        localContext = new ShiftExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_shiftExpression);
                                        this.state = 2735;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 2736;
                                        this.match(Java8Parser.LT);
                                        this.state = 2737;
                                        this.match(Java8Parser.LT);
                                        this.state = 2738;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new ShiftExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_shiftExpression);
                                        this.state = 2739;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 2740;
                                        this.match(Java8Parser.GT);
                                        this.state = 2741;
                                        this.match(Java8Parser.GT);
                                        this.state = 2742;
                                        this.additiveExpression(0);
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new ShiftExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_shiftExpression);
                                        this.state = 2743;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 2744;
                                        this.match(Java8Parser.GT);
                                        this.state = 2745;
                                        this.match(Java8Parser.GT);
                                        this.state = 2746;
                                        this.match(Java8Parser.GT);
                                        this.state = 2747;
                                        this.additiveExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2752;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 311, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    additiveExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new AdditiveExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 450;
        this.enterRecursionRule(localContext, 450, Java8Parser.RULE_additiveExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2754;
                    this.multiplicativeExpression(0);
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2764;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 313, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2762;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 312, this.context)) {
                                case 1:
                                    {
                                        localContext = new AdditiveExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_additiveExpression);
                                        this.state = 2756;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 2757;
                                        this.match(Java8Parser.ADD);
                                        this.state = 2758;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new AdditiveExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_additiveExpression);
                                        this.state = 2759;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 2760;
                                        this.match(Java8Parser.SUB);
                                        this.state = 2761;
                                        this.multiplicativeExpression(0);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2766;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 313, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    multiplicativeExpression(_p) {
        if (_p === undefined) {
            _p = 0;
        }
        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new MultiplicativeExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 452;
        this.enterRecursionRule(localContext, 452, Java8Parser.RULE_multiplicativeExpression, _p);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                {
                    this.state = 2768;
                    this.unaryExpression();
                }
                this.context.stop = this.tokenStream.LT(-1);
                this.state = 2781;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 315, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        if (this.parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        previousContext = localContext;
                        {
                            this.state = 2779;
                            this.errorHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this.tokenStream, 314, this.context)) {
                                case 1:
                                    {
                                        localContext = new MultiplicativeExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_multiplicativeExpression);
                                        this.state = 2770;
                                        if (!(this.precpred(this.context, 3))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                                        }
                                        this.state = 2771;
                                        this.match(Java8Parser.MUL);
                                        this.state = 2772;
                                        this.unaryExpression();
                                    }
                                    break;
                                case 2:
                                    {
                                        localContext = new MultiplicativeExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_multiplicativeExpression);
                                        this.state = 2773;
                                        if (!(this.precpred(this.context, 2))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                                        }
                                        this.state = 2774;
                                        this.match(Java8Parser.DIV);
                                        this.state = 2775;
                                        this.unaryExpression();
                                    }
                                    break;
                                case 3:
                                    {
                                        localContext = new MultiplicativeExpressionContext(parentContext, parentState);
                                        this.pushNewRecursionContext(localContext, _startState, Java8Parser.RULE_multiplicativeExpression);
                                        this.state = 2776;
                                        if (!(this.precpred(this.context, 1))) {
                                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                                        }
                                        this.state = 2777;
                                        this.match(Java8Parser.MOD);
                                        this.state = 2778;
                                        this.unaryExpression();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 2783;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 315, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    unaryExpression() {
        let localContext = new UnaryExpressionContext(this.context, this.state);
        this.enterRule(localContext, 454, Java8Parser.RULE_unaryExpression);
        try {
            this.state = 2791;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
                case Java8Parser.INC:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2784;
                        this.preIncrementExpression();
                    }
                    break;
                case Java8Parser.DEC:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2785;
                        this.preDecrementExpression();
                    }
                    break;
                case Java8Parser.ADD:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2786;
                        this.match(Java8Parser.ADD);
                        this.state = 2787;
                        this.unaryExpression();
                    }
                    break;
                case Java8Parser.SUB:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2788;
                        this.match(Java8Parser.SUB);
                        this.state = 2789;
                        this.unaryExpression();
                    }
                    break;
                case Java8Parser.BOOLEAN:
                case Java8Parser.BYTE:
                case Java8Parser.CHAR:
                case Java8Parser.DOUBLE:
                case Java8Parser.FLOAT:
                case Java8Parser.INT:
                case Java8Parser.LONG:
                case Java8Parser.NEW:
                case Java8Parser.SHORT:
                case Java8Parser.SUPER:
                case Java8Parser.THIS:
                case Java8Parser.VOID:
                case Java8Parser.IntegerLiteral:
                case Java8Parser.FloatingPointLiteral:
                case Java8Parser.BooleanLiteral:
                case Java8Parser.CharacterLiteral:
                case Java8Parser.StringLiteral:
                case Java8Parser.NullLiteral:
                case Java8Parser.LPAREN:
                case Java8Parser.BANG:
                case Java8Parser.TILDE:
                case Java8Parser.Identifier:
                case Java8Parser.AT:
                    this.enterOuterAlt(localContext, 5);
                    {
                        this.state = 2790;
                        this.unaryExpressionNotPlusMinus();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    preIncrementExpression() {
        let localContext = new PreIncrementExpressionContext(this.context, this.state);
        this.enterRule(localContext, 456, Java8Parser.RULE_preIncrementExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2793;
                this.match(Java8Parser.INC);
                this.state = 2794;
                this.unaryExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    preDecrementExpression() {
        let localContext = new PreDecrementExpressionContext(this.context, this.state);
        this.enterRule(localContext, 458, Java8Parser.RULE_preDecrementExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2796;
                this.match(Java8Parser.DEC);
                this.state = 2797;
                this.unaryExpression();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    unaryExpressionNotPlusMinus() {
        let localContext = new UnaryExpressionNotPlusMinusContext(this.context, this.state);
        this.enterRule(localContext, 460, Java8Parser.RULE_unaryExpressionNotPlusMinus);
        try {
            this.state = 2805;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 317, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2799;
                        this.postfixExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2800;
                        this.match(Java8Parser.TILDE);
                        this.state = 2801;
                        this.unaryExpression();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2802;
                        this.match(Java8Parser.BANG);
                        this.state = 2803;
                        this.unaryExpression();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(localContext, 4);
                    {
                        this.state = 2804;
                        this.castExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    postfixExpression() {
        let localContext = new PostfixExpressionContext(this.context, this.state);
        this.enterRule(localContext, 462, Java8Parser.RULE_postfixExpression);
        try {
            let alternative;
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2809;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 318, this.context)) {
                    case 1:
                        {
                            this.state = 2807;
                            this.primary();
                        }
                        break;
                    case 2:
                        {
                            this.state = 2808;
                            this.expressionName();
                        }
                        break;
                }
                this.state = 2815;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 320, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                            this.state = 2813;
                            this.errorHandler.sync(this);
                            switch (this.tokenStream.LA(1)) {
                                case Java8Parser.INC:
                                    {
                                        this.state = 2811;
                                        this.postIncrementExpression_lf_postfixExpression();
                                    }
                                    break;
                                case Java8Parser.DEC:
                                    {
                                        this.state = 2812;
                                        this.postDecrementExpression_lf_postfixExpression();
                                    }
                                    break;
                                default:
                                    throw new antlr.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 2817;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 320, this.context);
                }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    postIncrementExpression() {
        let localContext = new PostIncrementExpressionContext(this.context, this.state);
        this.enterRule(localContext, 464, Java8Parser.RULE_postIncrementExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2818;
                this.postfixExpression();
                this.state = 2819;
                this.match(Java8Parser.INC);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    postIncrementExpression_lf_postfixExpression() {
        let localContext = new PostIncrementExpression_lf_postfixExpressionContext(this.context, this.state);
        this.enterRule(localContext, 466, Java8Parser.RULE_postIncrementExpression_lf_postfixExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2821;
                this.match(Java8Parser.INC);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    postDecrementExpression() {
        let localContext = new PostDecrementExpressionContext(this.context, this.state);
        this.enterRule(localContext, 468, Java8Parser.RULE_postDecrementExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2823;
                this.postfixExpression();
                this.state = 2824;
                this.match(Java8Parser.DEC);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    postDecrementExpression_lf_postfixExpression() {
        let localContext = new PostDecrementExpression_lf_postfixExpressionContext(this.context, this.state);
        this.enterRule(localContext, 470, Java8Parser.RULE_postDecrementExpression_lf_postfixExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
                this.state = 2826;
                this.match(Java8Parser.DEC);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    castExpression() {
        let localContext = new CastExpressionContext(this.context, this.state);
        this.enterRule(localContext, 472, Java8Parser.RULE_castExpression);
        let _la;
        try {
            this.state = 2855;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 323, this.context)) {
                case 1:
                    this.enterOuterAlt(localContext, 1);
                    {
                        this.state = 2828;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2829;
                        this.primitiveType();
                        this.state = 2830;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2831;
                        this.unaryExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(localContext, 2);
                    {
                        this.state = 2833;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2834;
                        this.referenceType();
                        this.state = 2838;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 85) {
                            {
                                {
                                    this.state = 2835;
                                    this.additionalBound();
                                }
                            }
                            this.state = 2840;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2841;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2842;
                        this.unaryExpressionNotPlusMinus();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(localContext, 3);
                    {
                        this.state = 2844;
                        this.match(Java8Parser.LPAREN);
                        this.state = 2845;
                        this.referenceType();
                        this.state = 2849;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        while (_la === 85) {
                            {
                                {
                                    this.state = 2846;
                                    this.additionalBound();
                                }
                            }
                            this.state = 2851;
                            this.errorHandler.sync(this);
                            _la = this.tokenStream.LA(1);
                        }
                        this.state = 2852;
                        this.match(Java8Parser.RPAREN);
                        this.state = 2853;
                        this.lambdaExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    sempred(localContext, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 26:
                return this.packageName_sempred(localContext, predIndex);
            case 28:
                return this.packageOrTypeName_sempred(localContext, predIndex);
            case 31:
                return this.ambiguousName_sempred(localContext, predIndex);
            case 217:
                return this.conditionalOrExpression_sempred(localContext, predIndex);
            case 218:
                return this.conditionalAndExpression_sempred(localContext, predIndex);
            case 219:
                return this.inclusiveOrExpression_sempred(localContext, predIndex);
            case 220:
                return this.exclusiveOrExpression_sempred(localContext, predIndex);
            case 221:
                return this.andExpression_sempred(localContext, predIndex);
            case 222:
                return this.equalityExpression_sempred(localContext, predIndex);
            case 223:
                return this.relationalExpression_sempred(localContext, predIndex);
            case 224:
                return this.shiftExpression_sempred(localContext, predIndex);
            case 225:
                return this.additiveExpression_sempred(localContext, predIndex);
            case 226:
                return this.multiplicativeExpression_sempred(localContext, predIndex);
        }
        return true;
    }
    packageName_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    packageOrTypeName_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 1:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    ambiguousName_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 2:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    conditionalOrExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 3:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    conditionalAndExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 4:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    inclusiveOrExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 5:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    exclusiveOrExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 6:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    andExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 7:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    equalityExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 8:
                return this.precpred(this.context, 2);
            case 9:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    relationalExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 10:
                return this.precpred(this.context, 5);
            case 11:
                return this.precpred(this.context, 4);
            case 12:
                return this.precpred(this.context, 3);
            case 13:
                return this.precpred(this.context, 2);
            case 14:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    shiftExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 15:
                return this.precpred(this.context, 3);
            case 16:
                return this.precpred(this.context, 2);
            case 17:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    additiveExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 18:
                return this.precpred(this.context, 2);
            case 19:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    multiplicativeExpression_sempred(localContext, predIndex) {
        switch (predIndex) {
            case 20:
                return this.precpred(this.context, 3);
            case 21:
                return this.precpred(this.context, 2);
            case 22:
                return this.precpred(this.context, 1);
        }
        return true;
    }
    static get _ATN() {
        if (!Java8Parser.__ATN) {
            Java8Parser.__ATN = new antlr.ATNDeserializer().deserialize(Java8Parser._serializedATN);
        }
        return Java8Parser.__ATN;
    }
    get vocabulary() {
        return Java8Parser.vocabulary;
    }
}
exports.Java8Parser = Java8Parser;
Java8Parser.ABSTRACT = 1;
Java8Parser.ASSERT = 2;
Java8Parser.BOOLEAN = 3;
Java8Parser.BREAK = 4;
Java8Parser.BYTE = 5;
Java8Parser.CASE = 6;
Java8Parser.CATCH = 7;
Java8Parser.CHAR = 8;
Java8Parser.CLASS = 9;
Java8Parser.CONST = 10;
Java8Parser.CONTINUE = 11;
Java8Parser.DEFAULT = 12;
Java8Parser.DO = 13;
Java8Parser.DOUBLE = 14;
Java8Parser.ELSE = 15;
Java8Parser.ENUM = 16;
Java8Parser.EXTENDS = 17;
Java8Parser.FINAL = 18;
Java8Parser.FINALLY = 19;
Java8Parser.FLOAT = 20;
Java8Parser.FOR = 21;
Java8Parser.IF = 22;
Java8Parser.GOTO = 23;
Java8Parser.IMPLEMENTS = 24;
Java8Parser.IMPORT = 25;
Java8Parser.INSTANCEOF = 26;
Java8Parser.INT = 27;
Java8Parser.INTERFACE = 28;
Java8Parser.LONG = 29;
Java8Parser.NATIVE = 30;
Java8Parser.NEW = 31;
Java8Parser.PACKAGE = 32;
Java8Parser.PRIVATE = 33;
Java8Parser.PROTECTED = 34;
Java8Parser.PUBLIC = 35;
Java8Parser.RETURN = 36;
Java8Parser.SHORT = 37;
Java8Parser.STATIC = 38;
Java8Parser.STRICTFP = 39;
Java8Parser.SUPER = 40;
Java8Parser.SWITCH = 41;
Java8Parser.SYNCHRONIZED = 42;
Java8Parser.THIS = 43;
Java8Parser.THROW = 44;
Java8Parser.THROWS = 45;
Java8Parser.TRANSIENT = 46;
Java8Parser.TRY = 47;
Java8Parser.VOID = 48;
Java8Parser.VOLATILE = 49;
Java8Parser.WHILE = 50;
Java8Parser.IntegerLiteral = 51;
Java8Parser.FloatingPointLiteral = 52;
Java8Parser.BooleanLiteral = 53;
Java8Parser.CharacterLiteral = 54;
Java8Parser.StringLiteral = 55;
Java8Parser.NullLiteral = 56;
Java8Parser.LPAREN = 57;
Java8Parser.RPAREN = 58;
Java8Parser.LBRACE = 59;
Java8Parser.RBRACE = 60;
Java8Parser.LBRACK = 61;
Java8Parser.RBRACK = 62;
Java8Parser.SEMI = 63;
Java8Parser.COMMA = 64;
Java8Parser.DOT = 65;
Java8Parser.ASSIGN = 66;
Java8Parser.GT = 67;
Java8Parser.LT = 68;
Java8Parser.BANG = 69;
Java8Parser.TILDE = 70;
Java8Parser.QUESTION = 71;
Java8Parser.COLON = 72;
Java8Parser.EQUAL = 73;
Java8Parser.LE = 74;
Java8Parser.GE = 75;
Java8Parser.NOTEQUAL = 76;
Java8Parser.AND = 77;
Java8Parser.OR = 78;
Java8Parser.INC = 79;
Java8Parser.DEC = 80;
Java8Parser.ADD = 81;
Java8Parser.SUB = 82;
Java8Parser.MUL = 83;
Java8Parser.DIV = 84;
Java8Parser.BITAND = 85;
Java8Parser.BITOR = 86;
Java8Parser.CARET = 87;
Java8Parser.MOD = 88;
Java8Parser.ARROW = 89;
Java8Parser.COLONCOLON = 90;
Java8Parser.ADD_ASSIGN = 91;
Java8Parser.SUB_ASSIGN = 92;
Java8Parser.MUL_ASSIGN = 93;
Java8Parser.DIV_ASSIGN = 94;
Java8Parser.AND_ASSIGN = 95;
Java8Parser.OR_ASSIGN = 96;
Java8Parser.XOR_ASSIGN = 97;
Java8Parser.MOD_ASSIGN = 98;
Java8Parser.LSHIFT_ASSIGN = 99;
Java8Parser.RSHIFT_ASSIGN = 100;
Java8Parser.URSHIFT_ASSIGN = 101;
Java8Parser.Identifier = 102;
Java8Parser.AT = 103;
Java8Parser.ELLIPSIS = 104;
Java8Parser.WS = 105;
Java8Parser.COMMENT = 106;
Java8Parser.LINE_COMMENT = 107;
Java8Parser.RULE_literal = 0;
Java8Parser.RULE_type = 1;
Java8Parser.RULE_primitiveType = 2;
Java8Parser.RULE_numericType = 3;
Java8Parser.RULE_integralType = 4;
Java8Parser.RULE_floatingPointType = 5;
Java8Parser.RULE_referenceType = 6;
Java8Parser.RULE_classOrInterfaceType = 7;
Java8Parser.RULE_classType = 8;
Java8Parser.RULE_classType_lf_classOrInterfaceType = 9;
Java8Parser.RULE_classType_lfno_classOrInterfaceType = 10;
Java8Parser.RULE_interfaceType = 11;
Java8Parser.RULE_interfaceType_lf_classOrInterfaceType = 12;
Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType = 13;
Java8Parser.RULE_typeVariable = 14;
Java8Parser.RULE_arrayType = 15;
Java8Parser.RULE_dims = 16;
Java8Parser.RULE_typeParameter = 17;
Java8Parser.RULE_typeParameterModifier = 18;
Java8Parser.RULE_typeBound = 19;
Java8Parser.RULE_additionalBound = 20;
Java8Parser.RULE_typeArguments = 21;
Java8Parser.RULE_typeArgumentList = 22;
Java8Parser.RULE_typeArgument = 23;
Java8Parser.RULE_wildcard = 24;
Java8Parser.RULE_wildcardBounds = 25;
Java8Parser.RULE_packageName = 26;
Java8Parser.RULE_typeName = 27;
Java8Parser.RULE_packageOrTypeName = 28;
Java8Parser.RULE_expressionName = 29;
Java8Parser.RULE_methodName = 30;
Java8Parser.RULE_ambiguousName = 31;
Java8Parser.RULE_compilationUnit = 32;
Java8Parser.RULE_packageDeclaration = 33;
Java8Parser.RULE_packageModifier = 34;
Java8Parser.RULE_importDeclaration = 35;
Java8Parser.RULE_singleTypeImportDeclaration = 36;
Java8Parser.RULE_typeImportOnDemandDeclaration = 37;
Java8Parser.RULE_singleStaticImportDeclaration = 38;
Java8Parser.RULE_staticImportOnDemandDeclaration = 39;
Java8Parser.RULE_typeDeclaration = 40;
Java8Parser.RULE_classDeclaration = 41;
Java8Parser.RULE_normalClassDeclaration = 42;
Java8Parser.RULE_classModifier = 43;
Java8Parser.RULE_typeParameters = 44;
Java8Parser.RULE_typeParameterList = 45;
Java8Parser.RULE_superclass = 46;
Java8Parser.RULE_superinterfaces = 47;
Java8Parser.RULE_interfaceTypeList = 48;
Java8Parser.RULE_classBody = 49;
Java8Parser.RULE_classBodyDeclaration = 50;
Java8Parser.RULE_classMemberDeclaration = 51;
Java8Parser.RULE_fieldDeclaration = 52;
Java8Parser.RULE_fieldModifier = 53;
Java8Parser.RULE_variableDeclaratorList = 54;
Java8Parser.RULE_variableDeclarator = 55;
Java8Parser.RULE_variableDeclaratorId = 56;
Java8Parser.RULE_variableInitializer = 57;
Java8Parser.RULE_unannType = 58;
Java8Parser.RULE_unannPrimitiveType = 59;
Java8Parser.RULE_unannReferenceType = 60;
Java8Parser.RULE_unannClassOrInterfaceType = 61;
Java8Parser.RULE_unannClassType = 62;
Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType = 63;
Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType = 64;
Java8Parser.RULE_unannInterfaceType = 65;
Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType = 66;
Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType = 67;
Java8Parser.RULE_unannTypeVariable = 68;
Java8Parser.RULE_unannArrayType = 69;
Java8Parser.RULE_methodDeclaration = 70;
Java8Parser.RULE_methodModifier = 71;
Java8Parser.RULE_methodHeader = 72;
Java8Parser.RULE_result = 73;
Java8Parser.RULE_methodDeclarator = 74;
Java8Parser.RULE_formalParameterList = 75;
Java8Parser.RULE_formalParameters = 76;
Java8Parser.RULE_formalParameter = 77;
Java8Parser.RULE_variableModifier = 78;
Java8Parser.RULE_lastFormalParameter = 79;
Java8Parser.RULE_receiverParameter = 80;
Java8Parser.RULE_throws_ = 81;
Java8Parser.RULE_exceptionTypeList = 82;
Java8Parser.RULE_exceptionType = 83;
Java8Parser.RULE_methodBody = 84;
Java8Parser.RULE_instanceInitializer = 85;
Java8Parser.RULE_staticInitializer = 86;
Java8Parser.RULE_constructorDeclaration = 87;
Java8Parser.RULE_constructorModifier = 88;
Java8Parser.RULE_constructorDeclarator = 89;
Java8Parser.RULE_simpleTypeName = 90;
Java8Parser.RULE_constructorBody = 91;
Java8Parser.RULE_explicitConstructorInvocation = 92;
Java8Parser.RULE_enumDeclaration = 93;
Java8Parser.RULE_enumBody = 94;
Java8Parser.RULE_enumConstantList = 95;
Java8Parser.RULE_enumConstant = 96;
Java8Parser.RULE_enumConstantModifier = 97;
Java8Parser.RULE_enumBodyDeclarations = 98;
Java8Parser.RULE_interfaceDeclaration = 99;
Java8Parser.RULE_normalInterfaceDeclaration = 100;
Java8Parser.RULE_interfaceModifier = 101;
Java8Parser.RULE_extendsInterfaces = 102;
Java8Parser.RULE_interfaceBody = 103;
Java8Parser.RULE_interfaceMemberDeclaration = 104;
Java8Parser.RULE_constantDeclaration = 105;
Java8Parser.RULE_constantModifier = 106;
Java8Parser.RULE_interfaceMethodDeclaration = 107;
Java8Parser.RULE_interfaceMethodModifier = 108;
Java8Parser.RULE_annotationTypeDeclaration = 109;
Java8Parser.RULE_annotationTypeBody = 110;
Java8Parser.RULE_annotationTypeMemberDeclaration = 111;
Java8Parser.RULE_annotationTypeElementDeclaration = 112;
Java8Parser.RULE_annotationTypeElementModifier = 113;
Java8Parser.RULE_defaultValue = 114;
Java8Parser.RULE_annotation = 115;
Java8Parser.RULE_normalAnnotation = 116;
Java8Parser.RULE_elementValuePairList = 117;
Java8Parser.RULE_elementValuePair = 118;
Java8Parser.RULE_elementValue = 119;
Java8Parser.RULE_elementValueArrayInitializer = 120;
Java8Parser.RULE_elementValueList = 121;
Java8Parser.RULE_markerAnnotation = 122;
Java8Parser.RULE_singleElementAnnotation = 123;
Java8Parser.RULE_arrayInitializer = 124;
Java8Parser.RULE_variableInitializerList = 125;
Java8Parser.RULE_block = 126;
Java8Parser.RULE_blockStatements = 127;
Java8Parser.RULE_blockStatement = 128;
Java8Parser.RULE_localVariableDeclarationStatement = 129;
Java8Parser.RULE_localVariableDeclaration = 130;
Java8Parser.RULE_statement = 131;
Java8Parser.RULE_statementNoShortIf = 132;
Java8Parser.RULE_statementWithoutTrailingSubstatement = 133;
Java8Parser.RULE_emptyStatement = 134;
Java8Parser.RULE_labeledStatement = 135;
Java8Parser.RULE_labeledStatementNoShortIf = 136;
Java8Parser.RULE_expressionStatement = 137;
Java8Parser.RULE_statementExpression = 138;
Java8Parser.RULE_ifThenStatement = 139;
Java8Parser.RULE_ifThenElseStatement = 140;
Java8Parser.RULE_ifThenElseStatementNoShortIf = 141;
Java8Parser.RULE_assertStatement = 142;
Java8Parser.RULE_switchStatement = 143;
Java8Parser.RULE_switchBlock = 144;
Java8Parser.RULE_switchBlockStatementGroup = 145;
Java8Parser.RULE_switchLabels = 146;
Java8Parser.RULE_switchLabel = 147;
Java8Parser.RULE_enumConstantName = 148;
Java8Parser.RULE_whileStatement = 149;
Java8Parser.RULE_whileStatementNoShortIf = 150;
Java8Parser.RULE_doStatement = 151;
Java8Parser.RULE_forStatement = 152;
Java8Parser.RULE_forStatementNoShortIf = 153;
Java8Parser.RULE_basicForStatement = 154;
Java8Parser.RULE_basicForStatementNoShortIf = 155;
Java8Parser.RULE_forInit = 156;
Java8Parser.RULE_forUpdate = 157;
Java8Parser.RULE_statementExpressionList = 158;
Java8Parser.RULE_enhancedForStatement = 159;
Java8Parser.RULE_enhancedForStatementNoShortIf = 160;
Java8Parser.RULE_breakStatement = 161;
Java8Parser.RULE_continueStatement = 162;
Java8Parser.RULE_returnStatement = 163;
Java8Parser.RULE_throwStatement = 164;
Java8Parser.RULE_synchronizedStatement = 165;
Java8Parser.RULE_tryStatement = 166;
Java8Parser.RULE_catches = 167;
Java8Parser.RULE_catchClause = 168;
Java8Parser.RULE_catchFormalParameter = 169;
Java8Parser.RULE_catchType = 170;
Java8Parser.RULE_finally_ = 171;
Java8Parser.RULE_tryWithResourcesStatement = 172;
Java8Parser.RULE_resourceSpecification = 173;
Java8Parser.RULE_resourceList = 174;
Java8Parser.RULE_resource = 175;
Java8Parser.RULE_primary = 176;
Java8Parser.RULE_primaryNoNewArray = 177;
Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess = 178;
Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess = 179;
Java8Parser.RULE_primaryNoNewArray_lf_primary = 180;
Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary = 181;
Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary = 182;
Java8Parser.RULE_primaryNoNewArray_lfno_primary = 183;
Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary = 184;
Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary = 185;
Java8Parser.RULE_classInstanceCreationExpression = 186;
Java8Parser.RULE_classInstanceCreationExpression_lf_primary = 187;
Java8Parser.RULE_classInstanceCreationExpression_lfno_primary = 188;
Java8Parser.RULE_typeArgumentsOrDiamond = 189;
Java8Parser.RULE_fieldAccess = 190;
Java8Parser.RULE_fieldAccess_lf_primary = 191;
Java8Parser.RULE_fieldAccess_lfno_primary = 192;
Java8Parser.RULE_arrayAccess = 193;
Java8Parser.RULE_arrayAccess_lf_primary = 194;
Java8Parser.RULE_arrayAccess_lfno_primary = 195;
Java8Parser.RULE_methodInvocation = 196;
Java8Parser.RULE_methodInvocation_lf_primary = 197;
Java8Parser.RULE_methodInvocation_lfno_primary = 198;
Java8Parser.RULE_argumentList = 199;
Java8Parser.RULE_methodReference = 200;
Java8Parser.RULE_methodReference_lf_primary = 201;
Java8Parser.RULE_methodReference_lfno_primary = 202;
Java8Parser.RULE_arrayCreationExpression = 203;
Java8Parser.RULE_dimExprs = 204;
Java8Parser.RULE_dimExpr = 205;
Java8Parser.RULE_constantExpression = 206;
Java8Parser.RULE_expression = 207;
Java8Parser.RULE_lambdaExpression = 208;
Java8Parser.RULE_lambdaParameters = 209;
Java8Parser.RULE_inferredFormalParameterList = 210;
Java8Parser.RULE_lambdaBody = 211;
Java8Parser.RULE_assignmentExpression = 212;
Java8Parser.RULE_assignment = 213;
Java8Parser.RULE_leftHandSide = 214;
Java8Parser.RULE_assignmentOperator = 215;
Java8Parser.RULE_conditionalExpression = 216;
Java8Parser.RULE_conditionalOrExpression = 217;
Java8Parser.RULE_conditionalAndExpression = 218;
Java8Parser.RULE_inclusiveOrExpression = 219;
Java8Parser.RULE_exclusiveOrExpression = 220;
Java8Parser.RULE_andExpression = 221;
Java8Parser.RULE_equalityExpression = 222;
Java8Parser.RULE_relationalExpression = 223;
Java8Parser.RULE_shiftExpression = 224;
Java8Parser.RULE_additiveExpression = 225;
Java8Parser.RULE_multiplicativeExpression = 226;
Java8Parser.RULE_unaryExpression = 227;
Java8Parser.RULE_preIncrementExpression = 228;
Java8Parser.RULE_preDecrementExpression = 229;
Java8Parser.RULE_unaryExpressionNotPlusMinus = 230;
Java8Parser.RULE_postfixExpression = 231;
Java8Parser.RULE_postIncrementExpression = 232;
Java8Parser.RULE_postIncrementExpression_lf_postfixExpression = 233;
Java8Parser.RULE_postDecrementExpression = 234;
Java8Parser.RULE_postDecrementExpression_lf_postfixExpression = 235;
Java8Parser.RULE_castExpression = 236;
Java8Parser.literalNames = [
    null, "'abstract'", "'assert'", "'boolean'", "'break'", "'byte'",
    "'case'", "'catch'", "'char'", "'class'", "'const'", "'continue'",
    "'default'", "'do'", "'double'", "'else'", "'enum'", "'extends'",
    "'final'", "'finally'", "'float'", "'for'", "'if'", "'goto'", "'implements'",
    "'import'", "'instanceof'", "'int'", "'interface'", "'long'", "'native'",
    "'new'", "'package'", "'private'", "'protected'", "'public'", "'return'",
    "'short'", "'static'", "'strictfp'", "'super'", "'switch'", "'synchronized'",
    "'this'", "'throw'", "'throws'", "'transient'", "'try'", "'void'",
    "'volatile'", "'while'", null, null, null, null, null, "'null'",
    "'('", "')'", "'{'", "'}'", "'['", "']'", "';'", "','", "'.'", "'='",
    "'>'", "'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'<='", "'>='",
    "'!='", "'&&'", "'||'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'",
    "'&'", "'|'", "'^'", "'%'", "'->'", "'::'", "'+='", "'-='", "'*='",
    "'/='", "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='",
    null, "'@'", "'...'"
];
Java8Parser.symbolicNames = [
    null, "ABSTRACT", "ASSERT", "BOOLEAN", "BREAK", "BYTE", "CASE",
    "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", "DEFAULT", "DO",
    "DOUBLE", "ELSE", "ENUM", "EXTENDS", "FINAL", "FINALLY", "FLOAT",
    "FOR", "IF", "GOTO", "IMPLEMENTS", "IMPORT", "INSTANCEOF", "INT",
    "INTERFACE", "LONG", "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED",
    "PUBLIC", "RETURN", "SHORT", "STATIC", "STRICTFP", "SUPER", "SWITCH",
    "SYNCHRONIZED", "THIS", "THROW", "THROWS", "TRANSIENT", "TRY", "VOID",
    "VOLATILE", "WHILE", "IntegerLiteral", "FloatingPointLiteral", "BooleanLiteral",
    "CharacterLiteral", "StringLiteral", "NullLiteral", "LPAREN", "RPAREN",
    "LBRACE", "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT",
    "ASSIGN", "GT", "LT", "BANG", "TILDE", "QUESTION", "COLON", "EQUAL",
    "LE", "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", "SUB",
    "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "ARROW", "COLONCOLON",
    "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN",
    "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN",
    "URSHIFT_ASSIGN", "Identifier", "AT", "ELLIPSIS", "WS", "COMMENT",
    "LINE_COMMENT"
];
Java8Parser.ruleNames = [
    "literal", "type", "primitiveType", "numericType", "integralType",
    "floatingPointType", "referenceType", "classOrInterfaceType", "classType",
    "classType_lf_classOrInterfaceType", "classType_lfno_classOrInterfaceType",
    "interfaceType", "interfaceType_lf_classOrInterfaceType", "interfaceType_lfno_classOrInterfaceType",
    "typeVariable", "arrayType", "dims", "typeParameter", "typeParameterModifier",
    "typeBound", "additionalBound", "typeArguments", "typeArgumentList",
    "typeArgument", "wildcard", "wildcardBounds", "packageName", "typeName",
    "packageOrTypeName", "expressionName", "methodName", "ambiguousName",
    "compilationUnit", "packageDeclaration", "packageModifier", "importDeclaration",
    "singleTypeImportDeclaration", "typeImportOnDemandDeclaration",
    "singleStaticImportDeclaration", "staticImportOnDemandDeclaration",
    "typeDeclaration", "classDeclaration", "normalClassDeclaration",
    "classModifier", "typeParameters", "typeParameterList", "superclass",
    "superinterfaces", "interfaceTypeList", "classBody", "classBodyDeclaration",
    "classMemberDeclaration", "fieldDeclaration", "fieldModifier", "variableDeclaratorList",
    "variableDeclarator", "variableDeclaratorId", "variableInitializer",
    "unannType", "unannPrimitiveType", "unannReferenceType", "unannClassOrInterfaceType",
    "unannClassType", "unannClassType_lf_unannClassOrInterfaceType",
    "unannClassType_lfno_unannClassOrInterfaceType", "unannInterfaceType",
    "unannInterfaceType_lf_unannClassOrInterfaceType", "unannInterfaceType_lfno_unannClassOrInterfaceType",
    "unannTypeVariable", "unannArrayType", "methodDeclaration", "methodModifier",
    "methodHeader", "result", "methodDeclarator", "formalParameterList",
    "formalParameters", "formalParameter", "variableModifier", "lastFormalParameter",
    "receiverParameter", "throws_", "exceptionTypeList", "exceptionType",
    "methodBody", "instanceInitializer", "staticInitializer", "constructorDeclaration",
    "constructorModifier", "constructorDeclarator", "simpleTypeName",
    "constructorBody", "explicitConstructorInvocation", "enumDeclaration",
    "enumBody", "enumConstantList", "enumConstant", "enumConstantModifier",
    "enumBodyDeclarations", "interfaceDeclaration", "normalInterfaceDeclaration",
    "interfaceModifier", "extendsInterfaces", "interfaceBody", "interfaceMemberDeclaration",
    "constantDeclaration", "constantModifier", "interfaceMethodDeclaration",
    "interfaceMethodModifier", "annotationTypeDeclaration", "annotationTypeBody",
    "annotationTypeMemberDeclaration", "annotationTypeElementDeclaration",
    "annotationTypeElementModifier", "defaultValue", "annotation", "normalAnnotation",
    "elementValuePairList", "elementValuePair", "elementValue", "elementValueArrayInitializer",
    "elementValueList", "markerAnnotation", "singleElementAnnotation",
    "arrayInitializer", "variableInitializerList", "block", "blockStatements",
    "blockStatement", "localVariableDeclarationStatement", "localVariableDeclaration",
    "statement", "statementNoShortIf", "statementWithoutTrailingSubstatement",
    "emptyStatement", "labeledStatement", "labeledStatementNoShortIf",
    "expressionStatement", "statementExpression", "ifThenStatement",
    "ifThenElseStatement", "ifThenElseStatementNoShortIf", "assertStatement",
    "switchStatement", "switchBlock", "switchBlockStatementGroup", "switchLabels",
    "switchLabel", "enumConstantName", "whileStatement", "whileStatementNoShortIf",
    "doStatement", "forStatement", "forStatementNoShortIf", "basicForStatement",
    "basicForStatementNoShortIf", "forInit", "forUpdate", "statementExpressionList",
    "enhancedForStatement", "enhancedForStatementNoShortIf", "breakStatement",
    "continueStatement", "returnStatement", "throwStatement", "synchronizedStatement",
    "tryStatement", "catches", "catchClause", "catchFormalParameter",
    "catchType", "finally_", "tryWithResourcesStatement", "resourceSpecification",
    "resourceList", "resource", "primary", "primaryNoNewArray", "primaryNoNewArray_lf_arrayAccess",
    "primaryNoNewArray_lfno_arrayAccess", "primaryNoNewArray_lf_primary",
    "primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary", "primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary",
    "primaryNoNewArray_lfno_primary", "primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary",
    "primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary",
    "classInstanceCreationExpression", "classInstanceCreationExpression_lf_primary",
    "classInstanceCreationExpression_lfno_primary", "typeArgumentsOrDiamond",
    "fieldAccess", "fieldAccess_lf_primary", "fieldAccess_lfno_primary",
    "arrayAccess", "arrayAccess_lf_primary", "arrayAccess_lfno_primary",
    "methodInvocation", "methodInvocation_lf_primary", "methodInvocation_lfno_primary",
    "argumentList", "methodReference", "methodReference_lf_primary",
    "methodReference_lfno_primary", "arrayCreationExpression", "dimExprs",
    "dimExpr", "constantExpression", "expression", "lambdaExpression",
    "lambdaParameters", "inferredFormalParameterList", "lambdaBody",
    "assignmentExpression", "assignment", "leftHandSide", "assignmentOperator",
    "conditionalExpression", "conditionalOrExpression", "conditionalAndExpression",
    "inclusiveOrExpression", "exclusiveOrExpression", "andExpression",
    "equalityExpression", "relationalExpression", "shiftExpression",
    "additiveExpression", "multiplicativeExpression", "unaryExpression",
    "preIncrementExpression", "preDecrementExpression", "unaryExpressionNotPlusMinus",
    "postfixExpression", "postIncrementExpression", "postIncrementExpression_lf_postfixExpression",
    "postDecrementExpression", "postDecrementExpression_lf_postfixExpression",
    "castExpression",
];
Java8Parser._serializedATN = [
    4, 1, 107, 2858, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6,
    7, 6, 2, 7, 7, 7, 2, 8, 7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7,
    13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2, 17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2,
    20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7, 25, 2, 26, 7,
    26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 2,
    33, 7, 33, 2, 34, 7, 34, 2, 35, 7, 35, 2, 36, 7, 36, 2, 37, 7, 37, 2, 38, 7, 38, 2, 39, 7,
    39, 2, 40, 7, 40, 2, 41, 7, 41, 2, 42, 7, 42, 2, 43, 7, 43, 2, 44, 7, 44, 2, 45, 7, 45, 2,
    46, 7, 46, 2, 47, 7, 47, 2, 48, 7, 48, 2, 49, 7, 49, 2, 50, 7, 50, 2, 51, 7, 51, 2, 52, 7,
    52, 2, 53, 7, 53, 2, 54, 7, 54, 2, 55, 7, 55, 2, 56, 7, 56, 2, 57, 7, 57, 2, 58, 7, 58, 2,
    59, 7, 59, 2, 60, 7, 60, 2, 61, 7, 61, 2, 62, 7, 62, 2, 63, 7, 63, 2, 64, 7, 64, 2, 65, 7,
    65, 2, 66, 7, 66, 2, 67, 7, 67, 2, 68, 7, 68, 2, 69, 7, 69, 2, 70, 7, 70, 2, 71, 7, 71, 2,
    72, 7, 72, 2, 73, 7, 73, 2, 74, 7, 74, 2, 75, 7, 75, 2, 76, 7, 76, 2, 77, 7, 77, 2, 78, 7,
    78, 2, 79, 7, 79, 2, 80, 7, 80, 2, 81, 7, 81, 2, 82, 7, 82, 2, 83, 7, 83, 2, 84, 7, 84, 2,
    85, 7, 85, 2, 86, 7, 86, 2, 87, 7, 87, 2, 88, 7, 88, 2, 89, 7, 89, 2, 90, 7, 90, 2, 91, 7,
    91, 2, 92, 7, 92, 2, 93, 7, 93, 2, 94, 7, 94, 2, 95, 7, 95, 2, 96, 7, 96, 2, 97, 7, 97, 2,
    98, 7, 98, 2, 99, 7, 99, 2, 100, 7, 100, 2, 101, 7, 101, 2, 102, 7, 102, 2, 103, 7, 103,
    2, 104, 7, 104, 2, 105, 7, 105, 2, 106, 7, 106, 2, 107, 7, 107, 2, 108, 7, 108, 2, 109,
    7, 109, 2, 110, 7, 110, 2, 111, 7, 111, 2, 112, 7, 112, 2, 113, 7, 113, 2, 114, 7, 114,
    2, 115, 7, 115, 2, 116, 7, 116, 2, 117, 7, 117, 2, 118, 7, 118, 2, 119, 7, 119, 2, 120,
    7, 120, 2, 121, 7, 121, 2, 122, 7, 122, 2, 123, 7, 123, 2, 124, 7, 124, 2, 125, 7, 125,
    2, 126, 7, 126, 2, 127, 7, 127, 2, 128, 7, 128, 2, 129, 7, 129, 2, 130, 7, 130, 2, 131,
    7, 131, 2, 132, 7, 132, 2, 133, 7, 133, 2, 134, 7, 134, 2, 135, 7, 135, 2, 136, 7, 136,
    2, 137, 7, 137, 2, 138, 7, 138, 2, 139, 7, 139, 2, 140, 7, 140, 2, 141, 7, 141, 2, 142,
    7, 142, 2, 143, 7, 143, 2, 144, 7, 144, 2, 145, 7, 145, 2, 146, 7, 146, 2, 147, 7, 147,
    2, 148, 7, 148, 2, 149, 7, 149, 2, 150, 7, 150, 2, 151, 7, 151, 2, 152, 7, 152, 2, 153,
    7, 153, 2, 154, 7, 154, 2, 155, 7, 155, 2, 156, 7, 156, 2, 157, 7, 157, 2, 158, 7, 158,
    2, 159, 7, 159, 2, 160, 7, 160, 2, 161, 7, 161, 2, 162, 7, 162, 2, 163, 7, 163, 2, 164,
    7, 164, 2, 165, 7, 165, 2, 166, 7, 166, 2, 167, 7, 167, 2, 168, 7, 168, 2, 169, 7, 169,
    2, 170, 7, 170, 2, 171, 7, 171, 2, 172, 7, 172, 2, 173, 7, 173, 2, 174, 7, 174, 2, 175,
    7, 175, 2, 176, 7, 176, 2, 177, 7, 177, 2, 178, 7, 178, 2, 179, 7, 179, 2, 180, 7, 180,
    2, 181, 7, 181, 2, 182, 7, 182, 2, 183, 7, 183, 2, 184, 7, 184, 2, 185, 7, 185, 2, 186,
    7, 186, 2, 187, 7, 187, 2, 188, 7, 188, 2, 189, 7, 189, 2, 190, 7, 190, 2, 191, 7, 191,
    2, 192, 7, 192, 2, 193, 7, 193, 2, 194, 7, 194, 2, 195, 7, 195, 2, 196, 7, 196, 2, 197,
    7, 197, 2, 198, 7, 198, 2, 199, 7, 199, 2, 200, 7, 200, 2, 201, 7, 201, 2, 202, 7, 202,
    2, 203, 7, 203, 2, 204, 7, 204, 2, 205, 7, 205, 2, 206, 7, 206, 2, 207, 7, 207, 2, 208,
    7, 208, 2, 209, 7, 209, 2, 210, 7, 210, 2, 211, 7, 211, 2, 212, 7, 212, 2, 213, 7, 213,
    2, 214, 7, 214, 2, 215, 7, 215, 2, 216, 7, 216, 2, 217, 7, 217, 2, 218, 7, 218, 2, 219,
    7, 219, 2, 220, 7, 220, 2, 221, 7, 221, 2, 222, 7, 222, 2, 223, 7, 223, 2, 224, 7, 224,
    2, 225, 7, 225, 2, 226, 7, 226, 2, 227, 7, 227, 2, 228, 7, 228, 2, 229, 7, 229, 2, 230,
    7, 230, 2, 231, 7, 231, 2, 232, 7, 232, 2, 233, 7, 233, 2, 234, 7, 234, 2, 235, 7, 235,
    2, 236, 7, 236, 1, 0, 1, 0, 1, 1, 1, 1, 3, 1, 479, 8, 1, 1, 2, 5, 2, 482, 8, 2, 10, 2, 12,
    2, 485, 9, 2, 1, 2, 1, 2, 5, 2, 489, 8, 2, 10, 2, 12, 2, 492, 9, 2, 1, 2, 3, 2, 495, 8, 2,
    1, 3, 1, 3, 3, 3, 499, 8, 3, 1, 4, 1, 4, 1, 5, 1, 5, 1, 6, 1, 6, 1, 6, 3, 6, 508, 8, 6, 1, 7,
    1, 7, 3, 7, 512, 8, 7, 1, 7, 1, 7, 5, 7, 516, 8, 7, 10, 7, 12, 7, 519, 9, 7, 1, 8, 5, 8, 522,
    8, 8, 10, 8, 12, 8, 525, 9, 8, 1, 8, 1, 8, 3, 8, 529, 8, 8, 1, 8, 1, 8, 1, 8, 5, 8, 534, 8,
    8, 10, 8, 12, 8, 537, 9, 8, 1, 8, 1, 8, 3, 8, 541, 8, 8, 3, 8, 543, 8, 8, 1, 9, 1, 9, 5, 9,
    547, 8, 9, 10, 9, 12, 9, 550, 9, 9, 1, 9, 1, 9, 3, 9, 554, 8, 9, 1, 10, 5, 10, 557, 8, 10,
    10, 10, 12, 10, 560, 9, 10, 1, 10, 1, 10, 3, 10, 564, 8, 10, 1, 11, 1, 11, 1, 12, 1, 12,
    1, 13, 1, 13, 1, 14, 5, 14, 573, 8, 14, 10, 14, 12, 14, 576, 9, 14, 1, 14, 1, 14, 1, 15,
    1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 589, 8, 15, 1, 16, 5, 16,
    592, 8, 16, 10, 16, 12, 16, 595, 9, 16, 1, 16, 1, 16, 1, 16, 5, 16, 600, 8, 16, 10, 16,
    12, 16, 603, 9, 16, 1, 16, 1, 16, 5, 16, 607, 8, 16, 10, 16, 12, 16, 610, 9, 16, 1, 17,
    5, 17, 613, 8, 17, 10, 17, 12, 17, 616, 9, 17, 1, 17, 1, 17, 3, 17, 620, 8, 17, 1, 18,
    1, 18, 1, 19, 1, 19, 1, 19, 1, 19, 1, 19, 5, 19, 629, 8, 19, 10, 19, 12, 19, 632, 9, 19,
    3, 19, 634, 8, 19, 1, 20, 1, 20, 1, 20, 1, 21, 1, 21, 1, 21, 1, 21, 1, 22, 1, 22, 1, 22,
    5, 22, 646, 8, 22, 10, 22, 12, 22, 649, 9, 22, 1, 23, 1, 23, 3, 23, 653, 8, 23, 1, 24,
    5, 24, 656, 8, 24, 10, 24, 12, 24, 659, 9, 24, 1, 24, 1, 24, 3, 24, 663, 8, 24, 1, 25,
    1, 25, 1, 25, 1, 25, 3, 25, 669, 8, 25, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 1, 26, 5, 26,
    677, 8, 26, 10, 26, 12, 26, 680, 9, 26, 1, 27, 1, 27, 1, 27, 1, 27, 1, 27, 3, 27, 687,
    8, 27, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 1, 28, 5, 28, 695, 8, 28, 10, 28, 12, 28, 698,
    9, 28, 1, 29, 1, 29, 1, 29, 1, 29, 1, 29, 3, 29, 705, 8, 29, 1, 30, 1, 30, 1, 31, 1, 31,
    1, 31, 1, 31, 1, 31, 1, 31, 5, 31, 715, 8, 31, 10, 31, 12, 31, 718, 9, 31, 1, 32, 3, 32,
    721, 8, 32, 1, 32, 5, 32, 724, 8, 32, 10, 32, 12, 32, 727, 9, 32, 1, 32, 5, 32, 730, 8,
    32, 10, 32, 12, 32, 733, 9, 32, 1, 32, 1, 32, 1, 33, 5, 33, 738, 8, 33, 10, 33, 12, 33,
    741, 9, 33, 1, 33, 1, 33, 1, 33, 1, 33, 5, 33, 747, 8, 33, 10, 33, 12, 33, 750, 9, 33,
    1, 33, 1, 33, 1, 34, 1, 34, 1, 35, 1, 35, 1, 35, 1, 35, 3, 35, 760, 8, 35, 1, 36, 1, 36,
    1, 36, 1, 36, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 37, 1, 38, 1, 38, 1, 38, 1, 38, 1, 38,
    1, 38, 1, 38, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 39, 1, 40, 1, 40, 1, 40, 3, 40,
    789, 8, 40, 1, 41, 1, 41, 3, 41, 793, 8, 41, 1, 42, 5, 42, 796, 8, 42, 10, 42, 12, 42,
    799, 9, 42, 1, 42, 1, 42, 1, 42, 3, 42, 804, 8, 42, 1, 42, 3, 42, 807, 8, 42, 1, 42, 3,
    42, 810, 8, 42, 1, 42, 1, 42, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 1, 43, 3,
    43, 822, 8, 43, 1, 44, 1, 44, 1, 44, 1, 44, 1, 45, 1, 45, 1, 45, 5, 45, 831, 8, 45, 10,
    45, 12, 45, 834, 9, 45, 1, 46, 1, 46, 1, 46, 1, 47, 1, 47, 1, 47, 1, 48, 1, 48, 1, 48, 5,
    48, 845, 8, 48, 10, 48, 12, 48, 848, 9, 48, 1, 49, 1, 49, 5, 49, 852, 8, 49, 10, 49, 12,
    49, 855, 9, 49, 1, 49, 1, 49, 1, 50, 1, 50, 1, 50, 1, 50, 3, 50, 863, 8, 50, 1, 51, 1, 51,
    1, 51, 1, 51, 1, 51, 3, 51, 870, 8, 51, 1, 52, 5, 52, 873, 8, 52, 10, 52, 12, 52, 876,
    9, 52, 1, 52, 1, 52, 1, 52, 1, 52, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53, 1, 53,
    3, 53, 890, 8, 53, 1, 54, 1, 54, 1, 54, 5, 54, 895, 8, 54, 10, 54, 12, 54, 898, 9, 54,
    1, 55, 1, 55, 1, 55, 3, 55, 903, 8, 55, 1, 56, 1, 56, 3, 56, 907, 8, 56, 1, 57, 1, 57, 3,
    57, 911, 8, 57, 1, 58, 1, 58, 3, 58, 915, 8, 58, 1, 59, 1, 59, 3, 59, 919, 8, 59, 1, 60,
    1, 60, 1, 60, 3, 60, 924, 8, 60, 1, 61, 1, 61, 3, 61, 928, 8, 61, 1, 61, 1, 61, 5, 61, 932,
    8, 61, 10, 61, 12, 61, 935, 9, 61, 1, 62, 1, 62, 3, 62, 939, 8, 62, 1, 62, 1, 62, 1, 62,
    5, 62, 944, 8, 62, 10, 62, 12, 62, 947, 9, 62, 1, 62, 1, 62, 3, 62, 951, 8, 62, 3, 62,
    953, 8, 62, 1, 63, 1, 63, 5, 63, 957, 8, 63, 10, 63, 12, 63, 960, 9, 63, 1, 63, 1, 63,
    3, 63, 964, 8, 63, 1, 64, 1, 64, 3, 64, 968, 8, 64, 1, 65, 1, 65, 1, 66, 1, 66, 1, 67, 1,
    67, 1, 68, 1, 68, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 1, 69, 3, 69, 987,
    8, 69, 1, 70, 5, 70, 990, 8, 70, 10, 70, 12, 70, 993, 9, 70, 1, 70, 1, 70, 1, 70, 1, 71,
    1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 1, 71, 3, 71, 1008, 8, 71, 1, 72,
    1, 72, 1, 72, 3, 72, 1013, 8, 72, 1, 72, 1, 72, 5, 72, 1017, 8, 72, 10, 72, 12, 72, 1020,
    9, 72, 1, 72, 1, 72, 1, 72, 3, 72, 1025, 8, 72, 3, 72, 1027, 8, 72, 1, 73, 1, 73, 3, 73,
    1031, 8, 73, 1, 74, 1, 74, 1, 74, 3, 74, 1036, 8, 74, 1, 74, 1, 74, 3, 74, 1040, 8, 74,
    1, 75, 1, 75, 1, 75, 1, 75, 1, 75, 3, 75, 1047, 8, 75, 1, 76, 1, 76, 1, 76, 5, 76, 1052,
    8, 76, 10, 76, 12, 76, 1055, 9, 76, 1, 76, 1, 76, 1, 76, 5, 76, 1060, 8, 76, 10, 76, 12,
    76, 1063, 9, 76, 3, 76, 1065, 8, 76, 1, 77, 5, 77, 1068, 8, 77, 10, 77, 12, 77, 1071,
    9, 77, 1, 77, 1, 77, 1, 77, 1, 78, 1, 78, 3, 78, 1078, 8, 78, 1, 79, 5, 79, 1081, 8, 79,
    10, 79, 12, 79, 1084, 9, 79, 1, 79, 1, 79, 5, 79, 1088, 8, 79, 10, 79, 12, 79, 1091,
    9, 79, 1, 79, 1, 79, 1, 79, 1, 79, 3, 79, 1097, 8, 79, 1, 80, 5, 80, 1100, 8, 80, 10, 80,
    12, 80, 1103, 9, 80, 1, 80, 1, 80, 1, 80, 3, 80, 1108, 8, 80, 1, 80, 1, 80, 1, 81, 1, 81,
    1, 81, 1, 82, 1, 82, 1, 82, 5, 82, 1118, 8, 82, 10, 82, 12, 82, 1121, 9, 82, 1, 83, 1,
    83, 3, 83, 1125, 8, 83, 1, 84, 1, 84, 3, 84, 1129, 8, 84, 1, 85, 1, 85, 1, 86, 1, 86, 1,
    86, 1, 87, 5, 87, 1137, 8, 87, 10, 87, 12, 87, 1140, 9, 87, 1, 87, 1, 87, 3, 87, 1144,
    8, 87, 1, 87, 1, 87, 1, 88, 1, 88, 1, 88, 1, 88, 3, 88, 1152, 8, 88, 1, 89, 3, 89, 1155,
    8, 89, 1, 89, 1, 89, 1, 89, 3, 89, 1160, 8, 89, 1, 89, 1, 89, 1, 90, 1, 90, 1, 91, 1, 91,
    3, 91, 1168, 8, 91, 1, 91, 3, 91, 1171, 8, 91, 1, 91, 1, 91, 1, 92, 3, 92, 1176, 8, 92,
    1, 92, 1, 92, 1, 92, 3, 92, 1181, 8, 92, 1, 92, 1, 92, 1, 92, 3, 92, 1186, 8, 92, 1, 92,
    1, 92, 1, 92, 3, 92, 1191, 8, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 3, 92, 1198, 8, 92,
    1, 92, 1, 92, 1, 92, 3, 92, 1203, 8, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 1, 92, 3, 92,
    1211, 8, 92, 1, 92, 1, 92, 1, 92, 3, 92, 1216, 8, 92, 1, 92, 1, 92, 1, 92, 3, 92, 1221,
    8, 92, 1, 93, 5, 93, 1224, 8, 93, 10, 93, 12, 93, 1227, 9, 93, 1, 93, 1, 93, 1, 93, 3,
    93, 1232, 8, 93, 1, 93, 1, 93, 1, 94, 1, 94, 3, 94, 1238, 8, 94, 1, 94, 3, 94, 1241, 8,
    94, 1, 94, 3, 94, 1244, 8, 94, 1, 94, 1, 94, 1, 95, 1, 95, 1, 95, 5, 95, 1251, 8, 95, 10,
    95, 12, 95, 1254, 9, 95, 1, 96, 5, 96, 1257, 8, 96, 10, 96, 12, 96, 1260, 9, 96, 1, 96,
    1, 96, 1, 96, 3, 96, 1265, 8, 96, 1, 96, 3, 96, 1268, 8, 96, 1, 96, 3, 96, 1271, 8, 96,
    1, 97, 1, 97, 1, 98, 1, 98, 5, 98, 1277, 8, 98, 10, 98, 12, 98, 1280, 9, 98, 1, 99, 1,
    99, 3, 99, 1284, 8, 99, 1, 100, 5, 100, 1287, 8, 100, 10, 100, 12, 100, 1290, 9, 100,
    1, 100, 1, 100, 1, 100, 3, 100, 1295, 8, 100, 1, 100, 3, 100, 1298, 8, 100, 1, 100,
    1, 100, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 1, 101, 3, 101, 1309, 8, 101,
    1, 102, 1, 102, 1, 102, 1, 103, 1, 103, 5, 103, 1316, 8, 103, 10, 103, 12, 103, 1319,
    9, 103, 1, 103, 1, 103, 1, 104, 1, 104, 1, 104, 1, 104, 1, 104, 3, 104, 1328, 8, 104,
    1, 105, 5, 105, 1331, 8, 105, 10, 105, 12, 105, 1334, 9, 105, 1, 105, 1, 105, 1, 105,
    1, 105, 1, 106, 1, 106, 1, 106, 1, 106, 3, 106, 1344, 8, 106, 1, 107, 5, 107, 1347,
    8, 107, 10, 107, 12, 107, 1350, 9, 107, 1, 107, 1, 107, 1, 107, 1, 108, 1, 108, 1, 108,
    1, 108, 1, 108, 1, 108, 3, 108, 1361, 8, 108, 1, 109, 5, 109, 1364, 8, 109, 10, 109,
    12, 109, 1367, 9, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 109, 1, 110, 1, 110, 5, 110,
    1376, 8, 110, 10, 110, 12, 110, 1379, 9, 110, 1, 110, 1, 110, 1, 111, 1, 111, 1, 111,
    1, 111, 1, 111, 3, 111, 1388, 8, 111, 1, 112, 5, 112, 1391, 8, 112, 10, 112, 12, 112,
    1394, 9, 112, 1, 112, 1, 112, 1, 112, 1, 112, 1, 112, 3, 112, 1401, 8, 112, 1, 112,
    3, 112, 1404, 8, 112, 1, 112, 1, 112, 1, 113, 1, 113, 1, 113, 3, 113, 1411, 8, 113,
    1, 114, 1, 114, 1, 114, 1, 115, 1, 115, 1, 115, 3, 115, 1419, 8, 115, 1, 116, 1, 116,
    1, 116, 1, 116, 3, 116, 1425, 8, 116, 1, 116, 1, 116, 1, 117, 1, 117, 1, 117, 5, 117,
    1432, 8, 117, 10, 117, 12, 117, 1435, 9, 117, 1, 118, 1, 118, 1, 118, 1, 118, 1, 119,
    1, 119, 1, 119, 3, 119, 1444, 8, 119, 1, 120, 1, 120, 3, 120, 1448, 8, 120, 1, 120,
    3, 120, 1451, 8, 120, 1, 120, 1, 120, 1, 121, 1, 121, 1, 121, 5, 121, 1458, 8, 121,
    10, 121, 12, 121, 1461, 9, 121, 1, 122, 1, 122, 1, 122, 1, 123, 1, 123, 1, 123, 1, 123,
    1, 123, 1, 123, 1, 124, 1, 124, 3, 124, 1474, 8, 124, 1, 124, 3, 124, 1477, 8, 124,
    1, 124, 1, 124, 1, 125, 1, 125, 1, 125, 5, 125, 1484, 8, 125, 10, 125, 12, 125, 1487,
    9, 125, 1, 126, 1, 126, 3, 126, 1491, 8, 126, 1, 126, 1, 126, 1, 127, 1, 127, 5, 127,
    1497, 8, 127, 10, 127, 12, 127, 1500, 9, 127, 1, 128, 1, 128, 1, 128, 3, 128, 1505,
    8, 128, 1, 129, 1, 129, 1, 129, 1, 130, 5, 130, 1511, 8, 130, 10, 130, 12, 130, 1514,
    9, 130, 1, 130, 1, 130, 1, 130, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 1, 131, 3, 131,
    1525, 8, 131, 1, 132, 1, 132, 1, 132, 1, 132, 1, 132, 3, 132, 1532, 8, 132, 1, 133,
    1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133, 1, 133,
    3, 133, 1546, 8, 133, 1, 134, 1, 134, 1, 135, 1, 135, 1, 135, 1, 135, 1, 136, 1, 136,
    1, 136, 1, 136, 1, 137, 1, 137, 1, 137, 1, 138, 1, 138, 1, 138, 1, 138, 1, 138, 1, 138,
    1, 138, 3, 138, 1568, 8, 138, 1, 139, 1, 139, 1, 139, 1, 139, 1, 139, 1, 139, 1, 140,
    1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 140, 1, 141, 1, 141, 1, 141, 1, 141,
    1, 141, 1, 141, 1, 141, 1, 141, 1, 142, 1, 142, 1, 142, 1, 142, 1, 142, 1, 142, 1, 142,
    1, 142, 1, 142, 1, 142, 3, 142, 1602, 8, 142, 1, 143, 1, 143, 1, 143, 1, 143, 1, 143,
    1, 143, 1, 144, 1, 144, 5, 144, 1612, 8, 144, 10, 144, 12, 144, 1615, 9, 144, 1, 144,
    5, 144, 1618, 8, 144, 10, 144, 12, 144, 1621, 9, 144, 1, 144, 1, 144, 1, 145, 1, 145,
    1, 145, 1, 146, 1, 146, 5, 146, 1630, 8, 146, 10, 146, 12, 146, 1633, 9, 146, 1, 147,
    1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 1, 147, 3, 147, 1645,
    8, 147, 1, 148, 1, 148, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 149, 1, 150, 1, 150,
    1, 150, 1, 150, 1, 150, 1, 150, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151, 1, 151,
    1, 151, 1, 152, 1, 152, 3, 152, 1671, 8, 152, 1, 153, 1, 153, 3, 153, 1675, 8, 153,
    1, 154, 1, 154, 1, 154, 3, 154, 1680, 8, 154, 1, 154, 1, 154, 3, 154, 1684, 8, 154,
    1, 154, 1, 154, 3, 154, 1688, 8, 154, 1, 154, 1, 154, 1, 154, 1, 155, 1, 155, 1, 155,
    3, 155, 1696, 8, 155, 1, 155, 1, 155, 3, 155, 1700, 8, 155, 1, 155, 1, 155, 3, 155,
    1704, 8, 155, 1, 155, 1, 155, 1, 155, 1, 156, 1, 156, 3, 156, 1711, 8, 156, 1, 157,
    1, 157, 1, 158, 1, 158, 1, 158, 5, 158, 1718, 8, 158, 10, 158, 12, 158, 1721, 9, 158,
    1, 159, 1, 159, 1, 159, 5, 159, 1726, 8, 159, 10, 159, 12, 159, 1729, 9, 159, 1, 159,
    1, 159, 1, 159, 1, 159, 1, 159, 1, 159, 1, 159, 1, 160, 1, 160, 1, 160, 5, 160, 1741,
    8, 160, 10, 160, 12, 160, 1744, 9, 160, 1, 160, 1, 160, 1, 160, 1, 160, 1, 160, 1, 160,
    1, 160, 1, 161, 1, 161, 3, 161, 1755, 8, 161, 1, 161, 1, 161, 1, 162, 1, 162, 3, 162,
    1761, 8, 162, 1, 162, 1, 162, 1, 163, 1, 163, 3, 163, 1767, 8, 163, 1, 163, 1, 163,
    1, 164, 1, 164, 1, 164, 1, 164, 1, 165, 1, 165, 1, 165, 1, 165, 1, 165, 1, 165, 1, 166,
    1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 1, 166, 3, 166, 1788, 8, 166, 1, 166, 1, 166,
    1, 166, 3, 166, 1793, 8, 166, 1, 167, 1, 167, 5, 167, 1797, 8, 167, 10, 167, 12, 167,
    1800, 9, 167, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 168, 1, 169, 5, 169, 1809,
    8, 169, 10, 169, 12, 169, 1812, 9, 169, 1, 169, 1, 169, 1, 169, 1, 170, 1, 170, 1, 170,
    5, 170, 1820, 8, 170, 10, 170, 12, 170, 1823, 9, 170, 1, 171, 1, 171, 1, 171, 1, 172,
    1, 172, 1, 172, 1, 172, 3, 172, 1832, 8, 172, 1, 172, 3, 172, 1835, 8, 172, 1, 173,
    1, 173, 1, 173, 3, 173, 1840, 8, 173, 1, 173, 1, 173, 1, 174, 1, 174, 1, 174, 5, 174,
    1847, 8, 174, 10, 174, 12, 174, 1850, 9, 174, 1, 175, 5, 175, 1853, 8, 175, 10, 175,
    12, 175, 1856, 9, 175, 1, 175, 1, 175, 1, 175, 1, 175, 1, 175, 1, 176, 1, 176, 3, 176,
    1865, 8, 176, 1, 176, 5, 176, 1868, 8, 176, 10, 176, 12, 176, 1871, 9, 176, 1, 177,
    1, 177, 1, 177, 1, 177, 5, 177, 1877, 8, 177, 10, 177, 12, 177, 1880, 9, 177, 1, 177,
    1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177,
    1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 1, 177, 3, 177, 1902, 8, 177,
    1, 178, 1, 178, 1, 179, 1, 179, 1, 179, 1, 179, 5, 179, 1910, 8, 179, 10, 179, 12, 179,
    1913, 9, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179,
    1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 1, 179, 3, 179,
    1934, 8, 179, 1, 180, 1, 180, 1, 180, 1, 180, 1, 180, 3, 180, 1941, 8, 180, 1, 181,
    1, 181, 1, 182, 1, 182, 1, 182, 1, 182, 3, 182, 1949, 8, 182, 1, 183, 1, 183, 1, 183,
    1, 183, 5, 183, 1955, 8, 183, 10, 183, 12, 183, 1958, 9, 183, 1, 183, 1, 183, 1, 183,
    1, 183, 1, 183, 1, 183, 5, 183, 1966, 8, 183, 10, 183, 12, 183, 1969, 9, 183, 1, 183,
    1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183,
    1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 1, 183, 3, 183, 1991, 8, 183,
    1, 184, 1, 184, 1, 185, 1, 185, 1, 185, 1, 185, 5, 185, 1999, 8, 185, 10, 185, 12, 185,
    2002, 9, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 5, 185, 2010, 8, 185,
    10, 185, 12, 185, 2013, 9, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185,
    1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185, 1, 185,
    1, 185, 3, 185, 2034, 8, 185, 1, 186, 1, 186, 3, 186, 2038, 8, 186, 1, 186, 5, 186,
    2041, 8, 186, 10, 186, 12, 186, 2044, 9, 186, 1, 186, 1, 186, 1, 186, 5, 186, 2049,
    8, 186, 10, 186, 12, 186, 2052, 9, 186, 1, 186, 5, 186, 2055, 8, 186, 10, 186, 12,
    186, 2058, 9, 186, 1, 186, 3, 186, 2061, 8, 186, 1, 186, 1, 186, 3, 186, 2065, 8, 186,
    1, 186, 1, 186, 3, 186, 2069, 8, 186, 1, 186, 1, 186, 1, 186, 1, 186, 3, 186, 2075,
    8, 186, 1, 186, 5, 186, 2078, 8, 186, 10, 186, 12, 186, 2081, 9, 186, 1, 186, 1, 186,
    3, 186, 2085, 8, 186, 1, 186, 1, 186, 3, 186, 2089, 8, 186, 1, 186, 1, 186, 3, 186,
    2093, 8, 186, 1, 186, 1, 186, 1, 186, 1, 186, 3, 186, 2099, 8, 186, 1, 186, 5, 186,
    2102, 8, 186, 10, 186, 12, 186, 2105, 9, 186, 1, 186, 1, 186, 3, 186, 2109, 8, 186,
    1, 186, 1, 186, 3, 186, 2113, 8, 186, 1, 186, 1, 186, 3, 186, 2117, 8, 186, 3, 186,
    2119, 8, 186, 1, 187, 1, 187, 1, 187, 3, 187, 2124, 8, 187, 1, 187, 5, 187, 2127, 8,
    187, 10, 187, 12, 187, 2130, 9, 187, 1, 187, 1, 187, 3, 187, 2134, 8, 187, 1, 187,
    1, 187, 3, 187, 2138, 8, 187, 1, 187, 1, 187, 3, 187, 2142, 8, 187, 1, 188, 1, 188,
    3, 188, 2146, 8, 188, 1, 188, 5, 188, 2149, 8, 188, 10, 188, 12, 188, 2152, 9, 188,
    1, 188, 1, 188, 1, 188, 5, 188, 2157, 8, 188, 10, 188, 12, 188, 2160, 9, 188, 1, 188,
    5, 188, 2163, 8, 188, 10, 188, 12, 188, 2166, 9, 188, 1, 188, 3, 188, 2169, 8, 188,
    1, 188, 1, 188, 3, 188, 2173, 8, 188, 1, 188, 1, 188, 3, 188, 2177, 8, 188, 1, 188,
    1, 188, 1, 188, 1, 188, 3, 188, 2183, 8, 188, 1, 188, 5, 188, 2186, 8, 188, 10, 188,
    12, 188, 2189, 9, 188, 1, 188, 1, 188, 3, 188, 2193, 8, 188, 1, 188, 1, 188, 3, 188,
    2197, 8, 188, 1, 188, 1, 188, 3, 188, 2201, 8, 188, 3, 188, 2203, 8, 188, 1, 189, 1,
    189, 1, 189, 3, 189, 2208, 8, 189, 1, 190, 1, 190, 1, 190, 1, 190, 1, 190, 1, 190, 1,
    190, 1, 190, 1, 190, 1, 190, 1, 190, 1, 190, 1, 190, 3, 190, 2223, 8, 190, 1, 191, 1,
    191, 1, 191, 1, 192, 1, 192, 1, 192, 1, 192, 1, 192, 1, 192, 1, 192, 1, 192, 1, 192,
    3, 192, 2237, 8, 192, 1, 193, 1, 193, 1, 193, 1, 193, 1, 193, 1, 193, 1, 193, 1, 193,
    1, 193, 1, 193, 3, 193, 2249, 8, 193, 1, 193, 1, 193, 1, 193, 1, 193, 1, 193, 5, 193,
    2256, 8, 193, 10, 193, 12, 193, 2259, 9, 193, 1, 194, 1, 194, 1, 194, 1, 194, 1, 194,
    1, 194, 1, 194, 1, 194, 1, 194, 1, 194, 5, 194, 2271, 8, 194, 10, 194, 12, 194, 2274,
    9, 194, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195,
    3, 195, 2286, 8, 195, 1, 195, 1, 195, 1, 195, 1, 195, 1, 195, 5, 195, 2293, 8, 195,
    10, 195, 12, 195, 2296, 9, 195, 1, 196, 1, 196, 1, 196, 3, 196, 2301, 8, 196, 1, 196,
    1, 196, 1, 196, 1, 196, 1, 196, 3, 196, 2308, 8, 196, 1, 196, 1, 196, 1, 196, 3, 196,
    2313, 8, 196, 1, 196, 1, 196, 1, 196, 1, 196, 1, 196, 3, 196, 2320, 8, 196, 1, 196,
    1, 196, 1, 196, 3, 196, 2325, 8, 196, 1, 196, 1, 196, 1, 196, 1, 196, 1, 196, 3, 196,
    2332, 8, 196, 1, 196, 1, 196, 1, 196, 3, 196, 2337, 8, 196, 1, 196, 1, 196, 1, 196,
    1, 196, 1, 196, 3, 196, 2344, 8, 196, 1, 196, 1, 196, 1, 196, 3, 196, 2349, 8, 196,
    1, 196, 1, 196, 1, 196, 1, 196, 1, 196, 1, 196, 3, 196, 2357, 8, 196, 1, 196, 1, 196,
    1, 196, 3, 196, 2362, 8, 196, 1, 196, 1, 196, 3, 196, 2366, 8, 196, 1, 197, 1, 197,
    3, 197, 2370, 8, 197, 1, 197, 1, 197, 1, 197, 3, 197, 2375, 8, 197, 1, 197, 1, 197,
    1, 198, 1, 198, 1, 198, 3, 198, 2382, 8, 198, 1, 198, 1, 198, 1, 198, 1, 198, 1, 198,
    3, 198, 2389, 8, 198, 1, 198, 1, 198, 1, 198, 3, 198, 2394, 8, 198, 1, 198, 1, 198,
    1, 198, 1, 198, 1, 198, 3, 198, 2401, 8, 198, 1, 198, 1, 198, 1, 198, 3, 198, 2406,
    8, 198, 1, 198, 1, 198, 1, 198, 1, 198, 1, 198, 3, 198, 2413, 8, 198, 1, 198, 1, 198,
    1, 198, 3, 198, 2418, 8, 198, 1, 198, 1, 198, 1, 198, 1, 198, 1, 198, 1, 198, 3, 198,
    2426, 8, 198, 1, 198, 1, 198, 1, 198, 3, 198, 2431, 8, 198, 1, 198, 1, 198, 3, 198,
    2435, 8, 198, 1, 199, 1, 199, 1, 199, 5, 199, 2440, 8, 199, 10, 199, 12, 199, 2443,
    9, 199, 1, 200, 1, 200, 1, 200, 3, 200, 2448, 8, 200, 1, 200, 1, 200, 1, 200, 1, 200,
    1, 200, 3, 200, 2455, 8, 200, 1, 200, 1, 200, 1, 200, 1, 200, 1, 200, 3, 200, 2462,
    8, 200, 1, 200, 1, 200, 1, 200, 1, 200, 1, 200, 3, 200, 2469, 8, 200, 1, 200, 1, 200,
    1, 200, 1, 200, 1, 200, 1, 200, 3, 200, 2477, 8, 200, 1, 200, 1, 200, 1, 200, 1, 200,
    1, 200, 3, 200, 2484, 8, 200, 1, 200, 1, 200, 1, 200, 1, 200, 1, 200, 1, 200, 3, 200,
    2492, 8, 200, 1, 201, 1, 201, 3, 201, 2496, 8, 201, 1, 201, 1, 201, 1, 202, 1, 202,
    1, 202, 3, 202, 2503, 8, 202, 1, 202, 1, 202, 1, 202, 1, 202, 1, 202, 3, 202, 2510,
    8, 202, 1, 202, 1, 202, 1, 202, 1, 202, 1, 202, 3, 202, 2517, 8, 202, 1, 202, 1, 202,
    1, 202, 1, 202, 1, 202, 1, 202, 3, 202, 2525, 8, 202, 1, 202, 1, 202, 1, 202, 1, 202,
    1, 202, 3, 202, 2532, 8, 202, 1, 202, 1, 202, 1, 202, 1, 202, 1, 202, 1, 202, 3, 202,
    2540, 8, 202, 1, 203, 1, 203, 1, 203, 1, 203, 3, 203, 2546, 8, 203, 1, 203, 1, 203,
    1, 203, 1, 203, 3, 203, 2552, 8, 203, 1, 203, 1, 203, 1, 203, 1, 203, 1, 203, 1, 203,
    1, 203, 1, 203, 1, 203, 1, 203, 3, 203, 2564, 8, 203, 1, 204, 1, 204, 5, 204, 2568,
    8, 204, 10, 204, 12, 204, 2571, 9, 204, 1, 205, 5, 205, 2574, 8, 205, 10, 205, 12,
    205, 2577, 9, 205, 1, 205, 1, 205, 1, 205, 1, 205, 1, 206, 1, 206, 1, 207, 1, 207, 3,
    207, 2587, 8, 207, 1, 208, 1, 208, 1, 208, 1, 208, 1, 209, 1, 209, 1, 209, 3, 209, 2596,
    8, 209, 1, 209, 1, 209, 1, 209, 1, 209, 1, 209, 3, 209, 2603, 8, 209, 1, 210, 1, 210,
    1, 210, 5, 210, 2608, 8, 210, 10, 210, 12, 210, 2611, 9, 210, 1, 211, 1, 211, 3, 211,
    2615, 8, 211, 1, 212, 1, 212, 3, 212, 2619, 8, 212, 1, 213, 1, 213, 1, 213, 1, 213,
    1, 214, 1, 214, 1, 214, 3, 214, 2628, 8, 214, 1, 215, 1, 215, 1, 216, 1, 216, 1, 216,
    1, 216, 1, 216, 1, 216, 1, 216, 3, 216, 2639, 8, 216, 1, 217, 1, 217, 1, 217, 1, 217,
    1, 217, 1, 217, 5, 217, 2647, 8, 217, 10, 217, 12, 217, 2650, 9, 217, 1, 218, 1, 218,
    1, 218, 1, 218, 1, 218, 1, 218, 5, 218, 2658, 8, 218, 10, 218, 12, 218, 2661, 9, 218,
    1, 219, 1, 219, 1, 219, 1, 219, 1, 219, 1, 219, 5, 219, 2669, 8, 219, 10, 219, 12, 219,
    2672, 9, 219, 1, 220, 1, 220, 1, 220, 1, 220, 1, 220, 1, 220, 5, 220, 2680, 8, 220,
    10, 220, 12, 220, 2683, 9, 220, 1, 221, 1, 221, 1, 221, 1, 221, 1, 221, 1, 221, 5, 221,
    2691, 8, 221, 10, 221, 12, 221, 2694, 9, 221, 1, 222, 1, 222, 1, 222, 1, 222, 1, 222,
    1, 222, 1, 222, 1, 222, 1, 222, 5, 222, 2705, 8, 222, 10, 222, 12, 222, 2708, 9, 222,
    1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223,
    1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 1, 223, 5, 223, 2728, 8, 223, 10, 223,
    12, 223, 2731, 9, 223, 1, 224, 1, 224, 1, 224, 1, 224, 1, 224, 1, 224, 1, 224, 1, 224,
    1, 224, 1, 224, 1, 224, 1, 224, 1, 224, 1, 224, 1, 224, 1, 224, 5, 224, 2749, 8, 224,
    10, 224, 12, 224, 2752, 9, 224, 1, 225, 1, 225, 1, 225, 1, 225, 1, 225, 1, 225, 1, 225,
    1, 225, 1, 225, 5, 225, 2763, 8, 225, 10, 225, 12, 225, 2766, 9, 225, 1, 226, 1, 226,
    1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 1, 226, 5, 226,
    2780, 8, 226, 10, 226, 12, 226, 2783, 9, 226, 1, 227, 1, 227, 1, 227, 1, 227, 1, 227,
    1, 227, 1, 227, 3, 227, 2792, 8, 227, 1, 228, 1, 228, 1, 228, 1, 229, 1, 229, 1, 229,
    1, 230, 1, 230, 1, 230, 1, 230, 1, 230, 1, 230, 3, 230, 2806, 8, 230, 1, 231, 1, 231,
    3, 231, 2810, 8, 231, 1, 231, 1, 231, 5, 231, 2814, 8, 231, 10, 231, 12, 231, 2817,
    9, 231, 1, 232, 1, 232, 1, 232, 1, 233, 1, 233, 1, 234, 1, 234, 1, 234, 1, 235, 1, 235,
    1, 236, 1, 236, 1, 236, 1, 236, 1, 236, 1, 236, 1, 236, 1, 236, 5, 236, 2837, 8, 236,
    10, 236, 12, 236, 2840, 9, 236, 1, 236, 1, 236, 1, 236, 1, 236, 1, 236, 1, 236, 5, 236,
    2848, 8, 236, 10, 236, 12, 236, 2851, 9, 236, 1, 236, 1, 236, 1, 236, 3, 236, 2856,
    8, 236, 1, 236, 0, 13, 52, 56, 62, 434, 436, 438, 440, 442, 444, 446, 448, 450, 452,
    237, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
    44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86,
    88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122,
    124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154,
    156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186,
    188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218,
    220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250,
    252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282,
    284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314,
    316, 318, 320, 322, 324, 326, 328, 330, 332, 334, 336, 338, 340, 342, 344, 346,
    348, 350, 352, 354, 356, 358, 360, 362, 364, 366, 368, 370, 372, 374, 376, 378,
    380, 382, 384, 386, 388, 390, 392, 394, 396, 398, 400, 402, 404, 406, 408, 410,
    412, 414, 416, 418, 420, 422, 424, 426, 428, 430, 432, 434, 436, 438, 440, 442,
    444, 446, 448, 450, 452, 454, 456, 458, 460, 462, 464, 466, 468, 470, 472, 0, 4,
    1, 0, 51, 56, 5, 0, 5, 5, 8, 8, 27, 27, 29, 29, 37, 37, 2, 0, 14, 14, 20, 20, 2, 0, 66, 66,
    91, 101, 3099, 0, 474, 1, 0, 0, 0, 2, 478, 1, 0, 0, 0, 4, 494, 1, 0, 0, 0, 6, 498, 1, 0,
    0, 0, 8, 500, 1, 0, 0, 0, 10, 502, 1, 0, 0, 0, 12, 507, 1, 0, 0, 0, 14, 511, 1, 0, 0, 0, 16,
    542, 1, 0, 0, 0, 18, 544, 1, 0, 0, 0, 20, 558, 1, 0, 0, 0, 22, 565, 1, 0, 0, 0, 24, 567,
    1, 0, 0, 0, 26, 569, 1, 0, 0, 0, 28, 574, 1, 0, 0, 0, 30, 588, 1, 0, 0, 0, 32, 593, 1, 0,
    0, 0, 34, 614, 1, 0, 0, 0, 36, 621, 1, 0, 0, 0, 38, 633, 1, 0, 0, 0, 40, 635, 1, 0, 0, 0,
    42, 638, 1, 0, 0, 0, 44, 642, 1, 0, 0, 0, 46, 652, 1, 0, 0, 0, 48, 657, 1, 0, 0, 0, 50, 668,
    1, 0, 0, 0, 52, 670, 1, 0, 0, 0, 54, 686, 1, 0, 0, 0, 56, 688, 1, 0, 0, 0, 58, 704, 1, 0,
    0, 0, 60, 706, 1, 0, 0, 0, 62, 708, 1, 0, 0, 0, 64, 720, 1, 0, 0, 0, 66, 739, 1, 0, 0, 0,
    68, 753, 1, 0, 0, 0, 70, 759, 1, 0, 0, 0, 72, 761, 1, 0, 0, 0, 74, 765, 1, 0, 0, 0, 76, 771,
    1, 0, 0, 0, 78, 778, 1, 0, 0, 0, 80, 788, 1, 0, 0, 0, 82, 792, 1, 0, 0, 0, 84, 797, 1, 0,
    0, 0, 86, 821, 1, 0, 0, 0, 88, 823, 1, 0, 0, 0, 90, 827, 1, 0, 0, 0, 92, 835, 1, 0, 0, 0,
    94, 838, 1, 0, 0, 0, 96, 841, 1, 0, 0, 0, 98, 849, 1, 0, 0, 0, 100, 862, 1, 0, 0, 0, 102,
    869, 1, 0, 0, 0, 104, 874, 1, 0, 0, 0, 106, 889, 1, 0, 0, 0, 108, 891, 1, 0, 0, 0, 110,
    899, 1, 0, 0, 0, 112, 904, 1, 0, 0, 0, 114, 910, 1, 0, 0, 0, 116, 914, 1, 0, 0, 0, 118,
    918, 1, 0, 0, 0, 120, 923, 1, 0, 0, 0, 122, 927, 1, 0, 0, 0, 124, 952, 1, 0, 0, 0, 126,
    954, 1, 0, 0, 0, 128, 965, 1, 0, 0, 0, 130, 969, 1, 0, 0, 0, 132, 971, 1, 0, 0, 0, 134,
    973, 1, 0, 0, 0, 136, 975, 1, 0, 0, 0, 138, 986, 1, 0, 0, 0, 140, 991, 1, 0, 0, 0, 142,
    1007, 1, 0, 0, 0, 144, 1026, 1, 0, 0, 0, 146, 1030, 1, 0, 0, 0, 148, 1032, 1, 0, 0, 0,
    150, 1046, 1, 0, 0, 0, 152, 1064, 1, 0, 0, 0, 154, 1069, 1, 0, 0, 0, 156, 1077, 1, 0,
    0, 0, 158, 1096, 1, 0, 0, 0, 160, 1101, 1, 0, 0, 0, 162, 1111, 1, 0, 0, 0, 164, 1114,
    1, 0, 0, 0, 166, 1124, 1, 0, 0, 0, 168, 1128, 1, 0, 0, 0, 170, 1130, 1, 0, 0, 0, 172, 1132,
    1, 0, 0, 0, 174, 1138, 1, 0, 0, 0, 176, 1151, 1, 0, 0, 0, 178, 1154, 1, 0, 0, 0, 180, 1163,
    1, 0, 0, 0, 182, 1165, 1, 0, 0, 0, 184, 1220, 1, 0, 0, 0, 186, 1225, 1, 0, 0, 0, 188, 1235,
    1, 0, 0, 0, 190, 1247, 1, 0, 0, 0, 192, 1258, 1, 0, 0, 0, 194, 1272, 1, 0, 0, 0, 196, 1274,
    1, 0, 0, 0, 198, 1283, 1, 0, 0, 0, 200, 1288, 1, 0, 0, 0, 202, 1308, 1, 0, 0, 0, 204, 1310,
    1, 0, 0, 0, 206, 1313, 1, 0, 0, 0, 208, 1327, 1, 0, 0, 0, 210, 1332, 1, 0, 0, 0, 212, 1343,
    1, 0, 0, 0, 214, 1348, 1, 0, 0, 0, 216, 1360, 1, 0, 0, 0, 218, 1365, 1, 0, 0, 0, 220, 1373,
    1, 0, 0, 0, 222, 1387, 1, 0, 0, 0, 224, 1392, 1, 0, 0, 0, 226, 1410, 1, 0, 0, 0, 228, 1412,
    1, 0, 0, 0, 230, 1418, 1, 0, 0, 0, 232, 1420, 1, 0, 0, 0, 234, 1428, 1, 0, 0, 0, 236, 1436,
    1, 0, 0, 0, 238, 1443, 1, 0, 0, 0, 240, 1445, 1, 0, 0, 0, 242, 1454, 1, 0, 0, 0, 244, 1462,
    1, 0, 0, 0, 246, 1465, 1, 0, 0, 0, 248, 1471, 1, 0, 0, 0, 250, 1480, 1, 0, 0, 0, 252, 1488,
    1, 0, 0, 0, 254, 1494, 1, 0, 0, 0, 256, 1504, 1, 0, 0, 0, 258, 1506, 1, 0, 0, 0, 260, 1512,
    1, 0, 0, 0, 262, 1524, 1, 0, 0, 0, 264, 1531, 1, 0, 0, 0, 266, 1545, 1, 0, 0, 0, 268, 1547,
    1, 0, 0, 0, 270, 1549, 1, 0, 0, 0, 272, 1553, 1, 0, 0, 0, 274, 1557, 1, 0, 0, 0, 276, 1567,
    1, 0, 0, 0, 278, 1569, 1, 0, 0, 0, 280, 1575, 1, 0, 0, 0, 282, 1583, 1, 0, 0, 0, 284, 1601,
    1, 0, 0, 0, 286, 1603, 1, 0, 0, 0, 288, 1609, 1, 0, 0, 0, 290, 1624, 1, 0, 0, 0, 292, 1627,
    1, 0, 0, 0, 294, 1644, 1, 0, 0, 0, 296, 1646, 1, 0, 0, 0, 298, 1648, 1, 0, 0, 0, 300, 1654,
    1, 0, 0, 0, 302, 1660, 1, 0, 0, 0, 304, 1670, 1, 0, 0, 0, 306, 1674, 1, 0, 0, 0, 308, 1676,
    1, 0, 0, 0, 310, 1692, 1, 0, 0, 0, 312, 1710, 1, 0, 0, 0, 314, 1712, 1, 0, 0, 0, 316, 1714,
    1, 0, 0, 0, 318, 1722, 1, 0, 0, 0, 320, 1737, 1, 0, 0, 0, 322, 1752, 1, 0, 0, 0, 324, 1758,
    1, 0, 0, 0, 326, 1764, 1, 0, 0, 0, 328, 1770, 1, 0, 0, 0, 330, 1774, 1, 0, 0, 0, 332, 1792,
    1, 0, 0, 0, 334, 1794, 1, 0, 0, 0, 336, 1801, 1, 0, 0, 0, 338, 1810, 1, 0, 0, 0, 340, 1816,
    1, 0, 0, 0, 342, 1824, 1, 0, 0, 0, 344, 1827, 1, 0, 0, 0, 346, 1836, 1, 0, 0, 0, 348, 1843,
    1, 0, 0, 0, 350, 1854, 1, 0, 0, 0, 352, 1864, 1, 0, 0, 0, 354, 1901, 1, 0, 0, 0, 356, 1903,
    1, 0, 0, 0, 358, 1933, 1, 0, 0, 0, 360, 1940, 1, 0, 0, 0, 362, 1942, 1, 0, 0, 0, 364, 1948,
    1, 0, 0, 0, 366, 1990, 1, 0, 0, 0, 368, 1992, 1, 0, 0, 0, 370, 2033, 1, 0, 0, 0, 372, 2118,
    1, 0, 0, 0, 374, 2120, 1, 0, 0, 0, 376, 2202, 1, 0, 0, 0, 378, 2207, 1, 0, 0, 0, 380, 2222,
    1, 0, 0, 0, 382, 2224, 1, 0, 0, 0, 384, 2236, 1, 0, 0, 0, 386, 2248, 1, 0, 0, 0, 388, 2260,
    1, 0, 0, 0, 390, 2285, 1, 0, 0, 0, 392, 2365, 1, 0, 0, 0, 394, 2367, 1, 0, 0, 0, 396, 2434,
    1, 0, 0, 0, 398, 2436, 1, 0, 0, 0, 400, 2491, 1, 0, 0, 0, 402, 2493, 1, 0, 0, 0, 404, 2539,
    1, 0, 0, 0, 406, 2563, 1, 0, 0, 0, 408, 2565, 1, 0, 0, 0, 410, 2575, 1, 0, 0, 0, 412, 2582,
    1, 0, 0, 0, 414, 2586, 1, 0, 0, 0, 416, 2588, 1, 0, 0, 0, 418, 2602, 1, 0, 0, 0, 420, 2604,
    1, 0, 0, 0, 422, 2614, 1, 0, 0, 0, 424, 2618, 1, 0, 0, 0, 426, 2620, 1, 0, 0, 0, 428, 2627,
    1, 0, 0, 0, 430, 2629, 1, 0, 0, 0, 432, 2638, 1, 0, 0, 0, 434, 2640, 1, 0, 0, 0, 436, 2651,
    1, 0, 0, 0, 438, 2662, 1, 0, 0, 0, 440, 2673, 1, 0, 0, 0, 442, 2684, 1, 0, 0, 0, 444, 2695,
    1, 0, 0, 0, 446, 2709, 1, 0, 0, 0, 448, 2732, 1, 0, 0, 0, 450, 2753, 1, 0, 0, 0, 452, 2767,
    1, 0, 0, 0, 454, 2791, 1, 0, 0, 0, 456, 2793, 1, 0, 0, 0, 458, 2796, 1, 0, 0, 0, 460, 2805,
    1, 0, 0, 0, 462, 2809, 1, 0, 0, 0, 464, 2818, 1, 0, 0, 0, 466, 2821, 1, 0, 0, 0, 468, 2823,
    1, 0, 0, 0, 470, 2826, 1, 0, 0, 0, 472, 2855, 1, 0, 0, 0, 474, 475, 7, 0, 0, 0, 475, 1,
    1, 0, 0, 0, 476, 479, 3, 4, 2, 0, 477, 479, 3, 12, 6, 0, 478, 476, 1, 0, 0, 0, 478, 477,
    1, 0, 0, 0, 479, 3, 1, 0, 0, 0, 480, 482, 3, 230, 115, 0, 481, 480, 1, 0, 0, 0, 482, 485,
    1, 0, 0, 0, 483, 481, 1, 0, 0, 0, 483, 484, 1, 0, 0, 0, 484, 486, 1, 0, 0, 0, 485, 483,
    1, 0, 0, 0, 486, 495, 3, 6, 3, 0, 487, 489, 3, 230, 115, 0, 488, 487, 1, 0, 0, 0, 489,
    492, 1, 0, 0, 0, 490, 488, 1, 0, 0, 0, 490, 491, 1, 0, 0, 0, 491, 493, 1, 0, 0, 0, 492,
    490, 1, 0, 0, 0, 493, 495, 5, 3, 0, 0, 494, 483, 1, 0, 0, 0, 494, 490, 1, 0, 0, 0, 495,
    5, 1, 0, 0, 0, 496, 499, 3, 8, 4, 0, 497, 499, 3, 10, 5, 0, 498, 496, 1, 0, 0, 0, 498, 497,
    1, 0, 0, 0, 499, 7, 1, 0, 0, 0, 500, 501, 7, 1, 0, 0, 501, 9, 1, 0, 0, 0, 502, 503, 7, 2,
    0, 0, 503, 11, 1, 0, 0, 0, 504, 508, 3, 14, 7, 0, 505, 508, 3, 28, 14, 0, 506, 508, 3,
    30, 15, 0, 507, 504, 1, 0, 0, 0, 507, 505, 1, 0, 0, 0, 507, 506, 1, 0, 0, 0, 508, 13, 1,
    0, 0, 0, 509, 512, 3, 20, 10, 0, 510, 512, 3, 26, 13, 0, 511, 509, 1, 0, 0, 0, 511, 510,
    1, 0, 0, 0, 512, 517, 1, 0, 0, 0, 513, 516, 3, 18, 9, 0, 514, 516, 3, 24, 12, 0, 515, 513,
    1, 0, 0, 0, 515, 514, 1, 0, 0, 0, 516, 519, 1, 0, 0, 0, 517, 515, 1, 0, 0, 0, 517, 518,
    1, 0, 0, 0, 518, 15, 1, 0, 0, 0, 519, 517, 1, 0, 0, 0, 520, 522, 3, 230, 115, 0, 521, 520,
    1, 0, 0, 0, 522, 525, 1, 0, 0, 0, 523, 521, 1, 0, 0, 0, 523, 524, 1, 0, 0, 0, 524, 526,
    1, 0, 0, 0, 525, 523, 1, 0, 0, 0, 526, 528, 5, 102, 0, 0, 527, 529, 3, 42, 21, 0, 528,
    527, 1, 0, 0, 0, 528, 529, 1, 0, 0, 0, 529, 543, 1, 0, 0, 0, 530, 531, 3, 14, 7, 0, 531,
    535, 5, 65, 0, 0, 532, 534, 3, 230, 115, 0, 533, 532, 1, 0, 0, 0, 534, 537, 1, 0, 0, 0,
    535, 533, 1, 0, 0, 0, 535, 536, 1, 0, 0, 0, 536, 538, 1, 0, 0, 0, 537, 535, 1, 0, 0, 0,
    538, 540, 5, 102, 0, 0, 539, 541, 3, 42, 21, 0, 540, 539, 1, 0, 0, 0, 540, 541, 1, 0,
    0, 0, 541, 543, 1, 0, 0, 0, 542, 523, 1, 0, 0, 0, 542, 530, 1, 0, 0, 0, 543, 17, 1, 0, 0,
    0, 544, 548, 5, 65, 0, 0, 545, 547, 3, 230, 115, 0, 546, 545, 1, 0, 0, 0, 547, 550, 1,
    0, 0, 0, 548, 546, 1, 0, 0, 0, 548, 549, 1, 0, 0, 0, 549, 551, 1, 0, 0, 0, 550, 548, 1,
    0, 0, 0, 551, 553, 5, 102, 0, 0, 552, 554, 3, 42, 21, 0, 553, 552, 1, 0, 0, 0, 553, 554,
    1, 0, 0, 0, 554, 19, 1, 0, 0, 0, 555, 557, 3, 230, 115, 0, 556, 555, 1, 0, 0, 0, 557, 560,
    1, 0, 0, 0, 558, 556, 1, 0, 0, 0, 558, 559, 1, 0, 0, 0, 559, 561, 1, 0, 0, 0, 560, 558,
    1, 0, 0, 0, 561, 563, 5, 102, 0, 0, 562, 564, 3, 42, 21, 0, 563, 562, 1, 0, 0, 0, 563,
    564, 1, 0, 0, 0, 564, 21, 1, 0, 0, 0, 565, 566, 3, 16, 8, 0, 566, 23, 1, 0, 0, 0, 567, 568,
    3, 18, 9, 0, 568, 25, 1, 0, 0, 0, 569, 570, 3, 20, 10, 0, 570, 27, 1, 0, 0, 0, 571, 573,
    3, 230, 115, 0, 572, 571, 1, 0, 0, 0, 573, 576, 1, 0, 0, 0, 574, 572, 1, 0, 0, 0, 574,
    575, 1, 0, 0, 0, 575, 577, 1, 0, 0, 0, 576, 574, 1, 0, 0, 0, 577, 578, 5, 102, 0, 0, 578,
    29, 1, 0, 0, 0, 579, 580, 3, 4, 2, 0, 580, 581, 3, 32, 16, 0, 581, 589, 1, 0, 0, 0, 582,
    583, 3, 14, 7, 0, 583, 584, 3, 32, 16, 0, 584, 589, 1, 0, 0, 0, 585, 586, 3, 28, 14, 0,
    586, 587, 3, 32, 16, 0, 587, 589, 1, 0, 0, 0, 588, 579, 1, 0, 0, 0, 588, 582, 1, 0, 0,
    0, 588, 585, 1, 0, 0, 0, 589, 31, 1, 0, 0, 0, 590, 592, 3, 230, 115, 0, 591, 590, 1, 0,
    0, 0, 592, 595, 1, 0, 0, 0, 593, 591, 1, 0, 0, 0, 593, 594, 1, 0, 0, 0, 594, 596, 1, 0,
    0, 0, 595, 593, 1, 0, 0, 0, 596, 597, 5, 61, 0, 0, 597, 608, 5, 62, 0, 0, 598, 600, 3,
    230, 115, 0, 599, 598, 1, 0, 0, 0, 600, 603, 1, 0, 0, 0, 601, 599, 1, 0, 0, 0, 601, 602,
    1, 0, 0, 0, 602, 604, 1, 0, 0, 0, 603, 601, 1, 0, 0, 0, 604, 605, 5, 61, 0, 0, 605, 607,
    5, 62, 0, 0, 606, 601, 1, 0, 0, 0, 607, 610, 1, 0, 0, 0, 608, 606, 1, 0, 0, 0, 608, 609,
    1, 0, 0, 0, 609, 33, 1, 0, 0, 0, 610, 608, 1, 0, 0, 0, 611, 613, 3, 36, 18, 0, 612, 611,
    1, 0, 0, 0, 613, 616, 1, 0, 0, 0, 614, 612, 1, 0, 0, 0, 614, 615, 1, 0, 0, 0, 615, 617,
    1, 0, 0, 0, 616, 614, 1, 0, 0, 0, 617, 619, 5, 102, 0, 0, 618, 620, 3, 38, 19, 0, 619,
    618, 1, 0, 0, 0, 619, 620, 1, 0, 0, 0, 620, 35, 1, 0, 0, 0, 621, 622, 3, 230, 115, 0, 622,
    37, 1, 0, 0, 0, 623, 624, 5, 17, 0, 0, 624, 634, 3, 28, 14, 0, 625, 626, 5, 17, 0, 0, 626,
    630, 3, 14, 7, 0, 627, 629, 3, 40, 20, 0, 628, 627, 1, 0, 0, 0, 629, 632, 1, 0, 0, 0, 630,
    628, 1, 0, 0, 0, 630, 631, 1, 0, 0, 0, 631, 634, 1, 0, 0, 0, 632, 630, 1, 0, 0, 0, 633,
    623, 1, 0, 0, 0, 633, 625, 1, 0, 0, 0, 634, 39, 1, 0, 0, 0, 635, 636, 5, 85, 0, 0, 636,
    637, 3, 22, 11, 0, 637, 41, 1, 0, 0, 0, 638, 639, 5, 68, 0, 0, 639, 640, 3, 44, 22, 0,
    640, 641, 5, 67, 0, 0, 641, 43, 1, 0, 0, 0, 642, 647, 3, 46, 23, 0, 643, 644, 5, 64, 0,
    0, 644, 646, 3, 46, 23, 0, 645, 643, 1, 0, 0, 0, 646, 649, 1, 0, 0, 0, 647, 645, 1, 0,
    0, 0, 647, 648, 1, 0, 0, 0, 648, 45, 1, 0, 0, 0, 649, 647, 1, 0, 0, 0, 650, 653, 3, 12,
    6, 0, 651, 653, 3, 48, 24, 0, 652, 650, 1, 0, 0, 0, 652, 651, 1, 0, 0, 0, 653, 47, 1, 0,
    0, 0, 654, 656, 3, 230, 115, 0, 655, 654, 1, 0, 0, 0, 656, 659, 1, 0, 0, 0, 657, 655,
    1, 0, 0, 0, 657, 658, 1, 0, 0, 0, 658, 660, 1, 0, 0, 0, 659, 657, 1, 0, 0, 0, 660, 662,
    5, 71, 0, 0, 661, 663, 3, 50, 25, 0, 662, 661, 1, 0, 0, 0, 662, 663, 1, 0, 0, 0, 663, 49,
    1, 0, 0, 0, 664, 665, 5, 17, 0, 0, 665, 669, 3, 12, 6, 0, 666, 667, 5, 40, 0, 0, 667, 669,
    3, 12, 6, 0, 668, 664, 1, 0, 0, 0, 668, 666, 1, 0, 0, 0, 669, 51, 1, 0, 0, 0, 670, 671,
    6, 26, -1, 0, 671, 672, 5, 102, 0, 0, 672, 678, 1, 0, 0, 0, 673, 674, 10, 1, 0, 0, 674,
    675, 5, 65, 0, 0, 675, 677, 5, 102, 0, 0, 676, 673, 1, 0, 0, 0, 677, 680, 1, 0, 0, 0, 678,
    676, 1, 0, 0, 0, 678, 679, 1, 0, 0, 0, 679, 53, 1, 0, 0, 0, 680, 678, 1, 0, 0, 0, 681, 687,
    5, 102, 0, 0, 682, 683, 3, 56, 28, 0, 683, 684, 5, 65, 0, 0, 684, 685, 5, 102, 0, 0, 685,
    687, 1, 0, 0, 0, 686, 681, 1, 0, 0, 0, 686, 682, 1, 0, 0, 0, 687, 55, 1, 0, 0, 0, 688, 689,
    6, 28, -1, 0, 689, 690, 5, 102, 0, 0, 690, 696, 1, 0, 0, 0, 691, 692, 10, 1, 0, 0, 692,
    693, 5, 65, 0, 0, 693, 695, 5, 102, 0, 0, 694, 691, 1, 0, 0, 0, 695, 698, 1, 0, 0, 0, 696,
    694, 1, 0, 0, 0, 696, 697, 1, 0, 0, 0, 697, 57, 1, 0, 0, 0, 698, 696, 1, 0, 0, 0, 699, 705,
    5, 102, 0, 0, 700, 701, 3, 62, 31, 0, 701, 702, 5, 65, 0, 0, 702, 703, 5, 102, 0, 0, 703,
    705, 1, 0, 0, 0, 704, 699, 1, 0, 0, 0, 704, 700, 1, 0, 0, 0, 705, 59, 1, 0, 0, 0, 706, 707,
    5, 102, 0, 0, 707, 61, 1, 0, 0, 0, 708, 709, 6, 31, -1, 0, 709, 710, 5, 102, 0, 0, 710,
    716, 1, 0, 0, 0, 711, 712, 10, 1, 0, 0, 712, 713, 5, 65, 0, 0, 713, 715, 5, 102, 0, 0,
    714, 711, 1, 0, 0, 0, 715, 718, 1, 0, 0, 0, 716, 714, 1, 0, 0, 0, 716, 717, 1, 0, 0, 0,
    717, 63, 1, 0, 0, 0, 718, 716, 1, 0, 0, 0, 719, 721, 3, 66, 33, 0, 720, 719, 1, 0, 0, 0,
    720, 721, 1, 0, 0, 0, 721, 725, 1, 0, 0, 0, 722, 724, 3, 70, 35, 0, 723, 722, 1, 0, 0,
    0, 724, 727, 1, 0, 0, 0, 725, 723, 1, 0, 0, 0, 725, 726, 1, 0, 0, 0, 726, 731, 1, 0, 0,
    0, 727, 725, 1, 0, 0, 0, 728, 730, 3, 80, 40, 0, 729, 728, 1, 0, 0, 0, 730, 733, 1, 0,
    0, 0, 731, 729, 1, 0, 0, 0, 731, 732, 1, 0, 0, 0, 732, 734, 1, 0, 0, 0, 733, 731, 1, 0,
    0, 0, 734, 735, 5, 0, 0, 1, 735, 65, 1, 0, 0, 0, 736, 738, 3, 68, 34, 0, 737, 736, 1, 0,
    0, 0, 738, 741, 1, 0, 0, 0, 739, 737, 1, 0, 0, 0, 739, 740, 1, 0, 0, 0, 740, 742, 1, 0,
    0, 0, 741, 739, 1, 0, 0, 0, 742, 743, 5, 32, 0, 0, 743, 748, 5, 102, 0, 0, 744, 745, 5,
    65, 0, 0, 745, 747, 5, 102, 0, 0, 746, 744, 1, 0, 0, 0, 747, 750, 1, 0, 0, 0, 748, 746,
    1, 0, 0, 0, 748, 749, 1, 0, 0, 0, 749, 751, 1, 0, 0, 0, 750, 748, 1, 0, 0, 0, 751, 752,
    5, 63, 0, 0, 752, 67, 1, 0, 0, 0, 753, 754, 3, 230, 115, 0, 754, 69, 1, 0, 0, 0, 755, 760,
    3, 72, 36, 0, 756, 760, 3, 74, 37, 0, 757, 760, 3, 76, 38, 0, 758, 760, 3, 78, 39, 0,
    759, 755, 1, 0, 0, 0, 759, 756, 1, 0, 0, 0, 759, 757, 1, 0, 0, 0, 759, 758, 1, 0, 0, 0,
    760, 71, 1, 0, 0, 0, 761, 762, 5, 25, 0, 0, 762, 763, 3, 54, 27, 0, 763, 764, 5, 63, 0,
    0, 764, 73, 1, 0, 0, 0, 765, 766, 5, 25, 0, 0, 766, 767, 3, 56, 28, 0, 767, 768, 5, 65,
    0, 0, 768, 769, 5, 83, 0, 0, 769, 770, 5, 63, 0, 0, 770, 75, 1, 0, 0, 0, 771, 772, 5, 25,
    0, 0, 772, 773, 5, 38, 0, 0, 773, 774, 3, 54, 27, 0, 774, 775, 5, 65, 0, 0, 775, 776,
    5, 102, 0, 0, 776, 777, 5, 63, 0, 0, 777, 77, 1, 0, 0, 0, 778, 779, 5, 25, 0, 0, 779, 780,
    5, 38, 0, 0, 780, 781, 3, 54, 27, 0, 781, 782, 5, 65, 0, 0, 782, 783, 5, 83, 0, 0, 783,
    784, 5, 63, 0, 0, 784, 79, 1, 0, 0, 0, 785, 789, 3, 82, 41, 0, 786, 789, 3, 198, 99, 0,
    787, 789, 5, 63, 0, 0, 788, 785, 1, 0, 0, 0, 788, 786, 1, 0, 0, 0, 788, 787, 1, 0, 0, 0,
    789, 81, 1, 0, 0, 0, 790, 793, 3, 84, 42, 0, 791, 793, 3, 186, 93, 0, 792, 790, 1, 0,
    0, 0, 792, 791, 1, 0, 0, 0, 793, 83, 1, 0, 0, 0, 794, 796, 3, 86, 43, 0, 795, 794, 1, 0,
    0, 0, 796, 799, 1, 0, 0, 0, 797, 795, 1, 0, 0, 0, 797, 798, 1, 0, 0, 0, 798, 800, 1, 0,
    0, 0, 799, 797, 1, 0, 0, 0, 800, 801, 5, 9, 0, 0, 801, 803, 5, 102, 0, 0, 802, 804, 3,
    88, 44, 0, 803, 802, 1, 0, 0, 0, 803, 804, 1, 0, 0, 0, 804, 806, 1, 0, 0, 0, 805, 807,
    3, 92, 46, 0, 806, 805, 1, 0, 0, 0, 806, 807, 1, 0, 0, 0, 807, 809, 1, 0, 0, 0, 808, 810,
    3, 94, 47, 0, 809, 808, 1, 0, 0, 0, 809, 810, 1, 0, 0, 0, 810, 811, 1, 0, 0, 0, 811, 812,
    3, 98, 49, 0, 812, 85, 1, 0, 0, 0, 813, 822, 3, 230, 115, 0, 814, 822, 5, 35, 0, 0, 815,
    822, 5, 34, 0, 0, 816, 822, 5, 33, 0, 0, 817, 822, 5, 1, 0, 0, 818, 822, 5, 38, 0, 0, 819,
    822, 5, 18, 0, 0, 820, 822, 5, 39, 0, 0, 821, 813, 1, 0, 0, 0, 821, 814, 1, 0, 0, 0, 821,
    815, 1, 0, 0, 0, 821, 816, 1, 0, 0, 0, 821, 817, 1, 0, 0, 0, 821, 818, 1, 0, 0, 0, 821,
    819, 1, 0, 0, 0, 821, 820, 1, 0, 0, 0, 822, 87, 1, 0, 0, 0, 823, 824, 5, 68, 0, 0, 824,
    825, 3, 90, 45, 0, 825, 826, 5, 67, 0, 0, 826, 89, 1, 0, 0, 0, 827, 832, 3, 34, 17, 0,
    828, 829, 5, 64, 0, 0, 829, 831, 3, 34, 17, 0, 830, 828, 1, 0, 0, 0, 831, 834, 1, 0, 0,
    0, 832, 830, 1, 0, 0, 0, 832, 833, 1, 0, 0, 0, 833, 91, 1, 0, 0, 0, 834, 832, 1, 0, 0, 0,
    835, 836, 5, 17, 0, 0, 836, 837, 3, 16, 8, 0, 837, 93, 1, 0, 0, 0, 838, 839, 5, 24, 0,
    0, 839, 840, 3, 96, 48, 0, 840, 95, 1, 0, 0, 0, 841, 846, 3, 22, 11, 0, 842, 843, 5, 64,
    0, 0, 843, 845, 3, 22, 11, 0, 844, 842, 1, 0, 0, 0, 845, 848, 1, 0, 0, 0, 846, 844, 1,
    0, 0, 0, 846, 847, 1, 0, 0, 0, 847, 97, 1, 0, 0, 0, 848, 846, 1, 0, 0, 0, 849, 853, 5, 59,
    0, 0, 850, 852, 3, 100, 50, 0, 851, 850, 1, 0, 0, 0, 852, 855, 1, 0, 0, 0, 853, 851, 1,
    0, 0, 0, 853, 854, 1, 0, 0, 0, 854, 856, 1, 0, 0, 0, 855, 853, 1, 0, 0, 0, 856, 857, 5,
    60, 0, 0, 857, 99, 1, 0, 0, 0, 858, 863, 3, 102, 51, 0, 859, 863, 3, 170, 85, 0, 860,
    863, 3, 172, 86, 0, 861, 863, 3, 174, 87, 0, 862, 858, 1, 0, 0, 0, 862, 859, 1, 0, 0,
    0, 862, 860, 1, 0, 0, 0, 862, 861, 1, 0, 0, 0, 863, 101, 1, 0, 0, 0, 864, 870, 3, 104,
    52, 0, 865, 870, 3, 140, 70, 0, 866, 870, 3, 82, 41, 0, 867, 870, 3, 198, 99, 0, 868,
    870, 5, 63, 0, 0, 869, 864, 1, 0, 0, 0, 869, 865, 1, 0, 0, 0, 869, 866, 1, 0, 0, 0, 869,
    867, 1, 0, 0, 0, 869, 868, 1, 0, 0, 0, 870, 103, 1, 0, 0, 0, 871, 873, 3, 106, 53, 0, 872,
    871, 1, 0, 0, 0, 873, 876, 1, 0, 0, 0, 874, 872, 1, 0, 0, 0, 874, 875, 1, 0, 0, 0, 875,
    877, 1, 0, 0, 0, 876, 874, 1, 0, 0, 0, 877, 878, 3, 116, 58, 0, 878, 879, 3, 108, 54,
    0, 879, 880, 5, 63, 0, 0, 880, 105, 1, 0, 0, 0, 881, 890, 3, 230, 115, 0, 882, 890, 5,
    35, 0, 0, 883, 890, 5, 34, 0, 0, 884, 890, 5, 33, 0, 0, 885, 890, 5, 38, 0, 0, 886, 890,
    5, 18, 0, 0, 887, 890, 5, 46, 0, 0, 888, 890, 5, 49, 0, 0, 889, 881, 1, 0, 0, 0, 889, 882,
    1, 0, 0, 0, 889, 883, 1, 0, 0, 0, 889, 884, 1, 0, 0, 0, 889, 885, 1, 0, 0, 0, 889, 886,
    1, 0, 0, 0, 889, 887, 1, 0, 0, 0, 889, 888, 1, 0, 0, 0, 890, 107, 1, 0, 0, 0, 891, 896,
    3, 110, 55, 0, 892, 893, 5, 64, 0, 0, 893, 895, 3, 110, 55, 0, 894, 892, 1, 0, 0, 0, 895,
    898, 1, 0, 0, 0, 896, 894, 1, 0, 0, 0, 896, 897, 1, 0, 0, 0, 897, 109, 1, 0, 0, 0, 898,
    896, 1, 0, 0, 0, 899, 902, 3, 112, 56, 0, 900, 901, 5, 66, 0, 0, 901, 903, 3, 114, 57,
    0, 902, 900, 1, 0, 0, 0, 902, 903, 1, 0, 0, 0, 903, 111, 1, 0, 0, 0, 904, 906, 5, 102,
    0, 0, 905, 907, 3, 32, 16, 0, 906, 905, 1, 0, 0, 0, 906, 907, 1, 0, 0, 0, 907, 113, 1,
    0, 0, 0, 908, 911, 3, 414, 207, 0, 909, 911, 3, 248, 124, 0, 910, 908, 1, 0, 0, 0, 910,
    909, 1, 0, 0, 0, 911, 115, 1, 0, 0, 0, 912, 915, 3, 118, 59, 0, 913, 915, 3, 120, 60,
    0, 914, 912, 1, 0, 0, 0, 914, 913, 1, 0, 0, 0, 915, 117, 1, 0, 0, 0, 916, 919, 3, 6, 3,
    0, 917, 919, 5, 3, 0, 0, 918, 916, 1, 0, 0, 0, 918, 917, 1, 0, 0, 0, 919, 119, 1, 0, 0,
    0, 920, 924, 3, 122, 61, 0, 921, 924, 3, 136, 68, 0, 922, 924, 3, 138, 69, 0, 923, 920,
    1, 0, 0, 0, 923, 921, 1, 0, 0, 0, 923, 922, 1, 0, 0, 0, 924, 121, 1, 0, 0, 0, 925, 928,
    3, 128, 64, 0, 926, 928, 3, 134, 67, 0, 927, 925, 1, 0, 0, 0, 927, 926, 1, 0, 0, 0, 928,
    933, 1, 0, 0, 0, 929, 932, 3, 126, 63, 0, 930, 932, 3, 132, 66, 0, 931, 929, 1, 0, 0,
    0, 931, 930, 1, 0, 0, 0, 932, 935, 1, 0, 0, 0, 933, 931, 1, 0, 0, 0, 933, 934, 1, 0, 0,
    0, 934, 123, 1, 0, 0, 0, 935, 933, 1, 0, 0, 0, 936, 938, 5, 102, 0, 0, 937, 939, 3, 42,
    21, 0, 938, 937, 1, 0, 0, 0, 938, 939, 1, 0, 0, 0, 939, 953, 1, 0, 0, 0, 940, 941, 3, 122,
    61, 0, 941, 945, 5, 65, 0, 0, 942, 944, 3, 230, 115, 0, 943, 942, 1, 0, 0, 0, 944, 947,
    1, 0, 0, 0, 945, 943, 1, 0, 0, 0, 945, 946, 1, 0, 0, 0, 946, 948, 1, 0, 0, 0, 947, 945,
    1, 0, 0, 0, 948, 950, 5, 102, 0, 0, 949, 951, 3, 42, 21, 0, 950, 949, 1, 0, 0, 0, 950,
    951, 1, 0, 0, 0, 951, 953, 1, 0, 0, 0, 952, 936, 1, 0, 0, 0, 952, 940, 1, 0, 0, 0, 953,
    125, 1, 0, 0, 0, 954, 958, 5, 65, 0, 0, 955, 957, 3, 230, 115, 0, 956, 955, 1, 0, 0, 0,
    957, 960, 1, 0, 0, 0, 958, 956, 1, 0, 0, 0, 958, 959, 1, 0, 0, 0, 959, 961, 1, 0, 0, 0,
    960, 958, 1, 0, 0, 0, 961, 963, 5, 102, 0, 0, 962, 964, 3, 42, 21, 0, 963, 962, 1, 0,
    0, 0, 963, 964, 1, 0, 0, 0, 964, 127, 1, 0, 0, 0, 965, 967, 5, 102, 0, 0, 966, 968, 3,
    42, 21, 0, 967, 966, 1, 0, 0, 0, 967, 968, 1, 0, 0, 0, 968, 129, 1, 0, 0, 0, 969, 970,
    3, 124, 62, 0, 970, 131, 1, 0, 0, 0, 971, 972, 3, 126, 63, 0, 972, 133, 1, 0, 0, 0, 973,
    974, 3, 128, 64, 0, 974, 135, 1, 0, 0, 0, 975, 976, 5, 102, 0, 0, 976, 137, 1, 0, 0, 0,
    977, 978, 3, 118, 59, 0, 978, 979, 3, 32, 16, 0, 979, 987, 1, 0, 0, 0, 980, 981, 3, 122,
    61, 0, 981, 982, 3, 32, 16, 0, 982, 987, 1, 0, 0, 0, 983, 984, 3, 136, 68, 0, 984, 985,
    3, 32, 16, 0, 985, 987, 1, 0, 0, 0, 986, 977, 1, 0, 0, 0, 986, 980, 1, 0, 0, 0, 986, 983,
    1, 0, 0, 0, 987, 139, 1, 0, 0, 0, 988, 990, 3, 142, 71, 0, 989, 988, 1, 0, 0, 0, 990, 993,
    1, 0, 0, 0, 991, 989, 1, 0, 0, 0, 991, 992, 1, 0, 0, 0, 992, 994, 1, 0, 0, 0, 993, 991,
    1, 0, 0, 0, 994, 995, 3, 144, 72, 0, 995, 996, 3, 168, 84, 0, 996, 141, 1, 0, 0, 0, 997,
    1008, 3, 230, 115, 0, 998, 1008, 5, 35, 0, 0, 999, 1008, 5, 34, 0, 0, 1000, 1008, 5,
    33, 0, 0, 1001, 1008, 5, 1, 0, 0, 1002, 1008, 5, 38, 0, 0, 1003, 1008, 5, 18, 0, 0, 1004,
    1008, 5, 42, 0, 0, 1005, 1008, 5, 30, 0, 0, 1006, 1008, 5, 39, 0, 0, 1007, 997, 1, 0,
    0, 0, 1007, 998, 1, 0, 0, 0, 1007, 999, 1, 0, 0, 0, 1007, 1000, 1, 0, 0, 0, 1007, 1001,
    1, 0, 0, 0, 1007, 1002, 1, 0, 0, 0, 1007, 1003, 1, 0, 0, 0, 1007, 1004, 1, 0, 0, 0, 1007,
    1005, 1, 0, 0, 0, 1007, 1006, 1, 0, 0, 0, 1008, 143, 1, 0, 0, 0, 1009, 1010, 3, 146,
    73, 0, 1010, 1012, 3, 148, 74, 0, 1011, 1013, 3, 162, 81, 0, 1012, 1011, 1, 0, 0, 0,
    1012, 1013, 1, 0, 0, 0, 1013, 1027, 1, 0, 0, 0, 1014, 1018, 3, 88, 44, 0, 1015, 1017,
    3, 230, 115, 0, 1016, 1015, 1, 0, 0, 0, 1017, 1020, 1, 0, 0, 0, 1018, 1016, 1, 0, 0,
    0, 1018, 1019, 1, 0, 0, 0, 1019, 1021, 1, 0, 0, 0, 1020, 1018, 1, 0, 0, 0, 1021, 1022,
    3, 146, 73, 0, 1022, 1024, 3, 148, 74, 0, 1023, 1025, 3, 162, 81, 0, 1024, 1023, 1,
    0, 0, 0, 1024, 1025, 1, 0, 0, 0, 1025, 1027, 1, 0, 0, 0, 1026, 1009, 1, 0, 0, 0, 1026,
    1014, 1, 0, 0, 0, 1027, 145, 1, 0, 0, 0, 1028, 1031, 3, 116, 58, 0, 1029, 1031, 5, 48,
    0, 0, 1030, 1028, 1, 0, 0, 0, 1030, 1029, 1, 0, 0, 0, 1031, 147, 1, 0, 0, 0, 1032, 1033,
    5, 102, 0, 0, 1033, 1035, 5, 57, 0, 0, 1034, 1036, 3, 150, 75, 0, 1035, 1034, 1, 0,
    0, 0, 1035, 1036, 1, 0, 0, 0, 1036, 1037, 1, 0, 0, 0, 1037, 1039, 5, 58, 0, 0, 1038,
    1040, 3, 32, 16, 0, 1039, 1038, 1, 0, 0, 0, 1039, 1040, 1, 0, 0, 0, 1040, 149, 1, 0,
    0, 0, 1041, 1042, 3, 152, 76, 0, 1042, 1043, 5, 64, 0, 0, 1043, 1044, 3, 158, 79, 0,
    1044, 1047, 1, 0, 0, 0, 1045, 1047, 3, 158, 79, 0, 1046, 1041, 1, 0, 0, 0, 1046, 1045,
    1, 0, 0, 0, 1047, 151, 1, 0, 0, 0, 1048, 1053, 3, 154, 77, 0, 1049, 1050, 5, 64, 0, 0,
    1050, 1052, 3, 154, 77, 0, 1051, 1049, 1, 0, 0, 0, 1052, 1055, 1, 0, 0, 0, 1053, 1051,
    1, 0, 0, 0, 1053, 1054, 1, 0, 0, 0, 1054, 1065, 1, 0, 0, 0, 1055, 1053, 1, 0, 0, 0, 1056,
    1061, 3, 160, 80, 0, 1057, 1058, 5, 64, 0, 0, 1058, 1060, 3, 154, 77, 0, 1059, 1057,
    1, 0, 0, 0, 1060, 1063, 1, 0, 0, 0, 1061, 1059, 1, 0, 0, 0, 1061, 1062, 1, 0, 0, 0, 1062,
    1065, 1, 0, 0, 0, 1063, 1061, 1, 0, 0, 0, 1064, 1048, 1, 0, 0, 0, 1064, 1056, 1, 0, 0,
    0, 1065, 153, 1, 0, 0, 0, 1066, 1068, 3, 156, 78, 0, 1067, 1066, 1, 0, 0, 0, 1068, 1071,
    1, 0, 0, 0, 1069, 1067, 1, 0, 0, 0, 1069, 1070, 1, 0, 0, 0, 1070, 1072, 1, 0, 0, 0, 1071,
    1069, 1, 0, 0, 0, 1072, 1073, 3, 116, 58, 0, 1073, 1074, 3, 112, 56, 0, 1074, 155,
    1, 0, 0, 0, 1075, 1078, 3, 230, 115, 0, 1076, 1078, 5, 18, 0, 0, 1077, 1075, 1, 0, 0,
    0, 1077, 1076, 1, 0, 0, 0, 1078, 157, 1, 0, 0, 0, 1079, 1081, 3, 156, 78, 0, 1080, 1079,
    1, 0, 0, 0, 1081, 1084, 1, 0, 0, 0, 1082, 1080, 1, 0, 0, 0, 1082, 1083, 1, 0, 0, 0, 1083,
    1085, 1, 0, 0, 0, 1084, 1082, 1, 0, 0, 0, 1085, 1089, 3, 116, 58, 0, 1086, 1088, 3,
    230, 115, 0, 1087, 1086, 1, 0, 0, 0, 1088, 1091, 1, 0, 0, 0, 1089, 1087, 1, 0, 0, 0,
    1089, 1090, 1, 0, 0, 0, 1090, 1092, 1, 0, 0, 0, 1091, 1089, 1, 0, 0, 0, 1092, 1093,
    5, 104, 0, 0, 1093, 1094, 3, 112, 56, 0, 1094, 1097, 1, 0, 0, 0, 1095, 1097, 3, 154,
    77, 0, 1096, 1082, 1, 0, 0, 0, 1096, 1095, 1, 0, 0, 0, 1097, 159, 1, 0, 0, 0, 1098, 1100,
    3, 230, 115, 0, 1099, 1098, 1, 0, 0, 0, 1100, 1103, 1, 0, 0, 0, 1101, 1099, 1, 0, 0,
    0, 1101, 1102, 1, 0, 0, 0, 1102, 1104, 1, 0, 0, 0, 1103, 1101, 1, 0, 0, 0, 1104, 1107,
    3, 116, 58, 0, 1105, 1106, 5, 102, 0, 0, 1106, 1108, 5, 65, 0, 0, 1107, 1105, 1, 0,
    0, 0, 1107, 1108, 1, 0, 0, 0, 1108, 1109, 1, 0, 0, 0, 1109, 1110, 5, 43, 0, 0, 1110,
    161, 1, 0, 0, 0, 1111, 1112, 5, 45, 0, 0, 1112, 1113, 3, 164, 82, 0, 1113, 163, 1, 0,
    0, 0, 1114, 1119, 3, 166, 83, 0, 1115, 1116, 5, 64, 0, 0, 1116, 1118, 3, 166, 83, 0,
    1117, 1115, 1, 0, 0, 0, 1118, 1121, 1, 0, 0, 0, 1119, 1117, 1, 0, 0, 0, 1119, 1120,
    1, 0, 0, 0, 1120, 165, 1, 0, 0, 0, 1121, 1119, 1, 0, 0, 0, 1122, 1125, 3, 16, 8, 0, 1123,
    1125, 3, 28, 14, 0, 1124, 1122, 1, 0, 0, 0, 1124, 1123, 1, 0, 0, 0, 1125, 167, 1, 0,
    0, 0, 1126, 1129, 3, 252, 126, 0, 1127, 1129, 5, 63, 0, 0, 1128, 1126, 1, 0, 0, 0, 1128,
    1127, 1, 0, 0, 0, 1129, 169, 1, 0, 0, 0, 1130, 1131, 3, 252, 126, 0, 1131, 171, 1, 0,
    0, 0, 1132, 1133, 5, 38, 0, 0, 1133, 1134, 3, 252, 126, 0, 1134, 173, 1, 0, 0, 0, 1135,
    1137, 3, 176, 88, 0, 1136, 1135, 1, 0, 0, 0, 1137, 1140, 1, 0, 0, 0, 1138, 1136, 1,
    0, 0, 0, 1138, 1139, 1, 0, 0, 0, 1139, 1141, 1, 0, 0, 0, 1140, 1138, 1, 0, 0, 0, 1141,
    1143, 3, 178, 89, 0, 1142, 1144, 3, 162, 81, 0, 1143, 1142, 1, 0, 0, 0, 1143, 1144,
    1, 0, 0, 0, 1144, 1145, 1, 0, 0, 0, 1145, 1146, 3, 182, 91, 0, 1146, 175, 1, 0, 0, 0,
    1147, 1152, 3, 230, 115, 0, 1148, 1152, 5, 35, 0, 0, 1149, 1152, 5, 34, 0, 0, 1150,
    1152, 5, 33, 0, 0, 1151, 1147, 1, 0, 0, 0, 1151, 1148, 1, 0, 0, 0, 1151, 1149, 1, 0,
    0, 0, 1151, 1150, 1, 0, 0, 0, 1152, 177, 1, 0, 0, 0, 1153, 1155, 3, 88, 44, 0, 1154,
    1153, 1, 0, 0, 0, 1154, 1155, 1, 0, 0, 0, 1155, 1156, 1, 0, 0, 0, 1156, 1157, 3, 180,
    90, 0, 1157, 1159, 5, 57, 0, 0, 1158, 1160, 3, 150, 75, 0, 1159, 1158, 1, 0, 0, 0, 1159,
    1160, 1, 0, 0, 0, 1160, 1161, 1, 0, 0, 0, 1161, 1162, 5, 58, 0, 0, 1162, 179, 1, 0, 0,
    0, 1163, 1164, 5, 102, 0, 0, 1164, 181, 1, 0, 0, 0, 1165, 1167, 5, 59, 0, 0, 1166, 1168,
    3, 184, 92, 0, 1167, 1166, 1, 0, 0, 0, 1167, 1168, 1, 0, 0, 0, 1168, 1170, 1, 0, 0, 0,
    1169, 1171, 3, 254, 127, 0, 1170, 1169, 1, 0, 0, 0, 1170, 1171, 1, 0, 0, 0, 1171, 1172,
    1, 0, 0, 0, 1172, 1173, 5, 60, 0, 0, 1173, 183, 1, 0, 0, 0, 1174, 1176, 3, 42, 21, 0,
    1175, 1174, 1, 0, 0, 0, 1175, 1176, 1, 0, 0, 0, 1176, 1177, 1, 0, 0, 0, 1177, 1178,
    5, 43, 0, 0, 1178, 1180, 5, 57, 0, 0, 1179, 1181, 3, 398, 199, 0, 1180, 1179, 1, 0,
    0, 0, 1180, 1181, 1, 0, 0, 0, 1181, 1182, 1, 0, 0, 0, 1182, 1183, 5, 58, 0, 0, 1183,
    1221, 5, 63, 0, 0, 1184, 1186, 3, 42, 21, 0, 1185, 1184, 1, 0, 0, 0, 1185, 1186, 1,
    0, 0, 0, 1186, 1187, 1, 0, 0, 0, 1187, 1188, 5, 40, 0, 0, 1188, 1190, 5, 57, 0, 0, 1189,
    1191, 3, 398, 199, 0, 1190, 1189, 1, 0, 0, 0, 1190, 1191, 1, 0, 0, 0, 1191, 1192, 1,
    0, 0, 0, 1192, 1193, 5, 58, 0, 0, 1193, 1221, 5, 63, 0, 0, 1194, 1195, 3, 58, 29, 0,
    1195, 1197, 5, 65, 0, 0, 1196, 1198, 3, 42, 21, 0, 1197, 1196, 1, 0, 0, 0, 1197, 1198,
    1, 0, 0, 0, 1198, 1199, 1, 0, 0, 0, 1199, 1200, 5, 40, 0, 0, 1200, 1202, 5, 57, 0, 0,
    1201, 1203, 3, 398, 199, 0, 1202, 1201, 1, 0, 0, 0, 1202, 1203, 1, 0, 0, 0, 1203, 1204,
    1, 0, 0, 0, 1204, 1205, 5, 58, 0, 0, 1205, 1206, 5, 63, 0, 0, 1206, 1221, 1, 0, 0, 0,
    1207, 1208, 3, 352, 176, 0, 1208, 1210, 5, 65, 0, 0, 1209, 1211, 3, 42, 21, 0, 1210,
    1209, 1, 0, 0, 0, 1210, 1211, 1, 0, 0, 0, 1211, 1212, 1, 0, 0, 0, 1212, 1213, 5, 40,
    0, 0, 1213, 1215, 5, 57, 0, 0, 1214, 1216, 3, 398, 199, 0, 1215, 1214, 1, 0, 0, 0, 1215,
    1216, 1, 0, 0, 0, 1216, 1217, 1, 0, 0, 0, 1217, 1218, 5, 58, 0, 0, 1218, 1219, 5, 63,
    0, 0, 1219, 1221, 1, 0, 0, 0, 1220, 1175, 1, 0, 0, 0, 1220, 1185, 1, 0, 0, 0, 1220, 1194,
    1, 0, 0, 0, 1220, 1207, 1, 0, 0, 0, 1221, 185, 1, 0, 0, 0, 1222, 1224, 3, 86, 43, 0, 1223,
    1222, 1, 0, 0, 0, 1224, 1227, 1, 0, 0, 0, 1225, 1223, 1, 0, 0, 0, 1225, 1226, 1, 0, 0,
    0, 1226, 1228, 1, 0, 0, 0, 1227, 1225, 1, 0, 0, 0, 1228, 1229, 5, 16, 0, 0, 1229, 1231,
    5, 102, 0, 0, 1230, 1232, 3, 94, 47, 0, 1231, 1230, 1, 0, 0, 0, 1231, 1232, 1, 0, 0,
    0, 1232, 1233, 1, 0, 0, 0, 1233, 1234, 3, 188, 94, 0, 1234, 187, 1, 0, 0, 0, 1235, 1237,
    5, 59, 0, 0, 1236, 1238, 3, 190, 95, 0, 1237, 1236, 1, 0, 0, 0, 1237, 1238, 1, 0, 0,
    0, 1238, 1240, 1, 0, 0, 0, 1239, 1241, 5, 64, 0, 0, 1240, 1239, 1, 0, 0, 0, 1240, 1241,
    1, 0, 0, 0, 1241, 1243, 1, 0, 0, 0, 1242, 1244, 3, 196, 98, 0, 1243, 1242, 1, 0, 0, 0,
    1243, 1244, 1, 0, 0, 0, 1244, 1245, 1, 0, 0, 0, 1245, 1246, 5, 60, 0, 0, 1246, 189,
    1, 0, 0, 0, 1247, 1252, 3, 192, 96, 0, 1248, 1249, 5, 64, 0, 0, 1249, 1251, 3, 192,
    96, 0, 1250, 1248, 1, 0, 0, 0, 1251, 1254, 1, 0, 0, 0, 1252, 1250, 1, 0, 0, 0, 1252,
    1253, 1, 0, 0, 0, 1253, 191, 1, 0, 0, 0, 1254, 1252, 1, 0, 0, 0, 1255, 1257, 3, 194,
    97, 0, 1256, 1255, 1, 0, 0, 0, 1257, 1260, 1, 0, 0, 0, 1258, 1256, 1, 0, 0, 0, 1258,
    1259, 1, 0, 0, 0, 1259, 1261, 1, 0, 0, 0, 1260, 1258, 1, 0, 0, 0, 1261, 1267, 5, 102,
    0, 0, 1262, 1264, 5, 57, 0, 0, 1263, 1265, 3, 398, 199, 0, 1264, 1263, 1, 0, 0, 0, 1264,
    1265, 1, 0, 0, 0, 1265, 1266, 1, 0, 0, 0, 1266, 1268, 5, 58, 0, 0, 1267, 1262, 1, 0,
    0, 0, 1267, 1268, 1, 0, 0, 0, 1268, 1270, 1, 0, 0, 0, 1269, 1271, 3, 98, 49, 0, 1270,
    1269, 1, 0, 0, 0, 1270, 1271, 1, 0, 0, 0, 1271, 193, 1, 0, 0, 0, 1272, 1273, 3, 230,
    115, 0, 1273, 195, 1, 0, 0, 0, 1274, 1278, 5, 63, 0, 0, 1275, 1277, 3, 100, 50, 0, 1276,
    1275, 1, 0, 0, 0, 1277, 1280, 1, 0, 0, 0, 1278, 1276, 1, 0, 0, 0, 1278, 1279, 1, 0, 0,
    0, 1279, 197, 1, 0, 0, 0, 1280, 1278, 1, 0, 0, 0, 1281, 1284, 3, 200, 100, 0, 1282,
    1284, 3, 218, 109, 0, 1283, 1281, 1, 0, 0, 0, 1283, 1282, 1, 0, 0, 0, 1284, 199, 1,
    0, 0, 0, 1285, 1287, 3, 202, 101, 0, 1286, 1285, 1, 0, 0, 0, 1287, 1290, 1, 0, 0, 0,
    1288, 1286, 1, 0, 0, 0, 1288, 1289, 1, 0, 0, 0, 1289, 1291, 1, 0, 0, 0, 1290, 1288,
    1, 0, 0, 0, 1291, 1292, 5, 28, 0, 0, 1292, 1294, 5, 102, 0, 0, 1293, 1295, 3, 88, 44,
    0, 1294, 1293, 1, 0, 0, 0, 1294, 1295, 1, 0, 0, 0, 1295, 1297, 1, 0, 0, 0, 1296, 1298,
    3, 204, 102, 0, 1297, 1296, 1, 0, 0, 0, 1297, 1298, 1, 0, 0, 0, 1298, 1299, 1, 0, 0,
    0, 1299, 1300, 3, 206, 103, 0, 1300, 201, 1, 0, 0, 0, 1301, 1309, 3, 230, 115, 0, 1302,
    1309, 5, 35, 0, 0, 1303, 1309, 5, 34, 0, 0, 1304, 1309, 5, 33, 0, 0, 1305, 1309, 5,
    1, 0, 0, 1306, 1309, 5, 38, 0, 0, 1307, 1309, 5, 39, 0, 0, 1308, 1301, 1, 0, 0, 0, 1308,
    1302, 1, 0, 0, 0, 1308, 1303, 1, 0, 0, 0, 1308, 1304, 1, 0, 0, 0, 1308, 1305, 1, 0, 0,
    0, 1308, 1306, 1, 0, 0, 0, 1308, 1307, 1, 0, 0, 0, 1309, 203, 1, 0, 0, 0, 1310, 1311,
    5, 17, 0, 0, 1311, 1312, 3, 96, 48, 0, 1312, 205, 1, 0, 0, 0, 1313, 1317, 5, 59, 0, 0,
    1314, 1316, 3, 208, 104, 0, 1315, 1314, 1, 0, 0, 0, 1316, 1319, 1, 0, 0, 0, 1317, 1315,
    1, 0, 0, 0, 1317, 1318, 1, 0, 0, 0, 1318, 1320, 1, 0, 0, 0, 1319, 1317, 1, 0, 0, 0, 1320,
    1321, 5, 60, 0, 0, 1321, 207, 1, 0, 0, 0, 1322, 1328, 3, 210, 105, 0, 1323, 1328, 3,
    214, 107, 0, 1324, 1328, 3, 82, 41, 0, 1325, 1328, 3, 198, 99, 0, 1326, 1328, 5, 63,
    0, 0, 1327, 1322, 1, 0, 0, 0, 1327, 1323, 1, 0, 0, 0, 1327, 1324, 1, 0, 0, 0, 1327, 1325,
    1, 0, 0, 0, 1327, 1326, 1, 0, 0, 0, 1328, 209, 1, 0, 0, 0, 1329, 1331, 3, 212, 106, 0,
    1330, 1329, 1, 0, 0, 0, 1331, 1334, 1, 0, 0, 0, 1332, 1330, 1, 0, 0, 0, 1332, 1333,
    1, 0, 0, 0, 1333, 1335, 1, 0, 0, 0, 1334, 1332, 1, 0, 0, 0, 1335, 1336, 3, 116, 58, 0,
    1336, 1337, 3, 108, 54, 0, 1337, 1338, 5, 63, 0, 0, 1338, 211, 1, 0, 0, 0, 1339, 1344,
    3, 230, 115, 0, 1340, 1344, 5, 35, 0, 0, 1341, 1344, 5, 38, 0, 0, 1342, 1344, 5, 18,
    0, 0, 1343, 1339, 1, 0, 0, 0, 1343, 1340, 1, 0, 0, 0, 1343, 1341, 1, 0, 0, 0, 1343, 1342,
    1, 0, 0, 0, 1344, 213, 1, 0, 0, 0, 1345, 1347, 3, 216, 108, 0, 1346, 1345, 1, 0, 0, 0,
    1347, 1350, 1, 0, 0, 0, 1348, 1346, 1, 0, 0, 0, 1348, 1349, 1, 0, 0, 0, 1349, 1351,
    1, 0, 0, 0, 1350, 1348, 1, 0, 0, 0, 1351, 1352, 3, 144, 72, 0, 1352, 1353, 3, 168, 84,
    0, 1353, 215, 1, 0, 0, 0, 1354, 1361, 3, 230, 115, 0, 1355, 1361, 5, 35, 0, 0, 1356,
    1361, 5, 1, 0, 0, 1357, 1361, 5, 12, 0, 0, 1358, 1361, 5, 38, 0, 0, 1359, 1361, 5, 39,
    0, 0, 1360, 1354, 1, 0, 0, 0, 1360, 1355, 1, 0, 0, 0, 1360, 1356, 1, 0, 0, 0, 1360, 1357,
    1, 0, 0, 0, 1360, 1358, 1, 0, 0, 0, 1360, 1359, 1, 0, 0, 0, 1361, 217, 1, 0, 0, 0, 1362,
    1364, 3, 202, 101, 0, 1363, 1362, 1, 0, 0, 0, 1364, 1367, 1, 0, 0, 0, 1365, 1363, 1,
    0, 0, 0, 1365, 1366, 1, 0, 0, 0, 1366, 1368, 1, 0, 0, 0, 1367, 1365, 1, 0, 0, 0, 1368,
    1369, 5, 103, 0, 0, 1369, 1370, 5, 28, 0, 0, 1370, 1371, 5, 102, 0, 0, 1371, 1372,
    3, 220, 110, 0, 1372, 219, 1, 0, 0, 0, 1373, 1377, 5, 59, 0, 0, 1374, 1376, 3, 222,
    111, 0, 1375, 1374, 1, 0, 0, 0, 1376, 1379, 1, 0, 0, 0, 1377, 1375, 1, 0, 0, 0, 1377,
    1378, 1, 0, 0, 0, 1378, 1380, 1, 0, 0, 0, 1379, 1377, 1, 0, 0, 0, 1380, 1381, 5, 60,
    0, 0, 1381, 221, 1, 0, 0, 0, 1382, 1388, 3, 224, 112, 0, 1383, 1388, 3, 210, 105, 0,
    1384, 1388, 3, 82, 41, 0, 1385, 1388, 3, 198, 99, 0, 1386, 1388, 5, 63, 0, 0, 1387,
    1382, 1, 0, 0, 0, 1387, 1383, 1, 0, 0, 0, 1387, 1384, 1, 0, 0, 0, 1387, 1385, 1, 0, 0,
    0, 1387, 1386, 1, 0, 0, 0, 1388, 223, 1, 0, 0, 0, 1389, 1391, 3, 226, 113, 0, 1390,
    1389, 1, 0, 0, 0, 1391, 1394, 1, 0, 0, 0, 1392, 1390, 1, 0, 0, 0, 1392, 1393, 1, 0, 0,
    0, 1393, 1395, 1, 0, 0, 0, 1394, 1392, 1, 0, 0, 0, 1395, 1396, 3, 116, 58, 0, 1396,
    1397, 5, 102, 0, 0, 1397, 1398, 5, 57, 0, 0, 1398, 1400, 5, 58, 0, 0, 1399, 1401, 3,
    32, 16, 0, 1400, 1399, 1, 0, 0, 0, 1400, 1401, 1, 0, 0, 0, 1401, 1403, 1, 0, 0, 0, 1402,
    1404, 3, 228, 114, 0, 1403, 1402, 1, 0, 0, 0, 1403, 1404, 1, 0, 0, 0, 1404, 1405, 1,
    0, 0, 0, 1405, 1406, 5, 63, 0, 0, 1406, 225, 1, 0, 0, 0, 1407, 1411, 3, 230, 115, 0,
    1408, 1411, 5, 35, 0, 0, 1409, 1411, 5, 1, 0, 0, 1410, 1407, 1, 0, 0, 0, 1410, 1408,
    1, 0, 0, 0, 1410, 1409, 1, 0, 0, 0, 1411, 227, 1, 0, 0, 0, 1412, 1413, 5, 12, 0, 0, 1413,
    1414, 3, 238, 119, 0, 1414, 229, 1, 0, 0, 0, 1415, 1419, 3, 232, 116, 0, 1416, 1419,
    3, 244, 122, 0, 1417, 1419, 3, 246, 123, 0, 1418, 1415, 1, 0, 0, 0, 1418, 1416, 1,
    0, 0, 0, 1418, 1417, 1, 0, 0, 0, 1419, 231, 1, 0, 0, 0, 1420, 1421, 5, 103, 0, 0, 1421,
    1422, 3, 54, 27, 0, 1422, 1424, 5, 57, 0, 0, 1423, 1425, 3, 234, 117, 0, 1424, 1423,
    1, 0, 0, 0, 1424, 1425, 1, 0, 0, 0, 1425, 1426, 1, 0, 0, 0, 1426, 1427, 5, 58, 0, 0, 1427,
    233, 1, 0, 0, 0, 1428, 1433, 3, 236, 118, 0, 1429, 1430, 5, 64, 0, 0, 1430, 1432, 3,
    236, 118, 0, 1431, 1429, 1, 0, 0, 0, 1432, 1435, 1, 0, 0, 0, 1433, 1431, 1, 0, 0, 0,
    1433, 1434, 1, 0, 0, 0, 1434, 235, 1, 0, 0, 0, 1435, 1433, 1, 0, 0, 0, 1436, 1437, 5,
    102, 0, 0, 1437, 1438, 5, 66, 0, 0, 1438, 1439, 3, 238, 119, 0, 1439, 237, 1, 0, 0,
    0, 1440, 1444, 3, 432, 216, 0, 1441, 1444, 3, 240, 120, 0, 1442, 1444, 3, 230, 115,
    0, 1443, 1440, 1, 0, 0, 0, 1443, 1441, 1, 0, 0, 0, 1443, 1442, 1, 0, 0, 0, 1444, 239,
    1, 0, 0, 0, 1445, 1447, 5, 59, 0, 0, 1446, 1448, 3, 242, 121, 0, 1447, 1446, 1, 0, 0,
    0, 1447, 1448, 1, 0, 0, 0, 1448, 1450, 1, 0, 0, 0, 1449, 1451, 5, 64, 0, 0, 1450, 1449,
    1, 0, 0, 0, 1450, 1451, 1, 0, 0, 0, 1451, 1452, 1, 0, 0, 0, 1452, 1453, 5, 60, 0, 0, 1453,
    241, 1, 0, 0, 0, 1454, 1459, 3, 238, 119, 0, 1455, 1456, 5, 64, 0, 0, 1456, 1458, 3,
    238, 119, 0, 1457, 1455, 1, 0, 0, 0, 1458, 1461, 1, 0, 0, 0, 1459, 1457, 1, 0, 0, 0,
    1459, 1460, 1, 0, 0, 0, 1460, 243, 1, 0, 0, 0, 1461, 1459, 1, 0, 0, 0, 1462, 1463, 5,
    103, 0, 0, 1463, 1464, 3, 54, 27, 0, 1464, 245, 1, 0, 0, 0, 1465, 1466, 5, 103, 0, 0,
    1466, 1467, 3, 54, 27, 0, 1467, 1468, 5, 57, 0, 0, 1468, 1469, 3, 238, 119, 0, 1469,
    1470, 5, 58, 0, 0, 1470, 247, 1, 0, 0, 0, 1471, 1473, 5, 59, 0, 0, 1472, 1474, 3, 250,
    125, 0, 1473, 1472, 1, 0, 0, 0, 1473, 1474, 1, 0, 0, 0, 1474, 1476, 1, 0, 0, 0, 1475,
    1477, 5, 64, 0, 0, 1476, 1475, 1, 0, 0, 0, 1476, 1477, 1, 0, 0, 0, 1477, 1478, 1, 0,
    0, 0, 1478, 1479, 5, 60, 0, 0, 1479, 249, 1, 0, 0, 0, 1480, 1485, 3, 114, 57, 0, 1481,
    1482, 5, 64, 0, 0, 1482, 1484, 3, 114, 57, 0, 1483, 1481, 1, 0, 0, 0, 1484, 1487, 1,
    0, 0, 0, 1485, 1483, 1, 0, 0, 0, 1485, 1486, 1, 0, 0, 0, 1486, 251, 1, 0, 0, 0, 1487,
    1485, 1, 0, 0, 0, 1488, 1490, 5, 59, 0, 0, 1489, 1491, 3, 254, 127, 0, 1490, 1489,
    1, 0, 0, 0, 1490, 1491, 1, 0, 0, 0, 1491, 1492, 1, 0, 0, 0, 1492, 1493, 5, 60, 0, 0, 1493,
    253, 1, 0, 0, 0, 1494, 1498, 3, 256, 128, 0, 1495, 1497, 3, 256, 128, 0, 1496, 1495,
    1, 0, 0, 0, 1497, 1500, 1, 0, 0, 0, 1498, 1496, 1, 0, 0, 0, 1498, 1499, 1, 0, 0, 0, 1499,
    255, 1, 0, 0, 0, 1500, 1498, 1, 0, 0, 0, 1501, 1505, 3, 258, 129, 0, 1502, 1505, 3,
    82, 41, 0, 1503, 1505, 3, 262, 131, 0, 1504, 1501, 1, 0, 0, 0, 1504, 1502, 1, 0, 0,
    0, 1504, 1503, 1, 0, 0, 0, 1505, 257, 1, 0, 0, 0, 1506, 1507, 3, 260, 130, 0, 1507,
    1508, 5, 63, 0, 0, 1508, 259, 1, 0, 0, 0, 1509, 1511, 3, 156, 78, 0, 1510, 1509, 1,
    0, 0, 0, 1511, 1514, 1, 0, 0, 0, 1512, 1510, 1, 0, 0, 0, 1512, 1513, 1, 0, 0, 0, 1513,
    1515, 1, 0, 0, 0, 1514, 1512, 1, 0, 0, 0, 1515, 1516, 3, 116, 58, 0, 1516, 1517, 3,
    108, 54, 0, 1517, 261, 1, 0, 0, 0, 1518, 1525, 3, 266, 133, 0, 1519, 1525, 3, 270,
    135, 0, 1520, 1525, 3, 278, 139, 0, 1521, 1525, 3, 280, 140, 0, 1522, 1525, 3, 298,
    149, 0, 1523, 1525, 3, 304, 152, 0, 1524, 1518, 1, 0, 0, 0, 1524, 1519, 1, 0, 0, 0,
    1524, 1520, 1, 0, 0, 0, 1524, 1521, 1, 0, 0, 0, 1524, 1522, 1, 0, 0, 0, 1524, 1523,
    1, 0, 0, 0, 1525, 263, 1, 0, 0, 0, 1526, 1532, 3, 266, 133, 0, 1527, 1532, 3, 272, 136,
    0, 1528, 1532, 3, 282, 141, 0, 1529, 1532, 3, 300, 150, 0, 1530, 1532, 3, 306, 153,
    0, 1531, 1526, 1, 0, 0, 0, 1531, 1527, 1, 0, 0, 0, 1531, 1528, 1, 0, 0, 0, 1531, 1529,
    1, 0, 0, 0, 1531, 1530, 1, 0, 0, 0, 1532, 265, 1, 0, 0, 0, 1533, 1546, 3, 252, 126, 0,
    1534, 1546, 3, 268, 134, 0, 1535, 1546, 3, 274, 137, 0, 1536, 1546, 3, 284, 142,
    0, 1537, 1546, 3, 286, 143, 0, 1538, 1546, 3, 302, 151, 0, 1539, 1546, 3, 322, 161,
    0, 1540, 1546, 3, 324, 162, 0, 1541, 1546, 3, 326, 163, 0, 1542, 1546, 3, 330, 165,
    0, 1543, 1546, 3, 328, 164, 0, 1544, 1546, 3, 332, 166, 0, 1545, 1533, 1, 0, 0, 0,
    1545, 1534, 1, 0, 0, 0, 1545, 1535, 1, 0, 0, 0, 1545, 1536, 1, 0, 0, 0, 1545, 1537,
    1, 0, 0, 0, 1545, 1538, 1, 0, 0, 0, 1545, 1539, 1, 0, 0, 0, 1545, 1540, 1, 0, 0, 0, 1545,
    1541, 1, 0, 0, 0, 1545, 1542, 1, 0, 0, 0, 1545, 1543, 1, 0, 0, 0, 1545, 1544, 1, 0, 0,
    0, 1546, 267, 1, 0, 0, 0, 1547, 1548, 5, 63, 0, 0, 1548, 269, 1, 0, 0, 0, 1549, 1550,
    5, 102, 0, 0, 1550, 1551, 5, 72, 0, 0, 1551, 1552, 3, 262, 131, 0, 1552, 271, 1, 0,
    0, 0, 1553, 1554, 5, 102, 0, 0, 1554, 1555, 5, 72, 0, 0, 1555, 1556, 3, 264, 132, 0,
    1556, 273, 1, 0, 0, 0, 1557, 1558, 3, 276, 138, 0, 1558, 1559, 5, 63, 0, 0, 1559, 275,
    1, 0, 0, 0, 1560, 1568, 3, 426, 213, 0, 1561, 1568, 3, 456, 228, 0, 1562, 1568, 3,
    458, 229, 0, 1563, 1568, 3, 464, 232, 0, 1564, 1568, 3, 468, 234, 0, 1565, 1568,
    3, 392, 196, 0, 1566, 1568, 3, 372, 186, 0, 1567, 1560, 1, 0, 0, 0, 1567, 1561, 1,
    0, 0, 0, 1567, 1562, 1, 0, 0, 0, 1567, 1563, 1, 0, 0, 0, 1567, 1564, 1, 0, 0, 0, 1567,
    1565, 1, 0, 0, 0, 1567, 1566, 1, 0, 0, 0, 1568, 277, 1, 0, 0, 0, 1569, 1570, 5, 22, 0,
    0, 1570, 1571, 5, 57, 0, 0, 1571, 1572, 3, 414, 207, 0, 1572, 1573, 5, 58, 0, 0, 1573,
    1574, 3, 262, 131, 0, 1574, 279, 1, 0, 0, 0, 1575, 1576, 5, 22, 0, 0, 1576, 1577, 5,
    57, 0, 0, 1577, 1578, 3, 414, 207, 0, 1578, 1579, 5, 58, 0, 0, 1579, 1580, 3, 264,
    132, 0, 1580, 1581, 5, 15, 0, 0, 1581, 1582, 3, 262, 131, 0, 1582, 281, 1, 0, 0, 0,
    1583, 1584, 5, 22, 0, 0, 1584, 1585, 5, 57, 0, 0, 1585, 1586, 3, 414, 207, 0, 1586,
    1587, 5, 58, 0, 0, 1587, 1588, 3, 264, 132, 0, 1588, 1589, 5, 15, 0, 0, 1589, 1590,
    3, 264, 132, 0, 1590, 283, 1, 0, 0, 0, 1591, 1592, 5, 2, 0, 0, 1592, 1593, 3, 414, 207,
    0, 1593, 1594, 5, 63, 0, 0, 1594, 1602, 1, 0, 0, 0, 1595, 1596, 5, 2, 0, 0, 1596, 1597,
    3, 414, 207, 0, 1597, 1598, 5, 72, 0, 0, 1598, 1599, 3, 414, 207, 0, 1599, 1600, 5,
    63, 0, 0, 1600, 1602, 1, 0, 0, 0, 1601, 1591, 1, 0, 0, 0, 1601, 1595, 1, 0, 0, 0, 1602,
    285, 1, 0, 0, 0, 1603, 1604, 5, 41, 0, 0, 1604, 1605, 5, 57, 0, 0, 1605, 1606, 3, 414,
    207, 0, 1606, 1607, 5, 58, 0, 0, 1607, 1608, 3, 288, 144, 0, 1608, 287, 1, 0, 0, 0,
    1609, 1613, 5, 59, 0, 0, 1610, 1612, 3, 290, 145, 0, 1611, 1610, 1, 0, 0, 0, 1612,
    1615, 1, 0, 0, 0, 1613, 1611, 1, 0, 0, 0, 1613, 1614, 1, 0, 0, 0, 1614, 1619, 1, 0, 0,
    0, 1615, 1613, 1, 0, 0, 0, 1616, 1618, 3, 294, 147, 0, 1617, 1616, 1, 0, 0, 0, 1618,
    1621, 1, 0, 0, 0, 1619, 1617, 1, 0, 0, 0, 1619, 1620, 1, 0, 0, 0, 1620, 1622, 1, 0, 0,
    0, 1621, 1619, 1, 0, 0, 0, 1622, 1623, 5, 60, 0, 0, 1623, 289, 1, 0, 0, 0, 1624, 1625,
    3, 292, 146, 0, 1625, 1626, 3, 254, 127, 0, 1626, 291, 1, 0, 0, 0, 1627, 1631, 3, 294,
    147, 0, 1628, 1630, 3, 294, 147, 0, 1629, 1628, 1, 0, 0, 0, 1630, 1633, 1, 0, 0, 0,
    1631, 1629, 1, 0, 0, 0, 1631, 1632, 1, 0, 0, 0, 1632, 293, 1, 0, 0, 0, 1633, 1631, 1,
    0, 0, 0, 1634, 1635, 5, 6, 0, 0, 1635, 1636, 3, 412, 206, 0, 1636, 1637, 5, 72, 0, 0,
    1637, 1645, 1, 0, 0, 0, 1638, 1639, 5, 6, 0, 0, 1639, 1640, 3, 296, 148, 0, 1640, 1641,
    5, 72, 0, 0, 1641, 1645, 1, 0, 0, 0, 1642, 1643, 5, 12, 0, 0, 1643, 1645, 5, 72, 0, 0,
    1644, 1634, 1, 0, 0, 0, 1644, 1638, 1, 0, 0, 0, 1644, 1642, 1, 0, 0, 0, 1645, 295, 1,
    0, 0, 0, 1646, 1647, 5, 102, 0, 0, 1647, 297, 1, 0, 0, 0, 1648, 1649, 5, 50, 0, 0, 1649,
    1650, 5, 57, 0, 0, 1650, 1651, 3, 414, 207, 0, 1651, 1652, 5, 58, 0, 0, 1652, 1653,
    3, 262, 131, 0, 1653, 299, 1, 0, 0, 0, 1654, 1655, 5, 50, 0, 0, 1655, 1656, 5, 57, 0,
    0, 1656, 1657, 3, 414, 207, 0, 1657, 1658, 5, 58, 0, 0, 1658, 1659, 3, 264, 132, 0,
    1659, 301, 1, 0, 0, 0, 1660, 1661, 5, 13, 0, 0, 1661, 1662, 3, 262, 131, 0, 1662, 1663,
    5, 50, 0, 0, 1663, 1664, 5, 57, 0, 0, 1664, 1665, 3, 414, 207, 0, 1665, 1666, 5, 58,
    0, 0, 1666, 1667, 5, 63, 0, 0, 1667, 303, 1, 0, 0, 0, 1668, 1671, 3, 308, 154, 0, 1669,
    1671, 3, 318, 159, 0, 1670, 1668, 1, 0, 0, 0, 1670, 1669, 1, 0, 0, 0, 1671, 305, 1,
    0, 0, 0, 1672, 1675, 3, 310, 155, 0, 1673, 1675, 3, 320, 160, 0, 1674, 1672, 1, 0,
    0, 0, 1674, 1673, 1, 0, 0, 0, 1675, 307, 1, 0, 0, 0, 1676, 1677, 5, 21, 0, 0, 1677, 1679,
    5, 57, 0, 0, 1678, 1680, 3, 312, 156, 0, 1679, 1678, 1, 0, 0, 0, 1679, 1680, 1, 0, 0,
    0, 1680, 1681, 1, 0, 0, 0, 1681, 1683, 5, 63, 0, 0, 1682, 1684, 3, 414, 207, 0, 1683,
    1682, 1, 0, 0, 0, 1683, 1684, 1, 0, 0, 0, 1684, 1685, 1, 0, 0, 0, 1685, 1687, 5, 63,
    0, 0, 1686, 1688, 3, 314, 157, 0, 1687, 1686, 1, 0, 0, 0, 1687, 1688, 1, 0, 0, 0, 1688,
    1689, 1, 0, 0, 0, 1689, 1690, 5, 58, 0, 0, 1690, 1691, 3, 262, 131, 0, 1691, 309, 1,
    0, 0, 0, 1692, 1693, 5, 21, 0, 0, 1693, 1695, 5, 57, 0, 0, 1694, 1696, 3, 312, 156,
    0, 1695, 1694, 1, 0, 0, 0, 1695, 1696, 1, 0, 0, 0, 1696, 1697, 1, 0, 0, 0, 1697, 1699,
    5, 63, 0, 0, 1698, 1700, 3, 414, 207, 0, 1699, 1698, 1, 0, 0, 0, 1699, 1700, 1, 0, 0,
    0, 1700, 1701, 1, 0, 0, 0, 1701, 1703, 5, 63, 0, 0, 1702, 1704, 3, 314, 157, 0, 1703,
    1702, 1, 0, 0, 0, 1703, 1704, 1, 0, 0, 0, 1704, 1705, 1, 0, 0, 0, 1705, 1706, 5, 58,
    0, 0, 1706, 1707, 3, 264, 132, 0, 1707, 311, 1, 0, 0, 0, 1708, 1711, 3, 316, 158, 0,
    1709, 1711, 3, 260, 130, 0, 1710, 1708, 1, 0, 0, 0, 1710, 1709, 1, 0, 0, 0, 1711, 313,
    1, 0, 0, 0, 1712, 1713, 3, 316, 158, 0, 1713, 315, 1, 0, 0, 0, 1714, 1719, 3, 276, 138,
    0, 1715, 1716, 5, 64, 0, 0, 1716, 1718, 3, 276, 138, 0, 1717, 1715, 1, 0, 0, 0, 1718,
    1721, 1, 0, 0, 0, 1719, 1717, 1, 0, 0, 0, 1719, 1720, 1, 0, 0, 0, 1720, 317, 1, 0, 0,
    0, 1721, 1719, 1, 0, 0, 0, 1722, 1723, 5, 21, 0, 0, 1723, 1727, 5, 57, 0, 0, 1724, 1726,
    3, 156, 78, 0, 1725, 1724, 1, 0, 0, 0, 1726, 1729, 1, 0, 0, 0, 1727, 1725, 1, 0, 0, 0,
    1727, 1728, 1, 0, 0, 0, 1728, 1730, 1, 0, 0, 0, 1729, 1727, 1, 0, 0, 0, 1730, 1731,
    3, 116, 58, 0, 1731, 1732, 3, 112, 56, 0, 1732, 1733, 5, 72, 0, 0, 1733, 1734, 3, 414,
    207, 0, 1734, 1735, 5, 58, 0, 0, 1735, 1736, 3, 262, 131, 0, 1736, 319, 1, 0, 0, 0,
    1737, 1738, 5, 21, 0, 0, 1738, 1742, 5, 57, 0, 0, 1739, 1741, 3, 156, 78, 0, 1740,
    1739, 1, 0, 0, 0, 1741, 1744, 1, 0, 0, 0, 1742, 1740, 1, 0, 0, 0, 1742, 1743, 1, 0, 0,
    0, 1743, 1745, 1, 0, 0, 0, 1744, 1742, 1, 0, 0, 0, 1745, 1746, 3, 116, 58, 0, 1746,
    1747, 3, 112, 56, 0, 1747, 1748, 5, 72, 0, 0, 1748, 1749, 3, 414, 207, 0, 1749, 1750,
    5, 58, 0, 0, 1750, 1751, 3, 264, 132, 0, 1751, 321, 1, 0, 0, 0, 1752, 1754, 5, 4, 0,
    0, 1753, 1755, 5, 102, 0, 0, 1754, 1753, 1, 0, 0, 0, 1754, 1755, 1, 0, 0, 0, 1755, 1756,
    1, 0, 0, 0, 1756, 1757, 5, 63, 0, 0, 1757, 323, 1, 0, 0, 0, 1758, 1760, 5, 11, 0, 0, 1759,
    1761, 5, 102, 0, 0, 1760, 1759, 1, 0, 0, 0, 1760, 1761, 1, 0, 0, 0, 1761, 1762, 1, 0,
    0, 0, 1762, 1763, 5, 63, 0, 0, 1763, 325, 1, 0, 0, 0, 1764, 1766, 5, 36, 0, 0, 1765,
    1767, 3, 414, 207, 0, 1766, 1765, 1, 0, 0, 0, 1766, 1767, 1, 0, 0, 0, 1767, 1768, 1,
    0, 0, 0, 1768, 1769, 5, 63, 0, 0, 1769, 327, 1, 0, 0, 0, 1770, 1771, 5, 44, 0, 0, 1771,
    1772, 3, 414, 207, 0, 1772, 1773, 5, 63, 0, 0, 1773, 329, 1, 0, 0, 0, 1774, 1775, 5,
    42, 0, 0, 1775, 1776, 5, 57, 0, 0, 1776, 1777, 3, 414, 207, 0, 1777, 1778, 5, 58, 0,
    0, 1778, 1779, 3, 252, 126, 0, 1779, 331, 1, 0, 0, 0, 1780, 1781, 5, 47, 0, 0, 1781,
    1782, 3, 252, 126, 0, 1782, 1783, 3, 334, 167, 0, 1783, 1793, 1, 0, 0, 0, 1784, 1785,
    5, 47, 0, 0, 1785, 1787, 3, 252, 126, 0, 1786, 1788, 3, 334, 167, 0, 1787, 1786, 1,
    0, 0, 0, 1787, 1788, 1, 0, 0, 0, 1788, 1789, 1, 0, 0, 0, 1789, 1790, 3, 342, 171, 0,
    1790, 1793, 1, 0, 0, 0, 1791, 1793, 3, 344, 172, 0, 1792, 1780, 1, 0, 0, 0, 1792, 1784,
    1, 0, 0, 0, 1792, 1791, 1, 0, 0, 0, 1793, 333, 1, 0, 0, 0, 1794, 1798, 3, 336, 168, 0,
    1795, 1797, 3, 336, 168, 0, 1796, 1795, 1, 0, 0, 0, 1797, 1800, 1, 0, 0, 0, 1798, 1796,
    1, 0, 0, 0, 1798, 1799, 1, 0, 0, 0, 1799, 335, 1, 0, 0, 0, 1800, 1798, 1, 0, 0, 0, 1801,
    1802, 5, 7, 0, 0, 1802, 1803, 5, 57, 0, 0, 1803, 1804, 3, 338, 169, 0, 1804, 1805,
    5, 58, 0, 0, 1805, 1806, 3, 252, 126, 0, 1806, 337, 1, 0, 0, 0, 1807, 1809, 3, 156,
    78, 0, 1808, 1807, 1, 0, 0, 0, 1809, 1812, 1, 0, 0, 0, 1810, 1808, 1, 0, 0, 0, 1810,
    1811, 1, 0, 0, 0, 1811, 1813, 1, 0, 0, 0, 1812, 1810, 1, 0, 0, 0, 1813, 1814, 3, 340,
    170, 0, 1814, 1815, 3, 112, 56, 0, 1815, 339, 1, 0, 0, 0, 1816, 1821, 3, 124, 62, 0,
    1817, 1818, 5, 86, 0, 0, 1818, 1820, 3, 16, 8, 0, 1819, 1817, 1, 0, 0, 0, 1820, 1823,
    1, 0, 0, 0, 1821, 1819, 1, 0, 0, 0, 1821, 1822, 1, 0, 0, 0, 1822, 341, 1, 0, 0, 0, 1823,
    1821, 1, 0, 0, 0, 1824, 1825, 5, 19, 0, 0, 1825, 1826, 3, 252, 126, 0, 1826, 343, 1,
    0, 0, 0, 1827, 1828, 5, 47, 0, 0, 1828, 1829, 3, 346, 173, 0, 1829, 1831, 3, 252, 126,
    0, 1830, 1832, 3, 334, 167, 0, 1831, 1830, 1, 0, 0, 0, 1831, 1832, 1, 0, 0, 0, 1832,
    1834, 1, 0, 0, 0, 1833, 1835, 3, 342, 171, 0, 1834, 1833, 1, 0, 0, 0, 1834, 1835, 1,
    0, 0, 0, 1835, 345, 1, 0, 0, 0, 1836, 1837, 5, 57, 0, 0, 1837, 1839, 3, 348, 174, 0,
    1838, 1840, 5, 63, 0, 0, 1839, 1838, 1, 0, 0, 0, 1839, 1840, 1, 0, 0, 0, 1840, 1841,
    1, 0, 0, 0, 1841, 1842, 5, 58, 0, 0, 1842, 347, 1, 0, 0, 0, 1843, 1848, 3, 350, 175,
    0, 1844, 1845, 5, 63, 0, 0, 1845, 1847, 3, 350, 175, 0, 1846, 1844, 1, 0, 0, 0, 1847,
    1850, 1, 0, 0, 0, 1848, 1846, 1, 0, 0, 0, 1848, 1849, 1, 0, 0, 0, 1849, 349, 1, 0, 0,
    0, 1850, 1848, 1, 0, 0, 0, 1851, 1853, 3, 156, 78, 0, 1852, 1851, 1, 0, 0, 0, 1853,
    1856, 1, 0, 0, 0, 1854, 1852, 1, 0, 0, 0, 1854, 1855, 1, 0, 0, 0, 1855, 1857, 1, 0, 0,
    0, 1856, 1854, 1, 0, 0, 0, 1857, 1858, 3, 116, 58, 0, 1858, 1859, 3, 112, 56, 0, 1859,
    1860, 5, 66, 0, 0, 1860, 1861, 3, 414, 207, 0, 1861, 351, 1, 0, 0, 0, 1862, 1865, 3,
    366, 183, 0, 1863, 1865, 3, 406, 203, 0, 1864, 1862, 1, 0, 0, 0, 1864, 1863, 1, 0,
    0, 0, 1865, 1869, 1, 0, 0, 0, 1866, 1868, 3, 360, 180, 0, 1867, 1866, 1, 0, 0, 0, 1868,
    1871, 1, 0, 0, 0, 1869, 1867, 1, 0, 0, 0, 1869, 1870, 1, 0, 0, 0, 1870, 353, 1, 0, 0,
    0, 1871, 1869, 1, 0, 0, 0, 1872, 1902, 3, 0, 0, 0, 1873, 1878, 3, 54, 27, 0, 1874, 1875,
    5, 61, 0, 0, 1875, 1877, 5, 62, 0, 0, 1876, 1874, 1, 0, 0, 0, 1877, 1880, 1, 0, 0, 0,
    1878, 1876, 1, 0, 0, 0, 1878, 1879, 1, 0, 0, 0, 1879, 1881, 1, 0, 0, 0, 1880, 1878,
    1, 0, 0, 0, 1881, 1882, 5, 65, 0, 0, 1882, 1883, 5, 9, 0, 0, 1883, 1902, 1, 0, 0, 0, 1884,
    1885, 5, 48, 0, 0, 1885, 1886, 5, 65, 0, 0, 1886, 1902, 5, 9, 0, 0, 1887, 1902, 5, 43,
    0, 0, 1888, 1889, 3, 54, 27, 0, 1889, 1890, 5, 65, 0, 0, 1890, 1891, 5, 43, 0, 0, 1891,
    1902, 1, 0, 0, 0, 1892, 1893, 5, 57, 0, 0, 1893, 1894, 3, 414, 207, 0, 1894, 1895,
    5, 58, 0, 0, 1895, 1902, 1, 0, 0, 0, 1896, 1902, 3, 372, 186, 0, 1897, 1902, 3, 380,
    190, 0, 1898, 1902, 3, 386, 193, 0, 1899, 1902, 3, 392, 196, 0, 1900, 1902, 3, 400,
    200, 0, 1901, 1872, 1, 0, 0, 0, 1901, 1873, 1, 0, 0, 0, 1901, 1884, 1, 0, 0, 0, 1901,
    1887, 1, 0, 0, 0, 1901, 1888, 1, 0, 0, 0, 1901, 1892, 1, 0, 0, 0, 1901, 1896, 1, 0, 0,
    0, 1901, 1897, 1, 0, 0, 0, 1901, 1898, 1, 0, 0, 0, 1901, 1899, 1, 0, 0, 0, 1901, 1900,
    1, 0, 0, 0, 1902, 355, 1, 0, 0, 0, 1903, 1904, 1, 0, 0, 0, 1904, 357, 1, 0, 0, 0, 1905,
    1934, 3, 0, 0, 0, 1906, 1911, 3, 54, 27, 0, 1907, 1908, 5, 61, 0, 0, 1908, 1910, 5,
    62, 0, 0, 1909, 1907, 1, 0, 0, 0, 1910, 1913, 1, 0, 0, 0, 1911, 1909, 1, 0, 0, 0, 1911,
    1912, 1, 0, 0, 0, 1912, 1914, 1, 0, 0, 0, 1913, 1911, 1, 0, 0, 0, 1914, 1915, 5, 65,
    0, 0, 1915, 1916, 5, 9, 0, 0, 1916, 1934, 1, 0, 0, 0, 1917, 1918, 5, 48, 0, 0, 1918,
    1919, 5, 65, 0, 0, 1919, 1934, 5, 9, 0, 0, 1920, 1934, 5, 43, 0, 0, 1921, 1922, 3, 54,
    27, 0, 1922, 1923, 5, 65, 0, 0, 1923, 1924, 5, 43, 0, 0, 1924, 1934, 1, 0, 0, 0, 1925,
    1926, 5, 57, 0, 0, 1926, 1927, 3, 414, 207, 0, 1927, 1928, 5, 58, 0, 0, 1928, 1934,
    1, 0, 0, 0, 1929, 1934, 3, 372, 186, 0, 1930, 1934, 3, 380, 190, 0, 1931, 1934, 3,
    392, 196, 0, 1932, 1934, 3, 400, 200, 0, 1933, 1905, 1, 0, 0, 0, 1933, 1906, 1, 0,
    0, 0, 1933, 1917, 1, 0, 0, 0, 1933, 1920, 1, 0, 0, 0, 1933, 1921, 1, 0, 0, 0, 1933, 1925,
    1, 0, 0, 0, 1933, 1929, 1, 0, 0, 0, 1933, 1930, 1, 0, 0, 0, 1933, 1931, 1, 0, 0, 0, 1933,
    1932, 1, 0, 0, 0, 1934, 359, 1, 0, 0, 0, 1935, 1941, 3, 374, 187, 0, 1936, 1941, 3,
    382, 191, 0, 1937, 1941, 3, 388, 194, 0, 1938, 1941, 3, 394, 197, 0, 1939, 1941,
    3, 402, 201, 0, 1940, 1935, 1, 0, 0, 0, 1940, 1936, 1, 0, 0, 0, 1940, 1937, 1, 0, 0,
    0, 1940, 1938, 1, 0, 0, 0, 1940, 1939, 1, 0, 0, 0, 1941, 361, 1, 0, 0, 0, 1942, 1943,
    1, 0, 0, 0, 1943, 363, 1, 0, 0, 0, 1944, 1949, 3, 374, 187, 0, 1945, 1949, 3, 382, 191,
    0, 1946, 1949, 3, 394, 197, 0, 1947, 1949, 3, 402, 201, 0, 1948, 1944, 1, 0, 0, 0,
    1948, 1945, 1, 0, 0, 0, 1948, 1946, 1, 0, 0, 0, 1948, 1947, 1, 0, 0, 0, 1949, 365, 1,
    0, 0, 0, 1950, 1991, 3, 0, 0, 0, 1951, 1956, 3, 54, 27, 0, 1952, 1953, 5, 61, 0, 0, 1953,
    1955, 5, 62, 0, 0, 1954, 1952, 1, 0, 0, 0, 1955, 1958, 1, 0, 0, 0, 1956, 1954, 1, 0,
    0, 0, 1956, 1957, 1, 0, 0, 0, 1957, 1959, 1, 0, 0, 0, 1958, 1956, 1, 0, 0, 0, 1959, 1960,
    5, 65, 0, 0, 1960, 1961, 5, 9, 0, 0, 1961, 1991, 1, 0, 0, 0, 1962, 1967, 3, 118, 59,
    0, 1963, 1964, 5, 61, 0, 0, 1964, 1966, 5, 62, 0, 0, 1965, 1963, 1, 0, 0, 0, 1966, 1969,
    1, 0, 0, 0, 1967, 1965, 1, 0, 0, 0, 1967, 1968, 1, 0, 0, 0, 1968, 1970, 1, 0, 0, 0, 1969,
    1967, 1, 0, 0, 0, 1970, 1971, 5, 65, 0, 0, 1971, 1972, 5, 9, 0, 0, 1972, 1991, 1, 0,
    0, 0, 1973, 1974, 5, 48, 0, 0, 1974, 1975, 5, 65, 0, 0, 1975, 1991, 5, 9, 0, 0, 1976,
    1991, 5, 43, 0, 0, 1977, 1978, 3, 54, 27, 0, 1978, 1979, 5, 65, 0, 0, 1979, 1980, 5,
    43, 0, 0, 1980, 1991, 1, 0, 0, 0, 1981, 1982, 5, 57, 0, 0, 1982, 1983, 3, 414, 207,
    0, 1983, 1984, 5, 58, 0, 0, 1984, 1991, 1, 0, 0, 0, 1985, 1991, 3, 376, 188, 0, 1986,
    1991, 3, 384, 192, 0, 1987, 1991, 3, 390, 195, 0, 1988, 1991, 3, 396, 198, 0, 1989,
    1991, 3, 404, 202, 0, 1990, 1950, 1, 0, 0, 0, 1990, 1951, 1, 0, 0, 0, 1990, 1962, 1,
    0, 0, 0, 1990, 1973, 1, 0, 0, 0, 1990, 1976, 1, 0, 0, 0, 1990, 1977, 1, 0, 0, 0, 1990,
    1981, 1, 0, 0, 0, 1990, 1985, 1, 0, 0, 0, 1990, 1986, 1, 0, 0, 0, 1990, 1987, 1, 0, 0,
    0, 1990, 1988, 1, 0, 0, 0, 1990, 1989, 1, 0, 0, 0, 1991, 367, 1, 0, 0, 0, 1992, 1993,
    1, 0, 0, 0, 1993, 369, 1, 0, 0, 0, 1994, 2034, 3, 0, 0, 0, 1995, 2000, 3, 54, 27, 0, 1996,
    1997, 5, 61, 0, 0, 1997, 1999, 5, 62, 0, 0, 1998, 1996, 1, 0, 0, 0, 1999, 2002, 1, 0,
    0, 0, 2000, 1998, 1, 0, 0, 0, 2000, 2001, 1, 0, 0, 0, 2001, 2003, 1, 0, 0, 0, 2002, 2000,
    1, 0, 0, 0, 2003, 2004, 5, 65, 0, 0, 2004, 2005, 5, 9, 0, 0, 2005, 2034, 1, 0, 0, 0, 2006,
    2011, 3, 118, 59, 0, 2007, 2008, 5, 61, 0, 0, 2008, 2010, 5, 62, 0, 0, 2009, 2007,
    1, 0, 0, 0, 2010, 2013, 1, 0, 0, 0, 2011, 2009, 1, 0, 0, 0, 2011, 2012, 1, 0, 0, 0, 2012,
    2014, 1, 0, 0, 0, 2013, 2011, 1, 0, 0, 0, 2014, 2015, 5, 65, 0, 0, 2015, 2016, 5, 9,
    0, 0, 2016, 2034, 1, 0, 0, 0, 2017, 2018, 5, 48, 0, 0, 2018, 2019, 5, 65, 0, 0, 2019,
    2034, 5, 9, 0, 0, 2020, 2034, 5, 43, 0, 0, 2021, 2022, 3, 54, 27, 0, 2022, 2023, 5,
    65, 0, 0, 2023, 2024, 5, 43, 0, 0, 2024, 2034, 1, 0, 0, 0, 2025, 2026, 5, 57, 0, 0, 2026,
    2027, 3, 414, 207, 0, 2027, 2028, 5, 58, 0, 0, 2028, 2034, 1, 0, 0, 0, 2029, 2034,
    3, 376, 188, 0, 2030, 2034, 3, 384, 192, 0, 2031, 2034, 3, 396, 198, 0, 2032, 2034,
    3, 404, 202, 0, 2033, 1994, 1, 0, 0, 0, 2033, 1995, 1, 0, 0, 0, 2033, 2006, 1, 0, 0,
    0, 2033, 2017, 1, 0, 0, 0, 2033, 2020, 1, 0, 0, 0, 2033, 2021, 1, 0, 0, 0, 2033, 2025,
    1, 0, 0, 0, 2033, 2029, 1, 0, 0, 0, 2033, 2030, 1, 0, 0, 0, 2033, 2031, 1, 0, 0, 0, 2033,
    2032, 1, 0, 0, 0, 2034, 371, 1, 0, 0, 0, 2035, 2037, 5, 31, 0, 0, 2036, 2038, 3, 42,
    21, 0, 2037, 2036, 1, 0, 0, 0, 2037, 2038, 1, 0, 0, 0, 2038, 2042, 1, 0, 0, 0, 2039,
    2041, 3, 230, 115, 0, 2040, 2039, 1, 0, 0, 0, 2041, 2044, 1, 0, 0, 0, 2042, 2040, 1,
    0, 0, 0, 2042, 2043, 1, 0, 0, 0, 2043, 2045, 1, 0, 0, 0, 2044, 2042, 1, 0, 0, 0, 2045,
    2056, 5, 102, 0, 0, 2046, 2050, 5, 65, 0, 0, 2047, 2049, 3, 230, 115, 0, 2048, 2047,
    1, 0, 0, 0, 2049, 2052, 1, 0, 0, 0, 2050, 2048, 1, 0, 0, 0, 2050, 2051, 1, 0, 0, 0, 2051,
    2053, 1, 0, 0, 0, 2052, 2050, 1, 0, 0, 0, 2053, 2055, 5, 102, 0, 0, 2054, 2046, 1, 0,
    0, 0, 2055, 2058, 1, 0, 0, 0, 2056, 2054, 1, 0, 0, 0, 2056, 2057, 1, 0, 0, 0, 2057, 2060,
    1, 0, 0, 0, 2058, 2056, 1, 0, 0, 0, 2059, 2061, 3, 378, 189, 0, 2060, 2059, 1, 0, 0,
    0, 2060, 2061, 1, 0, 0, 0, 2061, 2062, 1, 0, 0, 0, 2062, 2064, 5, 57, 0, 0, 2063, 2065,
    3, 398, 199, 0, 2064, 2063, 1, 0, 0, 0, 2064, 2065, 1, 0, 0, 0, 2065, 2066, 1, 0, 0,
    0, 2066, 2068, 5, 58, 0, 0, 2067, 2069, 3, 98, 49, 0, 2068, 2067, 1, 0, 0, 0, 2068,
    2069, 1, 0, 0, 0, 2069, 2119, 1, 0, 0, 0, 2070, 2071, 3, 58, 29, 0, 2071, 2072, 5, 65,
    0, 0, 2072, 2074, 5, 31, 0, 0, 2073, 2075, 3, 42, 21, 0, 2074, 2073, 1, 0, 0, 0, 2074,
    2075, 1, 0, 0, 0, 2075, 2079, 1, 0, 0, 0, 2076, 2078, 3, 230, 115, 0, 2077, 2076, 1,
    0, 0, 0, 2078, 2081, 1, 0, 0, 0, 2079, 2077, 1, 0, 0, 0, 2079, 2080, 1, 0, 0, 0, 2080,
    2082, 1, 0, 0, 0, 2081, 2079, 1, 0, 0, 0, 2082, 2084, 5, 102, 0, 0, 2083, 2085, 3, 378,
    189, 0, 2084, 2083, 1, 0, 0, 0, 2084, 2085, 1, 0, 0, 0, 2085, 2086, 1, 0, 0, 0, 2086,
    2088, 5, 57, 0, 0, 2087, 2089, 3, 398, 199, 0, 2088, 2087, 1, 0, 0, 0, 2088, 2089,
    1, 0, 0, 0, 2089, 2090, 1, 0, 0, 0, 2090, 2092, 5, 58, 0, 0, 2091, 2093, 3, 98, 49, 0,
    2092, 2091, 1, 0, 0, 0, 2092, 2093, 1, 0, 0, 0, 2093, 2119, 1, 0, 0, 0, 2094, 2095,
    3, 352, 176, 0, 2095, 2096, 5, 65, 0, 0, 2096, 2098, 5, 31, 0, 0, 2097, 2099, 3, 42,
    21, 0, 2098, 2097, 1, 0, 0, 0, 2098, 2099, 1, 0, 0, 0, 2099, 2103, 1, 0, 0, 0, 2100,
    2102, 3, 230, 115, 0, 2101, 2100, 1, 0, 0, 0, 2102, 2105, 1, 0, 0, 0, 2103, 2101, 1,
    0, 0, 0, 2103, 2104, 1, 0, 0, 0, 2104, 2106, 1, 0, 0, 0, 2105, 2103, 1, 0, 0, 0, 2106,
    2108, 5, 102, 0, 0, 2107, 2109, 3, 378, 189, 0, 2108, 2107, 1, 0, 0, 0, 2108, 2109,
    1, 0, 0, 0, 2109, 2110, 1, 0, 0, 0, 2110, 2112, 5, 57, 0, 0, 2111, 2113, 3, 398, 199,
    0, 2112, 2111, 1, 0, 0, 0, 2112, 2113, 1, 0, 0, 0, 2113, 2114, 1, 0, 0, 0, 2114, 2116,
    5, 58, 0, 0, 2115, 2117, 3, 98, 49, 0, 2116, 2115, 1, 0, 0, 0, 2116, 2117, 1, 0, 0, 0,
    2117, 2119, 1, 0, 0, 0, 2118, 2035, 1, 0, 0, 0, 2118, 2070, 1, 0, 0, 0, 2118, 2094,
    1, 0, 0, 0, 2119, 373, 1, 0, 0, 0, 2120, 2121, 5, 65, 0, 0, 2121, 2123, 5, 31, 0, 0, 2122,
    2124, 3, 42, 21, 0, 2123, 2122, 1, 0, 0, 0, 2123, 2124, 1, 0, 0, 0, 2124, 2128, 1, 0,
    0, 0, 2125, 2127, 3, 230, 115, 0, 2126, 2125, 1, 0, 0, 0, 2127, 2130, 1, 0, 0, 0, 2128,
    2126, 1, 0, 0, 0, 2128, 2129, 1, 0, 0, 0, 2129, 2131, 1, 0, 0, 0, 2130, 2128, 1, 0, 0,
    0, 2131, 2133, 5, 102, 0, 0, 2132, 2134, 3, 378, 189, 0, 2133, 2132, 1, 0, 0, 0, 2133,
    2134, 1, 0, 0, 0, 2134, 2135, 1, 0, 0, 0, 2135, 2137, 5, 57, 0, 0, 2136, 2138, 3, 398,
    199, 0, 2137, 2136, 1, 0, 0, 0, 2137, 2138, 1, 0, 0, 0, 2138, 2139, 1, 0, 0, 0, 2139,
    2141, 5, 58, 0, 0, 2140, 2142, 3, 98, 49, 0, 2141, 2140, 1, 0, 0, 0, 2141, 2142, 1,
    0, 0, 0, 2142, 375, 1, 0, 0, 0, 2143, 2145, 5, 31, 0, 0, 2144, 2146, 3, 42, 21, 0, 2145,
    2144, 1, 0, 0, 0, 2145, 2146, 1, 0, 0, 0, 2146, 2150, 1, 0, 0, 0, 2147, 2149, 3, 230,
    115, 0, 2148, 2147, 1, 0, 0, 0, 2149, 2152, 1, 0, 0, 0, 2150, 2148, 1, 0, 0, 0, 2150,
    2151, 1, 0, 0, 0, 2151, 2153, 1, 0, 0, 0, 2152, 2150, 1, 0, 0, 0, 2153, 2164, 5, 102,
    0, 0, 2154, 2158, 5, 65, 0, 0, 2155, 2157, 3, 230, 115, 0, 2156, 2155, 1, 0, 0, 0, 2157,
    2160, 1, 0, 0, 0, 2158, 2156, 1, 0, 0, 0, 2158, 2159, 1, 0, 0, 0, 2159, 2161, 1, 0, 0,
    0, 2160, 2158, 1, 0, 0, 0, 2161, 2163, 5, 102, 0, 0, 2162, 2154, 1, 0, 0, 0, 2163, 2166,
    1, 0, 0, 0, 2164, 2162, 1, 0, 0, 0, 2164, 2165, 1, 0, 0, 0, 2165, 2168, 1, 0, 0, 0, 2166,
    2164, 1, 0, 0, 0, 2167, 2169, 3, 378, 189, 0, 2168, 2167, 1, 0, 0, 0, 2168, 2169, 1,
    0, 0, 0, 2169, 2170, 1, 0, 0, 0, 2170, 2172, 5, 57, 0, 0, 2171, 2173, 3, 398, 199, 0,
    2172, 2171, 1, 0, 0, 0, 2172, 2173, 1, 0, 0, 0, 2173, 2174, 1, 0, 0, 0, 2174, 2176,
    5, 58, 0, 0, 2175, 2177, 3, 98, 49, 0, 2176, 2175, 1, 0, 0, 0, 2176, 2177, 1, 0, 0, 0,
    2177, 2203, 1, 0, 0, 0, 2178, 2179, 3, 58, 29, 0, 2179, 2180, 5, 65, 0, 0, 2180, 2182,
    5, 31, 0, 0, 2181, 2183, 3, 42, 21, 0, 2182, 2181, 1, 0, 0, 0, 2182, 2183, 1, 0, 0, 0,
    2183, 2187, 1, 0, 0, 0, 2184, 2186, 3, 230, 115, 0, 2185, 2184, 1, 0, 0, 0, 2186, 2189,
    1, 0, 0, 0, 2187, 2185, 1, 0, 0, 0, 2187, 2188, 1, 0, 0, 0, 2188, 2190, 1, 0, 0, 0, 2189,
    2187, 1, 0, 0, 0, 2190, 2192, 5, 102, 0, 0, 2191, 2193, 3, 378, 189, 0, 2192, 2191,
    1, 0, 0, 0, 2192, 2193, 1, 0, 0, 0, 2193, 2194, 1, 0, 0, 0, 2194, 2196, 5, 57, 0, 0, 2195,
    2197, 3, 398, 199, 0, 2196, 2195, 1, 0, 0, 0, 2196, 2197, 1, 0, 0, 0, 2197, 2198, 1,
    0, 0, 0, 2198, 2200, 5, 58, 0, 0, 2199, 2201, 3, 98, 49, 0, 2200, 2199, 1, 0, 0, 0, 2200,
    2201, 1, 0, 0, 0, 2201, 2203, 1, 0, 0, 0, 2202, 2143, 1, 0, 0, 0, 2202, 2178, 1, 0, 0,
    0, 2203, 377, 1, 0, 0, 0, 2204, 2208, 3, 42, 21, 0, 2205, 2206, 5, 68, 0, 0, 2206, 2208,
    5, 67, 0, 0, 2207, 2204, 1, 0, 0, 0, 2207, 2205, 1, 0, 0, 0, 2208, 379, 1, 0, 0, 0, 2209,
    2210, 3, 352, 176, 0, 2210, 2211, 5, 65, 0, 0, 2211, 2212, 5, 102, 0, 0, 2212, 2223,
    1, 0, 0, 0, 2213, 2214, 5, 40, 0, 0, 2214, 2215, 5, 65, 0, 0, 2215, 2223, 5, 102, 0,
    0, 2216, 2217, 3, 54, 27, 0, 2217, 2218, 5, 65, 0, 0, 2218, 2219, 5, 40, 0, 0, 2219,
    2220, 5, 65, 0, 0, 2220, 2221, 5, 102, 0, 0, 2221, 2223, 1, 0, 0, 0, 2222, 2209, 1,
    0, 0, 0, 2222, 2213, 1, 0, 0, 0, 2222, 2216, 1, 0, 0, 0, 2223, 381, 1, 0, 0, 0, 2224,
    2225, 5, 65, 0, 0, 2225, 2226, 5, 102, 0, 0, 2226, 383, 1, 0, 0, 0, 2227, 2228, 5, 40,
    0, 0, 2228, 2229, 5, 65, 0, 0, 2229, 2237, 5, 102, 0, 0, 2230, 2231, 3, 54, 27, 0, 2231,
    2232, 5, 65, 0, 0, 2232, 2233, 5, 40, 0, 0, 2233, 2234, 5, 65, 0, 0, 2234, 2235, 5,
    102, 0, 0, 2235, 2237, 1, 0, 0, 0, 2236, 2227, 1, 0, 0, 0, 2236, 2230, 1, 0, 0, 0, 2237,
    385, 1, 0, 0, 0, 2238, 2239, 3, 58, 29, 0, 2239, 2240, 5, 61, 0, 0, 2240, 2241, 3, 414,
    207, 0, 2241, 2242, 5, 62, 0, 0, 2242, 2249, 1, 0, 0, 0, 2243, 2244, 3, 358, 179, 0,
    2244, 2245, 5, 61, 0, 0, 2245, 2246, 3, 414, 207, 0, 2246, 2247, 5, 62, 0, 0, 2247,
    2249, 1, 0, 0, 0, 2248, 2238, 1, 0, 0, 0, 2248, 2243, 1, 0, 0, 0, 2249, 2257, 1, 0, 0,
    0, 2250, 2251, 3, 356, 178, 0, 2251, 2252, 5, 61, 0, 0, 2252, 2253, 3, 414, 207, 0,
    2253, 2254, 5, 62, 0, 0, 2254, 2256, 1, 0, 0, 0, 2255, 2250, 1, 0, 0, 0, 2256, 2259,
    1, 0, 0, 0, 2257, 2255, 1, 0, 0, 0, 2257, 2258, 1, 0, 0, 0, 2258, 387, 1, 0, 0, 0, 2259,
    2257, 1, 0, 0, 0, 2260, 2261, 3, 364, 182, 0, 2261, 2262, 5, 61, 0, 0, 2262, 2263,
    3, 414, 207, 0, 2263, 2264, 5, 62, 0, 0, 2264, 2272, 1, 0, 0, 0, 2265, 2266, 3, 362,
    181, 0, 2266, 2267, 5, 61, 0, 0, 2267, 2268, 3, 414, 207, 0, 2268, 2269, 5, 62, 0,
    0, 2269, 2271, 1, 0, 0, 0, 2270, 2265, 1, 0, 0, 0, 2271, 2274, 1, 0, 0, 0, 2272, 2270,
    1, 0, 0, 0, 2272, 2273, 1, 0, 0, 0, 2273, 389, 1, 0, 0, 0, 2274, 2272, 1, 0, 0, 0, 2275,
    2276, 3, 58, 29, 0, 2276, 2277, 5, 61, 0, 0, 2277, 2278, 3, 414, 207, 0, 2278, 2279,
    5, 62, 0, 0, 2279, 2286, 1, 0, 0, 0, 2280, 2281, 3, 370, 185, 0, 2281, 2282, 5, 61,
    0, 0, 2282, 2283, 3, 414, 207, 0, 2283, 2284, 5, 62, 0, 0, 2284, 2286, 1, 0, 0, 0, 2285,
    2275, 1, 0, 0, 0, 2285, 2280, 1, 0, 0, 0, 2286, 2294, 1, 0, 0, 0, 2287, 2288, 3, 368,
    184, 0, 2288, 2289, 5, 61, 0, 0, 2289, 2290, 3, 414, 207, 0, 2290, 2291, 5, 62, 0,
    0, 2291, 2293, 1, 0, 0, 0, 2292, 2287, 1, 0, 0, 0, 2293, 2296, 1, 0, 0, 0, 2294, 2292,
    1, 0, 0, 0, 2294, 2295, 1, 0, 0, 0, 2295, 391, 1, 0, 0, 0, 2296, 2294, 1, 0, 0, 0, 2297,
    2298, 3, 60, 30, 0, 2298, 2300, 5, 57, 0, 0, 2299, 2301, 3, 398, 199, 0, 2300, 2299,
    1, 0, 0, 0, 2300, 2301, 1, 0, 0, 0, 2301, 2302, 1, 0, 0, 0, 2302, 2303, 5, 58, 0, 0, 2303,
    2366, 1, 0, 0, 0, 2304, 2305, 3, 54, 27, 0, 2305, 2307, 5, 65, 0, 0, 2306, 2308, 3,
    42, 21, 0, 2307, 2306, 1, 0, 0, 0, 2307, 2308, 1, 0, 0, 0, 2308, 2309, 1, 0, 0, 0, 2309,
    2310, 5, 102, 0, 0, 2310, 2312, 5, 57, 0, 0, 2311, 2313, 3, 398, 199, 0, 2312, 2311,
    1, 0, 0, 0, 2312, 2313, 1, 0, 0, 0, 2313, 2314, 1, 0, 0, 0, 2314, 2315, 5, 58, 0, 0, 2315,
    2366, 1, 0, 0, 0, 2316, 2317, 3, 58, 29, 0, 2317, 2319, 5, 65, 0, 0, 2318, 2320, 3,
    42, 21, 0, 2319, 2318, 1, 0, 0, 0, 2319, 2320, 1, 0, 0, 0, 2320, 2321, 1, 0, 0, 0, 2321,
    2322, 5, 102, 0, 0, 2322, 2324, 5, 57, 0, 0, 2323, 2325, 3, 398, 199, 0, 2324, 2323,
    1, 0, 0, 0, 2324, 2325, 1, 0, 0, 0, 2325, 2326, 1, 0, 0, 0, 2326, 2327, 5, 58, 0, 0, 2327,
    2366, 1, 0, 0, 0, 2328, 2329, 3, 352, 176, 0, 2329, 2331, 5, 65, 0, 0, 2330, 2332,
    3, 42, 21, 0, 2331, 2330, 1, 0, 0, 0, 2331, 2332, 1, 0, 0, 0, 2332, 2333, 1, 0, 0, 0,
    2333, 2334, 5, 102, 0, 0, 2334, 2336, 5, 57, 0, 0, 2335, 2337, 3, 398, 199, 0, 2336,
    2335, 1, 0, 0, 0, 2336, 2337, 1, 0, 0, 0, 2337, 2338, 1, 0, 0, 0, 2338, 2339, 5, 58,
    0, 0, 2339, 2366, 1, 0, 0, 0, 2340, 2341, 5, 40, 0, 0, 2341, 2343, 5, 65, 0, 0, 2342,
    2344, 3, 42, 21, 0, 2343, 2342, 1, 0, 0, 0, 2343, 2344, 1, 0, 0, 0, 2344, 2345, 1, 0,
    0, 0, 2345, 2346, 5, 102, 0, 0, 2346, 2348, 5, 57, 0, 0, 2347, 2349, 3, 398, 199, 0,
    2348, 2347, 1, 0, 0, 0, 2348, 2349, 1, 0, 0, 0, 2349, 2350, 1, 0, 0, 0, 2350, 2366,
    5, 58, 0, 0, 2351, 2352, 3, 54, 27, 0, 2352, 2353, 5, 65, 0, 0, 2353, 2354, 5, 40, 0,
    0, 2354, 2356, 5, 65, 0, 0, 2355, 2357, 3, 42, 21, 0, 2356, 2355, 1, 0, 0, 0, 2356,
    2357, 1, 0, 0, 0, 2357, 2358, 1, 0, 0, 0, 2358, 2359, 5, 102, 0, 0, 2359, 2361, 5, 57,
    0, 0, 2360, 2362, 3, 398, 199, 0, 2361, 2360, 1, 0, 0, 0, 2361, 2362, 1, 0, 0, 0, 2362,
    2363, 1, 0, 0, 0, 2363, 2364, 5, 58, 0, 0, 2364, 2366, 1, 0, 0, 0, 2365, 2297, 1, 0,
    0, 0, 2365, 2304, 1, 0, 0, 0, 2365, 2316, 1, 0, 0, 0, 2365, 2328, 1, 0, 0, 0, 2365, 2340,
    1, 0, 0, 0, 2365, 2351, 1, 0, 0, 0, 2366, 393, 1, 0, 0, 0, 2367, 2369, 5, 65, 0, 0, 2368,
    2370, 3, 42, 21, 0, 2369, 2368, 1, 0, 0, 0, 2369, 2370, 1, 0, 0, 0, 2370, 2371, 1, 0,
    0, 0, 2371, 2372, 5, 102, 0, 0, 2372, 2374, 5, 57, 0, 0, 2373, 2375, 3, 398, 199, 0,
    2374, 2373, 1, 0, 0, 0, 2374, 2375, 1, 0, 0, 0, 2375, 2376, 1, 0, 0, 0, 2376, 2377,
    5, 58, 0, 0, 2377, 395, 1, 0, 0, 0, 2378, 2379, 3, 60, 30, 0, 2379, 2381, 5, 57, 0, 0,
    2380, 2382, 3, 398, 199, 0, 2381, 2380, 1, 0, 0, 0, 2381, 2382, 1, 0, 0, 0, 2382, 2383,
    1, 0, 0, 0, 2383, 2384, 5, 58, 0, 0, 2384, 2435, 1, 0, 0, 0, 2385, 2386, 3, 54, 27, 0,
    2386, 2388, 5, 65, 0, 0, 2387, 2389, 3, 42, 21, 0, 2388, 2387, 1, 0, 0, 0, 2388, 2389,
    1, 0, 0, 0, 2389, 2390, 1, 0, 0, 0, 2390, 2391, 5, 102, 0, 0, 2391, 2393, 5, 57, 0, 0,
    2392, 2394, 3, 398, 199, 0, 2393, 2392, 1, 0, 0, 0, 2393, 2394, 1, 0, 0, 0, 2394, 2395,
    1, 0, 0, 0, 2395, 2396, 5, 58, 0, 0, 2396, 2435, 1, 0, 0, 0, 2397, 2398, 3, 58, 29, 0,
    2398, 2400, 5, 65, 0, 0, 2399, 2401, 3, 42, 21, 0, 2400, 2399, 1, 0, 0, 0, 2400, 2401,
    1, 0, 0, 0, 2401, 2402, 1, 0, 0, 0, 2402, 2403, 5, 102, 0, 0, 2403, 2405, 5, 57, 0, 0,
    2404, 2406, 3, 398, 199, 0, 2405, 2404, 1, 0, 0, 0, 2405, 2406, 1, 0, 0, 0, 2406, 2407,
    1, 0, 0, 0, 2407, 2408, 5, 58, 0, 0, 2408, 2435, 1, 0, 0, 0, 2409, 2410, 5, 40, 0, 0,
    2410, 2412, 5, 65, 0, 0, 2411, 2413, 3, 42, 21, 0, 2412, 2411, 1, 0, 0, 0, 2412, 2413,
    1, 0, 0, 0, 2413, 2414, 1, 0, 0, 0, 2414, 2415, 5, 102, 0, 0, 2415, 2417, 5, 57, 0, 0,
    2416, 2418, 3, 398, 199, 0, 2417, 2416, 1, 0, 0, 0, 2417, 2418, 1, 0, 0, 0, 2418, 2419,
    1, 0, 0, 0, 2419, 2435, 5, 58, 0, 0, 2420, 2421, 3, 54, 27, 0, 2421, 2422, 5, 65, 0,
    0, 2422, 2423, 5, 40, 0, 0, 2423, 2425, 5, 65, 0, 0, 2424, 2426, 3, 42, 21, 0, 2425,
    2424, 1, 0, 0, 0, 2425, 2426, 1, 0, 0, 0, 2426, 2427, 1, 0, 0, 0, 2427, 2428, 5, 102,
    0, 0, 2428, 2430, 5, 57, 0, 0, 2429, 2431, 3, 398, 199, 0, 2430, 2429, 1, 0, 0, 0, 2430,
    2431, 1, 0, 0, 0, 2431, 2432, 1, 0, 0, 0, 2432, 2433, 5, 58, 0, 0, 2433, 2435, 1, 0,
    0, 0, 2434, 2378, 1, 0, 0, 0, 2434, 2385, 1, 0, 0, 0, 2434, 2397, 1, 0, 0, 0, 2434, 2409,
    1, 0, 0, 0, 2434, 2420, 1, 0, 0, 0, 2435, 397, 1, 0, 0, 0, 2436, 2441, 3, 414, 207, 0,
    2437, 2438, 5, 64, 0, 0, 2438, 2440, 3, 414, 207, 0, 2439, 2437, 1, 0, 0, 0, 2440,
    2443, 1, 0, 0, 0, 2441, 2439, 1, 0, 0, 0, 2441, 2442, 1, 0, 0, 0, 2442, 399, 1, 0, 0,
    0, 2443, 2441, 1, 0, 0, 0, 2444, 2445, 3, 58, 29, 0, 2445, 2447, 5, 90, 0, 0, 2446,
    2448, 3, 42, 21, 0, 2447, 2446, 1, 0, 0, 0, 2447, 2448, 1, 0, 0, 0, 2448, 2449, 1, 0,
    0, 0, 2449, 2450, 5, 102, 0, 0, 2450, 2492, 1, 0, 0, 0, 2451, 2452, 3, 12, 6, 0, 2452,
    2454, 5, 90, 0, 0, 2453, 2455, 3, 42, 21, 0, 2454, 2453, 1, 0, 0, 0, 2454, 2455, 1,
    0, 0, 0, 2455, 2456, 1, 0, 0, 0, 2456, 2457, 5, 102, 0, 0, 2457, 2492, 1, 0, 0, 0, 2458,
    2459, 3, 352, 176, 0, 2459, 2461, 5, 90, 0, 0, 2460, 2462, 3, 42, 21, 0, 2461, 2460,
    1, 0, 0, 0, 2461, 2462, 1, 0, 0, 0, 2462, 2463, 1, 0, 0, 0, 2463, 2464, 5, 102, 0, 0,
    2464, 2492, 1, 0, 0, 0, 2465, 2466, 5, 40, 0, 0, 2466, 2468, 5, 90, 0, 0, 2467, 2469,
    3, 42, 21, 0, 2468, 2467, 1, 0, 0, 0, 2468, 2469, 1, 0, 0, 0, 2469, 2470, 1, 0, 0, 0,
    2470, 2492, 5, 102, 0, 0, 2471, 2472, 3, 54, 27, 0, 2472, 2473, 5, 65, 0, 0, 2473,
    2474, 5, 40, 0, 0, 2474, 2476, 5, 90, 0, 0, 2475, 2477, 3, 42, 21, 0, 2476, 2475, 1,
    0, 0, 0, 2476, 2477, 1, 0, 0, 0, 2477, 2478, 1, 0, 0, 0, 2478, 2479, 5, 102, 0, 0, 2479,
    2492, 1, 0, 0, 0, 2480, 2481, 3, 16, 8, 0, 2481, 2483, 5, 90, 0, 0, 2482, 2484, 3, 42,
    21, 0, 2483, 2482, 1, 0, 0, 0, 2483, 2484, 1, 0, 0, 0, 2484, 2485, 1, 0, 0, 0, 2485,
    2486, 5, 31, 0, 0, 2486, 2492, 1, 0, 0, 0, 2487, 2488, 3, 30, 15, 0, 2488, 2489, 5,
    90, 0, 0, 2489, 2490, 5, 31, 0, 0, 2490, 2492, 1, 0, 0, 0, 2491, 2444, 1, 0, 0, 0, 2491,
    2451, 1, 0, 0, 0, 2491, 2458, 1, 0, 0, 0, 2491, 2465, 1, 0, 0, 0, 2491, 2471, 1, 0, 0,
    0, 2491, 2480, 1, 0, 0, 0, 2491, 2487, 1, 0, 0, 0, 2492, 401, 1, 0, 0, 0, 2493, 2495,
    5, 90, 0, 0, 2494, 2496, 3, 42, 21, 0, 2495, 2494, 1, 0, 0, 0, 2495, 2496, 1, 0, 0, 0,
    2496, 2497, 1, 0, 0, 0, 2497, 2498, 5, 102, 0, 0, 2498, 403, 1, 0, 0, 0, 2499, 2500,
    3, 58, 29, 0, 2500, 2502, 5, 90, 0, 0, 2501, 2503, 3, 42, 21, 0, 2502, 2501, 1, 0, 0,
    0, 2502, 2503, 1, 0, 0, 0, 2503, 2504, 1, 0, 0, 0, 2504, 2505, 5, 102, 0, 0, 2505, 2540,
    1, 0, 0, 0, 2506, 2507, 3, 12, 6, 0, 2507, 2509, 5, 90, 0, 0, 2508, 2510, 3, 42, 21,
    0, 2509, 2508, 1, 0, 0, 0, 2509, 2510, 1, 0, 0, 0, 2510, 2511, 1, 0, 0, 0, 2511, 2512,
    5, 102, 0, 0, 2512, 2540, 1, 0, 0, 0, 2513, 2514, 5, 40, 0, 0, 2514, 2516, 5, 90, 0,
    0, 2515, 2517, 3, 42, 21, 0, 2516, 2515, 1, 0, 0, 0, 2516, 2517, 1, 0, 0, 0, 2517, 2518,
    1, 0, 0, 0, 2518, 2540, 5, 102, 0, 0, 2519, 2520, 3, 54, 27, 0, 2520, 2521, 5, 65, 0,
    0, 2521, 2522, 5, 40, 0, 0, 2522, 2524, 5, 90, 0, 0, 2523, 2525, 3, 42, 21, 0, 2524,
    2523, 1, 0, 0, 0, 2524, 2525, 1, 0, 0, 0, 2525, 2526, 1, 0, 0, 0, 2526, 2527, 5, 102,
    0, 0, 2527, 2540, 1, 0, 0, 0, 2528, 2529, 3, 16, 8, 0, 2529, 2531, 5, 90, 0, 0, 2530,
    2532, 3, 42, 21, 0, 2531, 2530, 1, 0, 0, 0, 2531, 2532, 1, 0, 0, 0, 2532, 2533, 1, 0,
    0, 0, 2533, 2534, 5, 31, 0, 0, 2534, 2540, 1, 0, 0, 0, 2535, 2536, 3, 30, 15, 0, 2536,
    2537, 5, 90, 0, 0, 2537, 2538, 5, 31, 0, 0, 2538, 2540, 1, 0, 0, 0, 2539, 2499, 1, 0,
    0, 0, 2539, 2506, 1, 0, 0, 0, 2539, 2513, 1, 0, 0, 0, 2539, 2519, 1, 0, 0, 0, 2539, 2528,
    1, 0, 0, 0, 2539, 2535, 1, 0, 0, 0, 2540, 405, 1, 0, 0, 0, 2541, 2542, 5, 31, 0, 0, 2542,
    2543, 3, 4, 2, 0, 2543, 2545, 3, 408, 204, 0, 2544, 2546, 3, 32, 16, 0, 2545, 2544,
    1, 0, 0, 0, 2545, 2546, 1, 0, 0, 0, 2546, 2564, 1, 0, 0, 0, 2547, 2548, 5, 31, 0, 0, 2548,
    2549, 3, 14, 7, 0, 2549, 2551, 3, 408, 204, 0, 2550, 2552, 3, 32, 16, 0, 2551, 2550,
    1, 0, 0, 0, 2551, 2552, 1, 0, 0, 0, 2552, 2564, 1, 0, 0, 0, 2553, 2554, 5, 31, 0, 0, 2554,
    2555, 3, 4, 2, 0, 2555, 2556, 3, 32, 16, 0, 2556, 2557, 3, 248, 124, 0, 2557, 2564,
    1, 0, 0, 0, 2558, 2559, 5, 31, 0, 0, 2559, 2560, 3, 14, 7, 0, 2560, 2561, 3, 32, 16,
    0, 2561, 2562, 3, 248, 124, 0, 2562, 2564, 1, 0, 0, 0, 2563, 2541, 1, 0, 0, 0, 2563,
    2547, 1, 0, 0, 0, 2563, 2553, 1, 0, 0, 0, 2563, 2558, 1, 0, 0, 0, 2564, 407, 1, 0, 0,
    0, 2565, 2569, 3, 410, 205, 0, 2566, 2568, 3, 410, 205, 0, 2567, 2566, 1, 0, 0, 0,
    2568, 2571, 1, 0, 0, 0, 2569, 2567, 1, 0, 0, 0, 2569, 2570, 1, 0, 0, 0, 2570, 409, 1,
    0, 0, 0, 2571, 2569, 1, 0, 0, 0, 2572, 2574, 3, 230, 115, 0, 2573, 2572, 1, 0, 0, 0,
    2574, 2577, 1, 0, 0, 0, 2575, 2573, 1, 0, 0, 0, 2575, 2576, 1, 0, 0, 0, 2576, 2578,
    1, 0, 0, 0, 2577, 2575, 1, 0, 0, 0, 2578, 2579, 5, 61, 0, 0, 2579, 2580, 3, 414, 207,
    0, 2580, 2581, 5, 62, 0, 0, 2581, 411, 1, 0, 0, 0, 2582, 2583, 3, 414, 207, 0, 2583,
    413, 1, 0, 0, 0, 2584, 2587, 3, 416, 208, 0, 2585, 2587, 3, 424, 212, 0, 2586, 2584,
    1, 0, 0, 0, 2586, 2585, 1, 0, 0, 0, 2587, 415, 1, 0, 0, 0, 2588, 2589, 3, 418, 209, 0,
    2589, 2590, 5, 89, 0, 0, 2590, 2591, 3, 422, 211, 0, 2591, 417, 1, 0, 0, 0, 2592, 2603,
    5, 102, 0, 0, 2593, 2595, 5, 57, 0, 0, 2594, 2596, 3, 150, 75, 0, 2595, 2594, 1, 0,
    0, 0, 2595, 2596, 1, 0, 0, 0, 2596, 2597, 1, 0, 0, 0, 2597, 2603, 5, 58, 0, 0, 2598,
    2599, 5, 57, 0, 0, 2599, 2600, 3, 420, 210, 0, 2600, 2601, 5, 58, 0, 0, 2601, 2603,
    1, 0, 0, 0, 2602, 2592, 1, 0, 0, 0, 2602, 2593, 1, 0, 0, 0, 2602, 2598, 1, 0, 0, 0, 2603,
    419, 1, 0, 0, 0, 2604, 2609, 5, 102, 0, 0, 2605, 2606, 5, 64, 0, 0, 2606, 2608, 5, 102,
    0, 0, 2607, 2605, 1, 0, 0, 0, 2608, 2611, 1, 0, 0, 0, 2609, 2607, 1, 0, 0, 0, 2609, 2610,
    1, 0, 0, 0, 2610, 421, 1, 0, 0, 0, 2611, 2609, 1, 0, 0, 0, 2612, 2615, 3, 414, 207, 0,
    2613, 2615, 3, 252, 126, 0, 2614, 2612, 1, 0, 0, 0, 2614, 2613, 1, 0, 0, 0, 2615, 423,
    1, 0, 0, 0, 2616, 2619, 3, 432, 216, 0, 2617, 2619, 3, 426, 213, 0, 2618, 2616, 1,
    0, 0, 0, 2618, 2617, 1, 0, 0, 0, 2619, 425, 1, 0, 0, 0, 2620, 2621, 3, 428, 214, 0, 2621,
    2622, 3, 430, 215, 0, 2622, 2623, 3, 414, 207, 0, 2623, 427, 1, 0, 0, 0, 2624, 2628,
    3, 58, 29, 0, 2625, 2628, 3, 380, 190, 0, 2626, 2628, 3, 386, 193, 0, 2627, 2624,
    1, 0, 0, 0, 2627, 2625, 1, 0, 0, 0, 2627, 2626, 1, 0, 0, 0, 2628, 429, 1, 0, 0, 0, 2629,
    2630, 7, 3, 0, 0, 2630, 431, 1, 0, 0, 0, 2631, 2639, 3, 434, 217, 0, 2632, 2633, 3,
    434, 217, 0, 2633, 2634, 5, 71, 0, 0, 2634, 2635, 3, 414, 207, 0, 2635, 2636, 5, 72,
    0, 0, 2636, 2637, 3, 432, 216, 0, 2637, 2639, 1, 0, 0, 0, 2638, 2631, 1, 0, 0, 0, 2638,
    2632, 1, 0, 0, 0, 2639, 433, 1, 0, 0, 0, 2640, 2641, 6, 217, -1, 0, 2641, 2642, 3, 436,
    218, 0, 2642, 2648, 1, 0, 0, 0, 2643, 2644, 10, 1, 0, 0, 2644, 2645, 5, 78, 0, 0, 2645,
    2647, 3, 436, 218, 0, 2646, 2643, 1, 0, 0, 0, 2647, 2650, 1, 0, 0, 0, 2648, 2646, 1,
    0, 0, 0, 2648, 2649, 1, 0, 0, 0, 2649, 435, 1, 0, 0, 0, 2650, 2648, 1, 0, 0, 0, 2651,
    2652, 6, 218, -1, 0, 2652, 2653, 3, 438, 219, 0, 2653, 2659, 1, 0, 0, 0, 2654, 2655,
    10, 1, 0, 0, 2655, 2656, 5, 77, 0, 0, 2656, 2658, 3, 438, 219, 0, 2657, 2654, 1, 0,
    0, 0, 2658, 2661, 1, 0, 0, 0, 2659, 2657, 1, 0, 0, 0, 2659, 2660, 1, 0, 0, 0, 2660, 437,
    1, 0, 0, 0, 2661, 2659, 1, 0, 0, 0, 2662, 2663, 6, 219, -1, 0, 2663, 2664, 3, 440, 220,
    0, 2664, 2670, 1, 0, 0, 0, 2665, 2666, 10, 1, 0, 0, 2666, 2667, 5, 86, 0, 0, 2667, 2669,
    3, 440, 220, 0, 2668, 2665, 1, 0, 0, 0, 2669, 2672, 1, 0, 0, 0, 2670, 2668, 1, 0, 0,
    0, 2670, 2671, 1, 0, 0, 0, 2671, 439, 1, 0, 0, 0, 2672, 2670, 1, 0, 0, 0, 2673, 2674,
    6, 220, -1, 0, 2674, 2675, 3, 442, 221, 0, 2675, 2681, 1, 0, 0, 0, 2676, 2677, 10,
    1, 0, 0, 2677, 2678, 5, 87, 0, 0, 2678, 2680, 3, 442, 221, 0, 2679, 2676, 1, 0, 0, 0,
    2680, 2683, 1, 0, 0, 0, 2681, 2679, 1, 0, 0, 0, 2681, 2682, 1, 0, 0, 0, 2682, 441, 1,
    0, 0, 0, 2683, 2681, 1, 0, 0, 0, 2684, 2685, 6, 221, -1, 0, 2685, 2686, 3, 444, 222,
    0, 2686, 2692, 1, 0, 0, 0, 2687, 2688, 10, 1, 0, 0, 2688, 2689, 5, 85, 0, 0, 2689, 2691,
    3, 444, 222, 0, 2690, 2687, 1, 0, 0, 0, 2691, 2694, 1, 0, 0, 0, 2692, 2690, 1, 0, 0,
    0, 2692, 2693, 1, 0, 0, 0, 2693, 443, 1, 0, 0, 0, 2694, 2692, 1, 0, 0, 0, 2695, 2696,
    6, 222, -1, 0, 2696, 2697, 3, 446, 223, 0, 2697, 2706, 1, 0, 0, 0, 2698, 2699, 10,
    2, 0, 0, 2699, 2700, 5, 73, 0, 0, 2700, 2705, 3, 446, 223, 0, 2701, 2702, 10, 1, 0,
    0, 2702, 2703, 5, 76, 0, 0, 2703, 2705, 3, 446, 223, 0, 2704, 2698, 1, 0, 0, 0, 2704,
    2701, 1, 0, 0, 0, 2705, 2708, 1, 0, 0, 0, 2706, 2704, 1, 0, 0, 0, 2706, 2707, 1, 0, 0,
    0, 2707, 445, 1, 0, 0, 0, 2708, 2706, 1, 0, 0, 0, 2709, 2710, 6, 223, -1, 0, 2710, 2711,
    3, 448, 224, 0, 2711, 2729, 1, 0, 0, 0, 2712, 2713, 10, 5, 0, 0, 2713, 2714, 5, 68,
    0, 0, 2714, 2728, 3, 448, 224, 0, 2715, 2716, 10, 4, 0, 0, 2716, 2717, 5, 67, 0, 0,
    2717, 2728, 3, 448, 224, 0, 2718, 2719, 10, 3, 0, 0, 2719, 2720, 5, 74, 0, 0, 2720,
    2728, 3, 448, 224, 0, 2721, 2722, 10, 2, 0, 0, 2722, 2723, 5, 75, 0, 0, 2723, 2728,
    3, 448, 224, 0, 2724, 2725, 10, 1, 0, 0, 2725, 2726, 5, 26, 0, 0, 2726, 2728, 3, 12,
    6, 0, 2727, 2712, 1, 0, 0, 0, 2727, 2715, 1, 0, 0, 0, 2727, 2718, 1, 0, 0, 0, 2727, 2721,
    1, 0, 0, 0, 2727, 2724, 1, 0, 0, 0, 2728, 2731, 1, 0, 0, 0, 2729, 2727, 1, 0, 0, 0, 2729,
    2730, 1, 0, 0, 0, 2730, 447, 1, 0, 0, 0, 2731, 2729, 1, 0, 0, 0, 2732, 2733, 6, 224,
    -1, 0, 2733, 2734, 3, 450, 225, 0, 2734, 2750, 1, 0, 0, 0, 2735, 2736, 10, 3, 0, 0,
    2736, 2737, 5, 68, 0, 0, 2737, 2738, 5, 68, 0, 0, 2738, 2749, 3, 450, 225, 0, 2739,
    2740, 10, 2, 0, 0, 2740, 2741, 5, 67, 0, 0, 2741, 2742, 5, 67, 0, 0, 2742, 2749, 3,
    450, 225, 0, 2743, 2744, 10, 1, 0, 0, 2744, 2745, 5, 67, 0, 0, 2745, 2746, 5, 67, 0,
    0, 2746, 2747, 5, 67, 0, 0, 2747, 2749, 3, 450, 225, 0, 2748, 2735, 1, 0, 0, 0, 2748,
    2739, 1, 0, 0, 0, 2748, 2743, 1, 0, 0, 0, 2749, 2752, 1, 0, 0, 0, 2750, 2748, 1, 0, 0,
    0, 2750, 2751, 1, 0, 0, 0, 2751, 449, 1, 0, 0, 0, 2752, 2750, 1, 0, 0, 0, 2753, 2754,
    6, 225, -1, 0, 2754, 2755, 3, 452, 226, 0, 2755, 2764, 1, 0, 0, 0, 2756, 2757, 10,
    2, 0, 0, 2757, 2758, 5, 81, 0, 0, 2758, 2763, 3, 452, 226, 0, 2759, 2760, 10, 1, 0,
    0, 2760, 2761, 5, 82, 0, 0, 2761, 2763, 3, 452, 226, 0, 2762, 2756, 1, 0, 0, 0, 2762,
    2759, 1, 0, 0, 0, 2763, 2766, 1, 0, 0, 0, 2764, 2762, 1, 0, 0, 0, 2764, 2765, 1, 0, 0,
    0, 2765, 451, 1, 0, 0, 0, 2766, 2764, 1, 0, 0, 0, 2767, 2768, 6, 226, -1, 0, 2768, 2769,
    3, 454, 227, 0, 2769, 2781, 1, 0, 0, 0, 2770, 2771, 10, 3, 0, 0, 2771, 2772, 5, 83,
    0, 0, 2772, 2780, 3, 454, 227, 0, 2773, 2774, 10, 2, 0, 0, 2774, 2775, 5, 84, 0, 0,
    2775, 2780, 3, 454, 227, 0, 2776, 2777, 10, 1, 0, 0, 2777, 2778, 5, 88, 0, 0, 2778,
    2780, 3, 454, 227, 0, 2779, 2770, 1, 0, 0, 0, 2779, 2773, 1, 0, 0, 0, 2779, 2776, 1,
    0, 0, 0, 2780, 2783, 1, 0, 0, 0, 2781, 2779, 1, 0, 0, 0, 2781, 2782, 1, 0, 0, 0, 2782,
    453, 1, 0, 0, 0, 2783, 2781, 1, 0, 0, 0, 2784, 2792, 3, 456, 228, 0, 2785, 2792, 3,
    458, 229, 0, 2786, 2787, 5, 81, 0, 0, 2787, 2792, 3, 454, 227, 0, 2788, 2789, 5, 82,
    0, 0, 2789, 2792, 3, 454, 227, 0, 2790, 2792, 3, 460, 230, 0, 2791, 2784, 1, 0, 0,
    0, 2791, 2785, 1, 0, 0, 0, 2791, 2786, 1, 0, 0, 0, 2791, 2788, 1, 0, 0, 0, 2791, 2790,
    1, 0, 0, 0, 2792, 455, 1, 0, 0, 0, 2793, 2794, 5, 79, 0, 0, 2794, 2795, 3, 454, 227,
    0, 2795, 457, 1, 0, 0, 0, 2796, 2797, 5, 80, 0, 0, 2797, 2798, 3, 454, 227, 0, 2798,
    459, 1, 0, 0, 0, 2799, 2806, 3, 462, 231, 0, 2800, 2801, 5, 70, 0, 0, 2801, 2806, 3,
    454, 227, 0, 2802, 2803, 5, 69, 0, 0, 2803, 2806, 3, 454, 227, 0, 2804, 2806, 3, 472,
    236, 0, 2805, 2799, 1, 0, 0, 0, 2805, 2800, 1, 0, 0, 0, 2805, 2802, 1, 0, 0, 0, 2805,
    2804, 1, 0, 0, 0, 2806, 461, 1, 0, 0, 0, 2807, 2810, 3, 352, 176, 0, 2808, 2810, 3,
    58, 29, 0, 2809, 2807, 1, 0, 0, 0, 2809, 2808, 1, 0, 0, 0, 2810, 2815, 1, 0, 0, 0, 2811,
    2814, 3, 466, 233, 0, 2812, 2814, 3, 470, 235, 0, 2813, 2811, 1, 0, 0, 0, 2813, 2812,
    1, 0, 0, 0, 2814, 2817, 1, 0, 0, 0, 2815, 2813, 1, 0, 0, 0, 2815, 2816, 1, 0, 0, 0, 2816,
    463, 1, 0, 0, 0, 2817, 2815, 1, 0, 0, 0, 2818, 2819, 3, 462, 231, 0, 2819, 2820, 5,
    79, 0, 0, 2820, 465, 1, 0, 0, 0, 2821, 2822, 5, 79, 0, 0, 2822, 467, 1, 0, 0, 0, 2823,
    2824, 3, 462, 231, 0, 2824, 2825, 5, 80, 0, 0, 2825, 469, 1, 0, 0, 0, 2826, 2827, 5,
    80, 0, 0, 2827, 471, 1, 0, 0, 0, 2828, 2829, 5, 57, 0, 0, 2829, 2830, 3, 4, 2, 0, 2830,
    2831, 5, 58, 0, 0, 2831, 2832, 3, 454, 227, 0, 2832, 2856, 1, 0, 0, 0, 2833, 2834,
    5, 57, 0, 0, 2834, 2838, 3, 12, 6, 0, 2835, 2837, 3, 40, 20, 0, 2836, 2835, 1, 0, 0,
    0, 2837, 2840, 1, 0, 0, 0, 2838, 2836, 1, 0, 0, 0, 2838, 2839, 1, 0, 0, 0, 2839, 2841,
    1, 0, 0, 0, 2840, 2838, 1, 0, 0, 0, 2841, 2842, 5, 58, 0, 0, 2842, 2843, 3, 460, 230,
    0, 2843, 2856, 1, 0, 0, 0, 2844, 2845, 5, 57, 0, 0, 2845, 2849, 3, 12, 6, 0, 2846, 2848,
    3, 40, 20, 0, 2847, 2846, 1, 0, 0, 0, 2848, 2851, 1, 0, 0, 0, 2849, 2847, 1, 0, 0, 0,
    2849, 2850, 1, 0, 0, 0, 2850, 2852, 1, 0, 0, 0, 2851, 2849, 1, 0, 0, 0, 2852, 2853,
    5, 58, 0, 0, 2853, 2854, 3, 416, 208, 0, 2854, 2856, 1, 0, 0, 0, 2855, 2828, 1, 0, 0,
    0, 2855, 2833, 1, 0, 0, 0, 2855, 2844, 1, 0, 0, 0, 2856, 473, 1, 0, 0, 0, 324, 478, 483,
    490, 494, 498, 507, 511, 515, 517, 523, 528, 535, 540, 542, 548, 553, 558, 563,
    574, 588, 593, 601, 608, 614, 619, 630, 633, 647, 652, 657, 662, 668, 678, 686,
    696, 704, 716, 720, 725, 731, 739, 748, 759, 788, 792, 797, 803, 806, 809, 821,
    832, 846, 853, 862, 869, 874, 889, 896, 902, 906, 910, 914, 918, 923, 927, 931,
    933, 938, 945, 950, 952, 958, 963, 967, 986, 991, 1007, 1012, 1018, 1024, 1026,
    1030, 1035, 1039, 1046, 1053, 1061, 1064, 1069, 1077, 1082, 1089, 1096, 1101,
    1107, 1119, 1124, 1128, 1138, 1143, 1151, 1154, 1159, 1167, 1170, 1175, 1180,
    1185, 1190, 1197, 1202, 1210, 1215, 1220, 1225, 1231, 1237, 1240, 1243, 1252,
    1258, 1264, 1267, 1270, 1278, 1283, 1288, 1294, 1297, 1308, 1317, 1327, 1332,
    1343, 1348, 1360, 1365, 1377, 1387, 1392, 1400, 1403, 1410, 1418, 1424, 1433,
    1443, 1447, 1450, 1459, 1473, 1476, 1485, 1490, 1498, 1504, 1512, 1524, 1531,
    1545, 1567, 1601, 1613, 1619, 1631, 1644, 1670, 1674, 1679, 1683, 1687, 1695,
    1699, 1703, 1710, 1719, 1727, 1742, 1754, 1760, 1766, 1787, 1792, 1798, 1810,
    1821, 1831, 1834, 1839, 1848, 1854, 1864, 1869, 1878, 1901, 1911, 1933, 1940,
    1948, 1956, 1967, 1990, 2000, 2011, 2033, 2037, 2042, 2050, 2056, 2060, 2064,
    2068, 2074, 2079, 2084, 2088, 2092, 2098, 2103, 2108, 2112, 2116, 2118, 2123,
    2128, 2133, 2137, 2141, 2145, 2150, 2158, 2164, 2168, 2172, 2176, 2182, 2187,
    2192, 2196, 2200, 2202, 2207, 2222, 2236, 2248, 2257, 2272, 2285, 2294, 2300,
    2307, 2312, 2319, 2324, 2331, 2336, 2343, 2348, 2356, 2361, 2365, 2369, 2374,
    2381, 2388, 2393, 2400, 2405, 2412, 2417, 2425, 2430, 2434, 2441, 2447, 2454,
    2461, 2468, 2476, 2483, 2491, 2495, 2502, 2509, 2516, 2524, 2531, 2539, 2545,
    2551, 2563, 2569, 2575, 2586, 2595, 2602, 2609, 2614, 2618, 2627, 2638, 2648,
    2659, 2670, 2681, 2692, 2704, 2706, 2727, 2729, 2748, 2750, 2762, 2764, 2779,
    2781, 2791, 2805, 2809, 2813, 2815, 2838, 2849, 2855
];
Java8Parser.vocabulary = new antlr.Vocabulary(Java8Parser.literalNames, Java8Parser.symbolicNames, []);
Java8Parser.decisionsToDFA = Java8Parser._ATN.decisionToState.map((ds, index) => new antlr.DFA(ds, index));
class LiteralContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IntegerLiteral() {
        return this.getToken(Java8Parser.IntegerLiteral, 0);
    }
    FloatingPointLiteral() {
        return this.getToken(Java8Parser.FloatingPointLiteral, 0);
    }
    BooleanLiteral() {
        return this.getToken(Java8Parser.BooleanLiteral, 0);
    }
    CharacterLiteral() {
        return this.getToken(Java8Parser.CharacterLiteral, 0);
    }
    StringLiteral() {
        return this.getToken(Java8Parser.StringLiteral, 0);
    }
    NullLiteral() {
        return this.getToken(Java8Parser.NullLiteral, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_literal;
    }
    enterRule(listener) {
        if (listener.enterLiteral) {
            listener.enterLiteral(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLiteral) {
            listener.exitLiteral(this);
        }
    }
}
exports.LiteralContext = LiteralContext;
class TypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primitiveType() {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    referenceType() {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_type;
    }
    enterRule(listener) {
        if (listener.enterType) {
            listener.enterType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitType) {
            listener.exitType(this);
        }
    }
}
exports.TypeContext = TypeContext;
class PrimitiveTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    numericType() {
        return this.getRuleContext(0, NumericTypeContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    BOOLEAN() {
        return this.getToken(Java8Parser.BOOLEAN, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primitiveType;
    }
    enterRule(listener) {
        if (listener.enterPrimitiveType) {
            listener.enterPrimitiveType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimitiveType) {
            listener.exitPrimitiveType(this);
        }
    }
}
exports.PrimitiveTypeContext = PrimitiveTypeContext;
class NumericTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    integralType() {
        return this.getRuleContext(0, IntegralTypeContext);
    }
    floatingPointType() {
        return this.getRuleContext(0, FloatingPointTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_numericType;
    }
    enterRule(listener) {
        if (listener.enterNumericType) {
            listener.enterNumericType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNumericType) {
            listener.exitNumericType(this);
        }
    }
}
exports.NumericTypeContext = NumericTypeContext;
class IntegralTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BYTE() {
        return this.getToken(Java8Parser.BYTE, 0);
    }
    SHORT() {
        return this.getToken(Java8Parser.SHORT, 0);
    }
    INT() {
        return this.getToken(Java8Parser.INT, 0);
    }
    LONG() {
        return this.getToken(Java8Parser.LONG, 0);
    }
    CHAR() {
        return this.getToken(Java8Parser.CHAR, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_integralType;
    }
    enterRule(listener) {
        if (listener.enterIntegralType) {
            listener.enterIntegralType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIntegralType) {
            listener.exitIntegralType(this);
        }
    }
}
exports.IntegralTypeContext = IntegralTypeContext;
class FloatingPointTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FLOAT() {
        return this.getToken(Java8Parser.FLOAT, 0);
    }
    DOUBLE() {
        return this.getToken(Java8Parser.DOUBLE, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_floatingPointType;
    }
    enterRule(listener) {
        if (listener.enterFloatingPointType) {
            listener.enterFloatingPointType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFloatingPointType) {
            listener.exitFloatingPointType(this);
        }
    }
}
exports.FloatingPointTypeContext = FloatingPointTypeContext;
class ReferenceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classOrInterfaceType() {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    typeVariable() {
        return this.getRuleContext(0, TypeVariableContext);
    }
    arrayType() {
        return this.getRuleContext(0, ArrayTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_referenceType;
    }
    enterRule(listener) {
        if (listener.enterReferenceType) {
            listener.enterReferenceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReferenceType) {
            listener.exitReferenceType(this);
        }
    }
}
exports.ReferenceTypeContext = ReferenceTypeContext;
class ClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classType_lfno_classOrInterfaceType() {
        return this.getRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
    }
    interfaceType_lfno_classOrInterfaceType() {
        return this.getRuleContext(0, InterfaceType_lfno_classOrInterfaceTypeContext);
    }
    classType_lf_classOrInterfaceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassType_lf_classOrInterfaceTypeContext);
        }
        return this.getRuleContext(i, ClassType_lf_classOrInterfaceTypeContext);
    }
    interfaceType_lf_classOrInterfaceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceType_lf_classOrInterfaceTypeContext);
        }
        return this.getRuleContext(i, InterfaceType_lf_classOrInterfaceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterClassOrInterfaceType) {
            listener.enterClassOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassOrInterfaceType) {
            listener.exitClassOrInterfaceType(this);
        }
    }
}
exports.ClassOrInterfaceTypeContext = ClassOrInterfaceTypeContext;
class ClassTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    classOrInterfaceType() {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classType;
    }
    enterRule(listener) {
        if (listener.enterClassType) {
            listener.enterClassType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassType) {
            listener.exitClassType(this);
        }
    }
}
exports.ClassTypeContext = ClassTypeContext;
class ClassType_lf_classOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classType_lf_classOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterClassType_lf_classOrInterfaceType) {
            listener.enterClassType_lf_classOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassType_lf_classOrInterfaceType) {
            listener.exitClassType_lf_classOrInterfaceType(this);
        }
    }
}
exports.ClassType_lf_classOrInterfaceTypeContext = ClassType_lf_classOrInterfaceTypeContext;
class ClassType_lfno_classOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classType_lfno_classOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterClassType_lfno_classOrInterfaceType) {
            listener.enterClassType_lfno_classOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassType_lfno_classOrInterfaceType) {
            listener.exitClassType_lfno_classOrInterfaceType(this);
        }
    }
}
exports.ClassType_lfno_classOrInterfaceTypeContext = ClassType_lfno_classOrInterfaceTypeContext;
class InterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classType() {
        return this.getRuleContext(0, ClassTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceType;
    }
    enterRule(listener) {
        if (listener.enterInterfaceType) {
            listener.enterInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceType) {
            listener.exitInterfaceType(this);
        }
    }
}
exports.InterfaceTypeContext = InterfaceTypeContext;
class InterfaceType_lf_classOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classType_lf_classOrInterfaceType() {
        return this.getRuleContext(0, ClassType_lf_classOrInterfaceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceType_lf_classOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterInterfaceType_lf_classOrInterfaceType) {
            listener.enterInterfaceType_lf_classOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceType_lf_classOrInterfaceType) {
            listener.exitInterfaceType_lf_classOrInterfaceType(this);
        }
    }
}
exports.InterfaceType_lf_classOrInterfaceTypeContext = InterfaceType_lf_classOrInterfaceTypeContext;
class InterfaceType_lfno_classOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classType_lfno_classOrInterfaceType() {
        return this.getRuleContext(0, ClassType_lfno_classOrInterfaceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceType_lfno_classOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterInterfaceType_lfno_classOrInterfaceType) {
            listener.enterInterfaceType_lfno_classOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceType_lfno_classOrInterfaceType) {
            listener.exitInterfaceType_lfno_classOrInterfaceType(this);
        }
    }
}
exports.InterfaceType_lfno_classOrInterfaceTypeContext = InterfaceType_lfno_classOrInterfaceTypeContext;
class TypeVariableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeVariable;
    }
    enterRule(listener) {
        if (listener.enterTypeVariable) {
            listener.enterTypeVariable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeVariable) {
            listener.exitTypeVariable(this);
        }
    }
}
exports.TypeVariableContext = TypeVariableContext;
class ArrayTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primitiveType() {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    dims() {
        return this.getRuleContext(0, DimsContext);
    }
    classOrInterfaceType() {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    typeVariable() {
        return this.getRuleContext(0, TypeVariableContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_arrayType;
    }
    enterRule(listener) {
        if (listener.enterArrayType) {
            listener.enterArrayType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayType) {
            listener.exitArrayType(this);
        }
    }
}
exports.ArrayTypeContext = ArrayTypeContext;
class DimsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_dims;
    }
    enterRule(listener) {
        if (listener.enterDims) {
            listener.enterDims(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDims) {
            listener.exitDims(this);
        }
    }
}
exports.DimsContext = DimsContext;
class TypeParameterContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeParameterModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterModifierContext);
        }
        return this.getRuleContext(i, TypeParameterModifierContext);
    }
    typeBound() {
        return this.getRuleContext(0, TypeBoundContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeParameter;
    }
    enterRule(listener) {
        if (listener.enterTypeParameter) {
            listener.enterTypeParameter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeParameter) {
            listener.exitTypeParameter(this);
        }
    }
}
exports.TypeParameterContext = TypeParameterContext;
class TypeParameterModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeParameterModifier;
    }
    enterRule(listener) {
        if (listener.enterTypeParameterModifier) {
            listener.enterTypeParameterModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeParameterModifier) {
            listener.exitTypeParameterModifier(this);
        }
    }
}
exports.TypeParameterModifierContext = TypeParameterModifierContext;
class TypeBoundContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXTENDS() {
        return this.getToken(Java8Parser.EXTENDS, 0);
    }
    typeVariable() {
        return this.getRuleContext(0, TypeVariableContext);
    }
    classOrInterfaceType() {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    additionalBound(i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditionalBoundContext);
        }
        return this.getRuleContext(i, AdditionalBoundContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeBound;
    }
    enterRule(listener) {
        if (listener.enterTypeBound) {
            listener.enterTypeBound(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeBound) {
            listener.exitTypeBound(this);
        }
    }
}
exports.TypeBoundContext = TypeBoundContext;
class AdditionalBoundContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BITAND() {
        return this.getToken(Java8Parser.BITAND, 0);
    }
    interfaceType() {
        return this.getRuleContext(0, InterfaceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_additionalBound;
    }
    enterRule(listener) {
        if (listener.enterAdditionalBound) {
            listener.enterAdditionalBound(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAdditionalBound) {
            listener.exitAdditionalBound(this);
        }
    }
}
exports.AdditionalBoundContext = AdditionalBoundContext;
class TypeArgumentsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LT() {
        return this.getToken(Java8Parser.LT, 0);
    }
    typeArgumentList() {
        return this.getRuleContext(0, TypeArgumentListContext);
    }
    GT() {
        return this.getToken(Java8Parser.GT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeArguments;
    }
    enterRule(listener) {
        if (listener.enterTypeArguments) {
            listener.enterTypeArguments(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeArguments) {
            listener.exitTypeArguments(this);
        }
    }
}
exports.TypeArgumentsContext = TypeArgumentsContext;
class TypeArgumentListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typeArgument(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }
        return this.getRuleContext(i, TypeArgumentContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeArgumentList;
    }
    enterRule(listener) {
        if (listener.enterTypeArgumentList) {
            listener.enterTypeArgumentList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeArgumentList) {
            listener.exitTypeArgumentList(this);
        }
    }
}
exports.TypeArgumentListContext = TypeArgumentListContext;
class TypeArgumentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    referenceType() {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    wildcard() {
        return this.getRuleContext(0, WildcardContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeArgument;
    }
    enterRule(listener) {
        if (listener.enterTypeArgument) {
            listener.enterTypeArgument(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeArgument) {
            listener.exitTypeArgument(this);
        }
    }
}
exports.TypeArgumentContext = TypeArgumentContext;
class WildcardContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    QUESTION() {
        return this.getToken(Java8Parser.QUESTION, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    wildcardBounds() {
        return this.getRuleContext(0, WildcardBoundsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_wildcard;
    }
    enterRule(listener) {
        if (listener.enterWildcard) {
            listener.enterWildcard(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWildcard) {
            listener.exitWildcard(this);
        }
    }
}
exports.WildcardContext = WildcardContext;
class WildcardBoundsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXTENDS() {
        return this.getToken(Java8Parser.EXTENDS, 0);
    }
    referenceType() {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_wildcardBounds;
    }
    enterRule(listener) {
        if (listener.enterWildcardBounds) {
            listener.enterWildcardBounds(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWildcardBounds) {
            listener.exitWildcardBounds(this);
        }
    }
}
exports.WildcardBoundsContext = WildcardBoundsContext;
class PackageNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    packageName() {
        return this.getRuleContext(0, PackageNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_packageName;
    }
    enterRule(listener) {
        if (listener.enterPackageName) {
            listener.enterPackageName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPackageName) {
            listener.exitPackageName(this);
        }
    }
}
exports.PackageNameContext = PackageNameContext;
class TypeNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    packageOrTypeName() {
        return this.getRuleContext(0, PackageOrTypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeName;
    }
    enterRule(listener) {
        if (listener.enterTypeName) {
            listener.enterTypeName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeName) {
            listener.exitTypeName(this);
        }
    }
}
exports.TypeNameContext = TypeNameContext;
class PackageOrTypeNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    packageOrTypeName() {
        return this.getRuleContext(0, PackageOrTypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_packageOrTypeName;
    }
    enterRule(listener) {
        if (listener.enterPackageOrTypeName) {
            listener.enterPackageOrTypeName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPackageOrTypeName) {
            listener.exitPackageOrTypeName(this);
        }
    }
}
exports.PackageOrTypeNameContext = PackageOrTypeNameContext;
class ExpressionNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    ambiguousName() {
        return this.getRuleContext(0, AmbiguousNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_expressionName;
    }
    enterRule(listener) {
        if (listener.enterExpressionName) {
            listener.enterExpressionName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpressionName) {
            listener.exitExpressionName(this);
        }
    }
}
exports.ExpressionNameContext = ExpressionNameContext;
class MethodNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodName;
    }
    enterRule(listener) {
        if (listener.enterMethodName) {
            listener.enterMethodName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodName) {
            listener.exitMethodName(this);
        }
    }
}
exports.MethodNameContext = MethodNameContext;
class AmbiguousNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    ambiguousName() {
        return this.getRuleContext(0, AmbiguousNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_ambiguousName;
    }
    enterRule(listener) {
        if (listener.enterAmbiguousName) {
            listener.enterAmbiguousName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAmbiguousName) {
            listener.exitAmbiguousName(this);
        }
    }
}
exports.AmbiguousNameContext = AmbiguousNameContext;
class CompilationUnitContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EOF() {
        return this.getToken(Java8Parser.EOF, 0);
    }
    packageDeclaration() {
        return this.getRuleContext(0, PackageDeclarationContext);
    }
    importDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }
        return this.getRuleContext(i, ImportDeclarationContext);
    }
    typeDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }
        return this.getRuleContext(i, TypeDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_compilationUnit;
    }
    enterRule(listener) {
        if (listener.enterCompilationUnit) {
            listener.enterCompilationUnit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCompilationUnit) {
            listener.exitCompilationUnit(this);
        }
    }
}
exports.CompilationUnitContext = CompilationUnitContext;
class PackageDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    PACKAGE() {
        return this.getToken(Java8Parser.PACKAGE, 0);
    }
    Identifier(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.Identifier);
        }
        else {
            return this.getToken(Java8Parser.Identifier, i);
        }
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    packageModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(PackageModifierContext);
        }
        return this.getRuleContext(i, PackageModifierContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.DOT);
        }
        else {
            return this.getToken(Java8Parser.DOT, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_packageDeclaration;
    }
    enterRule(listener) {
        if (listener.enterPackageDeclaration) {
            listener.enterPackageDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPackageDeclaration) {
            listener.exitPackageDeclaration(this);
        }
    }
}
exports.PackageDeclarationContext = PackageDeclarationContext;
class PackageModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_packageModifier;
    }
    enterRule(listener) {
        if (listener.enterPackageModifier) {
            listener.enterPackageModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPackageModifier) {
            listener.exitPackageModifier(this);
        }
    }
}
exports.PackageModifierContext = PackageModifierContext;
class ImportDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    singleTypeImportDeclaration() {
        return this.getRuleContext(0, SingleTypeImportDeclarationContext);
    }
    typeImportOnDemandDeclaration() {
        return this.getRuleContext(0, TypeImportOnDemandDeclarationContext);
    }
    singleStaticImportDeclaration() {
        return this.getRuleContext(0, SingleStaticImportDeclarationContext);
    }
    staticImportOnDemandDeclaration() {
        return this.getRuleContext(0, StaticImportOnDemandDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_importDeclaration;
    }
    enterRule(listener) {
        if (listener.enterImportDeclaration) {
            listener.enterImportDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitImportDeclaration) {
            listener.exitImportDeclaration(this);
        }
    }
}
exports.ImportDeclarationContext = ImportDeclarationContext;
class SingleTypeImportDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IMPORT() {
        return this.getToken(Java8Parser.IMPORT, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_singleTypeImportDeclaration;
    }
    enterRule(listener) {
        if (listener.enterSingleTypeImportDeclaration) {
            listener.enterSingleTypeImportDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSingleTypeImportDeclaration) {
            listener.exitSingleTypeImportDeclaration(this);
        }
    }
}
exports.SingleTypeImportDeclarationContext = SingleTypeImportDeclarationContext;
class TypeImportOnDemandDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IMPORT() {
        return this.getToken(Java8Parser.IMPORT, 0);
    }
    packageOrTypeName() {
        return this.getRuleContext(0, PackageOrTypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    MUL() {
        return this.getToken(Java8Parser.MUL, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeImportOnDemandDeclaration;
    }
    enterRule(listener) {
        if (listener.enterTypeImportOnDemandDeclaration) {
            listener.enterTypeImportOnDemandDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeImportOnDemandDeclaration) {
            listener.exitTypeImportOnDemandDeclaration(this);
        }
    }
}
exports.TypeImportOnDemandDeclarationContext = TypeImportOnDemandDeclarationContext;
class SingleStaticImportDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IMPORT() {
        return this.getToken(Java8Parser.IMPORT, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_singleStaticImportDeclaration;
    }
    enterRule(listener) {
        if (listener.enterSingleStaticImportDeclaration) {
            listener.enterSingleStaticImportDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSingleStaticImportDeclaration) {
            listener.exitSingleStaticImportDeclaration(this);
        }
    }
}
exports.SingleStaticImportDeclarationContext = SingleStaticImportDeclarationContext;
class StaticImportOnDemandDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IMPORT() {
        return this.getToken(Java8Parser.IMPORT, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    MUL() {
        return this.getToken(Java8Parser.MUL, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_staticImportOnDemandDeclaration;
    }
    enterRule(listener) {
        if (listener.enterStaticImportOnDemandDeclaration) {
            listener.enterStaticImportOnDemandDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStaticImportOnDemandDeclaration) {
            listener.exitStaticImportOnDemandDeclaration(this);
        }
    }
}
exports.StaticImportOnDemandDeclarationContext = StaticImportOnDemandDeclarationContext;
class TypeDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classDeclaration() {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeDeclaration;
    }
    enterRule(listener) {
        if (listener.enterTypeDeclaration) {
            listener.enterTypeDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeDeclaration) {
            listener.exitTypeDeclaration(this);
        }
    }
}
exports.TypeDeclarationContext = TypeDeclarationContext;
class ClassDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    normalClassDeclaration() {
        return this.getRuleContext(0, NormalClassDeclarationContext);
    }
    enumDeclaration() {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classDeclaration;
    }
    enterRule(listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    }
}
exports.ClassDeclarationContext = ClassDeclarationContext;
class NormalClassDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CLASS() {
        return this.getToken(Java8Parser.CLASS, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    classBody() {
        return this.getRuleContext(0, ClassBodyContext);
    }
    classModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassModifierContext);
        }
        return this.getRuleContext(i, ClassModifierContext);
    }
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    superclass() {
        return this.getRuleContext(0, SuperclassContext);
    }
    superinterfaces() {
        return this.getRuleContext(0, SuperinterfacesContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_normalClassDeclaration;
    }
    enterRule(listener) {
        if (listener.enterNormalClassDeclaration) {
            listener.enterNormalClassDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNormalClassDeclaration) {
            listener.exitNormalClassDeclaration(this);
        }
    }
}
exports.NormalClassDeclarationContext = NormalClassDeclarationContext;
class ClassModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    PROTECTED() {
        return this.getToken(Java8Parser.PROTECTED, 0);
    }
    PRIVATE() {
        return this.getToken(Java8Parser.PRIVATE, 0);
    }
    ABSTRACT() {
        return this.getToken(Java8Parser.ABSTRACT, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    FINAL() {
        return this.getToken(Java8Parser.FINAL, 0);
    }
    STRICTFP() {
        return this.getToken(Java8Parser.STRICTFP, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classModifier;
    }
    enterRule(listener) {
        if (listener.enterClassModifier) {
            listener.enterClassModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassModifier) {
            listener.exitClassModifier(this);
        }
    }
}
exports.ClassModifierContext = ClassModifierContext;
class TypeParametersContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LT() {
        return this.getToken(Java8Parser.LT, 0);
    }
    typeParameterList() {
        return this.getRuleContext(0, TypeParameterListContext);
    }
    GT() {
        return this.getToken(Java8Parser.GT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeParameters;
    }
    enterRule(listener) {
        if (listener.enterTypeParameters) {
            listener.enterTypeParameters(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeParameters) {
            listener.exitTypeParameters(this);
        }
    }
}
exports.TypeParametersContext = TypeParametersContext;
class TypeParameterListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typeParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        return this.getRuleContext(i, TypeParameterContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeParameterList;
    }
    enterRule(listener) {
        if (listener.enterTypeParameterList) {
            listener.enterTypeParameterList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeParameterList) {
            listener.exitTypeParameterList(this);
        }
    }
}
exports.TypeParameterListContext = TypeParameterListContext;
class SuperclassContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXTENDS() {
        return this.getToken(Java8Parser.EXTENDS, 0);
    }
    classType() {
        return this.getRuleContext(0, ClassTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_superclass;
    }
    enterRule(listener) {
        if (listener.enterSuperclass) {
            listener.enterSuperclass(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSuperclass) {
            listener.exitSuperclass(this);
        }
    }
}
exports.SuperclassContext = SuperclassContext;
class SuperinterfacesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IMPLEMENTS() {
        return this.getToken(Java8Parser.IMPLEMENTS, 0);
    }
    interfaceTypeList() {
        return this.getRuleContext(0, InterfaceTypeListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_superinterfaces;
    }
    enterRule(listener) {
        if (listener.enterSuperinterfaces) {
            listener.enterSuperinterfaces(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSuperinterfaces) {
            listener.exitSuperinterfaces(this);
        }
    }
}
exports.SuperinterfacesContext = SuperinterfacesContext;
class InterfaceTypeListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    interfaceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceTypeContext);
        }
        return this.getRuleContext(i, InterfaceTypeContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceTypeList;
    }
    enterRule(listener) {
        if (listener.enterInterfaceTypeList) {
            listener.enterInterfaceTypeList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceTypeList) {
            listener.exitInterfaceTypeList(this);
        }
    }
}
exports.InterfaceTypeListContext = InterfaceTypeListContext;
class ClassBodyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    classBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classBody;
    }
    enterRule(listener) {
        if (listener.enterClassBody) {
            listener.enterClassBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassBody) {
            listener.exitClassBody(this);
        }
    }
}
exports.ClassBodyContext = ClassBodyContext;
class ClassBodyDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classMemberDeclaration() {
        return this.getRuleContext(0, ClassMemberDeclarationContext);
    }
    instanceInitializer() {
        return this.getRuleContext(0, InstanceInitializerContext);
    }
    staticInitializer() {
        return this.getRuleContext(0, StaticInitializerContext);
    }
    constructorDeclaration() {
        return this.getRuleContext(0, ConstructorDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classBodyDeclaration;
    }
    enterRule(listener) {
        if (listener.enterClassBodyDeclaration) {
            listener.enterClassBodyDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassBodyDeclaration) {
            listener.exitClassBodyDeclaration(this);
        }
    }
}
exports.ClassBodyDeclarationContext = ClassBodyDeclarationContext;
class ClassMemberDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    fieldDeclaration() {
        return this.getRuleContext(0, FieldDeclarationContext);
    }
    methodDeclaration() {
        return this.getRuleContext(0, MethodDeclarationContext);
    }
    classDeclaration() {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classMemberDeclaration;
    }
    enterRule(listener) {
        if (listener.enterClassMemberDeclaration) {
            listener.enterClassMemberDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassMemberDeclaration) {
            listener.exitClassMemberDeclaration(this);
        }
    }
}
exports.ClassMemberDeclarationContext = ClassMemberDeclarationContext;
class FieldDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    variableDeclaratorList() {
        return this.getRuleContext(0, VariableDeclaratorListContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    fieldModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldModifierContext);
        }
        return this.getRuleContext(i, FieldModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_fieldDeclaration;
    }
    enterRule(listener) {
        if (listener.enterFieldDeclaration) {
            listener.enterFieldDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFieldDeclaration) {
            listener.exitFieldDeclaration(this);
        }
    }
}
exports.FieldDeclarationContext = FieldDeclarationContext;
class FieldModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    PROTECTED() {
        return this.getToken(Java8Parser.PROTECTED, 0);
    }
    PRIVATE() {
        return this.getToken(Java8Parser.PRIVATE, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    FINAL() {
        return this.getToken(Java8Parser.FINAL, 0);
    }
    TRANSIENT() {
        return this.getToken(Java8Parser.TRANSIENT, 0);
    }
    VOLATILE() {
        return this.getToken(Java8Parser.VOLATILE, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_fieldModifier;
    }
    enterRule(listener) {
        if (listener.enterFieldModifier) {
            listener.enterFieldModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFieldModifier) {
            listener.exitFieldModifier(this);
        }
    }
}
exports.FieldModifierContext = FieldModifierContext;
class VariableDeclaratorListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    variableDeclarator(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclaratorContext);
        }
        return this.getRuleContext(i, VariableDeclaratorContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_variableDeclaratorList;
    }
    enterRule(listener) {
        if (listener.enterVariableDeclaratorList) {
            listener.enterVariableDeclaratorList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableDeclaratorList) {
            listener.exitVariableDeclaratorList(this);
        }
    }
}
exports.VariableDeclaratorListContext = VariableDeclaratorListContext;
class VariableDeclaratorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    ASSIGN() {
        return this.getToken(Java8Parser.ASSIGN, 0);
    }
    variableInitializer() {
        return this.getRuleContext(0, VariableInitializerContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_variableDeclarator;
    }
    enterRule(listener) {
        if (listener.enterVariableDeclarator) {
            listener.enterVariableDeclarator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableDeclarator) {
            listener.exitVariableDeclarator(this);
        }
    }
}
exports.VariableDeclaratorContext = VariableDeclaratorContext;
class VariableDeclaratorIdContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    dims() {
        return this.getRuleContext(0, DimsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_variableDeclaratorId;
    }
    enterRule(listener) {
        if (listener.enterVariableDeclaratorId) {
            listener.enterVariableDeclaratorId(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableDeclaratorId) {
            listener.exitVariableDeclaratorId(this);
        }
    }
}
exports.VariableDeclaratorIdContext = VariableDeclaratorIdContext;
class VariableInitializerContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    arrayInitializer() {
        return this.getRuleContext(0, ArrayInitializerContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_variableInitializer;
    }
    enterRule(listener) {
        if (listener.enterVariableInitializer) {
            listener.enterVariableInitializer(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableInitializer) {
            listener.exitVariableInitializer(this);
        }
    }
}
exports.VariableInitializerContext = VariableInitializerContext;
class UnannTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannPrimitiveType() {
        return this.getRuleContext(0, UnannPrimitiveTypeContext);
    }
    unannReferenceType() {
        return this.getRuleContext(0, UnannReferenceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannType;
    }
    enterRule(listener) {
        if (listener.enterUnannType) {
            listener.enterUnannType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannType) {
            listener.exitUnannType(this);
        }
    }
}
exports.UnannTypeContext = UnannTypeContext;
class UnannPrimitiveTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    numericType() {
        return this.getRuleContext(0, NumericTypeContext);
    }
    BOOLEAN() {
        return this.getToken(Java8Parser.BOOLEAN, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannPrimitiveType;
    }
    enterRule(listener) {
        if (listener.enterUnannPrimitiveType) {
            listener.enterUnannPrimitiveType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannPrimitiveType) {
            listener.exitUnannPrimitiveType(this);
        }
    }
}
exports.UnannPrimitiveTypeContext = UnannPrimitiveTypeContext;
class UnannReferenceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannClassOrInterfaceType() {
        return this.getRuleContext(0, UnannClassOrInterfaceTypeContext);
    }
    unannTypeVariable() {
        return this.getRuleContext(0, UnannTypeVariableContext);
    }
    unannArrayType() {
        return this.getRuleContext(0, UnannArrayTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannReferenceType;
    }
    enterRule(listener) {
        if (listener.enterUnannReferenceType) {
            listener.enterUnannReferenceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannReferenceType) {
            listener.exitUnannReferenceType(this);
        }
    }
}
exports.UnannReferenceTypeContext = UnannReferenceTypeContext;
class UnannClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannClassType_lfno_unannClassOrInterfaceType() {
        return this.getRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
    }
    unannInterfaceType_lfno_unannClassOrInterfaceType() {
        return this.getRuleContext(0, UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext);
    }
    unannClassType_lf_unannClassOrInterfaceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnannClassType_lf_unannClassOrInterfaceTypeContext);
        }
        return this.getRuleContext(i, UnannClassType_lf_unannClassOrInterfaceTypeContext);
    }
    unannInterfaceType_lf_unannClassOrInterfaceType(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
        }
        return this.getRuleContext(i, UnannInterfaceType_lf_unannClassOrInterfaceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannClassOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterUnannClassOrInterfaceType) {
            listener.enterUnannClassOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannClassOrInterfaceType) {
            listener.exitUnannClassOrInterfaceType(this);
        }
    }
}
exports.UnannClassOrInterfaceTypeContext = UnannClassOrInterfaceTypeContext;
class UnannClassTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    unannClassOrInterfaceType() {
        return this.getRuleContext(0, UnannClassOrInterfaceTypeContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannClassType;
    }
    enterRule(listener) {
        if (listener.enterUnannClassType) {
            listener.enterUnannClassType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannClassType) {
            listener.exitUnannClassType(this);
        }
    }
}
exports.UnannClassTypeContext = UnannClassTypeContext;
class UnannClassType_lf_unannClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannClassType_lf_unannClassOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterUnannClassType_lf_unannClassOrInterfaceType) {
            listener.enterUnannClassType_lf_unannClassOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannClassType_lf_unannClassOrInterfaceType) {
            listener.exitUnannClassType_lf_unannClassOrInterfaceType(this);
        }
    }
}
exports.UnannClassType_lf_unannClassOrInterfaceTypeContext = UnannClassType_lf_unannClassOrInterfaceTypeContext;
class UnannClassType_lfno_unannClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannClassType_lfno_unannClassOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterUnannClassType_lfno_unannClassOrInterfaceType) {
            listener.enterUnannClassType_lfno_unannClassOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannClassType_lfno_unannClassOrInterfaceType) {
            listener.exitUnannClassType_lfno_unannClassOrInterfaceType(this);
        }
    }
}
exports.UnannClassType_lfno_unannClassOrInterfaceTypeContext = UnannClassType_lfno_unannClassOrInterfaceTypeContext;
class UnannInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannClassType() {
        return this.getRuleContext(0, UnannClassTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterUnannInterfaceType) {
            listener.enterUnannInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannInterfaceType) {
            listener.exitUnannInterfaceType(this);
        }
    }
}
exports.UnannInterfaceTypeContext = UnannInterfaceTypeContext;
class UnannInterfaceType_lf_unannClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannClassType_lf_unannClassOrInterfaceType() {
        return this.getRuleContext(0, UnannClassType_lf_unannClassOrInterfaceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannInterfaceType_lf_unannClassOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType) {
            listener.enterUnannInterfaceType_lf_unannClassOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType) {
            listener.exitUnannInterfaceType_lf_unannClassOrInterfaceType(this);
        }
    }
}
exports.UnannInterfaceType_lf_unannClassOrInterfaceTypeContext = UnannInterfaceType_lf_unannClassOrInterfaceTypeContext;
class UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannClassType_lfno_unannClassOrInterfaceType() {
        return this.getRuleContext(0, UnannClassType_lfno_unannClassOrInterfaceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannInterfaceType_lfno_unannClassOrInterfaceType;
    }
    enterRule(listener) {
        if (listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType) {
            listener.enterUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType) {
            listener.exitUnannInterfaceType_lfno_unannClassOrInterfaceType(this);
        }
    }
}
exports.UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext = UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext;
class UnannTypeVariableContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannTypeVariable;
    }
    enterRule(listener) {
        if (listener.enterUnannTypeVariable) {
            listener.enterUnannTypeVariable(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannTypeVariable) {
            listener.exitUnannTypeVariable(this);
        }
    }
}
exports.UnannTypeVariableContext = UnannTypeVariableContext;
class UnannArrayTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannPrimitiveType() {
        return this.getRuleContext(0, UnannPrimitiveTypeContext);
    }
    dims() {
        return this.getRuleContext(0, DimsContext);
    }
    unannClassOrInterfaceType() {
        return this.getRuleContext(0, UnannClassOrInterfaceTypeContext);
    }
    unannTypeVariable() {
        return this.getRuleContext(0, UnannTypeVariableContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unannArrayType;
    }
    enterRule(listener) {
        if (listener.enterUnannArrayType) {
            listener.enterUnannArrayType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnannArrayType) {
            listener.exitUnannArrayType(this);
        }
    }
}
exports.UnannArrayTypeContext = UnannArrayTypeContext;
class MethodDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    methodHeader() {
        return this.getRuleContext(0, MethodHeaderContext);
    }
    methodBody() {
        return this.getRuleContext(0, MethodBodyContext);
    }
    methodModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(MethodModifierContext);
        }
        return this.getRuleContext(i, MethodModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodDeclaration;
    }
    enterRule(listener) {
        if (listener.enterMethodDeclaration) {
            listener.enterMethodDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodDeclaration) {
            listener.exitMethodDeclaration(this);
        }
    }
}
exports.MethodDeclarationContext = MethodDeclarationContext;
class MethodModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    PROTECTED() {
        return this.getToken(Java8Parser.PROTECTED, 0);
    }
    PRIVATE() {
        return this.getToken(Java8Parser.PRIVATE, 0);
    }
    ABSTRACT() {
        return this.getToken(Java8Parser.ABSTRACT, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    FINAL() {
        return this.getToken(Java8Parser.FINAL, 0);
    }
    SYNCHRONIZED() {
        return this.getToken(Java8Parser.SYNCHRONIZED, 0);
    }
    NATIVE() {
        return this.getToken(Java8Parser.NATIVE, 0);
    }
    STRICTFP() {
        return this.getToken(Java8Parser.STRICTFP, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodModifier;
    }
    enterRule(listener) {
        if (listener.enterMethodModifier) {
            listener.enterMethodModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodModifier) {
            listener.exitMethodModifier(this);
        }
    }
}
exports.MethodModifierContext = MethodModifierContext;
class MethodHeaderContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    result() {
        return this.getRuleContext(0, ResultContext);
    }
    methodDeclarator() {
        return this.getRuleContext(0, MethodDeclaratorContext);
    }
    throws_() {
        return this.getRuleContext(0, Throws_Context);
    }
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodHeader;
    }
    enterRule(listener) {
        if (listener.enterMethodHeader) {
            listener.enterMethodHeader(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodHeader) {
            listener.exitMethodHeader(this);
        }
    }
}
exports.MethodHeaderContext = MethodHeaderContext;
class ResultContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    VOID() {
        return this.getToken(Java8Parser.VOID, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_result;
    }
    enterRule(listener) {
        if (listener.enterResult) {
            listener.enterResult(this);
        }
    }
    exitRule(listener) {
        if (listener.exitResult) {
            listener.exitResult(this);
        }
    }
}
exports.ResultContext = ResultContext;
class MethodDeclaratorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    formalParameterList() {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    dims() {
        return this.getRuleContext(0, DimsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodDeclarator;
    }
    enterRule(listener) {
        if (listener.enterMethodDeclarator) {
            listener.enterMethodDeclarator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodDeclarator) {
            listener.exitMethodDeclarator(this);
        }
    }
}
exports.MethodDeclaratorContext = MethodDeclaratorContext;
class FormalParameterListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    formalParameters() {
        return this.getRuleContext(0, FormalParametersContext);
    }
    COMMA() {
        return this.getToken(Java8Parser.COMMA, 0);
    }
    lastFormalParameter() {
        return this.getRuleContext(0, LastFormalParameterContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_formalParameterList;
    }
    enterRule(listener) {
        if (listener.enterFormalParameterList) {
            listener.enterFormalParameterList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFormalParameterList) {
            listener.exitFormalParameterList(this);
        }
    }
}
exports.FormalParameterListContext = FormalParameterListContext;
class FormalParametersContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    formalParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }
        return this.getRuleContext(i, FormalParameterContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    receiverParameter() {
        return this.getRuleContext(0, ReceiverParameterContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_formalParameters;
    }
    enterRule(listener) {
        if (listener.enterFormalParameters) {
            listener.enterFormalParameters(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFormalParameters) {
            listener.exitFormalParameters(this);
        }
    }
}
exports.FormalParametersContext = FormalParametersContext;
class FormalParameterContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        return this.getRuleContext(i, VariableModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_formalParameter;
    }
    enterRule(listener) {
        if (listener.enterFormalParameter) {
            listener.enterFormalParameter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFormalParameter) {
            listener.exitFormalParameter(this);
        }
    }
}
exports.FormalParameterContext = FormalParameterContext;
class VariableModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    FINAL() {
        return this.getToken(Java8Parser.FINAL, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_variableModifier;
    }
    enterRule(listener) {
        if (listener.enterVariableModifier) {
            listener.enterVariableModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableModifier) {
            listener.exitVariableModifier(this);
        }
    }
}
exports.VariableModifierContext = VariableModifierContext;
class LastFormalParameterContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    ELLIPSIS() {
        return this.getToken(Java8Parser.ELLIPSIS, 0);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        return this.getRuleContext(i, VariableModifierContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    formalParameter() {
        return this.getRuleContext(0, FormalParameterContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_lastFormalParameter;
    }
    enterRule(listener) {
        if (listener.enterLastFormalParameter) {
            listener.enterLastFormalParameter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLastFormalParameter) {
            listener.exitLastFormalParameter(this);
        }
    }
}
exports.LastFormalParameterContext = LastFormalParameterContext;
class ReceiverParameterContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    THIS() {
        return this.getToken(Java8Parser.THIS, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_receiverParameter;
    }
    enterRule(listener) {
        if (listener.enterReceiverParameter) {
            listener.enterReceiverParameter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReceiverParameter) {
            listener.exitReceiverParameter(this);
        }
    }
}
exports.ReceiverParameterContext = ReceiverParameterContext;
class Throws_Context extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    THROWS() {
        return this.getToken(Java8Parser.THROWS, 0);
    }
    exceptionTypeList() {
        return this.getRuleContext(0, ExceptionTypeListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_throws_;
    }
    enterRule(listener) {
        if (listener.enterThrows_) {
            listener.enterThrows_(this);
        }
    }
    exitRule(listener) {
        if (listener.exitThrows_) {
            listener.exitThrows_(this);
        }
    }
}
exports.Throws_Context = Throws_Context;
class ExceptionTypeListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exceptionType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExceptionTypeContext);
        }
        return this.getRuleContext(i, ExceptionTypeContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_exceptionTypeList;
    }
    enterRule(listener) {
        if (listener.enterExceptionTypeList) {
            listener.enterExceptionTypeList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExceptionTypeList) {
            listener.exitExceptionTypeList(this);
        }
    }
}
exports.ExceptionTypeListContext = ExceptionTypeListContext;
class ExceptionTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classType() {
        return this.getRuleContext(0, ClassTypeContext);
    }
    typeVariable() {
        return this.getRuleContext(0, TypeVariableContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_exceptionType;
    }
    enterRule(listener) {
        if (listener.enterExceptionType) {
            listener.enterExceptionType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExceptionType) {
            listener.exitExceptionType(this);
        }
    }
}
exports.ExceptionTypeContext = ExceptionTypeContext;
class MethodBodyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodBody;
    }
    enterRule(listener) {
        if (listener.enterMethodBody) {
            listener.enterMethodBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodBody) {
            listener.exitMethodBody(this);
        }
    }
}
exports.MethodBodyContext = MethodBodyContext;
class InstanceInitializerContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_instanceInitializer;
    }
    enterRule(listener) {
        if (listener.enterInstanceInitializer) {
            listener.enterInstanceInitializer(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInstanceInitializer) {
            listener.exitInstanceInitializer(this);
        }
    }
}
exports.InstanceInitializerContext = InstanceInitializerContext;
class StaticInitializerContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_staticInitializer;
    }
    enterRule(listener) {
        if (listener.enterStaticInitializer) {
            listener.enterStaticInitializer(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStaticInitializer) {
            listener.exitStaticInitializer(this);
        }
    }
}
exports.StaticInitializerContext = StaticInitializerContext;
class ConstructorDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    constructorDeclarator() {
        return this.getRuleContext(0, ConstructorDeclaratorContext);
    }
    constructorBody() {
        return this.getRuleContext(0, ConstructorBodyContext);
    }
    constructorModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstructorModifierContext);
        }
        return this.getRuleContext(i, ConstructorModifierContext);
    }
    throws_() {
        return this.getRuleContext(0, Throws_Context);
    }
    get ruleIndex() {
        return Java8Parser.RULE_constructorDeclaration;
    }
    enterRule(listener) {
        if (listener.enterConstructorDeclaration) {
            listener.enterConstructorDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstructorDeclaration) {
            listener.exitConstructorDeclaration(this);
        }
    }
}
exports.ConstructorDeclarationContext = ConstructorDeclarationContext;
class ConstructorModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    PROTECTED() {
        return this.getToken(Java8Parser.PROTECTED, 0);
    }
    PRIVATE() {
        return this.getToken(Java8Parser.PRIVATE, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_constructorModifier;
    }
    enterRule(listener) {
        if (listener.enterConstructorModifier) {
            listener.enterConstructorModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstructorModifier) {
            listener.exitConstructorModifier(this);
        }
    }
}
exports.ConstructorModifierContext = ConstructorModifierContext;
class ConstructorDeclaratorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simpleTypeName() {
        return this.getRuleContext(0, SimpleTypeNameContext);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    formalParameterList() {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_constructorDeclarator;
    }
    enterRule(listener) {
        if (listener.enterConstructorDeclarator) {
            listener.enterConstructorDeclarator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstructorDeclarator) {
            listener.exitConstructorDeclarator(this);
        }
    }
}
exports.ConstructorDeclaratorContext = ConstructorDeclaratorContext;
class SimpleTypeNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_simpleTypeName;
    }
    enterRule(listener) {
        if (listener.enterSimpleTypeName) {
            listener.enterSimpleTypeName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSimpleTypeName) {
            listener.exitSimpleTypeName(this);
        }
    }
}
exports.SimpleTypeNameContext = SimpleTypeNameContext;
class ConstructorBodyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    explicitConstructorInvocation() {
        return this.getRuleContext(0, ExplicitConstructorInvocationContext);
    }
    blockStatements() {
        return this.getRuleContext(0, BlockStatementsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_constructorBody;
    }
    enterRule(listener) {
        if (listener.enterConstructorBody) {
            listener.enterConstructorBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstructorBody) {
            listener.exitConstructorBody(this);
        }
    }
}
exports.ConstructorBodyContext = ConstructorBodyContext;
class ExplicitConstructorInvocationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    THIS() {
        return this.getToken(Java8Parser.THIS, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    primary() {
        return this.getRuleContext(0, PrimaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_explicitConstructorInvocation;
    }
    enterRule(listener) {
        if (listener.enterExplicitConstructorInvocation) {
            listener.enterExplicitConstructorInvocation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExplicitConstructorInvocation) {
            listener.exitExplicitConstructorInvocation(this);
        }
    }
}
exports.ExplicitConstructorInvocationContext = ExplicitConstructorInvocationContext;
class EnumDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ENUM() {
        return this.getToken(Java8Parser.ENUM, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    enumBody() {
        return this.getRuleContext(0, EnumBodyContext);
    }
    classModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassModifierContext);
        }
        return this.getRuleContext(i, ClassModifierContext);
    }
    superinterfaces() {
        return this.getRuleContext(0, SuperinterfacesContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enumDeclaration;
    }
    enterRule(listener) {
        if (listener.enterEnumDeclaration) {
            listener.enterEnumDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnumDeclaration) {
            listener.exitEnumDeclaration(this);
        }
    }
}
exports.EnumDeclarationContext = EnumDeclarationContext;
class EnumBodyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    enumConstantList() {
        return this.getRuleContext(0, EnumConstantListContext);
    }
    COMMA() {
        return this.getToken(Java8Parser.COMMA, 0);
    }
    enumBodyDeclarations() {
        return this.getRuleContext(0, EnumBodyDeclarationsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enumBody;
    }
    enterRule(listener) {
        if (listener.enterEnumBody) {
            listener.enterEnumBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnumBody) {
            listener.exitEnumBody(this);
        }
    }
}
exports.EnumBodyContext = EnumBodyContext;
class EnumConstantListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    enumConstant(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantContext);
        }
        return this.getRuleContext(i, EnumConstantContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_enumConstantList;
    }
    enterRule(listener) {
        if (listener.enterEnumConstantList) {
            listener.enterEnumConstantList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnumConstantList) {
            listener.exitEnumConstantList(this);
        }
    }
}
exports.EnumConstantListContext = EnumConstantListContext;
class EnumConstantContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    enumConstantModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantModifierContext);
        }
        return this.getRuleContext(i, EnumConstantModifierContext);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    classBody() {
        return this.getRuleContext(0, ClassBodyContext);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enumConstant;
    }
    enterRule(listener) {
        if (listener.enterEnumConstant) {
            listener.enterEnumConstant(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnumConstant) {
            listener.exitEnumConstant(this);
        }
    }
}
exports.EnumConstantContext = EnumConstantContext;
class EnumConstantModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enumConstantModifier;
    }
    enterRule(listener) {
        if (listener.enterEnumConstantModifier) {
            listener.enterEnumConstantModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnumConstantModifier) {
            listener.exitEnumConstantModifier(this);
        }
    }
}
exports.EnumConstantModifierContext = EnumConstantModifierContext;
class EnumBodyDeclarationsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    classBodyDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }
        return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enumBodyDeclarations;
    }
    enterRule(listener) {
        if (listener.enterEnumBodyDeclarations) {
            listener.enterEnumBodyDeclarations(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnumBodyDeclarations) {
            listener.exitEnumBodyDeclarations(this);
        }
    }
}
exports.EnumBodyDeclarationsContext = EnumBodyDeclarationsContext;
class InterfaceDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    normalInterfaceDeclaration() {
        return this.getRuleContext(0, NormalInterfaceDeclarationContext);
    }
    annotationTypeDeclaration() {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceDeclaration;
    }
    enterRule(listener) {
        if (listener.enterInterfaceDeclaration) {
            listener.enterInterfaceDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceDeclaration) {
            listener.exitInterfaceDeclaration(this);
        }
    }
}
exports.InterfaceDeclarationContext = InterfaceDeclarationContext;
class NormalInterfaceDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INTERFACE() {
        return this.getToken(Java8Parser.INTERFACE, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    interfaceBody() {
        return this.getRuleContext(0, InterfaceBodyContext);
    }
    interfaceModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceModifierContext);
        }
        return this.getRuleContext(i, InterfaceModifierContext);
    }
    typeParameters() {
        return this.getRuleContext(0, TypeParametersContext);
    }
    extendsInterfaces() {
        return this.getRuleContext(0, ExtendsInterfacesContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_normalInterfaceDeclaration;
    }
    enterRule(listener) {
        if (listener.enterNormalInterfaceDeclaration) {
            listener.enterNormalInterfaceDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNormalInterfaceDeclaration) {
            listener.exitNormalInterfaceDeclaration(this);
        }
    }
}
exports.NormalInterfaceDeclarationContext = NormalInterfaceDeclarationContext;
class InterfaceModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    PROTECTED() {
        return this.getToken(Java8Parser.PROTECTED, 0);
    }
    PRIVATE() {
        return this.getToken(Java8Parser.PRIVATE, 0);
    }
    ABSTRACT() {
        return this.getToken(Java8Parser.ABSTRACT, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    STRICTFP() {
        return this.getToken(Java8Parser.STRICTFP, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceModifier;
    }
    enterRule(listener) {
        if (listener.enterInterfaceModifier) {
            listener.enterInterfaceModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceModifier) {
            listener.exitInterfaceModifier(this);
        }
    }
}
exports.InterfaceModifierContext = InterfaceModifierContext;
class ExtendsInterfacesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EXTENDS() {
        return this.getToken(Java8Parser.EXTENDS, 0);
    }
    interfaceTypeList() {
        return this.getRuleContext(0, InterfaceTypeListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_extendsInterfaces;
    }
    enterRule(listener) {
        if (listener.enterExtendsInterfaces) {
            listener.enterExtendsInterfaces(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExtendsInterfaces) {
            listener.exitExtendsInterfaces(this);
        }
    }
}
exports.ExtendsInterfacesContext = ExtendsInterfacesContext;
class InterfaceBodyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    interfaceMemberDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMemberDeclarationContext);
        }
        return this.getRuleContext(i, InterfaceMemberDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceBody;
    }
    enterRule(listener) {
        if (listener.enterInterfaceBody) {
            listener.enterInterfaceBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceBody) {
            listener.exitInterfaceBody(this);
        }
    }
}
exports.InterfaceBodyContext = InterfaceBodyContext;
class InterfaceMemberDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    constantDeclaration() {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    interfaceMethodDeclaration() {
        return this.getRuleContext(0, InterfaceMethodDeclarationContext);
    }
    classDeclaration() {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceMemberDeclaration;
    }
    enterRule(listener) {
        if (listener.enterInterfaceMemberDeclaration) {
            listener.enterInterfaceMemberDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceMemberDeclaration) {
            listener.exitInterfaceMemberDeclaration(this);
        }
    }
}
exports.InterfaceMemberDeclarationContext = InterfaceMemberDeclarationContext;
class ConstantDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    variableDeclaratorList() {
        return this.getRuleContext(0, VariableDeclaratorListContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    constantModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConstantModifierContext);
        }
        return this.getRuleContext(i, ConstantModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_constantDeclaration;
    }
    enterRule(listener) {
        if (listener.enterConstantDeclaration) {
            listener.enterConstantDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstantDeclaration) {
            listener.exitConstantDeclaration(this);
        }
    }
}
exports.ConstantDeclarationContext = ConstantDeclarationContext;
class ConstantModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    FINAL() {
        return this.getToken(Java8Parser.FINAL, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_constantModifier;
    }
    enterRule(listener) {
        if (listener.enterConstantModifier) {
            listener.enterConstantModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstantModifier) {
            listener.exitConstantModifier(this);
        }
    }
}
exports.ConstantModifierContext = ConstantModifierContext;
class InterfaceMethodDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    methodHeader() {
        return this.getRuleContext(0, MethodHeaderContext);
    }
    methodBody() {
        return this.getRuleContext(0, MethodBodyContext);
    }
    interfaceMethodModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceMethodModifierContext);
        }
        return this.getRuleContext(i, InterfaceMethodModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceMethodDeclaration;
    }
    enterRule(listener) {
        if (listener.enterInterfaceMethodDeclaration) {
            listener.enterInterfaceMethodDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceMethodDeclaration) {
            listener.exitInterfaceMethodDeclaration(this);
        }
    }
}
exports.InterfaceMethodDeclarationContext = InterfaceMethodDeclarationContext;
class InterfaceMethodModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    ABSTRACT() {
        return this.getToken(Java8Parser.ABSTRACT, 0);
    }
    DEFAULT() {
        return this.getToken(Java8Parser.DEFAULT, 0);
    }
    STATIC() {
        return this.getToken(Java8Parser.STATIC, 0);
    }
    STRICTFP() {
        return this.getToken(Java8Parser.STRICTFP, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_interfaceMethodModifier;
    }
    enterRule(listener) {
        if (listener.enterInterfaceMethodModifier) {
            listener.enterInterfaceMethodModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInterfaceMethodModifier) {
            listener.exitInterfaceMethodModifier(this);
        }
    }
}
exports.InterfaceMethodModifierContext = InterfaceMethodModifierContext;
class AnnotationTypeDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AT() {
        return this.getToken(Java8Parser.AT, 0);
    }
    INTERFACE() {
        return this.getToken(Java8Parser.INTERFACE, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    annotationTypeBody() {
        return this.getRuleContext(0, AnnotationTypeBodyContext);
    }
    interfaceModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceModifierContext);
        }
        return this.getRuleContext(i, InterfaceModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_annotationTypeDeclaration;
    }
    enterRule(listener) {
        if (listener.enterAnnotationTypeDeclaration) {
            listener.enterAnnotationTypeDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnnotationTypeDeclaration) {
            listener.exitAnnotationTypeDeclaration(this);
        }
    }
}
exports.AnnotationTypeDeclarationContext = AnnotationTypeDeclarationContext;
class AnnotationTypeBodyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    annotationTypeMemberDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationTypeMemberDeclarationContext);
        }
        return this.getRuleContext(i, AnnotationTypeMemberDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_annotationTypeBody;
    }
    enterRule(listener) {
        if (listener.enterAnnotationTypeBody) {
            listener.enterAnnotationTypeBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnnotationTypeBody) {
            listener.exitAnnotationTypeBody(this);
        }
    }
}
exports.AnnotationTypeBodyContext = AnnotationTypeBodyContext;
class AnnotationTypeMemberDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotationTypeElementDeclaration() {
        return this.getRuleContext(0, AnnotationTypeElementDeclarationContext);
    }
    constantDeclaration() {
        return this.getRuleContext(0, ConstantDeclarationContext);
    }
    classDeclaration() {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    interfaceDeclaration() {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_annotationTypeMemberDeclaration;
    }
    enterRule(listener) {
        if (listener.enterAnnotationTypeMemberDeclaration) {
            listener.enterAnnotationTypeMemberDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnnotationTypeMemberDeclaration) {
            listener.exitAnnotationTypeMemberDeclaration(this);
        }
    }
}
exports.AnnotationTypeMemberDeclarationContext = AnnotationTypeMemberDeclarationContext;
class AnnotationTypeElementDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    annotationTypeElementModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationTypeElementModifierContext);
        }
        return this.getRuleContext(i, AnnotationTypeElementModifierContext);
    }
    dims() {
        return this.getRuleContext(0, DimsContext);
    }
    defaultValue() {
        return this.getRuleContext(0, DefaultValueContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_annotationTypeElementDeclaration;
    }
    enterRule(listener) {
        if (listener.enterAnnotationTypeElementDeclaration) {
            listener.enterAnnotationTypeElementDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnnotationTypeElementDeclaration) {
            listener.exitAnnotationTypeElementDeclaration(this);
        }
    }
}
exports.AnnotationTypeElementDeclarationContext = AnnotationTypeElementDeclarationContext;
class AnnotationTypeElementModifierContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    PUBLIC() {
        return this.getToken(Java8Parser.PUBLIC, 0);
    }
    ABSTRACT() {
        return this.getToken(Java8Parser.ABSTRACT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_annotationTypeElementModifier;
    }
    enterRule(listener) {
        if (listener.enterAnnotationTypeElementModifier) {
            listener.enterAnnotationTypeElementModifier(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnnotationTypeElementModifier) {
            listener.exitAnnotationTypeElementModifier(this);
        }
    }
}
exports.AnnotationTypeElementModifierContext = AnnotationTypeElementModifierContext;
class DefaultValueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DEFAULT() {
        return this.getToken(Java8Parser.DEFAULT, 0);
    }
    elementValue() {
        return this.getRuleContext(0, ElementValueContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_defaultValue;
    }
    enterRule(listener) {
        if (listener.enterDefaultValue) {
            listener.enterDefaultValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDefaultValue) {
            listener.exitDefaultValue(this);
        }
    }
}
exports.DefaultValueContext = DefaultValueContext;
class AnnotationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    normalAnnotation() {
        return this.getRuleContext(0, NormalAnnotationContext);
    }
    markerAnnotation() {
        return this.getRuleContext(0, MarkerAnnotationContext);
    }
    singleElementAnnotation() {
        return this.getRuleContext(0, SingleElementAnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_annotation;
    }
    enterRule(listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    }
}
exports.AnnotationContext = AnnotationContext;
class NormalAnnotationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AT() {
        return this.getToken(Java8Parser.AT, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    elementValuePairList() {
        return this.getRuleContext(0, ElementValuePairListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_normalAnnotation;
    }
    enterRule(listener) {
        if (listener.enterNormalAnnotation) {
            listener.enterNormalAnnotation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitNormalAnnotation) {
            listener.exitNormalAnnotation(this);
        }
    }
}
exports.NormalAnnotationContext = NormalAnnotationContext;
class ElementValuePairListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    elementValuePair(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValuePairContext);
        }
        return this.getRuleContext(i, ElementValuePairContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_elementValuePairList;
    }
    enterRule(listener) {
        if (listener.enterElementValuePairList) {
            listener.enterElementValuePairList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElementValuePairList) {
            listener.exitElementValuePairList(this);
        }
    }
}
exports.ElementValuePairListContext = ElementValuePairListContext;
class ElementValuePairContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    ASSIGN() {
        return this.getToken(Java8Parser.ASSIGN, 0);
    }
    elementValue() {
        return this.getRuleContext(0, ElementValueContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_elementValuePair;
    }
    enterRule(listener) {
        if (listener.enterElementValuePair) {
            listener.enterElementValuePair(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElementValuePair) {
            listener.exitElementValuePair(this);
        }
    }
}
exports.ElementValuePairContext = ElementValuePairContext;
class ElementValueContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionalExpression() {
        return this.getRuleContext(0, ConditionalExpressionContext);
    }
    elementValueArrayInitializer() {
        return this.getRuleContext(0, ElementValueArrayInitializerContext);
    }
    annotation() {
        return this.getRuleContext(0, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_elementValue;
    }
    enterRule(listener) {
        if (listener.enterElementValue) {
            listener.enterElementValue(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElementValue) {
            listener.exitElementValue(this);
        }
    }
}
exports.ElementValueContext = ElementValueContext;
class ElementValueArrayInitializerContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    elementValueList() {
        return this.getRuleContext(0, ElementValueListContext);
    }
    COMMA() {
        return this.getToken(Java8Parser.COMMA, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_elementValueArrayInitializer;
    }
    enterRule(listener) {
        if (listener.enterElementValueArrayInitializer) {
            listener.enterElementValueArrayInitializer(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElementValueArrayInitializer) {
            listener.exitElementValueArrayInitializer(this);
        }
    }
}
exports.ElementValueArrayInitializerContext = ElementValueArrayInitializerContext;
class ElementValueListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    elementValue(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElementValueContext);
        }
        return this.getRuleContext(i, ElementValueContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_elementValueList;
    }
    enterRule(listener) {
        if (listener.enterElementValueList) {
            listener.enterElementValueList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitElementValueList) {
            listener.exitElementValueList(this);
        }
    }
}
exports.ElementValueListContext = ElementValueListContext;
class MarkerAnnotationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AT() {
        return this.getToken(Java8Parser.AT, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_markerAnnotation;
    }
    enterRule(listener) {
        if (listener.enterMarkerAnnotation) {
            listener.enterMarkerAnnotation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMarkerAnnotation) {
            listener.exitMarkerAnnotation(this);
        }
    }
}
exports.MarkerAnnotationContext = MarkerAnnotationContext;
class SingleElementAnnotationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AT() {
        return this.getToken(Java8Parser.AT, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    elementValue() {
        return this.getRuleContext(0, ElementValueContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_singleElementAnnotation;
    }
    enterRule(listener) {
        if (listener.enterSingleElementAnnotation) {
            listener.enterSingleElementAnnotation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSingleElementAnnotation) {
            listener.exitSingleElementAnnotation(this);
        }
    }
}
exports.SingleElementAnnotationContext = SingleElementAnnotationContext;
class ArrayInitializerContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    variableInitializerList() {
        return this.getRuleContext(0, VariableInitializerListContext);
    }
    COMMA() {
        return this.getToken(Java8Parser.COMMA, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_arrayInitializer;
    }
    enterRule(listener) {
        if (listener.enterArrayInitializer) {
            listener.enterArrayInitializer(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayInitializer) {
            listener.exitArrayInitializer(this);
        }
    }
}
exports.ArrayInitializerContext = ArrayInitializerContext;
class VariableInitializerListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    variableInitializer(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }
        return this.getRuleContext(i, VariableInitializerContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_variableInitializerList;
    }
    enterRule(listener) {
        if (listener.enterVariableInitializerList) {
            listener.enterVariableInitializerList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitVariableInitializerList) {
            listener.exitVariableInitializerList(this);
        }
    }
}
exports.VariableInitializerListContext = VariableInitializerListContext;
class BlockContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    blockStatements() {
        return this.getRuleContext(0, BlockStatementsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_block;
    }
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
}
exports.BlockContext = BlockContext;
class BlockStatementsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    blockStatement(i) {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }
        return this.getRuleContext(i, BlockStatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_blockStatements;
    }
    enterRule(listener) {
        if (listener.enterBlockStatements) {
            listener.enterBlockStatements(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlockStatements) {
            listener.exitBlockStatements(this);
        }
    }
}
exports.BlockStatementsContext = BlockStatementsContext;
class BlockStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    localVariableDeclarationStatement() {
        return this.getRuleContext(0, LocalVariableDeclarationStatementContext);
    }
    classDeclaration() {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_blockStatement;
    }
    enterRule(listener) {
        if (listener.enterBlockStatement) {
            listener.enterBlockStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBlockStatement) {
            listener.exitBlockStatement(this);
        }
    }
}
exports.BlockStatementContext = BlockStatementContext;
class LocalVariableDeclarationStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    localVariableDeclaration() {
        return this.getRuleContext(0, LocalVariableDeclarationContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_localVariableDeclarationStatement;
    }
    enterRule(listener) {
        if (listener.enterLocalVariableDeclarationStatement) {
            listener.enterLocalVariableDeclarationStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLocalVariableDeclarationStatement) {
            listener.exitLocalVariableDeclarationStatement(this);
        }
    }
}
exports.LocalVariableDeclarationStatementContext = LocalVariableDeclarationStatementContext;
class LocalVariableDeclarationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    variableDeclaratorList() {
        return this.getRuleContext(0, VariableDeclaratorListContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        return this.getRuleContext(i, VariableModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_localVariableDeclaration;
    }
    enterRule(listener) {
        if (listener.enterLocalVariableDeclaration) {
            listener.enterLocalVariableDeclaration(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLocalVariableDeclaration) {
            listener.exitLocalVariableDeclaration(this);
        }
    }
}
exports.LocalVariableDeclarationContext = LocalVariableDeclarationContext;
class StatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statementWithoutTrailingSubstatement() {
        return this.getRuleContext(0, StatementWithoutTrailingSubstatementContext);
    }
    labeledStatement() {
        return this.getRuleContext(0, LabeledStatementContext);
    }
    ifThenStatement() {
        return this.getRuleContext(0, IfThenStatementContext);
    }
    ifThenElseStatement() {
        return this.getRuleContext(0, IfThenElseStatementContext);
    }
    whileStatement() {
        return this.getRuleContext(0, WhileStatementContext);
    }
    forStatement() {
        return this.getRuleContext(0, ForStatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_statement;
    }
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
}
exports.StatementContext = StatementContext;
class StatementNoShortIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statementWithoutTrailingSubstatement() {
        return this.getRuleContext(0, StatementWithoutTrailingSubstatementContext);
    }
    labeledStatementNoShortIf() {
        return this.getRuleContext(0, LabeledStatementNoShortIfContext);
    }
    ifThenElseStatementNoShortIf() {
        return this.getRuleContext(0, IfThenElseStatementNoShortIfContext);
    }
    whileStatementNoShortIf() {
        return this.getRuleContext(0, WhileStatementNoShortIfContext);
    }
    forStatementNoShortIf() {
        return this.getRuleContext(0, ForStatementNoShortIfContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_statementNoShortIf;
    }
    enterRule(listener) {
        if (listener.enterStatementNoShortIf) {
            listener.enterStatementNoShortIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatementNoShortIf) {
            listener.exitStatementNoShortIf(this);
        }
    }
}
exports.StatementNoShortIfContext = StatementNoShortIfContext;
class StatementWithoutTrailingSubstatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    emptyStatement() {
        return this.getRuleContext(0, EmptyStatementContext);
    }
    expressionStatement() {
        return this.getRuleContext(0, ExpressionStatementContext);
    }
    assertStatement() {
        return this.getRuleContext(0, AssertStatementContext);
    }
    switchStatement() {
        return this.getRuleContext(0, SwitchStatementContext);
    }
    doStatement() {
        return this.getRuleContext(0, DoStatementContext);
    }
    breakStatement() {
        return this.getRuleContext(0, BreakStatementContext);
    }
    continueStatement() {
        return this.getRuleContext(0, ContinueStatementContext);
    }
    returnStatement() {
        return this.getRuleContext(0, ReturnStatementContext);
    }
    synchronizedStatement() {
        return this.getRuleContext(0, SynchronizedStatementContext);
    }
    throwStatement() {
        return this.getRuleContext(0, ThrowStatementContext);
    }
    tryStatement() {
        return this.getRuleContext(0, TryStatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_statementWithoutTrailingSubstatement;
    }
    enterRule(listener) {
        if (listener.enterStatementWithoutTrailingSubstatement) {
            listener.enterStatementWithoutTrailingSubstatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatementWithoutTrailingSubstatement) {
            listener.exitStatementWithoutTrailingSubstatement(this);
        }
    }
}
exports.StatementWithoutTrailingSubstatementContext = StatementWithoutTrailingSubstatementContext;
class EmptyStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_emptyStatement;
    }
    enterRule(listener) {
        if (listener.enterEmptyStatement) {
            listener.enterEmptyStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEmptyStatement) {
            listener.exitEmptyStatement(this);
        }
    }
}
exports.EmptyStatementContext = EmptyStatementContext;
class LabeledStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    COLON() {
        return this.getToken(Java8Parser.COLON, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_labeledStatement;
    }
    enterRule(listener) {
        if (listener.enterLabeledStatement) {
            listener.enterLabeledStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLabeledStatement) {
            listener.exitLabeledStatement(this);
        }
    }
}
exports.LabeledStatementContext = LabeledStatementContext;
class LabeledStatementNoShortIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    COLON() {
        return this.getToken(Java8Parser.COLON, 0);
    }
    statementNoShortIf() {
        return this.getRuleContext(0, StatementNoShortIfContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_labeledStatementNoShortIf;
    }
    enterRule(listener) {
        if (listener.enterLabeledStatementNoShortIf) {
            listener.enterLabeledStatementNoShortIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLabeledStatementNoShortIf) {
            listener.exitLabeledStatementNoShortIf(this);
        }
    }
}
exports.LabeledStatementNoShortIfContext = LabeledStatementNoShortIfContext;
class ExpressionStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statementExpression() {
        return this.getRuleContext(0, StatementExpressionContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_expressionStatement;
    }
    enterRule(listener) {
        if (listener.enterExpressionStatement) {
            listener.enterExpressionStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpressionStatement) {
            listener.exitExpressionStatement(this);
        }
    }
}
exports.ExpressionStatementContext = ExpressionStatementContext;
class StatementExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    assignment() {
        return this.getRuleContext(0, AssignmentContext);
    }
    preIncrementExpression() {
        return this.getRuleContext(0, PreIncrementExpressionContext);
    }
    preDecrementExpression() {
        return this.getRuleContext(0, PreDecrementExpressionContext);
    }
    postIncrementExpression() {
        return this.getRuleContext(0, PostIncrementExpressionContext);
    }
    postDecrementExpression() {
        return this.getRuleContext(0, PostDecrementExpressionContext);
    }
    methodInvocation() {
        return this.getRuleContext(0, MethodInvocationContext);
    }
    classInstanceCreationExpression() {
        return this.getRuleContext(0, ClassInstanceCreationExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_statementExpression;
    }
    enterRule(listener) {
        if (listener.enterStatementExpression) {
            listener.enterStatementExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatementExpression) {
            listener.exitStatementExpression(this);
        }
    }
}
exports.StatementExpressionContext = StatementExpressionContext;
class IfThenStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF() {
        return this.getToken(Java8Parser.IF, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_ifThenStatement;
    }
    enterRule(listener) {
        if (listener.enterIfThenStatement) {
            listener.enterIfThenStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfThenStatement) {
            listener.exitIfThenStatement(this);
        }
    }
}
exports.IfThenStatementContext = IfThenStatementContext;
class IfThenElseStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF() {
        return this.getToken(Java8Parser.IF, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statementNoShortIf() {
        return this.getRuleContext(0, StatementNoShortIfContext);
    }
    ELSE() {
        return this.getToken(Java8Parser.ELSE, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_ifThenElseStatement;
    }
    enterRule(listener) {
        if (listener.enterIfThenElseStatement) {
            listener.enterIfThenElseStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfThenElseStatement) {
            listener.exitIfThenElseStatement(this);
        }
    }
}
exports.IfThenElseStatementContext = IfThenElseStatementContext;
class IfThenElseStatementNoShortIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IF() {
        return this.getToken(Java8Parser.IF, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statementNoShortIf(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementNoShortIfContext);
        }
        return this.getRuleContext(i, StatementNoShortIfContext);
    }
    ELSE() {
        return this.getToken(Java8Parser.ELSE, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_ifThenElseStatementNoShortIf;
    }
    enterRule(listener) {
        if (listener.enterIfThenElseStatementNoShortIf) {
            listener.enterIfThenElseStatementNoShortIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitIfThenElseStatementNoShortIf) {
            listener.exitIfThenElseStatementNoShortIf(this);
        }
    }
}
exports.IfThenElseStatementNoShortIfContext = IfThenElseStatementNoShortIfContext;
class AssertStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASSERT() {
        return this.getToken(Java8Parser.ASSERT, 0);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    COLON() {
        return this.getToken(Java8Parser.COLON, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_assertStatement;
    }
    enterRule(listener) {
        if (listener.enterAssertStatement) {
            listener.enterAssertStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssertStatement) {
            listener.exitAssertStatement(this);
        }
    }
}
exports.AssertStatementContext = AssertStatementContext;
class SwitchStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SWITCH() {
        return this.getToken(Java8Parser.SWITCH, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    switchBlock() {
        return this.getRuleContext(0, SwitchBlockContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_switchStatement;
    }
    enterRule(listener) {
        if (listener.enterSwitchStatement) {
            listener.enterSwitchStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSwitchStatement) {
            listener.exitSwitchStatement(this);
        }
    }
}
exports.SwitchStatementContext = SwitchStatementContext;
class SwitchBlockContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACE() {
        return this.getToken(Java8Parser.LBRACE, 0);
    }
    RBRACE() {
        return this.getToken(Java8Parser.RBRACE, 0);
    }
    switchBlockStatementGroup(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchBlockStatementGroupContext);
        }
        return this.getRuleContext(i, SwitchBlockStatementGroupContext);
    }
    switchLabel(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        return this.getRuleContext(i, SwitchLabelContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_switchBlock;
    }
    enterRule(listener) {
        if (listener.enterSwitchBlock) {
            listener.enterSwitchBlock(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSwitchBlock) {
            listener.exitSwitchBlock(this);
        }
    }
}
exports.SwitchBlockContext = SwitchBlockContext;
class SwitchBlockStatementGroupContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    switchLabels() {
        return this.getRuleContext(0, SwitchLabelsContext);
    }
    blockStatements() {
        return this.getRuleContext(0, BlockStatementsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_switchBlockStatementGroup;
    }
    enterRule(listener) {
        if (listener.enterSwitchBlockStatementGroup) {
            listener.enterSwitchBlockStatementGroup(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSwitchBlockStatementGroup) {
            listener.exitSwitchBlockStatementGroup(this);
        }
    }
}
exports.SwitchBlockStatementGroupContext = SwitchBlockStatementGroupContext;
class SwitchLabelsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    switchLabel(i) {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }
        return this.getRuleContext(i, SwitchLabelContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_switchLabels;
    }
    enterRule(listener) {
        if (listener.enterSwitchLabels) {
            listener.enterSwitchLabels(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSwitchLabels) {
            listener.exitSwitchLabels(this);
        }
    }
}
exports.SwitchLabelsContext = SwitchLabelsContext;
class SwitchLabelContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CASE() {
        return this.getToken(Java8Parser.CASE, 0);
    }
    constantExpression() {
        return this.getRuleContext(0, ConstantExpressionContext);
    }
    COLON() {
        return this.getToken(Java8Parser.COLON, 0);
    }
    enumConstantName() {
        return this.getRuleContext(0, EnumConstantNameContext);
    }
    DEFAULT() {
        return this.getToken(Java8Parser.DEFAULT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_switchLabel;
    }
    enterRule(listener) {
        if (listener.enterSwitchLabel) {
            listener.enterSwitchLabel(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSwitchLabel) {
            listener.exitSwitchLabel(this);
        }
    }
}
exports.SwitchLabelContext = SwitchLabelContext;
class EnumConstantNameContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enumConstantName;
    }
    enterRule(listener) {
        if (listener.enterEnumConstantName) {
            listener.enterEnumConstantName(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnumConstantName) {
            listener.exitEnumConstantName(this);
        }
    }
}
exports.EnumConstantNameContext = EnumConstantNameContext;
class WhileStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WHILE() {
        return this.getToken(Java8Parser.WHILE, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_whileStatement;
    }
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
}
exports.WhileStatementContext = WhileStatementContext;
class WhileStatementNoShortIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WHILE() {
        return this.getToken(Java8Parser.WHILE, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statementNoShortIf() {
        return this.getRuleContext(0, StatementNoShortIfContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_whileStatementNoShortIf;
    }
    enterRule(listener) {
        if (listener.enterWhileStatementNoShortIf) {
            listener.enterWhileStatementNoShortIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitWhileStatementNoShortIf) {
            listener.exitWhileStatementNoShortIf(this);
        }
    }
}
exports.WhileStatementNoShortIfContext = WhileStatementNoShortIfContext;
class DoStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DO() {
        return this.getToken(Java8Parser.DO, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    WHILE() {
        return this.getToken(Java8Parser.WHILE, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_doStatement;
    }
    enterRule(listener) {
        if (listener.enterDoStatement) {
            listener.enterDoStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDoStatement) {
            listener.exitDoStatement(this);
        }
    }
}
exports.DoStatementContext = DoStatementContext;
class ForStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    basicForStatement() {
        return this.getRuleContext(0, BasicForStatementContext);
    }
    enhancedForStatement() {
        return this.getRuleContext(0, EnhancedForStatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_forStatement;
    }
    enterRule(listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    }
}
exports.ForStatementContext = ForStatementContext;
class ForStatementNoShortIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    basicForStatementNoShortIf() {
        return this.getRuleContext(0, BasicForStatementNoShortIfContext);
    }
    enhancedForStatementNoShortIf() {
        return this.getRuleContext(0, EnhancedForStatementNoShortIfContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_forStatementNoShortIf;
    }
    enterRule(listener) {
        if (listener.enterForStatementNoShortIf) {
            listener.enterForStatementNoShortIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForStatementNoShortIf) {
            listener.exitForStatementNoShortIf(this);
        }
    }
}
exports.ForStatementNoShortIfContext = ForStatementNoShortIfContext;
class BasicForStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FOR() {
        return this.getToken(Java8Parser.FOR, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.SEMI);
        }
        else {
            return this.getToken(Java8Parser.SEMI, i);
        }
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    forInit() {
        return this.getRuleContext(0, ForInitContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    forUpdate() {
        return this.getRuleContext(0, ForUpdateContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_basicForStatement;
    }
    enterRule(listener) {
        if (listener.enterBasicForStatement) {
            listener.enterBasicForStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBasicForStatement) {
            listener.exitBasicForStatement(this);
        }
    }
}
exports.BasicForStatementContext = BasicForStatementContext;
class BasicForStatementNoShortIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FOR() {
        return this.getToken(Java8Parser.FOR, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.SEMI);
        }
        else {
            return this.getToken(Java8Parser.SEMI, i);
        }
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statementNoShortIf() {
        return this.getRuleContext(0, StatementNoShortIfContext);
    }
    forInit() {
        return this.getRuleContext(0, ForInitContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    forUpdate() {
        return this.getRuleContext(0, ForUpdateContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_basicForStatementNoShortIf;
    }
    enterRule(listener) {
        if (listener.enterBasicForStatementNoShortIf) {
            listener.enterBasicForStatementNoShortIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBasicForStatementNoShortIf) {
            listener.exitBasicForStatementNoShortIf(this);
        }
    }
}
exports.BasicForStatementNoShortIfContext = BasicForStatementNoShortIfContext;
class ForInitContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statementExpressionList() {
        return this.getRuleContext(0, StatementExpressionListContext);
    }
    localVariableDeclaration() {
        return this.getRuleContext(0, LocalVariableDeclarationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_forInit;
    }
    enterRule(listener) {
        if (listener.enterForInit) {
            listener.enterForInit(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForInit) {
            listener.exitForInit(this);
        }
    }
}
exports.ForInitContext = ForInitContext;
class ForUpdateContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statementExpressionList() {
        return this.getRuleContext(0, StatementExpressionListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_forUpdate;
    }
    enterRule(listener) {
        if (listener.enterForUpdate) {
            listener.enterForUpdate(this);
        }
    }
    exitRule(listener) {
        if (listener.exitForUpdate) {
            listener.exitForUpdate(this);
        }
    }
}
exports.ForUpdateContext = ForUpdateContext;
class StatementExpressionListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    statementExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementExpressionContext);
        }
        return this.getRuleContext(i, StatementExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_statementExpressionList;
    }
    enterRule(listener) {
        if (listener.enterStatementExpressionList) {
            listener.enterStatementExpressionList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitStatementExpressionList) {
            listener.exitStatementExpressionList(this);
        }
    }
}
exports.StatementExpressionListContext = StatementExpressionListContext;
class EnhancedForStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FOR() {
        return this.getToken(Java8Parser.FOR, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    COLON() {
        return this.getToken(Java8Parser.COLON, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statement() {
        return this.getRuleContext(0, StatementContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        return this.getRuleContext(i, VariableModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enhancedForStatement;
    }
    enterRule(listener) {
        if (listener.enterEnhancedForStatement) {
            listener.enterEnhancedForStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnhancedForStatement) {
            listener.exitEnhancedForStatement(this);
        }
    }
}
exports.EnhancedForStatementContext = EnhancedForStatementContext;
class EnhancedForStatementNoShortIfContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FOR() {
        return this.getToken(Java8Parser.FOR, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    COLON() {
        return this.getToken(Java8Parser.COLON, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    statementNoShortIf() {
        return this.getRuleContext(0, StatementNoShortIfContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        return this.getRuleContext(i, VariableModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_enhancedForStatementNoShortIf;
    }
    enterRule(listener) {
        if (listener.enterEnhancedForStatementNoShortIf) {
            listener.enterEnhancedForStatementNoShortIf(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEnhancedForStatementNoShortIf) {
            listener.exitEnhancedForStatementNoShortIf(this);
        }
    }
}
exports.EnhancedForStatementNoShortIfContext = EnhancedForStatementNoShortIfContext;
class BreakStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    BREAK() {
        return this.getToken(Java8Parser.BREAK, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_breakStatement;
    }
    enterRule(listener) {
        if (listener.enterBreakStatement) {
            listener.enterBreakStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitBreakStatement) {
            listener.exitBreakStatement(this);
        }
    }
}
exports.BreakStatementContext = BreakStatementContext;
class ContinueStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CONTINUE() {
        return this.getToken(Java8Parser.CONTINUE, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_continueStatement;
    }
    enterRule(listener) {
        if (listener.enterContinueStatement) {
            listener.enterContinueStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitContinueStatement) {
            listener.exitContinueStatement(this);
        }
    }
}
exports.ContinueStatementContext = ContinueStatementContext;
class ReturnStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    RETURN() {
        return this.getToken(Java8Parser.RETURN, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_returnStatement;
    }
    enterRule(listener) {
        if (listener.enterReturnStatement) {
            listener.enterReturnStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitReturnStatement) {
            listener.exitReturnStatement(this);
        }
    }
}
exports.ReturnStatementContext = ReturnStatementContext;
class ThrowStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    THROW() {
        return this.getToken(Java8Parser.THROW, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_throwStatement;
    }
    enterRule(listener) {
        if (listener.enterThrowStatement) {
            listener.enterThrowStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitThrowStatement) {
            listener.exitThrowStatement(this);
        }
    }
}
exports.ThrowStatementContext = ThrowStatementContext;
class SynchronizedStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SYNCHRONIZED() {
        return this.getToken(Java8Parser.SYNCHRONIZED, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_synchronizedStatement;
    }
    enterRule(listener) {
        if (listener.enterSynchronizedStatement) {
            listener.enterSynchronizedStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitSynchronizedStatement) {
            listener.exitSynchronizedStatement(this);
        }
    }
}
exports.SynchronizedStatementContext = SynchronizedStatementContext;
class TryStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TRY() {
        return this.getToken(Java8Parser.TRY, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    catches() {
        return this.getRuleContext(0, CatchesContext);
    }
    finally_() {
        return this.getRuleContext(0, Finally_Context);
    }
    tryWithResourcesStatement() {
        return this.getRuleContext(0, TryWithResourcesStatementContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_tryStatement;
    }
    enterRule(listener) {
        if (listener.enterTryStatement) {
            listener.enterTryStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTryStatement) {
            listener.exitTryStatement(this);
        }
    }
}
exports.TryStatementContext = TryStatementContext;
class CatchesContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    catchClause(i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }
        return this.getRuleContext(i, CatchClauseContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_catches;
    }
    enterRule(listener) {
        if (listener.enterCatches) {
            listener.enterCatches(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCatches) {
            listener.exitCatches(this);
        }
    }
}
exports.CatchesContext = CatchesContext;
class CatchClauseContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CATCH() {
        return this.getToken(Java8Parser.CATCH, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    catchFormalParameter() {
        return this.getRuleContext(0, CatchFormalParameterContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_catchClause;
    }
    enterRule(listener) {
        if (listener.enterCatchClause) {
            listener.enterCatchClause(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCatchClause) {
            listener.exitCatchClause(this);
        }
    }
}
exports.CatchClauseContext = CatchClauseContext;
class CatchFormalParameterContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    catchType() {
        return this.getRuleContext(0, CatchTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        return this.getRuleContext(i, VariableModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_catchFormalParameter;
    }
    enterRule(listener) {
        if (listener.enterCatchFormalParameter) {
            listener.enterCatchFormalParameter(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCatchFormalParameter) {
            listener.exitCatchFormalParameter(this);
        }
    }
}
exports.CatchFormalParameterContext = CatchFormalParameterContext;
class CatchTypeContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannClassType() {
        return this.getRuleContext(0, UnannClassTypeContext);
    }
    BITOR(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.BITOR);
        }
        else {
            return this.getToken(Java8Parser.BITOR, i);
        }
    }
    classType(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassTypeContext);
        }
        return this.getRuleContext(i, ClassTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_catchType;
    }
    enterRule(listener) {
        if (listener.enterCatchType) {
            listener.enterCatchType(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCatchType) {
            listener.exitCatchType(this);
        }
    }
}
exports.CatchTypeContext = CatchTypeContext;
class Finally_Context extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FINALLY() {
        return this.getToken(Java8Parser.FINALLY, 0);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_finally_;
    }
    enterRule(listener) {
        if (listener.enterFinally_) {
            listener.enterFinally_(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFinally_) {
            listener.exitFinally_(this);
        }
    }
}
exports.Finally_Context = Finally_Context;
class TryWithResourcesStatementContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TRY() {
        return this.getToken(Java8Parser.TRY, 0);
    }
    resourceSpecification() {
        return this.getRuleContext(0, ResourceSpecificationContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    catches() {
        return this.getRuleContext(0, CatchesContext);
    }
    finally_() {
        return this.getRuleContext(0, Finally_Context);
    }
    get ruleIndex() {
        return Java8Parser.RULE_tryWithResourcesStatement;
    }
    enterRule(listener) {
        if (listener.enterTryWithResourcesStatement) {
            listener.enterTryWithResourcesStatement(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTryWithResourcesStatement) {
            listener.exitTryWithResourcesStatement(this);
        }
    }
}
exports.TryWithResourcesStatementContext = TryWithResourcesStatementContext;
class ResourceSpecificationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    resourceList() {
        return this.getRuleContext(0, ResourceListContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    SEMI() {
        return this.getToken(Java8Parser.SEMI, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_resourceSpecification;
    }
    enterRule(listener) {
        if (listener.enterResourceSpecification) {
            listener.enterResourceSpecification(this);
        }
    }
    exitRule(listener) {
        if (listener.exitResourceSpecification) {
            listener.exitResourceSpecification(this);
        }
    }
}
exports.ResourceSpecificationContext = ResourceSpecificationContext;
class ResourceListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    resource(i) {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }
        return this.getRuleContext(i, ResourceContext);
    }
    SEMI(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.SEMI);
        }
        else {
            return this.getToken(Java8Parser.SEMI, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_resourceList;
    }
    enterRule(listener) {
        if (listener.enterResourceList) {
            listener.enterResourceList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitResourceList) {
            listener.exitResourceList(this);
        }
    }
}
exports.ResourceListContext = ResourceListContext;
class ResourceContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unannType() {
        return this.getRuleContext(0, UnannTypeContext);
    }
    variableDeclaratorId() {
        return this.getRuleContext(0, VariableDeclaratorIdContext);
    }
    ASSIGN() {
        return this.getToken(Java8Parser.ASSIGN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    variableModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }
        return this.getRuleContext(i, VariableModifierContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_resource;
    }
    enterRule(listener) {
        if (listener.enterResource) {
            listener.enterResource(this);
        }
    }
    exitRule(listener) {
        if (listener.exitResource) {
            listener.exitResource(this);
        }
    }
}
exports.ResourceContext = ResourceContext;
class PrimaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primaryNoNewArray_lfno_primary() {
        return this.getRuleContext(0, PrimaryNoNewArray_lfno_primaryContext);
    }
    arrayCreationExpression() {
        return this.getRuleContext(0, ArrayCreationExpressionContext);
    }
    primaryNoNewArray_lf_primary(i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryNoNewArray_lf_primaryContext);
        }
        return this.getRuleContext(i, PrimaryNoNewArray_lf_primaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primary;
    }
    enterRule(listener) {
        if (listener.enterPrimary) {
            listener.enterPrimary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimary) {
            listener.exitPrimary(this);
        }
    }
}
exports.PrimaryContext = PrimaryContext;
class PrimaryNoNewArrayContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    CLASS() {
        return this.getToken(Java8Parser.CLASS, 0);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    VOID() {
        return this.getToken(Java8Parser.VOID, 0);
    }
    THIS() {
        return this.getToken(Java8Parser.THIS, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    classInstanceCreationExpression() {
        return this.getRuleContext(0, ClassInstanceCreationExpressionContext);
    }
    fieldAccess() {
        return this.getRuleContext(0, FieldAccessContext);
    }
    arrayAccess() {
        return this.getRuleContext(0, ArrayAccessContext);
    }
    methodInvocation() {
        return this.getRuleContext(0, MethodInvocationContext);
    }
    methodReference() {
        return this.getRuleContext(0, MethodReferenceContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray) {
            listener.enterPrimaryNoNewArray(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray) {
            listener.exitPrimaryNoNewArray(this);
        }
    }
}
exports.PrimaryNoNewArrayContext = PrimaryNoNewArrayContext;
class PrimaryNoNewArray_lf_arrayAccessContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lf_arrayAccess;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lf_arrayAccess) {
            listener.enterPrimaryNoNewArray_lf_arrayAccess(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lf_arrayAccess) {
            listener.exitPrimaryNoNewArray_lf_arrayAccess(this);
        }
    }
}
exports.PrimaryNoNewArray_lf_arrayAccessContext = PrimaryNoNewArray_lf_arrayAccessContext;
class PrimaryNoNewArray_lfno_arrayAccessContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    CLASS() {
        return this.getToken(Java8Parser.CLASS, 0);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    VOID() {
        return this.getToken(Java8Parser.VOID, 0);
    }
    THIS() {
        return this.getToken(Java8Parser.THIS, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    classInstanceCreationExpression() {
        return this.getRuleContext(0, ClassInstanceCreationExpressionContext);
    }
    fieldAccess() {
        return this.getRuleContext(0, FieldAccessContext);
    }
    methodInvocation() {
        return this.getRuleContext(0, MethodInvocationContext);
    }
    methodReference() {
        return this.getRuleContext(0, MethodReferenceContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lfno_arrayAccess;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lfno_arrayAccess) {
            listener.enterPrimaryNoNewArray_lfno_arrayAccess(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lfno_arrayAccess) {
            listener.exitPrimaryNoNewArray_lfno_arrayAccess(this);
        }
    }
}
exports.PrimaryNoNewArray_lfno_arrayAccessContext = PrimaryNoNewArray_lfno_arrayAccessContext;
class PrimaryNoNewArray_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classInstanceCreationExpression_lf_primary() {
        return this.getRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
    }
    fieldAccess_lf_primary() {
        return this.getRuleContext(0, FieldAccess_lf_primaryContext);
    }
    arrayAccess_lf_primary() {
        return this.getRuleContext(0, ArrayAccess_lf_primaryContext);
    }
    methodInvocation_lf_primary() {
        return this.getRuleContext(0, MethodInvocation_lf_primaryContext);
    }
    methodReference_lf_primary() {
        return this.getRuleContext(0, MethodReference_lf_primaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lf_primary) {
            listener.enterPrimaryNoNewArray_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lf_primary) {
            listener.exitPrimaryNoNewArray_lf_primary(this);
        }
    }
}
exports.PrimaryNoNewArray_lf_primaryContext = PrimaryNoNewArray_lf_primaryContext;
class PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
            listener.enterPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary) {
            listener.exitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(this);
        }
    }
}
exports.PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext = PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext;
class PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    classInstanceCreationExpression_lf_primary() {
        return this.getRuleContext(0, ClassInstanceCreationExpression_lf_primaryContext);
    }
    fieldAccess_lf_primary() {
        return this.getRuleContext(0, FieldAccess_lf_primaryContext);
    }
    methodInvocation_lf_primary() {
        return this.getRuleContext(0, MethodInvocation_lf_primaryContext);
    }
    methodReference_lf_primary() {
        return this.getRuleContext(0, MethodReference_lf_primaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
            listener.enterPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary) {
            listener.exitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary(this);
        }
    }
}
exports.PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext = PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext;
class PrimaryNoNewArray_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    CLASS() {
        return this.getToken(Java8Parser.CLASS, 0);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    unannPrimitiveType() {
        return this.getRuleContext(0, UnannPrimitiveTypeContext);
    }
    VOID() {
        return this.getToken(Java8Parser.VOID, 0);
    }
    THIS() {
        return this.getToken(Java8Parser.THIS, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    classInstanceCreationExpression_lfno_primary() {
        return this.getRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
    }
    fieldAccess_lfno_primary() {
        return this.getRuleContext(0, FieldAccess_lfno_primaryContext);
    }
    arrayAccess_lfno_primary() {
        return this.getRuleContext(0, ArrayAccess_lfno_primaryContext);
    }
    methodInvocation_lfno_primary() {
        return this.getRuleContext(0, MethodInvocation_lfno_primaryContext);
    }
    methodReference_lfno_primary() {
        return this.getRuleContext(0, MethodReference_lfno_primaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lfno_primary) {
            listener.enterPrimaryNoNewArray_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lfno_primary) {
            listener.exitPrimaryNoNewArray_lfno_primary(this);
        }
    }
}
exports.PrimaryNoNewArray_lfno_primaryContext = PrimaryNoNewArray_lfno_primaryContext;
class PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
            listener.enterPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary) {
            listener.exitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(this);
        }
    }
}
exports.PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext = PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext;
class PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    CLASS() {
        return this.getToken(Java8Parser.CLASS, 0);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    unannPrimitiveType() {
        return this.getRuleContext(0, UnannPrimitiveTypeContext);
    }
    VOID() {
        return this.getToken(Java8Parser.VOID, 0);
    }
    THIS() {
        return this.getToken(Java8Parser.THIS, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    classInstanceCreationExpression_lfno_primary() {
        return this.getRuleContext(0, ClassInstanceCreationExpression_lfno_primaryContext);
    }
    fieldAccess_lfno_primary() {
        return this.getRuleContext(0, FieldAccess_lfno_primaryContext);
    }
    methodInvocation_lfno_primary() {
        return this.getRuleContext(0, MethodInvocation_lfno_primaryContext);
    }
    methodReference_lfno_primary() {
        return this.getRuleContext(0, MethodReference_lfno_primaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
            listener.enterPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary) {
            listener.exitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary(this);
        }
    }
}
exports.PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext = PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext;
class ClassInstanceCreationExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NEW() {
        return this.getToken(Java8Parser.NEW, 0);
    }
    Identifier(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.Identifier);
        }
        else {
            return this.getToken(Java8Parser.Identifier, i);
        }
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.DOT);
        }
        else {
            return this.getToken(Java8Parser.DOT, i);
        }
    }
    typeArgumentsOrDiamond() {
        return this.getRuleContext(0, TypeArgumentsOrDiamondContext);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    classBody() {
        return this.getRuleContext(0, ClassBodyContext);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    primary() {
        return this.getRuleContext(0, PrimaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classInstanceCreationExpression;
    }
    enterRule(listener) {
        if (listener.enterClassInstanceCreationExpression) {
            listener.enterClassInstanceCreationExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassInstanceCreationExpression) {
            listener.exitClassInstanceCreationExpression(this);
        }
    }
}
exports.ClassInstanceCreationExpressionContext = ClassInstanceCreationExpressionContext;
class ClassInstanceCreationExpression_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    NEW() {
        return this.getToken(Java8Parser.NEW, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    typeArgumentsOrDiamond() {
        return this.getRuleContext(0, TypeArgumentsOrDiamondContext);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    classBody() {
        return this.getRuleContext(0, ClassBodyContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classInstanceCreationExpression_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterClassInstanceCreationExpression_lf_primary) {
            listener.enterClassInstanceCreationExpression_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassInstanceCreationExpression_lf_primary) {
            listener.exitClassInstanceCreationExpression_lf_primary(this);
        }
    }
}
exports.ClassInstanceCreationExpression_lf_primaryContext = ClassInstanceCreationExpression_lf_primaryContext;
class ClassInstanceCreationExpression_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NEW() {
        return this.getToken(Java8Parser.NEW, 0);
    }
    Identifier(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.Identifier);
        }
        else {
            return this.getToken(Java8Parser.Identifier, i);
        }
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.DOT);
        }
        else {
            return this.getToken(Java8Parser.DOT, i);
        }
    }
    typeArgumentsOrDiamond() {
        return this.getRuleContext(0, TypeArgumentsOrDiamondContext);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    classBody() {
        return this.getRuleContext(0, ClassBodyContext);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_classInstanceCreationExpression_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterClassInstanceCreationExpression_lfno_primary) {
            listener.enterClassInstanceCreationExpression_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitClassInstanceCreationExpression_lfno_primary) {
            listener.exitClassInstanceCreationExpression_lfno_primary(this);
        }
    }
}
exports.ClassInstanceCreationExpression_lfno_primaryContext = ClassInstanceCreationExpression_lfno_primaryContext;
class TypeArgumentsOrDiamondContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    LT() {
        return this.getToken(Java8Parser.LT, 0);
    }
    GT() {
        return this.getToken(Java8Parser.GT, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_typeArgumentsOrDiamond;
    }
    enterRule(listener) {
        if (listener.enterTypeArgumentsOrDiamond) {
            listener.enterTypeArgumentsOrDiamond(this);
        }
    }
    exitRule(listener) {
        if (listener.exitTypeArgumentsOrDiamond) {
            listener.exitTypeArgumentsOrDiamond(this);
        }
    }
}
exports.TypeArgumentsOrDiamondContext = TypeArgumentsOrDiamondContext;
class FieldAccessContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primary() {
        return this.getRuleContext(0, PrimaryContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.DOT);
        }
        else {
            return this.getToken(Java8Parser.DOT, i);
        }
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_fieldAccess;
    }
    enterRule(listener) {
        if (listener.enterFieldAccess) {
            listener.enterFieldAccess(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFieldAccess) {
            listener.exitFieldAccess(this);
        }
    }
}
exports.FieldAccessContext = FieldAccessContext;
class FieldAccess_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_fieldAccess_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterFieldAccess_lf_primary) {
            listener.enterFieldAccess_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFieldAccess_lf_primary) {
            listener.exitFieldAccess_lf_primary(this);
        }
    }
}
exports.FieldAccess_lf_primaryContext = FieldAccess_lf_primaryContext;
class FieldAccess_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.DOT);
        }
        else {
            return this.getToken(Java8Parser.DOT, i);
        }
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_fieldAccess_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterFieldAccess_lfno_primary) {
            listener.enterFieldAccess_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitFieldAccess_lfno_primary) {
            listener.exitFieldAccess_lfno_primary(this);
        }
    }
}
exports.FieldAccess_lfno_primaryContext = FieldAccess_lfno_primaryContext;
class ArrayAccessContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    primaryNoNewArray_lfno_arrayAccess() {
        return this.getRuleContext(0, PrimaryNoNewArray_lfno_arrayAccessContext);
    }
    primaryNoNewArray_lf_arrayAccess(i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryNoNewArray_lf_arrayAccessContext);
        }
        return this.getRuleContext(i, PrimaryNoNewArray_lf_arrayAccessContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_arrayAccess;
    }
    enterRule(listener) {
        if (listener.enterArrayAccess) {
            listener.enterArrayAccess(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayAccess) {
            listener.exitArrayAccess(this);
        }
    }
}
exports.ArrayAccessContext = ArrayAccessContext;
class ArrayAccess_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary() {
        return this.getRuleContext(0, PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary(i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
        }
        return this.getRuleContext(i, PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_arrayAccess_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterArrayAccess_lf_primary) {
            listener.enterArrayAccess_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayAccess_lf_primary) {
            listener.exitArrayAccess_lf_primary(this);
        }
    }
}
exports.ArrayAccess_lf_primaryContext = ArrayAccess_lf_primaryContext;
class ArrayAccess_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    LBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LBRACK);
        }
        else {
            return this.getToken(Java8Parser.LBRACK, i);
        }
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    RBRACK(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.RBRACK);
        }
        else {
            return this.getToken(Java8Parser.RBRACK, i);
        }
    }
    primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary() {
        return this.getRuleContext(0, PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext);
    }
    primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary(i) {
        if (i === undefined) {
            return this.getRuleContexts(PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
        }
        return this.getRuleContext(i, PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_arrayAccess_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterArrayAccess_lfno_primary) {
            listener.enterArrayAccess_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayAccess_lfno_primary) {
            listener.exitArrayAccess_lfno_primary(this);
        }
    }
}
exports.ArrayAccess_lfno_primaryContext = ArrayAccess_lfno_primaryContext;
class MethodInvocationContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    methodName() {
        return this.getRuleContext(0, MethodNameContext);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.DOT);
        }
        else {
            return this.getToken(Java8Parser.DOT, i);
        }
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    primary() {
        return this.getRuleContext(0, PrimaryContext);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodInvocation;
    }
    enterRule(listener) {
        if (listener.enterMethodInvocation) {
            listener.enterMethodInvocation(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodInvocation) {
            listener.exitMethodInvocation(this);
        }
    }
}
exports.MethodInvocationContext = MethodInvocationContext;
class MethodInvocation_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodInvocation_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterMethodInvocation_lf_primary) {
            listener.enterMethodInvocation_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodInvocation_lf_primary) {
            listener.exitMethodInvocation_lf_primary(this);
        }
    }
}
exports.MethodInvocation_lf_primaryContext = MethodInvocation_lf_primaryContext;
class MethodInvocation_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    methodName() {
        return this.getRuleContext(0, MethodNameContext);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    argumentList() {
        return this.getRuleContext(0, ArgumentListContext);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.DOT);
        }
        else {
            return this.getToken(Java8Parser.DOT, i);
        }
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodInvocation_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterMethodInvocation_lfno_primary) {
            listener.enterMethodInvocation_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodInvocation_lfno_primary) {
            listener.exitMethodInvocation_lfno_primary(this);
        }
    }
}
exports.MethodInvocation_lfno_primaryContext = MethodInvocation_lfno_primaryContext;
class ArgumentListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        return this.getRuleContext(i, ExpressionContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_argumentList;
    }
    enterRule(listener) {
        if (listener.enterArgumentList) {
            listener.enterArgumentList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArgumentList) {
            listener.exitArgumentList(this);
        }
    }
}
exports.ArgumentListContext = ArgumentListContext;
class MethodReferenceContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    COLONCOLON() {
        return this.getToken(Java8Parser.COLONCOLON, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    referenceType() {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    primary() {
        return this.getRuleContext(0, PrimaryContext);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    classType() {
        return this.getRuleContext(0, ClassTypeContext);
    }
    NEW() {
        return this.getToken(Java8Parser.NEW, 0);
    }
    arrayType() {
        return this.getRuleContext(0, ArrayTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodReference;
    }
    enterRule(listener) {
        if (listener.enterMethodReference) {
            listener.enterMethodReference(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodReference) {
            listener.exitMethodReference(this);
        }
    }
}
exports.MethodReferenceContext = MethodReferenceContext;
class MethodReference_lf_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    COLONCOLON() {
        return this.getToken(Java8Parser.COLONCOLON, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodReference_lf_primary;
    }
    enterRule(listener) {
        if (listener.enterMethodReference_lf_primary) {
            listener.enterMethodReference_lf_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodReference_lf_primary) {
            listener.exitMethodReference_lf_primary(this);
        }
    }
}
exports.MethodReference_lf_primaryContext = MethodReference_lf_primaryContext;
class MethodReference_lfno_primaryContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    COLONCOLON() {
        return this.getToken(Java8Parser.COLONCOLON, 0);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    typeArguments() {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    referenceType() {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    SUPER() {
        return this.getToken(Java8Parser.SUPER, 0);
    }
    typeName() {
        return this.getRuleContext(0, TypeNameContext);
    }
    DOT() {
        return this.getToken(Java8Parser.DOT, 0);
    }
    classType() {
        return this.getRuleContext(0, ClassTypeContext);
    }
    NEW() {
        return this.getToken(Java8Parser.NEW, 0);
    }
    arrayType() {
        return this.getRuleContext(0, ArrayTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_methodReference_lfno_primary;
    }
    enterRule(listener) {
        if (listener.enterMethodReference_lfno_primary) {
            listener.enterMethodReference_lfno_primary(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMethodReference_lfno_primary) {
            listener.exitMethodReference_lfno_primary(this);
        }
    }
}
exports.MethodReference_lfno_primaryContext = MethodReference_lfno_primaryContext;
class ArrayCreationExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NEW() {
        return this.getToken(Java8Parser.NEW, 0);
    }
    primitiveType() {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    dimExprs() {
        return this.getRuleContext(0, DimExprsContext);
    }
    dims() {
        return this.getRuleContext(0, DimsContext);
    }
    classOrInterfaceType() {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    arrayInitializer() {
        return this.getRuleContext(0, ArrayInitializerContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_arrayCreationExpression;
    }
    enterRule(listener) {
        if (listener.enterArrayCreationExpression) {
            listener.enterArrayCreationExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitArrayCreationExpression) {
            listener.exitArrayCreationExpression(this);
        }
    }
}
exports.ArrayCreationExpressionContext = ArrayCreationExpressionContext;
class DimExprsContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    dimExpr(i) {
        if (i === undefined) {
            return this.getRuleContexts(DimExprContext);
        }
        return this.getRuleContext(i, DimExprContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_dimExprs;
    }
    enterRule(listener) {
        if (listener.enterDimExprs) {
            listener.enterDimExprs(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDimExprs) {
            listener.exitDimExprs(this);
        }
    }
}
exports.DimExprsContext = DimExprsContext;
class DimExprContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACK() {
        return this.getToken(Java8Parser.LBRACK, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RBRACK() {
        return this.getToken(Java8Parser.RBRACK, 0);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        return this.getRuleContext(i, AnnotationContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_dimExpr;
    }
    enterRule(listener) {
        if (listener.enterDimExpr) {
            listener.enterDimExpr(this);
        }
    }
    exitRule(listener) {
        if (listener.exitDimExpr) {
            listener.exitDimExpr(this);
        }
    }
}
exports.DimExprContext = DimExprContext;
class ConstantExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_constantExpression;
    }
    enterRule(listener) {
        if (listener.enterConstantExpression) {
            listener.enterConstantExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConstantExpression) {
            listener.exitConstantExpression(this);
        }
    }
}
exports.ConstantExpressionContext = ConstantExpressionContext;
class ExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    lambdaExpression() {
        return this.getRuleContext(0, LambdaExpressionContext);
    }
    assignmentExpression() {
        return this.getRuleContext(0, AssignmentExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_expression;
    }
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class LambdaExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    lambdaParameters() {
        return this.getRuleContext(0, LambdaParametersContext);
    }
    ARROW() {
        return this.getToken(Java8Parser.ARROW, 0);
    }
    lambdaBody() {
        return this.getRuleContext(0, LambdaBodyContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_lambdaExpression;
    }
    enterRule(listener) {
        if (listener.enterLambdaExpression) {
            listener.enterLambdaExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLambdaExpression) {
            listener.exitLambdaExpression(this);
        }
    }
}
exports.LambdaExpressionContext = LambdaExpressionContext;
class LambdaParametersContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier() {
        return this.getToken(Java8Parser.Identifier, 0);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    formalParameterList() {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    inferredFormalParameterList() {
        return this.getRuleContext(0, InferredFormalParameterListContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_lambdaParameters;
    }
    enterRule(listener) {
        if (listener.enterLambdaParameters) {
            listener.enterLambdaParameters(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLambdaParameters) {
            listener.exitLambdaParameters(this);
        }
    }
}
exports.LambdaParametersContext = LambdaParametersContext;
class InferredFormalParameterListContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    Identifier(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.Identifier);
        }
        else {
            return this.getToken(Java8Parser.Identifier, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.COMMA);
        }
        else {
            return this.getToken(Java8Parser.COMMA, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_inferredFormalParameterList;
    }
    enterRule(listener) {
        if (listener.enterInferredFormalParameterList) {
            listener.enterInferredFormalParameterList(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInferredFormalParameterList) {
            listener.exitInferredFormalParameterList(this);
        }
    }
}
exports.InferredFormalParameterListContext = InferredFormalParameterListContext;
class LambdaBodyContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_lambdaBody;
    }
    enterRule(listener) {
        if (listener.enterLambdaBody) {
            listener.enterLambdaBody(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLambdaBody) {
            listener.exitLambdaBody(this);
        }
    }
}
exports.LambdaBodyContext = LambdaBodyContext;
class AssignmentExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionalExpression() {
        return this.getRuleContext(0, ConditionalExpressionContext);
    }
    assignment() {
        return this.getRuleContext(0, AssignmentContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_assignmentExpression;
    }
    enterRule(listener) {
        if (listener.enterAssignmentExpression) {
            listener.enterAssignmentExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentExpression) {
            listener.exitAssignmentExpression(this);
        }
    }
}
exports.AssignmentExpressionContext = AssignmentExpressionContext;
class AssignmentContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    leftHandSide() {
        return this.getRuleContext(0, LeftHandSideContext);
    }
    assignmentOperator() {
        return this.getRuleContext(0, AssignmentOperatorContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_assignment;
    }
    enterRule(listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class LeftHandSideContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    fieldAccess() {
        return this.getRuleContext(0, FieldAccessContext);
    }
    arrayAccess() {
        return this.getRuleContext(0, ArrayAccessContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_leftHandSide;
    }
    enterRule(listener) {
        if (listener.enterLeftHandSide) {
            listener.enterLeftHandSide(this);
        }
    }
    exitRule(listener) {
        if (listener.exitLeftHandSide) {
            listener.exitLeftHandSide(this);
        }
    }
}
exports.LeftHandSideContext = LeftHandSideContext;
class AssignmentOperatorContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASSIGN() {
        return this.getToken(Java8Parser.ASSIGN, 0);
    }
    MUL_ASSIGN() {
        return this.getToken(Java8Parser.MUL_ASSIGN, 0);
    }
    DIV_ASSIGN() {
        return this.getToken(Java8Parser.DIV_ASSIGN, 0);
    }
    MOD_ASSIGN() {
        return this.getToken(Java8Parser.MOD_ASSIGN, 0);
    }
    ADD_ASSIGN() {
        return this.getToken(Java8Parser.ADD_ASSIGN, 0);
    }
    SUB_ASSIGN() {
        return this.getToken(Java8Parser.SUB_ASSIGN, 0);
    }
    LSHIFT_ASSIGN() {
        return this.getToken(Java8Parser.LSHIFT_ASSIGN, 0);
    }
    RSHIFT_ASSIGN() {
        return this.getToken(Java8Parser.RSHIFT_ASSIGN, 0);
    }
    URSHIFT_ASSIGN() {
        return this.getToken(Java8Parser.URSHIFT_ASSIGN, 0);
    }
    AND_ASSIGN() {
        return this.getToken(Java8Parser.AND_ASSIGN, 0);
    }
    XOR_ASSIGN() {
        return this.getToken(Java8Parser.XOR_ASSIGN, 0);
    }
    OR_ASSIGN() {
        return this.getToken(Java8Parser.OR_ASSIGN, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_assignmentOperator;
    }
    enterRule(listener) {
        if (listener.enterAssignmentOperator) {
            listener.enterAssignmentOperator(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAssignmentOperator) {
            listener.exitAssignmentOperator(this);
        }
    }
}
exports.AssignmentOperatorContext = AssignmentOperatorContext;
class ConditionalExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionalOrExpression() {
        return this.getRuleContext(0, ConditionalOrExpressionContext);
    }
    QUESTION() {
        return this.getToken(Java8Parser.QUESTION, 0);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    COLON() {
        return this.getToken(Java8Parser.COLON, 0);
    }
    conditionalExpression() {
        return this.getRuleContext(0, ConditionalExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_conditionalExpression;
    }
    enterRule(listener) {
        if (listener.enterConditionalExpression) {
            listener.enterConditionalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConditionalExpression) {
            listener.exitConditionalExpression(this);
        }
    }
}
exports.ConditionalExpressionContext = ConditionalExpressionContext;
class ConditionalOrExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    conditionalAndExpression() {
        return this.getRuleContext(0, ConditionalAndExpressionContext);
    }
    conditionalOrExpression() {
        return this.getRuleContext(0, ConditionalOrExpressionContext);
    }
    OR() {
        return this.getToken(Java8Parser.OR, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_conditionalOrExpression;
    }
    enterRule(listener) {
        if (listener.enterConditionalOrExpression) {
            listener.enterConditionalOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConditionalOrExpression) {
            listener.exitConditionalOrExpression(this);
        }
    }
}
exports.ConditionalOrExpressionContext = ConditionalOrExpressionContext;
class ConditionalAndExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    inclusiveOrExpression() {
        return this.getRuleContext(0, InclusiveOrExpressionContext);
    }
    conditionalAndExpression() {
        return this.getRuleContext(0, ConditionalAndExpressionContext);
    }
    AND() {
        return this.getToken(Java8Parser.AND, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_conditionalAndExpression;
    }
    enterRule(listener) {
        if (listener.enterConditionalAndExpression) {
            listener.enterConditionalAndExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitConditionalAndExpression) {
            listener.exitConditionalAndExpression(this);
        }
    }
}
exports.ConditionalAndExpressionContext = ConditionalAndExpressionContext;
class InclusiveOrExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    exclusiveOrExpression() {
        return this.getRuleContext(0, ExclusiveOrExpressionContext);
    }
    inclusiveOrExpression() {
        return this.getRuleContext(0, InclusiveOrExpressionContext);
    }
    BITOR() {
        return this.getToken(Java8Parser.BITOR, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_inclusiveOrExpression;
    }
    enterRule(listener) {
        if (listener.enterInclusiveOrExpression) {
            listener.enterInclusiveOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitInclusiveOrExpression) {
            listener.exitInclusiveOrExpression(this);
        }
    }
}
exports.InclusiveOrExpressionContext = InclusiveOrExpressionContext;
class ExclusiveOrExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    andExpression() {
        return this.getRuleContext(0, AndExpressionContext);
    }
    exclusiveOrExpression() {
        return this.getRuleContext(0, ExclusiveOrExpressionContext);
    }
    CARET() {
        return this.getToken(Java8Parser.CARET, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_exclusiveOrExpression;
    }
    enterRule(listener) {
        if (listener.enterExclusiveOrExpression) {
            listener.enterExclusiveOrExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitExclusiveOrExpression) {
            listener.exitExclusiveOrExpression(this);
        }
    }
}
exports.ExclusiveOrExpressionContext = ExclusiveOrExpressionContext;
class AndExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    equalityExpression() {
        return this.getRuleContext(0, EqualityExpressionContext);
    }
    andExpression() {
        return this.getRuleContext(0, AndExpressionContext);
    }
    BITAND() {
        return this.getToken(Java8Parser.BITAND, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_andExpression;
    }
    enterRule(listener) {
        if (listener.enterAndExpression) {
            listener.enterAndExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAndExpression) {
            listener.exitAndExpression(this);
        }
    }
}
exports.AndExpressionContext = AndExpressionContext;
class EqualityExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    relationalExpression() {
        return this.getRuleContext(0, RelationalExpressionContext);
    }
    equalityExpression() {
        return this.getRuleContext(0, EqualityExpressionContext);
    }
    EQUAL() {
        return this.getToken(Java8Parser.EQUAL, 0);
    }
    NOTEQUAL() {
        return this.getToken(Java8Parser.NOTEQUAL, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_equalityExpression;
    }
    enterRule(listener) {
        if (listener.enterEqualityExpression) {
            listener.enterEqualityExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitEqualityExpression) {
            listener.exitEqualityExpression(this);
        }
    }
}
exports.EqualityExpressionContext = EqualityExpressionContext;
class RelationalExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    shiftExpression() {
        return this.getRuleContext(0, ShiftExpressionContext);
    }
    relationalExpression() {
        return this.getRuleContext(0, RelationalExpressionContext);
    }
    LT() {
        return this.getToken(Java8Parser.LT, 0);
    }
    GT() {
        return this.getToken(Java8Parser.GT, 0);
    }
    LE() {
        return this.getToken(Java8Parser.LE, 0);
    }
    GE() {
        return this.getToken(Java8Parser.GE, 0);
    }
    INSTANCEOF() {
        return this.getToken(Java8Parser.INSTANCEOF, 0);
    }
    referenceType() {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_relationalExpression;
    }
    enterRule(listener) {
        if (listener.enterRelationalExpression) {
            listener.enterRelationalExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitRelationalExpression) {
            listener.exitRelationalExpression(this);
        }
    }
}
exports.RelationalExpressionContext = RelationalExpressionContext;
class ShiftExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    additiveExpression() {
        return this.getRuleContext(0, AdditiveExpressionContext);
    }
    shiftExpression() {
        return this.getRuleContext(0, ShiftExpressionContext);
    }
    LT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.LT);
        }
        else {
            return this.getToken(Java8Parser.LT, i);
        }
    }
    GT(i) {
        if (i === undefined) {
            return this.getTokens(Java8Parser.GT);
        }
        else {
            return this.getToken(Java8Parser.GT, i);
        }
    }
    get ruleIndex() {
        return Java8Parser.RULE_shiftExpression;
    }
    enterRule(listener) {
        if (listener.enterShiftExpression) {
            listener.enterShiftExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitShiftExpression) {
            listener.exitShiftExpression(this);
        }
    }
}
exports.ShiftExpressionContext = ShiftExpressionContext;
class AdditiveExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    multiplicativeExpression() {
        return this.getRuleContext(0, MultiplicativeExpressionContext);
    }
    additiveExpression() {
        return this.getRuleContext(0, AdditiveExpressionContext);
    }
    ADD() {
        return this.getToken(Java8Parser.ADD, 0);
    }
    SUB() {
        return this.getToken(Java8Parser.SUB, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_additiveExpression;
    }
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    }
}
exports.AdditiveExpressionContext = AdditiveExpressionContext;
class MultiplicativeExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    unaryExpression() {
        return this.getRuleContext(0, UnaryExpressionContext);
    }
    multiplicativeExpression() {
        return this.getRuleContext(0, MultiplicativeExpressionContext);
    }
    MUL() {
        return this.getToken(Java8Parser.MUL, 0);
    }
    DIV() {
        return this.getToken(Java8Parser.DIV, 0);
    }
    MOD() {
        return this.getToken(Java8Parser.MOD, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_multiplicativeExpression;
    }
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    }
}
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
class UnaryExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    preIncrementExpression() {
        return this.getRuleContext(0, PreIncrementExpressionContext);
    }
    preDecrementExpression() {
        return this.getRuleContext(0, PreDecrementExpressionContext);
    }
    ADD() {
        return this.getToken(Java8Parser.ADD, 0);
    }
    unaryExpression() {
        return this.getRuleContext(0, UnaryExpressionContext);
    }
    SUB() {
        return this.getToken(Java8Parser.SUB, 0);
    }
    unaryExpressionNotPlusMinus() {
        return this.getRuleContext(0, UnaryExpressionNotPlusMinusContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unaryExpression;
    }
    enterRule(listener) {
        if (listener.enterUnaryExpression) {
            listener.enterUnaryExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryExpression) {
            listener.exitUnaryExpression(this);
        }
    }
}
exports.UnaryExpressionContext = UnaryExpressionContext;
class PreIncrementExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INC() {
        return this.getToken(Java8Parser.INC, 0);
    }
    unaryExpression() {
        return this.getRuleContext(0, UnaryExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_preIncrementExpression;
    }
    enterRule(listener) {
        if (listener.enterPreIncrementExpression) {
            listener.enterPreIncrementExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreIncrementExpression) {
            listener.exitPreIncrementExpression(this);
        }
    }
}
exports.PreIncrementExpressionContext = PreIncrementExpressionContext;
class PreDecrementExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DEC() {
        return this.getToken(Java8Parser.DEC, 0);
    }
    unaryExpression() {
        return this.getRuleContext(0, UnaryExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_preDecrementExpression;
    }
    enterRule(listener) {
        if (listener.enterPreDecrementExpression) {
            listener.enterPreDecrementExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPreDecrementExpression) {
            listener.exitPreDecrementExpression(this);
        }
    }
}
exports.PreDecrementExpressionContext = PreDecrementExpressionContext;
class UnaryExpressionNotPlusMinusContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    postfixExpression() {
        return this.getRuleContext(0, PostfixExpressionContext);
    }
    TILDE() {
        return this.getToken(Java8Parser.TILDE, 0);
    }
    unaryExpression() {
        return this.getRuleContext(0, UnaryExpressionContext);
    }
    BANG() {
        return this.getToken(Java8Parser.BANG, 0);
    }
    castExpression() {
        return this.getRuleContext(0, CastExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_unaryExpressionNotPlusMinus;
    }
    enterRule(listener) {
        if (listener.enterUnaryExpressionNotPlusMinus) {
            listener.enterUnaryExpressionNotPlusMinus(this);
        }
    }
    exitRule(listener) {
        if (listener.exitUnaryExpressionNotPlusMinus) {
            listener.exitUnaryExpressionNotPlusMinus(this);
        }
    }
}
exports.UnaryExpressionNotPlusMinusContext = UnaryExpressionNotPlusMinusContext;
class PostfixExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    primary() {
        return this.getRuleContext(0, PrimaryContext);
    }
    expressionName() {
        return this.getRuleContext(0, ExpressionNameContext);
    }
    postIncrementExpression_lf_postfixExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(PostIncrementExpression_lf_postfixExpressionContext);
        }
        return this.getRuleContext(i, PostIncrementExpression_lf_postfixExpressionContext);
    }
    postDecrementExpression_lf_postfixExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(PostDecrementExpression_lf_postfixExpressionContext);
        }
        return this.getRuleContext(i, PostDecrementExpression_lf_postfixExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_postfixExpression;
    }
    enterRule(listener) {
        if (listener.enterPostfixExpression) {
            listener.enterPostfixExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostfixExpression) {
            listener.exitPostfixExpression(this);
        }
    }
}
exports.PostfixExpressionContext = PostfixExpressionContext;
class PostIncrementExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    postfixExpression() {
        return this.getRuleContext(0, PostfixExpressionContext);
    }
    INC() {
        return this.getToken(Java8Parser.INC, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_postIncrementExpression;
    }
    enterRule(listener) {
        if (listener.enterPostIncrementExpression) {
            listener.enterPostIncrementExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostIncrementExpression) {
            listener.exitPostIncrementExpression(this);
        }
    }
}
exports.PostIncrementExpressionContext = PostIncrementExpressionContext;
class PostIncrementExpression_lf_postfixExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    INC() {
        return this.getToken(Java8Parser.INC, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_postIncrementExpression_lf_postfixExpression;
    }
    enterRule(listener) {
        if (listener.enterPostIncrementExpression_lf_postfixExpression) {
            listener.enterPostIncrementExpression_lf_postfixExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostIncrementExpression_lf_postfixExpression) {
            listener.exitPostIncrementExpression_lf_postfixExpression(this);
        }
    }
}
exports.PostIncrementExpression_lf_postfixExpressionContext = PostIncrementExpression_lf_postfixExpressionContext;
class PostDecrementExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    postfixExpression() {
        return this.getRuleContext(0, PostfixExpressionContext);
    }
    DEC() {
        return this.getToken(Java8Parser.DEC, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_postDecrementExpression;
    }
    enterRule(listener) {
        if (listener.enterPostDecrementExpression) {
            listener.enterPostDecrementExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostDecrementExpression) {
            listener.exitPostDecrementExpression(this);
        }
    }
}
exports.PostDecrementExpressionContext = PostDecrementExpressionContext;
class PostDecrementExpression_lf_postfixExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DEC() {
        return this.getToken(Java8Parser.DEC, 0);
    }
    get ruleIndex() {
        return Java8Parser.RULE_postDecrementExpression_lf_postfixExpression;
    }
    enterRule(listener) {
        if (listener.enterPostDecrementExpression_lf_postfixExpression) {
            listener.enterPostDecrementExpression_lf_postfixExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitPostDecrementExpression_lf_postfixExpression) {
            listener.exitPostDecrementExpression_lf_postfixExpression(this);
        }
    }
}
exports.PostDecrementExpression_lf_postfixExpressionContext = PostDecrementExpression_lf_postfixExpressionContext;
class CastExpressionContext extends antlr.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() {
        return this.getToken(Java8Parser.LPAREN, 0);
    }
    primitiveType() {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    RPAREN() {
        return this.getToken(Java8Parser.RPAREN, 0);
    }
    unaryExpression() {
        return this.getRuleContext(0, UnaryExpressionContext);
    }
    referenceType() {
        return this.getRuleContext(0, ReferenceTypeContext);
    }
    unaryExpressionNotPlusMinus() {
        return this.getRuleContext(0, UnaryExpressionNotPlusMinusContext);
    }
    additionalBound(i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditionalBoundContext);
        }
        return this.getRuleContext(i, AdditionalBoundContext);
    }
    lambdaExpression() {
        return this.getRuleContext(0, LambdaExpressionContext);
    }
    get ruleIndex() {
        return Java8Parser.RULE_castExpression;
    }
    enterRule(listener) {
        if (listener.enterCastExpression) {
            listener.enterCastExpression(this);
        }
    }
    exitRule(listener) {
        if (listener.exitCastExpression) {
            listener.exitCastExpression(this);
        }
    }
}
exports.CastExpressionContext = CastExpressionContext;
//# sourceMappingURL=Java8Parser.js.map