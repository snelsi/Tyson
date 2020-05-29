import { Token } from "interfaces/Interface";
import { operations, unarValue, unarName, assingments } from "./operations";

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

  let i = 0;
  let iterations = 0;
  while (i < input.length && iterations < 100000) {
    const token = input[i];
    // GoTo
    if (token === "$GoTo") {
      i = parser.anchors.get(stack.pop());
    }
    // Conditional GoTo
    else if (token === "$CondGoTo") {
      const index = stack.pop();
      const condition = getVariable();
      if (condition) {
        i = parser.anchors.get(index);
      }
    }
    // Working with value
    else if (unarValue.hasOwnProperty(String(token))) {
      if (stack.length < 1) throw new Error(`Can't perform '${token}', the stack is empty`);
      const operation = unarValue[String(token)];
      stack.push(operation(getVariable()));
    }
    // Working with variable name, don't translate to value
    else if (unarName.hasOwnProperty(String(token))) {
      if (stack.length < 1) throw new Error(`Can't perform '${token}', the stack is empty`);
      const operation = unarName[String(token)];
      stack.push(operation(stack.pop()));
    }
    // Assignments
    else if (assingments.hasOwnProperty(String(token))) {
      if (stack.length < 2) {
        throw new Error(`Can't perform '${token}', less than 2 variables in stack`);
      }
      assingments[String(token)](getVariable(), stack.pop());
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

    i++;
    iterations++;
  }

  return stack;
};
