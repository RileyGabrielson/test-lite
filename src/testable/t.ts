import { Test } from "./test";

export const t = (tests: () => Test[]) => {
  tests().forEach((test) => test.execute());
};
