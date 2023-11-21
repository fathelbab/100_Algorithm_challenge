//function to add elements of array

const addNumbersOfAnArray = (array) => {
  return array.reduce((a, b) => a + b);
};

console.log(
  "🚀 ~ file: index.js:4 ~ addNumbersOfAnArray ~ addNumbersOfAnArray:",
  addNumbersOfAnArray([1, 2, 3])
);
