// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
// Example
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

const adjacentElementsProduct = (inputArray) => {
  if (inputArray.length < 2) {
    // Handle the case where the array has less than 2 elements.
    return undefined; // You can choose an appropriate value or throw an error.
  }

  let maxProduct = inputArray[0] * inputArray[1];

  for (let i = 1; i < inputArray.length - 1; i++) {
    console.log("---1", inputArray[i]);
    console.log("---2", inputArray[i + 1]);

    const currentProduct = inputArray[i] * inputArray[i + 1];
    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }

  return maxProduct;
};

const inputArray = [3, 6, -2, -5, 7, 3, 8];
const result = adjacentElementsProduct(inputArray);
console.log(result); // Output: 21
