import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { Semicolon } from "scripts/keySymbols";
import { Continue } from "scripts/keyWords";

export function isContinue(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].id !== Continue.id) {
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
        ? `!Из магазина получена комманда continue. Из стека ожидалась точка с запятой, но получен ${lexemas[1].body}`
        : "!Пропущена точка с запятой после continue",
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
      type: "Continue",
      details: "Комманда continue",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // continue
        lexemas[1], // ;
      ],
    },
    rest: lexemas.slice(2),
    log,
  };
}
