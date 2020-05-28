import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isBracketExpression } from "./isBracketExpression";
import { isExpressionLiteral } from "./isExpressionLiteral";
import { isLeftUnarExpression } from "./isLeftUnarExpression";
import { isIterator } from "./isIterator";

const functions = [isBracketExpression, isLeftUnarExpression, isIterator, isExpressionLiteral];

export function isSingleExpression(lexemas: Lexema[]): AnalyzeResult {
  for (let check of functions) {
    let result = check(lexemas);
    if (result.isSuccessfull) {
      return result;
    }
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
  };
}
