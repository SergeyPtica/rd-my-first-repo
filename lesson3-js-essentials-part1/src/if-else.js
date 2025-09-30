const a = 1;
const b = 2;
const c = '6';

if (a > b) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}

if (a > b && c == 6) {
    console.log('a > b && c == 6');
} else if (a < b && c == 6) {
    console.log('a < b && c == 6');
}

if (a > b || c == 6) {
    console.log('a > b || c == 6');
} else if (a < b && typeof c == 'number') {
    console.log('a < b && typeof c == string');
} else {
    console.log('non of the conditions above');
}

console.log('---- виконання конструкції ----');
if (a < b) {
    console.log('виконання першого true виразу');
} else if (typeof a === 'number') {
    console.log('виконання другого true виразу');
} else {
    console.log('виконання дефолтної логіки з else');
}
// продовження коду

if (a)
    console.log (a, 'a is true');

console.log('скорочений запис if-else');
const d = typeof c === 'number' ? c : Number(c);
console.log(d, typeof d);
