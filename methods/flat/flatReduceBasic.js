const flatReduceBasic = (array, times) => {
  if (times === 0) return data;

  let iterationsLeft = times;
  let flat = array;
  do {
    flat = flat.reduce(reducerFunction, []);
    iterationsLeft--;
  } while (iterationsLeft >= 1);

  return flat;
};

const reducerFunction = (total, amount) => total.concat(amount);

module.exports = { flatReduceBasic }