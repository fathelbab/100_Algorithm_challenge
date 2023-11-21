// Given an array of strings, return another array containing all of its longest strings.
// Example
// For inputArray = ['aba", "aa", "ad", "ved", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

const findLargestString = (stringArr) => {
  let result = [];
  let wordCount = 0;
  if (stringArr === NaN || stringArr === undefined || stringArr.length === 0) {
    return undefined;
  }
  if (stringArr.length === 1) {
    result.push(stringArr[0]);
    return result;
  }
  if (stringArr.length > 1) {
    for (let i = 0; i <= stringArr.length; i++) {
      if (stringArr[i] && stringArr[i].length > wordCount) {
        wordCount = stringArr[i].length;
        result = [stringArr[i]];
      } else if (stringArr[i] && stringArr[i].length === wordCount) {
        result.push(stringArr[i]);
      }
    }
    return result;
  }
};
console.log(
  "🚀 ~ file: index.js:27 ~ findLargestString ~ findLargestString:",
  findLargestString(["aba", "aa", "ad", "ved", "aba"])
);
