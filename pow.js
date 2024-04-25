function pow(x, y) {
    let result = 1;
    let exponent = Math.abs(y); // Беремо абсолютне значення степеня
    for (let i = 0; i < exponent; i++) {
        result *= x;
    }
    if (y < 0) {
        return 1 / result; // Якщо степінь від'ємна, повертаємо зворотнє значення
    } else {
        return result;
    }
}

// Приклад використання
console.log(pow(2, 4)); // Виведе: 16
console.log(pow(2, -3)); // Виведе: 1\8 = 0.125
// Перевірка
console.log(2**4); // Виведе: 16
console.log(2**-3); // Виведе: 1\8 = 0.125