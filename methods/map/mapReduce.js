export const mapReduce = (arr, callback) =>
  arr.reduce((total, currentValue) => total.concat(callback(currentValue)), []);
