parser grammar TysonParser;

options {
    tokenVocab=TysonLexer;
}

program
    : statement* EOF
    ;

statement
    : OpenBrace statement* CloseBrace
    | variableStatement
    | expressionStatement
    | ifStatement
    | iterationStatement
    | continueStatement
    | breakStatement
    | logStatement
    | emptyStatement
    ;

logStatement
: Log OpenParen singleExpression CloseParen
;

emptyStatement
    : SemiColon
    ;

variableStatement
    : variableDeclarationList SemiColon
    ;

variableDeclarationList
    : varModifier Identifier (Assign singleExpression)?
    ;

varModifier
    : Var
    | Let
    | Const
    ;

expressionStatement
    : expressionSequence SemiColon
    ;

ifStatement
    : If OpenParen expressionSequence CloseParen statement (Else statement)?
    ;

iterationStatement
    : Do statement While OpenParen expressionSequence CloseParen SemiColon                                                                             # DoStatement
    | While OpenParen expressionSequence CloseParen statement                                                                                          # WhileStatement
    | For OpenParen (expressionSequence | variableDeclarationList)? SemiColon expressionSequence? SemiColon expressionSequence? CloseParen statement   # ForStatement
    ;

continueStatement
    : Continue SemiColon
    ;

breakStatement
    : Break SemiColon
    ;

elementList
    : (singleExpression (Comma singleExpression)*)?
    ;

expressionSequence
    : singleExpression (Comma singleExpression)*
    ;

singleExpression
    : Identifier                                                                                      # IdentifierExpression
    | literal                                                                                         # LiteralExpression
    | OpenParen expressionSequence CloseParen                                                         # ParenthesizedExpression
    | singleExpression PlusPlus                                                                       # PostIncrementExpression
    | singleExpression MinusMinus                                                                     # PostDecreaseExpression
    | PlusPlus singleExpression                                                                       # PreIncrementExpression
    | MinusMinus singleExpression                                                                     # PreDecreaseExpression
    | Plus singleExpression                                                                           # UnaryPlusExpression
    | Minus singleExpression                                                                          # UnaryMinusExpression
    | Not singleExpression                                                                            # NotExpression
    | <assoc=right> singleExpression Power singleExpression                                           # PowerExpression
    | singleExpression (Multiply | Divide | Modulus) singleExpression                                 # MultiplicativeExpression
    | singleExpression (Plus | Minus) singleExpression                                                # AdditiveExpression
    | singleExpression (LessThan | MoreThan | LessThanEquals | GreaterThanEquals) singleExpression    # RelationalExpression
    | singleExpression (Equals | NotEquals) singleExpression                                          # EqualityExpression
    | singleExpression And singleExpression                                                           # LogicalAndExpression
    | singleExpression Or singleExpression                                                            # LogicalOrExpression
    | <assoc=right> singleExpression assignmentOperator singleExpression                              # AssignmentOperatorExpression
    ;

assignmentOperator
    : Assign
    | MultiplyAssign
    | DivideAssign
    | ModulusAssign
    | PlusAssign
    | MinusAssign
    | PowerAssign
    ;

literal
    : NullLiteral
    | BooleanLiteral
    | StringLiteral
    | numericLiteral
    ;

numericLiteral
    : DecimalLiteral
    ;
