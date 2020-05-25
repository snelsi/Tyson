import { AnalyzeResult, Lexema } from "interfaces/Interface";

const operators = ["++", "--"];

// ++ singleExpression      # PreIncrementExpression
// -- singleExpression      # PreDecreaseExpression
export function isRightUnarExpression(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].type !== "identificator") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1].type !== "keysymbol" || !operators.includes(String(lexemas[1].body))) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Expression",
      details: "Right operator Single Expression",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], lexemas[0]],
    },
    rest: lexemas.slice(2),
    log,
  };
}
