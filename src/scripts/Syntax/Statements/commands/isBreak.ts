import { AnalyzeResult, Lexema } from "interfaces/Interface";

export function isBreak(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].body !== "break") {
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
        ? `!Из магазина получена комманда break. Из стека ожидалась закрывающая скобка, но получен ${lexemas[1].body}`
        : "!Пропущена закрывающая скобка после break",
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
