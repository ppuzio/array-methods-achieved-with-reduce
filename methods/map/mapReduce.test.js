const { mapReduce } = require('./mapReduce');

describe('Testing mapReduce', () => {
  test('Should multiply each element by 2 and work the same way as native Array.map', () => {
    // arrange
    const mappingFunction = (el) => el * 2;
    const inputData = [-2, -1, 0, 1, 2];
    const expectedOutput = [-4, -2, 0, 2, 4];

    // act
    const nativeResult = inputData.map(mappingFunction);
    const customResult = mapReduce(inputData, mappingFunction);

    // assert
    expect(customResult).toEqual(expectedOutput);
    expect(customResult).toEqual(nativeResult);
  });
});
