

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

console.log(card);

console.log(card2);


const displayHands = function(dealerCards, playerCards, playerSum) {

  let dealerHandRedacted = [dealerCards[0], ['?']];
  console.log(`Your hand is: ${playerCards}\n`);
  console.log(`Note, your hand's total is: ${playerSum}\n`);

  console.log(`Dealer's hand is: ${dealerHandRedacted}\n`);
};