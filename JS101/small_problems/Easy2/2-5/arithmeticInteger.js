let rlsync  = require('readline-sync');

let num1 = Number(rlsync.question('==> Please enter the first numner\n'));

let num2 = Number(rlsync.question('==> Please enter the second number\n'));

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);

console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);

console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);

console.log(`==> ${num1} / ${num2} = ${Math.round(num1 / num2)}`);

console.log(`==> ${num1} % ${num2} = ${num1 % num2}`);

console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);

