import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isStatement } from "scripts/Syntax/Statements/isStatement";

export const syntaxAnalyse = (lexemas: Lexema[], mode: boolean): AnalyzeResult => {
  if (!lexemas || lexemas.length === 0) {
    return {
      isSuccessfull: true,
      foundedLexema: {
        type: "Programm",
        details: "Tyson programm",
        row: 0,
        column: 0,
        body: [],
      },
      rest: lexemas,
      log: ["Не передано ни одной лексемы"],
    };
  }

  const result: AnalyzeResult = {
    isSuccessfull: true,
    foundedLexema: {
      type: "Programm",
      details: "Tyson programm",
      row: lexemas[0]?.row,
      column: lexemas[0]?.column,
      body: [],
    },
    rest: lexemas,
    log: [],
  };

  let statement: AnalyzeResult;

  do {
    try {
      statement = isStatement(result.rest, mode);
      result.log.push(...statement.log);
    } catch (e) {
      console.warn(e);
      result.log.push(`!${e}`);
      statement = null;
    }
    if (!statement?.isSuccessfull) {
      result.isSuccessfull = false;
      break;
    }

    // @ts-ignore
    result.foundedLexema.body.push(statement.foundedLexema);
    result.rest = statement.rest;
  } while (result.rest?.length > 0);

  console.log("Result: ", result);
  return result;
};
