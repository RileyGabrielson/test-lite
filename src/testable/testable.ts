import { toBe } from "./expectations/toBe";
import { toBeGreaterThan } from "./expectations/toBeGreaterThan";
import { NegationTestable } from "./negation_testable";
import { want } from "./utils/want";

export class Testable {
  private value: any;
  public not: NegationTestable;
  constructor(value: any) {
    this.value = value;
    this.not = new NegationTestable(value);
  }

  toBe = (val: any) =>
    want(
      toBe(this.value, val),
      "expected " + JSON.stringify(this.value) + " to be " + JSON.stringify(val)
    );

  toBeGreaterThan = (val: any) =>
    want(
      toBeGreaterThan(this.value, val),
      "expected " +
        JSON.stringify(this.value) +
        " to be greater than " +
        JSON.stringify(val)
    );
}
