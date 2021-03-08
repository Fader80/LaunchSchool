

let readline = require('readline-sync');


const JSON_MSGS = require('./mortgageCalcMsgs.json');

let language = 'en'; // add this as an option in v2 that user can select  - bonus feature


function prompt(message) {
  console.log(`=> ${message}`);
}

function validateNum(questionOutput) {
  return questionOutput.trim() === '' || Number.isNaN(Number(questionOutput));
}

function messages(message, language = 'en') {
  return JSON_MSGS[language][message];
}


prompt('Welcome to Mortgage Calculator!');


while (true) {

  prompt(messages('loanAmt', language));
  let loanAmount = readline.question();

  while (validateNum(loanAmount)) {
    prompt(messages('error', language));
    loanAmount = readline.question();
  }


  prompt(messages('APRmsg', language));
  let APR = readline.question();

  while (validateNum(APR)) {
    prompt(messages('error', language));
    APR = readline.question();
  }


  prompt(messages('loanYr', language));
  let loanYears = readline.question();

  while (validateNum(loanYears)) {
    prompt(messages('error', language));
    loanYears = readline.question();
  }

  prompt(messages('loanMnth', language));
  let loanMonths = readline.question();

  while (validateNum(loanMonths)) {
    prompt(messages('error', language));
    loanMonths = readline.question();
  }


  let monthlyInterest = (Number(APR).toFixed(2) / 100) / 12;

  let totalDuration = (Number(loanYears) * 12) + Number(loanMonths);

  let monthlyPaymnt = Number(loanAmount) * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (- totalDuration))));

  prompt(`Your monthly instalment to pay for this mortgage is $${monthlyPaymnt.toFixed(2)}\n`);

  prompt(messages('AnotherCalc', language));
  let continueIt = readline.question();

  if (continueIt[0].toLowerCase() !== 'y') {
    break;
  }

}
