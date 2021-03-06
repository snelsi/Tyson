import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

import { TysonParserVisitor } from "scripts/antlr4/TysonParserVisitor";
import { TysonLexer } from "scripts/antlr4/TysonLexer";
import { TysonParser } from "scripts/antlr4/TysonParser";

class CountFunctionsVisitor extends AbstractParseTreeVisitor<number>
  implements TysonParserVisitor<number> {
  public defaultResult() {
    return 0;
  }

  public aggregateResult(aggregate: number, nextResult: number) {
    return aggregate + nextResult;
  }

  // FunctionDeclarationContext
  public visitFunctionDeclaration(context: any): number {
    return 1 + super.visitChildren(context);
  }
}

// Create the lexer and parser

export const AntlrParse = (input: string) => {
  console.log("%c -------ANTLR---------", "color: red");

  console.log("Text input: ", input);

  const inputStream = new ANTLRInputStream(input);
  console.log("InputStream: ", inputStream);

  const lexer = new TysonLexer(inputStream);
  console.log("Lexer: ", lexer);

  const tokenStream = new CommonTokenStream(lexer);
  console.log("TokenStream: ", tokenStream);

  tokenStream.fill();
  const tokens = tokenStream.getTokens();
  console.log("Tokens: ", tokens);

  const parser = new TysonParser(tokenStream);
  console.log("Parser: ", parser);

  // Parse the input, where `compilationUnit` is whatever entry point you defined
  const tree = parser.program();
  console.log("Tree: ", tree);

  // Create the visitor
  const countFunctionsVisitor = new CountFunctionsVisitor();
  // Use the visitor entry point
  countFunctionsVisitor.visit(tree);

  console.log("countFunctionsVisitor: ", countFunctionsVisitor);

  console.log("%c -------ANTLR---------", "color: red");
};
