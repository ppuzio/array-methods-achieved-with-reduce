export const flatReduceExtended = (array, times) => {
  const timesFalsyButNotUndefined = times !== undefined;
  const timeTruthyButNotANumber = !times || isNaN(times);
  if (timesFalsyButNotUndefined && timeTruthyButNotANumber) return data;

  let iterationsLeft = times;
  let flat = array;
  do {
    flat = flat.reduce(reducerFunction, []);
    iterationsLeft--;
  } while (iterationsLeft >= 1);

  return flat;
};

const reducerFunction = (total, amount) => total.concat(amount);
