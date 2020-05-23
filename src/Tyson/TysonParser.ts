// Generated from src/Tyson/TysonParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TysonParserListener } from "./TysonParserListener";
import { TysonParserVisitor } from "./TysonParserVisitor";


export class TysonParser extends Parser {
	public static readonly MultiLineComment = 1;
	public static readonly SingleLineComment = 2;
	public static readonly OpenBracket = 3;
	public static readonly CloseBracket = 4;
	public static readonly OpenParen = 5;
	public static readonly CloseParen = 6;
	public static readonly OpenBrace = 7;
	public static readonly CloseBrace = 8;
	public static readonly SemiColon = 9;
	public static readonly Comma = 10;
	public static readonly Assign = 11;
	public static readonly QuestionMark = 12;
	public static readonly Colon = 13;
	public static readonly Dot = 14;
	public static readonly PlusPlus = 15;
	public static readonly MinusMinus = 16;
	public static readonly Plus = 17;
	public static readonly Minus = 18;
	public static readonly Not = 19;
	public static readonly Multiply = 20;
	public static readonly Divide = 21;
	public static readonly Modulus = 22;
	public static readonly LessThan = 23;
	public static readonly MoreThan = 24;
	public static readonly LessThanEquals = 25;
	public static readonly GreaterThanEquals = 26;
	public static readonly Equals = 27;
	public static readonly NotEquals = 28;
	public static readonly Power = 29;
	public static readonly And = 30;
	public static readonly Or = 31;
	public static readonly MultiplyAssign = 32;
	public static readonly DivideAssign = 33;
	public static readonly ModulusAssign = 34;
	public static readonly PlusAssign = 35;
	public static readonly MinusAssign = 36;
	public static readonly PowerAssign = 37;
	public static readonly NullLiteral = 38;
	public static readonly BooleanLiteral = 39;
	public static readonly DecimalLiteral = 40;
	public static readonly Break = 41;
	public static readonly Do = 42;
	public static readonly Else = 43;
	public static readonly Continue = 44;
	public static readonly For = 45;
	public static readonly While = 46;
	public static readonly If = 47;
	public static readonly Var = 48;
	public static readonly Let = 49;
	public static readonly Const = 50;
	public static readonly Any = 51;
	public static readonly Number = 52;
	public static readonly Boolean = 53;
	public static readonly String = 54;
	public static readonly Symbol = 55;
	public static readonly TypeAlias = 56;
	public static readonly Identifier = 57;
	public static readonly StringLiteral = 58;
	public static readonly WhiteSpaces = 59;
	public static readonly LineTerminator = 60;
	public static readonly HtmlComment = 61;
	public static readonly CDataComment = 62;
	public static readonly UnexpectedCharacter = 63;
	public static readonly RULE_program = 0;
	public static readonly RULE_statementList = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_emptyStatement = 3;
	public static readonly RULE_variableStatement = 4;
	public static readonly RULE_variableDeclarationList = 5;
	public static readonly RULE_varModifier = 6;
	public static readonly RULE_variableDeclaration = 7;
	public static readonly RULE_assignable = 8;
	public static readonly RULE_expressionStatement = 9;
	public static readonly RULE_ifStatement = 10;
	public static readonly RULE_iterationStatement = 11;
	public static readonly RULE_continueStatement = 12;
	public static readonly RULE_breakStatement = 13;
	public static readonly RULE_arrayLiteral = 14;
	public static readonly RULE_elementList = 15;
	public static readonly RULE_expressionSequence = 16;
	public static readonly RULE_singleExpression = 17;
	public static readonly RULE_assignmentOperator = 18;
	public static readonly RULE_literal = 19;
	public static readonly RULE_numericLiteral = 20;
	public static readonly RULE_identifierName = 21;
	public static readonly RULE_reservedWord = 22;
	public static readonly RULE_keyword = 23;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statementList", "statement", "emptyStatement", "variableStatement",
		"variableDeclarationList", "varModifier", "variableDeclaration", "assignable",
		"expressionStatement", "ifStatement", "iterationStatement", "continueStatement",
		"breakStatement", "arrayLiteral", "elementList", "expressionSequence",
		"singleExpression", "assignmentOperator", "literal", "numericLiteral",
		"identifierName", "reservedWord", "keyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'",
		"';'", "','", "'='", "'?'", "':'", "'.'", "'++'", "'--'", "'+'", "'-'",
		"'!'", "'*'", "'/'", "'%'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='",
		"'^'", "'&&'", "'||'", "'*='", "'/='", "'%='", "'+='", "'-='", "'^='",
		"'null'", undefined, undefined, "'break'", "'do'", "'else'", "'continue'",
		"'for'", "'while'", "'if'", "'var'", "'let'", "'const'", "'any'", "'number'",
		"'boolean'", "'string'", "'symbol'", "'type'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "OpenBracket", "CloseBracket",
		"OpenParen", "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", "Comma",
		"Assign", "QuestionMark", "Colon", "Dot", "PlusPlus", "MinusMinus", "Plus",
		"Minus", "Not", "Multiply", "Divide", "Modulus", "LessThan", "MoreThan",
		"LessThanEquals", "GreaterThanEquals", "Equals", "NotEquals", "Power",
		"And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", "PlusAssign",
		"MinusAssign", "PowerAssign", "NullLiteral", "BooleanLiteral", "DecimalLiteral",
		"Break", "Do", "Else", "Continue", "For", "While", "If", "Var", "Let",
		"Const", "Any", "Number", "Boolean", "String", "Symbol", "TypeAlias",
		"Identifier", "StringLiteral", "WhiteSpaces", "LineTerminator", "HtmlComment",
		"CDataComment", "UnexpectedCharacter",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TysonParser._LITERAL_NAMES, TysonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TysonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TysonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TysonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TysonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TysonParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TysonParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenBracket) | (1 << TysonParser.OpenParen) | (1 << TysonParser.OpenBrace) | (1 << TysonParser.SemiColon) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TysonParser.NullLiteral - 38)) | (1 << (TysonParser.BooleanLiteral - 38)) | (1 << (TysonParser.DecimalLiteral - 38)) | (1 << (TysonParser.Break - 38)) | (1 << (TysonParser.Do - 38)) | (1 << (TysonParser.Continue - 38)) | (1 << (TysonParser.For - 38)) | (1 << (TysonParser.While - 38)) | (1 << (TysonParser.If - 38)) | (1 << (TysonParser.Var - 38)) | (1 << (TysonParser.Let - 38)) | (1 << (TysonParser.Const - 38)) | (1 << (TysonParser.Identifier - 38)) | (1 << (TysonParser.StringLiteral - 38)))) !== 0)) {
				{
				this.state = 48;
				this.statementList();
				}
			}

			this.state = 51;
			this.match(TysonParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TysonParser.RULE_statementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 53;
				this.statement();
				}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenBracket) | (1 << TysonParser.OpenParen) | (1 << TysonParser.OpenBrace) | (1 << TysonParser.SemiColon) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TysonParser.NullLiteral - 38)) | (1 << (TysonParser.BooleanLiteral - 38)) | (1 << (TysonParser.DecimalLiteral - 38)) | (1 << (TysonParser.Break - 38)) | (1 << (TysonParser.Do - 38)) | (1 << (TysonParser.Continue - 38)) | (1 << (TysonParser.For - 38)) | (1 << (TysonParser.While - 38)) | (1 << (TysonParser.If - 38)) | (1 << (TysonParser.Var - 38)) | (1 << (TysonParser.Let - 38)) | (1 << (TysonParser.Const - 38)) | (1 << (TysonParser.Identifier - 38)) | (1 << (TysonParser.StringLiteral - 38)))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TysonParser.RULE_statement);
		let _la: number;
		try {
			this.state = 70;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.OpenBrace:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 58;
				this.match(TysonParser.OpenBrace);
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenBracket) | (1 << TysonParser.OpenParen) | (1 << TysonParser.OpenBrace) | (1 << TysonParser.SemiColon) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TysonParser.NullLiteral - 38)) | (1 << (TysonParser.BooleanLiteral - 38)) | (1 << (TysonParser.DecimalLiteral - 38)) | (1 << (TysonParser.Break - 38)) | (1 << (TysonParser.Do - 38)) | (1 << (TysonParser.Continue - 38)) | (1 << (TysonParser.For - 38)) | (1 << (TysonParser.While - 38)) | (1 << (TysonParser.If - 38)) | (1 << (TysonParser.Var - 38)) | (1 << (TysonParser.Let - 38)) | (1 << (TysonParser.Const - 38)) | (1 << (TysonParser.Identifier - 38)) | (1 << (TysonParser.StringLiteral - 38)))) !== 0)) {
					{
					this.state = 59;
					this.statementList();
					}
				}

				this.state = 62;
				this.match(TysonParser.CloseBrace);
				}
				break;
			case TysonParser.Var:
			case TysonParser.Let:
			case TysonParser.Const:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 63;
				this.variableStatement();
				}
				break;
			case TysonParser.SemiColon:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 64;
				this.emptyStatement();
				}
				break;
			case TysonParser.OpenBracket:
			case TysonParser.OpenParen:
			case TysonParser.PlusPlus:
			case TysonParser.MinusMinus:
			case TysonParser.Plus:
			case TysonParser.Minus:
			case TysonParser.Not:
			case TysonParser.NullLiteral:
			case TysonParser.BooleanLiteral:
			case TysonParser.DecimalLiteral:
			case TysonParser.Identifier:
			case TysonParser.StringLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 65;
				this.expressionStatement();
				}
				break;
			case TysonParser.If:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 66;
				this.ifStatement();
				}
				break;
			case TysonParser.Do:
			case TysonParser.For:
			case TysonParser.While:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 67;
				this.iterationStatement();
				}
				break;
			case TysonParser.Continue:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 68;
				this.continueStatement();
				}
				break;
			case TysonParser.Break:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 69;
				this.breakStatement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement(): EmptyStatementContext {
		let _localctx: EmptyStatementContext = new EmptyStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TysonParser.RULE_emptyStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(TysonParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStatement(): VariableStatementContext {
		let _localctx: VariableStatementContext = new VariableStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, TysonParser.RULE_variableStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.variableDeclarationList();
			this.state = 75;
			this.match(TysonParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclarationList(): VariableDeclarationListContext {
		let _localctx: VariableDeclarationListContext = new VariableDeclarationListContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TysonParser.RULE_variableDeclarationList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.varModifier();
			this.state = 78;
			this.variableDeclaration();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TysonParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			_la = this._input.LA(1);
			if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (TysonParser.Var - 48)) | (1 << (TysonParser.Let - 48)) | (1 << (TysonParser.Const - 48)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TysonParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.assignable();
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TysonParser.Assign) {
				{
				this.state = 83;
				this.match(TysonParser.Assign);
				this.state = 84;
				this.singleExpression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignable(): AssignableContext {
		let _localctx: AssignableContext = new AssignableContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TysonParser.RULE_assignable);
		try {
			this.state = 89;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 87;
				this.match(TysonParser.Identifier);
				}
				break;
			case TysonParser.OpenBracket:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 88;
				this.arrayLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TysonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.expressionSequence();
			this.state = 92;
			this.match(TysonParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TysonParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.match(TysonParser.If);
			this.state = 95;
			this.match(TysonParser.OpenParen);
			this.state = 96;
			this.expressionSequence();
			this.state = 97;
			this.match(TysonParser.CloseParen);
			this.state = 98;
			this.statement();
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 99;
				this.match(TysonParser.Else);
				this.state = 100;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iterationStatement(): IterationStatementContext {
		let _localctx: IterationStatementContext = new IterationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TysonParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.Do:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.match(TysonParser.Do);
				this.state = 104;
				this.statement();
				this.state = 105;
				this.match(TysonParser.While);
				this.state = 106;
				this.match(TysonParser.OpenParen);
				this.state = 107;
				this.expressionSequence();
				this.state = 108;
				this.match(TysonParser.CloseParen);
				this.state = 109;
				this.match(TysonParser.SemiColon);
				}
				break;
			case TysonParser.While:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this.match(TysonParser.While);
				this.state = 112;
				this.match(TysonParser.OpenParen);
				this.state = 113;
				this.expressionSequence();
				this.state = 114;
				this.match(TysonParser.CloseParen);
				this.state = 115;
				this.statement();
				}
				break;
			case TysonParser.For:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 117;
				this.match(TysonParser.For);
				this.state = 118;
				this.match(TysonParser.OpenParen);
				this.state = 121;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TysonParser.OpenBracket:
				case TysonParser.OpenParen:
				case TysonParser.PlusPlus:
				case TysonParser.MinusMinus:
				case TysonParser.Plus:
				case TysonParser.Minus:
				case TysonParser.Not:
				case TysonParser.NullLiteral:
				case TysonParser.BooleanLiteral:
				case TysonParser.DecimalLiteral:
				case TysonParser.Identifier:
				case TysonParser.StringLiteral:
					{
					this.state = 119;
					this.expressionSequence();
					}
					break;
				case TysonParser.Var:
				case TysonParser.Let:
				case TysonParser.Const:
					{
					this.state = 120;
					this.variableDeclarationList();
					}
					break;
				case TysonParser.SemiColon:
					break;
				default:
					break;
				}
				this.state = 123;
				this.match(TysonParser.SemiColon);
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenBracket) | (1 << TysonParser.OpenParen) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TysonParser.NullLiteral - 38)) | (1 << (TysonParser.BooleanLiteral - 38)) | (1 << (TysonParser.DecimalLiteral - 38)) | (1 << (TysonParser.Identifier - 38)) | (1 << (TysonParser.StringLiteral - 38)))) !== 0)) {
					{
					this.state = 124;
					this.expressionSequence();
					}
				}

				this.state = 127;
				this.match(TysonParser.SemiColon);
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenBracket) | (1 << TysonParser.OpenParen) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TysonParser.NullLiteral - 38)) | (1 << (TysonParser.BooleanLiteral - 38)) | (1 << (TysonParser.DecimalLiteral - 38)) | (1 << (TysonParser.Identifier - 38)) | (1 << (TysonParser.StringLiteral - 38)))) !== 0)) {
					{
					this.state = 128;
					this.expressionSequence();
					}
				}

				this.state = 131;
				this.match(TysonParser.CloseParen);
				this.state = 132;
				this.statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueStatement(): ContinueStatementContext {
		let _localctx: ContinueStatementContext = new ContinueStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TysonParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 135;
			this.match(TysonParser.Continue);
			this.state = 136;
			this.match(TysonParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakStatement(): BreakStatementContext {
		let _localctx: BreakStatementContext = new BreakStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TysonParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(TysonParser.Break);
			this.state = 139;
			this.match(TysonParser.SemiColon);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arrayLiteral(): ArrayLiteralContext {
		let _localctx: ArrayLiteralContext = new ArrayLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TysonParser.RULE_arrayLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 141;
			this.match(TysonParser.OpenBracket);
			this.state = 142;
			this.elementList();
			this.state = 143;
			this.match(TysonParser.CloseBracket);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elementList(): ElementListContext {
		let _localctx: ElementListContext = new ElementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TysonParser.RULE_elementList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenBracket) | (1 << TysonParser.OpenParen) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (TysonParser.NullLiteral - 38)) | (1 << (TysonParser.BooleanLiteral - 38)) | (1 << (TysonParser.DecimalLiteral - 38)) | (1 << (TysonParser.Identifier - 38)) | (1 << (TysonParser.StringLiteral - 38)))) !== 0)) {
				{
				this.state = 145;
				this.singleExpression(0);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TysonParser.Comma) {
					{
					{
					this.state = 146;
					this.match(TysonParser.Comma);
					this.state = 147;
					this.singleExpression(0);
					}
					}
					this.state = 152;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionSequence(): ExpressionSequenceContext {
		let _localctx: ExpressionSequenceContext = new ExpressionSequenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TysonParser.RULE_expressionSequence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 155;
			this.singleExpression(0);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TysonParser.Comma) {
				{
				{
				this.state = 156;
				this.match(TysonParser.Comma);
				this.state = 157;
				this.singleExpression(0);
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public singleExpression(): SingleExpressionContext;
	public singleExpression(_p: number): SingleExpressionContext;
	// @RuleVersion(0)
	public singleExpression(_p?: number): SingleExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SingleExpressionContext = new SingleExpressionContext(this._ctx, _parentState);
		let _prevctx: SingleExpressionContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, TysonParser.RULE_singleExpression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 181;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.PlusPlus:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 164;
				this.match(TysonParser.PlusPlus);
				this.state = 165;
				this.singleExpression(19);
				}
				break;
			case TysonParser.MinusMinus:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 166;
				this.match(TysonParser.MinusMinus);
				this.state = 167;
				this.singleExpression(18);
				}
				break;
			case TysonParser.Plus:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 168;
				this.match(TysonParser.Plus);
				this.state = 169;
				this.singleExpression(17);
				}
				break;
			case TysonParser.Minus:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 170;
				this.match(TysonParser.Minus);
				this.state = 171;
				this.singleExpression(16);
				}
				break;
			case TysonParser.Not:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 172;
				this.match(TysonParser.Not);
				this.state = 173;
				this.singleExpression(15);
				}
				break;
			case TysonParser.Identifier:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 174;
				this.match(TysonParser.Identifier);
				}
				break;
			case TysonParser.NullLiteral:
			case TysonParser.BooleanLiteral:
			case TysonParser.DecimalLiteral:
			case TysonParser.StringLiteral:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 175;
				this.literal();
				}
				break;
			case TysonParser.OpenBracket:
				{
				_localctx = new ArrayLiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 176;
				this.arrayLiteral();
				}
				break;
			case TysonParser.OpenParen:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 177;
				this.match(TysonParser.OpenParen);
				this.state = 178;
				this.expressionSequence();
				this.state = 179;
				this.match(TysonParser.CloseParen);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 228;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 226;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 183;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 184;
						this.match(TysonParser.Power);
						this.state = 185;
						this.singleExpression(14);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 186;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 187;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.Multiply) | (1 << TysonParser.Divide) | (1 << TysonParser.Modulus))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 188;
						this.singleExpression(14);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 189;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 190;
						_la = this._input.LA(1);
						if (!(_la === TysonParser.Plus || _la === TysonParser.Minus)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 191;
						this.singleExpression(13);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 192;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 193;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.LessThan) | (1 << TysonParser.MoreThan) | (1 << TysonParser.LessThanEquals) | (1 << TysonParser.GreaterThanEquals))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 194;
						this.singleExpression(12);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 195;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 196;
						_la = this._input.LA(1);
						if (!(_la === TysonParser.Equals || _la === TysonParser.NotEquals)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 197;
						this.singleExpression(11);
						}
						break;

					case 6:
						{
						_localctx = new LogicalAndExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 198;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 199;
						this.match(TysonParser.And);
						this.state = 200;
						this.singleExpression(10);
						}
						break;

					case 7:
						{
						_localctx = new LogicalOrExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 201;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 202;
						this.match(TysonParser.Or);
						this.state = 203;
						this.singleExpression(9);
						}
						break;

					case 8:
						{
						_localctx = new TernaryExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 204;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 205;
						this.match(TysonParser.QuestionMark);
						this.state = 206;
						this.singleExpression(0);
						this.state = 207;
						this.match(TysonParser.Colon);
						this.state = 208;
						this.singleExpression(8);
						}
						break;

					case 9:
						{
						_localctx = new AssignmentExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 210;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 211;
						this.match(TysonParser.Assign);
						this.state = 212;
						this.singleExpression(6);
						}
						break;

					case 10:
						{
						_localctx = new AssignmentOperatorExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 213;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 214;
						this.assignmentOperator();
						this.state = 215;
						this.singleExpression(5);
						}
						break;

					case 11:
						{
						_localctx = new MemberIndexExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 217;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 218;
						this.match(TysonParser.OpenBracket);
						this.state = 219;
						this.expressionSequence();
						this.state = 220;
						this.match(TysonParser.CloseBracket);
						}
						break;

					case 12:
						{
						_localctx = new PostIncrementExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 222;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 223;
						this.match(TysonParser.PlusPlus);
						}
						break;

					case 13:
						{
						_localctx = new PostDecreaseExpressionContext(new SingleExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_singleExpression);
						this.state = 224;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 225;
						this.match(TysonParser.MinusMinus);
						}
						break;
					}
					}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TysonParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			_la = this._input.LA(1);
			if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (TysonParser.MultiplyAssign - 32)) | (1 << (TysonParser.DivideAssign - 32)) | (1 << (TysonParser.ModulusAssign - 32)) | (1 << (TysonParser.PlusAssign - 32)) | (1 << (TysonParser.MinusAssign - 32)) | (1 << (TysonParser.PowerAssign - 32)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TysonParser.RULE_literal);
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 233;
				this.match(TysonParser.NullLiteral);
				}
				break;
			case TysonParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.match(TysonParser.BooleanLiteral);
				}
				break;
			case TysonParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 235;
				this.match(TysonParser.StringLiteral);
				}
				break;
			case TysonParser.DecimalLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 236;
				this.numericLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericLiteral(): NumericLiteralContext {
		let _localctx: NumericLiteralContext = new NumericLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, TysonParser.RULE_numericLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			this.match(TysonParser.DecimalLiteral);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierName(): IdentifierNameContext {
		let _localctx: IdentifierNameContext = new IdentifierNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, TysonParser.RULE_identifierName);
		try {
			this.state = 243;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 241;
				this.match(TysonParser.Identifier);
				}
				break;
			case TysonParser.NullLiteral:
			case TysonParser.BooleanLiteral:
			case TysonParser.Break:
			case TysonParser.Do:
			case TysonParser.Else:
			case TysonParser.Continue:
			case TysonParser.For:
			case TysonParser.While:
			case TysonParser.If:
			case TysonParser.Var:
			case TysonParser.Let:
			case TysonParser.Const:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 242;
				this.reservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public reservedWord(): ReservedWordContext {
		let _localctx: ReservedWordContext = new ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, TysonParser.RULE_reservedWord);
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.Break:
			case TysonParser.Do:
			case TysonParser.Else:
			case TysonParser.Continue:
			case TysonParser.For:
			case TysonParser.While:
			case TysonParser.If:
			case TysonParser.Var:
			case TysonParser.Let:
			case TysonParser.Const:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.keyword();
				}
				break;
			case TysonParser.NullLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 246;
				this.match(TysonParser.NullLiteral);
				}
				break;
			case TysonParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 247;
				this.match(TysonParser.BooleanLiteral);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, TysonParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			_la = this._input.LA(1);
			if (!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (TysonParser.Break - 41)) | (1 << (TysonParser.Do - 41)) | (1 << (TysonParser.Else - 41)) | (1 << (TysonParser.Continue - 41)) | (1 << (TysonParser.For - 41)) | (1 << (TysonParser.While - 41)) | (1 << (TysonParser.If - 41)) | (1 << (TysonParser.Var - 41)) | (1 << (TysonParser.Let - 41)) | (1 << (TysonParser.Const - 41)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 17:
			return this.singleExpression_sempred(_localctx as SingleExpressionContext, predIndex);
		}
		return true;
	}
	private singleExpression_sempred(_localctx: SingleExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);

		case 1:
			return this.precpred(this._ctx, 13);

		case 2:
			return this.precpred(this._ctx, 12);

		case 3:
			return this.precpred(this._ctx, 11);

		case 4:
			return this.precpred(this._ctx, 10);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 8);

		case 7:
			return this.precpred(this._ctx, 7);

		case 8:
			return this.precpred(this._ctx, 6);

		case 9:
			return this.precpred(this._ctx, 5);

		case 10:
			return this.precpred(this._ctx, 22);

		case 11:
			return this.precpred(this._ctx, 21);

		case 12:
			return this.precpred(this._ctx, 20);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03A\xFF\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x03\x02\x05\x024\n\x02\x03\x02\x03\x02\x03\x03" +
		"\x06\x039\n\x03\r\x03\x0E\x03:\x03\x04\x03\x04\x05\x04?\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04I\n\x04" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x05\tX\n\t\x03\n\x03\n\x05\n\\\n\n\x03\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\fh\n\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x05\r|\n\r\x03\r\x03\r\x05\r\x80\n\r\x03\r" +
		"\x03\r\x05\r\x84\n\r\x03\r\x03\r\x05\r\x88\n\r\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11" +
		"\x03\x11\x07\x11\x97\n\x11\f\x11\x0E\x11\x9A\v\x11\x05\x11\x9C\n\x11\x03" +
		"\x12\x03\x12\x03\x12\x07\x12\xA1\n\x12\f\x12\x0E\x12\xA4\v\x12\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13" +
		"\xB8\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07" +
		"\x13\xE5\n\x13\f\x13\x0E\x13\xE8\v\x13\x03\x14\x03\x14\x03\x15\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\xF0\n\x15\x03\x16\x03\x16\x03\x17\x03\x17\x05" +
		"\x17\xF6\n\x17\x03\x18\x03\x18\x03\x18\x05\x18\xFB\n\x18\x03\x19\x03\x19" +
		"\x03\x19\x02\x02\x03$\x1A\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02\x02\t\x03\x0224\x03\x02" +
		"\x16\x18\x03\x02\x13\x14\x03\x02\x19\x1C\x03\x02\x1D\x1E\x03\x02\"\'\x03" +
		"\x02+4\x02\u0117\x023\x03\x02\x02\x02\x048\x03\x02\x02\x02\x06H\x03\x02" +
		"\x02\x02\bJ\x03\x02\x02\x02\nL\x03\x02\x02\x02\fO\x03\x02\x02\x02\x0E" +
		"R\x03\x02\x02\x02\x10T\x03\x02\x02\x02\x12[\x03\x02\x02\x02\x14]\x03\x02" +
		"\x02\x02\x16`\x03\x02\x02\x02\x18\x87\x03\x02\x02\x02\x1A\x89\x03\x02" +
		"\x02\x02\x1C\x8C\x03\x02\x02\x02\x1E\x8F\x03\x02\x02\x02 \x9B\x03\x02" +
		"\x02\x02\"\x9D\x03\x02\x02\x02$\xB7\x03\x02\x02\x02&\xE9\x03\x02\x02\x02" +
		"(\xEF\x03\x02\x02\x02*\xF1\x03\x02\x02\x02,\xF5\x03\x02\x02\x02.\xFA\x03" +
		"\x02\x02\x020\xFC\x03\x02\x02\x0224\x05\x04\x03\x0232\x03\x02\x02\x02" +
		"34\x03\x02\x02\x0245\x03\x02\x02\x0256\x07\x02\x02\x036\x03\x03\x02\x02" +
		"\x0279\x05\x06\x04\x0287\x03\x02\x02\x029:\x03\x02\x02\x02:8\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;\x05\x03\x02\x02\x02<>\x07\t\x02\x02=?\x05\x04" +
		"\x03\x02>=\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x03\x02\x02\x02@I\x07\n" +
		"\x02\x02AI\x05\n\x06\x02BI\x05\b\x05\x02CI\x05\x14\v\x02DI\x05\x16\f\x02" +
		"EI\x05\x18\r\x02FI\x05\x1A\x0E\x02GI\x05\x1C\x0F\x02H<\x03\x02\x02\x02" +
		"HA\x03\x02\x02\x02HB\x03\x02\x02\x02HC\x03\x02\x02\x02HD\x03\x02\x02\x02" +
		"HE\x03\x02\x02\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02I\x07\x03\x02\x02" +
		"\x02JK\x07\v\x02\x02K\t\x03\x02\x02\x02LM\x05\f\x07\x02MN\x07\v\x02\x02" +
		"N\v\x03\x02\x02\x02OP\x05\x0E\b\x02PQ\x05\x10\t\x02Q\r\x03\x02\x02\x02" +
		"RS\t\x02\x02\x02S\x0F\x03\x02\x02\x02TW\x05\x12\n\x02UV\x07\r\x02\x02" +
		"VX\x05$\x13\x02WU\x03\x02\x02\x02WX\x03\x02\x02\x02X\x11\x03\x02\x02\x02" +
		"Y\\\x07;\x02\x02Z\\\x05\x1E\x10\x02[Y\x03\x02\x02\x02[Z\x03\x02\x02\x02" +
		"\\\x13\x03\x02\x02\x02]^\x05\"\x12\x02^_\x07\v\x02\x02_\x15\x03\x02\x02" +
		"\x02`a\x071\x02\x02ab\x07\x07\x02\x02bc\x05\"\x12\x02cd\x07\b\x02\x02" +
		"dg\x05\x06\x04\x02ef\x07-\x02\x02fh\x05\x06\x04\x02ge\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02h\x17\x03\x02\x02\x02ij\x07,\x02\x02jk\x05\x06\x04\x02" +
		"kl\x070\x02\x02lm\x07\x07\x02\x02mn\x05\"\x12\x02no\x07\b\x02\x02op\x07" +
		"\v\x02\x02p\x88\x03\x02\x02\x02qr\x070\x02\x02rs\x07\x07\x02\x02st\x05" +
		"\"\x12\x02tu\x07\b\x02\x02uv\x05\x06\x04\x02v\x88\x03\x02\x02\x02wx\x07" +
		"/\x02\x02x{\x07\x07\x02\x02y|\x05\"\x12\x02z|\x05\f\x07\x02{y\x03\x02" +
		"\x02\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F\x07" +
		"\v\x02\x02~\x80\x05\"\x12\x02\x7F~\x03\x02\x02\x02\x7F\x80\x03\x02\x02" +
		"\x02\x80\x81\x03\x02\x02\x02\x81\x83\x07\v\x02\x02\x82\x84\x05\"\x12\x02" +
		"\x83\x82\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02" +
		"\x85\x86\x07\b\x02\x02\x86\x88\x05\x06\x04\x02\x87i\x03\x02\x02\x02\x87" +
		"q\x03\x02\x02\x02\x87w\x03\x02\x02\x02\x88\x19\x03\x02\x02\x02\x89\x8A" +
		"\x07.\x02\x02\x8A\x8B\x07\v\x02\x02\x8B\x1B\x03\x02\x02\x02\x8C\x8D\x07" +
		"+\x02\x02\x8D\x8E\x07\v\x02\x02\x8E\x1D\x03\x02\x02\x02\x8F\x90\x07\x05" +
		"\x02\x02\x90\x91\x05 \x11\x02\x91\x92\x07\x06\x02\x02\x92\x1F\x03\x02" +
		"\x02\x02\x93\x98\x05$\x13\x02\x94\x95\x07\f\x02\x02\x95\x97\x05$\x13\x02" +
		"\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03\x02\x02\x02" +
		"\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03\x02\x02\x02" +
		"\x9B\x93\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C!\x03\x02\x02\x02" +
		"\x9D\xA2\x05$\x13\x02\x9E\x9F\x07\f\x02\x02\x9F\xA1\x05$\x13\x02\xA0\x9E" +
		"\x03\x02\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3" +
		"\x03\x02\x02\x02\xA3#\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5\xA6" +
		"\b\x13\x01\x02\xA6\xA7\x07\x11\x02\x02\xA7\xB8\x05$\x13\x15\xA8\xA9\x07" +
		"\x12\x02\x02\xA9\xB8\x05$\x13\x14\xAA\xAB\x07\x13\x02\x02\xAB\xB8\x05" +
		"$\x13\x13\xAC\xAD\x07\x14\x02\x02\xAD\xB8\x05$\x13\x12\xAE\xAF\x07\x15" +
		"\x02\x02\xAF\xB8\x05$\x13\x11\xB0\xB8\x07;\x02\x02\xB1\xB8\x05(\x15\x02" +
		"\xB2\xB8\x05\x1E\x10\x02\xB3\xB4\x07\x07\x02\x02\xB4\xB5\x05\"\x12\x02" +
		"\xB5\xB6\x07\b\x02\x02\xB6\xB8\x03\x02\x02\x02\xB7\xA5\x03\x02\x02\x02" +
		"\xB7\xA8\x03\x02\x02\x02\xB7\xAA\x03\x02\x02\x02\xB7\xAC\x03\x02\x02\x02" +
		"\xB7\xAE\x03\x02\x02\x02\xB7\xB0\x03\x02\x02\x02\xB7\xB1\x03\x02\x02\x02" +
		"\xB7\xB2\x03\x02\x02\x02\xB7\xB3\x03\x02\x02\x02\xB8\xE6\x03\x02\x02\x02" +
		"\xB9\xBA\f\x10\x02\x02\xBA\xBB\x07\x1F\x02\x02\xBB\xE5\x05$\x13\x10\xBC" +
		"\xBD\f\x0F\x02\x02\xBD\xBE\t\x03\x02\x02\xBE\xE5\x05$\x13\x10\xBF\xC0" +
		"\f\x0E\x02\x02\xC0\xC1\t\x04\x02\x02\xC1\xE5\x05$\x13\x0F\xC2\xC3\f\r" +
		"\x02\x02\xC3\xC4\t\x05\x02\x02\xC4\xE5\x05$\x13\x0E\xC5\xC6\f\f\x02\x02" +
		"\xC6\xC7\t\x06\x02\x02\xC7\xE5\x05$\x13\r\xC8\xC9\f\v\x02\x02\xC9\xCA" +
		"\x07 \x02\x02\xCA\xE5\x05$\x13\f\xCB\xCC\f\n\x02\x02\xCC\xCD\x07!\x02" +
		"\x02\xCD\xE5\x05$\x13\v\xCE\xCF\f\t\x02\x02\xCF\xD0\x07\x0E\x02\x02\xD0" +
		"\xD1\x05$\x13\x02\xD1\xD2\x07\x0F\x02\x02\xD2\xD3\x05$\x13\n\xD3\xE5\x03" +
		"\x02\x02\x02\xD4\xD5\f\b\x02\x02\xD5\xD6\x07\r\x02\x02\xD6\xE5\x05$\x13" +
		"\b\xD7\xD8\f\x07\x02\x02\xD8\xD9\x05&\x14\x02\xD9\xDA\x05$\x13\x07\xDA" +
		"\xE5\x03\x02\x02\x02\xDB\xDC\f\x18\x02\x02\xDC\xDD\x07\x05\x02\x02\xDD" +
		"\xDE\x05\"\x12\x02\xDE\xDF\x07\x06\x02\x02\xDF\xE5\x03\x02\x02\x02\xE0" +
		"\xE1\f\x17\x02\x02\xE1\xE5\x07\x11\x02\x02\xE2\xE3\f\x16\x02\x02\xE3\xE5" +
		"\x07\x12\x02\x02\xE4\xB9\x03\x02\x02\x02\xE4\xBC\x03\x02\x02\x02\xE4\xBF" +
		"\x03\x02\x02\x02\xE4\xC2\x03\x02\x02\x02\xE4\xC5\x03\x02\x02\x02\xE4\xC8" +
		"\x03\x02\x02\x02\xE4\xCB\x03\x02\x02\x02\xE4\xCE\x03\x02\x02\x02\xE4\xD4" +
		"\x03\x02\x02\x02\xE4\xD7\x03\x02\x02\x02\xE4\xDB\x03\x02\x02\x02\xE4\xE0" +
		"\x03\x02\x02\x02\xE4\xE2\x03\x02\x02\x02\xE5\xE8\x03\x02\x02\x02\xE6\xE4" +
		"\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7%\x03\x02\x02\x02\xE8\xE6" +
		"\x03\x02\x02\x02\xE9\xEA\t\x07\x02\x02\xEA\'\x03\x02\x02\x02\xEB\xF0\x07" +
		"(\x02\x02\xEC\xF0\x07)\x02\x02\xED\xF0\x07<\x02\x02\xEE\xF0\x05*\x16\x02" +
		"\xEF\xEB\x03\x02\x02\x02\xEF\xEC\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02" +
		"\xEF\xEE\x03\x02\x02\x02\xF0)\x03\x02\x02\x02\xF1\xF2\x07*\x02\x02\xF2" +
		"+\x03\x02\x02\x02\xF3\xF6\x07;\x02\x02\xF4\xF6\x05.\x18\x02\xF5\xF3\x03" +
		"\x02\x02\x02\xF5\xF4\x03\x02\x02\x02\xF6-\x03\x02\x02\x02\xF7\xFB\x05" +
		"0\x19\x02\xF8\xFB\x07(\x02\x02\xF9\xFB\x07)\x02\x02\xFA\xF7\x03\x02\x02" +
		"\x02\xFA\xF8\x03\x02\x02\x02\xFA\xF9\x03\x02\x02\x02\xFB/\x03\x02\x02" +
		"\x02\xFC\xFD\t\b\x02\x02\xFD1\x03\x02\x02\x02\x163:>HW[g{\x7F\x83\x87" +
		"\x98\x9B\xA2\xB7\xE4\xE6\xEF\xF5\xFA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TysonParser.__ATN) {
			TysonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TysonParser._serializedATN));
		}

		return TysonParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(TysonParser.EOF, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_program; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_statementList; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitStatementList) {
			return visitor.visitStatementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode | undefined { return this.tryGetToken(TysonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode | undefined { return this.tryGetToken(TysonParser.CloseBrace, 0); }
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	public variableStatement(): VariableStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public iterationStatement(): IterationStatementContext | undefined {
		return this.tryGetRuleContext(0, IterationStatementContext);
	}
	public continueStatement(): ContinueStatementContext | undefined {
		return this.tryGetRuleContext(0, ContinueStatementContext);
	}
	public breakStatement(): BreakStatementContext | undefined {
		return this.tryGetRuleContext(0, BreakStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_statement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatementContext extends ParserRuleContext {
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_emptyStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterEmptyStatement) {
			listener.enterEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitEmptyStatement) {
			listener.exitEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement) {
			return visitor.visitEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStatementContext extends ParserRuleContext {
	public variableDeclarationList(): VariableDeclarationListContext {
		return this.getRuleContext(0, VariableDeclarationListContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_variableStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterVariableStatement) {
			listener.enterVariableStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitVariableStatement) {
			listener.exitVariableStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitVariableStatement) {
			return visitor.visitVariableStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationListContext extends ParserRuleContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_variableDeclarationList; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterVariableDeclarationList) {
			listener.enterVariableDeclarationList(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitVariableDeclarationList) {
			listener.exitVariableDeclarationList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationList) {
			return visitor.visitVariableDeclarationList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarModifierContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Var, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Let, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Const, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_varModifier; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterVarModifier) {
			listener.enterVarModifier(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitVarModifier) {
			listener.exitVarModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitVarModifier) {
			return visitor.visitVarModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public assignable(): AssignableContext {
		return this.getRuleContext(0, AssignableContext);
	}
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Assign, 0); }
	public singleExpression(): SingleExpressionContext | undefined {
		return this.tryGetRuleContext(0, SingleExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Identifier, 0); }
	public arrayLiteral(): ArrayLiteralContext | undefined {
		return this.tryGetRuleContext(0, ArrayLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_assignable; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterAssignable) {
			listener.enterAssignable(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitAssignable) {
			listener.exitAssignable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitAssignable) {
			return visitor.visitAssignable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(TysonParser.If, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TysonParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Else, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IterationStatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_iterationStatement; }
	public copyFrom(ctx: IterationStatementContext): void {
		super.copyFrom(ctx);
	}
}
export class DoStatementContext extends IterationStatementContext {
	public Do(): TerminalNode { return this.getToken(TysonParser.Do, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public While(): TerminalNode { return this.getToken(TysonParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TysonParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends IterationStatementContext {
	public While(): TerminalNode { return this.getToken(TysonParser.While, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TysonParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends IterationStatementContext {
	public For(): TerminalNode { return this.getToken(TysonParser.For, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TysonParser.OpenParen, 0); }
	public SemiColon(): TerminalNode[];
	public SemiColon(i: number): TerminalNode;
	public SemiColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TysonParser.SemiColon);
		} else {
			return this.getToken(TysonParser.SemiColon, i);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public expressionSequence(): ExpressionSequenceContext[];
	public expressionSequence(i: number): ExpressionSequenceContext;
	public expressionSequence(i?: number): ExpressionSequenceContext | ExpressionSequenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionSequenceContext);
		} else {
			return this.getRuleContext(i, ExpressionSequenceContext);
		}
	}
	public variableDeclarationList(): VariableDeclarationListContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationListContext);
	}
	constructor(ctx: IterationStatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContinueStatementContext extends ParserRuleContext {
	public Continue(): TerminalNode { return this.getToken(TysonParser.Continue, 0); }
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_continueStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BreakStatementContext extends ParserRuleContext {
	public Break(): TerminalNode { return this.getToken(TysonParser.Break, 0); }
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_breakStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayLiteralContext extends ParserRuleContext {
	public OpenBracket(): TerminalNode | undefined { return this.tryGetToken(TysonParser.OpenBracket, 0); }
	public elementList(): ElementListContext | undefined {
		return this.tryGetRuleContext(0, ElementListContext);
	}
	public CloseBracket(): TerminalNode | undefined { return this.tryGetToken(TysonParser.CloseBracket, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_arrayLiteral; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterArrayLiteral) {
			listener.enterArrayLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitArrayLiteral) {
			listener.exitArrayLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteral) {
			return visitor.visitArrayLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementListContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TysonParser.Comma);
		} else {
			return this.getToken(TysonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_elementList; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterElementList) {
			listener.enterElementList(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitElementList) {
			listener.exitElementList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitElementList) {
			return visitor.visitElementList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionSequenceContext extends ParserRuleContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TysonParser.Comma);
		} else {
			return this.getToken(TysonParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_expressionSequence; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SingleExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_singleExpression; }
	public copyFrom(ctx: SingleExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class MemberIndexExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public OpenBracket(): TerminalNode { return this.getToken(TysonParser.OpenBracket, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseBracket(): TerminalNode { return this.getToken(TysonParser.CloseBracket, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterMemberIndexExpression) {
			listener.enterMemberIndexExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitMemberIndexExpression) {
			listener.exitMemberIndexExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitMemberIndexExpression) {
			return visitor.visitMemberIndexExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostIncrementExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public PlusPlus(): TerminalNode { return this.getToken(TysonParser.PlusPlus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterPostIncrementExpression) {
			listener.enterPostIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitPostIncrementExpression) {
			listener.exitPostIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitPostIncrementExpression) {
			return visitor.visitPostIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PostDecreaseExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	public MinusMinus(): TerminalNode { return this.getToken(TysonParser.MinusMinus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterPostDecreaseExpression) {
			listener.enterPostDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitPostDecreaseExpression) {
			listener.exitPostDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitPostDecreaseExpression) {
			return visitor.visitPostDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreIncrementExpressionContext extends SingleExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(TysonParser.PlusPlus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterPreIncrementExpression) {
			listener.enterPreIncrementExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitPreIncrementExpression) {
			listener.exitPreIncrementExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitPreIncrementExpression) {
			return visitor.visitPreIncrementExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreDecreaseExpressionContext extends SingleExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(TysonParser.MinusMinus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterPreDecreaseExpression) {
			listener.enterPreDecreaseExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitPreDecreaseExpression) {
			listener.exitPreDecreaseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitPreDecreaseExpression) {
			return visitor.visitPreDecreaseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryPlusExpressionContext extends SingleExpressionContext {
	public Plus(): TerminalNode { return this.getToken(TysonParser.Plus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterUnaryPlusExpression) {
			listener.enterUnaryPlusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitUnaryPlusExpression) {
			listener.exitUnaryPlusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitUnaryPlusExpression) {
			return visitor.visitUnaryPlusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryMinusExpressionContext extends SingleExpressionContext {
	public Minus(): TerminalNode { return this.getToken(TysonParser.Minus, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends SingleExpressionContext {
	public Not(): TerminalNode { return this.getToken(TysonParser.Not, 0); }
	public singleExpression(): SingleExpressionContext {
		return this.getRuleContext(0, SingleExpressionContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitNotExpression) {
			return visitor.visitNotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PowerExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Power(): TerminalNode { return this.getToken(TysonParser.Power, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Modulus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterMultiplicativeExpression) {
			listener.enterMultiplicativeExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitMultiplicativeExpression) {
			listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Minus, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterAdditiveExpression) {
			listener.enterAdditiveExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitAdditiveExpression) {
			listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelationalExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(TysonParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(TysonParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.GreaterThanEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterRelationalExpression) {
			listener.enterRelationalExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitRelationalExpression) {
			listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqualityExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.NotEquals, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterEqualityExpression) {
			listener.enterEqualityExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitEqualityExpression) {
			listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(TysonParser.And, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterLogicalAndExpression) {
			listener.enterLogicalAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitLogicalAndExpression) {
			listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(TysonParser.Or, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterLogicalOrExpression) {
			listener.enterLogicalOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitLogicalOrExpression) {
			listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public QuestionMark(): TerminalNode { return this.getToken(TysonParser.QuestionMark, 0); }
	public Colon(): TerminalNode { return this.getToken(TysonParser.Colon, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public Assign(): TerminalNode { return this.getToken(TysonParser.Assign, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterAssignmentExpression) {
			listener.enterAssignmentExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitAssignmentExpression) {
			listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentOperatorExpressionContext extends SingleExpressionContext {
	public singleExpression(): SingleExpressionContext[];
	public singleExpression(i: number): SingleExpressionContext;
	public singleExpression(i?: number): SingleExpressionContext | SingleExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SingleExpressionContext);
		} else {
			return this.getRuleContext(i, SingleExpressionContext);
		}
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterAssignmentOperatorExpression) {
			listener.enterAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitAssignmentOperatorExpression) {
			listener.exitAssignmentOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperatorExpression) {
			return visitor.visitAssignmentOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends SingleExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExpressionContext extends SingleExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ArrayLiteralExpressionContext extends SingleExpressionContext {
	public arrayLiteral(): ArrayLiteralContext {
		return this.getRuleContext(0, ArrayLiteralContext);
	}
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterArrayLiteralExpression) {
			listener.enterArrayLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitArrayLiteralExpression) {
			listener.exitArrayLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitArrayLiteralExpression) {
			return visitor.visitArrayLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesizedExpressionContext extends SingleExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(TysonParser.OpenParen, 0); }
	public expressionSequence(): ExpressionSequenceContext {
		return this.getRuleContext(0, ExpressionSequenceContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	constructor(ctx: SingleExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterParenthesizedExpression) {
			listener.enterParenthesizedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitParenthesizedExpression) {
			listener.exitParenthesizedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitParenthesizedExpression) {
			return visitor.visitParenthesizedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public MultiplyAssign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.MultiplyAssign, 0); }
	public DivideAssign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.DivideAssign, 0); }
	public ModulusAssign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.ModulusAssign, 0); }
	public PlusAssign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.PlusAssign, 0); }
	public MinusAssign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.MinusAssign, 0); }
	public PowerAssign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.PowerAssign, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_assignmentOperator; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterAssignmentOperator) {
			listener.enterAssignmentOperator(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitAssignmentOperator) {
			listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TysonParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TysonParser.BooleanLiteral, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(TysonParser.StringLiteral, 0); }
	public numericLiteral(): NumericLiteralContext | undefined {
		return this.tryGetRuleContext(0, NumericLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_literal; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericLiteralContext extends ParserRuleContext {
	public DecimalLiteral(): TerminalNode { return this.getToken(TysonParser.DecimalLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_numericLiteral; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterNumericLiteral) {
			listener.enterNumericLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitNumericLiteral) {
			listener.exitNumericLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitNumericLiteral) {
			return visitor.visitNumericLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierNameContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Identifier, 0); }
	public reservedWord(): ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_identifierName; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterIdentifierName) {
			listener.enterIdentifierName(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitIdentifierName) {
			listener.exitIdentifierName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitIdentifierName) {
			return visitor.visitIdentifierName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReservedWordContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public NullLiteral(): TerminalNode | undefined { return this.tryGetToken(TysonParser.NullLiteral, 0); }
	public BooleanLiteral(): TerminalNode | undefined { return this.tryGetToken(TysonParser.BooleanLiteral, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_reservedWord; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterReservedWord) {
			listener.enterReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitReservedWord) {
			listener.exitReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitReservedWord) {
			return visitor.visitReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public Var(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Var, 0); }
	public Let(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Let, 0); }
	public Const(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Const, 0); }
	public If(): TerminalNode | undefined { return this.tryGetToken(TysonParser.If, 0); }
	public Else(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Else, 0); }
	public For(): TerminalNode | undefined { return this.tryGetToken(TysonParser.For, 0); }
	public Do(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Do, 0); }
	public While(): TerminalNode | undefined { return this.tryGetToken(TysonParser.While, 0); }
	public Break(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Break, 0); }
	public Continue(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Continue, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_keyword; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
