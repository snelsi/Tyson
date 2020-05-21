import { GoTo, Anchor } from "interfaces/Interface";

export const getAnchor = (num: number): Anchor => ({
  type: "anchor",
  body: "anchor",
  anchor: String(num),
});

export const getGoTo = (type: "conditional" | "unconditional", num: number): GoTo => ({
  type,
  body: "goto",
  anchor: String(num),
});
