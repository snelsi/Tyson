import { Lexema, AnalyzeResult } from "interfaces/Interface";

const operators = ["=", "*=", "/=", "%=", "+=", "-=", "^="];
// assignmentOperator
//     : Assign
//     | MultiplyAssign
//     | DivideAssign
//     | ModulusAssign
//     | PlusAssign
//     | MinusAssign
//     | PowerAssign
//     ;
export const isAssignmentOperator = (lexemas: Lexema[], mode = false): AnalyzeResult => {
  const word = String(lexemas[0].body);

  if (lexemas[0].type === "operator") {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log: [
        mode
          ? `Из стека был получен assignmentOperator, где ожидался assignmentOperator возврат поточного элемента`
          : "Встречен assignmentOperator, возврат поточного элемента",
      ],
    };
  }

  const log = [];

  if (operators.includes(word)) {
    log.push(
      mode
        ? `Из стека был получен assignmentOperator ${word}, сохранён в магазин`
        : `Найден оператор присвоения ${word}`,
    );

    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
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
