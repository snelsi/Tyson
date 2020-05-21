import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isStatement } from "scripts/Syntax";

export function isCycleStatement(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0]?.type === "keyword") {
    const word = String(lexemas[0].body);
    if (word === "break" || word === "continue") {
      log.push(
        mode
          ? `Внутри цикла из стека был вынят '${word}'`
          : `Внутри цикла обнаружено ключевое слово '${word}'`,
      );

      if (lexemas[1].id === 3) {
        log.push(
          mode
            ? `Из стека была вынята точка с запятой после ключевого слова '${word}'. Возвращён Statement`
            : `Обнаружено ключевое слово '${word}'. Возвращён Statement`,
        );

        return {
          isSuccessfull: true,
          foundedLexema: {
            type: "CycleStatement",
            details: `Комманда ${word}`,
            row: lexemas[0].row,
            column: lexemas[0].column,
            body: [lexemas[0], lexemas[1]],
          },
          rest: lexemas.slice(2),
          log,
        };
      }

      log.push(
        mode
          ? `!Из стека ожидалась точка с запятой, но найден ${lexemas[1].body}`
          : "!Пропущена точка с запятой",
      );

      return {
        isSuccessfull: false,
        foundedLexema: null,
        rest: lexemas,
        log,
      };
    }
  }

  return isStatement(lexemas, mode);
}
