let rlsync = require('readline-sync');

let num1 = rlsync.question('Enter the 1st number\n');
let num2 = rlsync.question('Enter the 2nd number\n');
let num3 = rlsync.question('Enter the 3rd number\n');
let num4 = rlsync.question('Enter the 4th number\n');
let num5 = rlsync.question('Enter the 5th number\n');
let lastNum = rlsync.question('Enter the last number\n');

let numArray = [num1, num2, num3, num4, num5];

let flag = false;

if (numArray.filter(elem => elem > lastNum).length !== 0) {
  console.log(`There is a number larger than  ${lastNum}  in ${numArray}.`);
} else {
  console.log(`There is no number larger than ${lastNum} in ${numArray}.`);
}


//my implementaion of the arr.some method:

/*
function isIncluded(arr, val) {
  return arr.some(elem => elem > val);
 }
*/