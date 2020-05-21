import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isOperation as FindOperation } from "scripts/Syntax";

export function isOperation(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  const op = FindOperation(lexemas, mode);
  log.push(...op.log);

  if (!op.isSuccessfull) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (op.foundedLexema.body.length && op.rest[0].id !== 3) {
    log.push(
      mode
        ? `!Из магазина был получен Operation, из стека ожидалась точка с запятой, но получен ${
            op.foundedLexema.body
          } '${op.rest[0].body}' [${op.rest[0].row}, ${op.rest[0].column - 1}]`
        : `!Пропущен semicolon в конце выражения [${op.rest[0].row}, ${op.rest[0].column - 1}]`,
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push(
    mode
      ? `Из стека был составлен Operation Statement, очистка магазина`
      : `Был составлен Operation Statement`,
  );

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Statement",
      details: "Operation Statement",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [op.foundedLexema, op.rest[0]],
    },
    rest: op.rest.slice(1),
    log,
  };
}
