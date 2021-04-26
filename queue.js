const { createStack } = require("./stack");

// move everything from stack1 to stack 2, add item to stack 1, move everything back
function createQueue() {
  const stackOne = createStack();
  const stackTwo = createStack();

  return {
    enqueue: (item) => {
      // move items from stack one to two, reversing their order
      moveItems(stackOne, stackTwo);
      // add to stack one, which is now empty
      stackOne.push(item);
      // move items from stack one back to stack two on top of new item,
      // reversing order again back to the original
      moveItems(stackTwo, stackOne);
    },
    dequeue: () => {
      return stackOne.pop();
    },
    peek: () => {
      return stackOne.getLength() > 0 ? stackOne[0] : undefined;
    },
    empty: () => {
      stackOne.empty();
    },
  };
}

// push on to push stack, pop from pop stack
// this is more efficient than the first version
function createQueue2() {
  const pushStack = createStack();
  const popStack = createStack();

  return {
    enqueue: (item) => {
      pushStack.push(item);
    },
    dequeue: () => {
      if (popStack.getLength() === 0) {
        moveItems(pushStack, popStack);
      }
      return popStack.pop();
    },
    peek: () => {
      return popStack.getLength() > 0
        ? popStack.getValue()[0]
        : pushStack.getLength() > 0
        ? pushStack.getValue()[pushStack.getValue().length - 1]
        : undefined;
    },
    empty: () => {},
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
  createQueue2,
};
