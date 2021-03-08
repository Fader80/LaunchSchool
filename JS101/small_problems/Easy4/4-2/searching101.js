let rlsync = require('readline-sync');

let num1 = rlsync.question('Enter the 1st number\n');
let num2 = rlsync.question('Enter the 2nd number\n');
let num3 = rlsync.question('Enter the 3rd number\n');
let num4 = rlsync.question('Enter the 4th number\n');
let num5 = rlsync.question('Enter the 5th number\n');
let lastNum = rlsync.question('Enter the last number\n');

let numArray = [num1, num2, num3, num4, num5];

if (numArray.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numArray}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numArray}.`);
}
