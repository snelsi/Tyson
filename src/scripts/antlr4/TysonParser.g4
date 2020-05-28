parser grammar TysonParser;

options {
    tokenVocab=TysonLexer;
}

program
    : statement* EOF
    ;

statement
    : bracketStatement
    | variableDeclarationStatement
    | assignmentStatement
    | expressionStatement
    | ifStatement
    | iterationStatement
    | continueStatement
    | breakStatement
    | logStatement
    | emptyStatement
    ;

bracketStatement
    : OpenBrace statement* CloseBrace
    ;

logStatement
    : Log OpenParen expression CloseParen
    ;

emptyStatement
    : SemiColon
    ;

variableDeclarationStatement
    : variableDeclaration SemiColon
    ;

variableDeclaration
    : varModifier Identifier (Assign expression)?
    ;

varModifier
    : Var
    | Let
    | Const
    ;

assignmentStatement
    : assignment SemiColon
    ;

assignment
    : Identifier assignmentOperator expression
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

expressionStatement
    : expression SemiColon
    ;

ifStatement
    : If OpenParen expression CloseParen statement (Else statement)?
    ;

iterationStatement
    : Do statement While OpenParen expression CloseParen SemiColon                                                                              # DoStatement
    | While OpenParen expression CloseParen statement                                                                                           # WhileStatement
    | For OpenParen (assignment | variableDeclaration)? SemiColon expression SemiColon (assignment | expression)? CloseParen statement          # ForStatement
    ;

continueStatement
    : Continue SemiColon
    ;

breakStatement
    : Break SemiColon
    ;

expression
    : Identifier                                                                                # IdentifierExpression
    | literal                                                                                   # LiteralExpression
    | OpenParen expression CloseParen                                                           # ParenthesizedExpression
    | Identifier PlusPlus                                                                       # PostIncrementExpression
    | Identifier MinusMinus                                                                     # PostDecreaseExpression
    | PlusPlus Identifier                                                                       # PreIncrementExpression
    | MinusMinus Identifier                                                                     # PreDecreaseExpression
    | Plus expression                                                                           # UnaryPlusExpression
    | Minus expression                                                                          # UnaryMinusExpression
    | Not expression                                                                            # NotExpression
    | <assoc=right> expression Power expression                                                 # PowerExpression
    | expression (Multiply | Divide | Modulus) expression                                       # MultiplicativeExpression
    | expression (Plus | Minus) expression                                                      # AdditiveExpression
    | expression (LessThan | MoreThan | LessThanEquals | GreaterThanEquals) expression          # RelationalExpression
    | expression (Equals | NotEquals | StrictEquals | StrictNotEquals) expression               # EqualityExpression
    | expression And expression                                                                 # LogicalAndExpression
    | <assoc=right> expression Or expression                                                    # LogicalOrExpression
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
