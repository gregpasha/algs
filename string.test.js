const { it, expect } = require("@jest/globals");
const { reverseString } = require("./string");

describe("strings", () => {
  it("should reverse a string", () => {
    const str = "abc";
    const reversed = reverseString(str);
    expect(reversed).toEqual("cba");
  });
});
