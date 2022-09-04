

let val = '10'; // for letter vals there should be a space after, eg 'J '
let suite = '♣';


let card = 
` -------
|${val}     |          
|       |
|   ${suite}   |
|       |
|     ${val}|
 -------`;


let card2 =
` -------
| / / / |
|/ / / /|
| / / / |
|/ / / /|
| / / / |
 -------`;

//console.log(card);

console.log(card2);


const displayHands = function(dealerCards, playerCards, playerSum) {

  let dealerHandRedacted = [dealerCards[0], ['?']];
  console.log(`Your hand is: ${playerCards}\n`);
  console.log(`Note, your hand's total is: ${playerSum}\n`);

  console.log(`Dealer's hand is: ${dealerHandRedacted}\n`);
};

const suiteSymbols = {Hearts: '♥', Diamonds: '♦', Clubs: '♣', Spades: '♠' }; // this will need to be put in 21.js near the top

function renderCard(cardSubArr) {


  let suite = suiteSymbols[cardSubArr[0]];
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

function renderBack() {
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

console.log(renderCard(['Diamonds', 9]));
console.log(renderBack());