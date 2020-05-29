import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { Plus, Minus, Not } from "scripts/keySymbols";

import { syntax } from "scripts/store";
import { isExpression } from "./isExpression";

const operators = [Plus, Minus, Not];

// +  singleExpression      # UnaryPlusExpression
// -  singleExpression      # UnaryMinusExpression
// '!' singleExpression
export function isLeftUnarExpression(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type !== "keysymbol" || !operators.map((op) => op.id).includes(lexemas[0]?.id)) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  lexemas[0].details = "unar " + lexemas[0].details;

  const expr = isExpression(lexemas.slice(1));

  if (!expr.isSuccessfull) {
    syntax.pushLog(`!После унарного оператора '${lexemas[0].body}' не последовало выражение`);
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Expression",
      details: "Left Unar Expression",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], expr.foundedLexema],
    },
    rest: expr.rest,
  };
}
