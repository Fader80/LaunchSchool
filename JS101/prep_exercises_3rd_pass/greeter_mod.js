let rlSync = require('readline-sync');

let firstName = rlSync.question('Please enter your first name\n');
let lastName = rlSync.question('Please enter your surname\n');

console.log(`Good morning, ${firstName} ${lastName}!`);