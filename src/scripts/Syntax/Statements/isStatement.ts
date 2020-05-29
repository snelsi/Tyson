import { AnalyzeResult, Lexema } from "interfaces/Interface";

import {
  isBracketStatement,
  isVariableDeclarationStatement,
  isAssignmentStatement,
  isExpressionStatement,
  isIfStatement,
  isIterationStatement,
  isEmptyStatement,
  isLog,
} from "scripts/Syntax/Statements";

import { syntax } from "scripts/store";

const functions = [
  isBracketStatement,
  isAssignmentStatement,
  isVariableDeclarationStatement,
  isIfStatement,
  isIterationStatement,
  isLog,
  isExpressionStatement,
  isEmptyStatement,
];

export function isStatement(lexemas: Lexema[]): AnalyzeResult {
  for (let check of functions) {
    let result = check(lexemas);
    if (result.isSuccessfull) {
      return result;
    }
  }

  syntax.pushLog(
    `Из стека был получен '${lexemas[0].body}'. Нет доступных переходов.`,
    `Не удалось составить Statement. '${lexemas[0].body}' - неизвестное слово`,
  );

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
  };
}
