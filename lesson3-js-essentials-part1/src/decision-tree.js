// Вхідні дані для прикладів
const age = 25;
const isStudent = true;
const country = 'Germany';

// Просте розгалуження з if
if (age >= 18) {
    console.log('Користувач повнолітній.');
}

//  Розгалуження з if-else if-else
if (age < 18) {
    console.log('Користувач неповнолітній.');
} else if (age >= 18 && age <= 65) {
    console.log('Користувач працездатного віку.');
} else {
    console.log('Користувач пенсійного віку.');
}

// Комбіновані умови з логічними операторами
if (isStudent && age < 30) {
    console.log('Користувач — молодий студент.');
}

if (country === 'Germany' || country === 'Austria') {
    console.log('Користувач з німецькомовної країни.');
}

if (!(age < 18)) {
    console.log('Умова: не неповнолітній — виконується.');
}
