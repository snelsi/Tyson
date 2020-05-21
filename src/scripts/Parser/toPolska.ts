import type { TestLexema, GoTo, Anchor } from "interfaces/Interface";
import { getAnchor, getGoTo } from "scripts/Parser/helpers";
import { priorityTable } from "scripts/Parser/priorityTable";

type OutputLexema = TestLexema | Anchor | GoTo;

export const toPolska = (lexemas: TestLexema[]): OutputLexema[] => {
  const input = lexemas.reverse();
  const output: OutputLexema[] = [];
  const stack: OutputLexema[] = [];
  let anchorsCounter = 0;

  while (input.length > 0) {
    const inputToken = input[input.length - 1];
    if (
      inputToken.type === "string" ||
      inputToken.type === "number" ||
      inputToken.type === "identificator" ||
      inputToken.body === "null" ||
      inputToken.body === "undefined" ||
      inputToken.body === "true" ||
      inputToken.body === "false"
    ) {
      output.push(input.pop());
    }
    // TODO IF
    else if (inputToken.body === "if") {
      anchorsCounter++;
      input.pop();
      stack.push(getAnchor(anchorsCounter));
      stack.push(getGoTo("conditional", anchorsCounter));
    }
    // TODO ELSE
    else if (inputToken.body === "else") {
      stack.push(output.pop());
      if (input[input.length - 1].body === "if") {
        input.pop();
        stack.push(getGoTo("conditional", anchorsCounter));
      }
      anchorsCounter++;
      input.pop();
      output.push(getGoTo("unconditional", anchorsCounter));
      output.push(stack.pop());
      stack.push(getAnchor(anchorsCounter));
    }
    // TODO WHILE
    else if (inputToken.body === "while") {
    }
    // TODO DO WHILE
    else if (inputToken.body === "do") {
      input.pop();
      const index = ++anchorsCounter;
      output.push(getAnchor(index));
    }
    // TODO FOR
    else if (inputToken.body === "for") {
    } else if (
      stack.length > 0 &&
      priorityTable[stack[stack.length - 1].body] >= priorityTable[inputToken.body]
    ) {
      output.push(stack.pop());
    } else {
      const token = input.pop();
      if (token.body === ";") {
        while (
          input.length &&
          input[input.length - 1].body !== "}" &&
          stack.length > 0 &&
          (stack[stack.length - 1].body === "goto" || stack[stack.length - 1].body === "anchor") &&
          (input.length <= 0 || input[input.length - 1])
        ) {
          output.push(stack.pop());
        }
        continue;
      }
      if (token.body === ")") {
        stack.pop();
        if (stack[stack.length - 1].body === "goto") output.push(stack.pop());
      } else if (token.body === "}") {
        stack.pop();
        if (input.length <= 0 || input[input.length - 1].body !== "else") {
          while (
            stack.length > 0 &&
            (stack[stack.length - 1].body === "goto" || stack[stack.length - 1].body === "anchor")
          ) {
            output.push(stack.pop());
          }
        }
      } else {
        stack.push(token);
      }
    }
  }

  if (stack.length) output.push(...stack.reverse());

  return output;
};
