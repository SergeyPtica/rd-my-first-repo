//  Числова змінна
const number = 10;

//  Рядкова змінна
const text = '10';

//  Булева змінна
const isActive = true;

//  Порівняння однакових типів
console.log('number === 10:', number === 10); // true
console.log('text === \'10\':', text === '10'); // true

// Порівняння різних типів
console.log('number == text:', number == text);   // true (нестроге порівняння)
console.log('number === text:', number === text); // false (строге порівняння)

// Логічні оператори
console.log('isActive && number > 5:', isActive && number > 5); // true
console.log('isActive || number < 5:', isActive || number < 5); // true
console.log('!isActive:', !isActive); // false

// Комбіновані умови
console.log('(number > 5 && text === \'10\'):', number > 5 && text === '10'); // true
console.log('(number < 5 || isActive === false):', number < 5 || isActive === false); // false

// Порівняння булевого з числом
console.log('isActive == 1:', isActive == 1); // true
console.log('isActive === 1:', isActive === 1); // false

// Порівняння рядка з булевим
console.log('text == true:', text == true); // false
