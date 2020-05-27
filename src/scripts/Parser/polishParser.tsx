import { Token } from "interfaces/Interface";
import { operations } from "./operations";
import { unarOperations } from "./unar";

export const parsePolish = (input: Token[]): Token[] => {
  if (!input) throw new Error("Input is empty");
  const stack = [];

  for (let token of input) {
    // One variable
    if (unarOperations.hasOwnProperty(String(token))) {
      if (stack.length < 1) throw new Error(`Can't perform '${token}', the stack is empty`);
      stack.push(unarOperations[String(token)](stack.pop()));
    }
    // Two variables
    else if (operations.hasOwnProperty(String(token))) {
      if (stack.length < 2) {
        throw new Error(`Can't perform '${token}', less than 2 variables in stack`);
      }
      stack.push(operations[String(token)](stack.pop(), stack.pop()));
    }
    // Variable
    else {
      stack.push(token);
    }
  }

  return stack;
};
