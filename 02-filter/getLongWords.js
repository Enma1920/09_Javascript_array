/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

/**
 * 
 * @param {Array} words;
 * @returns array
 */

const getLongWords = (words)=>{
    
    const longWordsFiltered = words.filter((word)=>{
        
        const greaterThan5 = word.length >= 5;
        return greaterThan5;

    });

    return longWordsFiltered;

}

export default getLongWords;
