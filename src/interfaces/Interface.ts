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

export type VariableValue = number | string | boolean | null;

export interface Variable {
  value: VariableValue;
  constant: boolean;
}

export interface AnalyzeResult {
  isSuccessfull: boolean;
  foundedLexema: Lexema;
  rest: Lexema[];
}
