import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isExpression } from "scripts/Syntax";
import { OpenParen, CloseParen } from "scripts/keySymbols";
import { While } from "scripts/keyWords";

import { syntax } from "scripts/store";

export function isWhile(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.id !== While.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== OpenParen.id) {
    syntax.pushLog(
      `!Из магазина получен "while". Из стека ожидалась открывающая скобка, но был получен '${lexemas[1].body}'.`,
      "!После while должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  const condition = isExpression(lexemas.slice(2));

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

  const statement = isStatement(condition.rest.slice(1));

  if (!statement.isSuccessfull) {
    syntax.pushLog(
      `!Из магазина был получен цикл while. Из стека ожидалось тело цикла, но получен ${condition.rest[1].body}`,
      "!Пропущено тело цикла while",
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
      type: "While",
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
  };
}
