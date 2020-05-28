import { StatementToPolish } from "scripts/ToPolish";
import { Lexema } from "interfaces/Interface";
import { parsePolish } from "./polishParser";

export const parseCode = (programm: Lexema) => {
  const output = [];
  const statements = programm.body as Lexema[];

  for (let statement of statements) {
    const polish = StatementToPolish(statement);
    output.push(...polish);
  }

  console.log("Polish output: ", output.join(" "));

  try {
    parsePolish(output);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
