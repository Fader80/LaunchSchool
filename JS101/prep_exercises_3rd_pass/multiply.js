let rlSync = require('readline-sync');

let firstNum = Number(rlSync.question('Please enter the first number\n'));

let secondNum = Number(rlSync.question('Please enter the second number\n'));


function multiply(num1, num2) {
    let result = num1 * num2;

console.log(`${num1} * ${num2} = ${result}`);

}

multiply(firstNum, secondNum);