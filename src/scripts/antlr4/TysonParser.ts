// Generated from src/scripts/antlr4/TysonParser.g4 by ANTLR 4.7.3-SNAPSHOT


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
	public static readonly OpenParen = 3;
	public static readonly CloseParen = 4;
	public static readonly OpenBrace = 5;
	public static readonly CloseBrace = 6;
	public static readonly SemiColon = 7;
	public static readonly Comma = 8;
	public static readonly Assign = 9;
	public static readonly Colon = 10;
	public static readonly Dot = 11;
	public static readonly PlusPlus = 12;
	public static readonly MinusMinus = 13;
	public static readonly Plus = 14;
	public static readonly Minus = 15;
	public static readonly Not = 16;
	public static readonly Multiply = 17;
	public static readonly Divide = 18;
	public static readonly Modulus = 19;
	public static readonly LessThan = 20;
	public static readonly MoreThan = 21;
	public static readonly LessThanEquals = 22;
	public static readonly GreaterThanEquals = 23;
	public static readonly Equals = 24;
	public static readonly NotEquals = 25;
	public static readonly Power = 26;
	public static readonly And = 27;
	public static readonly Or = 28;
	public static readonly MultiplyAssign = 29;
	public static readonly DivideAssign = 30;
	public static readonly ModulusAssign = 31;
	public static readonly PlusAssign = 32;
	public static readonly MinusAssign = 33;
	public static readonly PowerAssign = 34;
	public static readonly NullLiteral = 35;
	public static readonly BooleanLiteral = 36;
	public static readonly DecimalLiteral = 37;
	public static readonly If = 38;
	public static readonly Else = 39;
	public static readonly For = 40;
	public static readonly Do = 41;
	public static readonly While = 42;
	public static readonly Continue = 43;
	public static readonly Break = 44;
	public static readonly Log = 45;
	public static readonly Var = 46;
	public static readonly Let = 47;
	public static readonly Const = 48;
	public static readonly Identifier = 49;
	public static readonly StringLiteral = 50;
	public static readonly WhiteSpaces = 51;
	public static readonly LineTerminator = 52;
	public static readonly UnexpectedCharacter = 53;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_bracketStatement = 2;
	public static readonly RULE_logStatement = 3;
	public static readonly RULE_emptyStatement = 4;
	public static readonly RULE_variableDeclarationStatement = 5;
	public static readonly RULE_variableDeclaration = 6;
	public static readonly RULE_varModifier = 7;
	public static readonly RULE_assignmentStatement = 8;
	public static readonly RULE_assignment = 9;
	public static readonly RULE_assignmentOperator = 10;
	public static readonly RULE_expressionStatement = 11;
	public static readonly RULE_ifStatement = 12;
	public static readonly RULE_iterationStatement = 13;
	public static readonly RULE_continueStatement = 14;
	public static readonly RULE_breakStatement = 15;
	public static readonly RULE_expression = 16;
	public static readonly RULE_literal = 17;
	public static readonly RULE_numericLiteral = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "bracketStatement", "logStatement", "emptyStatement", 
		"variableDeclarationStatement", "variableDeclaration", "varModifier", 
		"assignmentStatement", "assignment", "assignmentOperator", "expressionStatement", 
		"ifStatement", "iterationStatement", "continueStatement", "breakStatement", 
		"expression", "literal", "numericLiteral",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'('", "')'", "'{'", "'}'", "';'", "','", 
		"'='", "':'", "'.'", "'++'", "'--'", "'+'", "'-'", "'!'", "'*'", "'/'", 
		"'%'", "'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'^'", "'&&'", "'||'", 
		"'*='", "'/='", "'%='", "'+='", "'-='", "'^='", "'null'", undefined, undefined, 
		"'if'", "'else'", "'for'", "'do'", "'while'", "'continue'", "'break'", 
		"'log'", "'var'", "'let'", "'const'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "MultiLineComment", "SingleLineComment", "OpenParen", "CloseParen", 
		"OpenBrace", "CloseBrace", "SemiColon", "Comma", "Assign", "Colon", "Dot", 
		"PlusPlus", "MinusMinus", "Plus", "Minus", "Not", "Multiply", "Divide", 
		"Modulus", "LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", 
		"Equals", "NotEquals", "Power", "And", "Or", "MultiplyAssign", "DivideAssign", 
		"ModulusAssign", "PlusAssign", "MinusAssign", "PowerAssign", "NullLiteral", 
		"BooleanLiteral", "DecimalLiteral", "If", "Else", "For", "Do", "While", 
		"Continue", "Break", "Log", "Var", "Let", "Const", "Identifier", "StringLiteral", 
		"WhiteSpaces", "LineTerminator", "UnexpectedCharacter",
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
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenParen) | (1 << TysonParser.OpenBrace) | (1 << TysonParser.SemiColon) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (TysonParser.NullLiteral - 35)) | (1 << (TysonParser.BooleanLiteral - 35)) | (1 << (TysonParser.DecimalLiteral - 35)) | (1 << (TysonParser.If - 35)) | (1 << (TysonParser.For - 35)) | (1 << (TysonParser.Do - 35)) | (1 << (TysonParser.While - 35)) | (1 << (TysonParser.Continue - 35)) | (1 << (TysonParser.Break - 35)) | (1 << (TysonParser.Log - 35)) | (1 << (TysonParser.Var - 35)) | (1 << (TysonParser.Let - 35)) | (1 << (TysonParser.Const - 35)) | (1 << (TysonParser.Identifier - 35)) | (1 << (TysonParser.StringLiteral - 35)))) !== 0)) {
				{
				{
				this.state = 38;
				this.statement();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TysonParser.RULE_statement);
		try {
			this.state = 56;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.bracketStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.variableDeclarationStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.assignmentStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.expressionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 50;
				this.ifStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 51;
				this.iterationStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 52;
				this.continueStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 53;
				this.breakStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 54;
				this.logStatement();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 55;
				this.emptyStatement();
				}
				break;
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
	public bracketStatement(): BracketStatementContext {
		let _localctx: BracketStatementContext = new BracketStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TysonParser.RULE_bracketStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 58;
			this.match(TysonParser.OpenBrace);
			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.OpenParen) | (1 << TysonParser.OpenBrace) | (1 << TysonParser.SemiColon) | (1 << TysonParser.PlusPlus) | (1 << TysonParser.MinusMinus) | (1 << TysonParser.Plus) | (1 << TysonParser.Minus) | (1 << TysonParser.Not))) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & ((1 << (TysonParser.NullLiteral - 35)) | (1 << (TysonParser.BooleanLiteral - 35)) | (1 << (TysonParser.DecimalLiteral - 35)) | (1 << (TysonParser.If - 35)) | (1 << (TysonParser.For - 35)) | (1 << (TysonParser.Do - 35)) | (1 << (TysonParser.While - 35)) | (1 << (TysonParser.Continue - 35)) | (1 << (TysonParser.Break - 35)) | (1 << (TysonParser.Log - 35)) | (1 << (TysonParser.Var - 35)) | (1 << (TysonParser.Let - 35)) | (1 << (TysonParser.Const - 35)) | (1 << (TysonParser.Identifier - 35)) | (1 << (TysonParser.StringLiteral - 35)))) !== 0)) {
				{
				{
				this.state = 59;
				this.statement();
				}
				}
				this.state = 64;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 65;
			this.match(TysonParser.CloseBrace);
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
	public logStatement(): LogStatementContext {
		let _localctx: LogStatementContext = new LogStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TysonParser.RULE_logStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(TysonParser.Log);
			this.state = 68;
			this.match(TysonParser.OpenParen);
			this.state = 69;
			this.expression(0);
			this.state = 70;
			this.match(TysonParser.CloseParen);
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
		this.enterRule(_localctx, 8, TysonParser.RULE_emptyStatement);
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
	public variableDeclarationStatement(): VariableDeclarationStatementContext {
		let _localctx: VariableDeclarationStatementContext = new VariableDeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TysonParser.RULE_variableDeclarationStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.variableDeclaration();
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
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TysonParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.varModifier();
			this.state = 78;
			this.match(TysonParser.Identifier);
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TysonParser.Assign) {
				{
				this.state = 79;
				this.match(TysonParser.Assign);
				this.state = 80;
				this.expression(0);
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
	public varModifier(): VarModifierContext {
		let _localctx: VarModifierContext = new VarModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TysonParser.RULE_varModifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 83;
			_la = this._input.LA(1);
			if (!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (TysonParser.Var - 46)) | (1 << (TysonParser.Let - 46)) | (1 << (TysonParser.Const - 46)))) !== 0))) {
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
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TysonParser.RULE_assignmentStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.assignment();
			this.state = 86;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TysonParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(TysonParser.Identifier);
			this.state = 89;
			this.assignmentOperator();
			this.state = 90;
			this.expression(0);
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
	public assignmentOperator(): AssignmentOperatorContext {
		let _localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TysonParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			_la = this._input.LA(1);
			if (!(((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & ((1 << (TysonParser.Assign - 9)) | (1 << (TysonParser.MultiplyAssign - 9)) | (1 << (TysonParser.DivideAssign - 9)) | (1 << (TysonParser.ModulusAssign - 9)) | (1 << (TysonParser.PlusAssign - 9)) | (1 << (TysonParser.MinusAssign - 9)) | (1 << (TysonParser.PowerAssign - 9)))) !== 0))) {
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
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TysonParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 94;
			this.expression(0);
			this.state = 95;
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
		this.enterRule(_localctx, 24, TysonParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(TysonParser.If);
			this.state = 98;
			this.match(TysonParser.OpenParen);
			this.state = 99;
			this.expression(0);
			this.state = 100;
			this.match(TysonParser.CloseParen);
			this.state = 101;
			this.statement();
			this.state = 104;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 102;
				this.match(TysonParser.Else);
				this.state = 103;
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
		this.enterRule(_localctx, 26, TysonParser.RULE_iterationStatement);
		let _la: number;
		try {
			this.state = 135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.Do:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 106;
				this.match(TysonParser.Do);
				this.state = 107;
				this.statement();
				this.state = 108;
				this.match(TysonParser.While);
				this.state = 109;
				this.match(TysonParser.OpenParen);
				this.state = 110;
				this.expression(0);
				this.state = 111;
				this.match(TysonParser.CloseParen);
				this.state = 112;
				this.match(TysonParser.SemiColon);
				}
				break;
			case TysonParser.While:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 114;
				this.match(TysonParser.While);
				this.state = 115;
				this.match(TysonParser.OpenParen);
				this.state = 116;
				this.expression(0);
				this.state = 117;
				this.match(TysonParser.CloseParen);
				this.state = 118;
				this.statement();
				}
				break;
			case TysonParser.For:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 120;
				this.match(TysonParser.For);
				this.state = 121;
				this.match(TysonParser.OpenParen);
				this.state = 123;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & ((1 << (TysonParser.Var - 46)) | (1 << (TysonParser.Let - 46)) | (1 << (TysonParser.Const - 46)))) !== 0)) {
					{
					this.state = 122;
					this.variableDeclaration();
					}
				}

				this.state = 125;
				this.match(TysonParser.SemiColon);
				this.state = 126;
				this.expression(0);
				this.state = 127;
				this.match(TysonParser.SemiColon);
				this.state = 130;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 128;
					this.assignment();
					}
					break;

				case 2:
					{
					this.state = 129;
					this.expression(0);
					}
					break;
				}
				this.state = 132;
				this.match(TysonParser.CloseParen);
				this.state = 133;
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
		this.enterRule(_localctx, 28, TysonParser.RULE_continueStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			this.match(TysonParser.Continue);
			this.state = 138;
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
		this.enterRule(_localctx, 30, TysonParser.RULE_breakStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(TysonParser.Break);
			this.state = 141;
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 32;
		this.enterRecursionRule(_localctx, 32, TysonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 144;
				this.match(TysonParser.Identifier);
				}
				break;

			case 2:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.match(TysonParser.OpenParen);
				this.state = 147;
				this.expression(0);
				this.state = 148;
				this.match(TysonParser.CloseParen);
				}
				break;

			case 4:
				{
				_localctx = new PostIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.match(TysonParser.Identifier);
				this.state = 151;
				this.match(TysonParser.PlusPlus);
				}
				break;

			case 5:
				{
				_localctx = new PostDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 152;
				this.match(TysonParser.Identifier);
				this.state = 153;
				this.match(TysonParser.MinusMinus);
				}
				break;

			case 6:
				{
				_localctx = new PreIncrementExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 154;
				this.match(TysonParser.PlusPlus);
				this.state = 155;
				this.match(TysonParser.Identifier);
				}
				break;

			case 7:
				{
				_localctx = new PreDecreaseExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 156;
				this.match(TysonParser.MinusMinus);
				this.state = 157;
				this.match(TysonParser.Identifier);
				}
				break;

			case 8:
				{
				_localctx = new UnaryPlusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 158;
				this.match(TysonParser.Plus);
				this.state = 159;
				this.expression(10);
				}
				break;

			case 9:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 160;
				this.match(TysonParser.Minus);
				this.state = 161;
				this.expression(9);
				}
				break;

			case 10:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(TysonParser.Not);
				this.state = 163;
				this.expression(8);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 189;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 187;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 166;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 167;
						this.match(TysonParser.Power);
						this.state = 168;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new MultiplicativeExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 169;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 170;
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
						this.state = 171;
						this.expression(7);
						}
						break;

					case 3:
						{
						_localctx = new AdditiveExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 172;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 173;
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
						this.state = 174;
						this.expression(6);
						}
						break;

					case 4:
						{
						_localctx = new RelationalExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 175;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 176;
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
						this.state = 177;
						this.expression(5);
						}
						break;

					case 5:
						{
						_localctx = new EqualityExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 178;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 179;
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
						this.state = 180;
						this.expression(4);
						}
						break;

					case 6:
						{
						_localctx = new LogicalAndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 181;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 182;
						this.match(TysonParser.And);
						this.state = 183;
						this.expression(3);
						}
						break;

					case 7:
						{
						_localctx = new LogicalOrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 184;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 185;
						this.match(TysonParser.Or);
						this.state = 186;
						this.expression(1);
						}
						break;
					}
					}
				}
				this.state = 191;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TysonParser.RULE_literal);
		try {
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TysonParser.NullLiteral:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 192;
				this.match(TysonParser.NullLiteral);
				}
				break;
			case TysonParser.BooleanLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 193;
				this.match(TysonParser.BooleanLiteral);
				}
				break;
			case TysonParser.StringLiteral:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 194;
				this.match(TysonParser.StringLiteral);
				}
				break;
			case TysonParser.DecimalLiteral:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 195;
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
		this.enterRule(_localctx, 36, TysonParser.RULE_numericLiteral);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 198;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 16:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);

		case 1:
			return this.precpred(this._ctx, 6);

		case 2:
			return this.precpred(this._ctx, 5);

		case 3:
			return this.precpred(this._ctx, 4);

		case 4:
			return this.precpred(this._ctx, 3);

		case 5:
			return this.precpred(this._ctx, 2);

		case 6:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x037\xCB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03;\n\x03\x03\x04\x03\x04\x07\x04?\n\x04\f\x04" +
		"\x0E\x04B\v\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\b" +
		"T\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03" +
		"\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x05\x0Ek\n\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x05\x0F~\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05" +
		"\x0F\x85\n\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\x8A\n\x0F\x03\x10\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xA7\n" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x07\x12\xBE\n\x12\f\x12\x0E\x12\xC1\v\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\xC7\n\x13\x03\x14\x03\x14\x03" +
		"\x14\x02\x02\x03\"\x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02\x02\b\x03\x0202\x04\x02\v\v\x1F$\x03\x02\x13\x15\x03" +
		"\x02\x10\x11\x03\x02\x16\x19\x03\x02\x1A\x1B\x02\xDC\x02+\x03\x02\x02" +
		"\x02\x04:\x03\x02\x02\x02\x06<\x03\x02\x02\x02\bE\x03\x02\x02\x02\nJ\x03" +
		"\x02\x02\x02\fL\x03\x02\x02\x02\x0EO\x03\x02\x02\x02\x10U\x03\x02\x02" +
		"\x02\x12W\x03\x02\x02\x02\x14Z\x03\x02\x02\x02\x16^\x03\x02\x02\x02\x18" +
		"`\x03\x02\x02\x02\x1Ac\x03\x02\x02\x02\x1C\x89\x03\x02\x02\x02\x1E\x8B" +
		"\x03\x02\x02\x02 \x8E\x03\x02\x02\x02\"\xA6\x03\x02\x02\x02$\xC6\x03\x02" +
		"\x02\x02&\xC8\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02\x02*-\x03" +
		"\x02\x02\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03" +
		"\x02\x02\x02./\x07\x02\x02\x03/\x03\x03\x02\x02\x020;\x05\x06\x04\x02" +
		"1;\x05\f\x07\x022;\x05\x12\n\x023;\x05\x18\r\x024;\x05\x1A\x0E\x025;\x05" +
		"\x1C\x0F\x026;\x05\x1E\x10\x027;\x05 \x11\x028;\x05\b\x05\x029;\x05\n" +
		"\x06\x02:0\x03\x02\x02\x02:1\x03\x02\x02\x02:2\x03\x02\x02\x02:3\x03\x02" +
		"\x02\x02:4\x03\x02\x02\x02:5\x03\x02\x02\x02:6\x03\x02\x02\x02:7\x03\x02" +
		"\x02\x02:8\x03\x02\x02\x02:9\x03\x02\x02\x02;\x05\x03\x02\x02\x02<@\x07" +
		"\x07\x02\x02=?\x05\x04\x03\x02>=\x03\x02\x02\x02?B\x03\x02\x02\x02@>\x03" +
		"\x02\x02\x02@A\x03\x02\x02\x02AC\x03\x02\x02\x02B@\x03\x02\x02\x02CD\x07" +
		"\b\x02\x02D\x07\x03\x02\x02\x02EF\x07/\x02\x02FG\x07\x05\x02\x02GH\x05" +
		"\"\x12\x02HI\x07\x06\x02\x02I\t\x03\x02\x02\x02JK\x07\t\x02\x02K\v\x03" +
		"\x02\x02\x02LM\x05\x0E\b\x02MN\x07\t\x02\x02N\r\x03\x02\x02\x02OP\x05" +
		"\x10\t\x02PS\x073\x02\x02QR\x07\v\x02\x02RT\x05\"\x12\x02SQ\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02T\x0F\x03\x02\x02\x02UV\t\x02\x02\x02V\x11\x03\x02" +
		"\x02\x02WX\x05\x14\v\x02XY\x07\t\x02\x02Y\x13\x03\x02\x02\x02Z[\x073\x02" +
		"\x02[\\\x05\x16\f\x02\\]\x05\"\x12\x02]\x15\x03\x02\x02\x02^_\t\x03\x02" +
		"\x02_\x17\x03\x02\x02\x02`a\x05\"\x12\x02ab\x07\t\x02\x02b\x19\x03\x02" +
		"\x02\x02cd\x07(\x02\x02de\x07\x05\x02\x02ef\x05\"\x12\x02fg\x07\x06\x02" +
		"\x02gj\x05\x04\x03\x02hi\x07)\x02\x02ik\x05\x04\x03\x02jh\x03\x02\x02" +
		"\x02jk\x03\x02\x02\x02k\x1B\x03\x02\x02\x02lm\x07+\x02\x02mn\x05\x04\x03" +
		"\x02no\x07,\x02\x02op\x07\x05\x02\x02pq\x05\"\x12\x02qr\x07\x06\x02\x02" +
		"rs\x07\t\x02\x02s\x8A\x03\x02\x02\x02tu\x07,\x02\x02uv\x07\x05\x02\x02" +
		"vw\x05\"\x12\x02wx\x07\x06\x02\x02xy\x05\x04\x03\x02y\x8A\x03\x02\x02" +
		"\x02z{\x07*\x02\x02{}\x07\x05\x02\x02|~\x05\x0E\b\x02}|\x03\x02\x02\x02" +
		"}~\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x80\x07\t\x02\x02\x80\x81" +
		"\x05\"\x12\x02\x81\x84\x07\t\x02\x02\x82\x85\x05\x14\v\x02\x83\x85\x05" +
		"\"\x12\x02\x84\x82\x03\x02\x02\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03" +
		"\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x07\x06\x02\x02\x87\x88\x05" +
		"\x04\x03\x02\x88\x8A\x03\x02\x02\x02\x89l\x03\x02\x02\x02\x89t\x03\x02" +
		"\x02\x02\x89z\x03\x02\x02\x02\x8A\x1D\x03\x02\x02\x02\x8B\x8C\x07-\x02" +
		"\x02\x8C\x8D\x07\t\x02\x02\x8D\x1F\x03\x02\x02\x02\x8E\x8F\x07.\x02\x02" +
		"\x8F\x90\x07\t\x02\x02\x90!\x03\x02\x02\x02\x91\x92\b\x12\x01\x02\x92" +
		"\xA7\x073\x02\x02\x93\xA7\x05$\x13\x02\x94\x95\x07\x05\x02\x02\x95\x96" +
		"\x05\"\x12\x02\x96\x97\x07\x06\x02\x02\x97\xA7\x03\x02\x02\x02\x98\x99" +
		"\x073\x02\x02\x99\xA7\x07\x0E\x02\x02\x9A\x9B\x073\x02\x02\x9B\xA7\x07" +
		"\x0F\x02\x02\x9C\x9D\x07\x0E\x02\x02\x9D\xA7\x073\x02\x02\x9E\x9F\x07" +
		"\x0F\x02\x02\x9F\xA7\x073\x02\x02\xA0\xA1\x07\x10\x02\x02\xA1\xA7\x05" +
		"\"\x12\f\xA2\xA3\x07\x11\x02\x02\xA3\xA7\x05\"\x12\v\xA4\xA5\x07\x12\x02" +
		"\x02\xA5\xA7\x05\"\x12\n\xA6\x91\x03\x02\x02\x02\xA6\x93\x03\x02\x02\x02" +
		"\xA6\x94\x03\x02\x02\x02\xA6\x98\x03\x02\x02\x02\xA6\x9A\x03\x02\x02\x02" +
		"\xA6\x9C\x03\x02\x02\x02\xA6\x9E\x03\x02\x02\x02\xA6\xA0\x03\x02\x02\x02" +
		"\xA6\xA2\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02\xA7\xBF\x03\x02\x02\x02" +
		"\xA8\xA9\f\t\x02\x02\xA9\xAA\x07\x1C\x02\x02\xAA\xBE\x05\"\x12\t\xAB\xAC" +
		"\f\b\x02\x02\xAC\xAD\t\x04\x02\x02\xAD\xBE\x05\"\x12\t\xAE\xAF\f\x07\x02" +
		"\x02\xAF\xB0\t\x05\x02\x02\xB0\xBE\x05\"\x12\b\xB1\xB2\f\x06\x02\x02\xB2" +
		"\xB3\t\x06\x02\x02\xB3\xBE\x05\"\x12\x07\xB4\xB5\f\x05\x02\x02\xB5\xB6" +
		"\t\x07\x02\x02\xB6\xBE\x05\"\x12\x06\xB7\xB8\f\x04\x02\x02\xB8\xB9\x07" +
		"\x1D\x02\x02\xB9\xBE\x05\"\x12\x05\xBA\xBB\f\x03\x02\x02\xBB\xBC\x07\x1E" +
		"\x02\x02\xBC\xBE\x05\"\x12\x03\xBD\xA8\x03\x02\x02\x02\xBD\xAB\x03\x02" +
		"\x02\x02\xBD\xAE\x03\x02\x02\x02\xBD\xB1\x03\x02\x02\x02\xBD\xB4\x03\x02" +
		"\x02\x02\xBD\xB7\x03\x02\x02\x02\xBD\xBA\x03\x02\x02\x02\xBE\xC1\x03\x02" +
		"\x02\x02\xBF\xBD\x03\x02\x02\x02\xBF\xC0\x03\x02\x02\x02\xC0#\x03\x02" +
		"\x02\x02\xC1\xBF\x03\x02\x02\x02\xC2\xC7\x07%\x02\x02\xC3\xC7\x07&\x02" +
		"\x02\xC4\xC7\x074\x02\x02\xC5\xC7\x05&\x14\x02\xC6\xC2\x03\x02\x02\x02" +
		"\xC6\xC3\x03\x02\x02\x02\xC6\xC4\x03\x02\x02\x02\xC6\xC5\x03\x02\x02\x02" +
		"\xC7%\x03\x02\x02\x02\xC8\xC9\x07\'\x02\x02\xC9\'\x03\x02\x02\x02\x0E" +
		"+:@Sj}\x84\x89\xA6\xBD\xBF\xC6";
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


