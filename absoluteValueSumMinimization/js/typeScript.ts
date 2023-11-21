
export function absoluteValuesSumMinimization(a: number[]): number {
    const isEven = a.length % 2 === 0;
    const result = isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
    return result;
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 3, 4, 7]));

