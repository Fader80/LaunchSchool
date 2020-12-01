
let readline = require('readline-sync');


const JSON_MSGS = require('./mortgageCalcMsgs.json');


function prompt(message) {
  console.log(`=> ${message}`);
}

function validateNum(questionOutput) {
  return questionOutput.trim() === '' || Number.isNaN(Number(questionOutput));
}

function messages(message, language = 'en') {
  return JSON_MSGS[language][message];
}


prompt(messages('langSel'));

let language = readline.question();

// I know the conditional for the below while loop is not as elegant as the
//[arr].includes(answer) option, but I wanted to leave in as it's my own variant

while (!(language === '1' || language === '2' || language === '3' || language === '4')) {
  prompt(messages('langErr'));
  language = readline.question();
}


switch (language) {
  case '1' : {
    language = 'en';
    break;
  }
  case '2' : {
    language = 'es';
    break;
  }
  case '3' : {
    language = 'de';
    break;
  }
  case '4': {
    language = 'fr';
    break;
  }
}


prompt(messages('welcome', language));


while (true) {


  prompt(messages('loanAmt', language));
  let loanAmount = readline.question();

  while (validateNum(loanAmount)) {
    prompt(messages('numError', language));
    loanAmount = readline.question();
    while (Number(loanAmount) < 1) {
      prompt(messages('zeroError', language));
      loanAmount = readline.question();
    }
  }

  while (Number(loanAmount) < 1) {
    prompt(messages('zeroError', language));
    loanAmount = readline.question();
    while (validateNum(loanAmount)) {
      prompt(messages('numError', language));
      loanAmount = readline.question();
    }
  }


  prompt(messages('APRmsg', language));
  let APR = readline.question();

  while (validateNum(APR)) {
    prompt(messages('numError', language));
    APR = readline.question();
    while (Number(APR) < 1) {
      prompt(messages('zeroAPR', language));
      APR = readline.question();
    }
  }

  while (Number(APR) < 1) {
    prompt(messages('zeroAPR', language));
    APR = readline.question();
    while (validateNum(APR)) {
      prompt(messages('numError', language));
      APR = readline.question();
    }
  }


  prompt(messages('loanYr', language));
  let loanYears = readline.question();

  while (validateNum(loanYears)) {
    prompt(messages('numError', language));
    loanYears = readline.question();
    while (Number(loanYears) < 1) {
      prompt(messages('zeroError', language));
      loanYears = readline.question();
    }
  }

  while (Number(loanYears) < 1) {
    prompt(messages('zeroError', language));
    loanYears = readline.question();
    while (validateNum(loanYears)) {
      prompt(messages('numError', language));
      loanYears = readline.question();
    }
  }

  prompt(messages('loanMnth', language));
  let loanMonths = readline.question();

  while (validateNum(loanMonths)) {
    prompt(messages('numError', language));
    loanMonths = readline.question();
    while (Number(loanMonths) < 1) {
      prompt(messages('zeroError', language));
      loanMonths = readline.question();
    }
  }

  while (Number(loanMonths) < 1) {
    prompt(messages('zeroError', language));
    loanMonths = readline.question();
    while (validateNum(loanMonths)) {
      prompt(messages('numError', language));
      loanMonths = readline.question();
    }
  }


  let monthlyInterest = (Number(APR).toFixed(2) / 100) / 12;

  let totalDuration = (Number(loanYears) * 12) + Number(loanMonths);

  let monthlyPaymnt = Number(loanAmount) *
                     (monthlyInterest /
                     (1 - Math.pow((1 + monthlyInterest), (-totalDuration))));


  prompt(messages('mnthTotal', language) + monthlyPaymnt.toFixed(2));

  prompt(messages('anotherCalc', language));
  let continueIt = readline.question();

  while (continueIt === '') {
    prompt(messages('anothCalcErr', language));
    continueIt = readline.question();
  }

  //re-vamped continueIt processing -
  //streamlined, as suggested by Elizabeth Tackett
  if (continueIt[0].toLowerCase() !== JSON_MSGS[language]['affirmative'][0]) {
    break;
  }


  console.clear();

}