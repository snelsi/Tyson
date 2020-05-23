type Operation = "+" | "-" | "*" | "/";
type Input = number | Operation;

export const parsePolskaNotation = (props: Input[]): number => {
  if (!props) throw new Error("Input is empty");
  const stack = [];

  for (let variable of props) {
    if (typeof variable === "number") {
      stack.push(variable);
    } else if (variable === "+" || variable === "-" || variable === "*" || variable === "/") {
      if (stack.length < 2) {
        throw new Error(`Can't perform operation '${variable}', less than 2 numbers in stack`);
      }
      const [num1, num2] = stack.splice(-2);

      if (typeof num1 !== "number") {
        throw new Error(`Can't perform operation '${variable}', '${num1}' is not a number`);
      }
      if (typeof num2 !== "number") {
        throw new Error(`Can't perform operation '${variable}', '${num2}' is not a number`);
      }

      // eslint-disable-next-line no-eval
      stack.push(eval(`${num1} ${variable} ${num2}`));
    }
  }

  if (stack.length !== 1) {
    throw new Error(
      `The amount of numbers and operations is invalid. Perhaps, there is missing operations or extra numbers in input.`,
    );
  }
  return stack[0];
};

export const validateInput = (input: any): Input => {
  if (!Number.isNaN(Number(input))) return Number(input);
  if (input === "+" || input === "-" || input === "*" || input === "/") return input;
  throw new Error(`${input}' is not valid input`);
};

export const parseInput = (input: string): Input[] =>
  input.split(" ").map((value) => validateInput(value));
