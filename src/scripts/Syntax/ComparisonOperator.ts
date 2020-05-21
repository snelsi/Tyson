import { AnalyzeResult, Template, Lexema } from "interfaces/Interface";

const template: Template = {
  type: "ComparisonOperator",
  details: "operator that compares two values",
};

export const isComparisonOperator = (lexemas: Lexema[]): AnalyzeResult => {
  if (lexemas.length === 0) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: ["!Не был передан массив слов, невозможно составить Comparison Operator"],
    };
  }

  if (lexemas[0].type === "ComparisonOperator") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log: ["ComparisonOperator уже составлен"],
    };
  }

  if (lexemas[0].type !== "keysymbol") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: [`${lexemas[0].body} не является keysymbol`],
    };
  }

  const word = String(lexemas[0].body);

  if (
    word === "<" ||
    word === ">" ||
    word === "<=" ||
    word === ">=" ||
    word === "==" ||
    word === "===" ||
    word === "!=" ||
    word === "!=="
  ) {
    return {
      isSuccessfull: true,
      foundedLexema: {
        ...template,
        row: lexemas[0].row,
        column: lexemas[0].column,
        body: [lexemas[0]],
      },
      rest: lexemas.slice(1),
      log: [`Найден оператор сравнения ${word}`],
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log: [`'${word}' не является оператором присвоения`],
  };
};
