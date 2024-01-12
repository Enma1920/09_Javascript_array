import feedMonkeysMap from "./feedMonkeys.js";

describe("Given feedMonkeys", () => {
    
    test("when 🍌 is provided as argument Then exècted array should be returned ", () => {
        
        const fruit = "🍌";
        const resultArray = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

        const Monkeys = feedMonkeysMap(fruit);

        expect(Monkeys).toBeDefined();
        expect(Monkeys).toEqual(resultArray);
    });

    test("when 🍎 is provided as argument Then exècted array should be returned ", () => {

        const fruit = "🍎";
        const resultArray = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

        const Monkeys = feedMonkeysMap(fruit);

        expect(Monkeys).toBeDefined();
        expect(Monkeys).toEqual(resultArray);
    });

});
