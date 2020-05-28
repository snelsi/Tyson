import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { Semicolon } from "scripts/keySymbols";
import { Break } from "scripts/keyWords";

import { syntax } from "scripts/store";

export function isBreak(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0].id !== Break.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== Semicolon.id) {
    syntax.pushLog(
      `!Из магазина получена комманда break. Из стека ожидалась точка с запятой, но получен ${lexemas[1].body}`,
      "!Пропущена точка с запятой после break",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Break",
      details: "Комманда break",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // break
        lexemas[1], // ;
      ],
    },
    rest: lexemas.slice(2),
  };
}
