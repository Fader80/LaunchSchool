const deck = {
  Hearts: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Diamonds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Clubs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Spades: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
};

const { clear } = require('console');
let rlSync = require('readline-sync');

const deckKeysArr = Object.keys(deck);

const NUMBER_OF_RANKS = 12;


const suiteGenerator = function() {
  return Math.floor(Math.random() * deckKeysArr.length);
};

const rankGenerator = function() {
  return Math.floor(Math.random() * NUMBER_OF_RANKS);
};

const cardGenerator = function() {
  let card = [];

  card[0] = deckKeysArr[suiteGenerator()];
  card[1] = deck[card[0]][rankGenerator()];

  return card;

};

const handGenerator = function() {
  let hand = [];

  hand[0] = cardGenerator();
  hand[1] = cardGenerator();

  return hand;
};

const parseNonAceValueFromCard =  function(argValue) {
  let convertedArg = Number(argValue);

  if (convertedArg) {
    return convertedArg;
  } else {
    return 10;
  }
};


const parseAceValueFromCard = function() {
  currentTotal += 11;

  if (currentTotal > 21) {
    return 1;
  } else {
    return 11;
  }
};

const calculateCardTotal = function(card) {
  let cardValue = card[1];
  let parsedCardValue;

  if (cardValue !== 'Ace') {
    parsedCardValue = parseNonAceValueFromCard(cardValue);
  } else {
    parsedCardValue = parseAceValueFromCard();
  }

  return parsedCardValue;

};

//this is the main calculate total function
const calculateHandTotal = function(hand) {
  let total = 0;

  hand.forEach(card => {
    total += calculateCardTotal(card);
  });
  return total;
};

const busted = function(total) {
  if (total > 21) {
    return true;
  } else {
    return false;
  }
};

const displayHands = function(dealerCards, playerCards, playerSum) {

  let dealerHandRedacted = [dealerCards[0], ['?']];
  console.log(`Your hand is: ${playerCards}`);
  console.log(`Note, your hand's total is: ${playerSum}\n`);

  console.log(`Dealer's hand is: ${dealerHandRedacted}\n`);
};

//round starts here - should you display a welcome message?
//put this into a while loop encompassing the other loops?

while (true) { // main game loop

  console.log('***welcome to 21!***');

  const playerHand = handGenerator();

  const dealerHand = handGenerator();

  let playerTotal = calculateHandTotal(playerHand);

  let dealerTotal;

  let playRound = rlSync.question('Do you want to start a round? answer y/n\n');

  if (playRound.toLocaleLowerCase() === 'n') break;


  //player turn loop
  while (true) {
    clear();
    displayHands(dealerHand, playerHand, playerTotal);

    console.log("hit or stay?");
    let answer = rlSync.question();
    if (answer[0] === 'h') {
      playerHand.push(cardGenerator());

      playerTotal = calculateHandTotal(playerHand);
    }

    if (answer[0] === 's' || busted(playerTotal)) break;

  }//end of player turn loop

  if (busted(playerTotal)) {

    console.log('You busted, dealer won');
    break;
    // probably end the game? or ask the user to play again? - if the latter, ask the question above the break
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
  }

}//end of main game loop
