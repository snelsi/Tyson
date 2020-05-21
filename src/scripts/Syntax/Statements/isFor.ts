import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isStatement, isOperation, isCondition } from "scripts/Syntax";

export function isFor(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].body !== "for") {
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
        ? `!Из магазина получен "for". Из стека ожидалась открывающая скобка, но был получен '${lexemas[1].body}'.`
        : "!После for должна идти открывающая скобка",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const op1 = isOperation(lexemas.slice(2), mode);
  log.push(...op1.log);

  if (!op1.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина получена открывающая скобка. Из стека ожидался Operation, но получен '${lexemas[2].body}'`
        : "!Внутри скобок в цикле for пропущен Operation",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (op1.rest[0]?.type !== "keysymbol" || op1.rest[0]?.id !== 3) {
    log.push(
      mode
        ? `!Из магазина получен Operation. Ожидалась точка с запятой из стека, но был получен '${op1.rest[0].body}'`
        : "!После Operation пропущена точка с запятой",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const condition = isCondition(op1.rest.slice(1), mode);
  log.push(...condition.log);

  if (!condition.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина получена инициализация for, из стека ожидалось условие выхода, но был получен ${op1.rest[1].body}`
        : "!Пропущено условие выхода в for",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (condition.rest[0]?.type !== "keysymbol" || condition.rest[0]?.id !== 3) {
    log.push(
      mode
        ? `!Из магазина получено условие, из стека ожидалась точка с запятой, но получен ${condition.rest[0].body}`
        : "!После условия в for пропущена точка с запятой",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const op2 = isOperation(condition.rest.slice(1), mode);
  log.push(...op2.log);

  if (!op2.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина получен оператор условия цикла, из стека ожидался оператор, но получен ${condition.rest[1].body}`
        : "!Пропущен последний оператор в for",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (op2.rest[0]?.type !== "keysymbol" || op2.rest[0]?.id !== 5) {
    log.push(
      mode
        ? `!Из магазина получен оператор. Из стека ожидалась закрывающая скобка, но получен ${op2.rest[0].body}`
        : "!Пропущена закрывающая скобка после оператора",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  const statement = isStatement(op2.rest.slice(1), mode);
  log.push(...statement.log);

  if (!statement.isSuccessfull) {
    log.push(
      mode
        ? `!Из магазина был получен цикл for. Из стека ожидалось тело цикла, но получен ${op2.rest[1].body}`
        : "!Пропущено тело цикла for",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push(mode ? "Из стека был составлен Statement, очистка магазина" : "Составлен Statement");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Statement",
      details: "Цикл for",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        lexemas[0], // for
        lexemas[1], // (
        op1.foundedLexema,
        op1.rest[0], // ;
        condition.foundedLexema,
        condition.rest[0], // ;
        op2.foundedLexema,
        op2.rest[0], // )
        statement.foundedLexema,
      ],
    },
    rest: statement.rest,
    log,
  };
}
