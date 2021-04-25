const { createStack } = require("./stack");

function createQueue() {
  const stackOne = createStack();
  const stackTwo = createStack();

  return {
    enqueue: (item) => {
      moveItems(stackOne, stackTwo);
      stackOne.push(item);
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
