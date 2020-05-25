import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isBracketExpression } from "./isBracketExpression";
import { isExpressionLiteral } from "./isExpressionLiteral";
import { isLeftUnarExpression } from "./isLeftUnarExpression";
import { isRightUnarExpression } from "./isRightUnarExpression";

const functions = [
  isBracketExpression,
  isLeftUnarExpression,
  isRightUnarExpression,
  isExpressionLiteral,
];

export function isSingleExpression(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  for (let check of functions) {
    let result = check(lexemas, mode);
    log.push(...result.log);
    if (result.isSuccessfull) {
      return result;
    }
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}
