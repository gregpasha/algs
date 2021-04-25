const { createStack } = require("./stack.js");

describe("stack", () => {
  it("should be able to add to a stack", () => {
    const stack = createStack();
    expect(stack).toBeTruthy();
  });
});
