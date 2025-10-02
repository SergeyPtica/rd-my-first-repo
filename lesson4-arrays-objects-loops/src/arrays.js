// Масиви рядків, чисел, булевих значень та будь-яких типів

const moreStrings = ['груша', 'слива', 'апельсин'];
moreStrings.forEach((item, index) => {
    console.log(`Новий рядок #${index}: ${item}`);
});
const moreStringsUpper = moreStrings.map(item => item.toUpperCase());
console.log('Нові рядки у верхньому регістрі:', moreStringsUpper);

const moreNumbers = [5, 15, 25, 35];
moreNumbers.forEach((num, index) => {
    console.log(`Нове число #${index}: ${num}`);
});
const moreNumbersDoubled = moreNumbers.map(num => num * 2);
console.log('Нові подвоєні числа:', moreNumbersDoubled);

const moreBooleans = [false, true, false, true];
moreBooleans.forEach((bool, index) => {
    console.log(`Нове булеве значення #${index}: ${bool}`);
});
const moreBooleansInverted = moreBooleans.map(bool => !bool);
console.log('Інверсія нових булевих значень:', moreBooleansInverted);

const moreAny = [false, 'рядок', 42, undefined];
moreAny.forEach((value, index) => {
    console.log(`Новий елемент #${index}:`, value);
});
const moreAnyTypes = moreAny.map(value => typeof value);
console.log('Типи нових елементів:', moreAnyTypes);

// filter(callback)
const filteredNumbers = moreNumbers.filter(num => num > 10);
console.log('Числа більше 10 (filter):', filteredNumbers);

// find(callback)
const firstBigNumber = moreNumbers.find(num => num > 20);
console.log('Перше число більше 20 (find):', firstBigNumber);

// sort(callback)
const unsortedNumbers = [15, 3, 27, 8];
const sortedNumbers = unsortedNumbers.slice().sort((a, b) => a - b);
console.log('Відсортовані числа (sort):', sortedNumbers);

// concat(arr)
const allStrings = moreStrings.concat(['банан', 'ківі']);
console.log('Обʼєднані рядки (concat):', allStrings);

// includes(element)
const hasPlum = moreStrings.includes('слива');
console.log('Містить "слива" (includes):', hasPlum);

// join(separator)
const joinedStrings = moreStrings.join(', ');
console.log('Рядки, обʼєднані через кому (join):', joinedStrings);

// --- Додаткові приклади ---

// [...arr1, ...arr2] — обʼєднання масивів (spread operator)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log('Обʼєднання масивів через spread:', merged);

// forEach(callback) — перебір масиву, повертає void
const fruits = ['яблуко', 'груша', 'слива'];
fruits.forEach((fruit, i) => {
    console.log(`Фрукт #${i}: ${fruit}`);
});
// forEach нічого не повертає:
const forEachResult = fruits.forEach(fruit => fruit.toUpperCase());
console.log('Результат forEach (має бути undefined):', forEachResult);

// map(callback) — перебір масиву, повертає масив результату
const fruitsUpper = fruits.map(fruit => fruit.toUpperCase());
console.log('Результат map (upper case):', fruitsUpper);
