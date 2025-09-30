let a = 5;
const b = '6';
const c = 7;
const d = '7';
const d1 = 'hello';

console.log(a + b);
console.log(a + c);
console.log(a - b);
console.log(b - d);
console.log(b - d1, typeof (b - d1));
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
a += a;
console.log(a);
a -= a;
console.log(a);
a = 5;
a *= a;
console.log(a);
a /= a;
console.log(a);
a %= a;
console.log(a);
a = 5;
a **= a;
console.log(a);

const mathOp = Math.cos(0.9);
console.log(mathOp);

console.log({a: '1'} + {b: '2'}, typeof ({a: '1'} + {b: '2'}));

function sumObjects(a, b) {
    return {...a, ...b};
}

console.log(sumObjects({a: '1'}, {b: '2'}), typeof (sumObjects({a: '1'}, {b: '2'})));
