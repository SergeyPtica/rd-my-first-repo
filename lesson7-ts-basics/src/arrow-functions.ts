const arrowSumArray = <T extends number | string>(arr: T[]): number =>
    arr.reduce((sum: number, item: T) => sum + Number(item), 0);

const numbersArray1: number[] = [1, 2, 3, 4, 5];
const stringsArray2: string[] = ['10', '20', '30'];

console.log(arrowSumArray(numbersArray1)); // 15
console.log(arrowSumArray(stringsArray2)); // 60
