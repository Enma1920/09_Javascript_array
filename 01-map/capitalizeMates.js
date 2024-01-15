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
        return (
          character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
        );
      })
      .join(" ");
  });
};

export default capitalizeMates;
