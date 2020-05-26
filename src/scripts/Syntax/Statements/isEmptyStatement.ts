import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { Semicolon } from "scripts/keySymbols";

/**
 * ;
 */
export function isEmptyStatement(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0]?.type !== "keysymbol" || lexemas[0].id !== Semicolon.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push("Встречена точка с запятой.");

  log.push("Составлен пустой Statement");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Statement",
      details: "Пустой Statement",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0]],
    },
    rest: lexemas.slice(1),
    log,
  };
}
