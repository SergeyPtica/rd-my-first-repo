// Arrow function
const arrowSumArray = (arr) => arr.reduce((sum, item) => sum + Number(item), 0);

const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ['10', '20', '30'];

console.log(arrowSumArray(numbersArray));   // Виведе: 15
console.log(arrowSumArray(stringsArray));   // Виведе: 60
