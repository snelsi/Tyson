import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isExpression } from "scripts/Syntax";
import { OpenParen, CloseParen } from "scripts/keySymbols";
import { While } from "scripts/keyWords";

export function isWhile(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].id !== While.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== OpenParen.id) {
    log.push(
      mode
        ? `!Из магазина получен "while". Из стека ожидалась открывающая скобка, но был получен '${lexemas[1].body}'.`
        : "!После while должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const condition = isExpression(lexemas.slice(2), mode);
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

  if (condition.rest[0]?.type !== "keysymbol" || condition.rest[0]?.id !== CloseParen.id) {
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

  const statement = isStatement(condition.rest.slice(1), mode);
  log.push(...statement.log);

  if (!statement.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина был получен цикл while. Из стека ожидалось тело цикла, но получен ${condition.rest[1].body}`
        : "!Пропущено тело цикла while",
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
