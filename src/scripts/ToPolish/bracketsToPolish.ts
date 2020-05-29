import { Lexema, Token } from "interfaces/Interface";
import { StatementToPolish } from "scripts/ToPolish";

// { statement* };
// statement*
export const bracketsToPolish = (lexema: Lexema): Token[] => {
  const statements = lexema.body.slice(1, -1) as Lexema[];

  const output = [];

  for (let statement of statements) {
    const polishStatement = StatementToPolish(statement);
    output.push(...polishStatement);
  }

  return output;
};
