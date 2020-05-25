import { AnalyzeResult, Lexema } from "interfaces/Interface";

const operators = ["++", "--", "+", "-", "!"];

// ++ singleExpression      # PreIncrementExpression
// -- singleExpression      # PreDecreaseExpression
// +  singleExpression      # UnaryPlusExpression
// -  singleExpression      # UnaryMinusExpression
// '!' singleExpression
export function isLeftUnarExpression(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].type !== "keysymbol" || !operators.includes(String(lexemas[0].body))) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1].type !== "identificator") {
    log.push(`!После унарного оператора '${lexemas[0].body}' не последовал идентификатор`);
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
      details: "Left Unar Expression",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], lexemas[0]],
    },
    rest: lexemas.slice(2),
    log,
  };
}
