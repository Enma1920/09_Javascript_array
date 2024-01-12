import capitalizeMates from "./capitalizeMates";
describe("Given capitalizeMates function", ()=>{
    test("When it receives MATES arrays, Then returns an array of strings with capitalized names ", ()=>{

        const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
        const EXPECTED_RESULT = ["John", "Jacob", "Jingleheimer", "Schmidt"];

        const RESULT  = capitalizeMates(MATES);

        expect(RESULT).toEqual(EXPECTED_RESULT);
        expect(RESULT).toBeDefined();
        expect(RESULT).toHaveLength(EXPECTED_RESULT.length);
    })

})