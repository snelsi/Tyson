import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { isDoWhile } from "./iterations/isDoWhile";
import { isWhile } from "./iterations/isWhile";
import { isFor } from "./iterations/isFor";

const functions = [isDoWhile, isWhile, isFor];

// iterationStatement
//     : Do statement While OpenParen expressionSequence CloseParen SemiColon                                                                             # DoStatement
//     | While OpenParen expressionSequence CloseParen statement                                                                                          # WhileStatement
//     | For OpenParen (expressionSequence | variableDeclarationList)? SemiColon expressionSequence? SemiColon expressionSequence? CloseParen statement   # ForStatement
//     ;
export function isIterationStatement(lexemas: Lexema[], mode: boolean): AnalyzeResult {
  const log = [];

  for (let check of functions) {
    let result = check(lexemas, mode);
    log.push(...result.log);
    if (result.isSuccessfull) {
      return result;
    }
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
    log,
  };
}
