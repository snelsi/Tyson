import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { OpenParen, CloseParen } from "scripts/keySymbols";
import { isExpression } from "scripts/Syntax";

import { syntax } from "scripts/store";

/**
 * ( expression )
 */
export function isBracketExpression(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type !== "keysymbol" || lexemas[0].id !== OpenParen.id) {
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

  let singleExpression = isExpression(lexemas.slice(1));

  if (!singleExpression.isSuccessfull) {
    syntax.pushLog(`!Внутри скобок пропущен Expression [${lexemas[1].row} ${lexemas[1].column}]`);

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (
    singleExpression.rest[0]?.type !== "keysymbol" ||
    singleExpression.rest[0]?.id !== CloseParen.id
  ) {
    syntax.pushLog(
      `!Пропущена закрывающая круглая скобка [${singleExpression.rest[0].row} ${singleExpression.rest[0].column}]`,
    );
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Встречена закрывающая скобка. Составлен Expression.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Expression",
      details: "Блок из круглых скобок",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], singleExpression.foundedLexema, singleExpression.rest[0]],
    },
    rest: singleExpression.rest.slice(1),
  };
}
