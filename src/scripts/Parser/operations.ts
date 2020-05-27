const Add = (num2: number, num1: number) => num1 + num2;
const Minus = (num2: number, num1: number) => num1 - num2;
const Multiply = (num2: number, num1: number) => num1 * num2;
const Divide = (num2: number, num1: number) => num1 / num2;
const Modul = (num2: number, num1: number) => num1 % num2;
const Power = (num2: number, num1: number) => num1 ** num2;

const And = (num2: number, num1: number) => num1 && num2;
const Or = (num2: number, num1: number) => num1 || num2;

export const operations = {
  "+": Add,
  "-": Minus,
  "*": Multiply,
  "/": Divide,
  "%": Modul,
  "^": Power,

  "&&": And,
  "||": Or,
};
