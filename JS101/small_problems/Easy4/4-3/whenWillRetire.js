let rlsync = require('readline-sync');

let dateVar = new Date();
let currYear = dateVar.getFullYear();
let age = rlsync.question('What is your age?\n');
let retireAge = rlsync.question('At what age would you like to retire?\n');
let yearsLeft = retireAge - age;

console.log(`It's ${currYear}. You will retire in ${yearsLeft + currYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);