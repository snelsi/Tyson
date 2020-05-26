import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { Semicolon } from "scripts/keySymbols";
import { Break } from "scripts/keyWords";

export function isBreak(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].id !== Break.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== Semicolon.id) {
    log.push(
      mode
        ? `!Из магазина получена комманда break. Из стека ожидалась точка с запятой, но получен ${lexemas[1].body}`
        : "!Пропущена точка с запятой после break",
    );

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
      type: "Statement",
      details: "Комманда break",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // break
        lexemas[1], // ;
      ],
    },
    rest: lexemas.slice(2),
    log,
  };
}
