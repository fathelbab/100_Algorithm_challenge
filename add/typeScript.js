"use strict";
//function to add elements of array
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNumbersOfAnArray = void 0;
var addNumbersOfAnArray = function (array) {
    return array.reduce(function (a, b) { return a + b; });
};
exports.addNumbersOfAnArray = addNumbersOfAnArray;
console.log("🚀 ~ file: index.js:4 ~ addNumbersOfAnArray ~ addNumbersOfAnArray:", (0, exports.addNumbersOfAnArray)([1, 2, 3]));
