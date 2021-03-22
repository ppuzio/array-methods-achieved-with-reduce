const { flatReduceExtended } = require('./flatReduceExtended');

const nestedArray = [1, [2, [3, [4], 5], 6], 7];
const nestedArrayFlattenedByOne = [1, 2, [3, [4], 5], 6, 7];
const nestedArrayFlattenedByTwo = [1, 2, 3, [4], 5, 6, 7];
const nestedArrayFlattenedByThree = [1, 2, 3, 4, 5, 6, 7];

const cases = [
  [nestedArray, '', nestedArray],
  [nestedArray, false, nestedArray],
  [nestedArray, {}, nestedArray],
  [nestedArray, [], nestedArray],
  [nestedArray, 'test', nestedArray],
  [nestedArray, null, nestedArray],
  [nestedArray, 0, nestedArray],

  [nestedArray, undefined, nestedArrayFlattenedByOne],
  [nestedArray, 1, nestedArrayFlattenedByOne],
  [nestedArray, 2, nestedArrayFlattenedByTwo],
  [nestedArray, 3, nestedArrayFlattenedByThree],
  [nestedArray, 10000, nestedArrayFlattenedByThree],
];

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
});
