import { AnalyzeResult, Template, Lexema } from "interfaces/Interface";

export function isConstExpr(lexemas: Lexema[]): AnalyzeResult {
  const template: Template = {
    type: "ConstExpr",
    details: "Constant Expression",
  };

  if (lexemas.length === 0) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log: ["!Не был передан массив слов, невозможно составить ConstExpression"],
    };
  }

  if (lexemas[0].type === "ConstExpr") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log: ["Первый член массива слов уже определён как ConstExpression"],
    };
  }

  if (
    lexemas[0].type === "identificator" ||
    lexemas[0].type === "number" ||
    lexemas[0].type === "string" ||
    lexemas[0].id === 208 ||
    lexemas[0].id === 209 || // true of false
    lexemas[0].id === 219 || // null
    lexemas[0].id === 220 // undefined
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
      log: [`Составлен ConstExpr '${lexemas[0].body}'`],
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log: [`!Не удалось составить константное выражение. ${lexemas[0].body} - неизвестное слово.`],
  };
}
