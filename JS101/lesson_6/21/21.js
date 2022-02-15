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

const cloneDeck = function(origDeck) {
  let clonedDeck = {};

  let deckEntries = Object.entries(origDeck);

  deckEntries.forEach(entry => {
    let [key, value] = entry;

    clonedDeck[key] = value.map(elem => elem);
  });

  return clonedDeck;

};


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

const deleteGenCardFromDeck = function(cardToDelete, roundDeck) {
  let [suite, value] = cardToDelete;

  let suiteArray = roundDeck[suite];
  let indexOfCardToDelete = suiteArray.indexOf(value);

  suiteArray.splice(indexOfCardToDelete, 1);
};


const parseNonAceValueFromCard =  function(argValue) {
  let convertedArg = Number(argValue);

  if (convertedArg) {
    return convertedArg;
  } else {
    return 10;
  }
};


const parseAceValueFromCard = function(total) {
  total += 11;

  if (total > 21) {
    return 1;
  } else {
    return 11;
  }
};

const calculateCardTotal = function(card, total) {
  let cardValue = card[1];
  let parsedCardValue;

  if (cardValue !== 'Ace') {
    parsedCardValue = parseNonAceValueFromCard(cardValue);
  } else {
    parsedCardValue = parseAceValueFromCard(total);
  }

  return parsedCardValue;

};

//this is the main calculate total function
const calculateHandTotal = function(hand) {

  let total = 0;

  hand.forEach(card => {
    total += calculateCardTotal(card, total);
  });
  return total;
};

const busted = function(currentTotal) {
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

const displayResult = function(totalOfPlayer, totalOfComputer) {

  switch (calcRoundResult(totalOfPlayer,totalOfComputer)) {
    case 'player' : {
      console.log('You won the round!\n');
      break;
    }
    case 'computer' : {
      console.log('Dealer won the round\n');
      break;
    }
    case 'tie' : {
      console.log('Round was a tie\n');
      break;
    }
  }
};


while (true) { // main game loop

  console.log('***welcome to 21!***\n');

  let deckOfRound = cloneDeck(deck);

  let playerHand = [];

  playerHand[0] = cardGenerator();
  deleteGenCardFromDeck(playerHand[0], deckOfRound);

  playerHand[1] = cardGenerator();
  deleteGenCardFromDeck(playerHand[1], deckOfRound);


  let dealerHand = [];

  dealerHand[0] = cardGenerator();
  deleteGenCardFromDeck(dealerHand[0], deckOfRound);

  dealerHand[1] = cardGenerator();
  deleteGenCardFromDeck(dealerHand[1], deckOfRound);

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
      deleteGenCardFromDeck(playerHand[playerHand.length - 1], deckOfRound);

      playerTotal = calculateHandTotal(playerHand);
    }

    if (answer[0] === 's' || busted(playerTotal)) break;

  }//end of player turn loop

  if (busted(playerTotal)) {
    clear();
    displayHands(dealerHand, playerHand, playerTotal); // this is so player can still see their full hand after they bust

    console.log('You busted, dealer won');
    break;
    // probably end the game? or ask the user to play again? - if the latter, ask the question above the break
  } else {
    console.log("You chose to stay!\n");  // if player didn't bust, must have stayed to get here
    //also if player chose to stay, it's now the dealer's turn
  }
  //dealer turn while loop
  while (true) {
    if (dealerTotal >= 17) break; // this break is the equivalent of 'stay'


    dealerHand.push(cardGenerator()); // this is the equivalent of 'hit'
    deleteGenCardFromDeck(dealerHand[dealerHand.length - 1], deckOfRound);

    dealerTotal = calculateHandTotal(dealerHand); // this is the equivalent of 'hit'

  }//end of dealer turn loop

  if (busted(dealerTotal)) {
    console.log('Dealer busted, you win!');
    break;
  } else {
    displayResult(playerTotal, dealerTotal);
  }

}//end of main game loop

//im adding this as a marker for non shuffle