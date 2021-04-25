const queue = createQueue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
const item = queue.dequeue();
console.log(item);
console.log(queue.getValue());

function createQueue() {
  const stackOne = createStack();
  const stackTwo = createStack();

  return {
    enqueue: (item) => {
      let stackOneLength = stackOne.getLength();
      let stackTwoLength = stackTwo.getLength();

      // move stackOne over to stackTwo in reverse order
      for (let i = 0; i < stackOneLength; i++) {
        const poppedItem = stackOne.pop();
        stackTwo.push(poppedItem);
      }

      stackOneLength = stackOne.getLength();
      stackTwoLength = stackTwo.getLength();

      // add to stackOne, putting the new item on the bottom
      stackOne.push(item);

      // move from stackTwo back to StackOne, reversing order again
      for (let i = 0; i < stackTwoLength; i++) {
        const poppedItem = stackTwo.pop();
        stackOne.push(poppedItem);
      }
    },
    dequeue: () => {
      const item = stackOne.pop();
      return item;
    },
    peek: () => {
      return stackOne.getLength() > 0 ? stackOne[0] : undefined;
    },
    getValue: () => {
      return stackOne.getValue();
    },
    empty: () => {},
  };

  function moveItems(fromStack, toStack) {
    for (let i = 0; i < fromStack.getLength; i++) {
      const poppedItem = fromStack.pop();
      toStack.push(poppedItem);
    }
  }

  function createStack() {
    let list = [];
    const stack = {
      pop: () => {
        return list.shift();
      },
      push: (item) => {
        return list.unshift(item);
      },
      getLength: () => list.length,
      getValue: () => list,
    };
    Object.defineProperty(stack, "value", { value: list, writable: false });
    return stack;
  }
}
