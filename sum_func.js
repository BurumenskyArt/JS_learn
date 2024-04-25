function sumNumbersNotMultipleOfThree() {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            total += i;
        }
    }
    return total;
}

const result = sumNumbersNotMultipleOfThree();
console.log("Сума чисел від 1 до 100, які не кратні 3, дорівнює:", result);
