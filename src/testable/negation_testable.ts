import { toBe } from "./expectations/toBe";
import { toBeGreaterThan } from "./expectations/toBeGreaterThan";
import { want } from "./utils/want";

export class NegationTestable {
  private value: any;
  constructor(value: any) {
    this.value = value;
  }

  toBe = (val: any) =>
    want(
      !toBe(this.value, val),
      "expected " +
        JSON.stringify(this.value) +
        " not to be " +
        JSON.stringify(val)
    );

  toBeGreaterThan = (val: any) =>
    want(
      !toBeGreaterThan(this.value, val),
      "expected " +
        JSON.stringify(this.value) +
        " not to be greater than " +
        JSON.stringify(val)
    );
}
