// Given a sorted array of integers a, find an integer › from a such that the value of
// abs (a[0] - x) + abs(a[1] - x)
// abstalla.lenoth • 11 - y
// is the smallest possible (here abs denotes the absolute value). If there are several possible answers
// Example

// For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

const absoluteValuesSumMinimization = (a) => {
  const isEven = a.length % 2 === 0;
  const result = isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
  return result;
};

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 3, 4, 7]));
