function sumArray(arr: number[]): number;
function sumArray(arr: string[]): number;
function sumArray(arr: (number | string)[]): number {
    return arr.reduce(function (sum: number, item: number | string) {
        return sum + Number(item);
    }, 0);
}

const numbersArray: number[] = [1, 2, 3, 4, 5];
const stringsArray: string[] = ['10', '20', '30'];

console.log(sumArray(numbersArray)); // 15
console.log(sumArray(stringsArray)); // 60
