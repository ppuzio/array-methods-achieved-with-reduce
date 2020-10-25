export const summingDeclarative = (array) => {
  return array.reduce(sumReducer, 0);
};

const sumReducer = (total, currentValue) => {
  return total + currentValue;
};

const sumReducerWithLogger = (total, currentValue, currentIndex) => {
  console.log('Current step: ', currentIndex + 1);
  console.log('Total value: ', total);
  console.log('Current value: ', currentValue);
  console.log('----------------');
  console.log('Current step');
  return total + currentValue;
};
