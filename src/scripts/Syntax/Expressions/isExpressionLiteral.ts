import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isLiteral } from "scripts/Syntax";

import { syntax } from "scripts/store";

// Identifier || literal
export function isExpressionLiteral(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type === "Expression") {
    syntax.pushLog(
      "Из стека получен Expression, где ожидался Expression, возврат поточного токена",
      "Получен Expression, где ожидался Expression",
    );

    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
    };
  }

  if (lexemas[0]?.type === "identifier") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
    };
  }

  const literal = isLiteral(lexemas);
  if (literal.isSuccessfull) {
    return {
      isSuccessfull: true,
      foundedLexema: literal.foundedLexema,
      rest: literal.rest,
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
  };
}
