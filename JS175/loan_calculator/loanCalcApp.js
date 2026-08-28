

const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const APR = 5;



//let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationYears))));

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}


function calcMonthlyInterestFromAPR(APR) {
  let APRDecimal = APR / 100;
  let monthyPeriodic = APRDecimal / 12;
  return monthyPeriodic;
}


function parseParams(params) {
  let loanAmount = params.get('amount');
  let loanDurationYears = params.get('duration');
  
  let loanMonths = loanDurationYears * 12;

  let monthlyInterestRate = calcMonthlyInterestFromAPR(APR);

  let monthlyPayment = loanAmount * 
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));

  monthlyPayment = monthlyPayment.toFixed(2);

  return {
    loanAmount: loanAmount,
    loanDurationYears: loanDurationYears,
    monthlyPayment: monthlyPayment
  };

}



const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

   if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
    
   } else {    
    //let content = rollDice(getParams(path));
    let content = parseParams(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); 
    res.write(`Amount: $${content.loanAmount}\n`);    
    res.write(`Duration: ${content.loanDurationYears} years\n`);    
    res.write(`APR: ${APR}%\n`);    
    res.write(`Monthly payment: $${content.monthlyPayment}\n`);    
    //res.write(`${method} ${path}\n`);
    res.end();
   }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})


//need to calculate the loan duration in months - and plug that in on line 24


//http://localhost:3000/?amount=5000&duration=10