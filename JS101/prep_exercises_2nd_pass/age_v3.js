let rlsync = require('readline-sync');
let age = rlsync.question("How old are you?\n");
age = Number(age);


for (var i = 1; i < 5; i++) {
  console.log(`in ${i * 10} years, you will be ${age + (i * 10)} years old.`);
}
