export type BaseType =
  | "keysymbol"
  | "keyword"
  | "identificator"
  | "number"
  | "string"
  | "operator"
  | "error";

export type Type =
  | BaseType
  | "Statement"
  | "Command"
  | "If Statement"
  | "Cycle Statement"
  | "ConstExpr"
  | "Expression"
  | "Type"
  | "Variable Declaration"
  | "Assignment"
  | "Programm";

export interface Lexema {
  type: Type;
  row: number;
  column: number;
  body: string | Lexema[];
  id?: number;
  details?: string;
  msg?: string;
}

export interface AtomLexema extends Lexema {
  type: BaseType;
  body: string;
}

export interface TestLexema {
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

export interface Template {
  type: Type;
  details: string;
}

export interface AnalyzeResult {
  isSuccessfull: boolean;
  foundedLexema: Lexema;
  rest: Lexema[];
  log: string[];
}
