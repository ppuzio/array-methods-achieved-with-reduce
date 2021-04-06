const arrayOfNumbers = (length) =>
  new Array(length).fill(null).map((_, i) => i + 1);

const veryLongArray = arrayOfNumbers(1500);
const veryLongArrayNested = veryLongArray.reduceRight((acc, curr) => {
  return Array.isArray(acc) && acc.length === 0 ? [curr] : [curr, [...acc]];
}, []);

module.exports = { arrayOfNumbers, veryLongArray, veryLongArrayNested };
