const fizzBuzz = require("./fizzBuzz");

describe("fizzBuzz", () => {
  describe("starter tests", () => {
    it("accepts an array", () => {
      expect(fizzBuzz(1, 2)).toBe(3);
    });
  });
});
