import { Lexema, AnalyzeResult } from "interfaces/Interface";
import { Null, True, False } from "scripts/keyWords";

// literal
//     : NullLiteral
//     | BooleanLiteral
//     | StringLiteral
//     | numericLiteral
//     ;
export const isLiteral = (lexemas: Lexema[]): AnalyzeResult => {
  if (!lexemas || lexemas.length === 0) {
    return {
      isSuccessfull: false,
      foundedLexema: null,
      rest: lexemas,
    };
  }

  if (
    lexemas[0]?.id === Null.id ||
    lexemas[0]?.id === True.id ||
    lexemas[0]?.id === False.id ||
    lexemas[0]?.type === "string" ||
    lexemas[0]?.type === "number"
  ) {
    return {
      isSuccessfull: true,
      foundedLexema: lexemas[0],
      rest: lexemas.slice(1),
    };
  }

  return {
    isSuccessfull: false,
    foundedLexema: null,
    rest: lexemas,
  };
};
