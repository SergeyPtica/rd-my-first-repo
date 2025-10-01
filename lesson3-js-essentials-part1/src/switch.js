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
