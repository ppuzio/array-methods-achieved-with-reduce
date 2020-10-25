export const filterReduce = (array, callback) =>
  array.reduce(
    (total, currentValue) =>
      callback(currentValue) ? total.concat(currentValue) : total,
    [],
  );
