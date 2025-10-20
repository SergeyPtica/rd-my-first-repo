"use strict";
function sumArray(arr) {
    return arr.reduce(function (sum, item) {
        return sum + Number(item);
    }, 0);
}
const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ['10', '20', '30'];
console.log(sumArray(numbersArray)); // 15
console.log(sumArray(stringsArray)); // 60
// Safe variant: ignore non-numeric values when summing
function sumArrayIgnoreInvalid(arr) {
    return arr.reduce(function (sum, item) {
        const n = Number(item);
        return sum + (Number.isFinite(n) ? n : 0);
    }, 0);
}
console.log(sumArrayIgnoreInvalid(['10', '20', '30', 'forty'])); // 60 (ignores 'forty')