export class StatementContext extends ParserRuleContext {
	public bracketStatement(): BracketStatementContext | undefined {
		return this.tryGetRuleContext(0, BracketStatementContext);
	}
	public variableDeclarationStatement(): VariableDeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationStatementContext);
	}
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
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
	public logStatement(): LogStatementContext | undefined {
		return this.tryGetRuleContext(0, LogStatementContext);
	}
	public emptyStatement(): EmptyStatementContext | undefined {
		return this.tryGetRuleContext(0, EmptyStatementContext);
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


export class BracketStatementContext extends ParserRuleContext {
	public OpenBrace(): TerminalNode { return this.getToken(TysonParser.OpenBrace, 0); }
	public CloseBrace(): TerminalNode { return this.getToken(TysonParser.CloseBrace, 0); }
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
	public get ruleIndex(): number { return TysonParser.RULE_bracketStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterBracketStatement) {
			listener.enterBracketStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitBracketStatement) {
			listener.exitBracketStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitBracketStatement) {
			return visitor.visitBracketStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogStatementContext extends ParserRuleContext {
	public Log(): TerminalNode { return this.getToken(TysonParser.Log, 0); }
	public OpenParen(): TerminalNode { return this.getToken(TysonParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_logStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterLogStatement) {
			listener.enterLogStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitLogStatement) {
			listener.exitLogStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitLogStatement) {
			return visitor.visitLogStatement(this);
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


export class VariableDeclarationStatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_variableDeclarationStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterVariableDeclarationStatement) {
			listener.enterVariableDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitVariableDeclarationStatement) {
			listener.exitVariableDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitVariableDeclarationStatement) {
			return visitor.visitVariableDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public varModifier(): VarModifierContext {
		return this.getRuleContext(0, VarModifierContext);
	}
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Assign, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
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


export class AssignmentStatementContext extends ParserRuleContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	public SemiColon(): TerminalNode { return this.getToken(TysonParser.SemiColon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_assignmentStatement; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getRuleContext(0, AssignmentOperatorContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_assignment; }
	// @Override
	public enterRule(listener: TysonParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TysonParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentOperatorContext extends ParserRuleContext {
	public Assign(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Assign, 0); }
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


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
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
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
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


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
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
export class LiteralExpressionContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
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
export class ParenthesizedExpressionContext extends ExpressionContext {
	public OpenParen(): TerminalNode { return this.getToken(TysonParser.OpenParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CloseParen(): TerminalNode { return this.getToken(TysonParser.CloseParen, 0); }
	constructor(ctx: ExpressionContext) {
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
export class PostIncrementExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	public PlusPlus(): TerminalNode { return this.getToken(TysonParser.PlusPlus, 0); }
	constructor(ctx: ExpressionContext) {
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
export class PostDecreaseExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	public MinusMinus(): TerminalNode { return this.getToken(TysonParser.MinusMinus, 0); }
	constructor(ctx: ExpressionContext) {
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
export class PreIncrementExpressionContext extends ExpressionContext {
	public PlusPlus(): TerminalNode { return this.getToken(TysonParser.PlusPlus, 0); }
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
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
export class PreDecreaseExpressionContext extends ExpressionContext {
	public MinusMinus(): TerminalNode { return this.getToken(TysonParser.MinusMinus, 0); }
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	constructor(ctx: ExpressionContext) {
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
export class UnaryPlusExpressionContext extends ExpressionContext {
	public Plus(): TerminalNode { return this.getToken(TysonParser.Plus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
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
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Minus(): TerminalNode { return this.getToken(TysonParser.Minus, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
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
export class NotExpressionContext extends ExpressionContext {
	public Not(): TerminalNode { return this.getToken(TysonParser.Not, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
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
export class PowerExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Power(): TerminalNode { return this.getToken(TysonParser.Power, 0); }
	constructor(ctx: ExpressionContext) {
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
export class MultiplicativeExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Multiply(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Multiply, 0); }
	public Divide(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Divide, 0); }
	public Modulus(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Modulus, 0); }
	constructor(ctx: ExpressionContext) {
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
export class AdditiveExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Plus(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Plus, 0); }
	public Minus(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Minus, 0); }
	constructor(ctx: ExpressionContext) {
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
export class RelationalExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public LessThan(): TerminalNode | undefined { return this.tryGetToken(TysonParser.LessThan, 0); }
	public MoreThan(): TerminalNode | undefined { return this.tryGetToken(TysonParser.MoreThan, 0); }
	public LessThanEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.LessThanEquals, 0); }
	public GreaterThanEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.GreaterThanEquals, 0); }
	constructor(ctx: ExpressionContext) {
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
export class EqualityExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Equals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Equals, 0); }
	public NotEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.NotEquals, 0); }
	constructor(ctx: ExpressionContext) {
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
export class LogicalAndExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public And(): TerminalNode { return this.getToken(TysonParser.And, 0); }
	constructor(ctx: ExpressionContext) {
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
export class LogicalOrExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Or(): TerminalNode { return this.getToken(TysonParser.Or, 0); }
	constructor(ctx: ExpressionContext) {
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


