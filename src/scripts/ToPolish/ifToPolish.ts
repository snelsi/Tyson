import { Lexema, Token } from "interfaces/Interface";
import { parser } from "scripts/store/parserStore";
import { toPolish, StatementToPolish } from "scripts/ToPolish";

// if ( expression ) statement [else statement2];
// expression 1 УП statement 2 БП #1 statement2 #2
export const ifToPolish = (lexema: Lexema): Token[] => {
  const lexemas = lexema.body as Lexema[];

  console.log(lexemas);

  const [If, OpenParen, Expression, ClosePar, Statement, Else, Statement2] = lexemas;

  const index1 = parser.anchorNextIndex++;
  const index2 = parser.anchorNextIndex++;

  const expressionPolish = toPolish(Expression);
  const statementPolish = StatementToPolish(Statement);

  const ElseLogic = Statement2 !== undefined ? StatementToPolish(Statement2) : [];

  return [
    ...expressionPolish,
    "!",
    index1,
    "$CondGoTo",
    ...statementPolish,
    index2,
    "$GoTo",
    `#${index1}`,
    ...ElseLogic,
    `#${index2}`,
  ];
};
