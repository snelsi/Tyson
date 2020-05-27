import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isExpression } from "scripts/Syntax";
import { OpenParen, CloseParen, Semicolon } from "scripts/keySymbols";
import { Log } from "scripts/keyWords";

export function isLog(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].id !== Log.id) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== OpenParen.id) {
    log.push(
      mode
        ? `!Из магазина получен "log". Из стека ожидалась открывающая скобка, но был получен '${lexemas[1].body}'.`
        : "!После log должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const singleExpression = isExpression(lexemas.slice(2), mode);
  log.push(...singleExpression.log);

  if (!singleExpression.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина получена открывающая скобка log. Из стека ожидался singleExpression, но получен '${lexemas[2].body}'`
        : "!Внутри скобок после log пропущен singleExpression",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (
    singleExpression.rest[0]?.type !== "keysymbol" ||
    singleExpression.rest[0]?.id !== CloseParen.id
  ) {
    log.push(
      mode
        ? `!Из магазина получен Expression внутри log. Из стека ожидалась закрывающая скобка, но получен ${singleExpression.rest[0].body}`
        : "!Пропущена закрывающая скобка после тела log",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (
    singleExpression.rest[1]?.type !== "keysymbol" ||
    singleExpression.rest[1]?.id !== Semicolon.id
  ) {
    log.push(
      mode
        ? `!Из магазина получен log. Из стека ожидалась точка с запятой, но получен ${singleExpression.rest[0].body}`
        : "!Пропущена точка с запятой после log",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Log",
      details: "Комманда log",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // log
        lexemas[1], // (
        singleExpression.foundedLexema,
        singleExpression.rest[0], // )
        singleExpression.rest[1], // ;
      ],
    },
    rest: singleExpression.rest.slice(2),
    log,
  };
}
