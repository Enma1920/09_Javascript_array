import getWordFromValues from "./getWordFromValues";

describe("Given getWordFromValues function ", () => {
  test("When receives VALUES array. Then returns a string of all those numbers", () => {

    const VALUES = [1, 2, 3];
    const EXPECTED_RESULT = '123';

    const RESULT =getWordFromValues(VALUES);

    expect(RESULT).toEqual(EXPECTED_RESULT);


  });
});
