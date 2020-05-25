import { AnalyzeResult, Lexema } from "interfaces/Interface";

export function isContinue(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].body !== "continue") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== 3) {
    log.push(
      mode
        ? `!Из магазина получена комманда continue. Из стека ожидалась закрывающая скобка, но получен ${lexemas[1].body}`
        : "!Пропущена закрывающая скобка после continue",
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
