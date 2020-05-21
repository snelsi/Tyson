import { AnalyzeResult, Template, Lexema } from "interfaces/Interface";
import { isExpr, isComparisonOperator } from "scripts/Syntax";

const template: Template = {
  type: "Condition",
  details: "Boolean logical condition",
};

const checkForSingleCondition = (lexemas: Lexema[]): AnalyzeResult => {
  if (lexemas.length < 3) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: ["Невозможно составить условие, передано меньше трёх лексем"],
    };
  }
  const log = [];

  const expr1 = isExpr(lexemas, false);
  log.push(...expr1.log);

  if (!expr1.isSuccessfull) {
    log.push(`!Отсутствует Expression перед ${lexemas[0].body}`);
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const comparison = isComparisonOperator(expr1?.rest);
  log.push(...comparison.log);

  if (!comparison?.isSuccessfull) {
    log.push(`Отсутствует оператор сравнения перед ${expr1?.rest[0].body}`);
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const expr2 = isExpr(comparison.rest, false);
  log.push(...expr2.log);
  if (!expr2?.isSuccessfull) {
    log.push("Пропущен второй Expression");
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
      ...template,
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [expr1.foundedLexema, comparison.foundedLexema, expr2.foundedLexema],
    },
    rest: expr2.rest,
    log,
  };
};

export function isCondition(lexemas: Lexema[], mode = false): AnalyzeResult {
  if (lexemas.length === 0) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: ["!Не был передан массив слов, невозможно составить Condition"],
    };
  }

  if (lexemas[0].type === "Condition") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log: ["Первый член массива слов уже определён как Condition"],
    };
  }
  const log = [];

  if (lexemas[0].id === 4) {
    const result = checkForSingleCondition(lexemas.slice(1));
    log.push(...result.log);

    if (!result.isSuccessfull) {
      log.push(
        mode
          ? `!Встречен токен ${lexemas[1].body} после открывающей скобки. Ожидался Condition!`
          : "!После открывающей круглой скобки должен идти Condition!",
      );

      return {
        isSuccessfull: false,
        foundedLexema: null,
        rest: lexemas,
        log,
      };
    }

    // закрывающая скобка
    if (result.rest[0].id !== 5) {
      log.push("!Не найдена закрывающая скобка для Condition");
      return {
        isSuccessfull: false,
        foundedLexema: null,
        rest: lexemas,
        log,
      };
    }

    log.push("Составлен Condition");
    return {
      isSuccessfull: true,
      foundedLexema: {
        ...template,
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: [lexemas[0], result.foundedLexema, result.rest[0]],
      },
      rest: result.rest.slice(1),
      log,
    };
  }

  const result = checkForSingleCondition(lexemas);

  if (result.isSuccessfull) {
    log.push(...result.log);
    log.push("Составлен Condition");
    return {
      isSuccessfull: true,
      foundedLexema: result.foundedLexema,
      rest: result.rest,
      log,
    };
  }

  log.push("Не удалось найти Condition");
  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}
