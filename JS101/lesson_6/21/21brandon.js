// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - repeat until bust or stay
// 4. If player bust, dealer wins.
// 5. Dealer turn: hit or stay
//    - repeat until total >= DEALER_MIN
// 6. If dealer busts, player wins.
// 7. Compare cards and declare

const readline = require('readline-sync');
const DIVIDER = '------------------------------------------------';
const MAX_SCORE = 21;
const DEALER_MIN = 17;
const GAMES_TO_WIN = 3;
const SCORE = {player: 0, dealer: 0, Series: 'Best 3/5'};

// Game Engine

while (true) {

  let deck = initializeDeck();
  while (true) {

    if (deck.length < 13) deck = initializeDeck();

    shuffle(deck);

    let dealerInitialHand = dealerTurn(deck);
    displayGameplay(null, dealerInitialHand, null);

    let playerHand = playerTurn(deck, dealerInitialHand);
    let dealerFinalHand = dealerTurn(deck, dealerInitialHand);
    displayGameplay(playerHand, null, dealerFinalHand);

    let finalTotals = calculateTotals(playerHand, dealerFinalHand);

    let winner = calculateWinner(finalTotals);
    updateScore(winner);

    displayGameplay(playerHand, null, dealerFinalHand);
    displayTotals(finalTotals);

    if (WinnerOfMatch(winner)) {
      displayWinnerOfMatch(winner);
      resetScore();
    } else {
      displayWinner(winner);
    }

    if (convertedChoice(playAgain()) === 'no') break;
  }

  break;
}

// Nested functions

// Deals cards to player
function dealCards(deck) {
  return shuffle(deck).pop();
}

// Calculates the total sum of the cards based on weight
function cardTotal(cards) {
  return cards.reduce((sum, card) => {
    if (card.value === 'A' && card.weight + sum > MAX_SCORE) card.weight = 1;
    return sum + card.weight;
  }, 0);
}

// Calculates whether or not someone has busted
function bust(total) {
  return total > MAX_SCORE;
}

// Adds arrow to prompt for player
function prompt(string) {
  return console.log('=> ' + string);
}

// Main functions

// Initalizes the deck for the game
function initializeDeck() {
  const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
  const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const deck = [];

  suits.forEach(suitElement => {
    values.forEach(valueElement => {
      let weightOfCard;

      if (/[JQK]/g.test(valueElement)) weightOfCard = 10;
      else if (valueElement === 'A') weightOfCard = 11;
      else weightOfCard = Number(valueElement);

      let card = {
        suit: suitElement,
        value: valueElement,
        weight: weightOfCard
      };

      deck.push(card);
    });
  });
  return deck;
}

// Shuffles the deck for the game
function shuffle(deck) {
  for (let idx = deck.length - 1; idx > 0; idx--) {
    let randomIdx = Math.floor(Math.random() * (idx + 1));
    [deck[idx], deck[randomIdx]] = [deck[randomIdx], deck[idx]];
  }

  return deck;
}

// Function for dealers turn
function dealerTurn(deck, dealerInitial = null) {
  let hand = [];
  let total;

  while (true) {

    if (dealerInitial) {

      hand = dealerInitial;

      if (cardTotal(hand) >= DEALER_MIN || total) break;

      while (cardTotal(hand) < DEALER_MIN) {
        hand.push(dealCards(deck));
      }

    }

    if (hand.length < 2) hand.push(dealCards(deck));

    break;
  }

  return hand;
}

// Displays the dealers hand
function displayDealerHand(dealerInitial = null, dealerFinal = null) {
  if (dealerInitial) {
    console.log(DIVIDER);
    console.log('\nDealer hand: \n');
    console.log(dealerInitial[0]);
    console.log('\n');
    console.log(`Dealer total: ${cardTotal(dealerInitial.slice(0,1))}`);
    console.log(DIVIDER);
  } else {
    console.log(DIVIDER);
    console.log('\nDealer hand: \n');
    console.log(dealerFinal);
    console.log('\n');
    console.log(`Dealer total: ${cardTotal(dealerFinal)}`);
    console.log(DIVIDER);
  }

}

