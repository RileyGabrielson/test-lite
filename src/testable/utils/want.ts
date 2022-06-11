export const want = (result: boolean, failMessage: string) => {
  if (!result) throw Error("--FAILURE-- " + failMessage);
};
