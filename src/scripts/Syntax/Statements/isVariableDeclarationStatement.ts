import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isVariableDeclaration } from "scripts/Syntax";
import { Semicolon } from "scripts/keySymbols";

// variableDeclarationStatement
//     : variableDeclaration SemiColon
//     ;

export function isVariableDeclarationStatement(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  const variableDeclarationList = isVariableDeclaration(lexemas, mode);
  log.push(...variableDeclarationList.log);

  if (!variableDeclarationList.isSuccessfull) {
    log.push("Не удалось составить variableStatement");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (
    variableDeclarationList.rest[0]?.type !== "keysymbol" ||
    variableDeclarationList.rest[0]?.id !== Semicolon.id
  ) {
    log.push("!Пропущена точка с запятой после variableDeclarationList");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push("Составлен variableStatement.");

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
    log,
  };
}
