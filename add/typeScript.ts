//function to add elements of array

export const addNumbersOfAnArray = (array: number[]): number => {
    return array.reduce((a, b) => a + b);
  };
  
  console.log(
    "🚀 ~ file: index.js:4 ~ addNumbersOfAnArray ~ addNumbersOfAnArray:",
    addNumbersOfAnArray([1, 2, 3])
  );
  