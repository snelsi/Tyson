import { AnalyzeResult, Lexema } from "interfaces/Interface";
import { Var, Let, Const } from "scripts/keyWords";

export function isVarModifier(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  if (lexemas[0].id === Var.id || lexemas[0].id === Let.id || lexemas[0].id === Const.id) {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
      log,
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}
