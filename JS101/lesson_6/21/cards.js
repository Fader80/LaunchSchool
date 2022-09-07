

const displayHands = function(dealerCards, playerCards, playerSum) {

  let dealerHandRedacted = [dealerCards[0], ['?']];
  console.log(`Your hand is: ${playerCards}\n`);
  console.log(`Note, your hand's total is: ${playerSum}\n`);

  console.log(`Dealer's hand is: ${dealerHandRedacted}\n`);
};


function renderCard(cardSubArr) {

  let suite = [cardSubArr[0]];
  let val;
  if (typeof cardSubArr[1] === 'string') {
    val = cardSubArr[1][0] + ' ';
  } else if (cardSubArr[1] === 10) {
    val = 10;
  } else {
    val = cardSubArr[1] + ' ';
  }

  let visualCard =
` -------
|${val}     |
|       |
|   ${suite}   |
|       |
|     ${val}|
 -------`;

  return visualCard;

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

let multCard =
` -------          --------             --------
|${val}     |         |${val}     |            |${val}     |     
|       |         |       |            |       |         
|   ${suite}   |         |   ${suite}     |          |   ${suite}   |       
|       |         |       |                     |       |
|     ${val}|         |     ${val}|             |     ${val}|  
 -------           -------                   -------  `;


console.log(multCard);
