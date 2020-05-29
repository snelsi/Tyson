import { Lexema, Token } from "interfaces/Interface";
import { parser } from "scripts/store/parserStore";
import { toPolish, StatementToPolish } from "scripts/ToPolish";
import { Semicolon, CloseParen } from "scripts/keySymbols";
import { insertNull } from "scripts/helpers";

// for ( [assignment | variableDeclaration] ; expression ; [assignment | expression] ) statement;
// [assignment | variableDeclaration] #1 expression 2 УП statement [assignment | expression] 1 БП #2
export const forToPolish = (lexema: Lexema): Token[] => {
  let lexemas = lexema.body as Lexema[];
  if (lexemas[2]?.id === Semicolon.id) {
    insertNull(lexemas, 2);
  }
  if (lexemas[6]?.id === CloseParen.id) {
    insertNull(lexemas, 6);
  }

  const [
    For,
    OpenParen,
    PreInitial,
    Semicolon1,
    Expression,
    Semicolon2,
    PostIncrement,
    ClosePar,
    Statement,
  ] = lexemas;

  const index1 = parser.anchorNextIndex++;
  const index2 = parser.anchorNextIndex++;

  let initToPolish = PreInitial ? toPolish(PreInitial) : [];
  const expressionPolish = toPolish(Expression);
  let postToPolish = PostIncrement ? toPolish(PostIncrement) : [];
  const statementPolish = StatementToPolish(Statement);

  return [
    ...initToPolish,
    `#${index1}`,
    ...expressionPolish,
    "!",
    index2,
    "$CondGoTo",
    ...statementPolish,
    ...postToPolish,
    index1,
    "$GoTo",
    `#${index2}`,
  ];
};
