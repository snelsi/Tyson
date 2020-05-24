// Generated from src/scripts/antlr4/TysonLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TysonLexer extends Lexer {
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
	public static readonly ERROR = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN", "ERROR",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"MultiLineComment", "SingleLineComment", "OpenParen", "CloseParen", "OpenBrace", 
		"CloseBrace", "SemiColon", "Comma", "Assign", "Colon", "Dot", "PlusPlus", 
		"MinusMinus", "Plus", "Minus", "Not", "Multiply", "Divide", "Modulus", 
		"LessThan", "MoreThan", "LessThanEquals", "GreaterThanEquals", "Equals", 
		"NotEquals", "Power", "And", "Or", "MultiplyAssign", "DivideAssign", "ModulusAssign", 
		"PlusAssign", "MinusAssign", "PowerAssign", "NullLiteral", "BooleanLiteral", 
		"DecimalLiteral", "If", "Else", "For", "Do", "While", "Continue", "Break", 
		"Log", "Var", "Let", "Const", "Identifier", "StringLiteral", "WhiteSpaces", 
		"LineTerminator", "UnexpectedCharacter", "DoubleStringCharacter", "SingleStringCharacter", 
		"EscapeSequence", "CharacterEscapeSequence", "SingleEscapeCharacter", 
		"NonEscapeCharacter", "EscapeCharacter", "DecimalIntegerLiteral", "IdentifierPart", 
		"IdentifierStart", "UnicodeLetter", "UnicodeCombiningMark", "UnicodeDigit", 
		"UnicodeConnectorPunctuation",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TysonLexer._LITERAL_NAMES, TysonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TysonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TysonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TysonLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return TysonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TysonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TysonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TysonLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x027\u01A8\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x07\x02\x8E\n\x02\f\x02\x0E\x02\x91\v\x02\x03\x02" +
		"\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
		"\x9C\n\x03\f\x03\x0E\x03\x9F\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
		"!\x03!\x03!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$" +
		"\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\xFF\n%\x03&\x03&\x03" +
		"&\x03&\x07&\u0105\n&\f&\x0E&\u0108\v&\x03&\x03&\x06&\u010C\n&\r&\x0E&" +
		"\u010D\x05&\u0110\n&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03(\x03)\x03" +
		")\x03)\x03)\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03" +
		",\x03,\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03.\x03" +
		".\x03.\x03.\x03/\x03/\x03/\x03/\x030\x030\x030\x030\x031\x031\x031\x03" +
		"1\x031\x031\x032\x032\x072\u014A\n2\f2\x0E2\u014D\v2\x033\x033\x073\u0151" +
		"\n3\f3\x0E3\u0154\v3\x033\x033\x033\x073\u0159\n3\f3\x0E3\u015C\v3\x03" +
		"3\x053\u015F\n3\x034\x064\u0162\n4\r4\x0E4\u0163\x034\x034\x035\x035\x03" +
		"5\x035\x036\x036\x036\x036\x037\x037\x037\x057\u0173\n7\x038\x038\x03" +
		"8\x058\u0178\n8\x039\x039\x03:\x03:\x05:\u017E\n:\x03;\x03;\x03<\x03<" +
		"\x03=\x03=\x05=\u0186\n=\x03>\x03>\x03>\x07>\u018B\n>\f>\x0E>\u018E\v" +
		">\x05>\u0190\n>\x03?\x03?\x03?\x03?\x03?\x05?\u0197\n?\x03@\x03@\x05@" +
		"\u019B\n@\x03A\x05A\u019E\nA\x03B\x05B\u01A1\nB\x03C\x05C\u01A4\nC\x03" +
		"D\x05D\u01A7\nD\x03\x8F\x02\x02E\x03\x02\x03\x05\x02\x04\x07\x02\x05\t" +
		"\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17" +
		"\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13" +
		"%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02" +
		"\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"C\x02#E\x02" +
		"$G\x02%I\x02&K\x02\'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]" +
		"\x020_\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x02\x02o\x02\x02q\x02" +
		"\x02s\x02\x02u\x02\x02w\x02\x02y\x02\x02{\x02\x02}\x02\x02\x7F\x02\x02" +
		"\x81\x02\x02\x83\x02\x02\x85\x02\x02\x87\x02\x02\x03\x02\x10\x05\x02\f" +
		"\f\x0F\x0F\u202A\u202B\x03\x022;\x06\x02\v\v\r\x0E\"\"\xA2\xA2\x06\x02" +
		"\f\f\x0F\x0F$$^^\x06\x02\f\f\x0F\x0F))^^\v\x02$$))^^ddhhppttvvxx\x0E\x02" +
		"\f\f\x0F\x0F$$))2;^^ddhhppttvxzz\x05\x022;wwzz\x03\x023;\x04\x02&&aa\u0101" +
		"\x02C\\c|\xAC\xAC\xB7\xB7\xBC\xBC\xC2\xD8\xDA\xF8\xFA\u0221\u0224\u0235" +
		"\u0252\u02AF\u02B2\u02BA\u02BD\u02C3\u02D2\u02D3\u02E2\u02E6\u02F0\u02F0" +
		"\u037C\u037C\u0388\u0388\u038A\u038C\u038E\u038E\u0390\u03A3\u03A5\u03D0" +
		"\u03D2\u03D9\u03DC\u03F5\u0402\u0483\u048E\u04C6\u04C9\u04CA\u04CD\u04CE" +
		"\u04D2\u04F7\u04FA\u04FB\u0533\u0558\u055B\u055B\u0563\u0589\u05D2\u05EC" +
		"\u05F2\u05F4\u0623\u063C\u0642\u064C\u0673\u06D5\u06D7\u06D7\u06E7\u06E8" +
		"\u06FC\u06FE\u0712\u0712\u0714\u072E\u0782\u07A7\u0907\u093B\u093F\u093F" +
		"\u0952\u0952\u095A\u0963\u0987\u098E\u0991\u0992\u0995\u09AA\u09AC\u09B2" +
		"\u09B4\u09B4\u09B8\u09BB\u09DE\u09DF\u09E1\u09E3\u09F2\u09F3\u0A07\u0A0C" +
		"\u0A11\u0A12\u0A15\u0A2A\u0A2C\u0A32\u0A34\u0A35\u0A37\u0A38\u0A3A\u0A3B" +
		"\u0A5B\u0A5E\u0A60\u0A60\u0A74\u0A76\u0A87\u0A8D\u0A8F\u0A8F\u0A91\u0A93" +
		"\u0A95\u0AAA\u0AAC\u0AB2\u0AB4\u0AB5\u0AB7\u0ABB\u0ABF\u0ABF\u0AD2\u0AD2" +
		"\u0AE2\u0AE2\u0B07\u0B0E\u0B11\u0B12\u0B15\u0B2A\u0B2C\u0B32\u0B34\u0B35" +
		"\u0B38\u0B3B\u0B3F\u0B3F\u0B5E\u0B5F\u0B61\u0B63\u0B87\u0B8C\u0B90\u0B92" +
		"\u0B94\u0B97\u0B9B\u0B9C\u0B9E\u0B9E\u0BA0\u0BA1\u0BA5\u0BA6\u0BAA\u0BAC" +
		"\u0BB0\u0BB7\u0BB9\u0BBB\u0C07\u0C0E\u0C10\u0C12\u0C14\u0C2A\u0C2C\u0C35" +
		"\u0C37\u0C3B\u0C62\u0C63\u0C87\u0C8E\u0C90\u0C92\u0C94\u0CAA\u0CAC\u0CB5" +
		"\u0CB7\u0CBB\u0CE0\u0CE0\u0CE2\u0CE3\u0D07\u0D0E\u0D10\u0D12\u0D14\u0D2A" +
		"\u0D2C\u0D3B\u0D62\u0D63\u0D87\u0D98\u0D9C\u0DB3\u0DB5\u0DBD\u0DBF\u0DBF" +
		"\u0DC2\u0DC8\u0E03\u0E32\u0E34\u0E35\u0E42\u0E48\u0E83\u0E84\u0E86\u0E86" +
		"\u0E89\u0E8A\u0E8C\u0E8C\u0E8F\u0E8F\u0E96\u0E99\u0E9B\u0EA1\u0EA3\u0EA5" +
		"\u0EA7\u0EA7\u0EA9\u0EA9\u0EAC\u0EAD\u0EAF\u0EB2\u0EB4\u0EB5\u0EBF\u0EC6" +
		"\u0EC8\u0EC8\u0EDE\u0EDF\u0F02\u0F02\u0F42\u0F6C\u0F8A\u0F8D\u1002\u1023" +
		"\u1025\u1029\u102B\u102C\u1052\u1057\u10A2\u10C7\u10D2\u10F8\u1102\u115B" +
		"\u1161\u11A4\u11AA\u11FB\u1202\u1208\u120A\u1248\u124A\u124A\u124C\u124F" +
		"\u1252\u1258\u125A\u125A\u125C\u125F\u1262\u1288\u128A\u128A\u128C\u128F" +
		"\u1292\u12B0\u12B2\u12B2\u12B4\u12B7\u12BA\u12C0\u12C2\u12C2\u12C4\u12C7" +
		"\u12CA\u12D0\u12D2\u12D8\u12DA\u12F0\u12F2\u1310\u1312\u1312\u1314\u1317" +
		"\u131A\u1320\u1322\u1348\u134A\u135C\u13A2\u13F6\u1403\u1678\u1683\u169C" +
		"\u16A2\u16EC\u1782\u17B5\u1822\u1879\u1882\u18AA\u1E02\u1E9D\u1EA2\u1EFB" +
		"\u1F02\u1F17\u1F1A\u1F1F\u1F22\u1F47\u1F4A\u1F4F\u1F52\u1F59\u1F5B\u1F5B" +
		"\u1F5D\u1F5D\u1F5F\u1F5F\u1F61\u1F7F\u1F82\u1FB6\u1FB8\u1FBE\u1FC0\u1FC0" +
		"\u1FC4\u1FC6\u1FC8\u1FCE\u1FD2\u1FD5\u1FD8\u1FDD\u1FE2\u1FEE\u1FF4\u1FF6" +
		"\u1FF8\u1FFE\u2081\u2081\u2104\u2104\u2109\u2109\u210C\u2115\u2117\u2117" +
		"\u211B\u211F\u2126\u2126\u2128\u2128\u212A\u212A\u212C\u212F\u2131\u2133" +
		"\u2135\u213B\u2162\u2185\u3007\u3009\u3023\u302B\u3033\u3037\u303A\u303C" +
		"\u3043\u3096\u309F\u30A0\u30A3\u30FC\u30FE\u3100\u3107\u312E\u3133\u3190" +
		"\u31A2\u31B9\u3402\u4DC1\u4E02\uA48E\uAC02\uAC02\uD7A5\uD7A5\uF902\uFA2F" +
		"\uFB02\uFB08\uFB15\uFB19\uFB1F\uFB1F\uFB21\uFB2A\uFB2C\uFB38\uFB3A\uFB3E" +
		"\uFB40\uFB40\uFB42\uFB43\uFB45\uFB46\uFB48\uFBB3\uFBD5\uFD3F\uFD52\uFD91" +
		"\uFD94\uFDC9\uFDF2\uFDFD\uFE72\uFE74\uFE76\uFE76\uFE78\uFEFE\uFF23\uFF3C" +
		"\uFF43\uFF5C\uFF68\uFFC0\uFFC4\uFFC9\uFFCC\uFFD1\uFFD4\uFFD9\uFFDC\uFFDE" +
		"f\x02\u0302\u0350\u0362\u0364\u0485\u0488\u0593\u05A3\u05A5\u05BB\u05BD" +
		"\u05BF\u05C1\u05C1\u05C3\u05C4\u05C6\u05C6\u064D\u0657\u0672\u0672\u06D8" +
		"\u06DE\u06E1\u06E6\u06E9\u06EA\u06EC\u06EF\u0713\u0713\u0732\u074C\u07A8" +
		"\u07B2\u0903\u0905\u093E\u093E\u0940\u094F\u0953\u0956\u0964\u0965\u0983" +
		"\u0985\u09BE\u09C6\u09C9\u09CA\u09CD\u09CF\u09D9\u09D9\u09E4\u09E5\u0A04" +
		"\u0A04\u0A3E\u0A3E\u0A40\u0A44\u0A49\u0A4A\u0A4D\u0A4F\u0A72\u0A73\u0A83" +
		"\u0A85\u0ABE\u0ABE\u0AC0\u0AC7\u0AC9\u0ACB\u0ACD\u0ACF\u0B03\u0B05\u0B3E" +
		"\u0B3E\u0B40\u0B45\u0B49\u0B4A\u0B4D\u0B4F\u0B58\u0B59\u0B84\u0B85\u0BC0" +
		"\u0BC4\u0BC8\u0BCA\u0BCC\u0BCF\u0BD9\u0BD9\u0C03\u0C05\u0C40\u0C46\u0C48" +
		"\u0C4A\u0C4C\u0C4F\u0C57\u0C58\u0C84\u0C85\u0CC0\u0CC6\u0CC8\u0CCA\u0CCC" +
		"\u0CCF\u0CD7\u0CD8\u0D04\u0D05\u0D40\u0D45\u0D48\u0D4A\u0D4C\u0D4F\u0D59" +
		"\u0D59\u0D84\u0D85\u0DCC\u0DCC\u0DD1\u0DD6\u0DD8\u0DD8\u0DDA\u0DE1\u0DF4" +
		"\u0DF5\u0E33\u0E33\u0E36\u0E3C\u0E49\u0E50\u0EB3\u0EB3\u0EB6\u0EBB\u0EBD" +
		"\u0EBE\u0ECA\u0ECF\u0F1A\u0F1B\u0F37\u0F37\u0F39\u0F39\u0F3B\u0F3B\u0F40" +
		"\u0F41\u0F73\u0F86\u0F88\u0F89\u0F92\u0F99\u0F9B\u0FBE\u0FC8\u0FC8\u102E" +
		"\u1034\u1038\u103B\u1058\u105B\u17B6\u17D5\u18AB\u18AB\u20D2\u20DE\u20E3" +
		"\u20E3\u302C\u3031\u309B\u309C\uFB20\uFB20\uFE22\uFE25\x16\x022;\u0662" +
		"\u066B\u06F2\u06FB\u0968\u0971\u09E8\u09F1\u0A68\u0A71\u0AE8\u0AF1\u0B68" +
		"\u0B71\u0BE9\u0BF1\u0C68\u0C71\u0CE8\u0CF1\u0D68\u0D71\u0E52\u0E5B\u0ED2" +
		"\u0EDB\u0F22\u0F2B\u1042\u104B\u136B\u1373\u17E2\u17EB\u1812\u181B\uFF12" +
		"\uFF1B\t\x02aa\u2041\u2042\u30FD\u30FD\uFE35\uFE36\uFE4F\uFE51\uFF41\uFF41" +
		"\uFF67\uFF67\x02\u01B0\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
		"\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02" +
		"3\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02" +
		"\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02" +
		"\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03" +
		"\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02" +
		"\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02" +
		"U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02" +
		"\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02" +
		"\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03" +
		"\x02\x02\x02\x02k\x03\x02\x02\x02\x03\x89\x03\x02\x02\x02\x05\x97\x03" +
		"\x02\x02\x02\x07\xA2\x03\x02\x02\x02\t\xA4\x03\x02\x02\x02\v\xA6\x03\x02" +
		"\x02\x02\r\xA8\x03\x02\x02\x02\x0F\xAA\x03\x02\x02\x02\x11\xAC\x03\x02" +
		"\x02\x02\x13\xAE\x03\x02\x02\x02\x15\xB0\x03\x02\x02\x02\x17\xB2\x03\x02" +
		"\x02\x02\x19\xB4\x03\x02\x02\x02\x1B\xB7\x03\x02\x02\x02\x1D\xBA\x03\x02" +
		"\x02\x02\x1F\xBC\x03\x02\x02\x02!\xBE\x03\x02\x02\x02#\xC0\x03\x02\x02" +
		"\x02%\xC2\x03\x02\x02\x02\'\xC4\x03\x02\x02\x02)\xC6\x03\x02\x02\x02+" +
		"\xC8\x03\x02\x02\x02-\xCA\x03\x02\x02\x02/\xCD\x03\x02\x02\x021\xD0\x03" +
		"\x02\x02\x023\xD3\x03\x02\x02\x025\xD6\x03\x02\x02\x027\xD8\x03\x02\x02" +
		"\x029\xDB\x03\x02\x02\x02;\xDE\x03\x02\x02\x02=\xE1\x03\x02\x02\x02?\xE4" +
		"\x03\x02\x02\x02A\xE7\x03\x02\x02\x02C\xEA\x03\x02\x02\x02E\xED\x03\x02" +
		"\x02\x02G\xF0\x03\x02\x02\x02I\xFE\x03\x02\x02\x02K\u010F\x03\x02\x02" +
		"\x02M\u0111\x03\x02\x02\x02O\u0114\x03\x02\x02\x02Q\u0119\x03\x02\x02" +
		"\x02S\u011D\x03\x02\x02\x02U\u0120\x03\x02\x02\x02W\u0126\x03\x02\x02" +
		"\x02Y\u012F\x03\x02\x02\x02[\u0135\x03\x02\x02\x02]\u0139\x03\x02\x02" +
		"\x02_\u013D\x03\x02\x02\x02a\u0141\x03\x02\x02\x02c\u0147\x03\x02\x02" +
		"\x02e\u015E\x03\x02\x02\x02g\u0161\x03\x02\x02\x02i\u0167\x03\x02\x02" +
		"\x02k\u016B\x03\x02\x02\x02m\u0172\x03\x02\x02\x02o\u0177\x03\x02\x02" +
		"\x02q\u0179\x03\x02\x02\x02s\u017D\x03\x02\x02\x02u\u017F\x03\x02\x02" +
		"\x02w\u0181\x03\x02\x02\x02y\u0185\x03\x02\x02\x02{\u018F\x03\x02\x02" +
		"\x02}\u0196\x03\x02\x02\x02\x7F\u019A\x03\x02\x02\x02\x81\u019D\x03\x02" +
		"\x02\x02\x83\u01A0\x03\x02\x02\x02\x85\u01A3\x03\x02\x02\x02\x87\u01A6" +
		"\x03\x02\x02\x02\x89\x8A\x071\x02\x02\x8A\x8B\x07,\x02\x02\x8B\x8F\x03" +
		"\x02\x02\x02\x8C\x8E\v\x02\x02\x02\x8D\x8C\x03\x02\x02\x02\x8E\x91\x03" +
		"\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x90\x92\x03" +
		"\x02\x02\x02\x91\x8F\x03\x02\x02\x02\x92\x93\x07,\x02\x02\x93\x94\x07" +
		"1\x02\x02\x94\x95\x03\x02\x02\x02\x95\x96\b\x02\x02\x02\x96\x04\x03\x02" +
		"\x02\x02\x97\x98\x071\x02\x02\x98\x99\x071\x02\x02\x99\x9D\x03\x02\x02" +
		"\x02\x9A\x9C\n\x02\x02\x02\x9B\x9A\x03\x02\x02\x02\x9C\x9F\x03\x02\x02" +
		"\x02\x9D\x9B\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\xA0\x03\x02\x02" +
		"\x02\x9F\x9D\x03\x02\x02\x02\xA0\xA1\b\x03\x02\x02\xA1\x06\x03\x02\x02" +
		"\x02\xA2\xA3\x07*\x02\x02\xA3\b\x03\x02\x02\x02\xA4\xA5\x07+\x02\x02\xA5" +
		"\n\x03\x02\x02\x02\xA6\xA7\x07}\x02\x02\xA7\f\x03\x02\x02\x02\xA8\xA9" +
		"\x07\x7F\x02\x02\xA9\x0E\x03\x02\x02\x02\xAA\xAB\x07=\x02\x02\xAB\x10" +
		"\x03\x02\x02\x02\xAC\xAD\x07.\x02\x02\xAD\x12\x03\x02\x02\x02\xAE\xAF" +
		"\x07?\x02\x02\xAF\x14\x03\x02\x02\x02\xB0\xB1\x07<\x02\x02\xB1\x16\x03" +
		"\x02\x02\x02\xB2\xB3\x070\x02\x02\xB3\x18\x03\x02\x02\x02\xB4\xB5\x07" +
		"-\x02\x02\xB5\xB6\x07-\x02\x02\xB6\x1A\x03\x02\x02\x02\xB7\xB8\x07/\x02" +
		"\x02\xB8\xB9\x07/\x02\x02\xB9\x1C\x03\x02\x02\x02\xBA\xBB\x07-\x02\x02" +
		"\xBB\x1E\x03\x02\x02\x02\xBC\xBD\x07/\x02\x02\xBD \x03\x02\x02\x02\xBE" +
		"\xBF\x07#\x02\x02\xBF\"\x03\x02\x02\x02\xC0\xC1\x07,\x02\x02\xC1$\x03" +
		"\x02\x02\x02\xC2\xC3\x071\x02\x02\xC3&\x03\x02\x02\x02\xC4\xC5\x07\'\x02" +
		"\x02\xC5(\x03\x02\x02\x02\xC6\xC7\x07>\x02\x02\xC7*\x03\x02\x02\x02\xC8" +
		"\xC9\x07@\x02\x02\xC9,\x03\x02\x02\x02\xCA\xCB\x07>\x02\x02\xCB\xCC\x07" +
		"?\x02\x02\xCC.\x03\x02\x02\x02\xCD\xCE\x07@\x02\x02\xCE\xCF\x07?\x02\x02" +
		"\xCF0\x03\x02\x02\x02\xD0\xD1\x07?\x02\x02\xD1\xD2\x07?\x02\x02\xD22\x03" +
		"\x02\x02\x02\xD3\xD4\x07#\x02\x02\xD4\xD5\x07?\x02\x02\xD54\x03\x02\x02" +
		"\x02\xD6\xD7\x07`\x02\x02\xD76\x03\x02\x02\x02\xD8\xD9\x07(\x02\x02\xD9" +
		"\xDA\x07(\x02\x02\xDA8\x03\x02\x02\x02\xDB\xDC\x07~\x02\x02\xDC\xDD\x07" +
		"~\x02\x02\xDD:\x03\x02\x02\x02\xDE\xDF\x07,\x02\x02\xDF\xE0\x07?\x02\x02" +
		"\xE0<\x03\x02\x02\x02\xE1\xE2\x071\x02\x02\xE2\xE3\x07?\x02\x02\xE3>\x03" +
		"\x02\x02\x02\xE4\xE5\x07\'\x02\x02\xE5\xE6\x07?\x02\x02\xE6@\x03\x02\x02" +
		"\x02\xE7\xE8\x07-\x02\x02\xE8\xE9\x07?\x02\x02\xE9B\x03\x02\x02\x02\xEA" +
		"\xEB\x07/\x02\x02\xEB\xEC\x07?\x02\x02\xECD\x03\x02\x02\x02\xED\xEE\x07" +
		"`\x02\x02\xEE\xEF\x07?\x02\x02\xEFF\x03\x02\x02\x02\xF0\xF1\x07p\x02\x02" +
		"\xF1\xF2\x07w\x02\x02\xF2\xF3\x07n\x02\x02\xF3\xF4\x07n\x02\x02\xF4H\x03" +
		"\x02\x02\x02\xF5\xF6\x07v\x02\x02\xF6\xF7\x07t\x02\x02\xF7\xF8\x07w\x02" +
		"\x02\xF8\xFF\x07g\x02\x02\xF9\xFA\x07h\x02\x02\xFA\xFB\x07c\x02\x02\xFB" +
		"\xFC\x07n\x02\x02\xFC\xFD\x07u\x02\x02\xFD\xFF\x07g\x02\x02\xFE\xF5\x03" +
		"\x02\x02\x02\xFE\xF9\x03\x02\x02\x02\xFFJ\x03\x02\x02\x02\u0100\u0110" +
		"\x05{>\x02\u0101\u0102\x05{>\x02\u0102\u0106\x070\x02\x02\u0103\u0105" +
		"\t\x03\x02\x02\u0104\u0103\x03\x02\x02\x02\u0105\u0108\x03\x02\x02\x02" +
		"\u0106\u0104\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0110\x03" +
		"\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0109\u010B\x070\x02\x02\u010A" +
		"\u010C\t\x03\x02\x02\u010B\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02" +
		"\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0110" +
		"\x03\x02\x02\x02\u010F\u0100\x03\x02\x02\x02\u010F\u0101\x03\x02\x02\x02" +
		"\u010F\u0109\x03\x02\x02\x02\u0110L\x03\x02\x02\x02\u0111\u0112\x07k\x02" +
		"\x02\u0112\u0113\x07h\x02\x02\u0113N\x03\x02\x02\x02\u0114\u0115\x07g" +
		"\x02\x02\u0115\u0116\x07n\x02\x02\u0116\u0117\x07u\x02\x02\u0117\u0118" +
		"\x07g\x02\x02\u0118P\x03\x02\x02\x02\u0119\u011A\x07h\x02\x02\u011A\u011B" +
		"\x07q\x02\x02\u011B\u011C\x07t\x02\x02\u011CR\x03\x02\x02\x02\u011D\u011E" +
		"\x07f\x02\x02\u011E\u011F\x07q\x02\x02\u011FT\x03\x02\x02\x02\u0120\u0121" +
		"\x07y\x02\x02\u0121\u0122\x07j\x02\x02\u0122\u0123\x07k\x02\x02\u0123" +
		"\u0124\x07n\x02\x02\u0124\u0125\x07g\x02\x02\u0125V\x03\x02\x02\x02\u0126" +
		"\u0127\x07e\x02\x02\u0127\u0128\x07q\x02\x02\u0128\u0129\x07p\x02\x02" +
		"\u0129\u012A\x07v\x02\x02\u012A\u012B\x07k\x02\x02\u012B\u012C\x07p\x02" +
		"\x02\u012C\u012D\x07w\x02\x02\u012D\u012E\x07g\x02\x02\u012EX\x03\x02" +
		"\x02\x02\u012F\u0130\x07d\x02\x02\u0130\u0131\x07t\x02\x02\u0131\u0132" +
		"\x07g\x02\x02\u0132\u0133\x07c\x02\x02\u0133\u0134\x07m\x02\x02\u0134" +
		"Z\x03\x02\x02\x02\u0135\u0136\x07n\x02\x02\u0136\u0137\x07q\x02\x02\u0137" +
		"\u0138\x07i\x02\x02\u0138\\\x03\x02\x02\x02\u0139\u013A\x07x\x02\x02\u013A" +
		"\u013B\x07c\x02\x02\u013B\u013C\x07t\x02\x02\u013C^\x03\x02\x02\x02\u013D" +
		"\u013E\x07n\x02\x02\u013E\u013F\x07g\x02\x02\u013F\u0140\x07v\x02\x02" +
		"\u0140`\x03\x02\x02\x02\u0141\u0142\x07e\x02\x02\u0142\u0143\x07q\x02" +
		"\x02\u0143\u0144\x07p\x02\x02\u0144\u0145\x07u\x02\x02\u0145\u0146\x07" +
		"v\x02\x02\u0146b\x03\x02\x02\x02\u0147\u014B\x05\x7F@\x02\u0148\u014A" +
		"\x05}?\x02\u0149\u0148\x03\x02\x02\x02\u014A\u014D\x03\x02\x02\x02\u014B" +
		"\u0149\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014Cd\x03\x02\x02" +
		"\x02\u014D\u014B\x03\x02\x02\x02\u014E\u0152\x07$\x02\x02\u014F\u0151" +
		"\x05m7\x02\u0150\u014F\x03\x02\x02\x02\u0151\u0154\x03\x02\x02\x02\u0152" +
		"\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0155\x03\x02" +
		"\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155\u015F\x07$\x02\x02\u0156\u015A" +
		"\x07)\x02\x02\u0157\u0159\x05o8\x02\u0158\u0157\x03\x02\x02\x02\u0159" +
		"\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B\u015D\x03\x02\x02\x02\u015C\u015A\x03\x02\x02\x02\u015D" +
		"\u015F\x07)\x02\x02\u015E\u014E\x03\x02\x02\x02\u015E\u0156\x03\x02\x02" +
		"\x02\u015Ff\x03\x02\x02\x02\u0160\u0162\t\x04\x02\x02\u0161\u0160\x03" +
		"\x02\x02\x02\u0162\u0163\x03\x02\x02\x02\u0163\u0161\x03\x02\x02\x02\u0163" +
		"\u0164\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0166\b4\x02" +
		"\x02\u0166h\x03\x02\x02\x02\u0167\u0168\t\x02\x02\x02\u0168\u0169\x03" +
		"\x02\x02\x02\u0169\u016A\b5\x02\x02\u016Aj\x03\x02\x02\x02\u016B\u016C" +
		"\v\x02\x02\x02\u016C\u016D\x03\x02\x02\x02\u016D\u016E\b6\x03\x02\u016E" +
		"l\x03\x02\x02\x02\u016F\u0173\n\x05\x02\x02\u0170\u0171\x07^\x02\x02\u0171" +
		"\u0173\x05q9\x02\u0172\u016F\x03\x02\x02\x02\u0172\u0170\x03\x02\x02\x02" +
		"\u0173n\x03\x02\x02\x02\u0174\u0178\n\x06\x02\x02\u0175\u0176\x07^\x02" +
		"\x02\u0176\u0178\x05q9\x02\u0177\u0174\x03\x02\x02\x02\u0177\u0175\x03" +
		"\x02\x02\x02\u0178p\x03\x02\x02\x02\u0179\u017A\x05s:\x02\u017Ar\x03\x02" +
		"\x02\x02\u017B\u017E\x05u;\x02\u017C\u017E\x05w<\x02\u017D\u017B\x03\x02" +
		"\x02\x02\u017D\u017C\x03\x02\x02\x02\u017Et\x03\x02\x02\x02\u017F\u0180" +
		"\t\x07\x02\x02\u0180v\x03\x02\x02\x02\u0181\u0182\n\b\x02\x02\u0182x\x03" +
		"\x02\x02\x02\u0183\u0186\x05u;\x02\u0184\u0186\t\t\x02\x02\u0185\u0183" +
		"\x03\x02\x02\x02\u0185\u0184\x03\x02\x02\x02\u0186z\x03\x02\x02\x02\u0187" +
		"\u0190\x072\x02\x02\u0188\u018C\t\n\x02\x02\u0189\u018B\t\x03\x02\x02" +
		"\u018A\u0189\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018A\x03" +
		"\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E" +
		"\u018C\x03\x02\x02\x02\u018F\u0187\x03\x02\x02\x02\u018F\u0188\x03\x02" +
		"\x02\x02\u0190|\x03\x02\x02\x02\u0191\u0197\x05\x7F@\x02\u0192\u0197\x05" +
		"\x83B\x02\u0193\u0197\x05\x85C\x02\u0194\u0197\x05\x87D\x02\u0195\u0197" +
		"\x04\u200E\u200F\x02\u0196\u0191\x03\x02\x02\x02\u0196\u0192\x03\x02\x02" +
		"\x02\u0196\u0193\x03\x02\x02\x02\u0196\u0194\x03\x02\x02\x02\u0196\u0195" +
		"\x03\x02\x02\x02\u0197~\x03\x02\x02\x02\u0198\u019B\x05\x81A\x02\u0199" +
		"\u019B\t\v\x02\x02\u019A\u0198\x03\x02\x02\x02\u019A\u0199\x03\x02\x02" +
		"\x02\u019B\x80\x03\x02\x02\x02\u019C\u019E\t\f\x02\x02\u019D\u019C\x03" +
		"\x02\x02\x02\u019E\x82\x03\x02\x02\x02\u019F\u01A1\t\r\x02\x02\u01A0\u019F" +
		"\x03\x02\x02\x02\u01A1\x84\x03\x02\x02\x02\u01A2\u01A4\t\x0E\x02\x02\u01A3" +
		"\u01A2\x03\x02\x02\x02\u01A4\x86\x03\x02\x02\x02\u01A5\u01A7\t\x0F\x02" +
		"\x02\u01A6\u01A5\x03\x02\x02\x02\u01A7\x88\x03\x02\x02\x02\x1A\x02\x8F" +
		"\x9D\xFE\u0106\u010D\u010F\u014B\u0152\u015A\u015E\u0163\u0172\u0177\u017D" +
		"\u0185\u018C\u018F\u0196\u019A\u019D\u01A0\u01A3\u01A6\x04\x02\x03\x02" +
		"\x02\x04\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TysonLexer.__ATN) {
			TysonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TysonLexer._serializedATN));
		}

		return TysonLexer.__ATN;
	}

}

