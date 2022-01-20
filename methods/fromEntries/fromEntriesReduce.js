const fromEntriesReduceWithReturn = (array) =>
  array.reduce((total, currentValue) => {
    const key = [currentValue[0]];
    const value = currentValue[1];
    return {
      ...total,
      [key]: value,
    };
  }, {});

const fromEntriesReduce = (array) =>
  array.reduce(
    (total, currentValue) => ({
      ...total,
      [currentValue[0]]: currentValue[1],
    }),
    {}
  );

// version allowing to extract entries from Map()

const fromEntriesReduceWithMap = (iterable) =>
  [...iterable].reduce(
    (total, currentValue) => ({
      ...total,
      [currentValue[0]]: currentValue[1],
    }),
    {}
  );

module.exports = { fromEntriesReduce, fromEntriesReduceWithReturn, fromEntriesReduceWithMap };
