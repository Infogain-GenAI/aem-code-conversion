// Generated from ./src/grammar/Java.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { JavaListener } from "./JavaListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class JavaParser extends antlr.Parser {
    public static readonly ABSTRACT = 1;
    public static readonly ASSERT = 2;
    public static readonly BOOLEAN = 3;
    public static readonly BREAK = 4;
    public static readonly BYTE = 5;
    public static readonly CASE = 6;
    public static readonly CATCH = 7;
    public static readonly CHAR = 8;
    public static readonly CLASS = 9;
    public static readonly CONST = 10;
    public static readonly CONTINUE = 11;
    public static readonly DEFAULT = 12;
    public static readonly DO = 13;
    public static readonly DOUBLE = 14;
    public static readonly ELSE = 15;
    public static readonly ENUM = 16;
    public static readonly EXTENDS = 17;
    public static readonly FINAL = 18;
    public static readonly FINALLY = 19;
    public static readonly FLOAT = 20;
    public static readonly FOR = 21;
    public static readonly IF = 22;
    public static readonly GOTO = 23;
    public static readonly IMPLEMENTS = 24;
    public static readonly IMPORT = 25;
    public static readonly INSTANCEOF = 26;
    public static readonly INT = 27;
    public static readonly INTERFACE = 28;
    public static readonly LONG = 29;
    public static readonly NATIVE = 30;
    public static readonly NEW = 31;
    public static readonly PACKAGE = 32;
    public static readonly PRIVATE = 33;
    public static readonly PROTECTED = 34;
    public static readonly PUBLIC = 35;
    public static readonly RETURN = 36;
    public static readonly SHORT = 37;
    public static readonly STATIC = 38;
    public static readonly STRICTFP = 39;
    public static readonly SUPER = 40;
    public static readonly SWITCH = 41;
    public static readonly SYNCHRONIZED = 42;
    public static readonly THIS = 43;
    public static readonly THROW = 44;
    public static readonly THROWS = 45;
    public static readonly TRANSIENT = 46;
    public static readonly TRY = 47;
    public static readonly VOID = 48;
    public static readonly VOLATILE = 49;
    public static readonly WHILE = 50;
    public static readonly IntegerLiteral = 51;
    public static readonly FloatingPointLiteral = 52;
    public static readonly BooleanLiteral = 53;
    public static readonly CharacterLiteral = 54;
    public static readonly StringLiteral = 55;
    public static readonly NullLiteral = 56;
    public static readonly LPAREN = 57;
    public static readonly RPAREN = 58;
    public static readonly LBRACE = 59;
    public static readonly RBRACE = 60;
    public static readonly LBRACK = 61;
    public static readonly RBRACK = 62;
    public static readonly SEMI = 63;
    public static readonly COMMA = 64;
    public static readonly DOT = 65;
    public static readonly ASSIGN = 66;
    public static readonly GT = 67;
    public static readonly LT = 68;
    public static readonly BANG = 69;
    public static readonly TILDE = 70;
    public static readonly QUESTION = 71;
    public static readonly COLON = 72;
    public static readonly EQUAL = 73;
    public static readonly LE = 74;
    public static readonly GE = 75;
    public static readonly NOTEQUAL = 76;
    public static readonly AND = 77;
    public static readonly OR = 78;
    public static readonly INC = 79;
    public static readonly DEC = 80;
    public static readonly ADD = 81;
    public static readonly SUB = 82;
    public static readonly MUL = 83;
    public static readonly DIV = 84;
    public static readonly BITAND = 85;
    public static readonly BITOR = 86;
    public static readonly CARET = 87;
    public static readonly MOD = 88;
    public static readonly ADD_ASSIGN = 89;
    public static readonly SUB_ASSIGN = 90;
    public static readonly MUL_ASSIGN = 91;
    public static readonly DIV_ASSIGN = 92;
    public static readonly AND_ASSIGN = 93;
    public static readonly OR_ASSIGN = 94;
    public static readonly XOR_ASSIGN = 95;
    public static readonly MOD_ASSIGN = 96;
    public static readonly LSHIFT_ASSIGN = 97;
    public static readonly RSHIFT_ASSIGN = 98;
    public static readonly URSHIFT_ASSIGN = 99;
    public static readonly Identifier = 100;
    public static readonly AT = 101;
    public static readonly ELLIPSIS = 102;
    public static readonly WS = 103;
    public static readonly COMMENT = 104;
    public static readonly LINE_COMMENT = 105;
    public static readonly RULE_compilationUnit = 0;
    public static readonly RULE_packageDeclaration = 1;
    public static readonly RULE_importDeclaration = 2;
    public static readonly RULE_typeDeclaration = 3;
    public static readonly RULE_modifier = 4;
    public static readonly RULE_classOrInterfaceModifier = 5;
    public static readonly RULE_variableModifier = 6;
    public static readonly RULE_classDeclaration = 7;
    public static readonly RULE_typeParameters = 8;
    public static readonly RULE_typeParameter = 9;
    public static readonly RULE_typeBound = 10;
    public static readonly RULE_enumDeclaration = 11;
    public static readonly RULE_enumConstants = 12;
    public static readonly RULE_enumConstant = 13;
    public static readonly RULE_enumBodyDeclarations = 14;
    public static readonly RULE_interfaceDeclaration = 15;
    public static readonly RULE_typeList = 16;
    public static readonly RULE_classBody = 17;
    public static readonly RULE_interfaceBody = 18;
    public static readonly RULE_classBodyDeclaration = 19;
    public static readonly RULE_memberDeclaration = 20;
    public static readonly RULE_methodDeclaration = 21;
    public static readonly RULE_genericMethodDeclaration = 22;
    public static readonly RULE_constructorDeclaration = 23;
    public static readonly RULE_genericConstructorDeclaration = 24;
    public static readonly RULE_fieldDeclaration = 25;
    public static readonly RULE_interfaceBodyDeclaration = 26;
    public static readonly RULE_interfaceMemberDeclaration = 27;
    public static readonly RULE_constDeclaration = 28;
    public static readonly RULE_constantDeclarator = 29;
    public static readonly RULE_interfaceMethodDeclaration = 30;
    public static readonly RULE_genericInterfaceMethodDeclaration = 31;
    public static readonly RULE_variableDeclarators = 32;
    public static readonly RULE_variableDeclarator = 33;
    public static readonly RULE_variableDeclaratorId = 34;
    public static readonly RULE_variableInitializer = 35;
    public static readonly RULE_arrayInitializer = 36;
    public static readonly RULE_enumConstantName = 37;
    public static readonly RULE_typeSpec = 38;
    public static readonly RULE_classOrInterfaceType = 39;
    public static readonly RULE_primitiveType = 40;
    public static readonly RULE_typeArguments = 41;
    public static readonly RULE_typeArgument = 42;
    public static readonly RULE_qualifiedNameList = 43;
    public static readonly RULE_formalParameters = 44;
    public static readonly RULE_formalParameterList = 45;
    public static readonly RULE_formalParameter = 46;
    public static readonly RULE_lastFormalParameter = 47;
    public static readonly RULE_methodBody = 48;
    public static readonly RULE_constructorBody = 49;
    public static readonly RULE_qualifiedName = 50;
    public static readonly RULE_literal = 51;
    public static readonly RULE_annotation = 52;
    public static readonly RULE_annotationName = 53;
    public static readonly RULE_elementValuePairs = 54;
    public static readonly RULE_elementValuePair = 55;
    public static readonly RULE_elementValue = 56;
    public static readonly RULE_elementValueArrayInitializer = 57;
    public static readonly RULE_annotationTypeDeclaration = 58;
    public static readonly RULE_annotationTypeBody = 59;
    public static readonly RULE_annotationTypeElementDeclaration = 60;
    public static readonly RULE_annotationTypeElementRest = 61;
    public static readonly RULE_annotationMethodOrConstantRest = 62;
    public static readonly RULE_annotationMethodRest = 63;
    public static readonly RULE_annotationConstantRest = 64;
    public static readonly RULE_defaultValue = 65;
    public static readonly RULE_block = 66;
    public static readonly RULE_blockStatement = 67;
    public static readonly RULE_localVariableDeclarationStatement = 68;
    public static readonly RULE_localVariableDeclaration = 69;
    public static readonly RULE_statement = 70;
    public static readonly RULE_catchClause = 71;
    public static readonly RULE_catchType = 72;
    public static readonly RULE_finallyBlock = 73;
    public static readonly RULE_resourceSpecification = 74;
    public static readonly RULE_resources = 75;
    public static readonly RULE_resource = 76;
    public static readonly RULE_switchBlockStatementGroup = 77;
    public static readonly RULE_switchLabel = 78;
    public static readonly RULE_forControl = 79;
    public static readonly RULE_forInit = 80;
    public static readonly RULE_enhancedForControl = 81;
    public static readonly RULE_forUpdate = 82;
    public static readonly RULE_parExpression = 83;
    public static readonly RULE_expressionList = 84;
    public static readonly RULE_statementExpression = 85;
    public static readonly RULE_constantExpression = 86;
    public static readonly RULE_expression = 87;
    public static readonly RULE_primary = 88;
    public static readonly RULE_creator = 89;
    public static readonly RULE_createdName = 90;
    public static readonly RULE_innerCreator = 91;
    public static readonly RULE_arrayCreatorRest = 92;
    public static readonly RULE_classCreatorRest = 93;
    public static readonly RULE_explicitGenericInvocation = 94;
    public static readonly RULE_nonWildcardTypeArguments = 95;
    public static readonly RULE_typeArgumentsOrDiamond = 96;
    public static readonly RULE_nonWildcardTypeArgumentsOrDiamond = 97;
    public static readonly RULE_superSuffix = 98;
    public static readonly RULE_explicitGenericInvocationSuffix = 99;
    public static readonly RULE_arguments = 100;

    public static readonly literalNames = [
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
        "'&'", "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", "'&='", 
        "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='", null, "'@'", 
        "'...'"
    ];

    public static readonly symbolicNames = [
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
        "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", "ADD_ASSIGN", "SUB_ASSIGN", 
        "MUL_ASSIGN", "DIV_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
        "MOD_ASSIGN", "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", 
        "Identifier", "AT", "ELLIPSIS", "WS", "COMMENT", "LINE_COMMENT"
    ];
    public static readonly ruleNames = [
        "compilationUnit", "packageDeclaration", "importDeclaration", "typeDeclaration", 
        "modifier", "classOrInterfaceModifier", "variableModifier", "classDeclaration", 
        "typeParameters", "typeParameter", "typeBound", "enumDeclaration", 
        "enumConstants", "enumConstant", "enumBodyDeclarations", "interfaceDeclaration", 
        "typeList", "classBody", "interfaceBody", "classBodyDeclaration", 
        "memberDeclaration", "methodDeclaration", "genericMethodDeclaration", 
        "constructorDeclaration", "genericConstructorDeclaration", "fieldDeclaration", 
        "interfaceBodyDeclaration", "interfaceMemberDeclaration", "constDeclaration", 
        "constantDeclarator", "interfaceMethodDeclaration", "genericInterfaceMethodDeclaration", 
        "variableDeclarators", "variableDeclarator", "variableDeclaratorId", 
        "variableInitializer", "arrayInitializer", "enumConstantName", "typeSpec", 
        "classOrInterfaceType", "primitiveType", "typeArguments", "typeArgument", 
        "qualifiedNameList", "formalParameters", "formalParameterList", 
        "formalParameter", "lastFormalParameter", "methodBody", "constructorBody", 
        "qualifiedName", "literal", "annotation", "annotationName", "elementValuePairs", 
        "elementValuePair", "elementValue", "elementValueArrayInitializer", 
        "annotationTypeDeclaration", "annotationTypeBody", "annotationTypeElementDeclaration", 
        "annotationTypeElementRest", "annotationMethodOrConstantRest", "annotationMethodRest", 
        "annotationConstantRest", "defaultValue", "block", "blockStatement", 
        "localVariableDeclarationStatement", "localVariableDeclaration", 
        "statement", "catchClause", "catchType", "finallyBlock", "resourceSpecification", 
        "resources", "resource", "switchBlockStatementGroup", "switchLabel", 
        "forControl", "forInit", "enhancedForControl", "forUpdate", "parExpression", 
        "expressionList", "statementExpression", "constantExpression", "expression", 
        "primary", "creator", "createdName", "innerCreator", "arrayCreatorRest", 
        "classCreatorRest", "explicitGenericInvocation", "nonWildcardTypeArguments", 
        "typeArgumentsOrDiamond", "nonWildcardTypeArgumentsOrDiamond", "superSuffix", 
        "explicitGenericInvocationSuffix", "arguments",
    ];

    public get grammarFileName(): string { return "Java.g4"; }
    public get literalNames(): (string | null)[] { return JavaParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return JavaParser.symbolicNames; }
    public get ruleNames(): string[] { return JavaParser.ruleNames; }
    public get serializedATN(): number[] { return JavaParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, JavaParser._ATN, JavaParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public compilationUnit(): CompilationUnitContext {
        let localContext = new CompilationUnitContext(this.context, this.state);
        this.enterRule(localContext, 0, JavaParser.RULE_compilationUnit);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 0, this.context) ) {
            case 1:
                {
                this.state = 202;
                this.packageDeclaration();
                }
                break;
            }
            this.state = 208;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 25) {
                {
                {
                this.state = 205;
                this.importDeclaration();
                }
                }
                this.state = 210;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 214;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 268763650) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073741927) !== 0) || _la === 101) {
                {
                {
                this.state = 211;
                this.typeDeclaration();
                }
                }
                this.state = 216;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 217;
            this.match(JavaParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public packageDeclaration(): PackageDeclarationContext {
        let localContext = new PackageDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 2, JavaParser.RULE_packageDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 222;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 101) {
                {
                {
                this.state = 219;
                this.annotation();
                }
                }
                this.state = 224;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 225;
            this.match(JavaParser.PACKAGE);
            this.state = 226;
            this.qualifiedName();
            this.state = 227;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public importDeclaration(): ImportDeclarationContext {
        let localContext = new ImportDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 4, JavaParser.RULE_importDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 229;
            this.match(JavaParser.IMPORT);
            this.state = 231;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 38) {
                {
                this.state = 230;
                this.match(JavaParser.STATIC);
                }
            }

            this.state = 233;
            this.qualifiedName();
            this.state = 236;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 65) {
                {
                this.state = 234;
                this.match(JavaParser.DOT);
                this.state = 235;
                this.match(JavaParser.MUL);
                }
            }

            this.state = 238;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeDeclaration(): TypeDeclarationContext {
        let localContext = new TypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 6, JavaParser.RULE_typeDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.state = 269;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 243;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || _la === 18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la === 101) {
                    {
                    {
                    this.state = 240;
                    this.classOrInterfaceModifier();
                    }
                    }
                    this.state = 245;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 246;
                this.classDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 250;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || _la === 18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la === 101) {
                    {
                    {
                    this.state = 247;
                    this.classOrInterfaceModifier();
                    }
                    }
                    this.state = 252;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 253;
                this.enumDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 257;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 1 || _la === 18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0) || _la === 101) {
                    {
                    {
                    this.state = 254;
                    this.classOrInterfaceModifier();
                    }
                    }
                    this.state = 259;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 260;
                this.interfaceDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 264;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 261;
                        this.classOrInterfaceModifier();
                        }
                        }
                    }
                    this.state = 266;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
                }
                this.state = 267;
                this.annotationTypeDeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 268;
                this.match(JavaParser.SEMI);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public modifier(): ModifierContext {
        let localContext = new ModifierContext(this.context, this.state);
        this.enterRule(localContext, 8, JavaParser.RULE_modifier);
        let _la: number;
        try {
            this.state = 273;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.FINAL:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.AT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 271;
                this.classOrInterfaceModifier();
                }
                break;
            case JavaParser.NATIVE:
            case JavaParser.SYNCHRONIZED:
            case JavaParser.TRANSIENT:
            case JavaParser.VOLATILE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 272;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & 593921) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classOrInterfaceModifier(): ClassOrInterfaceModifierContext {
        let localContext = new ClassOrInterfaceModifierContext(this.context, this.state);
        this.enterRule(localContext, 10, JavaParser.RULE_classOrInterfaceModifier);
        let _la: number;
        try {
            this.state = 277;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.AT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 275;
                this.annotation();
                }
                break;
            case JavaParser.ABSTRACT:
            case JavaParser.FINAL:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 276;
                _la = this.tokenStream.LA(1);
                if(!(_la === 1 || _la === 18 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 103) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableModifier(): VariableModifierContext {
        let localContext = new VariableModifierContext(this.context, this.state);
        this.enterRule(localContext, 12, JavaParser.RULE_variableModifier);
        try {
            this.state = 281;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.FINAL:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 279;
                this.match(JavaParser.FINAL);
                }
                break;
            case JavaParser.AT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 280;
                this.annotation();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classDeclaration(): ClassDeclarationContext {
        let localContext = new ClassDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 14, JavaParser.RULE_classDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 283;
            this.match(JavaParser.CLASS);
            this.state = 284;
            this.match(JavaParser.Identifier);
            this.state = 286;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68) {
                {
                this.state = 285;
                this.typeParameters();
                }
            }

            this.state = 290;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 288;
                this.match(JavaParser.EXTENDS);
                this.state = 289;
                this.typeSpec();
                }
            }

            this.state = 294;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 292;
                this.match(JavaParser.IMPLEMENTS);
                this.state = 293;
                this.typeList();
                }
            }

            this.state = 296;
            this.classBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameters(): TypeParametersContext {
        let localContext = new TypeParametersContext(this.context, this.state);
        this.enterRule(localContext, 16, JavaParser.RULE_typeParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 298;
            this.match(JavaParser.LT);
            this.state = 299;
            this.typeParameter();
            this.state = 304;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 300;
                this.match(JavaParser.COMMA);
                this.state = 301;
                this.typeParameter();
                }
                }
                this.state = 306;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 307;
            this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeParameter(): TypeParameterContext {
        let localContext = new TypeParameterContext(this.context, this.state);
        this.enterRule(localContext, 18, JavaParser.RULE_typeParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 309;
            this.match(JavaParser.Identifier);
            this.state = 312;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 310;
                this.match(JavaParser.EXTENDS);
                this.state = 311;
                this.typeBound();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeBound(): TypeBoundContext {
        let localContext = new TypeBoundContext(this.context, this.state);
        this.enterRule(localContext, 20, JavaParser.RULE_typeBound);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 314;
            this.typeSpec();
            this.state = 319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 85) {
                {
                {
                this.state = 315;
                this.match(JavaParser.BITAND);
                this.state = 316;
                this.typeSpec();
                }
                }
                this.state = 321;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumDeclaration(): EnumDeclarationContext {
        let localContext = new EnumDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 22, JavaParser.RULE_enumDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 322;
            this.match(JavaParser.ENUM);
            this.state = 323;
            this.match(JavaParser.Identifier);
            this.state = 326;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 24) {
                {
                this.state = 324;
                this.match(JavaParser.IMPLEMENTS);
                this.state = 325;
                this.typeList();
                }
            }

            this.state = 328;
            this.match(JavaParser.LBRACE);
            this.state = 330;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 100 || _la === 101) {
                {
                this.state = 329;
                this.enumConstants();
                }
            }

            this.state = 333;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 332;
                this.match(JavaParser.COMMA);
                }
            }

            this.state = 336;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 63) {
                {
                this.state = 335;
                this.enumBodyDeclarations();
                }
            }

            this.state = 338;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumConstants(): EnumConstantsContext {
        let localContext = new EnumConstantsContext(this.context, this.state);
        this.enterRule(localContext, 24, JavaParser.RULE_enumConstants);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 340;
            this.enumConstant();
            this.state = 345;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 341;
                    this.match(JavaParser.COMMA);
                    this.state = 342;
                    this.enumConstant();
                    }
                    }
                }
                this.state = 347;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumConstant(): EnumConstantContext {
        let localContext = new EnumConstantContext(this.context, this.state);
        this.enterRule(localContext, 26, JavaParser.RULE_enumConstant);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 351;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 101) {
                {
                {
                this.state = 348;
                this.annotation();
                }
                }
                this.state = 353;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 354;
            this.match(JavaParser.Identifier);
            this.state = 356;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 355;
                this.arguments();
                }
            }

            this.state = 359;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 59) {
                {
                this.state = 358;
                this.classBody();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumBodyDeclarations(): EnumBodyDeclarationsContext {
        let localContext = new EnumBodyDeclarationsContext(this.context, this.state);
        this.enterRule(localContext, 28, JavaParser.RULE_enumBodyDeclarations);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 361;
            this.match(JavaParser.SEMI);
            this.state = 365;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1140957815) !== 0) || _la === 68 || _la === 100 || _la === 101) {
                {
                {
                this.state = 362;
                this.classBodyDeclaration();
                }
                }
                this.state = 367;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceDeclaration(): InterfaceDeclarationContext {
        let localContext = new InterfaceDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 30, JavaParser.RULE_interfaceDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 368;
            this.match(JavaParser.INTERFACE);
            this.state = 369;
            this.match(JavaParser.Identifier);
            this.state = 371;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68) {
                {
                this.state = 370;
                this.typeParameters();
                }
            }

            this.state = 375;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 17) {
                {
                this.state = 373;
                this.match(JavaParser.EXTENDS);
                this.state = 374;
                this.typeList();
                }
            }

            this.state = 377;
            this.interfaceBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeList(): TypeListContext {
        let localContext = new TypeListContext(this.context, this.state);
        this.enterRule(localContext, 32, JavaParser.RULE_typeList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 379;
            this.typeSpec();
            this.state = 384;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 380;
                this.match(JavaParser.COMMA);
                this.state = 381;
                this.typeSpec();
                }
                }
                this.state = 386;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classBody(): ClassBodyContext {
        let localContext = new ClassBodyContext(this.context, this.state);
        this.enterRule(localContext, 34, JavaParser.RULE_classBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 387;
            this.match(JavaParser.LBRACE);
            this.state = 391;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1140957815) !== 0) || _la === 68 || _la === 100 || _la === 101) {
                {
                {
                this.state = 388;
                this.classBodyDeclaration();
                }
                }
                this.state = 393;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 394;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceBody(): InterfaceBodyContext {
        let localContext = new InterfaceBodyContext(this.context, this.state);
        this.enterRule(localContext, 36, JavaParser.RULE_interfaceBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 396;
            this.match(JavaParser.LBRACE);
            this.state = 400;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073848951) !== 0) || _la === 68 || _la === 100 || _la === 101) {
                {
                {
                this.state = 397;
                this.interfaceBodyDeclaration();
                }
                }
                this.state = 402;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 403;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classBodyDeclaration(): ClassBodyDeclarationContext {
        let localContext = new ClassBodyDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 38, JavaParser.RULE_classBodyDeclaration);
        let _la: number;
        try {
            let alternative: number;
            this.state = 417;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 36, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 405;
                this.match(JavaParser.SEMI);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 407;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 38) {
                    {
                    this.state = 406;
                    this.match(JavaParser.STATIC);
                    }
                }

                this.state = 409;
                this.block();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 413;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 410;
                        this.modifier();
                        }
                        }
                    }
                    this.state = 415;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
                }
                this.state = 416;
                this.memberDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public memberDeclaration(): MemberDeclarationContext {
        let localContext = new MemberDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 40, JavaParser.RULE_memberDeclaration);
        try {
            this.state = 428;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 37, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 419;
                this.methodDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 420;
                this.genericMethodDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 421;
                this.fieldDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 422;
                this.constructorDeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 423;
                this.genericConstructorDeclaration();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 424;
                this.interfaceDeclaration();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 425;
                this.annotationTypeDeclaration();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 426;
                this.classDeclaration();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 427;
                this.enumDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodDeclaration(): MethodDeclarationContext {
        let localContext = new MethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 42, JavaParser.RULE_methodDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 432;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.Identifier:
                {
                this.state = 430;
                this.typeSpec();
                }
                break;
            case JavaParser.VOID:
                {
                this.state = 431;
                this.match(JavaParser.VOID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 434;
            this.match(JavaParser.Identifier);
            this.state = 435;
            this.formalParameters();
            this.state = 440;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 61) {
                {
                {
                this.state = 436;
                this.match(JavaParser.LBRACK);
                this.state = 437;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 442;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 445;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 443;
                this.match(JavaParser.THROWS);
                this.state = 444;
                this.qualifiedNameList();
                }
            }

            this.state = 449;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LBRACE:
                {
                this.state = 447;
                this.methodBody();
                }
                break;
            case JavaParser.SEMI:
                {
                this.state = 448;
                this.match(JavaParser.SEMI);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericMethodDeclaration(): GenericMethodDeclarationContext {
        let localContext = new GenericMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 44, JavaParser.RULE_genericMethodDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 451;
            this.typeParameters();
            this.state = 452;
            this.methodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constructorDeclaration(): ConstructorDeclarationContext {
        let localContext = new ConstructorDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 46, JavaParser.RULE_constructorDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 454;
            this.match(JavaParser.Identifier);
            this.state = 455;
            this.formalParameters();
            this.state = 458;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 456;
                this.match(JavaParser.THROWS);
                this.state = 457;
                this.qualifiedNameList();
                }
            }

            this.state = 460;
            this.constructorBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericConstructorDeclaration(): GenericConstructorDeclarationContext {
        let localContext = new GenericConstructorDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 48, JavaParser.RULE_genericConstructorDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 462;
            this.typeParameters();
            this.state = 463;
            this.constructorDeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public fieldDeclaration(): FieldDeclarationContext {
        let localContext = new FieldDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 50, JavaParser.RULE_fieldDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 465;
            this.typeSpec();
            this.state = 466;
            this.variableDeclarators();
            this.state = 467;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext {
        let localContext = new InterfaceBodyDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 52, JavaParser.RULE_interfaceBodyDeclaration);
        try {
            let alternative: number;
            this.state = 477;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.CLASS:
            case JavaParser.DOUBLE:
            case JavaParser.ENUM:
            case JavaParser.FINAL:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.INTERFACE:
            case JavaParser.LONG:
            case JavaParser.NATIVE:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.SHORT:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.SYNCHRONIZED:
            case JavaParser.TRANSIENT:
            case JavaParser.VOID:
            case JavaParser.VOLATILE:
            case JavaParser.LT:
            case JavaParser.Identifier:
            case JavaParser.AT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 472;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 469;
                        this.modifier();
                        }
                        }
                    }
                    this.state = 474;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
                }
                this.state = 475;
                this.interfaceMemberDeclaration();
                }
                break;
            case JavaParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 476;
                this.match(JavaParser.SEMI);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext {
        let localContext = new InterfaceMemberDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 54, JavaParser.RULE_interfaceMemberDeclaration);
        try {
            this.state = 486;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 479;
                this.constDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 480;
                this.interfaceMethodDeclaration();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 481;
                this.genericInterfaceMethodDeclaration();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 482;
                this.interfaceDeclaration();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 483;
                this.annotationTypeDeclaration();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 484;
                this.classDeclaration();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 485;
                this.enumDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constDeclaration(): ConstDeclarationContext {
        let localContext = new ConstDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 56, JavaParser.RULE_constDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 488;
            this.typeSpec();
            this.state = 489;
            this.constantDeclarator();
            this.state = 494;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 490;
                this.match(JavaParser.COMMA);
                this.state = 491;
                this.constantDeclarator();
                }
                }
                this.state = 496;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 497;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantDeclarator(): ConstantDeclaratorContext {
        let localContext = new ConstantDeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 58, JavaParser.RULE_constantDeclarator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 499;
            this.match(JavaParser.Identifier);
            this.state = 504;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 61) {
                {
                {
                this.state = 500;
                this.match(JavaParser.LBRACK);
                this.state = 501;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 506;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 507;
            this.match(JavaParser.ASSIGN);
            this.state = 508;
            this.variableInitializer();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
        let localContext = new InterfaceMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 60, JavaParser.RULE_interfaceMethodDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 512;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.Identifier:
                {
                this.state = 510;
                this.typeSpec();
                }
                break;
            case JavaParser.VOID:
                {
                this.state = 511;
                this.match(JavaParser.VOID);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 514;
            this.match(JavaParser.Identifier);
            this.state = 515;
            this.formalParameters();
            this.state = 520;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 61) {
                {
                {
                this.state = 516;
                this.match(JavaParser.LBRACK);
                this.state = 517;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 522;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 525;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 523;
                this.match(JavaParser.THROWS);
                this.state = 524;
                this.qualifiedNameList();
                }
            }

            this.state = 527;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext {
        let localContext = new GenericInterfaceMethodDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 62, JavaParser.RULE_genericInterfaceMethodDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 529;
            this.typeParameters();
            this.state = 530;
            this.interfaceMethodDeclaration();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        let localContext = new VariableDeclaratorsContext(this.context, this.state);
        this.enterRule(localContext, 64, JavaParser.RULE_variableDeclarators);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 532;
            this.variableDeclarator();
            this.state = 537;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 533;
                this.match(JavaParser.COMMA);
                this.state = 534;
                this.variableDeclarator();
                }
                }
                this.state = 539;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclarator(): VariableDeclaratorContext {
        let localContext = new VariableDeclaratorContext(this.context, this.state);
        this.enterRule(localContext, 66, JavaParser.RULE_variableDeclarator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 540;
            this.variableDeclaratorId();
            this.state = 543;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 66) {
                {
                this.state = 541;
                this.match(JavaParser.ASSIGN);
                this.state = 542;
                this.variableInitializer();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        let localContext = new VariableDeclaratorIdContext(this.context, this.state);
        this.enterRule(localContext, 68, JavaParser.RULE_variableDeclaratorId);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 545;
            this.match(JavaParser.Identifier);
            this.state = 550;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 61) {
                {
                {
                this.state = 546;
                this.match(JavaParser.LBRACK);
                this.state = 547;
                this.match(JavaParser.RBRACK);
                }
                }
                this.state = 552;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public variableInitializer(): VariableInitializerContext {
        let localContext = new VariableInitializerContext(this.context, this.state);
        this.enterRule(localContext, 70, JavaParser.RULE_variableInitializer);
        try {
            this.state = 555;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LBRACE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 553;
                this.arrayInitializer();
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.NEW:
            case JavaParser.SHORT:
            case JavaParser.SUPER:
            case JavaParser.THIS:
            case JavaParser.VOID:
            case JavaParser.IntegerLiteral:
            case JavaParser.FloatingPointLiteral:
            case JavaParser.BooleanLiteral:
            case JavaParser.CharacterLiteral:
            case JavaParser.StringLiteral:
            case JavaParser.NullLiteral:
            case JavaParser.LPAREN:
            case JavaParser.LT:
            case JavaParser.BANG:
            case JavaParser.TILDE:
            case JavaParser.INC:
            case JavaParser.DEC:
            case JavaParser.ADD:
            case JavaParser.SUB:
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 554;
                this.expression(0);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayInitializer(): ArrayInitializerContext {
        let localContext = new ArrayInitializerContext(this.context, this.state);
        this.enterRule(localContext, 72, JavaParser.RULE_arrayInitializer);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 557;
            this.match(JavaParser.LBRACE);
            this.state = 569;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2153760841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0)) {
                {
                this.state = 558;
                this.variableInitializer();
                this.state = 563;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 559;
                        this.match(JavaParser.COMMA);
                        this.state = 560;
                        this.variableInitializer();
                        }
                        }
                    }
                    this.state = 565;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 55, this.context);
                }
                this.state = 567;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                    this.state = 566;
                    this.match(JavaParser.COMMA);
                    }
                }

                }
            }

            this.state = 571;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enumConstantName(): EnumConstantNameContext {
        let localContext = new EnumConstantNameContext(this.context, this.state);
        this.enterRule(localContext, 74, JavaParser.RULE_enumConstantName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 573;
            this.match(JavaParser.Identifier);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeSpec(): TypeSpecContext {
        let localContext = new TypeSpecContext(this.context, this.state);
        this.enterRule(localContext, 76, JavaParser.RULE_typeSpec);
        try {
            let alternative: number;
            this.state = 591;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 575;
                this.classOrInterfaceType();
                this.state = 580;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 576;
                        this.match(JavaParser.LBRACK);
                        this.state = 577;
                        this.match(JavaParser.RBRACK);
                        }
                        }
                    }
                    this.state = 582;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 58, this.context);
                }
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 583;
                this.primitiveType();
                this.state = 588;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 59, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 584;
                        this.match(JavaParser.LBRACK);
                        this.state = 585;
                        this.match(JavaParser.RBRACK);
                        }
                        }
                    }
                    this.state = 590;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 59, this.context);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classOrInterfaceType(): ClassOrInterfaceTypeContext {
        let localContext = new ClassOrInterfaceTypeContext(this.context, this.state);
        this.enterRule(localContext, 78, JavaParser.RULE_classOrInterfaceType);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 593;
            this.match(JavaParser.Identifier);
            this.state = 595;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 61, this.context) ) {
            case 1:
                {
                this.state = 594;
                this.typeArguments();
                }
                break;
            }
            this.state = 604;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 597;
                    this.match(JavaParser.DOT);
                    this.state = 598;
                    this.match(JavaParser.Identifier);
                    this.state = 600;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 62, this.context) ) {
                    case 1:
                        {
                        this.state = 599;
                        this.typeArguments();
                        }
                        break;
                    }
                    }
                    }
                }
                this.state = 606;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 63, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public primitiveType(): PrimitiveTypeContext {
        let localContext = new PrimitiveTypeContext(this.context, this.state);
        this.enterRule(localContext, 80, JavaParser.RULE_primitiveType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 607;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 672153896) !== 0) || _la === 37)) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArguments(): TypeArgumentsContext {
        let localContext = new TypeArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 82, JavaParser.RULE_typeArguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 609;
            this.match(JavaParser.LT);
            this.state = 610;
            this.typeArgument();
            this.state = 615;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 611;
                this.match(JavaParser.COMMA);
                this.state = 612;
                this.typeArgument();
                }
                }
                this.state = 617;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 618;
            this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArgument(): TypeArgumentContext {
        let localContext = new TypeArgumentContext(this.context, this.state);
        this.enterRule(localContext, 84, JavaParser.RULE_typeArgument);
        let _la: number;
        try {
            this.state = 626;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 620;
                this.typeSpec();
                }
                break;
            case JavaParser.QUESTION:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 621;
                this.match(JavaParser.QUESTION);
                this.state = 624;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 17 || _la === 40) {
                    {
                    this.state = 622;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 17 || _la === 40)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 623;
                    this.typeSpec();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedNameList(): QualifiedNameListContext {
        let localContext = new QualifiedNameListContext(this.context, this.state);
        this.enterRule(localContext, 86, JavaParser.RULE_qualifiedNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 628;
            this.qualifiedName();
            this.state = 633;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 629;
                this.match(JavaParser.COMMA);
                this.state = 630;
                this.qualifiedName();
                }
                }
                this.state = 635;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameters(): FormalParametersContext {
        let localContext = new FormalParametersContext(this.context, this.state);
        this.enterRule(localContext, 88, JavaParser.RULE_formalParameters);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 636;
            this.match(JavaParser.LPAREN);
            this.state = 638;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 672416040) !== 0) || _la === 37 || _la === 100 || _la === 101) {
                {
                this.state = 637;
                this.formalParameterList();
                }
            }

            this.state = 640;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameterList(): FormalParameterListContext {
        let localContext = new FormalParameterListContext(this.context, this.state);
        this.enterRule(localContext, 90, JavaParser.RULE_formalParameterList);
        let _la: number;
        try {
            let alternative: number;
            this.state = 655;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 71, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 642;
                this.formalParameter();
                this.state = 647;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 69, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 643;
                        this.match(JavaParser.COMMA);
                        this.state = 644;
                        this.formalParameter();
                        }
                        }
                    }
                    this.state = 649;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 69, this.context);
                }
                this.state = 652;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 64) {
                    {
                    this.state = 650;
                    this.match(JavaParser.COMMA);
                    this.state = 651;
                    this.lastFormalParameter();
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 654;
                this.lastFormalParameter();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public formalParameter(): FormalParameterContext {
        let localContext = new FormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 92, JavaParser.RULE_formalParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 660;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18 || _la === 101) {
                {
                {
                this.state = 657;
                this.variableModifier();
                }
                }
                this.state = 662;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 663;
            this.typeSpec();
            this.state = 664;
            this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public lastFormalParameter(): LastFormalParameterContext {
        let localContext = new LastFormalParameterContext(this.context, this.state);
        this.enterRule(localContext, 94, JavaParser.RULE_lastFormalParameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 669;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18 || _la === 101) {
                {
                {
                this.state = 666;
                this.variableModifier();
                }
                }
                this.state = 671;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 672;
            this.typeSpec();
            this.state = 673;
            this.match(JavaParser.ELLIPSIS);
            this.state = 674;
            this.variableDeclaratorId();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public methodBody(): MethodBodyContext {
        let localContext = new MethodBodyContext(this.context, this.state);
        this.enterRule(localContext, 96, JavaParser.RULE_methodBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 676;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constructorBody(): ConstructorBodyContext {
        let localContext = new ConstructorBodyContext(this.context, this.state);
        this.enterRule(localContext, 98, JavaParser.RULE_constructorBody);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 678;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public qualifiedName(): QualifiedNameContext {
        let localContext = new QualifiedNameContext(this.context, this.state);
        this.enterRule(localContext, 100, JavaParser.RULE_qualifiedName);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 680;
            this.match(JavaParser.Identifier);
            this.state = 685;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 681;
                    this.match(JavaParser.DOT);
                    this.state = 682;
                    this.match(JavaParser.Identifier);
                    }
                    }
                }
                this.state = 687;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 74, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 102, JavaParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 688;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & 63) !== 0))) {
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotation(): AnnotationContext {
        let localContext = new AnnotationContext(this.context, this.state);
        this.enterRule(localContext, 104, JavaParser.RULE_annotation);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 690;
            this.match(JavaParser.AT);
            this.state = 691;
            this.annotationName();
            this.state = 698;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 57) {
                {
                this.state = 692;
                this.match(JavaParser.LPAREN);
                this.state = 695;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 75, this.context) ) {
                case 1:
                    {
                    this.state = 693;
                    this.elementValuePairs();
                    }
                    break;
                case 2:
                    {
                    this.state = 694;
                    this.elementValue();
                    }
                    break;
                }
                this.state = 697;
                this.match(JavaParser.RPAREN);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationName(): AnnotationNameContext {
        let localContext = new AnnotationNameContext(this.context, this.state);
        this.enterRule(localContext, 106, JavaParser.RULE_annotationName);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 700;
            this.qualifiedName();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValuePairs(): ElementValuePairsContext {
        let localContext = new ElementValuePairsContext(this.context, this.state);
        this.enterRule(localContext, 108, JavaParser.RULE_elementValuePairs);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 702;
            this.elementValuePair();
            this.state = 707;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 703;
                this.match(JavaParser.COMMA);
                this.state = 704;
                this.elementValuePair();
                }
                }
                this.state = 709;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValuePair(): ElementValuePairContext {
        let localContext = new ElementValuePairContext(this.context, this.state);
        this.enterRule(localContext, 110, JavaParser.RULE_elementValuePair);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 710;
            this.match(JavaParser.Identifier);
            this.state = 711;
            this.match(JavaParser.ASSIGN);
            this.state = 712;
            this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValue(): ElementValueContext {
        let localContext = new ElementValueContext(this.context, this.state);
        this.enterRule(localContext, 112, JavaParser.RULE_elementValue);
        try {
            this.state = 717;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.NEW:
            case JavaParser.SHORT:
            case JavaParser.SUPER:
            case JavaParser.THIS:
            case JavaParser.VOID:
            case JavaParser.IntegerLiteral:
            case JavaParser.FloatingPointLiteral:
            case JavaParser.BooleanLiteral:
            case JavaParser.CharacterLiteral:
            case JavaParser.StringLiteral:
            case JavaParser.NullLiteral:
            case JavaParser.LPAREN:
            case JavaParser.LT:
            case JavaParser.BANG:
            case JavaParser.TILDE:
            case JavaParser.INC:
            case JavaParser.DEC:
            case JavaParser.ADD:
            case JavaParser.SUB:
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 714;
                this.expression(0);
                }
                break;
            case JavaParser.AT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 715;
                this.annotation();
                }
                break;
            case JavaParser.LBRACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 716;
                this.elementValueArrayInitializer();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public elementValueArrayInitializer(): ElementValueArrayInitializerContext {
        let localContext = new ElementValueArrayInitializerContext(this.context, this.state);
        this.enterRule(localContext, 114, JavaParser.RULE_elementValueArrayInitializer);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 719;
            this.match(JavaParser.LBRACE);
            this.state = 728;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2153760841) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0) || _la === 101) {
                {
                this.state = 720;
                this.elementValue();
                this.state = 725;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 721;
                        this.match(JavaParser.COMMA);
                        this.state = 722;
                        this.elementValue();
                        }
                        }
                    }
                    this.state = 727;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 79, this.context);
                }
                }
            }

            this.state = 731;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 64) {
                {
                this.state = 730;
                this.match(JavaParser.COMMA);
                }
            }

            this.state = 733;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext {
        let localContext = new AnnotationTypeDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 116, JavaParser.RULE_annotationTypeDeclaration);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 735;
            this.match(JavaParser.AT);
            this.state = 736;
            this.match(JavaParser.INTERFACE);
            this.state = 737;
            this.match(JavaParser.Identifier);
            this.state = 738;
            this.annotationTypeBody();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeBody(): AnnotationTypeBodyContext {
        let localContext = new AnnotationTypeBodyContext(this.context, this.state);
        this.enterRule(localContext, 118, JavaParser.RULE_annotationTypeBody);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 740;
            this.match(JavaParser.LBRACE);
            this.state = 744;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2014659370) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1073816183) !== 0) || _la === 100 || _la === 101) {
                {
                {
                this.state = 741;
                this.annotationTypeElementDeclaration();
                }
                }
                this.state = 746;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 747;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext {
        let localContext = new AnnotationTypeElementDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 120, JavaParser.RULE_annotationTypeElementDeclaration);
        try {
            let alternative: number;
            this.state = 757;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.ABSTRACT:
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.CLASS:
            case JavaParser.DOUBLE:
            case JavaParser.ENUM:
            case JavaParser.FINAL:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.INTERFACE:
            case JavaParser.LONG:
            case JavaParser.NATIVE:
            case JavaParser.PRIVATE:
            case JavaParser.PROTECTED:
            case JavaParser.PUBLIC:
            case JavaParser.SHORT:
            case JavaParser.STATIC:
            case JavaParser.STRICTFP:
            case JavaParser.SYNCHRONIZED:
            case JavaParser.TRANSIENT:
            case JavaParser.VOLATILE:
            case JavaParser.Identifier:
            case JavaParser.AT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 752;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 83, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 749;
                        this.modifier();
                        }
                        }
                    }
                    this.state = 754;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 83, this.context);
                }
                this.state = 755;
                this.annotationTypeElementRest();
                }
                break;
            case JavaParser.SEMI:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 756;
                this.match(JavaParser.SEMI);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationTypeElementRest(): AnnotationTypeElementRestContext {
        let localContext = new AnnotationTypeElementRestContext(this.context, this.state);
        this.enterRule(localContext, 122, JavaParser.RULE_annotationTypeElementRest);
        try {
            this.state = 779;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 759;
                this.typeSpec();
                this.state = 760;
                this.annotationMethodOrConstantRest();
                this.state = 761;
                this.match(JavaParser.SEMI);
                }
                break;
            case JavaParser.CLASS:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 763;
                this.classDeclaration();
                this.state = 765;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 85, this.context) ) {
                case 1:
                    {
                    this.state = 764;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case JavaParser.INTERFACE:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 767;
                this.interfaceDeclaration();
                this.state = 769;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 86, this.context) ) {
                case 1:
                    {
                    this.state = 768;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case JavaParser.ENUM:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 771;
                this.enumDeclaration();
                this.state = 773;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 87, this.context) ) {
                case 1:
                    {
                    this.state = 772;
                    this.match(JavaParser.SEMI);
                    }
                    break;
                }
                }
                break;
            case JavaParser.AT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 775;
                this.annotationTypeDeclaration();
                this.state = 777;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 88, this.context) ) {
                case 1:
                    {
                    this.state = 776;
                    this.match(JavaParser.SEMI);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext {
        let localContext = new AnnotationMethodOrConstantRestContext(this.context, this.state);
        this.enterRule(localContext, 124, JavaParser.RULE_annotationMethodOrConstantRest);
        try {
            this.state = 783;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 90, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 781;
                this.annotationMethodRest();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 782;
                this.annotationConstantRest();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationMethodRest(): AnnotationMethodRestContext {
        let localContext = new AnnotationMethodRestContext(this.context, this.state);
        this.enterRule(localContext, 126, JavaParser.RULE_annotationMethodRest);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 785;
            this.match(JavaParser.Identifier);
            this.state = 786;
            this.match(JavaParser.LPAREN);
            this.state = 787;
            this.match(JavaParser.RPAREN);
            this.state = 789;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 788;
                this.defaultValue();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public annotationConstantRest(): AnnotationConstantRestContext {
        let localContext = new AnnotationConstantRestContext(this.context, this.state);
        this.enterRule(localContext, 128, JavaParser.RULE_annotationConstantRest);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 791;
            this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public defaultValue(): DefaultValueContext {
        let localContext = new DefaultValueContext(this.context, this.state);
        this.enterRule(localContext, 130, JavaParser.RULE_defaultValue);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 793;
            this.match(JavaParser.DEFAULT);
            this.state = 794;
            this.elementValue();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 132, JavaParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 796;
            this.match(JavaParser.LBRACE);
            this.state = 800;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094702910) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 30727) !== 0) || _la === 100 || _la === 101) {
                {
                {
                this.state = 797;
                this.blockStatement();
                }
                }
                this.state = 802;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 803;
            this.match(JavaParser.RBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public blockStatement(): BlockStatementContext {
        let localContext = new BlockStatementContext(this.context, this.state);
        this.enterRule(localContext, 134, JavaParser.RULE_blockStatement);
        try {
            this.state = 808;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 93, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 805;
                this.localVariableDeclarationStatement();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 806;
                this.statement();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 807;
                this.typeDeclaration();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext {
        let localContext = new LocalVariableDeclarationStatementContext(this.context, this.state);
        this.enterRule(localContext, 136, JavaParser.RULE_localVariableDeclarationStatement);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 810;
            this.localVariableDeclaration();
            this.state = 811;
            this.match(JavaParser.SEMI);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public localVariableDeclaration(): LocalVariableDeclarationContext {
        let localContext = new LocalVariableDeclarationContext(this.context, this.state);
        this.enterRule(localContext, 138, JavaParser.RULE_localVariableDeclaration);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 816;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18 || _la === 101) {
                {
                {
                this.state = 813;
                this.variableModifier();
                }
                }
                this.state = 818;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 819;
            this.typeSpec();
            this.state = 820;
            this.variableDeclarators();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 140, JavaParser.RULE_statement);
        let _la: number;
        try {
            let alternative: number;
            this.state = 926;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 107, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 822;
                this.block();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 823;
                this.match(JavaParser.ASSERT);
                this.state = 824;
                this.expression(0);
                this.state = 827;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 72) {
                    {
                    this.state = 825;
                    this.match(JavaParser.COLON);
                    this.state = 826;
                    this.expression(0);
                    }
                }

                this.state = 829;
                this.match(JavaParser.SEMI);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 831;
                this.match(JavaParser.IF);
                this.state = 832;
                this.parExpression();
                this.state = 833;
                this.statement();
                this.state = 836;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 96, this.context) ) {
                case 1:
                    {
                    this.state = 834;
                    this.match(JavaParser.ELSE);
                    this.state = 835;
                    this.statement();
                    }
                    break;
                }
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 838;
                this.match(JavaParser.FOR);
                this.state = 839;
                this.match(JavaParser.LPAREN);
                this.state = 840;
                this.forControl();
                this.state = 841;
                this.match(JavaParser.RPAREN);
                this.state = 842;
                this.statement();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 844;
                this.match(JavaParser.WHILE);
                this.state = 845;
                this.parExpression();
                this.state = 846;
                this.statement();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 848;
                this.match(JavaParser.DO);
                this.state = 849;
                this.statement();
                this.state = 850;
                this.match(JavaParser.WHILE);
                this.state = 851;
                this.parExpression();
                this.state = 852;
                this.match(JavaParser.SEMI);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 854;
                this.match(JavaParser.TRY);
                this.state = 855;
                this.block();
                this.state = 865;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.CATCH:
                    {
                    this.state = 857;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    do {
                        {
                        {
                        this.state = 856;
                        this.catchClause();
                        }
                        }
                        this.state = 859;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    } while (_la === 7);
                    this.state = 862;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 19) {
                        {
                        this.state = 861;
                        this.finallyBlock();
                        }
                    }

                    }
                    break;
                case JavaParser.FINALLY:
                    {
                    this.state = 864;
                    this.finallyBlock();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 867;
                this.match(JavaParser.TRY);
                this.state = 868;
                this.resourceSpecification();
                this.state = 869;
                this.block();
                this.state = 873;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 7) {
                    {
                    {
                    this.state = 870;
                    this.catchClause();
                    }
                    }
                    this.state = 875;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 877;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 19) {
                    {
                    this.state = 876;
                    this.finallyBlock();
                    }
                }

                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 879;
                this.match(JavaParser.SWITCH);
                this.state = 880;
                this.parExpression();
                this.state = 881;
                this.match(JavaParser.LBRACE);
                this.state = 885;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 102, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 882;
                        this.switchBlockStatementGroup();
                        }
                        }
                    }
                    this.state = 887;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 102, this.context);
                }
                this.state = 891;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 6 || _la === 12) {
                    {
                    {
                    this.state = 888;
                    this.switchLabel();
                    }
                    }
                    this.state = 893;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 894;
                this.match(JavaParser.RBRACE);
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 896;
                this.match(JavaParser.SYNCHRONIZED);
                this.state = 897;
                this.parExpression();
                this.state = 898;
                this.block();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 900;
                this.match(JavaParser.RETURN);
                this.state = 902;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2149566537) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0)) {
                    {
                    this.state = 901;
                    this.expression(0);
                    }
                }

                this.state = 904;
                this.match(JavaParser.SEMI);
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 905;
                this.match(JavaParser.THROW);
                this.state = 906;
                this.expression(0);
                this.state = 907;
                this.match(JavaParser.SEMI);
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 909;
                this.match(JavaParser.BREAK);
                this.state = 911;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 100) {
                    {
                    this.state = 910;
                    this.match(JavaParser.Identifier);
                    }
                }

                this.state = 913;
                this.match(JavaParser.SEMI);
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 914;
                this.match(JavaParser.CONTINUE);
                this.state = 916;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 100) {
                    {
                    this.state = 915;
                    this.match(JavaParser.Identifier);
                    }
                }

                this.state = 918;
                this.match(JavaParser.SEMI);
                }
                break;
            case 15:
                this.enterOuterAlt(localContext, 15);
                {
                this.state = 919;
                this.match(JavaParser.SEMI);
                }
                break;
            case 16:
                this.enterOuterAlt(localContext, 16);
                {
                this.state = 920;
                this.statementExpression();
                this.state = 921;
                this.match(JavaParser.SEMI);
                }
                break;
            case 17:
                this.enterOuterAlt(localContext, 17);
                {
                this.state = 923;
                this.match(JavaParser.Identifier);
                this.state = 924;
                this.match(JavaParser.COLON);
                this.state = 925;
                this.statement();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchClause(): CatchClauseContext {
        let localContext = new CatchClauseContext(this.context, this.state);
        this.enterRule(localContext, 142, JavaParser.RULE_catchClause);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 928;
            this.match(JavaParser.CATCH);
            this.state = 929;
            this.match(JavaParser.LPAREN);
            this.state = 933;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18 || _la === 101) {
                {
                {
                this.state = 930;
                this.variableModifier();
                }
                }
                this.state = 935;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 936;
            this.catchType();
            this.state = 937;
            this.match(JavaParser.Identifier);
            this.state = 938;
            this.match(JavaParser.RPAREN);
            this.state = 939;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public catchType(): CatchTypeContext {
        let localContext = new CatchTypeContext(this.context, this.state);
        this.enterRule(localContext, 144, JavaParser.RULE_catchType);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 941;
            this.qualifiedName();
            this.state = 946;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 86) {
                {
                {
                this.state = 942;
                this.match(JavaParser.BITOR);
                this.state = 943;
                this.qualifiedName();
                }
                }
                this.state = 948;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public finallyBlock(): FinallyBlockContext {
        let localContext = new FinallyBlockContext(this.context, this.state);
        this.enterRule(localContext, 146, JavaParser.RULE_finallyBlock);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 949;
            this.match(JavaParser.FINALLY);
            this.state = 950;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resourceSpecification(): ResourceSpecificationContext {
        let localContext = new ResourceSpecificationContext(this.context, this.state);
        this.enterRule(localContext, 148, JavaParser.RULE_resourceSpecification);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 952;
            this.match(JavaParser.LPAREN);
            this.state = 953;
            this.resources();
            this.state = 955;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 63) {
                {
                this.state = 954;
                this.match(JavaParser.SEMI);
                }
            }

            this.state = 957;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resources(): ResourcesContext {
        let localContext = new ResourcesContext(this.context, this.state);
        this.enterRule(localContext, 150, JavaParser.RULE_resources);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 959;
            this.resource();
            this.state = 964;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 111, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 960;
                    this.match(JavaParser.SEMI);
                    this.state = 961;
                    this.resource();
                    }
                    }
                }
                this.state = 966;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 111, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public resource(): ResourceContext {
        let localContext = new ResourceContext(this.context, this.state);
        this.enterRule(localContext, 152, JavaParser.RULE_resource);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 970;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18 || _la === 101) {
                {
                {
                this.state = 967;
                this.variableModifier();
                }
                }
                this.state = 972;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 973;
            this.classOrInterfaceType();
            this.state = 974;
            this.variableDeclaratorId();
            this.state = 975;
            this.match(JavaParser.ASSIGN);
            this.state = 976;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchBlockStatementGroup(): SwitchBlockStatementGroupContext {
        let localContext = new SwitchBlockStatementGroupContext(this.context, this.state);
        this.enterRule(localContext, 154, JavaParser.RULE_switchBlockStatementGroup);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 979;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 978;
                this.switchLabel();
                }
                }
                this.state = 981;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while (_la === 6 || _la === 12);
            this.state = 984;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 983;
                this.blockStatement();
                }
                }
                this.state = 986;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3094702910) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 1174327295) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 30727) !== 0) || _la === 100 || _la === 101);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public switchLabel(): SwitchLabelContext {
        let localContext = new SwitchLabelContext(this.context, this.state);
        this.enterRule(localContext, 156, JavaParser.RULE_switchLabel);
        try {
            this.state = 998;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 115, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 988;
                this.match(JavaParser.CASE);
                this.state = 989;
                this.constantExpression();
                this.state = 990;
                this.match(JavaParser.COLON);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 992;
                this.match(JavaParser.CASE);
                this.state = 993;
                this.enumConstantName();
                this.state = 994;
                this.match(JavaParser.COLON);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 996;
                this.match(JavaParser.DEFAULT);
                this.state = 997;
                this.match(JavaParser.COLON);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forControl(): ForControlContext {
        let localContext = new ForControlContext(this.context, this.state);
        this.enterRule(localContext, 158, JavaParser.RULE_forControl);
        let _la: number;
        try {
            this.state = 1012;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 119, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1000;
                this.enhancedForControl();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1002;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819899688) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2149566537) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0) || _la === 101) {
                    {
                    this.state = 1001;
                    this.forInit();
                    }
                }

                this.state = 1004;
                this.match(JavaParser.SEMI);
                this.state = 1006;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2149566537) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0)) {
                    {
                    this.state = 1005;
                    this.expression(0);
                    }
                }

                this.state = 1008;
                this.match(JavaParser.SEMI);
                this.state = 1010;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2149566537) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0)) {
                    {
                    this.state = 1009;
                    this.forUpdate();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forInit(): ForInitContext {
        let localContext = new ForInitContext(this.context, this.state);
        this.enterRule(localContext, 160, JavaParser.RULE_forInit);
        try {
            this.state = 1016;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 120, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1014;
                this.localVariableDeclaration();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1015;
                this.expressionList();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public enhancedForControl(): EnhancedForControlContext {
        let localContext = new EnhancedForControlContext(this.context, this.state);
        this.enterRule(localContext, 162, JavaParser.RULE_enhancedForControl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1021;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 18 || _la === 101) {
                {
                {
                this.state = 1018;
                this.variableModifier();
                }
                }
                this.state = 1023;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 1024;
            this.typeSpec();
            this.state = 1025;
            this.variableDeclaratorId();
            this.state = 1026;
            this.match(JavaParser.COLON);
            this.state = 1027;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public forUpdate(): ForUpdateContext {
        let localContext = new ForUpdateContext(this.context, this.state);
        this.enterRule(localContext, 164, JavaParser.RULE_forUpdate);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1029;
            this.expressionList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parExpression(): ParExpressionContext {
        let localContext = new ParExpressionContext(this.context, this.state);
        this.enterRule(localContext, 166, JavaParser.RULE_parExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1031;
            this.match(JavaParser.LPAREN);
            this.state = 1032;
            this.expression(0);
            this.state = 1033;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expressionList(): ExpressionListContext {
        let localContext = new ExpressionListContext(this.context, this.state);
        this.enterRule(localContext, 168, JavaParser.RULE_expressionList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1035;
            this.expression(0);
            this.state = 1040;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 64) {
                {
                {
                this.state = 1036;
                this.match(JavaParser.COMMA);
                this.state = 1037;
                this.expression(0);
                }
                }
                this.state = 1042;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public statementExpression(): StatementExpressionContext {
        let localContext = new StatementExpressionContext(this.context, this.state);
        this.enterRule(localContext, 170, JavaParser.RULE_statementExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1043;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public constantExpression(): ConstantExpressionContext {
        let localContext = new ConstantExpressionContext(this.context, this.state);
        this.enterRule(localContext, 172, JavaParser.RULE_constantExpression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1045;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 174;
        this.enterRecursionRule(localContext, 174, JavaParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1060;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 123, this.context) ) {
            case 1:
                {
                this.state = 1048;
                this.primary();
                }
                break;
            case 2:
                {
                this.state = 1049;
                this.match(JavaParser.NEW);
                this.state = 1050;
                this.creator();
                }
                break;
            case 3:
                {
                this.state = 1051;
                this.match(JavaParser.LPAREN);
                this.state = 1052;
                this.typeSpec();
                this.state = 1053;
                this.match(JavaParser.RPAREN);
                this.state = 1054;
                this.expression(17);
                }
                break;
            case 4:
                {
                this.state = 1056;
                _la = this.tokenStream.LA(1);
                if(!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 15) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1057;
                this.expression(15);
                }
                break;
            case 5:
                {
                this.state = 1058;
                _la = this.tokenStream.LA(1);
                if(!(_la === 69 || _la === 70)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1059;
                this.expression(14);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 1147;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 128, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 1145;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 127, this.context) ) {
                    case 1:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1062;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 1063;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 83)) & ~0x1F) === 0 && ((1 << (_la - 83)) & 35) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1064;
                        this.expression(14);
                        }
                        break;
                    case 2:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1065;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 1066;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 81 || _la === 82)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1067;
                        this.expression(13);
                        }
                        break;
                    case 3:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1068;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 1076;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 124, this.context) ) {
                        case 1:
                            {
                            this.state = 1069;
                            this.match(JavaParser.LT);
                            this.state = 1070;
                            this.match(JavaParser.LT);
                            }
                            break;
                        case 2:
                            {
                            this.state = 1071;
                            this.match(JavaParser.GT);
                            this.state = 1072;
                            this.match(JavaParser.GT);
                            this.state = 1073;
                            this.match(JavaParser.GT);
                            }
                            break;
                        case 3:
                            {
                            this.state = 1074;
                            this.match(JavaParser.GT);
                            this.state = 1075;
                            this.match(JavaParser.GT);
                            }
                            break;
                        }
                        this.state = 1078;
                        this.expression(12);
                        }
                        break;
                    case 4:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1079;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 1080;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 67)) & ~0x1F) === 0 && ((1 << (_la - 67)) & 387) !== 0))) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1081;
                        this.expression(11);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1082;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 1083;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 73 || _la === 76)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1084;
                        this.expression(9);
                        }
                        break;
                    case 6:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1085;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 1086;
                        this.match(JavaParser.BITAND);
                        this.state = 1087;
                        this.expression(8);
                        }
                        break;
                    case 7:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1088;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 1089;
                        this.match(JavaParser.CARET);
                        this.state = 1090;
                        this.expression(7);
                        }
                        break;
                    case 8:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1091;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 1092;
                        this.match(JavaParser.BITOR);
                        this.state = 1093;
                        this.expression(6);
                        }
                        break;
                    case 9:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1094;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 1095;
                        this.match(JavaParser.AND);
                        this.state = 1096;
                        this.expression(5);
                        }
                        break;
                    case 10:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1097;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 1098;
                        this.match(JavaParser.OR);
                        this.state = 1099;
                        this.expression(4);
                        }
                        break;
                    case 11:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1100;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 1101;
                        this.match(JavaParser.QUESTION);
                        this.state = 1102;
                        this.expression(0);
                        this.state = 1103;
                        this.match(JavaParser.COLON);
                        this.state = 1104;
                        this.expression(3);
                        }
                        break;
                    case 12:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1106;
                        if (!(this.precpred(this.context, 1))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                        }
                        this.state = 1107;
                        _la = this.tokenStream.LA(1);
                        if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4286578689) !== 0) || _la === 98 || _la === 99)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 1108;
                        this.expression(1);
                        }
                        break;
                    case 13:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1109;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 1110;
                        this.match(JavaParser.DOT);
                        this.state = 1111;
                        this.match(JavaParser.Identifier);
                        }
                        break;
                    case 14:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1112;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 1113;
                        this.match(JavaParser.DOT);
                        this.state = 1114;
                        this.match(JavaParser.THIS);
                        }
                        break;
                    case 15:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1115;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 1116;
                        this.match(JavaParser.DOT);
                        this.state = 1117;
                        this.match(JavaParser.NEW);
                        this.state = 1119;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 68) {
                            {
                            this.state = 1118;
                            this.nonWildcardTypeArguments();
                            }
                        }

                        this.state = 1121;
                        this.innerCreator();
                        }
                        break;
                    case 16:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1122;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 1123;
                        this.match(JavaParser.DOT);
                        this.state = 1124;
                        this.match(JavaParser.SUPER);
                        this.state = 1125;
                        this.superSuffix();
                        }
                        break;
                    case 17:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1126;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 1127;
                        this.match(JavaParser.DOT);
                        this.state = 1128;
                        this.explicitGenericInvocation();
                        }
                        break;
                    case 18:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1129;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 1130;
                        this.match(JavaParser.LBRACK);
                        this.state = 1131;
                        this.expression(0);
                        this.state = 1132;
                        this.match(JavaParser.RBRACK);
                        }
                        break;
                    case 19:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1134;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 1135;
                        this.match(JavaParser.LPAREN);
                        this.state = 1137;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2149566537) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0)) {
                            {
                            this.state = 1136;
                            this.expressionList();
                            }
                        }

                        this.state = 1139;
                        this.match(JavaParser.RPAREN);
                        }
                        break;
                    case 20:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1140;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 1141;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 79 || _la === 80)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        }
                        break;
                    case 21:
                        {
                        localContext = new ExpressionContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, JavaParser.RULE_expression);
                        this.state = 1142;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 1143;
                        this.match(JavaParser.INSTANCEOF);
                        this.state = 1144;
                        this.typeSpec();
                        }
                        break;
                    }
                    }
                }
                this.state = 1149;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 128, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public primary(): PrimaryContext {
        let localContext = new PrimaryContext(this.context, this.state);
        this.enterRule(localContext, 176, JavaParser.RULE_primary);
        try {
            this.state = 1171;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 130, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1150;
                this.match(JavaParser.LPAREN);
                this.state = 1151;
                this.expression(0);
                this.state = 1152;
                this.match(JavaParser.RPAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1154;
                this.match(JavaParser.THIS);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 1155;
                this.match(JavaParser.SUPER);
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 1156;
                this.literal();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 1157;
                this.match(JavaParser.Identifier);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 1158;
                this.typeSpec();
                this.state = 1159;
                this.match(JavaParser.DOT);
                this.state = 1160;
                this.match(JavaParser.CLASS);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 1162;
                this.match(JavaParser.VOID);
                this.state = 1163;
                this.match(JavaParser.DOT);
                this.state = 1164;
                this.match(JavaParser.CLASS);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 1165;
                this.nonWildcardTypeArguments();
                this.state = 1169;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.SUPER:
                case JavaParser.Identifier:
                    {
                    this.state = 1166;
                    this.explicitGenericInvocationSuffix();
                    }
                    break;
                case JavaParser.THIS:
                    {
                    this.state = 1167;
                    this.match(JavaParser.THIS);
                    this.state = 1168;
                    this.arguments();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public creator(): CreatorContext {
        let localContext = new CreatorContext(this.context, this.state);
        this.enterRule(localContext, 178, JavaParser.RULE_creator);
        try {
            this.state = 1182;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LT:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1173;
                this.nonWildcardTypeArguments();
                this.state = 1174;
                this.createdName();
                this.state = 1175;
                this.classCreatorRest();
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1177;
                this.createdName();
                this.state = 1180;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case JavaParser.LBRACK:
                    {
                    this.state = 1178;
                    this.arrayCreatorRest();
                    }
                    break;
                case JavaParser.LPAREN:
                    {
                    this.state = 1179;
                    this.classCreatorRest();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public createdName(): CreatedNameContext {
        let localContext = new CreatedNameContext(this.context, this.state);
        this.enterRule(localContext, 180, JavaParser.RULE_createdName);
        let _la: number;
        try {
            this.state = 1199;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1184;
                this.match(JavaParser.Identifier);
                this.state = 1186;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 68) {
                    {
                    this.state = 1185;
                    this.typeArgumentsOrDiamond();
                    }
                }

                this.state = 1195;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 65) {
                    {
                    {
                    this.state = 1188;
                    this.match(JavaParser.DOT);
                    this.state = 1189;
                    this.match(JavaParser.Identifier);
                    this.state = 1191;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if (_la === 68) {
                        {
                        this.state = 1190;
                        this.typeArgumentsOrDiamond();
                        }
                    }

                    }
                    }
                    this.state = 1197;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.SHORT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1198;
                this.primitiveType();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public innerCreator(): InnerCreatorContext {
        let localContext = new InnerCreatorContext(this.context, this.state);
        this.enterRule(localContext, 182, JavaParser.RULE_innerCreator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1201;
            this.match(JavaParser.Identifier);
            this.state = 1203;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 68) {
                {
                this.state = 1202;
                this.nonWildcardTypeArgumentsOrDiamond();
                }
            }

            this.state = 1205;
            this.classCreatorRest();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arrayCreatorRest(): ArrayCreatorRestContext {
        let localContext = new ArrayCreatorRestContext(this.context, this.state);
        this.enterRule(localContext, 184, JavaParser.RULE_arrayCreatorRest);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1207;
            this.match(JavaParser.LBRACK);
            this.state = 1235;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.RBRACK:
                {
                this.state = 1208;
                this.match(JavaParser.RBRACK);
                this.state = 1213;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 61) {
                    {
                    {
                    this.state = 1209;
                    this.match(JavaParser.LBRACK);
                    this.state = 1210;
                    this.match(JavaParser.RBRACK);
                    }
                    }
                    this.state = 1215;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                this.state = 1216;
                this.arrayInitializer();
                }
                break;
            case JavaParser.BOOLEAN:
            case JavaParser.BYTE:
            case JavaParser.CHAR:
            case JavaParser.DOUBLE:
            case JavaParser.FLOAT:
            case JavaParser.INT:
            case JavaParser.LONG:
            case JavaParser.NEW:
            case JavaParser.SHORT:
            case JavaParser.SUPER:
            case JavaParser.THIS:
            case JavaParser.VOID:
            case JavaParser.IntegerLiteral:
            case JavaParser.FloatingPointLiteral:
            case JavaParser.BooleanLiteral:
            case JavaParser.CharacterLiteral:
            case JavaParser.StringLiteral:
            case JavaParser.NullLiteral:
            case JavaParser.LPAREN:
            case JavaParser.LT:
            case JavaParser.BANG:
            case JavaParser.TILDE:
            case JavaParser.INC:
            case JavaParser.DEC:
            case JavaParser.ADD:
            case JavaParser.SUB:
            case JavaParser.Identifier:
                {
                this.state = 1217;
                this.expression(0);
                this.state = 1218;
                this.match(JavaParser.RBRACK);
                this.state = 1225;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1219;
                        this.match(JavaParser.LBRACK);
                        this.state = 1220;
                        this.expression(0);
                        this.state = 1221;
                        this.match(JavaParser.RBRACK);
                        }
                        }
                    }
                    this.state = 1227;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 139, this.context);
                }
                this.state = 1232;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
                while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                    if (alternative === 1) {
                        {
                        {
                        this.state = 1228;
                        this.match(JavaParser.LBRACK);
                        this.state = 1229;
                        this.match(JavaParser.RBRACK);
                        }
                        }
                    }
                    this.state = 1234;
                    this.errorHandler.sync(this);
                    alternative = this.interpreter.adaptivePredict(this.tokenStream, 140, this.context);
                }
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public classCreatorRest(): ClassCreatorRestContext {
        let localContext = new ClassCreatorRestContext(this.context, this.state);
        this.enterRule(localContext, 186, JavaParser.RULE_classCreatorRest);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1237;
            this.arguments();
            this.state = 1239;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 142, this.context) ) {
            case 1:
                {
                this.state = 1238;
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explicitGenericInvocation(): ExplicitGenericInvocationContext {
        let localContext = new ExplicitGenericInvocationContext(this.context, this.state);
        this.enterRule(localContext, 188, JavaParser.RULE_explicitGenericInvocation);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1241;
            this.nonWildcardTypeArguments();
            this.state = 1242;
            this.explicitGenericInvocationSuffix();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
        let localContext = new NonWildcardTypeArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 190, JavaParser.RULE_nonWildcardTypeArguments);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1244;
            this.match(JavaParser.LT);
            this.state = 1245;
            this.typeList();
            this.state = 1246;
            this.match(JavaParser.GT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext {
        let localContext = new TypeArgumentsOrDiamondContext(this.context, this.state);
        this.enterRule(localContext, 192, JavaParser.RULE_typeArgumentsOrDiamond);
        try {
            this.state = 1251;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 143, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1248;
                this.match(JavaParser.LT);
                this.state = 1249;
                this.match(JavaParser.GT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1250;
                this.typeArguments();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext {
        let localContext = new NonWildcardTypeArgumentsOrDiamondContext(this.context, this.state);
        this.enterRule(localContext, 194, JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond);
        try {
            this.state = 1256;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 144, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1253;
                this.match(JavaParser.LT);
                this.state = 1254;
                this.match(JavaParser.GT);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1255;
                this.nonWildcardTypeArguments();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public superSuffix(): SuperSuffixContext {
        let localContext = new SuperSuffixContext(this.context, this.state);
        this.enterRule(localContext, 196, JavaParser.RULE_superSuffix);
        try {
            this.state = 1264;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.LPAREN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1258;
                this.arguments();
                }
                break;
            case JavaParser.DOT:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1259;
                this.match(JavaParser.DOT);
                this.state = 1260;
                this.match(JavaParser.Identifier);
                this.state = 1262;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 145, this.context) ) {
                case 1:
                    {
                    this.state = 1261;
                    this.arguments();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
        let localContext = new ExplicitGenericInvocationSuffixContext(this.context, this.state);
        this.enterRule(localContext, 198, JavaParser.RULE_explicitGenericInvocationSuffix);
        try {
            this.state = 1270;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case JavaParser.SUPER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 1266;
                this.match(JavaParser.SUPER);
                this.state = 1267;
                this.superSuffix();
                }
                break;
            case JavaParser.Identifier:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 1268;
                this.match(JavaParser.Identifier);
                this.state = 1269;
                this.arguments();
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
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public arguments(): ArgumentsContext {
        let localContext = new ArgumentsContext(this.context, this.state);
        this.enterRule(localContext, 200, JavaParser.RULE_arguments);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 1272;
            this.match(JavaParser.LPAREN);
            this.state = 1274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2819637544) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 2149566537) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 2147499011) !== 0)) {
                {
                this.state = 1273;
                this.expressionList();
                }
            }

            this.state = 1276;
            this.match(JavaParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 87:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 13);
        case 1:
            return this.precpred(this.context, 12);
        case 2:
            return this.precpred(this.context, 11);
        case 3:
            return this.precpred(this.context, 10);
        case 4:
            return this.precpred(this.context, 8);
        case 5:
            return this.precpred(this.context, 7);
        case 6:
            return this.precpred(this.context, 6);
        case 7:
            return this.precpred(this.context, 5);
        case 8:
            return this.precpred(this.context, 4);
        case 9:
            return this.precpred(this.context, 3);
        case 10:
            return this.precpred(this.context, 2);
        case 11:
            return this.precpred(this.context, 1);
        case 12:
            return this.precpred(this.context, 25);
        case 13:
            return this.precpred(this.context, 24);
        case 14:
            return this.precpred(this.context, 23);
        case 15:
            return this.precpred(this.context, 22);
        case 16:
            return this.precpred(this.context, 21);
        case 17:
            return this.precpred(this.context, 20);
        case 18:
            return this.precpred(this.context, 19);
        case 19:
            return this.precpred(this.context, 16);
        case 20:
            return this.precpred(this.context, 9);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,105,1279,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,
        33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,
        39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
        46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
        52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,
        59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,
        65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,
        72,7,72,2,73,7,73,2,74,7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,
        78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,7,82,2,83,7,83,2,84,7,84,2,
        85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,2,89,7,89,2,90,7,90,2,91,7,
        91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,96,7,96,2,97,7,97,2,
        98,7,98,2,99,7,99,2,100,7,100,1,0,3,0,204,8,0,1,0,5,0,207,8,0,10,
        0,12,0,210,9,0,1,0,5,0,213,8,0,10,0,12,0,216,9,0,1,0,1,0,1,1,5,1,
        221,8,1,10,1,12,1,224,9,1,1,1,1,1,1,1,1,1,1,2,1,2,3,2,232,8,2,1,
        2,1,2,1,2,3,2,237,8,2,1,2,1,2,1,3,5,3,242,8,3,10,3,12,3,245,9,3,
        1,3,1,3,5,3,249,8,3,10,3,12,3,252,9,3,1,3,1,3,5,3,256,8,3,10,3,12,
        3,259,9,3,1,3,1,3,5,3,263,8,3,10,3,12,3,266,9,3,1,3,1,3,3,3,270,
        8,3,1,4,1,4,3,4,274,8,4,1,5,1,5,3,5,278,8,5,1,6,1,6,3,6,282,8,6,
        1,7,1,7,1,7,3,7,287,8,7,1,7,1,7,3,7,291,8,7,1,7,1,7,3,7,295,8,7,
        1,7,1,7,1,8,1,8,1,8,1,8,5,8,303,8,8,10,8,12,8,306,9,8,1,8,1,8,1,
        9,1,9,1,9,3,9,313,8,9,1,10,1,10,1,10,5,10,318,8,10,10,10,12,10,321,
        9,10,1,11,1,11,1,11,1,11,3,11,327,8,11,1,11,1,11,3,11,331,8,11,1,
        11,3,11,334,8,11,1,11,3,11,337,8,11,1,11,1,11,1,12,1,12,1,12,5,12,
        344,8,12,10,12,12,12,347,9,12,1,13,5,13,350,8,13,10,13,12,13,353,
        9,13,1,13,1,13,3,13,357,8,13,1,13,3,13,360,8,13,1,14,1,14,5,14,364,
        8,14,10,14,12,14,367,9,14,1,15,1,15,1,15,3,15,372,8,15,1,15,1,15,
        3,15,376,8,15,1,15,1,15,1,16,1,16,1,16,5,16,383,8,16,10,16,12,16,
        386,9,16,1,17,1,17,5,17,390,8,17,10,17,12,17,393,9,17,1,17,1,17,
        1,18,1,18,5,18,399,8,18,10,18,12,18,402,9,18,1,18,1,18,1,19,1,19,
        3,19,408,8,19,1,19,1,19,5,19,412,8,19,10,19,12,19,415,9,19,1,19,
        3,19,418,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,
        429,8,20,1,21,1,21,3,21,433,8,21,1,21,1,21,1,21,1,21,5,21,439,8,
        21,10,21,12,21,442,9,21,1,21,1,21,3,21,446,8,21,1,21,1,21,3,21,450,
        8,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,3,23,459,8,23,1,23,1,23,
        1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,5,26,471,8,26,10,26,12,26,
        474,9,26,1,26,1,26,3,26,478,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,
        27,3,27,487,8,27,1,28,1,28,1,28,1,28,5,28,493,8,28,10,28,12,28,496,
        9,28,1,28,1,28,1,29,1,29,1,29,5,29,503,8,29,10,29,12,29,506,9,29,
        1,29,1,29,1,29,1,30,1,30,3,30,513,8,30,1,30,1,30,1,30,1,30,5,30,
        519,8,30,10,30,12,30,522,9,30,1,30,1,30,3,30,526,8,30,1,30,1,30,
        1,31,1,31,1,31,1,32,1,32,1,32,5,32,536,8,32,10,32,12,32,539,9,32,
        1,33,1,33,1,33,3,33,544,8,33,1,34,1,34,1,34,5,34,549,8,34,10,34,
        12,34,552,9,34,1,35,1,35,3,35,556,8,35,1,36,1,36,1,36,1,36,5,36,
        562,8,36,10,36,12,36,565,9,36,1,36,3,36,568,8,36,3,36,570,8,36,1,
        36,1,36,1,37,1,37,1,38,1,38,1,38,5,38,579,8,38,10,38,12,38,582,9,
        38,1,38,1,38,1,38,5,38,587,8,38,10,38,12,38,590,9,38,3,38,592,8,
        38,1,39,1,39,3,39,596,8,39,1,39,1,39,1,39,3,39,601,8,39,5,39,603,
        8,39,10,39,12,39,606,9,39,1,40,1,40,1,41,1,41,1,41,1,41,5,41,614,
        8,41,10,41,12,41,617,9,41,1,41,1,41,1,42,1,42,1,42,1,42,3,42,625,
        8,42,3,42,627,8,42,1,43,1,43,1,43,5,43,632,8,43,10,43,12,43,635,
        9,43,1,44,1,44,3,44,639,8,44,1,44,1,44,1,45,1,45,1,45,5,45,646,8,
        45,10,45,12,45,649,9,45,1,45,1,45,3,45,653,8,45,1,45,3,45,656,8,
        45,1,46,5,46,659,8,46,10,46,12,46,662,9,46,1,46,1,46,1,46,1,47,5,
        47,668,8,47,10,47,12,47,671,9,47,1,47,1,47,1,47,1,47,1,48,1,48,1,
        49,1,49,1,50,1,50,1,50,5,50,684,8,50,10,50,12,50,687,9,50,1,51,1,
        51,1,52,1,52,1,52,1,52,1,52,3,52,696,8,52,1,52,3,52,699,8,52,1,53,
        1,53,1,54,1,54,1,54,5,54,706,8,54,10,54,12,54,709,9,54,1,55,1,55,
        1,55,1,55,1,56,1,56,1,56,3,56,718,8,56,1,57,1,57,1,57,1,57,5,57,
        724,8,57,10,57,12,57,727,9,57,3,57,729,8,57,1,57,3,57,732,8,57,1,
        57,1,57,1,58,1,58,1,58,1,58,1,58,1,59,1,59,5,59,743,8,59,10,59,12,
        59,746,9,59,1,59,1,59,1,60,5,60,751,8,60,10,60,12,60,754,9,60,1,
        60,1,60,3,60,758,8,60,1,61,1,61,1,61,1,61,1,61,1,61,3,61,766,8,61,
        1,61,1,61,3,61,770,8,61,1,61,1,61,3,61,774,8,61,1,61,1,61,3,61,778,
        8,61,3,61,780,8,61,1,62,1,62,3,62,784,8,62,1,63,1,63,1,63,1,63,3,
        63,790,8,63,1,64,1,64,1,65,1,65,1,65,1,66,1,66,5,66,799,8,66,10,
        66,12,66,802,9,66,1,66,1,66,1,67,1,67,1,67,3,67,809,8,67,1,68,1,
        68,1,68,1,69,5,69,815,8,69,10,69,12,69,818,9,69,1,69,1,69,1,69,1,
        70,1,70,1,70,1,70,1,70,3,70,828,8,70,1,70,1,70,1,70,1,70,1,70,1,
        70,1,70,3,70,837,8,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
        70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,4,70,858,8,
        70,11,70,12,70,859,1,70,3,70,863,8,70,1,70,3,70,866,8,70,1,70,1,
        70,1,70,1,70,5,70,872,8,70,10,70,12,70,875,9,70,1,70,3,70,878,8,
        70,1,70,1,70,1,70,1,70,5,70,884,8,70,10,70,12,70,887,9,70,1,70,5,
        70,890,8,70,10,70,12,70,893,9,70,1,70,1,70,1,70,1,70,1,70,1,70,1,
        70,1,70,3,70,903,8,70,1,70,1,70,1,70,1,70,1,70,1,70,1,70,3,70,912,
        8,70,1,70,1,70,1,70,3,70,917,8,70,1,70,1,70,1,70,1,70,1,70,1,70,
        1,70,1,70,3,70,927,8,70,1,71,1,71,1,71,5,71,932,8,71,10,71,12,71,
        935,9,71,1,71,1,71,1,71,1,71,1,71,1,72,1,72,1,72,5,72,945,8,72,10,
        72,12,72,948,9,72,1,73,1,73,1,73,1,74,1,74,1,74,3,74,956,8,74,1,
        74,1,74,1,75,1,75,1,75,5,75,963,8,75,10,75,12,75,966,9,75,1,76,5,
        76,969,8,76,10,76,12,76,972,9,76,1,76,1,76,1,76,1,76,1,76,1,77,4,
        77,980,8,77,11,77,12,77,981,1,77,4,77,985,8,77,11,77,12,77,986,1,
        78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,3,78,999,8,78,1,
        79,1,79,3,79,1003,8,79,1,79,1,79,3,79,1007,8,79,1,79,1,79,3,79,1011,
        8,79,3,79,1013,8,79,1,80,1,80,3,80,1017,8,80,1,81,5,81,1020,8,81,
        10,81,12,81,1023,9,81,1,81,1,81,1,81,1,81,1,81,1,82,1,82,1,83,1,
        83,1,83,1,83,1,84,1,84,1,84,5,84,1039,8,84,10,84,12,84,1042,9,84,
        1,85,1,85,1,86,1,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,1,87,1,87,1,87,3,87,1061,8,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,3,87,1077,8,87,1,87,1,87,
        1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        3,87,1120,8,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,1,87,
        1,87,1,87,1,87,1,87,1,87,1,87,3,87,1138,8,87,1,87,1,87,1,87,1,87,
        1,87,1,87,5,87,1146,8,87,10,87,12,87,1149,9,87,1,88,1,88,1,88,1,
        88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,88,1,
        88,1,88,1,88,3,88,1170,8,88,3,88,1172,8,88,1,89,1,89,1,89,1,89,1,
        89,1,89,1,89,3,89,1181,8,89,3,89,1183,8,89,1,90,1,90,3,90,1187,8,
        90,1,90,1,90,1,90,3,90,1192,8,90,5,90,1194,8,90,10,90,12,90,1197,
        9,90,1,90,3,90,1200,8,90,1,91,1,91,3,91,1204,8,91,1,91,1,91,1,92,
        1,92,1,92,1,92,5,92,1212,8,92,10,92,12,92,1215,9,92,1,92,1,92,1,
        92,1,92,1,92,1,92,1,92,5,92,1224,8,92,10,92,12,92,1227,9,92,1,92,
        1,92,5,92,1231,8,92,10,92,12,92,1234,9,92,3,92,1236,8,92,1,93,1,
        93,3,93,1240,8,93,1,94,1,94,1,94,1,95,1,95,1,95,1,95,1,96,1,96,1,
        96,3,96,1252,8,96,1,97,1,97,1,97,3,97,1257,8,97,1,98,1,98,1,98,1,
        98,3,98,1263,8,98,3,98,1265,8,98,1,99,1,99,1,99,1,99,3,99,1271,8,
        99,1,100,1,100,3,100,1275,8,100,1,100,1,100,1,100,0,1,174,101,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
        48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,
        92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
        126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,
        158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,
        190,192,194,196,198,200,0,13,4,0,30,30,42,42,46,46,49,49,4,0,1,1,
        18,18,33,35,38,39,8,0,3,3,5,5,8,8,14,14,20,20,27,27,29,29,37,37,
        2,0,17,17,40,40,1,0,51,56,1,0,79,82,1,0,69,70,2,0,83,84,88,88,1,
        0,81,82,2,0,67,68,74,75,2,0,73,73,76,76,2,0,66,66,89,99,1,0,79,80,
        1393,0,203,1,0,0,0,2,222,1,0,0,0,4,229,1,0,0,0,6,269,1,0,0,0,8,273,
        1,0,0,0,10,277,1,0,0,0,12,281,1,0,0,0,14,283,1,0,0,0,16,298,1,0,
        0,0,18,309,1,0,0,0,20,314,1,0,0,0,22,322,1,0,0,0,24,340,1,0,0,0,
        26,351,1,0,0,0,28,361,1,0,0,0,30,368,1,0,0,0,32,379,1,0,0,0,34,387,
        1,0,0,0,36,396,1,0,0,0,38,417,1,0,0,0,40,428,1,0,0,0,42,432,1,0,
        0,0,44,451,1,0,0,0,46,454,1,0,0,0,48,462,1,0,0,0,50,465,1,0,0,0,
        52,477,1,0,0,0,54,486,1,0,0,0,56,488,1,0,0,0,58,499,1,0,0,0,60,512,
        1,0,0,0,62,529,1,0,0,0,64,532,1,0,0,0,66,540,1,0,0,0,68,545,1,0,
        0,0,70,555,1,0,0,0,72,557,1,0,0,0,74,573,1,0,0,0,76,591,1,0,0,0,
        78,593,1,0,0,0,80,607,1,0,0,0,82,609,1,0,0,0,84,626,1,0,0,0,86,628,
        1,0,0,0,88,636,1,0,0,0,90,655,1,0,0,0,92,660,1,0,0,0,94,669,1,0,
        0,0,96,676,1,0,0,0,98,678,1,0,0,0,100,680,1,0,0,0,102,688,1,0,0,
        0,104,690,1,0,0,0,106,700,1,0,0,0,108,702,1,0,0,0,110,710,1,0,0,
        0,112,717,1,0,0,0,114,719,1,0,0,0,116,735,1,0,0,0,118,740,1,0,0,
        0,120,757,1,0,0,0,122,779,1,0,0,0,124,783,1,0,0,0,126,785,1,0,0,
        0,128,791,1,0,0,0,130,793,1,0,0,0,132,796,1,0,0,0,134,808,1,0,0,
        0,136,810,1,0,0,0,138,816,1,0,0,0,140,926,1,0,0,0,142,928,1,0,0,
        0,144,941,1,0,0,0,146,949,1,0,0,0,148,952,1,0,0,0,150,959,1,0,0,
        0,152,970,1,0,0,0,154,979,1,0,0,0,156,998,1,0,0,0,158,1012,1,0,0,
        0,160,1016,1,0,0,0,162,1021,1,0,0,0,164,1029,1,0,0,0,166,1031,1,
        0,0,0,168,1035,1,0,0,0,170,1043,1,0,0,0,172,1045,1,0,0,0,174,1060,
        1,0,0,0,176,1171,1,0,0,0,178,1182,1,0,0,0,180,1199,1,0,0,0,182,1201,
        1,0,0,0,184,1207,1,0,0,0,186,1237,1,0,0,0,188,1241,1,0,0,0,190,1244,
        1,0,0,0,192,1251,1,0,0,0,194,1256,1,0,0,0,196,1264,1,0,0,0,198,1270,
        1,0,0,0,200,1272,1,0,0,0,202,204,3,2,1,0,203,202,1,0,0,0,203,204,
        1,0,0,0,204,208,1,0,0,0,205,207,3,4,2,0,206,205,1,0,0,0,207,210,
        1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,214,1,0,0,0,210,208,
        1,0,0,0,211,213,3,6,3,0,212,211,1,0,0,0,213,216,1,0,0,0,214,212,
        1,0,0,0,214,215,1,0,0,0,215,217,1,0,0,0,216,214,1,0,0,0,217,218,
        5,0,0,1,218,1,1,0,0,0,219,221,3,104,52,0,220,219,1,0,0,0,221,224,
        1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,225,1,0,0,0,224,222,
        1,0,0,0,225,226,5,32,0,0,226,227,3,100,50,0,227,228,5,63,0,0,228,
        3,1,0,0,0,229,231,5,25,0,0,230,232,5,38,0,0,231,230,1,0,0,0,231,
        232,1,0,0,0,232,233,1,0,0,0,233,236,3,100,50,0,234,235,5,65,0,0,
        235,237,5,83,0,0,236,234,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,
        238,239,5,63,0,0,239,5,1,0,0,0,240,242,3,10,5,0,241,240,1,0,0,0,
        242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,246,1,0,0,0,
        245,243,1,0,0,0,246,270,3,14,7,0,247,249,3,10,5,0,248,247,1,0,0,
        0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,253,1,0,0,
        0,252,250,1,0,0,0,253,270,3,22,11,0,254,256,3,10,5,0,255,254,1,0,
        0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,260,1,0,
        0,0,259,257,1,0,0,0,260,270,3,30,15,0,261,263,3,10,5,0,262,261,1,
        0,0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,267,1,
        0,0,0,266,264,1,0,0,0,267,270,3,116,58,0,268,270,5,63,0,0,269,243,
        1,0,0,0,269,250,1,0,0,0,269,257,1,0,0,0,269,264,1,0,0,0,269,268,
        1,0,0,0,270,7,1,0,0,0,271,274,3,10,5,0,272,274,7,0,0,0,273,271,1,
        0,0,0,273,272,1,0,0,0,274,9,1,0,0,0,275,278,3,104,52,0,276,278,7,
        1,0,0,277,275,1,0,0,0,277,276,1,0,0,0,278,11,1,0,0,0,279,282,5,18,
        0,0,280,282,3,104,52,0,281,279,1,0,0,0,281,280,1,0,0,0,282,13,1,
        0,0,0,283,284,5,9,0,0,284,286,5,100,0,0,285,287,3,16,8,0,286,285,
        1,0,0,0,286,287,1,0,0,0,287,290,1,0,0,0,288,289,5,17,0,0,289,291,
        3,76,38,0,290,288,1,0,0,0,290,291,1,0,0,0,291,294,1,0,0,0,292,293,
        5,24,0,0,293,295,3,32,16,0,294,292,1,0,0,0,294,295,1,0,0,0,295,296,
        1,0,0,0,296,297,3,34,17,0,297,15,1,0,0,0,298,299,5,68,0,0,299,304,
        3,18,9,0,300,301,5,64,0,0,301,303,3,18,9,0,302,300,1,0,0,0,303,306,
        1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,307,1,0,0,0,306,304,
        1,0,0,0,307,308,5,67,0,0,308,17,1,0,0,0,309,312,5,100,0,0,310,311,
        5,17,0,0,311,313,3,20,10,0,312,310,1,0,0,0,312,313,1,0,0,0,313,19,
        1,0,0,0,314,319,3,76,38,0,315,316,5,85,0,0,316,318,3,76,38,0,317,
        315,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,
        21,1,0,0,0,321,319,1,0,0,0,322,323,5,16,0,0,323,326,5,100,0,0,324,
        325,5,24,0,0,325,327,3,32,16,0,326,324,1,0,0,0,326,327,1,0,0,0,327,
        328,1,0,0,0,328,330,5,59,0,0,329,331,3,24,12,0,330,329,1,0,0,0,330,
        331,1,0,0,0,331,333,1,0,0,0,332,334,5,64,0,0,333,332,1,0,0,0,333,
        334,1,0,0,0,334,336,1,0,0,0,335,337,3,28,14,0,336,335,1,0,0,0,336,
        337,1,0,0,0,337,338,1,0,0,0,338,339,5,60,0,0,339,23,1,0,0,0,340,
        345,3,26,13,0,341,342,5,64,0,0,342,344,3,26,13,0,343,341,1,0,0,0,
        344,347,1,0,0,0,345,343,1,0,0,0,345,346,1,0,0,0,346,25,1,0,0,0,347,
        345,1,0,0,0,348,350,3,104,52,0,349,348,1,0,0,0,350,353,1,0,0,0,351,
        349,1,0,0,0,351,352,1,0,0,0,352,354,1,0,0,0,353,351,1,0,0,0,354,
        356,5,100,0,0,355,357,3,200,100,0,356,355,1,0,0,0,356,357,1,0,0,
        0,357,359,1,0,0,0,358,360,3,34,17,0,359,358,1,0,0,0,359,360,1,0,
        0,0,360,27,1,0,0,0,361,365,5,63,0,0,362,364,3,38,19,0,363,362,1,
        0,0,0,364,367,1,0,0,0,365,363,1,0,0,0,365,366,1,0,0,0,366,29,1,0,
        0,0,367,365,1,0,0,0,368,369,5,28,0,0,369,371,5,100,0,0,370,372,3,
        16,8,0,371,370,1,0,0,0,371,372,1,0,0,0,372,375,1,0,0,0,373,374,5,
        17,0,0,374,376,3,32,16,0,375,373,1,0,0,0,375,376,1,0,0,0,376,377,
        1,0,0,0,377,378,3,36,18,0,378,31,1,0,0,0,379,384,3,76,38,0,380,381,
        5,64,0,0,381,383,3,76,38,0,382,380,1,0,0,0,383,386,1,0,0,0,384,382,
        1,0,0,0,384,385,1,0,0,0,385,33,1,0,0,0,386,384,1,0,0,0,387,391,5,
        59,0,0,388,390,3,38,19,0,389,388,1,0,0,0,390,393,1,0,0,0,391,389,
        1,0,0,0,391,392,1,0,0,0,392,394,1,0,0,0,393,391,1,0,0,0,394,395,
        5,60,0,0,395,35,1,0,0,0,396,400,5,59,0,0,397,399,3,52,26,0,398,397,
        1,0,0,0,399,402,1,0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,401,403,
        1,0,0,0,402,400,1,0,0,0,403,404,5,60,0,0,404,37,1,0,0,0,405,418,
        5,63,0,0,406,408,5,38,0,0,407,406,1,0,0,0,407,408,1,0,0,0,408,409,
        1,0,0,0,409,418,3,132,66,0,410,412,3,8,4,0,411,410,1,0,0,0,412,415,
        1,0,0,0,413,411,1,0,0,0,413,414,1,0,0,0,414,416,1,0,0,0,415,413,
        1,0,0,0,416,418,3,40,20,0,417,405,1,0,0,0,417,407,1,0,0,0,417,413,
        1,0,0,0,418,39,1,0,0,0,419,429,3,42,21,0,420,429,3,44,22,0,421,429,
        3,50,25,0,422,429,3,46,23,0,423,429,3,48,24,0,424,429,3,30,15,0,
        425,429,3,116,58,0,426,429,3,14,7,0,427,429,3,22,11,0,428,419,1,
        0,0,0,428,420,1,0,0,0,428,421,1,0,0,0,428,422,1,0,0,0,428,423,1,
        0,0,0,428,424,1,0,0,0,428,425,1,0,0,0,428,426,1,0,0,0,428,427,1,
        0,0,0,429,41,1,0,0,0,430,433,3,76,38,0,431,433,5,48,0,0,432,430,
        1,0,0,0,432,431,1,0,0,0,433,434,1,0,0,0,434,435,5,100,0,0,435,440,
        3,88,44,0,436,437,5,61,0,0,437,439,5,62,0,0,438,436,1,0,0,0,439,
        442,1,0,0,0,440,438,1,0,0,0,440,441,1,0,0,0,441,445,1,0,0,0,442,
        440,1,0,0,0,443,444,5,45,0,0,444,446,3,86,43,0,445,443,1,0,0,0,445,
        446,1,0,0,0,446,449,1,0,0,0,447,450,3,96,48,0,448,450,5,63,0,0,449,
        447,1,0,0,0,449,448,1,0,0,0,450,43,1,0,0,0,451,452,3,16,8,0,452,
        453,3,42,21,0,453,45,1,0,0,0,454,455,5,100,0,0,455,458,3,88,44,0,
        456,457,5,45,0,0,457,459,3,86,43,0,458,456,1,0,0,0,458,459,1,0,0,
        0,459,460,1,0,0,0,460,461,3,98,49,0,461,47,1,0,0,0,462,463,3,16,
        8,0,463,464,3,46,23,0,464,49,1,0,0,0,465,466,3,76,38,0,466,467,3,
        64,32,0,467,468,5,63,0,0,468,51,1,0,0,0,469,471,3,8,4,0,470,469,
        1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,472,473,1,0,0,0,473,475,
        1,0,0,0,474,472,1,0,0,0,475,478,3,54,27,0,476,478,5,63,0,0,477,472,
        1,0,0,0,477,476,1,0,0,0,478,53,1,0,0,0,479,487,3,56,28,0,480,487,
        3,60,30,0,481,487,3,62,31,0,482,487,3,30,15,0,483,487,3,116,58,0,
        484,487,3,14,7,0,485,487,3,22,11,0,486,479,1,0,0,0,486,480,1,0,0,
        0,486,481,1,0,0,0,486,482,1,0,0,0,486,483,1,0,0,0,486,484,1,0,0,
        0,486,485,1,0,0,0,487,55,1,0,0,0,488,489,3,76,38,0,489,494,3,58,
        29,0,490,491,5,64,0,0,491,493,3,58,29,0,492,490,1,0,0,0,493,496,
        1,0,0,0,494,492,1,0,0,0,494,495,1,0,0,0,495,497,1,0,0,0,496,494,
        1,0,0,0,497,498,5,63,0,0,498,57,1,0,0,0,499,504,5,100,0,0,500,501,
        5,61,0,0,501,503,5,62,0,0,502,500,1,0,0,0,503,506,1,0,0,0,504,502,
        1,0,0,0,504,505,1,0,0,0,505,507,1,0,0,0,506,504,1,0,0,0,507,508,
        5,66,0,0,508,509,3,70,35,0,509,59,1,0,0,0,510,513,3,76,38,0,511,
        513,5,48,0,0,512,510,1,0,0,0,512,511,1,0,0,0,513,514,1,0,0,0,514,
        515,5,100,0,0,515,520,3,88,44,0,516,517,5,61,0,0,517,519,5,62,0,
        0,518,516,1,0,0,0,519,522,1,0,0,0,520,518,1,0,0,0,520,521,1,0,0,
        0,521,525,1,0,0,0,522,520,1,0,0,0,523,524,5,45,0,0,524,526,3,86,
        43,0,525,523,1,0,0,0,525,526,1,0,0,0,526,527,1,0,0,0,527,528,5,63,
        0,0,528,61,1,0,0,0,529,530,3,16,8,0,530,531,3,60,30,0,531,63,1,0,
        0,0,532,537,3,66,33,0,533,534,5,64,0,0,534,536,3,66,33,0,535,533,
        1,0,0,0,536,539,1,0,0,0,537,535,1,0,0,0,537,538,1,0,0,0,538,65,1,
        0,0,0,539,537,1,0,0,0,540,543,3,68,34,0,541,542,5,66,0,0,542,544,
        3,70,35,0,543,541,1,0,0,0,543,544,1,0,0,0,544,67,1,0,0,0,545,550,
        5,100,0,0,546,547,5,61,0,0,547,549,5,62,0,0,548,546,1,0,0,0,549,
        552,1,0,0,0,550,548,1,0,0,0,550,551,1,0,0,0,551,69,1,0,0,0,552,550,
        1,0,0,0,553,556,3,72,36,0,554,556,3,174,87,0,555,553,1,0,0,0,555,
        554,1,0,0,0,556,71,1,0,0,0,557,569,5,59,0,0,558,563,3,70,35,0,559,
        560,5,64,0,0,560,562,3,70,35,0,561,559,1,0,0,0,562,565,1,0,0,0,563,
        561,1,0,0,0,563,564,1,0,0,0,564,567,1,0,0,0,565,563,1,0,0,0,566,
        568,5,64,0,0,567,566,1,0,0,0,567,568,1,0,0,0,568,570,1,0,0,0,569,
        558,1,0,0,0,569,570,1,0,0,0,570,571,1,0,0,0,571,572,5,60,0,0,572,
        73,1,0,0,0,573,574,5,100,0,0,574,75,1,0,0,0,575,580,3,78,39,0,576,
        577,5,61,0,0,577,579,5,62,0,0,578,576,1,0,0,0,579,582,1,0,0,0,580,
        578,1,0,0,0,580,581,1,0,0,0,581,592,1,0,0,0,582,580,1,0,0,0,583,
        588,3,80,40,0,584,585,5,61,0,0,585,587,5,62,0,0,586,584,1,0,0,0,
        587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,592,1,0,0,0,
        590,588,1,0,0,0,591,575,1,0,0,0,591,583,1,0,0,0,592,77,1,0,0,0,593,
        595,5,100,0,0,594,596,3,82,41,0,595,594,1,0,0,0,595,596,1,0,0,0,
        596,604,1,0,0,0,597,598,5,65,0,0,598,600,5,100,0,0,599,601,3,82,
        41,0,600,599,1,0,0,0,600,601,1,0,0,0,601,603,1,0,0,0,602,597,1,0,
        0,0,603,606,1,0,0,0,604,602,1,0,0,0,604,605,1,0,0,0,605,79,1,0,0,
        0,606,604,1,0,0,0,607,608,7,2,0,0,608,81,1,0,0,0,609,610,5,68,0,
        0,610,615,3,84,42,0,611,612,5,64,0,0,612,614,3,84,42,0,613,611,1,
        0,0,0,614,617,1,0,0,0,615,613,1,0,0,0,615,616,1,0,0,0,616,618,1,
        0,0,0,617,615,1,0,0,0,618,619,5,67,0,0,619,83,1,0,0,0,620,627,3,
        76,38,0,621,624,5,71,0,0,622,623,7,3,0,0,623,625,3,76,38,0,624,622,
        1,0,0,0,624,625,1,0,0,0,625,627,1,0,0,0,626,620,1,0,0,0,626,621,
        1,0,0,0,627,85,1,0,0,0,628,633,3,100,50,0,629,630,5,64,0,0,630,632,
        3,100,50,0,631,629,1,0,0,0,632,635,1,0,0,0,633,631,1,0,0,0,633,634,
        1,0,0,0,634,87,1,0,0,0,635,633,1,0,0,0,636,638,5,57,0,0,637,639,
        3,90,45,0,638,637,1,0,0,0,638,639,1,0,0,0,639,640,1,0,0,0,640,641,
        5,58,0,0,641,89,1,0,0,0,642,647,3,92,46,0,643,644,5,64,0,0,644,646,
        3,92,46,0,645,643,1,0,0,0,646,649,1,0,0,0,647,645,1,0,0,0,647,648,
        1,0,0,0,648,652,1,0,0,0,649,647,1,0,0,0,650,651,5,64,0,0,651,653,
        3,94,47,0,652,650,1,0,0,0,652,653,1,0,0,0,653,656,1,0,0,0,654,656,
        3,94,47,0,655,642,1,0,0,0,655,654,1,0,0,0,656,91,1,0,0,0,657,659,
        3,12,6,0,658,657,1,0,0,0,659,662,1,0,0,0,660,658,1,0,0,0,660,661,
        1,0,0,0,661,663,1,0,0,0,662,660,1,0,0,0,663,664,3,76,38,0,664,665,
        3,68,34,0,665,93,1,0,0,0,666,668,3,12,6,0,667,666,1,0,0,0,668,671,
        1,0,0,0,669,667,1,0,0,0,669,670,1,0,0,0,670,672,1,0,0,0,671,669,
        1,0,0,0,672,673,3,76,38,0,673,674,5,102,0,0,674,675,3,68,34,0,675,
        95,1,0,0,0,676,677,3,132,66,0,677,97,1,0,0,0,678,679,3,132,66,0,
        679,99,1,0,0,0,680,685,5,100,0,0,681,682,5,65,0,0,682,684,5,100,
        0,0,683,681,1,0,0,0,684,687,1,0,0,0,685,683,1,0,0,0,685,686,1,0,
        0,0,686,101,1,0,0,0,687,685,1,0,0,0,688,689,7,4,0,0,689,103,1,0,
        0,0,690,691,5,101,0,0,691,698,3,106,53,0,692,695,5,57,0,0,693,696,
        3,108,54,0,694,696,3,112,56,0,695,693,1,0,0,0,695,694,1,0,0,0,695,
        696,1,0,0,0,696,697,1,0,0,0,697,699,5,58,0,0,698,692,1,0,0,0,698,
        699,1,0,0,0,699,105,1,0,0,0,700,701,3,100,50,0,701,107,1,0,0,0,702,
        707,3,110,55,0,703,704,5,64,0,0,704,706,3,110,55,0,705,703,1,0,0,
        0,706,709,1,0,0,0,707,705,1,0,0,0,707,708,1,0,0,0,708,109,1,0,0,
        0,709,707,1,0,0,0,710,711,5,100,0,0,711,712,5,66,0,0,712,713,3,112,
        56,0,713,111,1,0,0,0,714,718,3,174,87,0,715,718,3,104,52,0,716,718,
        3,114,57,0,717,714,1,0,0,0,717,715,1,0,0,0,717,716,1,0,0,0,718,113,
        1,0,0,0,719,728,5,59,0,0,720,725,3,112,56,0,721,722,5,64,0,0,722,
        724,3,112,56,0,723,721,1,0,0,0,724,727,1,0,0,0,725,723,1,0,0,0,725,
        726,1,0,0,0,726,729,1,0,0,0,727,725,1,0,0,0,728,720,1,0,0,0,728,
        729,1,0,0,0,729,731,1,0,0,0,730,732,5,64,0,0,731,730,1,0,0,0,731,
        732,1,0,0,0,732,733,1,0,0,0,733,734,5,60,0,0,734,115,1,0,0,0,735,
        736,5,101,0,0,736,737,5,28,0,0,737,738,5,100,0,0,738,739,3,118,59,
        0,739,117,1,0,0,0,740,744,5,59,0,0,741,743,3,120,60,0,742,741,1,
        0,0,0,743,746,1,0,0,0,744,742,1,0,0,0,744,745,1,0,0,0,745,747,1,
        0,0,0,746,744,1,0,0,0,747,748,5,60,0,0,748,119,1,0,0,0,749,751,3,
        8,4,0,750,749,1,0,0,0,751,754,1,0,0,0,752,750,1,0,0,0,752,753,1,
        0,0,0,753,755,1,0,0,0,754,752,1,0,0,0,755,758,3,122,61,0,756,758,
        5,63,0,0,757,752,1,0,0,0,757,756,1,0,0,0,758,121,1,0,0,0,759,760,
        3,76,38,0,760,761,3,124,62,0,761,762,5,63,0,0,762,780,1,0,0,0,763,
        765,3,14,7,0,764,766,5,63,0,0,765,764,1,0,0,0,765,766,1,0,0,0,766,
        780,1,0,0,0,767,769,3,30,15,0,768,770,5,63,0,0,769,768,1,0,0,0,769,
        770,1,0,0,0,770,780,1,0,0,0,771,773,3,22,11,0,772,774,5,63,0,0,773,
        772,1,0,0,0,773,774,1,0,0,0,774,780,1,0,0,0,775,777,3,116,58,0,776,
        778,5,63,0,0,777,776,1,0,0,0,777,778,1,0,0,0,778,780,1,0,0,0,779,
        759,1,0,0,0,779,763,1,0,0,0,779,767,1,0,0,0,779,771,1,0,0,0,779,
        775,1,0,0,0,780,123,1,0,0,0,781,784,3,126,63,0,782,784,3,128,64,
        0,783,781,1,0,0,0,783,782,1,0,0,0,784,125,1,0,0,0,785,786,5,100,
        0,0,786,787,5,57,0,0,787,789,5,58,0,0,788,790,3,130,65,0,789,788,
        1,0,0,0,789,790,1,0,0,0,790,127,1,0,0,0,791,792,3,64,32,0,792,129,
        1,0,0,0,793,794,5,12,0,0,794,795,3,112,56,0,795,131,1,0,0,0,796,
        800,5,59,0,0,797,799,3,134,67,0,798,797,1,0,0,0,799,802,1,0,0,0,
        800,798,1,0,0,0,800,801,1,0,0,0,801,803,1,0,0,0,802,800,1,0,0,0,
        803,804,5,60,0,0,804,133,1,0,0,0,805,809,3,136,68,0,806,809,3,140,
        70,0,807,809,3,6,3,0,808,805,1,0,0,0,808,806,1,0,0,0,808,807,1,0,
        0,0,809,135,1,0,0,0,810,811,3,138,69,0,811,812,5,63,0,0,812,137,
        1,0,0,0,813,815,3,12,6,0,814,813,1,0,0,0,815,818,1,0,0,0,816,814,
        1,0,0,0,816,817,1,0,0,0,817,819,1,0,0,0,818,816,1,0,0,0,819,820,
        3,76,38,0,820,821,3,64,32,0,821,139,1,0,0,0,822,927,3,132,66,0,823,
        824,5,2,0,0,824,827,3,174,87,0,825,826,5,72,0,0,826,828,3,174,87,
        0,827,825,1,0,0,0,827,828,1,0,0,0,828,829,1,0,0,0,829,830,5,63,0,
        0,830,927,1,0,0,0,831,832,5,22,0,0,832,833,3,166,83,0,833,836,3,
        140,70,0,834,835,5,15,0,0,835,837,3,140,70,0,836,834,1,0,0,0,836,
        837,1,0,0,0,837,927,1,0,0,0,838,839,5,21,0,0,839,840,5,57,0,0,840,
        841,3,158,79,0,841,842,5,58,0,0,842,843,3,140,70,0,843,927,1,0,0,
        0,844,845,5,50,0,0,845,846,3,166,83,0,846,847,3,140,70,0,847,927,
        1,0,0,0,848,849,5,13,0,0,849,850,3,140,70,0,850,851,5,50,0,0,851,
        852,3,166,83,0,852,853,5,63,0,0,853,927,1,0,0,0,854,855,5,47,0,0,
        855,865,3,132,66,0,856,858,3,142,71,0,857,856,1,0,0,0,858,859,1,
        0,0,0,859,857,1,0,0,0,859,860,1,0,0,0,860,862,1,0,0,0,861,863,3,
        146,73,0,862,861,1,0,0,0,862,863,1,0,0,0,863,866,1,0,0,0,864,866,
        3,146,73,0,865,857,1,0,0,0,865,864,1,0,0,0,866,927,1,0,0,0,867,868,
        5,47,0,0,868,869,3,148,74,0,869,873,3,132,66,0,870,872,3,142,71,
        0,871,870,1,0,0,0,872,875,1,0,0,0,873,871,1,0,0,0,873,874,1,0,0,
        0,874,877,1,0,0,0,875,873,1,0,0,0,876,878,3,146,73,0,877,876,1,0,
        0,0,877,878,1,0,0,0,878,927,1,0,0,0,879,880,5,41,0,0,880,881,3,166,
        83,0,881,885,5,59,0,0,882,884,3,154,77,0,883,882,1,0,0,0,884,887,
        1,0,0,0,885,883,1,0,0,0,885,886,1,0,0,0,886,891,1,0,0,0,887,885,
        1,0,0,0,888,890,3,156,78,0,889,888,1,0,0,0,890,893,1,0,0,0,891,889,
        1,0,0,0,891,892,1,0,0,0,892,894,1,0,0,0,893,891,1,0,0,0,894,895,
        5,60,0,0,895,927,1,0,0,0,896,897,5,42,0,0,897,898,3,166,83,0,898,
        899,3,132,66,0,899,927,1,0,0,0,900,902,5,36,0,0,901,903,3,174,87,
        0,902,901,1,0,0,0,902,903,1,0,0,0,903,904,1,0,0,0,904,927,5,63,0,
        0,905,906,5,44,0,0,906,907,3,174,87,0,907,908,5,63,0,0,908,927,1,
        0,0,0,909,911,5,4,0,0,910,912,5,100,0,0,911,910,1,0,0,0,911,912,
        1,0,0,0,912,913,1,0,0,0,913,927,5,63,0,0,914,916,5,11,0,0,915,917,
        5,100,0,0,916,915,1,0,0,0,916,917,1,0,0,0,917,918,1,0,0,0,918,927,
        5,63,0,0,919,927,5,63,0,0,920,921,3,170,85,0,921,922,5,63,0,0,922,
        927,1,0,0,0,923,924,5,100,0,0,924,925,5,72,0,0,925,927,3,140,70,
        0,926,822,1,0,0,0,926,823,1,0,0,0,926,831,1,0,0,0,926,838,1,0,0,
        0,926,844,1,0,0,0,926,848,1,0,0,0,926,854,1,0,0,0,926,867,1,0,0,
        0,926,879,1,0,0,0,926,896,1,0,0,0,926,900,1,0,0,0,926,905,1,0,0,
        0,926,909,1,0,0,0,926,914,1,0,0,0,926,919,1,0,0,0,926,920,1,0,0,
        0,926,923,1,0,0,0,927,141,1,0,0,0,928,929,5,7,0,0,929,933,5,57,0,
        0,930,932,3,12,6,0,931,930,1,0,0,0,932,935,1,0,0,0,933,931,1,0,0,
        0,933,934,1,0,0,0,934,936,1,0,0,0,935,933,1,0,0,0,936,937,3,144,
        72,0,937,938,5,100,0,0,938,939,5,58,0,0,939,940,3,132,66,0,940,143,
        1,0,0,0,941,946,3,100,50,0,942,943,5,86,0,0,943,945,3,100,50,0,944,
        942,1,0,0,0,945,948,1,0,0,0,946,944,1,0,0,0,946,947,1,0,0,0,947,
        145,1,0,0,0,948,946,1,0,0,0,949,950,5,19,0,0,950,951,3,132,66,0,
        951,147,1,0,0,0,952,953,5,57,0,0,953,955,3,150,75,0,954,956,5,63,
        0,0,955,954,1,0,0,0,955,956,1,0,0,0,956,957,1,0,0,0,957,958,5,58,
        0,0,958,149,1,0,0,0,959,964,3,152,76,0,960,961,5,63,0,0,961,963,
        3,152,76,0,962,960,1,0,0,0,963,966,1,0,0,0,964,962,1,0,0,0,964,965,
        1,0,0,0,965,151,1,0,0,0,966,964,1,0,0,0,967,969,3,12,6,0,968,967,
        1,0,0,0,969,972,1,0,0,0,970,968,1,0,0,0,970,971,1,0,0,0,971,973,
        1,0,0,0,972,970,1,0,0,0,973,974,3,78,39,0,974,975,3,68,34,0,975,
        976,5,66,0,0,976,977,3,174,87,0,977,153,1,0,0,0,978,980,3,156,78,
        0,979,978,1,0,0,0,980,981,1,0,0,0,981,979,1,0,0,0,981,982,1,0,0,
        0,982,984,1,0,0,0,983,985,3,134,67,0,984,983,1,0,0,0,985,986,1,0,
        0,0,986,984,1,0,0,0,986,987,1,0,0,0,987,155,1,0,0,0,988,989,5,6,
        0,0,989,990,3,172,86,0,990,991,5,72,0,0,991,999,1,0,0,0,992,993,
        5,6,0,0,993,994,3,74,37,0,994,995,5,72,0,0,995,999,1,0,0,0,996,997,
        5,12,0,0,997,999,5,72,0,0,998,988,1,0,0,0,998,992,1,0,0,0,998,996,
        1,0,0,0,999,157,1,0,0,0,1000,1013,3,162,81,0,1001,1003,3,160,80,
        0,1002,1001,1,0,0,0,1002,1003,1,0,0,0,1003,1004,1,0,0,0,1004,1006,
        5,63,0,0,1005,1007,3,174,87,0,1006,1005,1,0,0,0,1006,1007,1,0,0,
        0,1007,1008,1,0,0,0,1008,1010,5,63,0,0,1009,1011,3,164,82,0,1010,
        1009,1,0,0,0,1010,1011,1,0,0,0,1011,1013,1,0,0,0,1012,1000,1,0,0,
        0,1012,1002,1,0,0,0,1013,159,1,0,0,0,1014,1017,3,138,69,0,1015,1017,
        3,168,84,0,1016,1014,1,0,0,0,1016,1015,1,0,0,0,1017,161,1,0,0,0,
        1018,1020,3,12,6,0,1019,1018,1,0,0,0,1020,1023,1,0,0,0,1021,1019,
        1,0,0,0,1021,1022,1,0,0,0,1022,1024,1,0,0,0,1023,1021,1,0,0,0,1024,
        1025,3,76,38,0,1025,1026,3,68,34,0,1026,1027,5,72,0,0,1027,1028,
        3,174,87,0,1028,163,1,0,0,0,1029,1030,3,168,84,0,1030,165,1,0,0,
        0,1031,1032,5,57,0,0,1032,1033,3,174,87,0,1033,1034,5,58,0,0,1034,
        167,1,0,0,0,1035,1040,3,174,87,0,1036,1037,5,64,0,0,1037,1039,3,
        174,87,0,1038,1036,1,0,0,0,1039,1042,1,0,0,0,1040,1038,1,0,0,0,1040,
        1041,1,0,0,0,1041,169,1,0,0,0,1042,1040,1,0,0,0,1043,1044,3,174,
        87,0,1044,171,1,0,0,0,1045,1046,3,174,87,0,1046,173,1,0,0,0,1047,
        1048,6,87,-1,0,1048,1061,3,176,88,0,1049,1050,5,31,0,0,1050,1061,
        3,178,89,0,1051,1052,5,57,0,0,1052,1053,3,76,38,0,1053,1054,5,58,
        0,0,1054,1055,3,174,87,17,1055,1061,1,0,0,0,1056,1057,7,5,0,0,1057,
        1061,3,174,87,15,1058,1059,7,6,0,0,1059,1061,3,174,87,14,1060,1047,
        1,0,0,0,1060,1049,1,0,0,0,1060,1051,1,0,0,0,1060,1056,1,0,0,0,1060,
        1058,1,0,0,0,1061,1147,1,0,0,0,1062,1063,10,13,0,0,1063,1064,7,7,
        0,0,1064,1146,3,174,87,14,1065,1066,10,12,0,0,1066,1067,7,8,0,0,
        1067,1146,3,174,87,13,1068,1076,10,11,0,0,1069,1070,5,68,0,0,1070,
        1077,5,68,0,0,1071,1072,5,67,0,0,1072,1073,5,67,0,0,1073,1077,5,
        67,0,0,1074,1075,5,67,0,0,1075,1077,5,67,0,0,1076,1069,1,0,0,0,1076,
        1071,1,0,0,0,1076,1074,1,0,0,0,1077,1078,1,0,0,0,1078,1146,3,174,
        87,12,1079,1080,10,10,0,0,1080,1081,7,9,0,0,1081,1146,3,174,87,11,
        1082,1083,10,8,0,0,1083,1084,7,10,0,0,1084,1146,3,174,87,9,1085,
        1086,10,7,0,0,1086,1087,5,85,0,0,1087,1146,3,174,87,8,1088,1089,
        10,6,0,0,1089,1090,5,87,0,0,1090,1146,3,174,87,7,1091,1092,10,5,
        0,0,1092,1093,5,86,0,0,1093,1146,3,174,87,6,1094,1095,10,4,0,0,1095,
        1096,5,77,0,0,1096,1146,3,174,87,5,1097,1098,10,3,0,0,1098,1099,
        5,78,0,0,1099,1146,3,174,87,4,1100,1101,10,2,0,0,1101,1102,5,71,
        0,0,1102,1103,3,174,87,0,1103,1104,5,72,0,0,1104,1105,3,174,87,3,
        1105,1146,1,0,0,0,1106,1107,10,1,0,0,1107,1108,7,11,0,0,1108,1146,
        3,174,87,1,1109,1110,10,25,0,0,1110,1111,5,65,0,0,1111,1146,5,100,
        0,0,1112,1113,10,24,0,0,1113,1114,5,65,0,0,1114,1146,5,43,0,0,1115,
        1116,10,23,0,0,1116,1117,5,65,0,0,1117,1119,5,31,0,0,1118,1120,3,
        190,95,0,1119,1118,1,0,0,0,1119,1120,1,0,0,0,1120,1121,1,0,0,0,1121,
        1146,3,182,91,0,1122,1123,10,22,0,0,1123,1124,5,65,0,0,1124,1125,
        5,40,0,0,1125,1146,3,196,98,0,1126,1127,10,21,0,0,1127,1128,5,65,
        0,0,1128,1146,3,188,94,0,1129,1130,10,20,0,0,1130,1131,5,61,0,0,
        1131,1132,3,174,87,0,1132,1133,5,62,0,0,1133,1146,1,0,0,0,1134,1135,
        10,19,0,0,1135,1137,5,57,0,0,1136,1138,3,168,84,0,1137,1136,1,0,
        0,0,1137,1138,1,0,0,0,1138,1139,1,0,0,0,1139,1146,5,58,0,0,1140,
        1141,10,16,0,0,1141,1146,7,12,0,0,1142,1143,10,9,0,0,1143,1144,5,
        26,0,0,1144,1146,3,76,38,0,1145,1062,1,0,0,0,1145,1065,1,0,0,0,1145,
        1068,1,0,0,0,1145,1079,1,0,0,0,1145,1082,1,0,0,0,1145,1085,1,0,0,
        0,1145,1088,1,0,0,0,1145,1091,1,0,0,0,1145,1094,1,0,0,0,1145,1097,
        1,0,0,0,1145,1100,1,0,0,0,1145,1106,1,0,0,0,1145,1109,1,0,0,0,1145,
        1112,1,0,0,0,1145,1115,1,0,0,0,1145,1122,1,0,0,0,1145,1126,1,0,0,
        0,1145,1129,1,0,0,0,1145,1134,1,0,0,0,1145,1140,1,0,0,0,1145,1142,
        1,0,0,0,1146,1149,1,0,0,0,1147,1145,1,0,0,0,1147,1148,1,0,0,0,1148,
        175,1,0,0,0,1149,1147,1,0,0,0,1150,1151,5,57,0,0,1151,1152,3,174,
        87,0,1152,1153,5,58,0,0,1153,1172,1,0,0,0,1154,1172,5,43,0,0,1155,
        1172,5,40,0,0,1156,1172,3,102,51,0,1157,1172,5,100,0,0,1158,1159,
        3,76,38,0,1159,1160,5,65,0,0,1160,1161,5,9,0,0,1161,1172,1,0,0,0,
        1162,1163,5,48,0,0,1163,1164,5,65,0,0,1164,1172,5,9,0,0,1165,1169,
        3,190,95,0,1166,1170,3,198,99,0,1167,1168,5,43,0,0,1168,1170,3,200,
        100,0,1169,1166,1,0,0,0,1169,1167,1,0,0,0,1170,1172,1,0,0,0,1171,
        1150,1,0,0,0,1171,1154,1,0,0,0,1171,1155,1,0,0,0,1171,1156,1,0,0,
        0,1171,1157,1,0,0,0,1171,1158,1,0,0,0,1171,1162,1,0,0,0,1171,1165,
        1,0,0,0,1172,177,1,0,0,0,1173,1174,3,190,95,0,1174,1175,3,180,90,
        0,1175,1176,3,186,93,0,1176,1183,1,0,0,0,1177,1180,3,180,90,0,1178,
        1181,3,184,92,0,1179,1181,3,186,93,0,1180,1178,1,0,0,0,1180,1179,
        1,0,0,0,1181,1183,1,0,0,0,1182,1173,1,0,0,0,1182,1177,1,0,0,0,1183,
        179,1,0,0,0,1184,1186,5,100,0,0,1185,1187,3,192,96,0,1186,1185,1,
        0,0,0,1186,1187,1,0,0,0,1187,1195,1,0,0,0,1188,1189,5,65,0,0,1189,
        1191,5,100,0,0,1190,1192,3,192,96,0,1191,1190,1,0,0,0,1191,1192,
        1,0,0,0,1192,1194,1,0,0,0,1193,1188,1,0,0,0,1194,1197,1,0,0,0,1195,
        1193,1,0,0,0,1195,1196,1,0,0,0,1196,1200,1,0,0,0,1197,1195,1,0,0,
        0,1198,1200,3,80,40,0,1199,1184,1,0,0,0,1199,1198,1,0,0,0,1200,181,
        1,0,0,0,1201,1203,5,100,0,0,1202,1204,3,194,97,0,1203,1202,1,0,0,
        0,1203,1204,1,0,0,0,1204,1205,1,0,0,0,1205,1206,3,186,93,0,1206,
        183,1,0,0,0,1207,1235,5,61,0,0,1208,1213,5,62,0,0,1209,1210,5,61,
        0,0,1210,1212,5,62,0,0,1211,1209,1,0,0,0,1212,1215,1,0,0,0,1213,
        1211,1,0,0,0,1213,1214,1,0,0,0,1214,1216,1,0,0,0,1215,1213,1,0,0,
        0,1216,1236,3,72,36,0,1217,1218,3,174,87,0,1218,1225,5,62,0,0,1219,
        1220,5,61,0,0,1220,1221,3,174,87,0,1221,1222,5,62,0,0,1222,1224,
        1,0,0,0,1223,1219,1,0,0,0,1224,1227,1,0,0,0,1225,1223,1,0,0,0,1225,
        1226,1,0,0,0,1226,1232,1,0,0,0,1227,1225,1,0,0,0,1228,1229,5,61,
        0,0,1229,1231,5,62,0,0,1230,1228,1,0,0,0,1231,1234,1,0,0,0,1232,
        1230,1,0,0,0,1232,1233,1,0,0,0,1233,1236,1,0,0,0,1234,1232,1,0,0,
        0,1235,1208,1,0,0,0,1235,1217,1,0,0,0,1236,185,1,0,0,0,1237,1239,
        3,200,100,0,1238,1240,3,34,17,0,1239,1238,1,0,0,0,1239,1240,1,0,
        0,0,1240,187,1,0,0,0,1241,1242,3,190,95,0,1242,1243,3,198,99,0,1243,
        189,1,0,0,0,1244,1245,5,68,0,0,1245,1246,3,32,16,0,1246,1247,5,67,
        0,0,1247,191,1,0,0,0,1248,1249,5,68,0,0,1249,1252,5,67,0,0,1250,
        1252,3,82,41,0,1251,1248,1,0,0,0,1251,1250,1,0,0,0,1252,193,1,0,
        0,0,1253,1254,5,68,0,0,1254,1257,5,67,0,0,1255,1257,3,190,95,0,1256,
        1253,1,0,0,0,1256,1255,1,0,0,0,1257,195,1,0,0,0,1258,1265,3,200,
        100,0,1259,1260,5,65,0,0,1260,1262,5,100,0,0,1261,1263,3,200,100,
        0,1262,1261,1,0,0,0,1262,1263,1,0,0,0,1263,1265,1,0,0,0,1264,1258,
        1,0,0,0,1264,1259,1,0,0,0,1265,197,1,0,0,0,1266,1267,5,40,0,0,1267,
        1271,3,196,98,0,1268,1269,5,100,0,0,1269,1271,3,200,100,0,1270,1266,
        1,0,0,0,1270,1268,1,0,0,0,1271,199,1,0,0,0,1272,1274,5,57,0,0,1273,
        1275,3,168,84,0,1274,1273,1,0,0,0,1274,1275,1,0,0,0,1275,1276,1,
        0,0,0,1276,1277,5,58,0,0,1277,201,1,0,0,0,149,203,208,214,222,231,
        236,243,250,257,264,269,273,277,281,286,290,294,304,312,319,326,
        330,333,336,345,351,356,359,365,371,375,384,391,400,407,413,417,
        428,432,440,445,449,458,472,477,486,494,504,512,520,525,537,543,
        550,555,563,567,569,580,588,591,595,600,604,615,624,626,633,638,
        647,652,655,660,669,685,695,698,707,717,725,728,731,744,752,757,
        765,769,773,777,779,783,789,800,808,816,827,836,859,862,865,873,
        877,885,891,902,911,916,926,933,946,955,964,970,981,986,998,1002,
        1006,1010,1012,1016,1021,1040,1060,1076,1119,1137,1145,1147,1169,
        1171,1180,1182,1186,1191,1195,1199,1203,1213,1225,1232,1235,1239,
        1251,1256,1262,1264,1270,1274
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!JavaParser.__ATN) {
            JavaParser.__ATN = new antlr.ATNDeserializer().deserialize(JavaParser._serializedATN);
        }

        return JavaParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(JavaParser.literalNames, JavaParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return JavaParser.vocabulary;
    }

    private static readonly decisionsToDFA = JavaParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class CompilationUnitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(JavaParser.EOF, 0)!;
    }
    public packageDeclaration(): PackageDeclarationContext | null {
        return this.getRuleContext(0, PackageDeclarationContext);
    }
    public importDeclaration(): ImportDeclarationContext[];
    public importDeclaration(i: number): ImportDeclarationContext | null;
    public importDeclaration(i?: number): ImportDeclarationContext[] | ImportDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ImportDeclarationContext);
        }

        return this.getRuleContext(i, ImportDeclarationContext);
    }
    public typeDeclaration(): TypeDeclarationContext[];
    public typeDeclaration(i: number): TypeDeclarationContext | null;
    public typeDeclaration(i?: number): TypeDeclarationContext[] | TypeDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeDeclarationContext);
        }

        return this.getRuleContext(i, TypeDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_compilationUnit;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterCompilationUnit) {
             listener.enterCompilationUnit(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitCompilationUnit) {
             listener.exitCompilationUnit(this);
        }
    }
}


export class PackageDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public PACKAGE(): antlr.TerminalNode {
        return this.getToken(JavaParser.PACKAGE, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_packageDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterPackageDeclaration) {
             listener.enterPackageDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitPackageDeclaration) {
             listener.exitPackageDeclaration(this);
        }
    }
}


