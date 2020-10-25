export const fromEntriesReduce = (array) =>
  array.reduce(
    (total, currentValue) => ({
      ...total,
      [currentValue[0]]: currentValue[1],
    }),
    {},
  );
