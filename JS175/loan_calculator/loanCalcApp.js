

const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const APR = 5;


const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;



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



    let content = `<tr><th>Amount:</th><td>$${loanAmount}</td></tr>
                 <tr><th>Duration:</th><td>${loanDurationYears} years</td></tr>
                 <tr><th>APR:</th><td>${APR}%</td></tr>
                 <tr><th>Monthly payment:</th><td>$${monthlyPayment}</td></tr>`;

  return `${HTML_START}${content}${HTML_END}`;

}



const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;

   if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
    
   } else {    
    
    let content = parseParams(getParams(path));

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); 
    // res.write(`Amount: $${results.loanAmount}\n`);    
    // res.write(`Duration: ${results.loanDurationYears} years\n`);    
    // res.write(`APR: ${APR}%\n`);    
    // res.write(`Monthly payment: $${results.monthlyPayment}\n`);
    res.write(`${content}\n`);


    
    
    res.end();
   }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})




//http://localhost:3000/?amount=5000&duration=10