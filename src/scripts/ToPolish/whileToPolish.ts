import { Lexema, Token } from "interfaces/Interface";
import { parser } from "scripts/store/parserStore";
import { toPolish, StatementToPolish } from "scripts/ToPolish";

// while ( expr ) statement
// #1 expr 2 УП statement 1 БП #2
export const whileToPolish = (lexema: Lexema): Token[] => {
  const [While, OpenParen, Expression, CloseParen, Statement] = lexema.body as Lexema[];

  const index1 = parser.anchorNextIndex++;
  const index2 = parser.anchorNextIndex++;

  const expressionPolish = toPolish(Expression);
  const statementPolish = StatementToPolish(Statement);

  return [
    `#${index1}`,
    ...expressionPolish,
    "!",
    index2,
    "$CondGoTo",
    ...statementPolish,
    index1,
    "$GoTo",
    `#${index2}`,
  ];
};
