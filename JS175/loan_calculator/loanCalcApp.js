

const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;



//let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

function getParams(path) {
  const myURL = newURL(path, `http://localhost:${PORT}`);
}


function parseParams(params) {
  let loanAmount = params.get('amount');
  let loanDurationMonths = params.get('duration');

  let monthlyPayment = loanAmount * 
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))));

  return {
    loanAmount: loanAmount,
    loanDurationMonths: loanDurationMonths,
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
    res.write(`Amount: ${content.loanAmount}\n`);    
    res.write(`Duration: ${content.loanDurationMonths}\n`);    
    res.write(`APR: 5%\n`);    
    res.write(`Montly payment: ${content.monthlyPayment}\n`);    
    //res.write(`${method} ${path}\n`);
    res.end();
   }
});
