import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isCondition } from "scripts/Syntax";

export function isDoWhile(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].body !== "do") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const statement = isStatement(lexemas.slice(1), mode);
  log.push(...statement.log);

  if (!statement.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина был получен цикл do. Из стека ожидалось тело цикла, но получен ${statement[1].body}`
        : "!Пропущено тело цикла do",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (statement.rest[0].body !== "while") {
    log.push(
      mode
        ? `!Из магазина был получено тело цикла do. Из стека ожидался 'while', но получен ${statement[1].body}`
        : "!Пропущен 'while' после тела цикла do",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (statement.rest[0]?.type !== "keysymbol" || statement.rest[0]?.id !== 4) {
    log.push(
      mode
        ? `!Из магазина получен "while". Из стека ожидалась открывающая скобка, но был получен '${statement.rest[0].body}'.`
        : "!После while должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const condition = isCondition(lexemas.slice(2), mode);
  log.push(...condition.log);

  if (!condition.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина получена инициализация while, из стека ожидалось условие выхода, но был получен ${lexemas[2].body}`
        : "!Пропущено условие выхода в while",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (condition.rest[0]?.type !== "keysymbol" || condition.rest[0]?.id !== 5) {
    log.push(
      mode
        ? `!Из магазина получено условие. Из стека ожидалась закрывающая скобка, но получен ${condition.rest[0].body}`
        : "!Пропущена закрывающая скобка после условия while",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push(mode ? "Из стека был составлен цикл while, очистка магазина" : "Составлен цикл while");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Statement",
      details: "Цикл while",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // while
        lexemas[1], // (
        condition.foundedLexema,
        condition.rest[0], // )
        statement.foundedLexema,
      ],
    },
    rest: statement.rest,
    log,
  };
}
