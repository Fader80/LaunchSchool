const HTTP = require('http');
const URL = require('url').URL;
const QUERYSTRING = require('querystring');
const PATH = require('path');
const FS = require('fs');
const PORT = 3000;
const HANDLEBARS = require('handlebars');
const APR = 5;

const MIME_TYPES = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const LOAN_OFFER_SOURCE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
        <tr>
    <th>Amount:</th>
    <td>
      <a href='/loan-offer?amount={{amountDecrement}}&duration={{loanDurationYears}}'>- $100</a>
    </td>
    <td>$ {{loanAmount}}</td>
    <td>
      <a href='/loan-offer?amount={{amountIncrement}}&duration={{loanDurationYears}}'>+ $100</a>
    </td>
  </tr>
  <tr>
    <th>Duration:</th>
    <td>
      <a href='/loan-offer?amount={{loanAmount}}&duration={{durationDecrement}}'>- 1 year</a>
    </td>
    <td>{{loanDurationYears}} years</td>
    <td>
      <a href='/loan-offer?amount={{loanAmount}}&duration={{durationIncrement}}'>+ 1 year</a>
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
</html>`;

const LOAN_FORM_SOURCE = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <form action="/loan-offer" method="post">
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

function parseFormData(request, callback) {
  let body = '';
  request.on('data', chunk => {
    body += chunk.toString();    
  });
  request.on('end', () => {
    let data = QUERYSTRING.parse(body);
    data.amount = Number(data.amount);
    data.duration = Number(data.duration);
    callback(data);
  });

}

function getParams(path) {
  const myURL = new URL(path, `http://localhost:${PORT}`);
  let searchParams = myURL.searchParams;
  let data = {};
  data.amount = Number(searchParams.get('amount'));
  data.duration = Number(searchParams.get('duration'));

  return data;
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
  let monthlyPayment =
    loanAmount *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanMonths)));

  monthlyPayment = monthlyPayment.toFixed(2);

  return monthlyPayment;
}

function createLoanOffer(data) {  
  
  //data.loanAmount = Number(params.get('amount'));
  data.amountIncrement = data.loanAmount + 100;
  data.amountDecrement = data.loanAmount - 100;
  //data.loanDurationYears = Number(params.get('duration'));
  data.durationIncrement = data.loanDurationYears + 1;
  data.durationDecrement = data.loanDurationYears - 1;
  data.apr = APR;
  data.monthlyPayment = calcLoanPayment(
    data.loanAmount,
    data.loanDurationYears,
    APR
  );

  return data;
}

const SERVER = HTTP.createServer((req, res) => {
  let path = req.url;
  let pathname = getPathName(path);
  let fileExtension = PATH.extname(pathname);
  let filePath = `./public${pathname}`;

  // 1. First check if a static file actually exists at this path (and isn't just a folder like '/')
  if (fileExtension && FS.existsSync(filePath)) {
    FS.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end();
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', `${MIME_TYPES[fileExtension] || 'text/plain'}`);
        res.write(data);
        res.end();
      }
    });
  } else {
    // 2. If it's not a static asset, handle your Handlebars template routes safely
    let method = req.method;
    if (method === 'GET' && pathname === '/') {
      let content = render(LOAN_FORM_TEMPLATE, { apr: APR });

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(`${content}\n`);
      res.end();
    } else if (method === 'GET' && pathname === '/loan-offer') {
      let data = parseParams(getParams(path));
      let content = render(LOAN_OFFER_TEMPLATE, data);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.write(`${content}\n`);
      res.end();
    } else if (method === 'POST' && pathname === '/loan-offer') {
      parseFormData(req, parsedData => {
        let data = createLoanOffer(parsedData);
        let content = render(LOAN_OFFER_TEMPLATE, data);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write(`${content}\n`);
        res.end();
      });
    } else {
      res.statusCode = 404;
      res.end();
    }
  }
});


SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

//http://localhost:3000/?amount=5000&duration=10
