const CURRENCY = "грн";

class Services {
    constructor() {
        // Використовуємо Map для зберігання послуг та їх цін
        this.services = new Map([
            ["стрижка", 60],
            ["гоління", 80],
            ["Миття голови", 100]
        ]);
    }

    addService(serviceName, price) {
        // Перевіряємо, чи ще не існує такої послуги
        if (!this.services.has(serviceName)) {
            this.services.set(serviceName, price);
        } else {
            console.log("Service already exists");
        }
    }

    removeService(serviceName) {
        // Видаляємо послугу за її назвою
        if (this.services.has(serviceName)) {
            this.services.delete(serviceName);
        } else {
            console.log("Service not found");
        }
    }

    price() {
        // Обчислюємо загальну вартість послуг
        const total = Array.from(this.services.values()).reduce((acc, cur) => acc + cur, 0);
        return total;
    }

    minPrice() {
        // Знаходимо мінімальну ціну послуги
        const prices = Array.from(this.services.values());
        return Math.min(...prices);
    }

    maxPrice() {
        // Знаходимо максимальну ціну послуги
        const prices = Array.from(this.services.values());
        return Math.max(...prices);
    }
}

// Testing the functionality
const servicesObj = new Services();

// Додаємо нові послуги та тестуємо видалення
servicesObj.addService("Массаж", 350);
servicesObj.addService("Педикюр1", 120);
servicesObj.addService("Бізнес ланч", 200);
servicesObj.removeService("гоління"); // Приклад видалення послуги

// Виводимо результати
console.log(`Total cost of services: ${servicesObj.price()} ${CURRENCY}`);
console.log(`Minimum service cost: ${servicesObj.minPrice()} ${CURRENCY}`);
console.log(`Maximum service cost: ${servicesObj.maxPrice()} ${CURRENCY}`);
