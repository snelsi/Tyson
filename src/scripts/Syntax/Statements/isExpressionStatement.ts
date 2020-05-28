import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isExpression } from "scripts/Syntax/Expressions";
import { Semicolon } from "scripts/keySymbols";

import { syntax } from "scripts/store";

// expressionStatement
//     : singleExpression SemiColon
//     ;
export function isExpressionStatement(lexemas: Lexema[]): AnalyzeResult {
  const expressionSequence = isExpression(lexemas);

  if (!expressionSequence.isSuccessfull) {
    syntax.pushLog("Не удалось составить singleExpression");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (
    expressionSequence.rest[0].type !== "keysymbol" ||
    expressionSequence.rest[0]?.id !== Semicolon.id
  ) {
    syntax.pushLog("!Пропущена точка с запятой после singleExpression");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Составлен expressionStatement.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Expression Statement",
      details: "Expression Statement",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [expressionSequence.foundedLexema, expressionSequence.rest[0]],
    },
    rest: expressionSequence.rest.slice(1),
  };
}