export class ImportDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IMPORT(): antlr.TerminalNode {
        return this.getToken(JavaParser.IMPORT, 0)!;
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MUL, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_importDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterImportDeclaration) {
             listener.enterImportDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitImportDeclaration) {
             listener.exitImportDeclaration(this);
        }
    }
}


export class TypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public classOrInterfaceModifier(): ClassOrInterfaceModifierContext[];
    public classOrInterfaceModifier(i: number): ClassOrInterfaceModifierContext | null;
    public classOrInterfaceModifier(i?: number): ClassOrInterfaceModifierContext[] | ClassOrInterfaceModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassOrInterfaceModifierContext);
        }

        return this.getRuleContext(i, ClassOrInterfaceModifierContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeDeclaration) {
             listener.enterTypeDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeDeclaration) {
             listener.exitTypeDeclaration(this);
        }
    }
}


export class ModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classOrInterfaceModifier(): ClassOrInterfaceModifierContext | null {
        return this.getRuleContext(0, ClassOrInterfaceModifierContext);
    }
    public NATIVE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NATIVE, 0);
    }
    public SYNCHRONIZED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SYNCHRONIZED, 0);
    }
    public TRANSIENT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TRANSIENT, 0);
    }
    public VOLATILE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VOLATILE, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_modifier;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterModifier) {
             listener.enterModifier(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitModifier) {
             listener.exitModifier(this);
        }
    }
}


