import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isSingleExpression } from "scripts/Syntax";

import {
  Power,
  Plus,
  Minus,
  Modulus,
  Divide,
  Multiply,
  LessThan,
  LessThanEquals,
  MoreThan,
  MoreThanEquals,
  Equals,
  NotEquals,
  StrictEquals,
  StrictNotEquals,
  And,
  Or,
} from "scripts/keySymbols";

const operators = [
  Power,
  Multiply,
  Divide,
  Modulus,
  Plus,
  Minus,
  LessThan,
  LessThanEquals,
  MoreThan,
  MoreThanEquals,
  Equals,
  NotEquals,
  StrictEquals,
  StrictNotEquals,
  And,
  Or,
];

// Power singleExpression                                                         # PowerExpression
// (Multiply | Divide | Modulus) singleExpression                                 # MultiplicativeExpression
// (Plus | Minus) singleExpression                                                # AdditiveExpression
// (LessThan | MoreThan | LessThanEquals | GreaterThanEquals) singleExpression    # RelationalExpression
// (Equals | NotEquals) singleExpression                                          # EqualityExpression
// And singleExpression                                                           # LogicalAndExpression
// Or singleExpression                                                            # LogicalOrExpression
// assignmentOperator singleExpression                                            # AssignmentOperatorExpression

export function isRightAssociatedExpression(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type !== "keysymbol" || !operators.map((op) => op.id).includes(lexemas[0]?.id)) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  const singleExpression = isSingleExpression(lexemas.slice(1));

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
    };
  }
}
