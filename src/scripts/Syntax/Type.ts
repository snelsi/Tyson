import { AnalyzeResult, Template, Lexema } from "interfaces/Interface";

const template: Template = {
  type: "Type",
  details: "value type definition",
};

export const isType = (lexemas: Lexema[]): AnalyzeResult => {
  if (lexemas.length === 0) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: ["!Не был передан массив слов, невозможно составить Type"],
    };
  }

  if (lexemas[0].type !== "keyword") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: [`${lexemas[0].body} не является Keyword.`],
    };
  }

  const word = String(lexemas[0].body);

  if (
    word === "let" ||
    word === "int" ||
    word === "float" ||
    word === "double" ||
    word === "string" ||
    word === "boolean"
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
      log: [`${word} - существующий тип.`],
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log: [`${word} не является типом.`],
  };
};
