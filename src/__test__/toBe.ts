import { expect } from "../testable/expect";
import { t } from "../testable/t";
import { test } from "../testable/test";

t(() => [
  test("number equality", () => {
    expect(3).toBe(3);
    expect(5).toBe(5);
    expect(8).not.toBe(5);
    expect(4).not.toBe(9);
  }),

  test("number inequality", () => {
    expect(10).toBeGreaterThan(5);
    expect(6).not.toBeGreaterThan(7);
    expect(3).not.toBeGreaterThan(3);
  }),

  test("string equality", () => {
    expect("bleh").toBe("bleh");
    expect("bleh").not.toBe("yabba dabba");
  }),

  test("string inequality", () => {
    expect("c").toBeGreaterThan("a");
  }),
]);
