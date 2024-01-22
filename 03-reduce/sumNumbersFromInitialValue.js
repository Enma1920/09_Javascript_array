/**
 * Given 'NUMBERS' array, define function 'sumNumbersFromInitialValue' to return its sum value depending on initial value.
 *
 * expected with initial as 0: 15
 * expected with initial as 10: 25
 */

const NUMBERS = [1, 2, 3, 4, 5];

const sumNumbersFromInitialValue = (numbers, partialSum) => {
  const totalSum = numbers.reduce((partialSum, currentValue) => {
    const sum = partialSum + currentValue;
    return sum;
  }, partialSum);

  return totalSum;
};

export default sumNumbersFromInitialValue;
