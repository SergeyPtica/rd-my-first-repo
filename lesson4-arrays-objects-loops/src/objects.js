const person = {
    name: 'Sergii',
    age: 45,
    address: {
        city: 'Kyiv',
        street: 'Zabolotnogo',
        houseNumber: 15
    },
    hobbies: ['music', 'cycling', 'coding', 'traveling'],
    showInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`City: ${this.address.city}`);
        console.log(`Hobbies: ${this.hobbies.join(', ')}`);
    }
};

// Виклик методу для виводу значень
person.showInfo();
