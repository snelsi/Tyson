import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isAssignment, isVariableDeclaration, isExpression } from "scripts/Syntax";
import { OpenParen, CloseParen, Semicolon } from "scripts/keySymbols";
import { For } from "scripts/keyWords";

import { syntax } from "scripts/store";

export function isFor(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.id !== For.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== OpenParen.id) {
    syntax.pushLog(
      `!Из магазина получен "for". Из стека ожидалась открывающая скобка, но был получен '${lexemas[1].body}'.`,
      "!После for должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  let declar = isVariableDeclaration(lexemas.slice(2));

  if (!declar.isSuccessfull) {
    declar = isAssignment(lexemas.slice(2));
  }

  if (declar.rest[0]?.type !== "keysymbol" || declar.rest[0]?.id !== Semicolon.id) {
    syntax.pushLog(
      `!Из магазина получен variableDeclaration. Ожидалась точка с запятой из стека, но был получен '${declar.rest[0].body}'`,
      "!После variableDeclaration пропущена точка с запятой",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  const condition = isExpression(declar.rest.slice(1));

  if (!condition.isSuccessfull) {
    syntax.pushLog(
      `!Из магазина получена инициализация for, из стека ожидалось условие выхода, но был получен ${declar.rest[1].body}`,
      "!Пропущено условие выхода в for",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (condition.rest[0]?.type !== "keysymbol" || condition.rest[0]?.id !== Semicolon.id) {
    syntax.pushLog(
      `!Из магазина получено условие, из стека ожидалась точка с запятой, но получен ${condition.rest[0].body}`,
      "!После условия в for пропущена точка с запятой",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  let op2 = isAssignment(condition.rest.slice(1));

  if (!op2.isSuccessfull) {
    op2 = isExpression(condition.rest.slice(1));
  }

  if (op2.rest[0]?.type !== "keysymbol" || op2.rest[0]?.id !== CloseParen.id) {
    syntax.pushLog(
      `!Из магазина получен оператор. Из стека ожидалась закрывающая скобка, но получен ${op2.rest[0].body}`,
      "!Пропущена закрывающая скобка после оператора",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  const statement = isStatement(op2.rest.slice(1));

  if (!statement.isSuccessfull) {
    syntax.pushLog(
      `!Из магазина был получен цикл for. Из стека ожидалось тело цикла, но получен ${op2.rest[1].body}`,
      "!Пропущено тело цикла for",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Из стека был составлен Statement, очистка магазина", "Составлен Statement");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "For",
      details: "Цикл for",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // for
        lexemas[1], // (
        ...[declar.foundedLexema],
        declar.rest[0], // ;
        condition.foundedLexema,
        condition.rest[0], // ;
        ...[op2.foundedLexema],
        op2.rest[0], // )
        statement.foundedLexema,
      ],
    },
    rest: statement.rest,
  };
}
