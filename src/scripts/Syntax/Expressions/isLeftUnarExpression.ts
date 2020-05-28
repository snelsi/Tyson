import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { Plus, Minus, Not } from "scripts/keySymbols";

import { syntax } from "scripts/store";

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

  if (lexemas[1]?.type !== "identificator") {
    syntax.pushLog(`!После унарного оператора '${lexemas[0].body}' не последовал идентификатор`);
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
      body: [lexemas[0], lexemas[1]],
    },
    rest: lexemas.slice(2),
  };
}
