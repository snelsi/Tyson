import { Lexema, Token } from "interfaces/Interface";
import { toPolish, ifToPolish, forToPolish, doWhileToPolish, whileToPolish } from ".";

export const StatementToPolish = (lexema: Lexema): Token[] => {
  switch (lexema.type) {
    case "If":
      return ifToPolish(lexema);
    case "For":
      return forToPolish(lexema);
    case "Do While":
      return doWhileToPolish(lexema);
    case "While":
      return whileToPolish(lexema);
    default:
      return toPolish(lexema);
  }
};
