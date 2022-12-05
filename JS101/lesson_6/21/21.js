const deck = {
  '♥': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  '♦': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  '♣': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  '♠': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
};

const { clear, timeEnd } = require('console');
let rlSync = require('readline-sync');

const deckKeysArr = Object.keys(deck);

const NUMBER_OF_RANKS = 13;

const  NUM_GAMES_TO_WIN = 3;

const VALID_CHOICES = ['y', 'n', 'yes', 'no'];

const VALID_TURN_CHOICES = ['h', 's', 'hit', 'stay'];

function cloneDeck(origDeck) {
  let clonedDeck = {};

  let deckEntries = Object.entries(origDeck);

  deckEntries.forEach(entry => {
    let [key, value] = entry;

    clonedDeck[key] = value.slice();
  });

  return clonedDeck;

}


function suiteGenerator() {
  return Math.floor(Math.random() * deckKeysArr.length);
}

function rankGenerator() {
  return Math.floor(Math.random() * NUMBER_OF_RANKS);
}

function cardGenerator() {
  let card = [];

  card[0] = deckKeysArr[suiteGenerator()];
  card[1] = deck[card[0]][rankGenerator()];

  return card;

}

function deleteGenCardFromDeck(cardToDelete, deckOfRound) {
  let [suite, value] = cardToDelete;

  let suiteArray = deckOfRound[suite];
  let indexOfCardToDelete = suiteArray.indexOf(value);

  suiteArray.splice(indexOfCardToDelete, 1);
}


function parseNonAceValueFromCard(argValue) {
  let convertedArg = Number(argValue);

  if (convertedArg) {
    return convertedArg;
  } else {
    return 10;
  }
}


function parseAceValueFromCard(total) {
  total += 11;

  if (total > 21) {
    return 1;
  } else {
    return 11;
  }
}

function calculateCardTotal(card, total) {
  let cardValue = card[1];
  let parsedCardValue;

  if (cardValue !== 'Ace') {
    parsedCardValue = parseNonAceValueFromCard(cardValue);
  } else {
    parsedCardValue = parseAceValueFromCard(total);
  }

  return parsedCardValue;

}

//this is the main calculate total function
function calculateHandTotal(hand) {

  let total = 0;

  hand.forEach(card => {
    total += calculateCardTotal(card, total);
  });
  return total;
}

function busted(currentTotal) {
  return currentTotal > 21;
}


//the following are the card functions for visual rendering - I had to do them
//as individual functions because console.log doesn't allow for any verticality
//for any card but the first one, (it makes the newer card display below
//the previous one) thus cannot be used to loop through each player's hand
//and render cards side-by-side, which I would have preferred
//as it's more efficient, and would not require multiple render functions.
// it would also have been able to cope theoretically with any number of cards
//being rendered. However in playtesting there was seldom a need for
//more than five, so that's what I've gone with to save time


//this is for padding the value for card visual render
function padVal(value) {

  if (typeof value === 'number' && value !== 10) {
    value += ' ';
  } else if (typeof value === 'string') {
    value = value[0] + ' ';
  }

  return value;

}

function render2Cards(playerHand) {

  let [suite, val, suite1, val1] = [...playerHand].flat();

  val = padVal(val);
  val1 = padVal(val1);

  let twoCard =
` -------        -------  
 |${val}     |      |${val1}     |
 |       |      |       |
 |   ${suite}   |      |   ${suite1}   |
 |       |      |       |
 |     ${val}|      |     ${val1}|
  -------        -------`;

  return twoCard;
}

function render3Cards(playerHand) {

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
}

