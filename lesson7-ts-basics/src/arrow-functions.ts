const arrowSumArray = <T extends number | string>(arr: T[]): number =>
    arr.reduce((sum: number, item: T) => sum + Number(item), 0);

const numbersArray1: number[] = [1, 2, 3, 4, 5];
const stringsArray2: string[] = ['10', '20', '30'];

console.log(arrowSumArray(numbersArray1)); // 15
console.log(arrowSumArray(stringsArray2)); // 60

// Safe arrow variant: ignore non-numeric values when summing
const arrowSumArrayIgnoreInvalid = <T extends number | string>(arr: T[]): number =>
    arr.reduce((sum: number, item: T) => {
        const n = Number(item);
        return sum + (Number.isFinite(n) ? n : 0);
    }, 0);

console.log(arrowSumArrayIgnoreInvalid(['10', '20', '30', 'forty'])); // 60 (ignores 'forty')
