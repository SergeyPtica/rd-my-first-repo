let a = 2;
let b = '2';
let c = true;

console.log(a == b); // a === Number(b)
console.log(a == c);
console.log(a != b);
console.log(a != c);
console.log('---- з приведенням типів ----');
console.log(a === b);
console.log(a === c);
console.log(a !== b);
console.log(a !== c);

a = 2;
b = '3';
c = false;

console.log('---- порівнянняз приведенням типів ----');
console.log(a > b);
console.log(a > c);
console.log(a < b);
console.log(a < c);
console.log(a >= b);
console.log(a >= c);
console.log(a <= b);
console.log(a <= c);

console.log('---- порівняння рядків ----');
a = 'str1';
b = 'str2';

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
