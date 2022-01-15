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

const busted = function() {
  if (currentTotal > 21) {
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

const calcRoundResult = function(totalOfPlayer, totalOfComputer) {
  if (totalOfPlayer > totalOfComputer) {
    return 'player';
  } else if (totalOfComputer > totalOfPlayer) {
    return 'computer';
  } else {
    return 'tie';
  }
};

const displayResult = function(calcFunc) {

  switch (calcFunc()) {
    case 'player' : {
      console.log('You won the round!');
      break;
    }
    case 'computer' : {
      console.log('Dealer won the round');
      break;
    }
    default : {
      console.log('Round was a tie');
      break;
    }
  }
};

//round starts here - should you display a welcome message?
//put this into a while loop encompassing the other loops?

while (true) { // main game loop

  console.log('***welcome to 21!***');

  const playerHand = handGenerator();

  const dealerHand = handGenerator();

  let playerTotal = calculateHandTotal(playerHand);

  let dealerTotal = calculateHandTotal(dealerHand);

  let playRound = rlSync.question('Do you want to start a round? answer y/n\n');

  if (playRound.toLowerCase() === 'n') break;


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

    if (answer[0] === 's' || busted()) break;

  }//end of player turn loop

  if (busted()) {

    console.log('You busted, dealer won');
    break;
    // probably end the game? or ask the user to play again? - if the latter, ask the question above the break
  } else {
    console.log("You chose to stay!");  // if player didn't bust, must have stayed to get here
    //also if player chose to stay, it's now the dealer's turn
  }
  //dealer turn while loop
  while (true) {
    if (dealerTotal >= 17) break; // this break is the equivalent of 'stay'


    dealerHand.push(cardGenerator()); // this is the equivalent of 'hit'

    dealerTotal = calculateHandTotal(dealerHand); // this is the equivalent of 'hit'

  }//end of dealer turn loop

  if (busted(dealerTotal)) {
    console.log('Dealer busted, you win!');
    break;
  } else {
    displayResult(calcRoundResult(playerTotal, dealerTotal));
  }

}//end of main game loop
