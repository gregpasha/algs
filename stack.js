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
    peek: () => {
      return list.length > 0 ? list[list.length - 1] : undefined;
    },
    empty: () => {
      list = [];
    },
  };
  return stack;
}

module.exports = { createStack };
