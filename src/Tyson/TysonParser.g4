parser grammar TysonParser;

options {
    tokenVocab=TysonLexer;
}

program
    : statementList? EOF
    ;

statementList
    : statement+
    ;

statement
    : block
    | variableStatement
    | emptyStatement
    | expressionStatement
    | ifStatement
    | iterationStatement
    | continueStatement
    | breakStatement
    ;

block
    : OpenBrace statementList? CloseBrace
    ;

emptyStatement
    : SemiColon
    ;

variableStatement
    : variableDeclarationList eos
    ;

variableDeclarationList
    : varModifier variableDeclaration
    ;

varModifier
    : Var
    | Let
    | Const
    ;

variableDeclaration
    : assignable (Assign singleExpression)?
    ;

assignable
    : Identifier
    | arrayLiteral
    ;

expressionStatement
    : expressionSequence eos
    ;

ifStatement
    : If OpenParen expressionSequence CloseParen statement (Else statement)?
    ;

iterationStatement
    : Do statement While OpenParen expressionSequence CloseParen eos                                                                                   # DoStatement
    | While OpenParen expressionSequence CloseParen statement                                                                                          # WhileStatement
    | For OpenParen (expressionSequence | variableDeclarationList)? SemiColon expressionSequence? SemiColon expressionSequence? CloseParen statement   # ForStatement
    ;

continueStatement
    : Continue eos
    ;

breakStatement
    : Break eos
    ;

arrayLiteral
    : (OpenBracket elementList CloseBracket)
    ;

elementList
    : (singleExpression (Comma singleExpression)*)?
    ;

expressionSequence
    : singleExpression (Comma singleExpression)*
    ;

singleExpression
    : singleExpression OpenBracket expressionSequence CloseBracket                                    # MemberIndexExpression
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
    | singleExpression QuestionMark singleExpression Colon singleExpression                           # TernaryExpression
    | <assoc=right> singleExpression Assign singleExpression                                          # AssignmentExpression
    | <assoc=right> singleExpression assignmentOperator singleExpression                              # AssignmentOperatorExpression
    | Identifier                                                                                      # IdentifierExpression
    | literal                                                                                         # LiteralExpression
    | arrayLiteral                                                                                    # ArrayLiteralExpression
    | OpenParen expressionSequence CloseParen                                                         # ParenthesizedExpression
    ;

assignmentOperator
    : MultiplyAssign
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

identifierName
    : Identifier
    | reservedWord
    ;

reservedWord
    : keyword
    | NullLiteral
    | BooleanLiteral
    ;

keyword
    : Var
    | Let
    | Const
    | If
    | Else
    | For
    | Do
    | While
    | Break
    | Continue
    ;

eos
    : SemiColon
    | EOF
    ;
