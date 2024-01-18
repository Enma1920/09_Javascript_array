import getLongWords from "./getLongWords.js";
describe("Given getLongWords function", () => {
  test("When it receives a languages array, Then returns ['JavaScript', 'TypeScript'] ", () => {
    const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
    const EXPECTED_RESULT = ["JavaScript", "TypeScript"];

    const resultArray = getLongWords(LANGUAGES);

    expect(resultArray).toEqual(EXPECTED_RESULT);
    expect(resultArray.length).toBe(2);
    expect(resultArray).toBeDefined();
  });

  test("When it receives the beatles array, Then returns ['George', 'Ringo'] ", () => {
    const BEATLES = ["John", "George", "Paul", "Ringo"];
    const EXPECTED_RESULT = ["George", "Ringo"];

    const resultArray = getLongWords(BEATLES);

    expect(resultArray).toEqual(EXPECTED_RESULT);
    expect(resultArray.length).toBe(2);
    expect(resultArray).toBeDefined();
  });
});
