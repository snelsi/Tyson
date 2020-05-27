export type Token = number | string | boolean;

export type BaseType =
  | "keysymbol"
  | "keyword"
  | "identificator"
  | "number"
  | "string"
  | "operator"
  | "error";

export type StatementType =
  | "Statement"
  | "Log"
  | "Continue"
  | "Break"
  | "For"
  | "Do While"
  | "While"
  | "Assignment"
  | "Brackets"
  | "Empty"
  | "Expression Statement"
  | "If"
  | "Variable Declaration";

export type Type = BaseType | StatementType | "Expression" | "Type" | "Programm";

export interface Lexema {
  type: Type;
  body: string | Lexema[];
  row?: number;
  column?: number;
  id?: number;
  details?: string;
  msg?: string;
}

export interface BaseLexema extends Lexema {
  type: BaseType;
  body: string;
}

export interface GoTo {
  type: "unconditional" | "conditional";
  body: "goto";
  anchor: string;
}

export interface Anchor {
  type: "anchor";
  body: "anchor";
  anchor: string;
}

export interface AnalyzeResult {
  isSuccessfull: boolean;
  foundedLexema: Lexema;
  rest: Lexema[];
  log: string[];
}

type Operation = "+" | "-" | "*" | "/";
type Input = number | Operation;
