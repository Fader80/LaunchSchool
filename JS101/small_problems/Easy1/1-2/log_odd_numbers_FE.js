
const { readSync } = require('fs');
let rlsync = require('readline-sync');

let startNum = Math.round(Number(rlsync.question('Please enter the starting number - integers only\n')));

while (isNaN(startNum) === true) {
  startNum = Number(rlsync.question('Please enter a valid number - integers only\n'));
}


let endNum = Math.round(Number(rlsync.question('Please enter the end number\n')));

while (isNaN(endNum) === true) {
  endNum = Math.round(Number(rlsync.question('Please enter a valid number - integers only\n')));
}

while (endNum <= startNum) {
  endNum = Math.round(Number(rlsync.question('Please enter a number higher than the starting number\n')));
}


let counter = startNum;

while (counter < endNum) {
  if (counter % 2 !== 0) {
    console.log(counter);
  }
  counter += 1;
}

//below is the old solution
/*
for (let counter = 1; counter <= 99; counter += 1) {
  if (counter % 2 !== 0) {
    console.log(counter);
  }
}
*/