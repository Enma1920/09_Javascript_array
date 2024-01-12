import transformSecondsToWords from "./transformSecondsToWords.js";
describe("Given transformSecondsToWords function", () => {
  test("When receives SECONDS array, Then returns an array of strings from numbers", () => {
    const SECONDS = [2, 5, 100];
    const EXPECTED_RESULT = ["2", "5", "100"];

    const RESULT = transformSecondsToWords(SECONDS);

    expect(RESULT).toEqual(EXPECTED_RESULT);
  });
});
