import { AnalyzeResult, BaseLexema } from "interfaces/Interface";
import { isStatement } from "scripts/Syntax/Statements/isStatement";

import { syntax } from "scripts/store";

export const syntaxAnalyse = (lexemas: BaseLexema[]): AnalyzeResult => {
  syntax.clearLog();

  if (!lexemas || lexemas.length === 0) {
    syntax.pushLog("Не передано ни одной лексемы");
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
  };

  let statement: AnalyzeResult;

  do {
    try {
      statement = isStatement(result.rest);
    } catch (e) {
      console.warn(e);
      syntax.pushLog(`!${e}`);
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
