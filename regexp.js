function generateRandomText(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}


const string = generateRandomText(100);
console.log(string)

const regex = /(?:.*[aA]){6}/;

if (regex.test(string)) {
    console.log("У тексті є 6 літер 'а' або 'А'");
} else {
    console.log("У тексті немає 6 літер 'а' або 'А'");
}


//check count of aA in string 
const count = (string.match(/a|A/g) || []).length;
console.log("Кількість літер 'а' або 'А' в рядку:", count);

