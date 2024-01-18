import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";
describe("Given sumNumbersFromInitialValue function", () => {
  test("When it receives an initial value = 0, Then returns its sum value 15", () => {

    const NUMBERS = [1, 2, 3, 4, 5];
    const INTIAL_VALUE = 0;
    const EXPECTED_RESULT = 15;

    const RESULT = sumNumbersFromInitialValue(NUMBERS, INTIAL_VALUE);

    expect(RESULT).toEqual(EXPECTED_RESULT);
    expect(RESULT).toBeDefined();
  });

  test("When it receives an initial value = 10, Then returns its sum value 25", () => {
    
    const NUMBERS = [1, 2, 3, 4, 5];
    const INTIAL_VALUE = 10;
    const EXPECTED_RESULT = 25;

    const RESULT = sumNumbersFromInitialValue(NUMBERS, INTIAL_VALUE);

    expect(RESULT).toEqual(EXPECTED_RESULT);
    expect(RESULT).toBeDefined();
    
  });
});
