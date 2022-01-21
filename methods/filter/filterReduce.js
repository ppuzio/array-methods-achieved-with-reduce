const filterReduce = (array, callback) =>
  array.reduce(
    (accumulator, currentValue) =>
      callback(currentValue) ? accumulator.concat(currentValue) : accumulator,
    []
  );

module.exports = { filterReduce };
