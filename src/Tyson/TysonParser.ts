// Generated from src/Tyson/Tyson.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { TysonListener } from "./TysonListener";
import { TysonVisitor } from "./TysonVisitor";


export class TysonParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly If = 6;
	public static readonly Else = 7;
	public static readonly Return = 8;
	public static readonly For = 9;
	public static readonly While = 10;
	public static readonly To = 11;
	public static readonly Do = 12;
	public static readonly In = 13;
	public static readonly Null = 14;
	public static readonly Or = 15;
	public static readonly And = 16;
	public static readonly Equals = 17;
	public static readonly NEquals = 18;
	public static readonly GTEquals = 19;
	public static readonly LTEquals = 20;
	public static readonly Pow = 21;
	public static readonly Excl = 22;
	public static readonly GT = 23;
	public static readonly LT = 24;
	public static readonly Add = 25;
	public static readonly Subtract = 26;
	public static readonly Multiply = 27;
	public static readonly Divide = 28;
	public static readonly Modulus = 29;
	public static readonly OBrace = 30;
	public static readonly CBrace = 31;
	public static readonly OBracket = 32;
	public static readonly CBracket = 33;
	public static readonly OParen = 34;
	public static readonly CParen = 35;
	public static readonly SColon = 36;
	public static readonly Assign = 37;
	public static readonly Comma = 38;
	public static readonly QMark = 39;
	public static readonly Colon = 40;
	public static readonly Bool = 41;
	public static readonly Number = 42;
	public static readonly Identifier = 43;
	public static readonly String = 44;
	public static readonly Comment = 45;
	public static readonly Space = 46;
	public static readonly RULE_prog = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_assignment = 2;
	public static readonly RULE_functionCall = 3;
	public static readonly RULE_ifStatement = 4;
	public static readonly RULE_ifStat = 5;
	public static readonly RULE_elseIfStat = 6;
	public static readonly RULE_elseStat = 7;
	public static readonly RULE_forStatement = 8;
	public static readonly RULE_whileStatement = 9;
	public static readonly RULE_exprList = 10;
	public static readonly RULE_expression = 11;
	public static readonly RULE_list = 12;
	public static readonly RULE_indexes = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "statement", "assignment", "functionCall", "ifStatement", "ifStat", 
		"elseIfStat", "elseStat", "forStatement", "whileStatement", "exprList", 
		"expression", "list", "indexes",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+='", "'-='", "'/='", "'*='", "'^='", "'if'", "'else'", "'return'", 
		"'for'", "'while'", "'to'", "'do'", "'in'", "'null'", "'||'", "'&&'", 
		"'=='", "'!='", "'>='", "'<='", "'^'", "'!'", "'>'", "'<'", "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'{'", "'}'", "'['", "']'", "'('", "')'", "';'", 
		"'='", "','", "'?'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "If", 
		"Else", "Return", "For", "While", "To", "Do", "In", "Null", "Or", "And", 
		"Equals", "NEquals", "GTEquals", "LTEquals", "Pow", "Excl", "GT", "LT", 
		"Add", "Subtract", "Multiply", "Divide", "Modulus", "OBrace", "CBrace", 
		"OBracket", "CBracket", "OParen", "CParen", "SColon", "Assign", "Comma", 
		"QMark", "Colon", "Bool", "Number", "Identifier", "String", "Comment", 
		"Space",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TysonParser._LITERAL_NAMES, TysonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TysonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Tyson.g4"; }

	// @Override
	public get ruleNames(): string[] { return TysonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TysonParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TysonParser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TysonParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.If) | (1 << TysonParser.Return) | (1 << TysonParser.For) | (1 << TysonParser.While) | (1 << TysonParser.OBrace))) !== 0) || _la === TysonParser.Identifier) {
				{
				{
				this.state = 28;
				this.statement();
				}
				}
				this.state = 33;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 34;
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
			this.state = 53;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.match(TysonParser.OBrace);
				this.state = 37;
				this.statement();
				this.state = 38;
				this.match(TysonParser.CBrace);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 40;
				this.assignment();
				this.state = 41;
				this.match(TysonParser.SColon);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.functionCall();
				this.state = 44;
				this.match(TysonParser.SColon);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 46;
				this.ifStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 47;
				this.forStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 48;
				this.whileStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 49;
				this.match(TysonParser.Return);
				this.state = 50;
				this.expression(0);
				this.state = 51;
				this.match(TysonParser.SColon);
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TysonParser.RULE_assignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(TysonParser.Identifier);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === TysonParser.OBracket) {
				{
				this.state = 56;
				this.indexes();
				}
			}

			this.state = 59;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.T__0) | (1 << TysonParser.T__1) | (1 << TysonParser.T__2) | (1 << TysonParser.T__3) | (1 << TysonParser.T__4))) !== 0) || _la === TysonParser.Assign)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 60;
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
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TysonParser.RULE_functionCall);
		let _la: number;
		try {
			_localctx = new IdentifierFunctionCallContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(TysonParser.Identifier);
			this.state = 63;
			this.match(TysonParser.OParen);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (TysonParser.Null - 14)) | (1 << (TysonParser.Excl - 14)) | (1 << (TysonParser.Subtract - 14)) | (1 << (TysonParser.OBracket - 14)) | (1 << (TysonParser.OParen - 14)) | (1 << (TysonParser.Bool - 14)) | (1 << (TysonParser.Number - 14)) | (1 << (TysonParser.Identifier - 14)) | (1 << (TysonParser.String - 14)))) !== 0)) {
				{
				this.state = 64;
				this.exprList();
				}
			}

			this.state = 67;
			this.match(TysonParser.CParen);
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
		this.enterRule(_localctx, 8, TysonParser.RULE_ifStatement);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.ifStat();
			this.state = 73;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 70;
					this.elseIfStat();
					}
					}
				}
				this.state = 75;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			}
			this.state = 77;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 76;
				this.elseStat();
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
	public ifStat(): IfStatContext {
		let _localctx: IfStatContext = new IfStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TysonParser.RULE_ifStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(TysonParser.If);
			this.state = 80;
			this.match(TysonParser.OParen);
			this.state = 81;
			this.expression(0);
			this.state = 82;
			this.match(TysonParser.CParen);
			this.state = 83;
			this.statement();
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
	public elseIfStat(): ElseIfStatContext {
		let _localctx: ElseIfStatContext = new ElseIfStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TysonParser.RULE_elseIfStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this.match(TysonParser.Else);
			this.state = 86;
			this.match(TysonParser.If);
			this.state = 87;
			this.match(TysonParser.OParen);
			this.state = 88;
			this.expression(0);
			this.state = 89;
			this.match(TysonParser.CParen);
			this.state = 90;
			this.statement();
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
	public elseStat(): ElseStatContext {
		let _localctx: ElseStatContext = new ElseStatContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TysonParser.RULE_elseStat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(TysonParser.Else);
			this.state = 93;
			this.statement();
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
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TysonParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(TysonParser.For);
			this.state = 96;
			this.match(TysonParser.OParen);
			this.state = 97;
			this.assignment();
			this.state = 98;
			this.match(TysonParser.SColon);
			this.state = 99;
			this.expression(0);
			this.state = 100;
			this.match(TysonParser.SColon);
			this.state = 101;
			this.assignment();
			this.state = 102;
			this.match(TysonParser.CParen);
			this.state = 103;
			this.statement();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TysonParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(TysonParser.While);
			this.state = 106;
			this.match(TysonParser.OParen);
			this.state = 107;
			this.expression(0);
			this.state = 108;
			this.match(TysonParser.CParen);
			this.state = 109;
			this.statement();
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
	public exprList(): ExprListContext {
		let _localctx: ExprListContext = new ExprListContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TysonParser.RULE_exprList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.expression(0);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TysonParser.Comma) {
				{
				{
				this.state = 112;
				this.match(TysonParser.Comma);
				this.state = 113;
				this.expression(0);
				}
				}
				this.state = 118;
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
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, TysonParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				_localctx = new UnaryMinusExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 120;
				this.match(TysonParser.Subtract);
				this.state = 121;
				this.expression(19);
				}
				break;

			case 2:
				{
				_localctx = new NotExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 122;
				this.match(TysonParser.Excl);
				this.state = 123;
				this.expression(18);
				}
				break;

			case 3:
				{
				_localctx = new NumberExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 124;
				this.match(TysonParser.Number);
				}
				break;

			case 4:
				{
				_localctx = new BoolExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 125;
				this.match(TysonParser.Bool);
				}
				break;

			case 5:
				{
				_localctx = new NullExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 126;
				this.match(TysonParser.Null);
				}
				break;

			case 6:
				{
				_localctx = new FunctionCallExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 127;
				this.functionCall();
				this.state = 129;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 128;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 7:
				{
				_localctx = new ListExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.list();
				this.state = 133;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new IdentifierExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 135;
				this.match(TysonParser.Identifier);
				this.state = 137;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 136;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 9:
				{
				_localctx = new StringExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 139;
				this.match(TysonParser.String);
				this.state = 141;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 140;
					this.indexes();
					}
					break;
				}
				}
				break;

			case 10:
				{
				_localctx = new ExpressionExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 143;
				this.match(TysonParser.OParen);
				this.state = 144;
				this.expression(0);
				this.state = 145;
				this.match(TysonParser.CParen);
				this.state = 147;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 146;
					this.indexes();
					}
					break;
				}
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 183;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 181;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new PowerExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 151;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 152;
						this.match(TysonParser.Pow);
						this.state = 153;
						this.expression(17);
						}
						break;

					case 2:
						{
						_localctx = new MultExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 154;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 155;
						(_localctx as MultExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.Multiply) | (1 << TysonParser.Divide) | (1 << TysonParser.Modulus))) !== 0))) {
							(_localctx as MultExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 156;
						this.expression(17);
						}
						break;

					case 3:
						{
						_localctx = new AddExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 157;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 158;
						(_localctx as AddExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === TysonParser.Add || _la === TysonParser.Subtract)) {
							(_localctx as AddExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 159;
						this.expression(16);
						}
						break;

					case 4:
						{
						_localctx = new CompExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 160;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 161;
						(_localctx as CompExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TysonParser.GTEquals) | (1 << TysonParser.LTEquals) | (1 << TysonParser.GT) | (1 << TysonParser.LT))) !== 0))) {
							(_localctx as CompExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 162;
						this.expression(15);
						}
						break;

					case 5:
						{
						_localctx = new EqExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 163;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 164;
						(_localctx as EqExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === TysonParser.Equals || _la === TysonParser.NEquals)) {
							(_localctx as EqExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 165;
						this.expression(14);
						}
						break;

					case 6:
						{
						_localctx = new AndExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 166;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 167;
						this.match(TysonParser.And);
						this.state = 168;
						this.expression(13);
						}
						break;

					case 7:
						{
						_localctx = new OrExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 169;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 170;
						this.match(TysonParser.Or);
						this.state = 171;
						this.expression(12);
						}
						break;

					case 8:
						{
						_localctx = new TernaryExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 172;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 173;
						this.match(TysonParser.QMark);
						this.state = 174;
						this.expression(0);
						this.state = 175;
						this.match(TysonParser.Colon);
						this.state = 176;
						this.expression(11);
						}
						break;

					case 9:
						{
						_localctx = new InExpressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, TysonParser.RULE_expression);
						this.state = 178;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 179;
						this.match(TysonParser.In);
						this.state = 180;
						this.expression(10);
						}
						break;
					}
					}
				}
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TysonParser.RULE_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.match(TysonParser.OBracket);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (TysonParser.Null - 14)) | (1 << (TysonParser.Excl - 14)) | (1 << (TysonParser.Subtract - 14)) | (1 << (TysonParser.OBracket - 14)) | (1 << (TysonParser.OParen - 14)) | (1 << (TysonParser.Bool - 14)) | (1 << (TysonParser.Number - 14)) | (1 << (TysonParser.Identifier - 14)) | (1 << (TysonParser.String - 14)))) !== 0)) {
				{
				this.state = 187;
				this.exprList();
				}
			}

			this.state = 190;
			this.match(TysonParser.CBracket);
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
	public indexes(): IndexesContext {
		let _localctx: IndexesContext = new IndexesContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TysonParser.RULE_indexes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 192;
					this.match(TysonParser.OBracket);
					this.state = 193;
					this.expression(0);
					this.state = 194;
					this.match(TysonParser.CBracket);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 198;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		case 11:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 17);

		case 1:
			return this.precpred(this._ctx, 16);

		case 2:
			return this.precpred(this._ctx, 15);

		case 3:
			return this.precpred(this._ctx, 14);

		case 4:
			return this.precpred(this._ctx, 13);

		case 5:
			return this.precpred(this._ctx, 12);

		case 6:
			return this.precpred(this._ctx, 11);

		case 7:
			return this.precpred(this._ctx, 10);

		case 8:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\xCB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x07\x02 \n\x02\f\x02\x0E\x02#\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x038\n\x03\x03\x04\x03\x04\x05\x04<\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x05\x03\x05\x03\x05\x05\x05D\n\x05\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x07\x06J\n\x06\f\x06\x0E\x06M\v\x06\x03\x06\x05\x06P\n\x06\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x07\fu\n\f\f\f\x0E\fx\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x05\r\x84\n\r\x03\r\x03\r\x05\r\x88\n\r\x03\r\x03\r" +
		"\x05\r\x8C\n\r\x03\r\x03\r\x05\r\x90\n\r\x03\r\x03\r\x03\r\x03\r\x05\r" +
		"\x96\n\r\x05\r\x98\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x07\r\xB8" +
		"\n\r\f\r\x0E\r\xBB\v\r\x03\x0E\x03\x0E\x05\x0E\xBF\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F\xC7\n\x0F\r\x0F\x0E\x0F\xC8\x03" +
		"\x0F\x02\x02\x03\x18\x10\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x02\x07\x04" +
		"\x02\x03\x07\'\'\x03\x02\x1D\x1F\x03\x02\x1B\x1C\x04\x02\x15\x16\x19\x1A" +
		"\x03\x02\x13\x14\x02\xE1\x02!\x03\x02\x02\x02\x047\x03\x02\x02\x02\x06" +
		"9\x03\x02\x02\x02\b@\x03\x02\x02\x02\nG\x03\x02\x02\x02\fQ\x03\x02\x02" +
		"\x02\x0EW\x03\x02\x02\x02\x10^\x03\x02\x02\x02\x12a\x03\x02\x02\x02\x14" +
		"k\x03\x02\x02\x02\x16q\x03\x02\x02\x02\x18\x97\x03\x02\x02\x02\x1A\xBC" +
		"\x03\x02\x02\x02\x1C\xC6\x03\x02\x02\x02\x1E \x05\x04\x03\x02\x1F\x1E" +
		"\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02" +
		"\x02\"$\x03\x02\x02\x02#!\x03\x02\x02\x02$%\x07\x02\x02\x03%\x03\x03\x02" +
		"\x02\x02&\'\x07 \x02\x02\'(\x05\x04\x03\x02()\x07!\x02\x02)8\x03\x02\x02" +
		"\x02*+\x05\x06\x04\x02+,\x07&\x02\x02,8\x03\x02\x02\x02-.\x05\b\x05\x02" +
		"./\x07&\x02\x02/8\x03\x02\x02\x0208\x05\n\x06\x0218\x05\x12\n\x0228\x05" +
		"\x14\v\x0234\x07\n\x02\x0245\x05\x18\r\x0256\x07&\x02\x0268\x03\x02\x02" +
		"\x027&\x03\x02\x02\x027*\x03\x02\x02\x027-\x03\x02\x02\x0270\x03\x02\x02" +
		"\x0271\x03\x02\x02\x0272\x03\x02\x02\x0273\x03\x02\x02\x028\x05\x03\x02" +
		"\x02\x029;\x07-\x02\x02:<\x05\x1C\x0F\x02;:\x03\x02\x02\x02;<\x03\x02" +
		"\x02\x02<=\x03\x02\x02\x02=>\t\x02\x02\x02>?\x05\x18\r\x02?\x07\x03\x02" +
		"\x02\x02@A\x07-\x02\x02AC\x07$\x02\x02BD\x05\x16\f\x02CB\x03\x02\x02\x02" +
		"CD\x03\x02\x02\x02DE\x03\x02\x02\x02EF\x07%\x02\x02F\t\x03\x02\x02\x02" +
		"GK\x05\f\x07\x02HJ\x05\x0E\b\x02IH\x03\x02\x02\x02JM\x03\x02\x02\x02K" +
		"I\x03\x02\x02\x02KL\x03\x02\x02\x02LO\x03\x02\x02\x02MK\x03\x02\x02\x02" +
		"NP\x05\x10\t\x02ON\x03\x02\x02\x02OP\x03\x02\x02\x02P\v\x03\x02\x02\x02" +
		"QR\x07\b\x02\x02RS\x07$\x02\x02ST\x05\x18\r\x02TU\x07%\x02\x02UV\x05\x04" +
		"\x03\x02V\r\x03\x02\x02\x02WX\x07\t\x02\x02XY\x07\b\x02\x02YZ\x07$\x02" +
		"\x02Z[\x05\x18\r\x02[\\\x07%\x02\x02\\]\x05\x04\x03\x02]\x0F\x03\x02\x02" +
		"\x02^_\x07\t\x02\x02_`\x05\x04\x03\x02`\x11\x03\x02\x02\x02ab\x07\v\x02" +
		"\x02bc\x07$\x02\x02cd\x05\x06\x04\x02de\x07&\x02\x02ef\x05\x18\r\x02f" +
		"g\x07&\x02\x02gh\x05\x06\x04\x02hi\x07%\x02\x02ij\x05\x04\x03\x02j\x13" +
		"\x03\x02\x02\x02kl\x07\f\x02\x02lm\x07$\x02\x02mn\x05\x18\r\x02no\x07" +
		"%\x02\x02op\x05\x04\x03\x02p\x15\x03\x02\x02\x02qv\x05\x18\r\x02rs\x07" +
		"(\x02\x02su\x05\x18\r\x02tr\x03\x02\x02\x02ux\x03\x02\x02\x02vt\x03\x02" +
		"\x02\x02vw\x03\x02\x02\x02w\x17\x03\x02\x02\x02xv\x03\x02\x02\x02yz\b" +
		"\r\x01\x02z{\x07\x1C\x02\x02{\x98\x05\x18\r\x15|}\x07\x18\x02\x02}\x98" +
		"\x05\x18\r\x14~\x98\x07,\x02\x02\x7F\x98\x07+\x02\x02\x80\x98\x07\x10" +
		"\x02\x02\x81\x83\x05\b\x05\x02\x82\x84\x05\x1C\x0F\x02\x83\x82\x03\x02" +
		"\x02\x02\x83\x84\x03\x02\x02\x02\x84\x98\x03\x02\x02\x02\x85\x87\x05\x1A" +
		"\x0E\x02\x86\x88\x05\x1C\x0F\x02\x87\x86\x03\x02\x02\x02\x87\x88\x03\x02" +
		"\x02\x02\x88\x98\x03\x02\x02\x02\x89\x8B\x07-\x02\x02\x8A\x8C\x05\x1C" +
		"\x0F\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x98\x03\x02" +
		"\x02\x02\x8D\x8F\x07.\x02\x02\x8E\x90\x05\x1C\x0F\x02\x8F\x8E\x03\x02" +
		"\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x98\x03\x02\x02\x02\x91\x92\x07$" +
		"\x02\x02\x92\x93\x05\x18\r\x02\x93\x95\x07%\x02\x02\x94\x96\x05\x1C\x0F" +
		"\x02\x95\x94\x03\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\x98\x03\x02\x02" +
		"\x02\x97y\x03\x02\x02\x02\x97|\x03\x02\x02\x02\x97~\x03\x02\x02\x02\x97" +
		"\x7F\x03\x02\x02\x02\x97\x80\x03\x02\x02\x02\x97\x81\x03\x02\x02\x02\x97" +
		"\x85\x03\x02\x02\x02\x97\x89\x03\x02\x02\x02\x97\x8D\x03\x02\x02\x02\x97" +
		"\x91\x03\x02\x02\x02\x98\xB9\x03\x02\x02\x02\x99\x9A\f\x13\x02\x02\x9A" +
		"\x9B\x07\x17\x02\x02\x9B\xB8\x05\x18\r\x13\x9C\x9D\f\x12\x02\x02\x9D\x9E" +
		"\t\x03\x02\x02\x9E\xB8\x05\x18\r\x13\x9F\xA0\f\x11\x02\x02\xA0\xA1\t\x04" +
		"\x02\x02\xA1\xB8\x05\x18\r\x12\xA2\xA3\f\x10\x02\x02\xA3\xA4\t\x05\x02" +
		"\x02\xA4\xB8\x05\x18\r\x11\xA5\xA6\f\x0F\x02\x02\xA6\xA7\t\x06\x02\x02" +
		"\xA7\xB8\x05\x18\r\x10\xA8\xA9\f\x0E\x02\x02\xA9\xAA\x07\x12\x02\x02\xAA" +
		"\xB8\x05\x18\r\x0F\xAB\xAC\f\r\x02\x02\xAC\xAD\x07\x11\x02\x02\xAD\xB8" +
		"\x05\x18\r\x0E\xAE\xAF\f\f\x02\x02\xAF\xB0\x07)\x02\x02\xB0\xB1\x05\x18" +
		"\r\x02\xB1\xB2\x07*\x02\x02\xB2\xB3\x05\x18\r\r\xB3\xB8\x03\x02\x02\x02" +
		"\xB4\xB5\f\v\x02\x02\xB5\xB6\x07\x0F\x02\x02\xB6\xB8\x05\x18\r\f\xB7\x99" +
		"\x03\x02\x02\x02\xB7\x9C\x03\x02\x02\x02\xB7\x9F\x03\x02\x02\x02\xB7\xA2" +
		"\x03\x02\x02\x02\xB7\xA5\x03\x02\x02\x02\xB7\xA8\x03\x02\x02\x02\xB7\xAB" +
		"\x03\x02\x02\x02\xB7\xAE\x03\x02\x02\x02\xB7\xB4\x03\x02\x02\x02\xB8\xBB" +
		"\x03\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\x19" +
		"\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBE\x07\"\x02\x02\xBD\xBF" +
		"\x05\x16\f\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC0" +
		"\x03\x02\x02\x02\xC0\xC1\x07#\x02\x02\xC1\x1B\x03\x02\x02\x02\xC2\xC3" +
		"\x07\"\x02\x02\xC3\xC4\x05\x18\r\x02\xC4\xC5\x07#\x02\x02\xC5\xC7\x03" +
		"\x02\x02\x02\xC6\xC2\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC6\x03" +
		"\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\x1D\x03\x02\x02\x02\x13!7;CK" +
		"Ov\x83\x87\x8B\x8F\x95\x97\xB7\xB9\xBE\xC8";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TysonParser.__ATN) {
			TysonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TysonParser._serializedATN));
		}

		return TysonParser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return TysonParser.RULE_prog; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public OBrace(): TerminalNode | undefined { return this.tryGetToken(TysonParser.OBrace, 0); }
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public CBrace(): TerminalNode | undefined { return this.tryGetToken(TysonParser.CBrace, 0); }
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public SColon(): TerminalNode | undefined { return this.tryGetToken(TysonParser.SColon, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
	}
	public Return(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Return, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_statement; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public Assign(): TerminalNode { return this.getToken(TysonParser.Assign, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_assignment; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_functionCall; }
	public copyFrom(ctx: FunctionCallContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentifierFunctionCallContext extends FunctionCallContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	public OParen(): TerminalNode { return this.getToken(TysonParser.OParen, 0); }
	public CParen(): TerminalNode { return this.getToken(TysonParser.CParen, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(ctx: FunctionCallContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterIdentifierFunctionCall) {
			listener.enterIdentifierFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitIdentifierFunctionCall) {
			listener.exitIdentifierFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitIdentifierFunctionCall) {
			return visitor.visitIdentifierFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public ifStat(): IfStatContext {
		return this.getRuleContext(0, IfStatContext);
	}
	public elseIfStat(): ElseIfStatContext[];
	public elseIfStat(i: number): ElseIfStatContext;
	public elseIfStat(i?: number): ElseIfStatContext | ElseIfStatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfStatContext);
		} else {
			return this.getRuleContext(i, ElseIfStatContext);
		}
	}
	public elseStat(): ElseStatContext | undefined {
		return this.tryGetRuleContext(0, ElseStatContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatContext extends ParserRuleContext {
	public If(): TerminalNode { return this.getToken(TysonParser.If, 0); }
	public OParen(): TerminalNode { return this.getToken(TysonParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(TysonParser.CParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_ifStat; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterIfStat) {
			listener.enterIfStat(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitIfStat) {
			listener.exitIfStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitIfStat) {
			return visitor.visitIfStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseIfStatContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(TysonParser.Else, 0); }
	public If(): TerminalNode { return this.getToken(TysonParser.If, 0); }
	public OParen(): TerminalNode { return this.getToken(TysonParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(TysonParser.CParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_elseIfStat; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterElseIfStat) {
			listener.enterElseIfStat(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitElseIfStat) {
			listener.exitElseIfStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitElseIfStat) {
			return visitor.visitElseIfStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseStatContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(TysonParser.Else, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_elseStat; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterElseStat) {
			listener.enterElseStat(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitElseStat) {
			listener.exitElseStat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitElseStat) {
			return visitor.visitElseStat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public For(): TerminalNode { return this.getToken(TysonParser.For, 0); }
	public OParen(): TerminalNode { return this.getToken(TysonParser.OParen, 0); }
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	public SColon(): TerminalNode[];
	public SColon(i: number): TerminalNode;
	public SColon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TysonParser.SColon);
		} else {
			return this.getToken(TysonParser.SColon, i);
		}
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(TysonParser.CParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStatementContext extends ParserRuleContext {
	public While(): TerminalNode { return this.getToken(TysonParser.While, 0); }
	public OParen(): TerminalNode { return this.getToken(TysonParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(TysonParser.CParen, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
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
	public get ruleIndex(): number { return TysonParser.RULE_exprList; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterExprList) {
			listener.enterExprList(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitExprList) {
			listener.exitExprList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitExprList) {
			return visitor.visitExprList(this);
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
export class UnaryMinusExpressionContext extends ExpressionContext {
	public Subtract(): TerminalNode { return this.getToken(TysonParser.Subtract, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterUnaryMinusExpression) {
			listener.enterUnaryMinusExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitUnaryMinusExpression) {
			listener.exitUnaryMinusExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitUnaryMinusExpression) {
			return visitor.visitUnaryMinusExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NotExpressionContext extends ExpressionContext {
	public Excl(): TerminalNode { return this.getToken(TysonParser.Excl, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterNotExpression) {
			listener.enterNotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitNotExpression) {
			listener.exitNotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
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
	public Pow(): TerminalNode { return this.getToken(TysonParser.Pow, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterPowerExpression) {
			listener.enterPowerExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitPowerExpression) {
			listener.exitPowerExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitPowerExpression) {
			return visitor.visitPowerExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultExpressionContext extends ExpressionContext {
	public _op: Token;
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
	public enterRule(listener: TysonListener): void {
		if (listener.enterMultExpression) {
			listener.enterMultExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitMultExpression) {
			listener.exitMultExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitMultExpression) {
			return visitor.visitMultExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public Add(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Add, 0); }
	public Subtract(): TerminalNode | undefined { return this.tryGetToken(TysonParser.Subtract, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterAddExpression) {
			listener.enterAddExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitAddExpression) {
			listener.exitAddExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitAddExpression) {
			return visitor.visitAddExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompExpressionContext extends ExpressionContext {
	public _op: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GTEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.GTEquals, 0); }
	public LTEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.LTEquals, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(TysonParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(TysonParser.LT, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterCompExpression) {
			listener.enterCompExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitCompExpression) {
			listener.exitCompExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitCompExpression) {
			return visitor.visitCompExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqExpressionContext extends ExpressionContext {
	public _op: Token;
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
	public NEquals(): TerminalNode | undefined { return this.tryGetToken(TysonParser.NEquals, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterEqExpression) {
			listener.enterEqExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitEqExpression) {
			listener.exitEqExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitEqExpression) {
			return visitor.visitEqExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
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
	public enterRule(listener: TysonListener): void {
		if (listener.enterAndExpression) {
			listener.enterAndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitAndExpression) {
			listener.exitAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitAndExpression) {
			return visitor.visitAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
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
	public enterRule(listener: TysonListener): void {
		if (listener.enterOrExpression) {
			listener.enterOrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitOrExpression) {
			listener.exitOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitOrExpression) {
			return visitor.visitOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public QMark(): TerminalNode { return this.getToken(TysonParser.QMark, 0); }
	public Colon(): TerminalNode { return this.getToken(TysonParser.Colon, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterTernaryExpression) {
			listener.enterTernaryExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitTernaryExpression) {
			listener.exitTernaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitTernaryExpression) {
			return visitor.visitTernaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InExpressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public In(): TerminalNode { return this.getToken(TysonParser.In, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterInExpression) {
			listener.enterInExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitInExpression) {
			listener.exitInExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitInExpression) {
			return visitor.visitInExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NumberExpressionContext extends ExpressionContext {
	public Number(): TerminalNode { return this.getToken(TysonParser.Number, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterNumberExpression) {
			listener.enterNumberExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitNumberExpression) {
			listener.exitNumberExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitNumberExpression) {
			return visitor.visitNumberExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BoolExpressionContext extends ExpressionContext {
	public Bool(): TerminalNode { return this.getToken(TysonParser.Bool, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterBoolExpression) {
			listener.enterBoolExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitBoolExpression) {
			listener.exitBoolExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitBoolExpression) {
			return visitor.visitBoolExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NullExpressionContext extends ExpressionContext {
	public Null(): TerminalNode { return this.getToken(TysonParser.Null, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterNullExpression) {
			listener.enterNullExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitNullExpression) {
			listener.exitNullExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitNullExpression) {
			return visitor.visitNullExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExpressionContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterFunctionCallExpression) {
			listener.enterFunctionCallExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitFunctionCallExpression) {
			listener.exitFunctionCallExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpression) {
			return visitor.visitFunctionCallExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListExpressionContext extends ExpressionContext {
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterListExpression) {
			listener.enterListExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitListExpression) {
			listener.exitListExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitListExpression) {
			return visitor.visitListExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	public Identifier(): TerminalNode { return this.getToken(TysonParser.Identifier, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterIdentifierExpression) {
			listener.enterIdentifierExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitIdentifierExpression) {
			listener.exitIdentifierExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitIdentifierExpression) {
			return visitor.visitIdentifierExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringExpressionContext extends ExpressionContext {
	public String(): TerminalNode { return this.getToken(TysonParser.String, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterStringExpression) {
			listener.enterStringExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitStringExpression) {
			listener.exitStringExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitStringExpression) {
			return visitor.visitStringExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionExpressionContext extends ExpressionContext {
	public OParen(): TerminalNode { return this.getToken(TysonParser.OParen, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CParen(): TerminalNode { return this.getToken(TysonParser.CParen, 0); }
	public indexes(): IndexesContext | undefined {
		return this.tryGetRuleContext(0, IndexesContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterExpressionExpression) {
			listener.enterExpressionExpression(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitExpressionExpression) {
			listener.exitExpressionExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitExpressionExpression) {
			return visitor.visitExpressionExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public OBracket(): TerminalNode { return this.getToken(TysonParser.OBracket, 0); }
	public CBracket(): TerminalNode { return this.getToken(TysonParser.CBracket, 0); }
	public exprList(): ExprListContext | undefined {
		return this.tryGetRuleContext(0, ExprListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_list; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitList) {
			return visitor.visitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexesContext extends ParserRuleContext {
	public OBracket(): TerminalNode[];
	public OBracket(i: number): TerminalNode;
	public OBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TysonParser.OBracket);
		} else {
			return this.getToken(TysonParser.OBracket, i);
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
	public CBracket(): TerminalNode[];
	public CBracket(i: number): TerminalNode;
	public CBracket(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TysonParser.CBracket);
		} else {
			return this.getToken(TysonParser.CBracket, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TysonParser.RULE_indexes; }
	// @Override
	public enterRule(listener: TysonListener): void {
		if (listener.enterIndexes) {
			listener.enterIndexes(this);
		}
	}
	// @Override
	public exitRule(listener: TysonListener): void {
		if (listener.exitIndexes) {
			listener.exitIndexes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TysonVisitor<Result>): Result {
		if (visitor.visitIndexes) {
			return visitor.visitIndexes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


