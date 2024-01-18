import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer";

describe("Given extractCountriesWithFiveCharactersOrFewer ", () => {
  test("When receives COUNTRIES array. Then returns the filtered array with contries length greater or more than 5 charcaters", () => {
    
    const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];
    const EXPECTED_RESULT = [ 'Italy' ];

    const RESULT = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(RESULT).toEqual(EXPECTED_RESULT);

  });
  
});
