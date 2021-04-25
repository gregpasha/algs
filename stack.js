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
    empty: () => {
      list = [];
    },
  };
  Object.defineProperty(stack, "value", { value: list, writable: false });
  return stack;
}

module.exports = { createStack };
