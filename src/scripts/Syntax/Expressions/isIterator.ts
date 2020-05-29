import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { PlusPlus, MinusMinus } from "scripts/keySymbols";

import { syntax } from "scripts/store";

const operators = [PlusPlus, MinusMinus];
const functions = [isLeftUnarIterator, isRightUnarIterator];

export function isIterator(lexemas: Lexema[]): AnalyzeResult {
  for (let check of functions) {
    let result = check(lexemas);
    if (result.isSuccessfull) {
      return result;
    }
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
  };
}

// ++ Identifier      # PreIncrementExpression
// -- Identifier      # PreDecreaseExpression
export function isLeftUnarIterator(lexemas: Lexema[]): AnalyzeResult {
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
      type: "Iterator",
      details: "Left Unar Iterator",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [{ ...lexemas[0], details: "Pre" }, lexemas[1]],
    },
    rest: lexemas.slice(2),
  };
}

// Identifier ++      # PostIncrementExpression
// Identifier --      # PostDecreaseExpression
export function isRightUnarIterator(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type !== "identificator") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || !operators.map((op) => op.id).includes(lexemas[1]?.id)) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Iterator",
      details: "Right operator Single Expression",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], { ...lexemas[1], details: "Post" }],
    },
    rest: lexemas.slice(2),
  };
}
