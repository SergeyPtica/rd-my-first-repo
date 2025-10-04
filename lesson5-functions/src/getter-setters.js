// Приклад об'єкта з мінімум двома рівнями вкладеності, гетерами, сетерами та методом-маніпулятором

const profile = {
    // Перший рівень
    _name: 'Sergii',
    _age: 34,
    address: {
    // Другий рівень (вкладений об'єкт)
        _street: 'Hauptstrasse',
        _city: 'Mönchengladbach',
        _zip: '41061',

        // Гетер для читання повної адреси
        get full() {
            return `${this._street}, ${this._city} ${this._zip}`;
        },

        // Сетер для розбору рядка адреси типу "Street, City ZIP"
        set full(value) {
            // Проста обробка рядка;
            const parts = value.split(',');
            const street = parts[0] ? parts[0].trim() : '';
            const rest = parts[1] ? parts[1].trim().split(' ') : [];
            const city = rest.slice(0, -1).join(' ') || '';
            const zip = rest.slice(-1)[0] || '';
            this._street = street || this._street;
            this._city = city || this._city;
            this._zip = zip || this._zip;
        },

        // Метод-валідація: перевіряє, чи повна адреса задана
        isComplete() {
            return Boolean(this._street && this._city && this._zip);
        }
    },

    // Гетер для імені (приклад трансформації: повертає ім'я у форматі "Lastname, Firstname" якщо є пробіл)
    get name() {
        return this._name;
    },

    // Сетер для імені (може встановити ім'я у форматі "First Last" або просто рядок)
    set name(value) {
        this._name = String(value).trim();
    },

    // Гетер для віку з додатковою логікою (неповні дані -> null)
    get age() {
        const a = Number(this._age);
        return Number.isFinite(a) && a > 0 ? a : null;
    },

    // Сетер для віку з обмеженням (ціле число між 0 і 120)
    set age(value) {
        const n = Number(value);
        if (!Number.isFinite(n)) return;
        const rounded = Math.round(n);
        if (rounded >= 0 && rounded <= 120) this._age = rounded;
    },

    // Метод-маніпулятор: повертає коротке резюме профіля
    summary() {
        const name = this.name || 'Невідомо';
        const age = this.age !== null ? `${this.age} р.` : 'невідомо';
        const addr = this.address.full || 'не вказано';
        const addressComplete = this.address.isComplete() ? 'так' : 'ні';
        return `Ім'я: ${name}; Вік: ${age}; Адреса: ${addr}; Адреса повна: ${addressComplete}.`;
    },

    // Метод оновлення кількох полів через об'єкт налаштувань
    update(fields = {}) {
        if ('name' in fields) this.name = fields.name;
        if ('age' in fields) this.age = fields.age;
        if ('address' in fields) {
            // Якщо передано рядок — використаємо сеттер address.full
            if (typeof fields.address === 'string') {
                this.address.full = fields.address;
            } else if (typeof fields.address === 'object' && fields.address !== null) {
                if ('street' in fields.address) this.address._street = fields.address.street;
                if ('city' in fields.address) this.address._city = fields.address.city;
                if ('zip' in fields.address) this.address._zip = fields.address.zip;
            }
        }
        return this.summary();
    }
};

// Приклади використання
console.log(profile.summary()); // початкове резюме

profile.name = 'Ivan Petrenko';
profile.age = 29;
profile.address.full = 'Lindenstrasse 12, Mönchengladbach 41061';

console.log(profile.summary()); // після оновлення

// Оновлення через об'єкт
console.log(profile.update({
    name: 'Olena Ivanova',
    age: 31,
    address: { street: 'Marktplatz 5', city: 'Mönchengladbach', zip: '41061' }
}));

// Демонстрація гетерів і сеттерів другого рівня
console.log('Address full getter:', profile.address.full);
profile.address.full = 'Neue Strasse 7, Köln 50667';
console.log('Address after setter:', profile.address.full);
