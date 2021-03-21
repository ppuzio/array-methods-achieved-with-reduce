const flatReduceExtended = (array, times) => {
  const timesFalsyButNotUndefined = times !== undefined;
  const timeTruthyButNotANumber = !times || isNaN(times) || Array.isArray(times) && times.length === 0;
  if (timesFalsyButNotUndefined && timeTruthyButNotANumber) return array;

  let iterationsLeft = times;
  let flat = array;
  do {
    flat = flat.reduce(reducerFunction, []);
    iterationsLeft--;
  } while (iterationsLeft >= 1);

  return flat;
};

const reducerFunction = (total, amount) => total.concat(amount);

module.exports = { flatReduceExtended }