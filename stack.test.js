const { expect } = require("@jest/globals");
const { createStack } = require("./stack.js");

describe("stack", () => {
  it("should be able to create a stack", () => {
    const stack = createStack();
    expect(stack).toBeTruthy();
  });

  it("should be able to add an item to a stack", () => {
    const stack = createStack();
    stack.push("a");
    expect(stack.getValue()[0]).toEqual("a");
  });
});
