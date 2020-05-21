import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isCondition } from "scripts/Syntax";

export function isIf(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].body !== "if") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (lexemas[1]?.type !== "keysymbol" || lexemas[1]?.id !== 4) {
    log.push(
      mode
        ? `!Из магазина получен "if". Из стека ожидалась открывающая скобка, но был получен '${lexemas[1].body}'.`
        : "!После if должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const condition = isCondition(lexemas.slice(2), mode);
  log.push(...condition.log);

  if (!condition.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина получена инициализация if, из стека ожидалось условие, но был получен ${lexemas[2].body}`
        : "!Пропущено условие после if",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (condition.rest[0]?.type !== "keysymbol" || condition.rest[0]?.id !== 5) {
    log.push(
      mode
        ? `!Из магазина получено условие if. Из стека ожидалась закрывающая скобка, но получен ${condition.rest[0].body}`
        : "!Пропущена закрывающая скобка после условия if",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const statement = isStatement(condition.rest.slice(1), mode);
  log.push(...statement.log);

  if (!statement.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина был получен if. Из стека ожидался statement, но получен ${condition.rest[1].body}`
        : "!Пропущен statement после if",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  let elseLogic = [];

  if (statement.rest[0]?.body === "else") {
    const [elseLexema] = statement.rest;

    const elseStatement = isStatement(statement.rest.slice(1), mode);
    log.push(...elseStatement.log);

    if (!elseStatement.isSuccessfull) {
      log.push(
        mode
          ? `!Из магазина был получен else. Из стека ожидался statement, но получен ${condition.rest[1].body}`
          : "!Пропущен statement после else",
      );

      return {
        isSuccessfull: false,
        foundedLexema: null,
        rest: lexemas,
        log,
      };
    }

    elseLogic = [elseLexema, elseStatement];
  }

  log.push(mode ? "Из стека был составлен логический блок" : "Составлен логический блок");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Statement",
      details: "Логический блок",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // if
        lexemas[1], // (
        condition.foundedLexema,
        condition.rest[0], // )
        statement.foundedLexema,
        ...elseLogic, // else?
      ],
    },
    rest: elseLogic.length ? elseLogic[1].rest : statement.rest,
    log,
  };
}
