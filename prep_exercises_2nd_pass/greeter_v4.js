function getName(prompt) {
  let rlsync = require('readline-sync');
  let name = rlsync.question(prompt);
  return name;
}

let firstName = getName("what's your first name?\n");
let surname = getName("what's your last name?\n");

console.log(`Hello, ${firstName} ${surname}`);
