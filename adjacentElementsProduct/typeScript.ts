

export const adjacentElementsProduct = (inputArray : number[]) : number | undefined => {

    let result = 0;

    if(inputArray.length < 2) {
        return undefined
    }

    if(inputArray.length === 2) {
       return result = inputArray[0] * inputArray[1]
    }

    if (inputArray.length > 2) {
        result = inputArray[0] * inputArray[1]

        for(let i = 1; i <= inputArray.length-1; i++) {
            let product = inputArray[i] * inputArray[i+1]
            if (product > result) {
                result = product
            }
        }

        return result;
    }

}
console.log("🚀 ~ file: typeScript.ts:29 ~ adjacentElementsProduct ~ adjacentElementsProduct:", adjacentElementsProduct([3, 6, -2, -5, 7, 3, 8]))



