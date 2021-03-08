let rlsync = require('readline-sync');

let billAmount = parseFloat(rlsync.question('Please enter the bill amount\n'));

let tipRate = parseFloat(rlsync.question('Please enter the tip rate\n'));

let tip = billAmount * (tipRate / 100);

let total = billAmount + tip;


console.log(`The tip is $${tip.toFixed(2)}`);

console.log(`The total is $${total.toFixed(2)}`);