let rlsync = require('readline-sync');

let name = rlsync.question('What\'s your name?\n');

while (!name || name === '!') {
  name = rlsync.question('Cannot be blank or just exclamation mark\n');
}

if (name.charAt(name.length - 1) !== '!') {
  console.log(`Hello ${name}.`);
} else {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
}