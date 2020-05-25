import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isSingleExpression, isRightAssociatedExpression } from ".";

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
export function isExpression(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  const left = isSingleExpression(lexemas, mode);
  log.push(...left.log);
  if (!left.isSuccessfull) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const foundedRightExpressions = [];
  let rest = left.rest;
  let expression = isRightAssociatedExpression(left.rest, mode);
  log.push(...expression.log);

  while (expression.isSuccessfull) {
    foundedRightExpressions.push(
      expression.foundedLexema.body[0],
      expression.foundedLexema.body[1],
    );
    rest = expression.rest;
    expression = isRightAssociatedExpression(expression.rest, mode);
    log.push(...expression.log);
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
    log,
  };
}
