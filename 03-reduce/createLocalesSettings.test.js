import createLocalesSettings from "./createLocalesSettings.js";
describe("Given createLocalesSettings ", () => {
  test("When LOCALES array is received, Then returns an object with locales settings ", () => {
    const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

    const EXPECTED_RESULT = {
      EN: { id: 0, enabled: true },
      GR: { id: 1, enabled: false },
      FR: { id: 2, enabled: false },
      IT: { id: 3, enabled: false },
      PT: { id: 4, enabled: false },
    };

    const RESULT = createLocalesSettings(LOCALES);

    expect(RESULT).toEqual(EXPECTED_RESULT);
  });
});
