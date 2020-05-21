// Generated from c:\Users\Snels\Desktop\Tyson\Tyson\src\Tyson\Tyson.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TysonLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, If=6, Else=7, Return=8, For=9, 
		While=10, To=11, Do=12, In=13, Null=14, Or=15, And=16, Equals=17, NEquals=18, 
		GTEquals=19, LTEquals=20, Pow=21, Excl=22, GT=23, LT=24, Add=25, Subtract=26, 
		Multiply=27, Divide=28, Modulus=29, OBrace=30, CBrace=31, OBracket=32, 
		CBracket=33, OParen=34, CParen=35, SColon=36, Assign=37, Comma=38, QMark=39, 
		Colon=40, Bool=41, Number=42, Identifier=43, String=44, Comment=45, Space=46;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "If", "Else", "Return", "For", 
		"While", "To", "Do", "In", "Null", "Or", "And", "Equals", "NEquals", "GTEquals", 
		"LTEquals", "Pow", "Excl", "GT", "LT", "Add", "Subtract", "Multiply", 
		"Divide", "Modulus", "OBrace", "CBrace", "OBracket", "CBracket", "OParen", 
		"CParen", "SColon", "Assign", "Comma", "QMark", "Colon", "Bool", "Number", 
		"Identifier", "String", "Comment", "Space", "Int", "Digit"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'+='", "'-='", "'/='", "'*='", "'^='", "'if'", "'else'", "'return'", 
		"'for'", "'while'", "'to'", "'do'", "'in'", "'null'", "'||'", "'&&'", 
		"'=='", "'!='", "'>='", "'<='", "'^'", "'!'", "'>'", "'<'", "'+'", "'-'", 
		"'*'", "'/'", "'%'", "'{'", "'}'", "'['", "']'", "'('", "')'", "';'", 
		"'='", "','", "'?'", "':'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, "If", "Else", "Return", "For", "While", 
		"To", "Do", "In", "Null", "Or", "And", "Equals", "NEquals", "GTEquals", 
		"LTEquals", "Pow", "Excl", "GT", "LT", "Add", "Subtract", "Multiply", 
		"Divide", "Modulus", "OBrace", "CBrace", "OBracket", "CBracket", "OParen", 
		"CParen", "SColon", "Assign", "Comma", "QMark", "Colon", "Bool", "Number", 
		"Identifier", "String", "Comment", "Space"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TysonLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Tyson.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\60\u012d\b\1\4\2"+
		"\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4"+
		"\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22"+
		"\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31"+
		"\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t"+
		" \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t"+
		"+\4,\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\3\2\3\2\3\2\3\3\3\3\3\3"+
		"\3\4\3\4\3\4\3\5\3\5\3\5\3\6\3\6\3\6\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\3\13\3"+
		"\13\3\f\3\f\3\f\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3"+
		"\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\22\3\23\3\23\3\23\3\24\3\24\3"+
		"\24\3\25\3\25\3\25\3\26\3\26\3\27\3\27\3\30\3\30\3\31\3\31\3\32\3\32\3"+
		"\33\3\33\3\34\3\34\3\35\3\35\3\36\3\36\3\37\3\37\3 \3 \3!\3!\3\"\3\"\3"+
		"#\3#\3$\3$\3%\3%\3&\3&\3\'\3\'\3(\3(\3)\3)\3*\3*\3*\3*\3*\3*\3*\3*\3*"+
		"\5*\u00dd\n*\3+\3+\3+\7+\u00e2\n+\f+\16+\u00e5\13+\5+\u00e7\n+\3,\3,\7"+
		",\u00eb\n,\f,\16,\u00ee\13,\3-\3-\3-\3-\7-\u00f4\n-\f-\16-\u00f7\13-\3"+
		"-\3-\3-\3-\3-\7-\u00fe\n-\f-\16-\u0101\13-\3-\5-\u0104\n-\3.\3.\3.\3."+
		"\7.\u010a\n.\f.\16.\u010d\13.\3.\3.\3.\3.\7.\u0113\n.\f.\16.\u0116\13"+
		".\3.\3.\5.\u011a\n.\3.\3.\3/\3/\3/\3/\3\60\3\60\7\60\u0124\n\60\f\60\16"+
		"\60\u0127\13\60\3\60\5\60\u012a\n\60\3\61\3\61\3\u0114\2\62\3\3\5\4\7"+
		"\5\t\6\13\7\r\b\17\t\21\n\23\13\25\f\27\r\31\16\33\17\35\20\37\21!\22"+
		"#\23%\24\'\25)\26+\27-\30/\31\61\32\63\33\65\34\67\359\36;\37= ?!A\"C"+
		"#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\2a\2\3\2\f\5\2C\\aac|\6\2\62;C\\aac|\3"+
		"\2$$\6\2\f\f\17\17$$^^\4\2\f\f\17\17\3\2))\6\2\f\f\17\17))^^\5\2\13\f"+
		"\16\17\"\"\3\2\63;\3\2\62;\2\u0138\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2\2"+
		"\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23\3"+
		"\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2\2"+
		"\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2\2\2)\3\2\2"+
		"\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2"+
		"\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2\2\2A\3\2\2"+
		"\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2M\3\2\2\2\2"+
		"O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3\2\2\2\2[\3"+
		"\2\2\2\2]\3\2\2\2\3c\3\2\2\2\5f\3\2\2\2\7i\3\2\2\2\tl\3\2\2\2\13o\3\2"+
		"\2\2\rr\3\2\2\2\17u\3\2\2\2\21z\3\2\2\2\23\u0081\3\2\2\2\25\u0085\3\2"+
		"\2\2\27\u008b\3\2\2\2\31\u008e\3\2\2\2\33\u0091\3\2\2\2\35\u0094\3\2\2"+
		"\2\37\u0099\3\2\2\2!\u009c\3\2\2\2#\u009f\3\2\2\2%\u00a2\3\2\2\2\'\u00a5"+
		"\3\2\2\2)\u00a8\3\2\2\2+\u00ab\3\2\2\2-\u00ad\3\2\2\2/\u00af\3\2\2\2\61"+
		"\u00b1\3\2\2\2\63\u00b3\3\2\2\2\65\u00b5\3\2\2\2\67\u00b7\3\2\2\29\u00b9"+
		"\3\2\2\2;\u00bb\3\2\2\2=\u00bd\3\2\2\2?\u00bf\3\2\2\2A\u00c1\3\2\2\2C"+
		"\u00c3\3\2\2\2E\u00c5\3\2\2\2G\u00c7\3\2\2\2I\u00c9\3\2\2\2K\u00cb\3\2"+
		"\2\2M\u00cd\3\2\2\2O\u00cf\3\2\2\2Q\u00d1\3\2\2\2S\u00dc\3\2\2\2U\u00de"+
		"\3\2\2\2W\u00e8\3\2\2\2Y\u0103\3\2\2\2[\u0119\3\2\2\2]\u011d\3\2\2\2_"+
		"\u0129\3\2\2\2a\u012b\3\2\2\2cd\7-\2\2de\7?\2\2e\4\3\2\2\2fg\7/\2\2gh"+
		"\7?\2\2h\6\3\2\2\2ij\7\61\2\2jk\7?\2\2k\b\3\2\2\2lm\7,\2\2mn\7?\2\2n\n"+
		"\3\2\2\2op\7`\2\2pq\7?\2\2q\f\3\2\2\2rs\7k\2\2st\7h\2\2t\16\3\2\2\2uv"+
		"\7g\2\2vw\7n\2\2wx\7u\2\2xy\7g\2\2y\20\3\2\2\2z{\7t\2\2{|\7g\2\2|}\7v"+
		"\2\2}~\7w\2\2~\177\7t\2\2\177\u0080\7p\2\2\u0080\22\3\2\2\2\u0081\u0082"+
		"\7h\2\2\u0082\u0083\7q\2\2\u0083\u0084\7t\2\2\u0084\24\3\2\2\2\u0085\u0086"+
		"\7y\2\2\u0086\u0087\7j\2\2\u0087\u0088\7k\2\2\u0088\u0089\7n\2\2\u0089"+
		"\u008a\7g\2\2\u008a\26\3\2\2\2\u008b\u008c\7v\2\2\u008c\u008d\7q\2\2\u008d"+
		"\30\3\2\2\2\u008e\u008f\7f\2\2\u008f\u0090\7q\2\2\u0090\32\3\2\2\2\u0091"+
		"\u0092\7k\2\2\u0092\u0093\7p\2\2\u0093\34\3\2\2\2\u0094\u0095\7p\2\2\u0095"+
		"\u0096\7w\2\2\u0096\u0097\7n\2\2\u0097\u0098\7n\2\2\u0098\36\3\2\2\2\u0099"+
		"\u009a\7~\2\2\u009a\u009b\7~\2\2\u009b \3\2\2\2\u009c\u009d\7(\2\2\u009d"+
		"\u009e\7(\2\2\u009e\"\3\2\2\2\u009f\u00a0\7?\2\2\u00a0\u00a1\7?\2\2\u00a1"+
		"$\3\2\2\2\u00a2\u00a3\7#\2\2\u00a3\u00a4\7?\2\2\u00a4&\3\2\2\2\u00a5\u00a6"+
		"\7@\2\2\u00a6\u00a7\7?\2\2\u00a7(\3\2\2\2\u00a8\u00a9\7>\2\2\u00a9\u00aa"+
		"\7?\2\2\u00aa*\3\2\2\2\u00ab\u00ac\7`\2\2\u00ac,\3\2\2\2\u00ad\u00ae\7"+
		"#\2\2\u00ae.\3\2\2\2\u00af\u00b0\7@\2\2\u00b0\60\3\2\2\2\u00b1\u00b2\7"+
		">\2\2\u00b2\62\3\2\2\2\u00b3\u00b4\7-\2\2\u00b4\64\3\2\2\2\u00b5\u00b6"+
		"\7/\2\2\u00b6\66\3\2\2\2\u00b7\u00b8\7,\2\2\u00b88\3\2\2\2\u00b9\u00ba"+
		"\7\61\2\2\u00ba:\3\2\2\2\u00bb\u00bc\7\'\2\2\u00bc<\3\2\2\2\u00bd\u00be"+
		"\7}\2\2\u00be>\3\2\2\2\u00bf\u00c0\7\177\2\2\u00c0@\3\2\2\2\u00c1\u00c2"+
		"\7]\2\2\u00c2B\3\2\2\2\u00c3\u00c4\7_\2\2\u00c4D\3\2\2\2\u00c5\u00c6\7"+
		"*\2\2\u00c6F\3\2\2\2\u00c7\u00c8\7+\2\2\u00c8H\3\2\2\2\u00c9\u00ca\7="+
		"\2\2\u00caJ\3\2\2\2\u00cb\u00cc\7?\2\2\u00ccL\3\2\2\2\u00cd\u00ce\7.\2"+
		"\2\u00ceN\3\2\2\2\u00cf\u00d0\7A\2\2\u00d0P\3\2\2\2\u00d1\u00d2\7<\2\2"+
		"\u00d2R\3\2\2\2\u00d3\u00d4\7v\2\2\u00d4\u00d5\7t\2\2\u00d5\u00d6\7w\2"+
		"\2\u00d6\u00dd\7g\2\2\u00d7\u00d8\7h\2\2\u00d8\u00d9\7c\2\2\u00d9\u00da"+
		"\7n\2\2\u00da\u00db\7u\2\2\u00db\u00dd\7g\2\2\u00dc\u00d3\3\2\2\2\u00dc"+
		"\u00d7\3\2\2\2\u00ddT\3\2\2\2\u00de\u00e6\5_\60\2\u00df\u00e3\7\60\2\2"+
		"\u00e0\u00e2\5a\61\2\u00e1\u00e0\3\2\2\2\u00e2\u00e5\3\2\2\2\u00e3\u00e1"+
		"\3\2\2\2\u00e3\u00e4\3\2\2\2\u00e4\u00e7\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e6"+
		"\u00df\3\2\2\2\u00e6\u00e7\3\2\2\2\u00e7V\3\2\2\2\u00e8\u00ec\t\2\2\2"+
		"\u00e9\u00eb\t\3\2\2\u00ea\u00e9\3\2\2\2\u00eb\u00ee\3\2\2\2\u00ec\u00ea"+
		"\3\2\2\2\u00ec\u00ed\3\2\2\2\u00edX\3\2\2\2\u00ee\u00ec\3\2\2\2\u00ef"+
		"\u00f5\t\4\2\2\u00f0\u00f4\n\5\2\2\u00f1\u00f2\7^\2\2\u00f2\u00f4\n\6"+
		"\2\2\u00f3\u00f0\3\2\2\2\u00f3\u00f1\3\2\2\2\u00f4\u00f7\3\2\2\2\u00f5"+
		"\u00f3\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6\u00f8\3\2\2\2\u00f7\u00f5\3\2"+
		"\2\2\u00f8\u0104\t\4\2\2\u00f9\u00ff\t\7\2\2\u00fa\u00fe\n\b\2\2\u00fb"+
		"\u00fc\7^\2\2\u00fc\u00fe\n\6\2\2\u00fd\u00fa\3\2\2\2\u00fd\u00fb\3\2"+
		"\2\2\u00fe\u0101\3\2\2\2\u00ff\u00fd\3\2\2\2\u00ff\u0100\3\2\2\2\u0100"+
		"\u0102\3\2\2\2\u0101\u00ff\3\2\2\2\u0102\u0104\t\7\2\2\u0103\u00ef\3\2"+
		"\2\2\u0103\u00f9\3\2\2\2\u0104Z\3\2\2\2\u0105\u0106\7\61\2\2\u0106\u0107"+
		"\7\61\2\2\u0107\u010b\3\2\2\2\u0108\u010a\n\6\2\2\u0109\u0108\3\2\2\2"+
		"\u010a\u010d\3\2\2\2\u010b\u0109\3\2\2\2\u010b\u010c\3\2\2\2\u010c\u011a"+
		"\3\2\2\2\u010d\u010b\3\2\2\2\u010e\u010f\7\61\2\2\u010f\u0110\7,\2\2\u0110"+
		"\u0114\3\2\2\2\u0111\u0113\13\2\2\2\u0112\u0111\3\2\2\2\u0113\u0116\3"+
		"\2\2\2\u0114\u0115\3\2\2\2\u0114\u0112\3\2\2\2\u0115\u0117\3\2\2\2\u0116"+
		"\u0114\3\2\2\2\u0117\u0118\7,\2\2\u0118\u011a\7\61\2\2\u0119\u0105\3\2"+
		"\2\2\u0119\u010e\3\2\2\2\u011a\u011b\3\2\2\2\u011b\u011c\b.\2\2\u011c"+
		"\\\3\2\2\2\u011d\u011e\t\t\2\2\u011e\u011f\3\2\2\2\u011f\u0120\b/\2\2"+
		"\u0120^\3\2\2\2\u0121\u0125\t\n\2\2\u0122\u0124\5a\61\2\u0123\u0122\3"+
		"\2\2\2\u0124\u0127\3\2\2\2\u0125\u0123\3\2\2\2\u0125\u0126\3\2\2\2\u0126"+
		"\u012a\3\2\2\2\u0127\u0125\3\2\2\2\u0128\u012a\7\62\2\2\u0129\u0121\3"+
		"\2\2\2\u0129\u0128\3\2\2\2\u012a`\3\2\2\2\u012b\u012c\t\13\2\2\u012cb"+
		"\3\2\2\2\21\2\u00dc\u00e3\u00e6\u00ec\u00f3\u00f5\u00fd\u00ff\u0103\u010b"+
		"\u0114\u0119\u0125\u0129\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}