export class ClassOrInterfaceModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotation(): AnnotationContext | null {
        return this.getRuleContext(0, AnnotationContext);
    }
    public PUBLIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PUBLIC, 0);
    }
    public PROTECTED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PROTECTED, 0);
    }
    public PRIVATE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.PRIVATE, 0);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public ABSTRACT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ABSTRACT, 0);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FINAL, 0);
    }
    public STRICTFP(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STRICTFP, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classOrInterfaceModifier;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterClassOrInterfaceModifier) {
             listener.enterClassOrInterfaceModifier(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitClassOrInterfaceModifier) {
             listener.exitClassOrInterfaceModifier(this);
        }
    }
}


export class VariableModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FINAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FINAL, 0);
    }
    public annotation(): AnnotationContext | null {
        return this.getRuleContext(0, AnnotationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableModifier;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterVariableModifier) {
             listener.enterVariableModifier(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitVariableModifier) {
             listener.exitVariableModifier(this);
        }
    }
}


export class ClassDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CLASS(): antlr.TerminalNode {
        return this.getToken(JavaParser.CLASS, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public classBody(): ClassBodyContext {
        return this.getRuleContext(0, ClassBodyContext)!;
    }
    public typeParameters(): TypeParametersContext | null {
        return this.getRuleContext(0, TypeParametersContext);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public typeSpec(): TypeSpecContext | null {
        return this.getRuleContext(0, TypeSpecContext);
    }
    public IMPLEMENTS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IMPLEMENTS, 0);
    }
    public typeList(): TypeListContext | null {
        return this.getRuleContext(0, TypeListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterClassDeclaration) {
             listener.enterClassDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitClassDeclaration) {
             listener.exitClassDeclaration(this);
        }
    }
}


