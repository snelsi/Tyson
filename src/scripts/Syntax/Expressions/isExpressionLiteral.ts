import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isLiteral } from "scripts/Syntax";

// Identifier || literal
export function isExpressionLiteral(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].type === "Expression") {
    log.push(
      mode
        ? "Из стека получен Expression, где ожидался Expression, возврат поточного токена"
        : "Получен Expression, где ожидался Expression",
    );

    return {
      isSuccessfull: true,
      foundedLexema: {
        type: "Expression",
        details: "Expression Literal",
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: [lexemas[0]],
      },
      rest: lexemas.slice(1),
      log,
    };
  }

  if (lexemas[0].type === "identificator") {
    return {
      isSuccessfull: true,
      foundedLexema: {
        type: "Expression",
        details: "Expression Literal",
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: [lexemas[0]],
      },
      rest: lexemas.slice(1),
      log,
    };
  }

  const literal = isLiteral(lexemas, mode);
  if (literal.isSuccessfull) {
    return {
      isSuccessfull: true,
      foundedLexema: literal.foundedLexema,
      rest: literal.rest,
      log,
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}
