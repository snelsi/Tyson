import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { Semicolon } from "scripts/keySymbols";

import { syntax } from "scripts/store";

/**
 * ;
 */
export function isEmptyStatement(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type !== "keysymbol" || lexemas[0].id !== Semicolon.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Встречена точка с запятой.");

  syntax.pushLog("Составлен пустой Statement");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Empty",
      details: "Пустой Statement",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0]],
    },
    rest: lexemas.slice(1),
  };
}
