const checkProbabilityTheory = (count) => {
    // Генеруємо випадкові числа в діапазоні від 100 до 1000
    const randomNumbers = Array.from({ length: count }, () => {
        const num = Math.floor(Math.random() * 901) + 100;
        //console.log("Згенероване число:", num);
        return num;
    });
    
    // Підрахунок парних та непарних чисел
    const evenCount = randomNumbers.filter(num => num % 2 === 0).length;
    const oddCount = count - evenCount;

    // Обчислення відсоткового співвідношення
    const evenPercentage = (evenCount / count) * 100;
    const oddPercentage = 100 - evenPercentage;

    // Виведення інформації
    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)} : ${oddPercentage.toFixed(2)}`);
}

// Приклад використання
checkProbabilityTheory(1);
