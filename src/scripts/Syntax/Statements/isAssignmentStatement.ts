import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isAssignment } from "scripts/Syntax";
import { Semicolon } from "scripts/keySymbols";

import { syntax } from "scripts/store";

// assignmentStatement
//     : assignment SemiColon
//     ;
export function isAssignmentStatement(lexemas: Lexema[]): AnalyzeResult {
  const assignment = isAssignment(lexemas);

  if (!assignment.isSuccessfull) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (assignment.rest[0]?.type !== "keysymbol" || assignment.rest[0].id !== Semicolon.id) {
    syntax.pushLog("После singleExpression пропущена точка с запятой");
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  syntax.pushLog("Составлен AssignmentStatement.");

  return {
    isSuccessfull: true,
    foundedLexema: {
      type: "Assignment",
      details: "Комманда присвоения",
      row: lexemas[0].row,
      column: lexemas[0].column,
      body: [assignment.foundedLexema, assignment.rest[0]],
    },
    rest: assignment.rest.slice(1),
  };
}
