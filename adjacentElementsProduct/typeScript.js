"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjacentElementsProduct = void 0;
var adjacentElementsProduct = function (inputArray) {
    var result = 0;
    if (inputArray.length < 2) {
        return undefined;
    }
    if (inputArray.length === 2) {
        return result = inputArray[0] * inputArray[1];
    }
    if (inputArray.length > 2) {
        result = inputArray[0] * inputArray[1];
        for (var i = 1; i <= inputArray.length - 1; i++) {
            var product = inputArray[i] * inputArray[i + 1];
            if (product > result) {
                result = product;
            }
        }
        return result;
    }
};
exports.adjacentElementsProduct = adjacentElementsProduct;
console.log("🚀 ~ file: typeScript.ts:29 ~ adjacentElementsProduct ~ adjacentElementsProduct:", (0, exports.adjacentElementsProduct)([3, 6, -2, -5, 7, 3, 8]));
