let rlsync = require('readline-sync');

let areaSqM;

let areaSqFt;

const SQ_METERS_TO_FEET = 10.7639;

console.log('Please enter measurement type - meters or feet');
let measurementType = rlsync.prompt();

console.log(`Please enter the room length in ${measurementType} (integer only)`);
let length = rlsync.prompt();
length = parseInt(length, 10);

console.log(`Please enter the room width in ${measurementType} (integer only)`);
let width = rlsync.prompt();
width = parseInt(width, 10);

if (measurementType === 'meters' || measurementType === 'metres') {
  areaSqM = length * width;
  areaSqFt = areaSqM * SQ_METERS_TO_FEET;
  console.log(`The area of the room is ${areaSqM.toFixed(2)} square meters (${areaSqFt.toFixed(2)} square feet).`);
} else {
  areaSqFt = length * width;
  areaSqM = areaSqFt * (1 / SQ_METERS_TO_FEET);
  console.log(`The area of the room is ${areaSqFt.toFixed(2)} square feet (${areaSqM.toFixed(2)} square meters).`);
}
