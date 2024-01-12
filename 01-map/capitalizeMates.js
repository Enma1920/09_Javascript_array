/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

const capitalizeMates = (mates) => {
  return mates.map((name) => {
    return name
      .split(" ")
      .map((character) => {
        // split mate and map each character
        return (
          character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
        ); //capitalize first character and lowercase the rest starting from index 1--> slice(1)
      })
      .join(" "); // join the array of characters to form a string
  });
};

export default capitalizeMates;
