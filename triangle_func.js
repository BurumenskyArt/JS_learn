function drawTriangle(height, symbol, direction) {
    if (direction === 1) {
        for (let i = 1; i <= height; i++) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += symbol;
            }
            console.log(row);
        }
    } else if (direction === -1) {
        for (let i = height; i >= 1; i--) {
            let row = '';
            for (let j = 1; j <= i; j++) {
                row += symbol;
            }
            console.log(row);
        }
    } else if (direction === 0) { // Додавши цю умову для дзеркального відображення
        for (let i = 1; i <= height; i++) {
            let row = '';
            for (let j = height; j >= i; j--) { // Пробіг рядків у зворотньому порядку
                row += ' ';
            }
            for (let k = 1; k <= i; k++) {
                row += symbol;
            }
            console.log(row);
        }
    } else {
        console.log("Неправильне значення напряму");
    }
}

// Приклад виклику функції:
drawTriangle(5, '*', 1); // Зростаючий трикутник
console.log("--------");
drawTriangle(5, '*', -1); // Спадаючий трикутник
console.log("--------");
drawTriangle(5, '*', 0); // Трикутник відображений дзеркально відносно горизонтальної осі
drawTriangle(5, '*', -1); // Трикутник відображений дзеркально відносно горизонтальної осі