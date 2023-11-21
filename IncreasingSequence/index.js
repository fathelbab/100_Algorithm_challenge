// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

const checkIncreasingSequence = (seq) => {
  let result = false;
  let tempArr = [];
  let timesRemoved = 0;

  for (let i = 0; i <= seq.length - 1; i++) {
    if (seq[i] < seq[i + 1]) {
      tempArr.push(seq[i]);
    } else if (seq[i] > seq[i + 1]) {
      timesRemoved += 1;
      if (timesRemoved > 1) {
        break;
      }
    }
  }
  if (timesRemoved <= 1) {
    result = true;
  }

  return result;
};
console.log(
  "🚀 ~ file: index.js:23 ~ checkIncreasingSequence ~ checkIncreasingSequence:",
  checkIncreasingSequence([1, 3, 2])
);
