const { fromEntriesReduce } = require('./fromEntriesReduce');

describe('Testing fromEntriesReduce', () => {
  test('Should work the same way as native Array.fromEntries', () => {
    // arrange
    const inputData = [['0', 'a'], ['1', 'b'], ['2', 'c']];
    const expectedOutput = { 0: "a", 1: "b", 2: "c" };

    // act
    const nativeResult = Object.fromEntries(inputData);
    const customResult = fromEntriesReduce(inputData);

    // assert
    expect(customResult).toEqual(expectedOutput);
    expect(customResult).toEqual(nativeResult);
  });
});