export class TypeParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(JavaParser.LT, 0)!;
    }
    public typeParameter(): TypeParameterContext[];
    public typeParameter(i: number): TypeParameterContext | null;
    public typeParameter(i?: number): TypeParameterContext[] | TypeParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }

        return this.getRuleContext(i, TypeParameterContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(JavaParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeParameters;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeParameters) {
             listener.enterTypeParameters(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeParameters) {
             listener.exitTypeParameters(this);
        }
    }
}


export class TypeParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public typeBound(): TypeBoundContext | null {
        return this.getRuleContext(0, TypeBoundContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeParameter;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeParameter) {
             listener.enterTypeParameter(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeParameter) {
             listener.exitTypeParameter(this);
        }
    }
}


export class TypeBoundContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext[];
    public typeSpec(i: number): TypeSpecContext | null;
    public typeSpec(i?: number): TypeSpecContext[] | TypeSpecContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeSpecContext);
        }

        return this.getRuleContext(i, TypeSpecContext);
    }
    public BITAND(): antlr.TerminalNode[];
    public BITAND(i: number): antlr.TerminalNode | null;
    public BITAND(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.BITAND);
    	} else {
    		return this.getToken(JavaParser.BITAND, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeBound;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeBound) {
             listener.enterTypeBound(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeBound) {
             listener.exitTypeBound(this);
        }
    }
}


