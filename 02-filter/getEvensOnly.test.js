import getEvensOnly from "./getEvensOnly.js";
describe("Given getEvensOnly function ", () => {
  test("When receives COUNTERS array. Then returns the array filtered with only even numbers", () => {
    const COUNTERS = [2, 25, 43, 12, 67, 42, 28];
    const EXPECTED_COUNTERS = [2, 12, 42, 28];

    const RESULT = getEvensOnly(COUNTERS);

    expect(RESULT).toEqual(EXPECTED_COUNTERS);
  });
});
