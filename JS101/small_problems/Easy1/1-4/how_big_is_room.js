let rlsync = require('readline-sync');

const SQ_METERS_TO_FEET = 10.7639;

console.log('Please enter the room length in metres (integer only)');
let length = rlsync.prompt();
length = parseInt(length, 10);

console.log('Please enter the room width in metres (integer only)');
let width = rlsync.prompt();
width = parseInt(width, 10);


let areaSqM = (length * width).toFixed(2);

let areaSqFt = (areaSqM * SQ_METERS_TO_FEET).toFixed(2);

console.log(`The area of the room is ${areaSqM} square meters (${areaSqFt} square feet).`);