export class EnumDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ENUM(): antlr.TerminalNode {
        return this.getToken(JavaParser.ENUM, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public IMPLEMENTS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IMPLEMENTS, 0);
    }
    public typeList(): TypeListContext | null {
        return this.getRuleContext(0, TypeListContext);
    }
    public enumConstants(): EnumConstantsContext | null {
        return this.getRuleContext(0, EnumConstantsContext);
    }
    public COMMA(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COMMA, 0);
    }
    public enumBodyDeclarations(): EnumBodyDeclarationsContext | null {
        return this.getRuleContext(0, EnumBodyDeclarationsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterEnumDeclaration) {
             listener.enterEnumDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitEnumDeclaration) {
             listener.exitEnumDeclaration(this);
        }
    }
}


export class EnumConstantsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enumConstant(): EnumConstantContext[];
    public enumConstant(i: number): EnumConstantContext | null;
    public enumConstant(i?: number): EnumConstantContext[] | EnumConstantContext | null {
        if (i === undefined) {
            return this.getRuleContexts(EnumConstantContext);
        }

        return this.getRuleContext(i, EnumConstantContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumConstants;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterEnumConstants) {
             listener.enterEnumConstants(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitEnumConstants) {
             listener.exitEnumConstants(this);
        }
    }
}


export class EnumConstantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public annotation(): AnnotationContext[];
    public annotation(i: number): AnnotationContext | null;
    public annotation(i?: number): AnnotationContext[] | AnnotationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }

        return this.getRuleContext(i, AnnotationContext);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public classBody(): ClassBodyContext | null {
        return this.getRuleContext(0, ClassBodyContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumConstant;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterEnumConstant) {
             listener.enterEnumConstant(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitEnumConstant) {
             listener.exitEnumConstant(this);
        }
    }
}


