import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { isVarModifier, isExpression } from "scripts/Syntax";

// variableDeclaration
//     : varModifier Identifier (Assign singleExpression)?
//     ;
export function isVariableDeclaration(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  const varModifier = isVarModifier(lexemas, mode);
  log.push(...varModifier.log);

  if (!varModifier.isSuccessfull) {
    log.push("Не удалось составить variableDeclarationList");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  if (varModifier.rest[0].type !== "identificator") {
    log.push("Не удалось составить variableDeclarationList");

    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
      log,
    };
  }

  let optional = [];
  let rest = varModifier.rest.slice(2);
  if (varModifier.rest[1].body === "=") {
    const singleExpression = isExpression(rest, mode);
    log.push(...singleExpression.log);

    if (!singleExpression.isSuccessfull) {
      log.push("После Assign не последовал singleExpression");

      return {
        isSuccessfull: false,
        foundedLexema: null,
        rest: lexemas,
        log,
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
        varModifier.rest[0], // identificator
        ...optional,
      ],
    },
    rest,
    log,
  };
}
