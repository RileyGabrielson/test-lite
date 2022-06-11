import { startTest } from "./log/startTest";

export const test = (description: string, testFn: () => void) =>
  new Test(description, testFn);

export class Test {
  private description: string;
  private testFunction: () => void;
  constructor(description: string, testFn: () => void) {
    this.description = description;
    this.testFunction = testFn;
  }

  execute() {
    startTest(this.description);
    try {
      this.testFunction();
    } catch (e) {
      console.log(e.message);
    }
  }
}
