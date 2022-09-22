

const displayHands = function(dealerCards, playerCards, playerSum) {

  let dealerHandRedacted = [dealerCards[0], ['?']];
  console.log(`Your hand is: ${playerCards}\n`);
  console.log(`Note, your hand's total is: ${playerSum}\n`);

  console.log(`Dealer's hand is: ${dealerHandRedacted}\n`);
};


function padVal(value) {

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

  let [suite, val, suite1, val1, suite2, val2] = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);
  val2 = padVal(val2);

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


function twoCard(playerHand) {

  let [suite, val, suite1, val1] = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);

  let twoCard =
  `  -------        -------  
  |${val}     |     |${val1}     |
  |       |     |       |
  |  ${suite}    |     |   ${suite1}   |
  |       |     |       |
  |     ${val}|     |     ${val1}|
   -------       -------`;

  return twoCard;
}


function fourCard(playerHand) {

  let [suite, val, suite1, val1, suite2, val2, suite3, val3]
  = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);
  val2 = padVal(val2);
  val3 = padVal(val3);

  let fourCard =
  ` -------        -------        -------        -------
|${val}     |      |${val1}     |      |${val2}     |      |${val3}     |
|       |      |       |      |       |      |       |
|   ${suite}   |      |   ${suite1}   |      |   ${suite2}   |      |   ${suite3}   |       
|       |      |       |      |       |      |       |
|     ${val}|      |     ${val1}|      |     ${val2}|      |     ${val3}|
 -------        -------        -------        -------`;

  return fourCard;
}

function fiveCard(playerHand) {

  let [suite, val, suite1, val1, suite2, val2, suite3, val3, suite4, val4]
  = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);
  val2 = padVal(val2);
  val3 = padVal(val3);
  val4 = padVal(val4);

  let fiveCard =
  `  -------        -------        -------        -------        -------            
 |${val}     |      |${val1}     |      |${val2}     |      |${val3}     |      |${val4}     |
 |       |      |       |      |       |      |       |      |       |
 |   ${suite}   |      |   ${suite1}   |      |   ${suite2}   |      |   ${suite3}   |      |   ${suite4}   |       
 |       |      |       |      |       |      |       |      |       |
 |     ${val}|      |     ${val1}|      |     ${val2}|      |     ${val3}|      |     ${val4}|
  -------        -------        -------        -------        -------`;

  return fiveCard;
}


function dealerCardFunc(dealerHand) {
  let [suite, val] = dealerHand[0];

  val = padVal(val);

  let dealerCards =
   `  -------        ------- 
 |${val}     |      | / / / |
 |       |      |/ / / /|
 |   ${suite}   |      | / / / |
 |       |      |/ / / /|
 |     ${val}|      | / / / |
  -------        -------`;

  return dealerCards;
}



let cardFuncArr = [twoCard, threeCard, fourCard, fiveCard];

//let playerCards = [['♠', 1], ['♥', 'Jack'], ['♣', 10]];

let dealerCards = [['♠', 10], ['♥', 'Jack']];

//let playerCards = [['♠', 1], ['♥', 'Jack'], ['♣', 10], ['♦', 'Ace']];

let playerCards = [['♠', 1], ['♥', 'Jack'], ['♣', 10], ['♦', 'Ace'], ['♣', 9]];


console.log(cardFuncArr[playerCards.length - 2](playerCards));

console.log(dealerCardFunc(dealerCards));
