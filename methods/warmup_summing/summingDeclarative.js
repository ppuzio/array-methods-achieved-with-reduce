const sumReducer = (total, currentValue) => {
  return total + currentValue;
};

const summingDeclarative = (array) => {
  return array.reduce(sumReducer, 0);
};

const sumReducerWithLogger = (total, currentValue, currentIndex) => {
  console.log('Current step: ', currentIndex + 1);
  console.log('Total value: ', total);
  console.log('Current value: ', currentValue);
  console.log('----------------');
  return total + currentValue;
};