export class EnumBodyDeclarationsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public classBodyDeclaration(): ClassBodyDeclarationContext[];
    public classBodyDeclaration(i: number): ClassBodyDeclarationContext | null;
    public classBodyDeclaration(i?: number): ClassBodyDeclarationContext[] | ClassBodyDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }

        return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumBodyDeclarations;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterEnumBodyDeclarations) {
             listener.enterEnumBodyDeclarations(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitEnumBodyDeclarations) {
             listener.exitEnumBodyDeclarations(this);
        }
    }
}


export class InterfaceDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTERFACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.INTERFACE, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public interfaceBody(): InterfaceBodyContext {
        return this.getRuleContext(0, InterfaceBodyContext)!;
    }
    public typeParameters(): TypeParametersContext | null {
        return this.getRuleContext(0, TypeParametersContext);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public typeList(): TypeListContext | null {
        return this.getRuleContext(0, TypeListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterInterfaceDeclaration) {
             listener.enterInterfaceDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitInterfaceDeclaration) {
             listener.exitInterfaceDeclaration(this);
        }
    }
}


export class TypeListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext[];
    public typeSpec(i: number): TypeSpecContext | null;
    public typeSpec(i?: number): TypeSpecContext[] | TypeSpecContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeSpecContext);
        }

        return this.getRuleContext(i, TypeSpecContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeList;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeList) {
             listener.enterTypeList(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeList) {
             listener.exitTypeList(this);
        }
    }
}


