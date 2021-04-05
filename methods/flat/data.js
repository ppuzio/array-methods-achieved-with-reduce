const arrayOfNumbers = new Array(1500).fill(null).map((_, i) => i + 1);

const arrayOfNumbersNested = arrayOfNumbers.reduceRight(
  (acc, curr) => {
    return Array.isArray(acc) && acc.length === 0 ? [curr] : [curr, [...acc]];
  },
  []
);

module.exports = { arrayOfNumbers, arrayOfNumbersNested };