const {
  fromEntriesReduce,
  fromEntriesReduceWithReturn,
} = require('./fromEntriesReduce');

const inputData = [
  ['0', 'a'],
  ['1', 'b'],
  ['2', 'c'],
];

const expectedOutput = { 0: 'a', 1: 'b', 2: 'c' };

describe('Testing fromEntriesReduce and fromEntriesReduceWithReturn', () => {
  test('fromEntriesReduce should work the same way as native Array.fromEntries', () => {
    // act
    const nativeResult = Object.fromEntries(inputData);
    const customResult = fromEntriesReduce(inputData);

    // assert
    expect(customResult).toEqual(expectedOutput);
    expect(customResult).toEqual(nativeResult);
  });

  test('fromEntriesReduceWithReturn should work the same way as native Array.fromEntries', () => {
    // act
    const nativeResult = Object.fromEntries(inputData);
    const customResult = fromEntriesReduceWithReturn(inputData);

    // assert
    expect(customResult).toEqual(expectedOutput);
    expect(customResult).toEqual(nativeResult);
  });
});