export class ClassBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public classBodyDeclaration(): ClassBodyDeclarationContext[];
    public classBodyDeclaration(i: number): ClassBodyDeclarationContext | null;
    public classBodyDeclaration(i?: number): ClassBodyDeclarationContext[] | ClassBodyDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ClassBodyDeclarationContext);
        }

        return this.getRuleContext(i, ClassBodyDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classBody;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterClassBody) {
             listener.enterClassBody(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitClassBody) {
             listener.exitClassBody(this);
        }
    }
}


export class InterfaceBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public interfaceBodyDeclaration(): InterfaceBodyDeclarationContext[];
    public interfaceBodyDeclaration(i: number): InterfaceBodyDeclarationContext | null;
    public interfaceBodyDeclaration(i?: number): InterfaceBodyDeclarationContext[] | InterfaceBodyDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(InterfaceBodyDeclarationContext);
        }

        return this.getRuleContext(i, InterfaceBodyDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceBody;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterInterfaceBody) {
             listener.enterInterfaceBody(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitInterfaceBody) {
             listener.exitInterfaceBody(this);
        }
    }
}


export class ClassBodyDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public STATIC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.STATIC, 0);
    }
    public memberDeclaration(): MemberDeclarationContext | null {
        return this.getRuleContext(0, MemberDeclarationContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classBodyDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterClassBodyDeclaration) {
             listener.enterClassBodyDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitClassBodyDeclaration) {
             listener.exitClassBodyDeclaration(this);
        }
    }
}


export class MemberDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public methodDeclaration(): MethodDeclarationContext | null {
        return this.getRuleContext(0, MethodDeclarationContext);
    }
    public genericMethodDeclaration(): GenericMethodDeclarationContext | null {
        return this.getRuleContext(0, GenericMethodDeclarationContext);
    }
    public fieldDeclaration(): FieldDeclarationContext | null {
        return this.getRuleContext(0, FieldDeclarationContext);
    }
    public constructorDeclaration(): ConstructorDeclarationContext | null {
        return this.getRuleContext(0, ConstructorDeclarationContext);
    }
    public genericConstructorDeclaration(): GenericConstructorDeclarationContext | null {
        return this.getRuleContext(0, GenericConstructorDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_memberDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterMemberDeclaration) {
             listener.enterMemberDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitMemberDeclaration) {
             listener.exitMemberDeclaration(this);
        }
    }
}


export class MethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public formalParameters(): FormalParametersContext {
        return this.getRuleContext(0, FormalParametersContext)!;
    }
    public typeSpec(): TypeSpecContext | null {
        return this.getRuleContext(0, TypeSpecContext);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VOID, 0);
    }
    public methodBody(): MethodBodyContext | null {
        return this.getRuleContext(0, MethodBodyContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public THROWS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROWS, 0);
    }
    public qualifiedNameList(): QualifiedNameListContext | null {
        return this.getRuleContext(0, QualifiedNameListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_methodDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterMethodDeclaration) {
             listener.enterMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitMethodDeclaration) {
             listener.exitMethodDeclaration(this);
        }
    }
}


export class GenericMethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParameters(): TypeParametersContext {
        return this.getRuleContext(0, TypeParametersContext)!;
    }
    public methodDeclaration(): MethodDeclarationContext {
        return this.getRuleContext(0, MethodDeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_genericMethodDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterGenericMethodDeclaration) {
             listener.enterGenericMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitGenericMethodDeclaration) {
             listener.exitGenericMethodDeclaration(this);
        }
    }
}


export class ConstructorDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public formalParameters(): FormalParametersContext {
        return this.getRuleContext(0, FormalParametersContext)!;
    }
    public constructorBody(): ConstructorBodyContext {
        return this.getRuleContext(0, ConstructorBodyContext)!;
    }
    public THROWS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROWS, 0);
    }
    public qualifiedNameList(): QualifiedNameListContext | null {
        return this.getRuleContext(0, QualifiedNameListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constructorDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterConstructorDeclaration) {
             listener.enterConstructorDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitConstructorDeclaration) {
             listener.exitConstructorDeclaration(this);
        }
    }
}


export class GenericConstructorDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParameters(): TypeParametersContext {
        return this.getRuleContext(0, TypeParametersContext)!;
    }
    public constructorDeclaration(): ConstructorDeclarationContext {
        return this.getRuleContext(0, ConstructorDeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_genericConstructorDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterGenericConstructorDeclaration) {
             listener.enterGenericConstructorDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitGenericConstructorDeclaration) {
             listener.exitGenericConstructorDeclaration(this);
        }
    }
}


export class FieldDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext {
        return this.getRuleContext(0, TypeSpecContext)!;
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        return this.getRuleContext(0, VariableDeclaratorsContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_fieldDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterFieldDeclaration) {
             listener.enterFieldDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitFieldDeclaration) {
             listener.exitFieldDeclaration(this);
        }
    }
}


export class InterfaceBodyDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public interfaceMemberDeclaration(): InterfaceMemberDeclarationContext | null {
        return this.getRuleContext(0, InterfaceMemberDeclarationContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceBodyDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterInterfaceBodyDeclaration) {
             listener.enterInterfaceBodyDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitInterfaceBodyDeclaration) {
             listener.exitInterfaceBodyDeclaration(this);
        }
    }
}


export class InterfaceMemberDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public constDeclaration(): ConstDeclarationContext | null {
        return this.getRuleContext(0, ConstDeclarationContext);
    }
    public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext | null {
        return this.getRuleContext(0, InterfaceMethodDeclarationContext);
    }
    public genericInterfaceMethodDeclaration(): GenericInterfaceMethodDeclarationContext | null {
        return this.getRuleContext(0, GenericInterfaceMethodDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceMemberDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterInterfaceMemberDeclaration) {
             listener.enterInterfaceMemberDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitInterfaceMemberDeclaration) {
             listener.exitInterfaceMemberDeclaration(this);
        }
    }
}


export class ConstDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext {
        return this.getRuleContext(0, TypeSpecContext)!;
    }
    public constantDeclarator(): ConstantDeclaratorContext[];
    public constantDeclarator(i: number): ConstantDeclaratorContext | null;
    public constantDeclarator(i?: number): ConstantDeclaratorContext[] | ConstantDeclaratorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ConstantDeclaratorContext);
        }

        return this.getRuleContext(i, ConstantDeclaratorContext);
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterConstDeclaration) {
             listener.enterConstDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitConstDeclaration) {
             listener.exitConstDeclaration(this);
        }
    }
}


export class ConstantDeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(JavaParser.ASSIGN, 0)!;
    }
    public variableInitializer(): VariableInitializerContext {
        return this.getRuleContext(0, VariableInitializerContext)!;
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constantDeclarator;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterConstantDeclarator) {
             listener.enterConstantDeclarator(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitConstantDeclarator) {
             listener.exitConstantDeclarator(this);
        }
    }
}


export class InterfaceMethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public formalParameters(): FormalParametersContext {
        return this.getRuleContext(0, FormalParametersContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public typeSpec(): TypeSpecContext | null {
        return this.getRuleContext(0, TypeSpecContext);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VOID, 0);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public THROWS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROWS, 0);
    }
    public qualifiedNameList(): QualifiedNameListContext | null {
        return this.getRuleContext(0, QualifiedNameListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_interfaceMethodDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterInterfaceMethodDeclaration) {
             listener.enterInterfaceMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitInterfaceMethodDeclaration) {
             listener.exitInterfaceMethodDeclaration(this);
        }
    }
}


export class GenericInterfaceMethodDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeParameters(): TypeParametersContext {
        return this.getRuleContext(0, TypeParametersContext)!;
    }
    public interfaceMethodDeclaration(): InterfaceMethodDeclarationContext {
        return this.getRuleContext(0, InterfaceMethodDeclarationContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_genericInterfaceMethodDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterGenericInterfaceMethodDeclaration) {
             listener.enterGenericInterfaceMethodDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitGenericInterfaceMethodDeclaration) {
             listener.exitGenericInterfaceMethodDeclaration(this);
        }
    }
}


export class VariableDeclaratorsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclarator(): VariableDeclaratorContext[];
    public variableDeclarator(i: number): VariableDeclaratorContext | null;
    public variableDeclarator(i?: number): VariableDeclaratorContext[] | VariableDeclaratorContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclaratorContext);
        }

        return this.getRuleContext(i, VariableDeclaratorContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableDeclarators;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterVariableDeclarators) {
             listener.enterVariableDeclarators(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitVariableDeclarators) {
             listener.exitVariableDeclarators(this);
        }
    }
}


export class VariableDeclaratorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ASSIGN, 0);
    }
    public variableInitializer(): VariableInitializerContext | null {
        return this.getRuleContext(0, VariableInitializerContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableDeclarator;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterVariableDeclarator) {
             listener.enterVariableDeclarator(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitVariableDeclarator) {
             listener.exitVariableDeclarator(this);
        }
    }
}


export class VariableDeclaratorIdContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableDeclaratorId;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterVariableDeclaratorId) {
             listener.enterVariableDeclaratorId(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitVariableDeclaratorId) {
             listener.exitVariableDeclaratorId(this);
        }
    }
}


export class VariableInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arrayInitializer(): ArrayInitializerContext | null {
        return this.getRuleContext(0, ArrayInitializerContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_variableInitializer;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterVariableInitializer) {
             listener.enterVariableInitializer(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitVariableInitializer) {
             listener.exitVariableInitializer(this);
        }
    }
}


export class ArrayInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public variableInitializer(): VariableInitializerContext[];
    public variableInitializer(i: number): VariableInitializerContext | null;
    public variableInitializer(i?: number): VariableInitializerContext[] | VariableInitializerContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableInitializerContext);
        }

        return this.getRuleContext(i, VariableInitializerContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_arrayInitializer;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterArrayInitializer) {
             listener.enterArrayInitializer(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitArrayInitializer) {
             listener.exitArrayInitializer(this);
        }
    }
}


export class EnumConstantNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enumConstantName;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterEnumConstantName) {
             listener.enterEnumConstantName(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitEnumConstantName) {
             listener.exitEnumConstantName(this);
        }
    }
}


export class TypeSpecContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classOrInterfaceType(): ClassOrInterfaceTypeContext | null {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public primitiveType(): PrimitiveTypeContext | null {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeSpec;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeSpec) {
             listener.enterTypeSpec(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeSpec) {
             listener.exitTypeSpec(this);
        }
    }
}


export class ClassOrInterfaceTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode[];
    public Identifier(i: number): antlr.TerminalNode | null;
    public Identifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.Identifier);
    	} else {
    		return this.getToken(JavaParser.Identifier, i);
    	}
    }
    public typeArguments(): TypeArgumentsContext[];
    public typeArguments(i: number): TypeArgumentsContext | null;
    public typeArguments(i?: number): TypeArgumentsContext[] | TypeArgumentsContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsContext);
        }

        return this.getRuleContext(i, TypeArgumentsContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classOrInterfaceType;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterClassOrInterfaceType) {
             listener.enterClassOrInterfaceType(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitClassOrInterfaceType) {
             listener.exitClassOrInterfaceType(this);
        }
    }
}


export class PrimitiveTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public BOOLEAN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BOOLEAN, 0);
    }
    public CHAR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CHAR, 0);
    }
    public BYTE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BYTE, 0);
    }
    public SHORT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SHORT, 0);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.INT, 0);
    }
    public LONG(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LONG, 0);
    }
    public FLOAT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FLOAT, 0);
    }
    public DOUBLE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOUBLE, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_primitiveType;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterPrimitiveType) {
             listener.enterPrimitiveType(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitPrimitiveType) {
             listener.exitPrimitiveType(this);
        }
    }
}


export class TypeArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(JavaParser.LT, 0)!;
    }
    public typeArgument(): TypeArgumentContext[];
    public typeArgument(i: number): TypeArgumentContext | null;
    public typeArgument(i?: number): TypeArgumentContext[] | TypeArgumentContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentContext);
        }

        return this.getRuleContext(i, TypeArgumentContext);
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(JavaParser.GT, 0)!;
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeArguments;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeArguments) {
             listener.enterTypeArguments(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeArguments) {
             listener.exitTypeArguments(this);
        }
    }
}


export class TypeArgumentContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext | null {
        return this.getRuleContext(0, TypeSpecContext);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.QUESTION, 0);
    }
    public EXTENDS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EXTENDS, 0);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeArgument;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeArgument) {
             listener.enterTypeArgument(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeArgument) {
             listener.exitTypeArgument(this);
        }
    }
}


export class QualifiedNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_qualifiedNameList;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterQualifiedNameList) {
             listener.enterQualifiedNameList(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitQualifiedNameList) {
             listener.exitQualifiedNameList(this);
        }
    }
}


export class FormalParametersContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public formalParameterList(): FormalParameterListContext | null {
        return this.getRuleContext(0, FormalParameterListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_formalParameters;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterFormalParameters) {
             listener.enterFormalParameters(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitFormalParameters) {
             listener.exitFormalParameters(this);
        }
    }
}


export class FormalParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public formalParameter(): FormalParameterContext[];
    public formalParameter(i: number): FormalParameterContext | null;
    public formalParameter(i?: number): FormalParameterContext[] | FormalParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(FormalParameterContext);
        }

        return this.getRuleContext(i, FormalParameterContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public lastFormalParameter(): LastFormalParameterContext | null {
        return this.getRuleContext(0, LastFormalParameterContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_formalParameterList;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterFormalParameterList) {
             listener.enterFormalParameterList(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitFormalParameterList) {
             listener.exitFormalParameterList(this);
        }
    }
}


export class FormalParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext {
        return this.getRuleContext(0, TypeSpecContext)!;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_formalParameter;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterFormalParameter) {
             listener.enterFormalParameter(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitFormalParameter) {
             listener.exitFormalParameter(this);
        }
    }
}


export class LastFormalParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext {
        return this.getRuleContext(0, TypeSpecContext)!;
    }
    public ELLIPSIS(): antlr.TerminalNode {
        return this.getToken(JavaParser.ELLIPSIS, 0)!;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_lastFormalParameter;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterLastFormalParameter) {
             listener.enterLastFormalParameter(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitLastFormalParameter) {
             listener.exitLastFormalParameter(this);
        }
    }
}


export class MethodBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_methodBody;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterMethodBody) {
             listener.enterMethodBody(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitMethodBody) {
             listener.exitMethodBody(this);
        }
    }
}


export class ConstructorBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constructorBody;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterConstructorBody) {
             listener.enterConstructorBody(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitConstructorBody) {
             listener.exitConstructorBody(this);
        }
    }
}


export class QualifiedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode[];
    public Identifier(i: number): antlr.TerminalNode | null;
    public Identifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.Identifier);
    	} else {
    		return this.getToken(JavaParser.Identifier, i);
    	}
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_qualifiedName;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterQualifiedName) {
             listener.enterQualifiedName(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitQualifiedName) {
             listener.exitQualifiedName(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IntegerLiteral(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IntegerLiteral, 0);
    }
    public FloatingPointLiteral(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FloatingPointLiteral, 0);
    }
    public CharacterLiteral(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CharacterLiteral, 0);
    }
    public StringLiteral(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.StringLiteral, 0);
    }
    public BooleanLiteral(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BooleanLiteral, 0);
    }
    public NullLiteral(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NullLiteral, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_literal;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
}


export class AnnotationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(JavaParser.AT, 0)!;
    }
    public annotationName(): AnnotationNameContext {
        return this.getRuleContext(0, AnnotationNameContext)!;
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public elementValuePairs(): ElementValuePairsContext | null {
        return this.getRuleContext(0, ElementValuePairsContext);
    }
    public elementValue(): ElementValueContext | null {
        return this.getRuleContext(0, ElementValueContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotation;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotation) {
             listener.enterAnnotation(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotation) {
             listener.exitAnnotation(this);
        }
    }
}


export class AnnotationNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext {
        return this.getRuleContext(0, QualifiedNameContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationName;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationName) {
             listener.enterAnnotationName(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationName) {
             listener.exitAnnotationName(this);
        }
    }
}


export class ElementValuePairsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public elementValuePair(): ElementValuePairContext[];
    public elementValuePair(i: number): ElementValuePairContext | null;
    public elementValuePair(i?: number): ElementValuePairContext[] | ElementValuePairContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElementValuePairContext);
        }

        return this.getRuleContext(i, ElementValuePairContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValuePairs;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterElementValuePairs) {
             listener.enterElementValuePairs(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitElementValuePairs) {
             listener.exitElementValuePairs(this);
        }
    }
}


export class ElementValuePairContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(JavaParser.ASSIGN, 0)!;
    }
    public elementValue(): ElementValueContext {
        return this.getRuleContext(0, ElementValueContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValuePair;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterElementValuePair) {
             listener.enterElementValuePair(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitElementValuePair) {
             listener.exitElementValuePair(this);
        }
    }
}


export class ElementValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public annotation(): AnnotationContext | null {
        return this.getRuleContext(0, AnnotationContext);
    }
    public elementValueArrayInitializer(): ElementValueArrayInitializerContext | null {
        return this.getRuleContext(0, ElementValueArrayInitializerContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValue;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterElementValue) {
             listener.enterElementValue(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitElementValue) {
             listener.exitElementValue(this);
        }
    }
}


export class ElementValueArrayInitializerContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public elementValue(): ElementValueContext[];
    public elementValue(i: number): ElementValueContext | null;
    public elementValue(i?: number): ElementValueContext[] | ElementValueContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ElementValueContext);
        }

        return this.getRuleContext(i, ElementValueContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_elementValueArrayInitializer;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterElementValueArrayInitializer) {
             listener.enterElementValueArrayInitializer(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitElementValueArrayInitializer) {
             listener.exitElementValueArrayInitializer(this);
        }
    }
}


export class AnnotationTypeDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public AT(): antlr.TerminalNode {
        return this.getToken(JavaParser.AT, 0)!;
    }
    public INTERFACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.INTERFACE, 0)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public annotationTypeBody(): AnnotationTypeBodyContext {
        return this.getRuleContext(0, AnnotationTypeBodyContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationTypeDeclaration) {
             listener.enterAnnotationTypeDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationTypeDeclaration) {
             listener.exitAnnotationTypeDeclaration(this);
        }
    }
}


export class AnnotationTypeBodyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public annotationTypeElementDeclaration(): AnnotationTypeElementDeclarationContext[];
    public annotationTypeElementDeclaration(i: number): AnnotationTypeElementDeclarationContext | null;
    public annotationTypeElementDeclaration(i?: number): AnnotationTypeElementDeclarationContext[] | AnnotationTypeElementDeclarationContext | null {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationTypeElementDeclarationContext);
        }

        return this.getRuleContext(i, AnnotationTypeElementDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeBody;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationTypeBody) {
             listener.enterAnnotationTypeBody(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationTypeBody) {
             listener.exitAnnotationTypeBody(this);
        }
    }
}


export class AnnotationTypeElementDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotationTypeElementRest(): AnnotationTypeElementRestContext | null {
        return this.getRuleContext(0, AnnotationTypeElementRestContext);
    }
    public modifier(): ModifierContext[];
    public modifier(i: number): ModifierContext | null;
    public modifier(i?: number): ModifierContext[] | ModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }

        return this.getRuleContext(i, ModifierContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeElementDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationTypeElementDeclaration) {
             listener.enterAnnotationTypeElementDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationTypeElementDeclaration) {
             listener.exitAnnotationTypeElementDeclaration(this);
        }
    }
}


