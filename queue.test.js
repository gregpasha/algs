const { expect } = require("@jest/globals");
const { createQueue, createQueue2 } = require("./queue");

describe("queue implementation 1", () => {
  it("should be able to dequeue correct value", () => {
    const queue = createQueue();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");
    expect(queue.dequeue()).toEqual("a");
    expect(queue.dequeue()).toEqual("b");
    queue.enqueue("e");
    queue.enqueue("f");
    expect(queue.dequeue()).toEqual("c");
    expect(queue.dequeue()).toEqual("d");
    expect(queue.dequeue()).toEqual("e");
    expect(queue.dequeue()).toEqual("f");
  });
});

describe("queue implementation 2", () => {
  it("should be able to queue and dequeue", () => {
    const queue = createQueue2();
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");
    queue.enqueue("d");
    expect(queue.dequeue()).toEqual("a");
    expect(queue.dequeue()).toEqual("b");
    queue.enqueue("e");
    queue.enqueue("f");
    expect(queue.dequeue()).toEqual("c");
    expect(queue.dequeue()).toEqual("d");
    expect(queue.dequeue()).toEqual("e");
    expect(queue.dequeue()).toEqual("f");
  });
});
