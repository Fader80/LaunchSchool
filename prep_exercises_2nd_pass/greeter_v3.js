let rlsync = require('readline-sync');
let firstName = rlsync.question("What is your first name?\n");
let surname = rlsync.question("What is your last name?\n");
console.log(`Hello, ${firstName} ${surname}!`);
