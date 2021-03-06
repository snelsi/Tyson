import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement } from "scripts/Syntax";
import { OpenBrace, CloseBrace } from "scripts/keySymbols";

import { syntax } from "scripts/store";

/**
 * { statement* }
 */
export function isBracketStatement(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type !== "keysymbol" || lexemas[0].id !== OpenBrace.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog(
    "Встречена открывающая скобка, занесена в магазин.",
    "Встречена открывающая скобка.",
  );

  const foundedStatements = [];
  let statement = isStatement(lexemas.slice(1));

  while (statement.isSuccessfull) {
    foundedStatements.push(statement.foundedLexema);
    statement = isStatement(statement.rest);
  }

  if (statement.rest[0]?.type !== "keysymbol" || statement.rest[0].id !== CloseBrace.id) {
    syntax.pushLog(
      `!Из стека был получен ${
        statement.rest[0]?.body
      } после Statement, но ожидалась закрывающая скобка [${statement.rest[0]?.row}, ${
        statement.rest[0]?.column - 1
      }]`,
      `!Пропущена закрывающая скобка [${statement.rest[0]?.row}, ${statement.rest[0]?.column - 1}]`,
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Встречена закрывающая скобка. Составлен Statement.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Brackets",
      details: "Блок из скобок",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], ...foundedStatements, statement.rest[0]],
    },
    rest: statement.rest.slice(1),
  };
}
