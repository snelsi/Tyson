// Three chars
export const StrictEquals = {
  id: 1,
  symbol: "===",
  details: "strict equal",
};

export const StrictNotEquals = {
  id: 2,
  symbol: "!==",
  details: "strict not equal",
};

// Two chars
export const Equals = {
  id: 3,
  symbol: "==",
  details: "equal",
};

export const NotEquals = {
  id: 4,
  symbol: "!=",
  details: "not equal",
};

export const MoreThanEquals = {
  id: 5,
  symbol: ">=",
  details: "more or equal",
};

export const LessThanEquals = {
  id: 6,
  symbol: "<=",
  details: "less or equal",
};

export const PlusPlus = {
  id: 7,
  symbol: "++",
  details: "add iterator",
};

export const MinusMinus = {
  id: 8,
  symbol: "--",
  details: "substr iterator",
};

export const Or = {
  id: 9,
  symbol: "||",
  details: "operator or",
};

export const And = {
  id: 10,
  symbol: "&&",
  details: "operator and",
};

export const PlusAssign = {
  id: 11,
  symbol: "+=",
  details: "operator add assign",
};

export const MinusAssign = {
  id: 12,
  symbol: "-=",
  details: "operator substract assign",
};

export const MultiplyAssign = {
  id: 13,
  symbol: "*=",
  details: "operator multiply assign",
};

export const DivideAssign = {
  id: 14,
  symbol: "/=",
  details: "operator divide assign",
};

export const ModulusAssign = {
  id: 15,
  symbol: "%=",
  details: "operator modulus assign",
};
export const PowerAssign = {
  id: 16,
  symbol: "^=",
  details: "operator power assign",
};
// One char

export const Coma = {
  id: 17,
  symbol: ",",
  details: "coma",
};

export const DoubleDot = {
  id: 18,
  symbol: ":",
  details: "double dot",
};

export const Semicolon = {
  id: 19,
  symbol: ";",
  details: "semicolon",
};

export const OpenParen = {
  id: 20,
  symbol: "(",
  details: "open round bracket",
};

export const CloseParen = {
  id: 21,
  symbol: ")",
  details: "close round bracket",
};

export const OpenBrace = {
  id: 22,
  symbol: "{",
  details: "open bracket",
};

export const CloseBrace = {
  id: 23,
  symbol: "}",
  details: "close bracket",
};

export const LessThan = {
  id: 24,
  symbol: "<",
  details: "less than",
};

export const MoreThan = {
  id: 25,
  symbol: ">",
  details: "more than",
};

export const Plus = {
  id: 26,
  symbol: "+",
  details: "plus operator",
};

export const Minus = {
  id: 27,
  symbol: "-",
  details: "minus operator",
};

export const Divide = {
  id: 28,
  symbol: "/",
  details: "division operator",
};

export const Multiply = {
  id: 29,
  symbol: "*",
  details: "multiplier operator",
};

export const Not = {
  id: 30,
  symbol: "!",
  details: "operator not",
};

export const Modulus = {
  id: 31,
  symbol: "%",
  details: "left division",
};

export const Assign = {
  id: 32,
  symbol: "=",
  details: "assign operator",
};

export const Power = {
  id: 33,
  symbol: "^",
  details: "power operator",
};

// Tokens must be in char length descending order
export const keySymbols = [
  StrictEquals,
  StrictNotEquals,

  Equals,
  NotEquals,
  MoreThanEquals,
  LessThanEquals,
  PlusPlus,
  MinusMinus,
  Or,
  And,
  PlusAssign,
  MinusAssign,
  MultiplyAssign,
  DivideAssign,
  Power,
  ModulusAssign,
  PowerAssign,

  Coma,
  DoubleDot,
  Semicolon,
  OpenParen,
  CloseParen,
  OpenBrace,
  CloseBrace,
  LessThan,
  MoreThan,
  Plus,
  Minus,
  Divide,
  Multiply,
  Not,
  Modulus,
  Assign,
];
