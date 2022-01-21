const { flatReduceExtended, flatReduceFinal } = require('./flatReduceExtended');
const {
  arrayOfNumbers,
  veryLongArray,
  veryLongArrayNested,
} = require('./data');

const nestedArray = [1, [2, [3, [4], 5], 6], 7];
const nestedArrayFlattenedByOne = [1, 2, [3, [4], 5], 6, 7];
const nestedArrayFlattenedByTwo = [1, 2, 3, [4], 5, 6, 7];
const nestedArrayFlattenedByThree = arrayOfNumbers(7);

const nestedArrayWave = [1, [2, [3, 4, [5], 6]], 7, [8, [9, [10]]]];
const nestedArrayWaveFlattenedByOne = [1, 2, [3, 4, [5], 6], 7, 8, [9, [10]]];
const nestedArrayWaveFlattenedByTwo = [1, 2, 3, 4, [5], 6, 7, 8, 9, [10]];
const nestedArrayWaveFlattenedByThree = arrayOfNumbers(10);

const cases = [
  // falsy values that return the original array
  [nestedArray, '', nestedArray],
  [nestedArray, false, nestedArray],
  [nestedArray, null, nestedArray],
  [nestedArray, 0, nestedArray],
  [nestedArray, NaN, nestedArray],
  [nestedArray, Number.NaN, nestedArray],
  [nestedArray, -0, nestedArray],

  // non-falsy values that return the original array
  [nestedArray, {}, nestedArray],
  [nestedArray, 'test', nestedArray],
  [nestedArray, [], nestedArray],
  [nestedArray, -1, nestedArray],

  // non-falsy values that return a modified array
  [nestedArray, undefined, nestedArrayFlattenedByOne],
  [nestedArray, 1, nestedArrayFlattenedByOne],
  [nestedArray, 2, nestedArrayFlattenedByTwo],
  [nestedArray, 3, nestedArrayFlattenedByThree],
  [nestedArray, 10000, nestedArrayFlattenedByThree],

  // test for an array that is not so regular with the way it's nested
  [nestedArrayWave, 1, nestedArrayWaveFlattenedByOne],
  [nestedArrayWave, 2, nestedArrayWaveFlattenedByTwo],
  [nestedArrayWave, 3, nestedArrayWaveFlattenedByThree],
];

const casesWithPossibleLoops = [
  ...cases,
  [veryLongArrayNested, new Date, veryLongArray],
  [veryLongArrayNested, new Date(), veryLongArray],
  [veryLongArrayNested, Number.POSITIVE_INFINITY, veryLongArray],
];

describe('flatReduce tests', () => {
  test.each(cases)(
    'Should flatten %p by %p and return %p in both native and custom function',
    (entryArray, flatParam, resultArray) => {
      const nativeResult = entryArray.flat(flatParam);
      const customResult = flatReduceExtended(entryArray, flatParam);

      expect(nativeResult).toEqual(resultArray);
      expect(customResult).toEqual(resultArray);
    }
  );
});

describe('flatReduceFinal including possible loops', () => {
  test.each(casesWithPossibleLoops)(
    'Should flatten %p by %p and return %p in both native and custom function',
    (entryArray, flatParam, resultArray) => {
      const nativeResult = entryArray.flat(flatParam);
      const customResult = flatReduceFinal(entryArray, flatParam);

      expect(nativeResult).toEqual(resultArray);
      expect(customResult).toEqual(resultArray);
    }
  );
});