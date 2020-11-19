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


let language;

prompt(messages('langSel'));
let langSelection = readline.question();

switch (Number(langSelection)) {
  case 1 : {
    language = 'en';
    break;
  }
  case 2 : {
    language = 'es';
    break;
  }
  case 3 : {
    language = 'de';
    break;
  }
  case 4: {
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
    while (Number(loanAmount) === 0) {
      prompt(messages('zeroError', language));
      loanAmount = readline.question();
    }
  }

  while (Number(loanAmount) === 0) {
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
    while (Number(APR) === 0) {
      prompt(messages('zeroAPR', language));
      APR = readline.question();
    }
  }

  while (Number(APR) === 0) {
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
    while (Number(loanYears) === 0) {
      prompt(messages('zeroError', language));
      loanYears = readline.question();
    }
  }

  while (Number(loanYears) === 0) {
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
  }


  let monthlyInterest = (Number(APR).toFixed(2) / 100) / 12;

  let totalDuration = (Number(loanYears) * 12) + Number(loanMonths);

  let monthlyPaymnt = Number(loanAmount) *
                     (monthlyInterest /
                     (1 - Math.pow((1 + monthlyInterest), (-totalDuration))));


  prompt(messages('mnthTotal', language) + monthlyPaymnt.toFixed(2));

  prompt(messages('AnotherCalc', language));
  let continueIt = readline.question();

  if (language === 'en') {
    if (continueIt[0].toLowerCase() !== 'y') {
      break;
    }
  } else if (language === 'es') {
    if (continueIt[0].toLowerCase() !== 's') {
      break;
    }
  } else if (language === 'de') {
    if (continueIt[0].toLowerCase() !== 'j') {
      break;
    }
  } else if (language === 'fr') {
    if (continueIt[0].toLowerCase() !== 'o') {
      break;
    }
  }

}
