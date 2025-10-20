"use strict";
const arrowSumArray = (arr) => arr.reduce((sum, item) => sum + Number(item), 0);
const numbersArray1 = [1, 2, 3, 4, 5];
const stringsArray2 = ['10', '20', '30'];
console.log(arrowSumArray(numbersArray1)); // 15
console.log(arrowSumArray(stringsArray2)); // 60
// Safe arrow variant: ignore non-numeric values when summing
const arrowSumArrayIgnoreInvalid = (arr) => arr.reduce((sum, item) => {
    const n = Number(item);
    return sum + (Number.isFinite(n) ? n : 0);
}, 0);
console.log(arrowSumArrayIgnoreInvalid(['10', '20', '30', 'forty'])); // 60 (ignores 'forty')
