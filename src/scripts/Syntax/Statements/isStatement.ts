import { AnalyzeResult, Lexema } from "interfaces/Interface";

import {
  isBracketStatement,
  isVariableDeclarationStatement,
  isAssignmentStatement,
  isExpressionStatement,
  isIfStatement,
  isIterationStatement,
  isEmptyStatement,
  isContinue,
  isBreak,
  isLog,
} from "scripts/Syntax/Statements";

const functions = [
  isBracketStatement,
  isAssignmentStatement,
  isVariableDeclarationStatement,
  isIfStatement,
  isIterationStatement,
  isContinue,
  isBreak,
  isLog,
  isExpressionStatement,
  isEmptyStatement,
];

export function isStatement(lexemas: Lexema[], mode = false): AnalyzeResult {
  let result: AnalyzeResult;
  const log = [];

  for (let check of functions) {
    result = check(lexemas, mode);
    log.push(...result.log);
    if (result.isSuccessfull) {
      return result;
    }
  }

  log.push(
    mode
      ? `Из стека был получен '${lexemas[0].body}'. Нет доступных переходов.`
      : `Не удалось составить Statement. '${lexemas[0].body}' - неизвестное слово`,
  );

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}
