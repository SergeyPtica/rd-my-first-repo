// Цикл від 0 до 9
for (let i = 0; i <= 9; i++) {
    console.log('Ітератор від 0 до 9:', i);
}

// Цикл від 100 до 0 з кроком 10
for (let j = 100; j >= 0; j -= 10) {
    console.log('Ітератор від 100 до 0:', j);
}

// --- Те саме через while ---
let i1 = 0;
while (i1 <= 9) {
    console.log('while: Ітератор від 0 до 9:', i1);
    i1++;
}

let j1 = 100;
while (j1 >= 0) {
    console.log('while: Ітератор від 100 до 0:', j1);
    j1 -= 10;
}

// --- Те саме через do-while ---
let i2 = 0;
do {
    console.log('do-while: Ітератор від 0 до 9:', i2);
    i2++;
} while (i2 <= 9);

let j2 = 100;
do {
    console.log('do-while: Ітератор від 100 до 0:', j2);
    j2 -= 10;
} while (j2 >= 0);
