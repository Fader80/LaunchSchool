const deck = {
  '♥': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  '♦': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  '♣': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  '♠': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
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
  return currentTotal > 21;
};


//the following are the card functions for visual rendering - I had to do them
//as individual functions because console.log doesn't allow for any verticality
//for subsequent cards, thus cannot be used to loop through the player's hand
//and render cards side-by-side, which I would have preferred
//as it's more efficient, and would not require multiple render functions,
//just one.  it would also have been able to cope with more than five cards
//being rendered with ease, however in playtesting there was never a need for
//more than five so that's what I've gone with for this implementation
//Unfortunately trying to do it with console.log has the newer card render below
//the previous one


//this is for padding the value for card visual render
const padVal = function(value) {

  if (typeof value === 'number' && value !== 10) {
    value += ' ';
  } else if (typeof value === 'string') {
    value = value[0] + ' ';
  }

  return value;

};

const renderTwoCard = function(playerHand) {

  let [suite, val, suite1, val1] = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);

  let twoCard =
` -------        -------  
 |${val}     |      |${val1}     |
 |       |      |       |
 |  ${suite}    |      |   ${suite1}   |
 |       |      |       |
 |     ${val}|      |     ${val1}|
  -------        -------`;

  return twoCard;
};

const renderThreeCard = function(playerHand) {

  let [suite, val, suite1, val1, suite2, val2] = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);
  val2 = padVal(val2);

  let threeCard =
 ` -------        -------        -------
 |${val}     |      |${val1}     |      |${val2}     |     
 |       |      |       |      |       |         
 |   ${suite}   |      |   ${suite1}   |      |   ${suite2}   |       
 |       |      |       |      |       |
 |     ${val}|      |     ${val1}|      |     ${val2}|   
  -------        -------        -------  `;

  return threeCard;
};

const renderFourCard = function(playerHand) {

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
};


const renderFiveCard = function(playerHand) {

  let [suite, val, suite1, val1, suite2, val2, suite3, val3, suite4, val4]
  = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);
  val2 = padVal(val2);
  val3 = padVal(val3);
  val4 = padVal(val4);

  let fiveCard =
  ` -------        -------        -------        -------        -------            
 |${val}     |      |${val1}     |      |${val2}     |      |${val3}     |      |${val4}     |
 |       |      |       |      |       |      |       |      |       |
 |   ${suite}   |      |   ${suite1}   |      |   ${suite2}   |      |   ${suite3}   |      |   ${suite4}   |       
 |       |      |       |      |       |      |       |      |       |
 |     ${val}|      |     ${val1}|      |     ${val2}|      |     ${val3}|      |     ${val4}|
  -------        -------        -------        -------        -------`;

  return fiveCard;
};


const displayHands = function(dealerCards, playerCards, playerSum) {

  let dealerHandRedacted = [dealerCards[0], ['?']];
  console.log(`Your hand is: ${playerCards}\n`);
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

const playAgain = function() {
  let flag = rlSync.question('Would you like to play again?\n');
  return flag === 'y';
};

let initialPlayMsg = true;

console.log('\n***welcome to 21!***\n');


while (true) { // main game loop

  if (initialPlayMsg) {
    let play21 = rlSync.question('Would you like to play a round?\n');

    if (play21 !== 'y') {
      break;
    }
  }


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

  let dontFallThrough = true;

  initialPlayMsg = false;


  //player turn loop
  while (true) {
    clear();
    displayHands(dealerHand, playerHand, playerTotal);

    console.log("hit or stay?\n");
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

    console.log('You busted, dealer won\n');
    let playAgain = rlSync.question('Would you like to play again?\n');
    if (playAgain !== 'y') {
      break;
    } else {
      dontFallThrough = false;
      clear();
    }

    // probably end the game? or ask the user to play again?
  } else {
    console.log("You chose to stay!\n");  // if player didn't bust, must have stayed to get here
    //also if player chose to stay, it's now the dealer's turn
  }
  //dealer turn while loop
  while (dontFallThrough) {
    if (dealerTotal >= 17) break; // this break is the equivalent of 'stay'


    dealerHand.push(cardGenerator()); // this is the equivalent of 'hit'
    deleteGenCardFromDeck(dealerHand[dealerHand.length - 1], deckOfRound);

    dealerTotal = calculateHandTotal(dealerHand); // this is the equivalent of 'hit'

  }//end of dealer turn loop


  if (busted(dealerTotal)) {
    console.log('Dealer busted, you win!\n');

    if (!playAgain()) break;

  } else if (dontFallThrough) {
    displayResult(playerTotal, dealerTotal);

    if (!playAgain()) break;
  }

}//end of main game loop

console.log('\nThanks for playing 21!');