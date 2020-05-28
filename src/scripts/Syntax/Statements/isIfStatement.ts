import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isExpression } from "scripts/Syntax";
import { OpenParen, CloseParen } from "scripts/keySymbols";
import { If, Else } from "scripts/keyWords";

import { syntax } from "scripts/store";

export function isIfStatement(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0].id !== If.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== OpenParen.id) {
    syntax.pushLog(
      `!Из магазина получен "if". Из стека ожидалась открывающая скобка, но был получен '${lexemas[1].body}'.`,
      "!После if должна идти открывающая скобка",
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
      `!Из магазина получена инициализация if, из стека ожидалось условие, но был получен ${lexemas[2].body}`,
      "!Пропущено условие после if",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (condition.rest[0]?.type !== "keysymbol" || condition.rest[0]?.id !== CloseParen.id) {
    syntax.pushLog(
      `!Из магазина получено условие if. Из стека ожидалась закрывающая скобка, но получен ${condition.rest[0].body}`,
      "!Пропущена закрывающая скобка после условия if",
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
      `!Из магазина был получен if. Из стека ожидался statement, но получен ${condition.rest[1].body}`,
      "!Пропущен statement после if",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  let elseLogic = [];

  if (statement.rest[0]?.id === Else.id) {
    const [elseLexema] = statement.rest;

    const elseStatement = isStatement(statement.rest.slice(1));

    if (!elseStatement.isSuccessfull) {
      syntax.pushLog(
        `!Из магазина был получен else. Из стека ожидался statement, но получен ${condition.rest[1].body}`,
        "!Пропущен statement после else",
      );

      return {
        isSuccessfull: false,
        foundedLexema: null,
        rest: lexemas,
      };
    }

    elseLogic = [elseLexema, elseStatement];
  }

  syntax.pushLog("Из стека был составлен логический блок", "Составлен логический блок");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "If",
      details: "Логический блок",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // if
        lexemas[1], // (
        condition.foundedLexema,
        condition.rest[0], // )
        statement.foundedLexema,
        ...elseLogic, // else?
      ],
    },
    rest: elseLogic.length ? elseLogic[1].rest : statement.rest,
  };
}
