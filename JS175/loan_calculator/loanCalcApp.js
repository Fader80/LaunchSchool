

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
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 2rem;
      }

      th {
        text-align: right;
      }
    </style>
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
  let loanAmount = Number(params.get('amount')) || 1600;
  let loanDurationYears = Number(params.get('duration')) ||5;
  
  let loanMonths = loanDurationYears * 12;

  let monthlyInterestRate = calcMonthlyInterestFromAPR(APR);

  let monthlyPayment = loanAmount * 
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));

  monthlyPayment = monthlyPayment.toFixed(2);



    let content = `<tr>
    <th>Amount:</th>
    <td>
      <a href='/?amount=${loanAmount - 100}&duration=${loanDurationYears}'>- $100</a>
    </td>
    <td>$${loanAmount}</td>
    <td>
      <a href='/?amount=${loanAmount + 100}&duration=${loanDurationYears}'>+ $100</a>
    </td>
  </tr>
  <tr>
    <th>Duration:</th>
    <td>
      <a href='/?amount=${loanAmount}&duration=${loanDurationYears -1}'>- 1 year</a>
    </td>
    <td>${loanDurationYears} years</td>
    <td>
      <a href='/?amount=${loanAmount}&duration=${loanDurationYears +1}'>+ 1 year</a>
    </td>
  </tr>
  <tr>
    <th>APR:</th>
    <td colspan='3'>${APR}%</td>
  </tr>
  <tr>
    <th>Monthly payment:</th>
    <td colspan='3'>$${monthlyPayment}</td>
  </tr>`;

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
    res.write(`${content}\n`);
   
    
    res.end();
   }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})




//http://localhost:3000/?amount=5000&duration=10

