const { filterReduce } = require('./filterReduce');

describe('Testing filterReduce', () => {
  test('Should filter out negative values and work the same way as native Array.filter', () => {
    // arrange
    const filterFunction = (el) => el >= 0;
    const inputData = [-3, -2, 2, 3, -1, 0, 1];
    const expectedOutput = [2, 3, 0, 1];

    // act
    const nativeResult = inputData.filter(filterFunction);
    const customResult = filterReduce(inputData, filterFunction);

    // assert
    expect(customResult).toEqual(expectedOutput);
    expect(customResult).toEqual(nativeResult);
  });
});
