import { Testable } from "./testable";

export function expect(val: any) {
  return new Testable(val);
}
