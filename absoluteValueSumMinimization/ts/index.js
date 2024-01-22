//example
// For a = [2, 4, 7] the output should be absoluteValuesSumMinimization(a) = 4.
// For a = [2, 4, 7, 6] the output should be absoluteValuesSumMinimization(a) = 4.
var theSolution = function (inputArray) {
  var isEven = inputArray.length % 2 === 0 ? true : false;
  return isEven && inputArray.length
    ? inputArray[+inputArray.length / 2 - 1]
    : inputArray[Math.floor(+inputArray.length / 2)];
};
console.log(theSolution([2, 4, 7, 7]));
