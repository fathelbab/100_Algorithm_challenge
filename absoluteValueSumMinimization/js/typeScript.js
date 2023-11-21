"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absoluteValuesSumMinimization = void 0;
function absoluteValuesSumMinimization(a) {
    var isEven = a.length % 2 === 0;
    var result = isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
    return result;
}
exports.absoluteValuesSumMinimization = absoluteValuesSumMinimization;
console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 3, 4, 7]));
