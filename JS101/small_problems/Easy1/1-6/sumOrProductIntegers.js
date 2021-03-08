const { METHODS } = require('http');
let rlsync = require('readline-sync');

let result;

let rangeArr = [];


let userNum = Number(rlsync.question('Please enter an integer greater than zero\n'));

while (userNum < 1) {
  userNum = Number(rlsync.question('Number must be greater than zero\n'));
}

let method = rlsync.question('Please enter "s" to compute the sum, or "p" to compute the product\n');


while (method.toLowerCase() !== 's' && method.toLowerCase() !== 'p') {
  method = rlsync.question('please enter "s" either or "p"\n');
}


for (let i = 1; i <= userNum; i++) {
  rangeArr.push(i);
}

if (userNum === 1) {
  result = null;
} else if (method.toLowerCase() === 's') {
  result = rangeArr.reduce((accum, curr) => accum + curr);
} else {
  result = rangeArr.reduce((accum, curr) => accum * curr);
}


console.log(`The ${method.toLowerCase() === 's' ? 'sum' : 'product'} of the integers between 1 and ${userNum} is ${result}`);