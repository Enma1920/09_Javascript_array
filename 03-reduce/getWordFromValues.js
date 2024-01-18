/**
 * Given 'VALUES' array, define function 'getWordFromValues' to return a string of all those numbers.
 *
 * expected: '123'
 */

const VALUES = [1, 2, 3];

const getWordFromValues = (values)=>{

    const wordArray = values.reduce((accumulator, currentValue)=>{

        const valueToString = accumulator + currentValue;
        return valueToString;

    }, "");
    return wordArray;

}

export default getWordFromValues;
