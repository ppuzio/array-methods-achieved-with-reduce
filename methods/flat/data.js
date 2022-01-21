const arrayOfNumbers = (length) =>
  new Array(length).fill(null).map((_, i) => i + 1);

const veryLongArray = arrayOfNumbers(1500);

const nestedArrayGenerator = (array) => array.reduceRight((acc, curr) => {
  return acc.length === 0 ? [curr] : [curr, [...acc]];
}, []);

const veryLongArrayNested = nestedArrayGenerator(veryLongArray);

module.exports = { arrayOfNumbers, veryLongArray, veryLongArrayNested };
