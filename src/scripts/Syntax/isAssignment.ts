import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isAssignmentOperator, isExpression } from "scripts/Syntax";

import { syntax } from "scripts/store";

// assignment
//     : Identifier assignmentOperator singleExpression
//     ;
export function isAssignment(lexemas: Lexema[]): AnalyzeResult {
  if (lexemas[0]?.type !== "identificator") {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Встречен Идентификатор, занесен в магазин.", "Встречен Идентификатор.");

  let assignment = isAssignmentOperator(lexemas.slice(1));

  if (!assignment.isSuccessfull) {
    syntax.pushLog(
      `Из стека получен Идентификатор, из магазина ожидался оператор присвоения, но получен '${String(
        lexemas[0].body,
      )}'.`,
      "После Идентификатора не последовал оператор присвоения.",
    );
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  let singleExpression = isExpression(assignment.rest);

  if (!singleExpression.isSuccessfull) {
    syntax.pushLog(
      `Из стека получен оператор присвоения, из магазина ожидался singleExpression, но получен '${String(
        lexemas[0].body,
      )}'.`,
      "После оператора присвоения не последовал singleExpression.",
    );
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Встречен singleExpression.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Assignment",
      details: "Присвоение",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [lexemas[0], assignment.foundedLexema, singleExpression.foundedLexema],
    },
    rest: singleExpression.rest,
  };
}
