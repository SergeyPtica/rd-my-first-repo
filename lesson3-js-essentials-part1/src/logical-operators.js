const a = 3;
const b = '5';
const d = undefined;

// logical AND
// true && true = true
// true && false = false
console.log(a > b && b >= 5);
console.log(a < b && b >= 5);

// logical OR
// true || true = true
// true || false = false
console.log(a > b || b >= 5);
console.log(a < b || b >= 5);
console.log(a > b || b < 5);
console.log((a > b || b < 5) && true);

// logical NOT
// !true = false
// !false = true
console.log(!(a > b));
console.log(!(a < b));

const c = d ?? 'інше значення';
console.log(c);
