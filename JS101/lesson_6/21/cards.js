

const displayHands = function(dealerCards, playerCards, playerSum) {

  let dealerHandRedacted = [dealerCards[0], ['?']];
  console.log(`Your hand is: ${playerCards}\n`);
  console.log(`Note, your hand's total is: ${playerSum}\n`);

  console.log(`Dealer's hand is: ${dealerHandRedacted}\n`);
};


function parseVal(value) {

  if (typeof value === 'number' && value !== 10) {
    value += ' ';
  } else if (typeof value === 'string') {
    value = value[0] + ' ';
  }

  return value;

}

function renderCardBack() {
  let cardBack =
` -------
| / / / |
|/ / / /|
| / / / |
|/ / / /|
| / / / |
 -------`;

  return cardBack;

}


let suite  = '♠';

let val = 10;

function threeCard(playerHand) {

  let [val, suite, val1, suite1, val2, suite2] = [...playerHand].flat();

  val = parseVal(val);
  val1 = parseVal(val1);
  val2 = parseVal(val2);

  let threeCard =
` -------           -------           -------
|${val}     |         |${val1}     |         |${val2}     |     
|       |         |       |         |       |         
|   ${suite}   |         |   ${suite1}   |         |   ${suite2}   |       
|       |         |       |         |       |
|     ${val}|         |     ${val1}|         |     ${val2}|   
 -------           -------           -------  `;

  return threeCard;
}

let funcArr = ['dummy', 'dummy', threeCard];

let playerCards = [[10,'♠'], ['Jack', '♥'], [10, '♣']];


console.log(funcArr[playerCards.length - 1](playerCards));