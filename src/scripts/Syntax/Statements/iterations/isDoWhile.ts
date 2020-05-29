import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isExpression } from "scripts/Syntax";
import { OpenParen, CloseParen, Semicolon } from "scripts/keySymbols";
import { Do, While } from "scripts/keyWords";

import { syntax } from "scripts/store";

/**
 * do statement while (condition);
 */
export function isDoWhile(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.id !== Do.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  const statement = isStatement(lexemas.slice(1));

  if (!statement.isSuccessfull) {
    syntax.pushLog(
      `!Из магазина был получен цикл do. Из стека ожидалось тело цикла, но получен ${lexemas[1].body}`,
      "!Пропущено тело цикла do",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (statement.rest[0]?.id !== While.id) {
    syntax.pushLog(
      `!Из магазина был получено тело цикла do. Из стека ожидался 'while', но получен ${statement.rest[0].body}`,
      "!Пропущено условие 'while' после тела цикла do",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (statement.rest[1]?.type !== "keysymbol" || statement.rest[1]?.id !== OpenParen.id) {
    syntax.pushLog(
      `!Из магазина получен "while". Из стека ожидалась открывающая скобка, но был получен '${statement.rest[1].body}'.`,
      "!После while должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  const condition = isExpression(statement.rest.slice(2));

  if (!condition.isSuccessfull) {
    syntax.pushLog(
      `!Из магазина получена инициализация while, из стека ожидалось условие выхода, но был получен ${lexemas[2].body}`,
      "!Пропущено условие выхода в while",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (condition.rest[0]?.type !== "keysymbol" || condition.rest[0]?.id !== CloseParen.id) {
    syntax.pushLog(
      `!Из магазина получено условие. Из стека ожидалась закрывающая скобка, но получен ${condition.rest[0].body}`,
      "!Пропущена закрывающая скобка после условия while",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (condition.rest[1]?.type !== "keysymbol" || condition.rest[1]?.id !== Semicolon.id) {
    syntax.pushLog(
      `!Из магазина получен цикл do while. Из стека ожидалась точка с запятой, но получен ${condition.rest[0].body}`,
      "!Пропущена точка с запятой после условия do while",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Из стека был составлен цикл while, очистка магазина", "Составлен цикл while");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Do While",
      details: "Цикл Do While",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // do
        statement.foundedLexema,
        statement.rest[0], // while
        statement.rest[1], // (
        condition.foundedLexema,
        condition.rest[0], // )
        condition.rest[1], // ;
      ],
    },
    rest: condition.rest.slice(2),
  };
}
