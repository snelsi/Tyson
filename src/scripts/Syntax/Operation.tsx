import { AnalyzeResult, Template, Lexema } from "interfaces/Interface";
import { isExpr, isAssignOperator, isType } from "scripts/Syntax";

const template: Template = {
  type: "Operation",
  details: "Assignment operation",
};

export function isOperation(lexemas: Lexema[], mode = false): AnalyzeResult {
  // Проверка на явный тип
  if (lexemas[0].type === "Operation") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log: [
        mode
          ? "Из стека был вынят Operation и ожидался Operation. Возврат поточного элемента"
          : "Встречен Operation, где ожидался Operation. Возврат поточного элемента",
      ],
    };
  }

  let words = lexemas;
  const log = [];

  // Проверка, есть ли тип
  const type: AnalyzeResult = isType(lexemas);

  if (type.isSuccessfull) {
    log.push(...type.log);
    log.push(
      mode
        ? `В магазин был внесён токен типа ${(type.foundedLexema.body[0] as Lexema)?.body}`
        : `Встречен токен Типа '${
            (type.foundedLexema.body[0] as Lexema)?.body
          }' в начале Операции.`,
    );

    words = type.rest;
  }

  const identificator = words[0];

  if (type.isSuccessfull && identificator.type !== "identificator") {
    log.push(
      mode
        ? `!Из стека был получен тип '${
            (type.foundedLexema.body[0] as Lexema)?.body
          }', но не последовало идентификатора`
        : `!После инициализации типа ${
            (type.foundedLexema.body[0] as Lexema)?.body
          } не последовало идентификтора.`,
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (identificator.type === "identificator") {
    log.push(
      mode
        ? `Из памяти был получен Идентификатор '${identificator.body}'`
        : `Был встречен Идентификатор '${identificator.body}'`,
    );

    // Проверка на знак присвоения
    const assign = isAssignOperator(words.slice(1), mode);
    log.push(...assign.log);

    if (assign.isSuccessfull) {
      const expression = isExpr(assign.rest);
      log.push(...expression.log);

      if (expression.isSuccessfull) {
        log.push(mode ? `Из памяти был получен Expression` : `Был составлен Expression`);

        return {
          isSuccessfull: true,
          foundedLexema: {
            ...template,
            row: lexemas[0].row,
            column: lexemas[0].column,
            body: type.foundedLexema
              ? [type.foundedLexema, identificator, assign.foundedLexema, expression.foundedLexema]
              : [identificator, assign.foundedLexema, expression.foundedLexema],
          },
          rest: expression.rest,
          log,
        };
      }
      log.push(
        mode
          ? `!После присвоения ${
              (assign.foundedLexema.body[0] as Lexema).body
            } ожидался Expression, но был найден ${assign.rest[0].body}`
          : "!После присвоения должно идти выражение",
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
        ? `!После Идентификатора ${identificator.body} ожидался оператор присвоения, но был найден ${lexemas[1].body}`
        : "!После идентификатора должен идти оператор присвоения",
    );

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: {
      ...template,
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [],
    },
    rest: lexemas,
    log,
  };
}
