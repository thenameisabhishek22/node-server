// index.js

const readline = require('readline');
const calculator = require('./calculator.js');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("What action do you want to perform?");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
console.log("5. Percentage");

rl.question('Enter your choice (1-5): ', (choice) => {
    rl.question('Enter the first number: ', (num1) => {
        rl.question('Enter the second number: ', (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);

            let result;
            switch (choice) {
                case '1':
                    result = calculator.add(a, b);
                    console.log(`Result: ${a} + ${b} = ${result}`);
                    break;
                case '2':
                    result = calculator.subtract(a, b);
                    console.log(`Result: ${a} - ${b} = ${result}`);
                    break;
                case '3':
                    result = calculator.multiply(a, b);
                    console.log(`Result: ${a} * ${b} = ${result}`);
                    break;
                case '4':
                    result = calculator.divide(a, b);
                    console.log(`Result: ${a} / ${b} = ${result}`);
                    break;
                case '5':
                    result = calculator.percentage(a, b);
                    console.log(`Result: ${a}% of ${b} = ${result}`);
                    break;
                default:
                    console.log('Invalid choice');
            }

            rl.close();
        });
    });
});
