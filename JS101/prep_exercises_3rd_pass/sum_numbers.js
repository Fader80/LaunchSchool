let rlSync = require('readline-sync');

let num1 = Number(rlSync.question('Please enter the first number\n'));
let num2 = Number(rlSync.question('Please enter the second number\n'));

let sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);