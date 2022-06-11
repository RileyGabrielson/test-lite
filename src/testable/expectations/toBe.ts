import { ExpectationResult } from "../expectation_result";

export const toBe = (firstVal: any, secondVal: any): ExpectationResult => {
  return {
    isSuccess: Object.is(firstVal, secondVal),
    errorMessage: "Expected ",
    negationErrorMessage: "Expected",
  };
};
