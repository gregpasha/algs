function reverseString(str) {
  const arr = str.split("");
  return arr.reverse().join("");
}

module.exports = { reverseString };
