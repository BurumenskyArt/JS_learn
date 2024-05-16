const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@mail.ru"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@ukr.net"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@gmail.com.gmail.com"
    },
];

const trustedDomains = ['gmail.com', 'yahoo.com','ukr.net'];

// const isValidEmail = (email) => {
//     const emailRegex = new RegExp(`^[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)*@(${trustedDomains.join('|')})$`);
//     return emailRegex.test(email);
// };

// const trustedEmails = arr.filter(obj => isValidEmail(obj.email));

// console.log(trustedEmails);




// const trustedDomains = ['gmail.com', 'yahoo.com'];

const isValidEmail = (email) => {
    const emailRegex = new RegExp(`^[a-zA-Z0-9]+(\\.[a-zA-Z0-9]+)*@(${trustedDomains.join('|')})$`);
    return emailRegex.test(email);
};

const trustedEmails = arr.filter(obj => isValidEmail(obj.email)).map(obj => obj.email);

console.log(trustedEmails);
