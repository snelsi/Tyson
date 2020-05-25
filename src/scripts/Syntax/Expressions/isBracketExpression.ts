import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isExpression } from "./isExpression";

/**
 * ( expression )
 */
export function isBracketExpression(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0]?.type !== "keysymbol" || lexemas[0].id !== 4) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push(
    mode ? "Встречена открывающая скобка, занесена в магазин." : "Встречена открывающая скобка.",
  );

  let singleExpression = isExpression(lexemas.slice(1), mode);
  log.push(...singleExpression.log);

  if (!singleExpression.isSuccessfull) {
    log.push(`!Внутри скобок пропущен Expression [${lexemas[1].row} ${lexemas[1].column}]`);

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (singleExpression.rest[0]?.type !== "keysymbol" || singleExpression.rest[0].id !== 5) {
    log.push(
      `!Пропущена закрывающая круглая скобка [${singleExpression.rest[0].row} ${singleExpression.rest[0].column}]`,
    );
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push("Встречена закрывающая скобка. Составлен Expression.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Expression",
      details: "Блок из круглых скобок",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], singleExpression.foundedLexema, singleExpression.rest[0]],
    },
    rest: singleExpression.rest.slice(1),
    log,
  };
}