// Function for players turn
function playerTurn(deck, dealerInitial) {
  let hand = [];
  let total;

  while (true) {

    if (hand.length < 2) hand.push(dealCards(deck));

    hand.push(dealCards(deck));

    total = Number(cardTotal(hand));

    displayGameplay(hand, total, dealerInitial);

    if (bust(total) || total ===  MAX_SCORE) break;

    let answer = readline.question(prompt("(h)it or (s)tay?\n"));
    while (!playerChoiceValid(answer)) {
      prompt('Whoops! Please enter a valid choice...');
      answer = readline.question();
    }

    if (convertedChoice(answer) === 'stay') break;
  }

  if (bust(total)) prompt('You busted!');
  else prompt('You chose to stay!');
  return hand;
}

// Displays the hand of the player
function displayPlayerHand(hand, total) {
  console.log('\nYour hand: \n');
  console.log(hand);
  console.log(`\n\nPlayer total: ${total}`);
  console.log(DIVIDER);
}

// Displays the current state of gameplay
function displayGameplay(playerHand, dealerInitial, dealerFinal = null) {
  console.clear();
  displayMainUI();

  if (dealerFinal) displayDealerHand(null, dealerFinal);
  else displayDealerHand(dealerInitial);

  if (playerHand) displayPlayerHand(playerHand, cardTotal(playerHand));
}

// Displays the score of the series
function displayMainUI() {
  console.log(`Series: ${SCORE.Series}`);
  console.log(DIVIDER);
  console.log(`Dealer Score: ${SCORE.dealer}`);
  console.log(`Player Score: ${SCORE.player}`);
}

// Calculates the final weight totals for each player
function calculateTotals(playerFinal, dealerFinal) {
  let playerTotal = cardTotal (playerFinal);
  let dealerTotal = cardTotal(dealerFinal);
  return [playerTotal, dealerTotal];
}

// Displays the total card weights of the player and dealer
function displayTotals(finalScores) {

  let [playerTotal, dealerTotal] = finalScores;

  if (bust(playerTotal)) playerTotal = 'Busted';
  if (bust(dealerTotal)) dealerTotal = 'Busted';

  console.log(`The dealer's final total: ${dealerTotal}`);

  console.log(`\nThe player's final total: ${playerTotal}`);

  console.log(DIVIDER);
}

// Calculates the winner of the game
function calculateWinner(totalScores) {
  let [playerTotal, dealerTotal] = totalScores;
  let winner = {dealer: dealerTotal, player: playerTotal};
  let [dealer, player] = Object.keys(winner);

  if (bust(winner['player'])) return dealer;
  if (bust(winner['dealer'])) return player;

  if (winner['dealer'] > winner['player']) return dealer;
  if (winner['dealer'] < winner['player']) return player;

  return 'draw';
}

// Updates the score of the series
function updateScore(winner) {
  SCORE[winner] += 1;
}

// Resets the score of the series
function resetScore() {
  for (let players in SCORE) {
    SCORE[players] = 0;
  }
}

// Displays the winner of the game
function displayWinner(winner) {
  if (winner === 'draw') prompt('It is a draw!');
  else prompt(`The winner of the game is the ${winner}!\n`);
}

// Returns the winner of the series
function WinnerOfMatch(winner) {
  return SCORE[winner] === GAMES_TO_WIN;
}

// Displays the winner of the match
function displayWinnerOfMatch(winner) {
  console.log(`The ${winner} is the winner of the series!\n`);
}

// Asks player to play again
function playAgain() {
  prompt('Would you like to play again? (y)es or (n)o\n');
  let playAgain = readline.question();

  while (!playAgainValid(playAgain)) {
    prompt('Whoops...Please enter a valid choice!');
    playAgain = readline.question();
  }
  return playAgain;
}

// Validation functions

// Converts abbreviations to correct choices
function convertedChoice(choice) {
  choice = choice.trim().toLowerCase();

  switch (choice) {
    case 'h':
      choice = 'hit';
      break;
    case 's':
      choice = 'stay';
      break;
    case 'y':
      choice = 'yes';
      break;
    case 'n':
      choice = 'no';
      break;
  }

  if (choice) return choice;
  return null;
}

// Checks for valid player choice
function playerChoiceValid(choice) {
  return convertedChoice(choice) === 'stay' || convertedChoice(choice) === 'hit';
}

// Validates response to play again question
function playAgainValid(choice) {
  return convertedChoice(choice) === 'yes' || convertedChoice(choice) === 'no';
}