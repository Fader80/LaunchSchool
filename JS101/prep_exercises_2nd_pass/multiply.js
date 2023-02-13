function multiply(num1, num2) {
  return num1 * num2;
}

function getNum(prompt){
  let rlsync = require('readline-sync');
  let num = rlsync.question(prompt);
  return num;
}

let num1 = getNum("please enter the first number\n");
let num2 = getNum("please enter the second number\n");

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);



