import { Lexema, AnalyzeResult, Template } from "interfaces/Interface";

const template: Template = {
  type: "AssignOperator",
  details: "assign operation",
};

export const isAssignOperator = (lexemas: Lexema[], mode = false): AnalyzeResult => {
  const word = String(lexemas[0].body);

  if (lexemas[0].type === "AssignOperator") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log: [
        mode
          ? `Из стека был получен AssignOperator, где ожидался AssignOperator возврат поточного элемента`
          : "Встречен AssignOperator, возврат поточного элемента",
      ],
    };
  }

  const log = [];

  if (word === "=" || word === "+=" || word === "*=" || word === "/=") {
    log.push(
      mode
        ? `Из стека был получен AssignOperator ${word}, сохранён в магазин`
        : `Найден оператор присвоения ${word}`,
    );

    return {
      isSuccessfull: true,
      foundedLexema: {
        ...template,
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: [lexemas[0]],
      },
      rest: lexemas.slice(1),
      log,
    };
  }

  log.push(
    mode
      ? `Из стека был получен ${word}, где ожидался оператор присвоения`
      : `${word} не является оператором присвоения`,
  );

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
};
