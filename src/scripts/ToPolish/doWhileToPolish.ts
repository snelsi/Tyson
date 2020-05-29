import { Lexema, Token } from "interfaces/Interface";
import { parser } from "scripts/store/parserStore";
import { toPolish, StatementToPolish } from "scripts/ToPolish";

// do statement while ( expr );
// #1 statement expression 1 УП
export const doWhileToPolish = (lexema: Lexema): Token[] => {
  const [Do, Statement, While, OpenParen, Expression, CloseParen] = lexema.body as Lexema[];

  const index = parser.anchorNextIndex++;

  const expressionPolish = toPolish(Expression);
  const statementPolish = StatementToPolish(Statement);

  return [`#${index}`, ...statementPolish, ...expressionPolish, index, "$CondGoTo"];
};
