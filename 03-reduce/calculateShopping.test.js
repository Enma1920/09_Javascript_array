import calculateShopping from "./calculateShopping.js";
describe("Given calculateShopping function ", () => {
  test("When receives WISHES array. Then returns how much it would cost to just buy everything at once.", () => {

    const WISHES = [
      { title: "Tesla Model S", price: 90000 },
      { title: "4 carat diamond ring", price: 45000 },
      { title: "Fancy hacky Sack", price: 5 },
      { title: "Gold fidgit spinner", price: 2000 },
      { title: "A second Tesla Model S", price: 90000 },
  ];

    const EXPECTED_RESULT = 227005;

    const RESULT = calculateShopping(WISHES);

    expect(RESULT).toEqual(EXPECTED_RESULT);
  
  });
});
