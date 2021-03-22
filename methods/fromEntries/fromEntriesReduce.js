// TODO - solve the Map problem

const fromEntriesReduce = (array) =>
  array.reduce(
    (total, currentValue) => ({
      ...total,
      [currentValue[0]]: currentValue[1],
    }),
    {}
  );

module.exports = { fromEntriesReduce };
