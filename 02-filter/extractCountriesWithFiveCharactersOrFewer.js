/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

const extractCountriesWithFiveCharactersOrFewer = (countries) => {
  const contruiesFiltered = countries.filter((country) => {
    const greaterThan5 = country.length <= 5;
    return greaterThan5;
  });
  return contruiesFiltered;
};

export default extractCountriesWithFiveCharactersOrFewer;
