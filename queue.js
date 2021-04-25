const { createStack } = require("./stack");

function createQueue() {
  const stackOne = createStack();
  const stackTwo = createStack();

  return {
    enqueue: (item) => {
      // move items from stack one to two, reversing their order
      moveItems(stackOne, stackTwo);
      // add to stack one, which is now empty
      stackOne.push(item);
      // move itesm from stack one back to stack two on top of new item,
      // reversing order again back to the original
      moveItems(stackTwo, stackOne);
    },
    dequeue: () => {
      return stackOne.pop();
    },
    peek: () => {
      return stackOne.getLength() > 0 ? stackOne[0] : undefined;
    },
    getValue: () => {
      return stackOne.getValue();
    },
    empty: () => {
      stackOne.empty();
    },
  };
}

function moveItems(fromStack, toStack) {
  const fromStackLength = fromStack.getLength();
  for (let i = 0; i < fromStackLength; i++) {
    toStack.push(fromStack.pop());
  }
}

module.exports = {
  createQueue,
};
