// if (перевірка 1) {
//    дія 1
// } else if (перевірка 2) {
//     дія 2
// } else {
//     дія 3
// }
// Перевірка на повне співпадіння, типу === 'значення'

// const a = 5;
// switch (a) {
//     case 1: {
//         console.log('a === 1');
//         break;
//     }
//     case 2:
//         console.log('a === 2');
//         break;
//     case 5:
//         console.log('a === 3');
//         break;
//     default:
//         console.log('non of the conditions above');
// }

// const b = 'string';
// switch (b) {
//     case 'string':
//         console.log('b === string');
//         break;
//     case 'number':
//         console.log('b === number');
//         break;
//     default:
//         console.log('non of the conditions above');
// }

// const c = getFromSomewhere();
// switch (typeof c) {
//     case 'string':
//         console.log('c === string');
//         break;
//     case 'number':
//         console.log('c === number');
//         break;
//     default:
//         console.log('non of the conditions above');
// }

// Вхідна змінна
const day = 'Tuesday';

// Логіка на основі значення day дня тижня
switch (day) {
    case 'Monday':
        console.log('Початок робочого тижня.');
        break;
    case 'Tuesday':
        console.log('Другий день — час для продуктивності.');
        break;
    case 'Wednesday':
        console.log('Середина тижня — не здавайся!');
        break;
    case 'Thursday':
        console.log('Майже фініш — тримай темп.');
        break;
    case 'Friday':
        console.log('Останній робочий день — вперед до вихідних!');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Вихідний — час для відпочинку.');
        break;
    default:
        console.log('Невідомий день.');
}
