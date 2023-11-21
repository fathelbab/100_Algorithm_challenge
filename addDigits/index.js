const addDigits = (digit) => {
  const digitsArr = digit.split("");
  console.log("🚀 ~ file: index.js:3 ~ addDigits ~ digitsArr:", digitsArr);

  return digitsArr.reduce((a, b) => parseInt(a) + parseInt(b));
};
console.log("🚀 ~ file: index.js:7 ~ addDigits ~ addDigits:", addDigits("29"));
