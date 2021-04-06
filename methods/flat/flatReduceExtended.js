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
    flat = flat.reduce((total, amount) => total.concat(amount), []);
    iterationsLeft--;
  } while (iterationsLeft >= 1);

  return flat;
};

const flatReduceFinal = (array, times) => {
  const timesUndefinedOrGreatherThan0 = times === undefined || times > 0;
  if (!timesUndefinedOrGreatherThan0) {
    // only valid options are undefined or numbers greather or equal to 0.
    // Since for 0 we return the input array, we can treat it as a value that doesn't fill the requirement.
    return array;
  }

  let iterationsLeft = times;
  let flat = array;
  let loops = 0;
  // we collect the amount of times the loop was executed to know how long we've been iterating
  // with almost any case our output array after flattening it e.g. 10 times should have a length that is at least 10
  // which means that if our array has a length that is smaller than the amount of loops, we don't have to flatten it anymore
  do {
    flat = flat.reduce((total, amount) => total.concat(amount), []);
    iterationsLeft--;
    loops++;
  } while (iterationsLeft >= 1 && flat.length > loops);

  return flat;
};

module.exports = { flatReduceExtended, flatReduceFinal };
