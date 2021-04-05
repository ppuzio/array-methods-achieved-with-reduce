const { flatReduceExtended, flatReduceExtendedOtherApproach } = require('./flatReduceExtended');
const { arrayOfNumbers, arrayOfNumbersNested } = require("./data");

const nestedArray = [1, [2, [3, [4], 5], 6], 7];
const nestedArrayFlattenedByOne = [1, 2, [3, [4], 5], 6, 7];
const nestedArrayFlattenedByTwo = [1, 2, 3, [4], 5, 6, 7];
const nestedArrayFlattenedByThree = [1, 2, 3, 4, 5, 6, 7];

// TODO - create a very nested array for inf/date

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
];

const casesWithPossibleLoops = [
  ...cases,
  [arrayOfNumbersNested, new Date(), arrayOfNumbers],
  [arrayOfNumbersNested, Number.POSITIVE_INFINITY, arrayOfNumbers],
]

describe('flatReduce tests including all cases', () => {
  test.each(cases)(
    'Should flatten %p by %p and return %p in both native and custom function',
    (entryArray, flatParam, resultArray) => {
      const nativeResult = entryArray.flat(flatParam);
      const customResult = flatReduceExtended(entryArray, flatParam);

      expect(nativeResult).toEqual(resultArray);
      expect(customResult).toEqual(resultArray);
    }
  );

  test.each(casesWithPossibleLoops)(
    'Should flatten %p by %p and return %p in both native and custom function',
    (entryArray, flatParam, resultArray) => {
      const nativeResult = entryArray.flat(flatParam);
      const customResult = flatReduceExtendedOtherApproach(entryArray, flatParam);

      expect(nativeResult).toEqual(resultArray);
      expect(customResult).toEqual(resultArray);
    }
  );
});
