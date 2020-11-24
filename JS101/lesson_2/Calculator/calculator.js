// ask user for first number
// ask user for second number
// ask user for type of operation to perform
// perform operation on the two numbers
// print result of calculation in terminal

let readline = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}


prompt(messages('langSel'));
let language = readline.question();

while (!['1', '2'].includes(language)) {
  prompt(messages('langErr'));
  language = readline.question();
}

if (language === '1') {
  language = 'en';
} else {
  language = 'es';
}

prompt(messages('welcm', language));


while (true) {

  prompt(messages('firstNum', language));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('numErr', language));
    number1 = readline.question();
  }

  prompt(messages('secNum', language));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('numErr', language));
    number2 = readline.question();
  }

  prompt(`${number1} ${number2}`);

  prompt(messages('chooseOp', language));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('opErr', language));
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }


  prompt(`The result is ${output}`);

  prompt(messages('anotherCal', language));
  let runAgain = readline.question();

  while (runAgain === '') {
    prompt(messages('anothCalErr', language));
    runAgain = readline.question();
  }

  if (language === 'en') {
    if (runAgain[0].toLowerCase() !== 'y') {
      break;
    }
  } else if (language === 'es') {
    if (runAgain[0].toLowerCase() !== 's') {
      break;
    }
  }

  console.clear();

}
