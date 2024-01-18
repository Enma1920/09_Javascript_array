import customersWhoBelongToMembership from "./customersWhoBelongToMembership.js";
describe("Given customersWhoBelongToMembership function", () => {
  test("When it receives CUSTOMERS array. Then returns the array filtered with memebrship customers", () => {
    const CUSTOMERS = [
      {
        name: "Foo",
        member: true,
      },
      {
        name: "Bar",
        member: false,
      },
      {
        name: "Fizz",
        member: true,
      },
      {
        name: "Buzz",
        member: false,
      },
      {
        name: "FizzBuzz",
        member: true,
      },
    ];

    const EXPECTED_RESULT = [{ name: 'Foo', member: true },  { name: 'Fizz', member: true },  { name: 'FizzBuzz', member: true }];

    const RESULT = customersWhoBelongToMembership(CUSTOMERS);

    expect(RESULT).toEqual(EXPECTED_RESULT);

  });

});
