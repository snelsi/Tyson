grammar Tyson;

prog: (statement)* EOF;

statement:
	'{' statement '}'
	| assignment ';'
	| functionCall ';'
	| ifStatement
	| forStatement
	| whileStatement
	| Return expression ';';

assignment:
	Identifier indexes? ('=' | '+=' | '-=' | '/=' | '*=' | '^=') expression;

functionCall:
	Identifier '(' exprList? ')' # identifierFunctionCall;

ifStatement: ifStat elseIfStat* elseStat?;

ifStat: If '(' expression ')' statement;

elseIfStat: Else If '(' expression ')' statement;

elseStat: Else statement;

forStatement:
	For '(' assignment ';' expression ';' assignment ')' statement;

whileStatement: While '(' expression ')' statement;

exprList: expression ( ',' expression)*;

expression:
	'-' expression											# unaryMinusExpression
	| '!' expression										# notExpression
	| <assoc = right> expression '^' expression				# powerExpression
	| expression op = ('*' | '/' | '%') expression			# multExpression
	| expression op = ('+' | '-') expression				# addExpression
	| expression op = ('>=' | '<=' | '>' | '<') expression	# compExpression
	| expression op = ('==' | '!=') expression				# eqExpression
	| expression '&&' expression							# andExpression
	| expression '||' expression							# orExpression
	| expression '?' expression ':' expression				# ternaryExpression
	| expression In expression								# inExpression
	| Number												# numberExpression
	| Bool													# boolExpression
	| Null													# nullExpression
	| functionCall indexes?									# functionCallExpression
	| list indexes?											# listExpression
	| Identifier indexes?									# identifierExpression
	| String indexes?										# stringExpression
	| '(' expression ')' indexes?							# expressionExpression;

list: '[' exprList? ']';

indexes: ( '[' expression ']')+;

If: 'if';
Else: 'else';
Return: 'return';
For: 'for';
While: 'while';
To: 'to';
Do: 'do';
In: 'in';
Null: 'null';

Or: '||';
And: '&&';
Equals: '==';
NEquals: '!=';
GTEquals: '>=';
LTEquals: '<=';
Pow: '^';
Excl: '!';
GT: '>';
LT: '<';
Add: '+';
Subtract: '-';
Multiply: '*';
Divide: '/';
Modulus: '%';
OBrace: '{';
CBrace: '}';
OBracket: '[';
CBracket: ']';
OParen: '(';
CParen: ')';
SColon: ';';
Assign: '=';
Comma: ',';
QMark: '?';
Colon: ':';

Bool: 'true' | 'false';

Number: Int ( '.' Digit*)?;

Identifier: [a-zA-Z_] [a-zA-Z_0-9]*;

String:
	["] (~["\r\n\\] | '\\' ~[\r\n])* ["]
	| ['] ( ~['\r\n\\] | '\\' ~[\r\n])* ['];
Comment: ( '//' ~[\r\n]* | '/*' .*? '*/') -> skip;
Space: [ \t\r\n\u000C] -> skip;
fragment Int: [1-9] Digit* | '0';

fragment Digit: [0-9];
