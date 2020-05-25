import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isSingleExpression } from "scripts/Syntax";

const operators = ["^", "*", "/", "%", "+", "-", "<", "<=", ">", ">=", "==", "!=", "&&", "||"];

// Power singleExpression                                                         # PowerExpression
// (Multiply | Divide | Modulus) singleExpression                                 # MultiplicativeExpression
// (Plus | Minus) singleExpression                                                # AdditiveExpression
// (LessThan | MoreThan | LessThanEquals | GreaterThanEquals) singleExpression    # RelationalExpression
// (Equals | NotEquals) singleExpression                                          # EqualityExpression
// And singleExpression                                                           # LogicalAndExpression
// Or singleExpression                                                            # LogicalOrExpression
// assignmentOperator singleExpression                                            # AssignmentOperatorExpression

export function isRightAssociatedExpression(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].type !== "keysymbol" || !operators.includes(String(lexemas[0].body))) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const singleExpression = isSingleExpression(lexemas.slice(1), mode);
  log.push(...singleExpression.log);

  if (singleExpression.isSuccessfull) {
    return {
      isSuccessfull: true,
      foundedLexema: {
        type: "Expression",
        details: "Right Associated Expression",
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: [lexemas[0], singleExpression.foundedLexema],
      },
      rest: singleExpression.rest,
      log,
    };
  }
}
