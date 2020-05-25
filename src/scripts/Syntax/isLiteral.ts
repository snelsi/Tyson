import { Lexema, AnalyzeResult } from "interfaces/Interface";

// literal
//     : NullLiteral
//     | BooleanLiteral
//     | StringLiteral
//     | numericLiteral
//     ;
export const isLiteral = (lexemas: Lexema[], mode = false): AnalyzeResult => {
  const log = [];

  if (
    lexemas[0].id === 219 || // null
    lexemas[0].id === 208 || // true
    lexemas[0].id === 209 || // false
    lexemas[0].type === "string" ||
    lexemas[0].type === "number"
  ) {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log,
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
};
