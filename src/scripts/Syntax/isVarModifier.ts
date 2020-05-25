import { AnalyzeResult, Lexema } from "interfaces/Interface";

export function isVarModifier(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].body === "var" || lexemas[0].body === "let" || lexemas[0].body === "const") {
    return {
      isSuccessfull: true,
      foundedLexema: {
        type: "Type",
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: lexemas[0].body,
      },
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
}
