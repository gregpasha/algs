function createStack() {
  let list = [];
  const stack = {
    push: (item) => {
      // unshift adds to the front of an array
      return list.unshift(item);
    },
    pop: () => {
      // shift removes from the front of an array
      return list.shift();
    },
    getLength: () => list.length,
    getValue: () => list,
    empty: () => {
      list = [];
    },
  };
  Object.defineProperty(stack, "value", { value: list, writable: false });
  return stack;
}

module.exports = { createStack };
