import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isSingleExpression, isRightAssociatedExpression } from "scripts/Syntax";

// singleExpression
//     : Identifier                                                                                      # IdentifierExpression
//     | literal                                                                                         # LiteralExpression
//     | OpenParen singleExpression CloseParen                                                           # ParenthesizedExpression
//     | Identifier PlusPlus                                                                             # PostIncrementExpression
//     | Identifier MinusMinus                                                                           # PostDecreaseExpression
//     | PlusPlus Identifier                                                                             # PreIncrementExpression
//     | MinusMinus Identifier                                                                           # PreDecreaseExpression
//     | Plus singleExpression                                                                           # UnaryPlusExpression
//     | Minus singleExpression                                                                          # UnaryMinusExpression
//     | Not singleExpression                                                                            # NotExpression
//     | <assoc=right> singleExpression Power singleExpression                                           # PowerExpression
//     | singleExpression (Multiply | Divide | Modulus) singleExpression                                 # MultiplicativeExpression
//     | singleExpression (Plus | Minus) singleExpression                                                # AdditiveExpression
//     | singleExpression (LessThan | MoreThan | LessThanEquals | GreaterThanEquals) singleExpression    # RelationalExpression
//     | singleExpression (Equals | NotEquals) singleExpression                                          # EqualityExpression
//     | singleExpression And singleExpression                                                           # LogicalAndExpression
//     | <assoc=right> singleExpression Or singleExpression                                              # LogicalOrExpression
//     ;
export function isExpression(lexemas: Lexema[]): AnalyzeResult {
  const left = isSingleExpression(lexemas);
  if (!left.isSuccessfull) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  const foundedRightExpressions = [];
  let rest = left.rest;
  let expression = isRightAssociatedExpression(left.rest);

  while (expression.isSuccessfull) {
    foundedRightExpressions.push(
      expression.foundedLexema.body[0],
      expression.foundedLexema.body[1],
    );
    rest = expression.rest;
    expression = isRightAssociatedExpression(expression.rest);
  }

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Expression",
      details: "Something that return value",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [left.foundedLexema, ...foundedRightExpressions],
    },
    rest,
  };
}
