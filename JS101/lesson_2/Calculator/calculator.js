// ask user for first number
// ask user for second number
// ask user for type of operation to perform
// perform operation on the two numbers
// print result of calculation in terminal

let readline = require('readline-sync');

const MESSAGES = require('./calculator_messages.json');

const LANGUAGE = 'en';

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

prompt(messages('msg1', LANGUAGE));


while (true) {

  prompt(messages('msg2', LANGUAGE));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('msg3', LANGUAGE));
    number1 = readline.question();
  }

  prompt(messages('msg6', LANGUAGE));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('msg3', LANGUAGE));
    number2 = readline.question();
  }

  prompt(`${number1} ${number2}`);

  prompt(messages('msg4', LANGUAGE));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('msg5', LANGUAGE));
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

  prompt(messages('msg7', LANGUAGE));
  let runAgain = readline.question();


  if (runAgain[0].toLowerCase() !== 'y') {
    break;
  }

}


