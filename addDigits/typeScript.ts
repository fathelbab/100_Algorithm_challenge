export const addDigits = (digit: string): number => {
    const digitsArr = digit.split("");
    return digitsArr.reduce((a: number, b: string): number => parseInt(a.toString()) + parseInt(b), 0);

};
console.log("🚀 ~ file: index.js:7 ~ addDigits ~ addDigits:", addDigits("29"));
  