function render4Cards(playerHand) {

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


function render5Cards(playerHand) {

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
}


function renderDealerCards(dealerHand) {
  let [suite, val] = dealerHand[0];

  val = padVal(val);

  let dealerCards =
   ` -------        ------- 
 |${val}     |      | / / / |
 |       |      |/ / / /|
 |   ${suite}   |      | / / / |
 |       |      |/ / / /|
 |     ${val}|      | / / / |
  -------        -------`;

  return dealerCards;
}

const renderCardArr = [render2Cards, render3Cards, render4Cards, render5Cards];


function displayHands(dealerCards, playerCards, playerSum, endOfRound) {


  console.log(`Your hand is:\n ${renderCardArr[playerCards.length - 2](playerCards)}\n`);
  console.log(`Note, your hand's total is ${playerSum[0]}\n \n`);

  if (!endOfRound) {
    console.log(`Dealer's hand is: \n ${renderDealerCards(dealerCards)}\n`);
  } else {
    console.log(`Dealer's hand is: \n ${renderCardArr[dealerCards.length - 2](dealerCards)}\n`);
  }
}

function calcRoundResult(totalOfPlayer, totalOfComputer) {

  if (totalOfPlayer > 21) {
    return 'player bust';
  } else if (totalOfComputer > 21) {
    return 'computer bust';
  } else if (totalOfPlayer > totalOfComputer) {
    return 'player';
  } else if (totalOfComputer > totalOfPlayer) {
    return 'computer';
  } else {
    return 'tie';
  }

}

function displayRoundResult(totalOfPlayer, totalOfComputer) {

  switch (calcRoundResult(totalOfPlayer[0], totalOfComputer[0])) {
    case 'player bust' :
      console.log('You busted, dealer won the round\n');
      break;

    case 'computer bust' :
      console.log('Dealer busted, you won the round!\n');
      break;

    case 'player' :
      console.log('You won the round!\n');
      break;

    case 'computer' :
      console.log('Dealer won the round\n');
      break;

    case 'tie' :
      console.log('Round was a tie\n');
      break;

  }
}

function playRoundAgain() {
  let ans = rlSync.question('Would you like to play another round?\n');

  while (!VALID_CHOICES.includes(ans.toLowerCase())) {
    ans = rlSync.question('Please enter a valid choice, (y)es or (n)o\n');
  }
  return ans[0].toLowerCase() === 'y';
}


function playMatchAgain() {
  let ans = rlSync.question('Would you like to play another match?\n');

  while (!VALID_CHOICES.includes(ans.toLowerCase())) {
    ans = rlSync.question('Please enter a valid choice, (y)es or (n)o\n');
  }
  return ans[0].toLowerCase() === 'y';
}

function displayMatchScore(playerPoints, dealerPoints) {
  console.log(`MATCH SCORE:-  Player: ${playerPoints}  Dealer: ${dealerPoints}\n`);
}

function dealCards(deckOfRound) {
  let hand = [];

  hand[0] = cardGenerator();
  deleteGenCardFromDeck(hand[0], deckOfRound);

  hand[1] = cardGenerator();
  deleteGenCardFromDeck(hand[1], deckOfRound);

  return hand;

}

function playerTurn(dealerHand, playerHand, playerTotal, roundEnd, roundDeck) {
  while (true) {
    clear();
    displayHands(dealerHand, playerHand, playerTotal, roundEnd);

    console.log("(h)it or (s)tay?\n");
    let answer = rlSync.question();

    while (!VALID_TURN_CHOICES.includes(answer.toLowerCase())) {
      answer = rlSync.question('Please enter a valid choice, (h)it or (s)tay\n');
    }

    if (answer[0] === 'h') {
      playerHand.push(cardGenerator());
      deleteGenCardFromDeck(playerHand[playerHand.length - 1], roundDeck);

      playerTotal[0] = [calculateHandTotal(playerHand)];
    }

    if (answer[0] === 's' || busted(playerTotal[0])) break;

  }

}

function dealerTurn(dealerTotal, dealerHand, roundDeck) {
  while (true) {
    if (dealerTotal >= 17) break; // this break is the equivalent of 'stay'


    dealerHand.push(cardGenerator()); // this is the equivalent of 'hit'
    deleteGenCardFromDeck(dealerHand[dealerHand.length - 1], roundDeck);

    dealerTotal[0] = calculateHandTotal(dealerHand); // this is the equivalent of 'hit'

  }
}

function detectMatchWinner(playerPoints, dealerPoints) {
  return playerPoints === NUM_GAMES_TO_WIN || dealerPoints === NUM_GAMES_TO_WIN;
}

function displayMatchWinner(playerPoints) {
  if (playerPoints === NUM_GAMES_TO_WIN) {
    console.log('**Congratulations, you won the match!**\n\n');
  } else {
    console.log('Commiserations, you lost the match :(\n\n');
  }
}


let initialPlayMsg = true;

console.log('\n***welcome to 21!***\n');


while (true) {//main match loop
  if (initialPlayMsg) {
    let play21 = rlSync.question('Would you like to play a match?\n');

    while (!VALID_CHOICES.includes(play21.toLowerCase())) {
      play21 = rlSync.question('Please enter a valid choice, (y)es or (n)o\n');
    }

    if (play21[0] !== 'y') {
      break;
    }

    initialPlayMsg = false;
  }

  let matchWon;

  let playerScore = 0;
  let dealerScore = 0;


  while (!matchWon) { // round loop


    let roundDeck = cloneDeck(deck);

    let playerHand = dealCards(roundDeck);

    let dealerHand = dealCards(roundDeck);


    let playerTotal = [calculateHandTotal(playerHand)];

    let dealerTotal = [calculateHandTotal(dealerHand)];

    let dealerPlays = true;


    let roundEnd = false;


    playerTurn(dealerHand, playerHand, playerTotal, roundEnd, roundDeck);

    if (busted(playerTotal[0])) {
      roundEnd = true;
      dealerScore += 1;
      dealerPlays = false;

    // probably end the game? or ask the user to play again?
    } else {
      console.log("You chose to stay!\n");  // if player didn't bust, must have stayed to get here
    //also if player chose to stay, it's now the dealer's turn
    }

    if (dealerPlays) {
      dealerTurn(dealerTotal, dealerHand, roundDeck);
    }


    if (busted(dealerTotal)) {
      roundEnd = true;
      playerScore += 1;

    } else if (dealerPlays) { // if dealer plays, means both players will have played
      roundEnd = true;

      switch (calcRoundResult(playerTotal[0], dealerTotal[0])) {
        case 'player' : playerScore += 1;
          break;
        case 'computer' : dealerScore += 1;
          break;
      }

    }

    clear();

    displayHands(dealerHand, playerHand, playerTotal, roundEnd);


    displayRoundResult(playerTotal, dealerTotal);


    displayMatchScore(playerScore,dealerScore);

    if (detectMatchWinner(playerScore,dealerScore)) {
      displayMatchWinner(playerScore);
      matchWon = true;
    } else if (!playRoundAgain()) {
      break;
    }


  }//end of round loop

  if (!playMatchAgain()) break;
}//end of match loop

console.log('\nThanks for playing 21!');