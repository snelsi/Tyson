import { AnalyzeResult, Template, Lexema } from "interfaces/Interface";
import { isConstExpr, isCondition } from "scripts/Syntax";

const template: Template = {
  type: "Expr",
  details: "Expression that returns value",
};

export function isExpr(lexemas: Lexema[], checkForCondition = true): AnalyzeResult {
  if (lexemas.length === 0) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: ["!Не был передан массив слов, невозможно составить Expression"],
    };
  }

  if (lexemas[0].type === "Expr") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log: ["Первый член массива слов уже определён как Expression"],
    };
  }

  const log = [];

  let result: AnalyzeResult;
  if (checkForCondition) {
    result = isCondition(lexemas);

    if (result.isSuccessfull) {
      log.push(...result.log);
      return {
        isSuccessfull: true,
        foundedLexema: result.foundedLexema,
        rest: result.rest,
        log,
      };
    }
  }
  result = isConstExpr(lexemas);
  log.push(...result.log);

  if (result.isSuccessfull) {
    return {
      isSuccessfull: true,
      foundedLexema: result.foundedLexema,
      rest: result.rest,
      log,
    };
  }

  if (lexemas[0].type === "identificator") {
    return {
      isSuccessfull: true,
      foundedLexema: {
        ...template,
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: [lexemas[0]],
      },
      rest: lexemas.slice(1),
      log,
    };
  }

  log.push("!Не удалось найти Expression");
  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}
