import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { PlusPlus, MinusMinus } from "scripts/keySymbols";

const operators = [PlusPlus, MinusMinus];
const functions = [isLeftUnarIterator, isRightUnarIterator];

export function isIterator(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  for (let check of functions) {
    let result = check(lexemas);
    log.push(...result.log);
    if (result.isSuccessfull) {
      return result;
    }
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}

// ++ Identifier      # PreIncrementExpression
// -- Identifier      # PreDecreaseExpression
export function isLeftUnarIterator(lexemas: Lexema[]): AnalyzeResult {
  const log = [];

  if (lexemas[0]?.type !== "keysymbol" || !operators.map((op) => op.id).includes(lexemas[0]?.id)) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1]?.type !== "identificator") {
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
      details: "Left Unar Iterator",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [{ ...lexemas[0], details: "Pre" }, lexemas[1]],
    },
    rest: lexemas.slice(2),
    log,
  };
}

// Identifier ++      # PostIncrementExpression
// Identifier --      # PostDecreaseExpression
export function isRightUnarIterator(lexemas: Lexema[]): AnalyzeResult {
  const log = [];

  if (lexemas[0]?.type !== "identificator") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || !operators.map((op) => op.id).includes(lexemas[1]?.id)) {
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
      body: [lexemas[0], { ...lexemas[1], details: "Post" }],
    },
    rest: lexemas.slice(2),
    log,
  };
}
