const { it, expect } = require("@jest/globals");
const { reverse } = require("./array");

describe("array functions", () => {
  it("should be able to reverse an array", () => {
    const letters = ["a", "b", "c"];
    const reverseLetters = reverse(letters);
    expect(letters[0]).toEqual("a");
    expect(reverseLetters[0]).toEqual("c");
  });
});
