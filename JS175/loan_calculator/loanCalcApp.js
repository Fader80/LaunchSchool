const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const HANDLEBARS = require('handlebars');
const APR = 5;

const LOAN_OFFER_SOURCE = `
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
        <tbody>
        <tr>
    <th>Amount:</th>
    <td>
      <a href='/?amount={{amountDecrement}}&duration={{loanDurationYears}}'>- $100</a>
    </td>
    <td>$ {{loanAmount}}</td>
    <td>
      <a href='/?amount={{amountIncrement}}&duration={{loanDurationYears}}'>+ $100</a>
    </td>
  </tr>
  <tr>
    <th>Duration:</th>
    <td>
      <a href='/?amount={{loanAmount}}&duration={{durationDecrement}}'>- 1 year</a>
    </td>
    <td>{{loanDurationYears}} years</td>
    <td>
      <a href='/?amount={{loanAmount}}&duration={{durationIncrement}}'>+ 1 year</a>
    </td>
  </tr>
  <tr>
    <th>APR:</th>
    <td colspan='3'>{{apr}}%</td>
  </tr>
  <tr>
    <th>Monthly payment:</th>
    <td colspan='3'>$ {{monthlyPayment}}</td>
  </tr>
        </tbody>
      </table>
    </article>
  </body>
</html>`
;

const LOAN_FORM_SOURCE = `<!DOCTYPE html>
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

      form,
      input {
        font-size: 1.5rem;
      }
      form p {
        text-align: center;
      }
      label,
      input {
        display: block;
        width: 100%;
        padding: 0.5rem;
        margin-top: 0.5rem;
      }
      input[type="submit"] {
        width: auto;
        margin: 1rem auto;
        cursor: pointer;
        color: #fff;
        background-color: #01d28e;
        border: none;
        border-radius: 0.3rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <form action="/loan-offer" method="get">
        <p>All loans are offered at an APR of {{apr}}%.</p>
        <label for="amount">How much do you want to borrow (in dollars)?</label>
        <input type="number" name="amount" id="amount" value="">
        <label for="duration">How much time do you want to pay back your loan?</label>
        <input type="number" name="duration" id="duration" value="">
        <input type="submit" name="" value="Get loan offer!">
      </form>
    </article>
  </body>
</html>
`;


const LOAN_OFFER_TEMPLATE = HANDLEBARS.compile(LOAN_OFFER_SOURCE);
const LOAN_FORM_TEMPLATE = HANDLEBARS.compile(LOAN_FORM_SOURCE);


function render(template, data) {
  let html = template(data);
  return html;
}


function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.searchParams;
}

function getPathName(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  return myURL.pathname;
}


function calcMonthlyInterestFromAPR(APR) {
  let APRDecimal = APR / 100;
  let monthyPeriodic = APRDecimal / 12;
  return monthyPeriodic;
}

function calcLoanPayment(loanAmount, loanDurationYears, apr) {
  let monthlyInterestRate = calcMonthlyInterestFromAPR(apr);
  let loanMonths = loanDurationYears * 12;
  let monthlyPayment = loanAmount * 
  (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));

  monthlyPayment = monthlyPayment.toFixed(2);

  return monthlyPayment;

}


function parseParams(params) {
  const APR = 5;
  let data = {};

  data.loanAmount = Number(params.get('amount')) || 1600;
  data.amountIncrement = data.loanAmount + 100;
  data.amountDecrement = data.loanAmount - 100;
  data.loanDurationYears = Number(params.get('duration')) ||5;
  data.durationIncrement = data.loanDurationYears + 1;
  data.durationDecrement = data.loanDurationYears - 1;
  data.apr = APR;
  data.monthlyPayment = calcLoanPayment(data.loanAmount, data.loanDurationYears, APR);

  return data;

}




const SERVER = HTTP.createServer((req, res) => {
  //let method = req.method;
  let path = req.url;
  let pathname = getPathName(path);

   if (pathname === '/') {
    let content = render(LOAN_FORM_TEMPLATE, {apr: APR});

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(`${content}\n`);
    res.end();    
   } else if (pathname === '/loan-offer') {        
    let data = parseParams(getParams(path));
    let content = render(LOAN_OFFER_TEMPLATE, data);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');   
    res.write(`${content}\n`);
    res.end();
   } else {
     res.statusCode = 404;
     res.end();
   }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
})




//http://localhost:3000/?amount=5000&duration=10

