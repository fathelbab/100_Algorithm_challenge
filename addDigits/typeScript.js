"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDigits = void 0;
var addDigits = function (digit) {
    var digitsArr = digit.split("");
    console.log("🚀 ~ file: index.js:3 ~ addDigits ~ digitsArr:", digitsArr);
    return digitsArr.reduce(function (a, b) { return parseInt(a.toString()) + parseInt(b); }, 0);
};
exports.addDigits = addDigits;
console.log("🚀 ~ file: index.js:7 ~ addDigits ~ addDigits:", (0, exports.addDigits)("29"));
