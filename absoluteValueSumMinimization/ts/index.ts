//example
// For a = [2, 4, 7] the output should be absoluteValuesSumMinimization(a) = 4.
// For a = [2, 4, 7, 6] the output should be absoluteValuesSumMinimization(a) = 4.

let theSolution = (inputArray: number[]): number => {
  const isEven: boolean = inputArray.length % 2 === 0 ? true : false;
  return isEven && inputArray.length
    ? +inputArray.length / 2 - 1
    : Math.floor(+inputArray.length);
};
console.log(theSolution([2, 4, 7]));