export class AnnotationTypeElementRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext | null {
        return this.getRuleContext(0, TypeSpecContext);
    }
    public annotationMethodOrConstantRest(): AnnotationMethodOrConstantRestContext | null {
        return this.getRuleContext(0, AnnotationMethodOrConstantRestContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public classDeclaration(): ClassDeclarationContext | null {
        return this.getRuleContext(0, ClassDeclarationContext);
    }
    public interfaceDeclaration(): InterfaceDeclarationContext | null {
        return this.getRuleContext(0, InterfaceDeclarationContext);
    }
    public enumDeclaration(): EnumDeclarationContext | null {
        return this.getRuleContext(0, EnumDeclarationContext);
    }
    public annotationTypeDeclaration(): AnnotationTypeDeclarationContext | null {
        return this.getRuleContext(0, AnnotationTypeDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationTypeElementRest;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationTypeElementRest) {
             listener.enterAnnotationTypeElementRest(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationTypeElementRest) {
             listener.exitAnnotationTypeElementRest(this);
        }
    }
}


export class AnnotationMethodOrConstantRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public annotationMethodRest(): AnnotationMethodRestContext | null {
        return this.getRuleContext(0, AnnotationMethodRestContext);
    }
    public annotationConstantRest(): AnnotationConstantRestContext | null {
        return this.getRuleContext(0, AnnotationConstantRestContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationMethodOrConstantRest;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationMethodOrConstantRest) {
             listener.enterAnnotationMethodOrConstantRest(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationMethodOrConstantRest) {
             listener.exitAnnotationMethodOrConstantRest(this);
        }
    }
}


export class AnnotationMethodRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public defaultValue(): DefaultValueContext | null {
        return this.getRuleContext(0, DefaultValueContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationMethodRest;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationMethodRest) {
             listener.enterAnnotationMethodRest(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationMethodRest) {
             listener.exitAnnotationMethodRest(this);
        }
    }
}


export class AnnotationConstantRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        return this.getRuleContext(0, VariableDeclaratorsContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_annotationConstantRest;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterAnnotationConstantRest) {
             listener.enterAnnotationConstantRest(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitAnnotationConstantRest) {
             listener.exitAnnotationConstantRest(this);
        }
    }
}


export class DefaultValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEFAULT(): antlr.TerminalNode {
        return this.getToken(JavaParser.DEFAULT, 0)!;
    }
    public elementValue(): ElementValueContext {
        return this.getRuleContext(0, ElementValueContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_defaultValue;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterDefaultValue) {
             listener.enterDefaultValue(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitDefaultValue) {
             listener.exitDefaultValue(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.LBRACE, 0)!;
    }
    public RBRACE(): antlr.TerminalNode {
        return this.getToken(JavaParser.RBRACE, 0)!;
    }
    public blockStatement(): BlockStatementContext[];
    public blockStatement(i: number): BlockStatementContext | null;
    public blockStatement(i?: number): BlockStatementContext[] | BlockStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }

        return this.getRuleContext(i, BlockStatementContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_block;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
}


export class BlockStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public localVariableDeclarationStatement(): LocalVariableDeclarationStatementContext | null {
        return this.getRuleContext(0, LocalVariableDeclarationStatementContext);
    }
    public statement(): StatementContext | null {
        return this.getRuleContext(0, StatementContext);
    }
    public typeDeclaration(): TypeDeclarationContext | null {
        return this.getRuleContext(0, TypeDeclarationContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_blockStatement;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterBlockStatement) {
             listener.enterBlockStatement(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitBlockStatement) {
             listener.exitBlockStatement(this);
        }
    }
}


export class LocalVariableDeclarationStatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public localVariableDeclaration(): LocalVariableDeclarationContext {
        return this.getRuleContext(0, LocalVariableDeclarationContext)!;
    }
    public SEMI(): antlr.TerminalNode {
        return this.getToken(JavaParser.SEMI, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_localVariableDeclarationStatement;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterLocalVariableDeclarationStatement) {
             listener.enterLocalVariableDeclarationStatement(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitLocalVariableDeclarationStatement) {
             listener.exitLocalVariableDeclarationStatement(this);
        }
    }
}


export class LocalVariableDeclarationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext {
        return this.getRuleContext(0, TypeSpecContext)!;
    }
    public variableDeclarators(): VariableDeclaratorsContext {
        return this.getRuleContext(0, VariableDeclaratorsContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_localVariableDeclaration;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterLocalVariableDeclaration) {
             listener.enterLocalVariableDeclaration(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitLocalVariableDeclaration) {
             listener.exitLocalVariableDeclaration(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public ASSERT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ASSERT, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COLON, 0);
    }
    public IF(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.IF, 0);
    }
    public parExpression(): ParExpressionContext | null {
        return this.getRuleContext(0, ParExpressionContext);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ELSE, 0);
    }
    public FOR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.FOR, 0);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public forControl(): ForControlContext | null {
        return this.getRuleContext(0, ForControlContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public WHILE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.WHILE, 0);
    }
    public DO(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DO, 0);
    }
    public TRY(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TRY, 0);
    }
    public finallyBlock(): FinallyBlockContext | null {
        return this.getRuleContext(0, FinallyBlockContext);
    }
    public catchClause(): CatchClauseContext[];
    public catchClause(i: number): CatchClauseContext | null;
    public catchClause(i?: number): CatchClauseContext[] | CatchClauseContext | null {
        if (i === undefined) {
            return this.getRuleContexts(CatchClauseContext);
        }

        return this.getRuleContext(i, CatchClauseContext);
    }
    public resourceSpecification(): ResourceSpecificationContext | null {
        return this.getRuleContext(0, ResourceSpecificationContext);
    }
    public SWITCH(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SWITCH, 0);
    }
    public LBRACE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LBRACE, 0);
    }
    public RBRACE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RBRACE, 0);
    }
    public switchBlockStatementGroup(): SwitchBlockStatementGroupContext[];
    public switchBlockStatementGroup(i: number): SwitchBlockStatementGroupContext | null;
    public switchBlockStatementGroup(i?: number): SwitchBlockStatementGroupContext[] | SwitchBlockStatementGroupContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchBlockStatementGroupContext);
        }

        return this.getRuleContext(i, SwitchBlockStatementGroupContext);
    }
    public switchLabel(): SwitchLabelContext[];
    public switchLabel(i: number): SwitchLabelContext | null;
    public switchLabel(i?: number): SwitchLabelContext[] | SwitchLabelContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }

        return this.getRuleContext(i, SwitchLabelContext);
    }
    public SYNCHRONIZED(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SYNCHRONIZED, 0);
    }
    public RETURN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RETURN, 0);
    }
    public THROW(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THROW, 0);
    }
    public BREAK(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BREAK, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.Identifier, 0);
    }
    public CONTINUE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CONTINUE, 0);
    }
    public statementExpression(): StatementExpressionContext | null {
        return this.getRuleContext(0, StatementExpressionContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_statement;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
}


export class CatchClauseContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CATCH(): antlr.TerminalNode {
        return this.getToken(JavaParser.CATCH, 0)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public catchType(): CatchTypeContext {
        return this.getRuleContext(0, CatchTypeContext)!;
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_catchClause;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterCatchClause) {
             listener.enterCatchClause(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitCatchClause) {
             listener.exitCatchClause(this);
        }
    }
}


export class CatchTypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public qualifiedName(): QualifiedNameContext[];
    public qualifiedName(i: number): QualifiedNameContext | null;
    public qualifiedName(i?: number): QualifiedNameContext[] | QualifiedNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(QualifiedNameContext);
        }

        return this.getRuleContext(i, QualifiedNameContext);
    }
    public BITOR(): antlr.TerminalNode[];
    public BITOR(i: number): antlr.TerminalNode | null;
    public BITOR(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.BITOR);
    	} else {
    		return this.getToken(JavaParser.BITOR, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_catchType;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterCatchType) {
             listener.enterCatchType(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitCatchType) {
             listener.exitCatchType(this);
        }
    }
}


export class FinallyBlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FINALLY(): antlr.TerminalNode {
        return this.getToken(JavaParser.FINALLY, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_finallyBlock;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterFinallyBlock) {
             listener.enterFinallyBlock(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitFinallyBlock) {
             listener.exitFinallyBlock(this);
        }
    }
}


export class ResourceSpecificationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public resources(): ResourcesContext {
        return this.getRuleContext(0, ResourcesContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_resourceSpecification;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterResourceSpecification) {
             listener.enterResourceSpecification(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitResourceSpecification) {
             listener.exitResourceSpecification(this);
        }
    }
}


export class ResourcesContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public resource(): ResourceContext[];
    public resource(i: number): ResourceContext | null;
    public resource(i?: number): ResourceContext[] | ResourceContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ResourceContext);
        }

        return this.getRuleContext(i, ResourceContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.SEMI);
    	} else {
    		return this.getToken(JavaParser.SEMI, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_resources;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterResources) {
             listener.enterResources(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitResources) {
             listener.exitResources(this);
        }
    }
}


export class ResourceContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public classOrInterfaceType(): ClassOrInterfaceTypeContext {
        return this.getRuleContext(0, ClassOrInterfaceTypeContext)!;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public ASSIGN(): antlr.TerminalNode {
        return this.getToken(JavaParser.ASSIGN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_resource;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterResource) {
             listener.enterResource(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitResource) {
             listener.exitResource(this);
        }
    }
}


export class SwitchBlockStatementGroupContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public switchLabel(): SwitchLabelContext[];
    public switchLabel(i: number): SwitchLabelContext | null;
    public switchLabel(i?: number): SwitchLabelContext[] | SwitchLabelContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SwitchLabelContext);
        }

        return this.getRuleContext(i, SwitchLabelContext);
    }
    public blockStatement(): BlockStatementContext[];
    public blockStatement(i: number): BlockStatementContext | null;
    public blockStatement(i?: number): BlockStatementContext[] | BlockStatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockStatementContext);
        }

        return this.getRuleContext(i, BlockStatementContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_switchBlockStatementGroup;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterSwitchBlockStatementGroup) {
             listener.enterSwitchBlockStatementGroup(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitSwitchBlockStatementGroup) {
             listener.exitSwitchBlockStatementGroup(this);
        }
    }
}


export class SwitchLabelContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public CASE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CASE, 0);
    }
    public constantExpression(): ConstantExpressionContext | null {
        return this.getRuleContext(0, ConstantExpressionContext);
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(JavaParser.COLON, 0)!;
    }
    public enumConstantName(): EnumConstantNameContext | null {
        return this.getRuleContext(0, EnumConstantNameContext);
    }
    public DEFAULT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DEFAULT, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_switchLabel;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterSwitchLabel) {
             listener.enterSwitchLabel(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitSwitchLabel) {
             listener.exitSwitchLabel(this);
        }
    }
}


export class ForControlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public enhancedForControl(): EnhancedForControlContext | null {
        return this.getRuleContext(0, EnhancedForControlContext);
    }
    public SEMI(): antlr.TerminalNode[];
    public SEMI(i: number): antlr.TerminalNode | null;
    public SEMI(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.SEMI);
    	} else {
    		return this.getToken(JavaParser.SEMI, i);
    	}
    }
    public forInit(): ForInitContext | null {
        return this.getRuleContext(0, ForInitContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public forUpdate(): ForUpdateContext | null {
        return this.getRuleContext(0, ForUpdateContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_forControl;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterForControl) {
             listener.enterForControl(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitForControl) {
             listener.exitForControl(this);
        }
    }
}


export class ForInitContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public localVariableDeclaration(): LocalVariableDeclarationContext | null {
        return this.getRuleContext(0, LocalVariableDeclarationContext);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_forInit;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterForInit) {
             listener.enterForInit(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitForInit) {
             listener.exitForInit(this);
        }
    }
}


export class EnhancedForControlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public typeSpec(): TypeSpecContext {
        return this.getRuleContext(0, TypeSpecContext)!;
    }
    public variableDeclaratorId(): VariableDeclaratorIdContext {
        return this.getRuleContext(0, VariableDeclaratorIdContext)!;
    }
    public COLON(): antlr.TerminalNode {
        return this.getToken(JavaParser.COLON, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public variableModifier(): VariableModifierContext[];
    public variableModifier(i: number): VariableModifierContext | null;
    public variableModifier(i?: number): VariableModifierContext[] | VariableModifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariableModifierContext);
        }

        return this.getRuleContext(i, VariableModifierContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_enhancedForControl;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterEnhancedForControl) {
             listener.enterEnhancedForControl(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitEnhancedForControl) {
             listener.exitEnhancedForControl(this);
        }
    }
}


export class ForUpdateContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expressionList(): ExpressionListContext {
        return this.getRuleContext(0, ExpressionListContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_forUpdate;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterForUpdate) {
             listener.enterForUpdate(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitForUpdate) {
             listener.exitForUpdate(this);
        }
    }
}


export class ParExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_parExpression;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterParExpression) {
             listener.enterParExpression(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitParExpression) {
             listener.exitParExpression(this);
        }
    }
}


export class ExpressionListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.COMMA);
    	} else {
    		return this.getToken(JavaParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_expressionList;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterExpressionList) {
             listener.enterExpressionList(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitExpressionList) {
             listener.exitExpressionList(this);
        }
    }
}


export class StatementExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_statementExpression;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterStatementExpression) {
             listener.enterStatementExpression(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitStatementExpression) {
             listener.exitStatementExpression(this);
        }
    }
}


export class ConstantExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_constantExpression;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterConstantExpression) {
             listener.enterConstantExpression(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitConstantExpression) {
             listener.exitConstantExpression(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary(): PrimaryContext | null {
        return this.getRuleContext(0, PrimaryContext);
    }
    public NEW(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NEW, 0);
    }
    public creator(): CreatorContext | null {
        return this.getRuleContext(0, CreatorContext);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public typeSpec(): TypeSpecContext | null {
        return this.getRuleContext(0, TypeSpecContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public ADD(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ADD, 0);
    }
    public SUB(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUB, 0);
    }
    public INC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.INC, 0);
    }
    public DEC(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DEC, 0);
    }
    public TILDE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.TILDE, 0);
    }
    public BANG(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BANG, 0);
    }
    public MUL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MUL, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MOD, 0);
    }
    public LT(): antlr.TerminalNode[];
    public LT(i: number): antlr.TerminalNode | null;
    public LT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LT);
    	} else {
    		return this.getToken(JavaParser.LT, i);
    	}
    }
    public GT(): antlr.TerminalNode[];
    public GT(i: number): antlr.TerminalNode | null;
    public GT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.GT);
    	} else {
    		return this.getToken(JavaParser.GT, i);
    	}
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LE, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.GE, 0);
    }
    public EQUAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.EQUAL, 0);
    }
    public NOTEQUAL(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.NOTEQUAL, 0);
    }
    public BITAND(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BITAND, 0);
    }
    public CARET(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CARET, 0);
    }
    public BITOR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.BITOR, 0);
    }
    public AND(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.AND, 0);
    }
    public OR(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OR, 0);
    }
    public QUESTION(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.QUESTION, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.COLON, 0);
    }
    public ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ASSIGN, 0);
    }
    public ADD_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.ADD_ASSIGN, 0);
    }
    public SUB_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUB_ASSIGN, 0);
    }
    public MUL_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MUL_ASSIGN, 0);
    }
    public DIV_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DIV_ASSIGN, 0);
    }
    public AND_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.AND_ASSIGN, 0);
    }
    public OR_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.OR_ASSIGN, 0);
    }
    public XOR_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.XOR_ASSIGN, 0);
    }
    public RSHIFT_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RSHIFT_ASSIGN, 0);
    }
    public URSHIFT_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.URSHIFT_ASSIGN, 0);
    }
    public LSHIFT_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LSHIFT_ASSIGN, 0);
    }
    public MOD_ASSIGN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.MOD_ASSIGN, 0);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.Identifier, 0);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THIS, 0);
    }
    public innerCreator(): InnerCreatorContext | null {
        return this.getRuleContext(0, InnerCreatorContext);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public superSuffix(): SuperSuffixContext | null {
        return this.getRuleContext(0, SuperSuffixContext);
    }
    public explicitGenericInvocation(): ExplicitGenericInvocationContext | null {
        return this.getRuleContext(0, ExplicitGenericInvocationContext);
    }
    public LBRACK(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LBRACK, 0);
    }
    public RBRACK(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RBRACK, 0);
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public INSTANCEOF(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.INSTANCEOF, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_expression;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
}


export class PrimaryContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LPAREN, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public RPAREN(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.RPAREN, 0);
    }
    public THIS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.THIS, 0);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.Identifier, 0);
    }
    public typeSpec(): TypeSpecContext | null {
        return this.getRuleContext(0, TypeSpecContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public CLASS(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.CLASS, 0);
    }
    public VOID(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.VOID, 0);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext | null {
        return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_primary;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterPrimary) {
             listener.enterPrimary(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitPrimary) {
             listener.exitPrimary(this);
        }
    }
}


export class CreatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public createdName(): CreatedNameContext {
        return this.getRuleContext(0, CreatedNameContext)!;
    }
    public classCreatorRest(): ClassCreatorRestContext | null {
        return this.getRuleContext(0, ClassCreatorRestContext);
    }
    public arrayCreatorRest(): ArrayCreatorRestContext | null {
        return this.getRuleContext(0, ArrayCreatorRestContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_creator;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterCreator) {
             listener.enterCreator(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitCreator) {
             listener.exitCreator(this);
        }
    }
}


export class CreatedNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode[];
    public Identifier(i: number): antlr.TerminalNode | null;
    public Identifier(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.Identifier);
    	} else {
    		return this.getToken(JavaParser.Identifier, i);
    	}
    }
    public typeArgumentsOrDiamond(): TypeArgumentsOrDiamondContext[];
    public typeArgumentsOrDiamond(i: number): TypeArgumentsOrDiamondContext | null;
    public typeArgumentsOrDiamond(i?: number): TypeArgumentsOrDiamondContext[] | TypeArgumentsOrDiamondContext | null {
        if (i === undefined) {
            return this.getRuleContexts(TypeArgumentsOrDiamondContext);
        }

        return this.getRuleContext(i, TypeArgumentsOrDiamondContext);
    }
    public DOT(): antlr.TerminalNode[];
    public DOT(i: number): antlr.TerminalNode | null;
    public DOT(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.DOT);
    	} else {
    		return this.getToken(JavaParser.DOT, i);
    	}
    }
    public primitiveType(): PrimitiveTypeContext | null {
        return this.getRuleContext(0, PrimitiveTypeContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_createdName;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterCreatedName) {
             listener.enterCreatedName(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitCreatedName) {
             listener.exitCreatedName(this);
        }
    }
}


export class InnerCreatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public Identifier(): antlr.TerminalNode {
        return this.getToken(JavaParser.Identifier, 0)!;
    }
    public classCreatorRest(): ClassCreatorRestContext {
        return this.getRuleContext(0, ClassCreatorRestContext)!;
    }
    public nonWildcardTypeArgumentsOrDiamond(): NonWildcardTypeArgumentsOrDiamondContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsOrDiamondContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_innerCreator;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterInnerCreator) {
             listener.enterInnerCreator(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitInnerCreator) {
             listener.exitInnerCreator(this);
        }
    }
}


export class ArrayCreatorRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LBRACK(): antlr.TerminalNode[];
    public LBRACK(i: number): antlr.TerminalNode | null;
    public LBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.LBRACK);
    	} else {
    		return this.getToken(JavaParser.LBRACK, i);
    	}
    }
    public RBRACK(): antlr.TerminalNode[];
    public RBRACK(i: number): antlr.TerminalNode | null;
    public RBRACK(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(JavaParser.RBRACK);
    	} else {
    		return this.getToken(JavaParser.RBRACK, i);
    	}
    }
    public arrayInitializer(): ArrayInitializerContext | null {
        return this.getRuleContext(0, ArrayInitializerContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_arrayCreatorRest;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterArrayCreatorRest) {
             listener.enterArrayCreatorRest(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitArrayCreatorRest) {
             listener.exitArrayCreatorRest(this);
        }
    }
}


export class ClassCreatorRestContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arguments(): ArgumentsContext {
        return this.getRuleContext(0, ArgumentsContext)!;
    }
    public classBody(): ClassBodyContext | null {
        return this.getRuleContext(0, ClassBodyContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_classCreatorRest;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterClassCreatorRest) {
             listener.enterClassCreatorRest(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitClassCreatorRest) {
             listener.exitClassCreatorRest(this);
        }
    }
}


export class ExplicitGenericInvocationContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext)!;
    }
    public explicitGenericInvocationSuffix(): ExplicitGenericInvocationSuffixContext {
        return this.getRuleContext(0, ExplicitGenericInvocationSuffixContext)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_explicitGenericInvocation;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterExplicitGenericInvocation) {
             listener.enterExplicitGenericInvocation(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitExplicitGenericInvocation) {
             listener.exitExplicitGenericInvocation(this);
        }
    }
}


export class NonWildcardTypeArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode {
        return this.getToken(JavaParser.LT, 0)!;
    }
    public typeList(): TypeListContext {
        return this.getRuleContext(0, TypeListContext)!;
    }
    public GT(): antlr.TerminalNode {
        return this.getToken(JavaParser.GT, 0)!;
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_nonWildcardTypeArguments;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterNonWildcardTypeArguments) {
             listener.enterNonWildcardTypeArguments(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitNonWildcardTypeArguments) {
             listener.exitNonWildcardTypeArguments(this);
        }
    }
}


export class TypeArgumentsOrDiamondContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.GT, 0);
    }
    public typeArguments(): TypeArgumentsContext | null {
        return this.getRuleContext(0, TypeArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_typeArgumentsOrDiamond;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterTypeArgumentsOrDiamond) {
             listener.enterTypeArgumentsOrDiamond(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitTypeArgumentsOrDiamond) {
             listener.exitTypeArgumentsOrDiamond(this);
        }
    }
}


export class NonWildcardTypeArgumentsOrDiamondContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.LT, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.GT, 0);
    }
    public nonWildcardTypeArguments(): NonWildcardTypeArgumentsContext | null {
        return this.getRuleContext(0, NonWildcardTypeArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_nonWildcardTypeArgumentsOrDiamond;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterNonWildcardTypeArgumentsOrDiamond) {
             listener.enterNonWildcardTypeArgumentsOrDiamond(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitNonWildcardTypeArgumentsOrDiamond) {
             listener.exitNonWildcardTypeArgumentsOrDiamond(this);
        }
    }
}


export class SuperSuffixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public DOT(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.DOT, 0);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.Identifier, 0);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_superSuffix;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterSuperSuffix) {
             listener.enterSuperSuffix(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitSuperSuffix) {
             listener.exitSuperSuffix(this);
        }
    }
}


export class ExplicitGenericInvocationSuffixContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public SUPER(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.SUPER, 0);
    }
    public superSuffix(): SuperSuffixContext | null {
        return this.getRuleContext(0, SuperSuffixContext);
    }
    public Identifier(): antlr.TerminalNode | null {
        return this.getToken(JavaParser.Identifier, 0);
    }
    public arguments(): ArgumentsContext | null {
        return this.getRuleContext(0, ArgumentsContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_explicitGenericInvocationSuffix;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterExplicitGenericInvocationSuffix) {
             listener.enterExplicitGenericInvocationSuffix(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitExplicitGenericInvocationSuffix) {
             listener.exitExplicitGenericInvocationSuffix(this);
        }
    }
}


export class ArgumentsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(JavaParser.RPAREN, 0)!;
    }
    public expressionList(): ExpressionListContext | null {
        return this.getRuleContext(0, ExpressionListContext);
    }
    public override get ruleIndex(): number {
        return JavaParser.RULE_arguments;
    }
    public override enterRule(listener: JavaListener): void {
        if(listener.enterArguments) {
             listener.enterArguments(this);
        }
    }
    public override exitRule(listener: JavaListener): void {
        if(listener.exitArguments) {
             listener.exitArguments(this);
        }
    }
}
