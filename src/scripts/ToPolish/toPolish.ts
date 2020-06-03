import type { Lexema, Token, BaseLexema } from "interfaces/Interface";
import { priorityTable } from "scripts/ToPolish/priorityTable";
import { flatLexema } from "scripts/helpers";
import { False, True, Null } from "scripts/keyWords";

const toToken = (input: BaseLexema) => {
  if (input?.type === "number") return Number(input.body);
  if (input?.id === True.id) return true;
  if (input?.id === False.id) return false;
  if (input?.id === Null.id) return null;
  return input.body;
};

/* eslint-disable complexity */
export const toPolish = (expression: Lexema): Token[] => {
  const input = flatLexema(expression).reverse();
  const output: Token[] = [];
  const stack: Token[] = [];

  while (input.length > 0) {
    const inputToken = input[input.length - 1];
    const tokenPriority = priorityTable[inputToken.body];

    // Iterators should be converted to special mark
    if (inputToken?.body === "++" || inputToken?.body === "--") {
      // Pre
      if (inputToken?.details === "Pre") {
        stack.push(inputToken?.body === "++" ? "PrI" : "PrD");
      }
      // Post
      else {
        output.push(inputToken?.body === "++" ? "PoI" : "PoD");
      }
      input.pop();
    }

    // unar
    else if (inputToken?.details?.startsWith("unar")) {
      if (inputToken?.body === "+") stack.push("$UPlus");
      else if (inputToken?.body === "-") stack.push("$UMinus");
      else stack.push(inputToken?.body);
      input.pop();
    }

    // literals
    else if (tokenPriority === undefined) {
      output.push(toToken(input.pop()));
    }

    // Open brackets always go to stack
    else if (inputToken.body === "(" || inputToken.body === "{") {
      stack.push(toToken(input.pop()));
    }

    // Check for stack priority
    else if (stack.length > 0 && priorityTable[String(stack[stack.length - 1])] >= tokenPriority) {
      output.push(stack.pop());
    }

    // Go to stack
    else {
      const token = input.pop();

      if (token.body === ")" || token.body === "}") {
        stack.pop();
      } else if (token.body !== ";") {
        stack.push(token.body);
      }
    }
  }

  if (stack.length) output.push(...stack.reverse());

  return output;
};
