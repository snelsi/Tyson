import { Variable, VariableValue } from "interfaces/Interface";

export class Variables {
  private vars = new Map<string, Variable>();

  public get variables() {
    return Array.from(this.vars.entries());
  }

  public clear = () => this.vars.clear();

  public createVariable = (identifier: string, constant = false) => {
    if (this.vars.has(identifier)) {
      throw new Error(`'${identifier}' is already defined`);
    }

    this.vars.set(identifier, {
      value: undefined,
      constant,
    });
  };

  public getVariable = (identifier: string) => {
    if (!this.vars.has(identifier)) {
      throw new Error(`'${identifier}' is not defined`);
    }
    return this.vars.get(identifier).value;
  };

  public setVariable = (identifier: string, value: VariableValue) => {
    if (!this.vars.has(identifier)) {
      console.log(this.vars.has(identifier), this.vars.get(identifier));
      throw new Error(`Tried to set, '${identifier}' is not defined`);
    }
    const cur = this.vars.get(identifier);
    if (cur.value !== undefined && cur.constant === true) {
      throw new Error(`'${identifier}' is constant and cannot be modified`);
    }

    this.vars.set(identifier, { ...cur, value });
  };
}
