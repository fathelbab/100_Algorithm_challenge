const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const findSum = (numbersArray, numberOfElements) => {
  let tempNumber = 0;
  for (
    let initialNumber = 0;
    initialNumber < numberOfElements;
    initialNumber++
  ) {
    tempNumber = tempNumber + numbersArray[initialNumber];
  }

  return tempNumber;
};

console.log(findSum(numbersArray, 9));
