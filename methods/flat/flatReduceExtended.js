const flatReduceExtended = (array, times) => {
  const timesFalsyButNotUndefined = !times && times !== undefined;

  const timesIsAnEmptyObject =
    times && times.constructor === Object && Object.keys(times).length === 0;

  const timesIsAnEmptyArray = Array.isArray(times) && times.length === 0;

  const timesIsANumberBelowZero = Number.isInteger(times) && times < 0;

  const timesIsANonEmptyString = times && times.constructor === String;

  const timeTruthyButNotANumber =
    timesIsAnEmptyObject ||
    timesIsANumberBelowZero ||
    timesIsAnEmptyArray ||
    timesIsANonEmptyString;

  if (timesFalsyButNotUndefined || timeTruthyButNotANumber) return array;

  let iterationsLeft = times;
  let flat = array;
  do {
    flat = flat.reduce(reducerFunction, []);
    iterationsLeft--;
  } while (iterationsLeft >= 1);

  return flat;
};

const flatReduceExtendedOtherApproach = (array, times) => {
  const timesUndefinedOrGreatherThan0 = times === undefined || times > 0;

  if (!timesUndefinedOrGreatherThan0) return array;

  let iterationsLeft = times;
  let flat = array;
  let loops = 0;
  do {
    flat = flat.reduce(reducerFunction, []);
    iterationsLeft--;
    loops++;
  } while (iterationsLeft >= 1 && flat.length > loops);

  return flat;
};

const reducerFunction = (total, amount) => total.concat(amount);

module.exports = { flatReduceExtended, flatReduceExtendedOtherApproach };
