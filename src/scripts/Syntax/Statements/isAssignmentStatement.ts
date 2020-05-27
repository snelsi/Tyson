import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isAssignment } from "scripts/Syntax";
import { Semicolon } from "scripts/keySymbols";

// assignmentStatement
//     : assignment SemiColon
//     ;
export function isAssignmentStatement(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  const assignment = isAssignment(lexemas, mode);
  log.push(...assignment.log);

  if (!assignment.isSuccessfull) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (assignment.rest[0]?.type !== "keysymbol" || assignment.rest[0].id !== Semicolon.id) {
    log.push("После singleExpression пропущена точка с запятой");
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  log.push("Составлен AssignmentStatement.");

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
    log,
  };
}
