import { Token } from "interfaces/Interface";
import { operations, unarOperations, declarations, assingments } from "./operations";

import { parser } from "scripts/store/parserStore";

export const parsePolish = (input: Token[]): Token[] => {
  if (!input) throw new Error("Input is empty");
  const stack = [];

  const getVariable = () => {
    const token = stack.pop();
    if (typeof token === "string") {
      if (token[0] === '"' || token[0] === "'") {
        // return token;
        return token.slice(1, -1);
      }
      return parser.variables.getVariable(token);
    }
    return token;
  };

  for (let token of input) {
    // Declaration
    if (declarations.hasOwnProperty(String(token))) {
      if (stack.length < 1) throw new Error(`Can't perform '${token}', the stack is empty`);
      declarations[String(token)](stack[stack.length - 1]);
    }
    // Assignments
    else if (assingments.hasOwnProperty(String(token))) {
      if (stack.length < 2) {
        throw new Error(`Can't perform '${token}', less than 2 variables in stack`);
      }
      assingments[String(token)](stack[stack.length - 1], stack[stack.length - 2]);
    }
    // One variable
    else if (unarOperations.hasOwnProperty(String(token))) {
      if (stack.length < 1) throw new Error(`Can't perform '${token}', the stack is empty`);
      stack.push(unarOperations[String(token)](getVariable()));
    }
    // Two variables
    else if (operations.hasOwnProperty(String(token))) {
      if (stack.length < 2) {
        throw new Error(`Can't perform '${token}', less than 2 variables in stack`);
      }
      stack.push(operations[String(token)](getVariable(), getVariable()));
    }
    // Variable
    else {
      stack.push(token);
    }
  }

  return stack;
};
