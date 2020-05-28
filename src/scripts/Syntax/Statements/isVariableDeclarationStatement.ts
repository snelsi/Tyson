import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isVariableDeclaration } from "scripts/Syntax";
import { Semicolon } from "scripts/keySymbols";

import { syntax } from "scripts/store";

// variableDeclarationStatement
//     : variableDeclaration SemiColon
//     ;

export function isVariableDeclarationStatement(lexemas: Lexema[]): AnalyzeResult {
  const variableDeclarationList = isVariableDeclaration(lexemas);

  if (!variableDeclarationList.isSuccessfull) {
    syntax.pushLog("Не удалось составить variableStatement");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (
    variableDeclarationList.rest[0]?.type !== "keysymbol" ||
    variableDeclarationList.rest[0]?.id !== Semicolon.id
  ) {
    syntax.pushLog("!Пропущена точка с запятой после variableDeclarationList");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Составлен variableStatement.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Variable Declaration",
      details: "Variable Statement",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [variableDeclarationList.foundedLexema, variableDeclarationList.rest[0]],
    },
    rest: variableDeclarationList.rest.slice(1),
  };
}
