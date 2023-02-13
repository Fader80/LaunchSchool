let rlsync = require('readline-sync');
let currAge = Number(rlsync.question('please enter your age\n'));
let yearsOff = Number(rlsync.question('How many years younger would you like to be?\n'));
let idealAge = currAge - yearsOff;

console.log(`If we subtract ${yearsOff} from your current age of ${currAge}, then we get your ideal age of ${idealAge}`);
