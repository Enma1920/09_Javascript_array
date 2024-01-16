import extractVipsNames from "./extractVipsNames.js";
describe("Given extractVipsNames function", () => {
  test("When receives VIPS array, Then returns an array of strings only with vips names ", () => {
    const VIPS = [
      {
        name: "Foo",
        age: 80,
      },
      {
        name: "Bar",
        age: 2,
      },
      {
        name: "Fizz",
        age: 5,
      },
      {
        name: "Buzz",
        age: 16,
      },
      {
        name: "FizzBuzz",
        age: 100,
      },
    ];

    const EXPECTED_RESULT = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    const RESULT = extractVipsNames(VIPS);

    expect(RESULT).toEqual(EXPECTED_RESULT);
  });
});
