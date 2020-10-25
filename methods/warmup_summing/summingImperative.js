export const summingImperative = (array) => {
  let tmp = 0;
  for (var i = 0; i < array.length; i++) {
    tmp = tmp + array[i];
  }
  return tmp;
};
