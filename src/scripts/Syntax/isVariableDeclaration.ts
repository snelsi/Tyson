import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isVarModifier, isExpression } from "scripts/Syntax";
import { Assign } from "scripts/keySymbols";

import { syntax } from "scripts/store";

// variableDeclaration
//     : varModifier Identifier (Assign singleExpression)?
//     ;
export function isVariableDeclaration(lexemas: Lexema[]): AnalyzeResult {
  const varModifier = isVarModifier(lexemas);

  if (!varModifier.isSuccessfull) {
    syntax.pushLog("Не удалось составить variableDeclarationList");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (varModifier.rest[0]?.type !== "identifier") {
    syntax.pushLog("Не удалось составить variableDeclarationList");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  let optional = [];
  let rest = varModifier.rest.slice(1);
  if (varModifier.rest[1]?.id === Assign.id) {
    const singleExpression = isExpression(rest.slice(1));

    if (!singleExpression.isSuccessfull) {
      syntax.pushLog("После Assign не последовал singleExpression");

      return {
        isSuccessfull: false,
        foundedLexema: null,
        rest: lexemas,
      };
    }

    optional = [varModifier.rest[1], singleExpression.foundedLexema];
    rest = singleExpression.rest;
  }

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Variable Declaration",
      details: "Variable Declaration",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [
        varModifier.foundedLexema, // type
        varModifier.rest[0], // identifier
        ...optional,
      ],
    },
    rest,
  };
}
