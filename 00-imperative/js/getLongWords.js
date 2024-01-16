/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

const getLongWords = (wordsArray) => {
  const result = [];

  const collectionLength = wordsArray.length;

  for (let i = 0; i < collectionLength; i++) {
    const word = wordsArray[i];

    if (word.length >= 5) {
      result.push(word);
    }
  }

  return result;
};

export default getLongWords;
