function sumArray(arr) {
    return arr.reduce(function(sum, item) {
        return sum + Number(item);
    }, 0);
}

const numbersArray = [1, 2, 3, 4, 5];
const stringsArray = ['10', '20', '30'];

console.log(sumArray(numbersArray));   // Виведе: 15
console.log(sumArray(stringsArray));   // Виведе: 60
