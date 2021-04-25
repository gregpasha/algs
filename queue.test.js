const { expect } = require("@jest/globals");
const { createQueue } = require("./queue");

describe("queue", () => {
  it("should be able to dequeue correct value", () => {
    const queue = createQueue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");
    const item = queue.dequeue();
    expect(item).toEqual("a");
    expect(queue.getValue()[0]).toEqual("b");
    expect(queue.getValue()[1]).toEqual("c");
    expect(queue.getValue()[2]).toEqual("d");
  });
});
