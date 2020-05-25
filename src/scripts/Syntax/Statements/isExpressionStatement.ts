import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isExpression } from "scripts/Syntax/Expressions";

// expressionStatement
//     : singleExpression SemiColon
//     ;
export function isExpressionStatement(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  const expressionSequence = isExpression(lexemas, mode);
  log.push(...expressionSequence.log);

  if (!expressionSequence.isSuccessfull) {
    log.push("Не удалось составить singleExpression");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (expressionSequence.rest[0].type !== "keysymbol" || expressionSequence.rest[0]?.id !== 3) {
    log.push("!Пропущена точка с запятой после singleExpression");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push("Составлен expressionStatement.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Statement",
      details: "Expression Statement",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [expressionSequence.foundedLexema, expressionSequence.rest[0]],
    },
    rest: expressionSequence.rest.slice(1),
    log,
  };
}
