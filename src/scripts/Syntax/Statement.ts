import { AnalyzeResult, Lexema } from "interfaces/Interface";
import {
  isBrackets,
  isFor,
  isIf,
  isOperation,
  isDoWhile,
  isWhile,
} from "scripts/Syntax/Statements";

export function isStatement(lexemas: Lexema[], mode = false): AnalyzeResult {
  if (lexemas.length < 2) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: ["Было передано меньше двух лексем. Пустой Statement."],
    };
  }

  let result: AnalyzeResult;
  const log = [];

  result = isBrackets(lexemas, mode);
  log.push(...result.log);
  if (result.isSuccessfull) {
    return result;
  }

  result = isFor(lexemas, mode);
  log.push(...result.log);
  if (result.isSuccessfull) {
    return result;
  }

  result = isDoWhile(lexemas, mode);
  log.push(...result.log);
  if (result.isSuccessfull) {
    return result;
  }

  result = isWhile(lexemas, mode);
  log.push(...result.log);
  if (result.isSuccessfull) {
    return result;
  }

  result = isIf(lexemas, mode);
  log.push(...result.log);
  if (result.isSuccessfull) {
    return result;
  }

  result = isOperation(lexemas, mode);
  log.push(...result.log);
  if (result.isSuccessfull) {
    return result;
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
