// Rules of Twenty-One
// - Deck: Start with std 52-card deck
// - Goal: Get as close to 21 as possible without going over (bust = you lose)
// - Setup: Two participants, dealer and player, are both dealt a hand of two
// cards. The player can se own cards and ONE of dealer's cards.
// - Card values:
//  - 2-10: face value
//  - Jack, Queen, King: 10
//  - Ace: 11 if total sum of cards doesn't exceed 21 (including the Ace),
// 1 otherwise.
// - Player turn: Player always goes first
//  - Hit (dealth another card) or stay (no new card)
//  - Player can hit as many times as (s)he wants
//  - Turn is over when player stays
//  - Game is over if the player busts (player loses, dealer wins)
// - Dealer turn: Hit until total is at least 17, stay if total exceeds 17
//  - If dealer busts, player wins
// - Comparing cards: When both dealer and player stays, they compare cards.
//  - The winner is the one with the highest value

// QUESTIONS
// - What if equal values? Is it a draw?
// - Which dealer card should be displayed? Random?
// - What if dealer has more than two cards? Should all but one be displayed?

// PSEUDOCODE
// High-level
// 1. Initialize deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
//    - Repeat until bust or stay
// 4. If player busts, dealer wins
// 5. Dealer turn: hit or stay
//    - hit until total >= 17
// 6. If dealer busts, player wins
// 7. Compare cards and declare winner

// Datastructures
// - Deck: object with arrays
// - Player's cards: object with cards and currentTotal
// - Dealer's cards: object with cards and currentTotal

// Calculate (update) Aces' values
// Each time an Ace is dealt:
// Sum up all cards but Aces (cardsTotal)
// For each Ace (initial value is 11)
// IF cardsTotal + 11 exceeds 21, then set Ace value to 1
// Add Ace value to cardsTotal

// Deal cards
// - Generate random number
// - Use random number as index to access card
//  - Add card to player or dealer's hand: card as key, card value as value
//  - Remove card from deck array

// setCardValue:
//  - IF card is 2-10, value is card
//  - IF card is not Ace, value is 10
//  - ELSE value is 11

// Player turn
// - Ask if hit or stay
//  - IF hit, deal card
//    - Calculate cardTotal
//    - IF cardTotal > 21 => game over (lose)
// - IF stay, end turn

// Dealer turn
// - Deal card
//    - Calculate cardTotal
//    - IF cardTotal > 21 => game over (lose)
// - Repeat until cardTotal> 17 => stay (end turn)

// CODE
// Setup
const read = require("readline-sync");

const PLAYER = { cards: [], total: 0, score: 0 };
const DEALER = { cards: [], total: 0, score: 0 };
const BUST_LIMIT = 21;
const DEALER_LIMIT = 17;
const ACE_VALUE = 11;
const FACE_CARD_VALUE = 10;
const ACE_CORRECTION_VALUE = 10;
const SCORE_TO_WIN = 3;
const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const CARD_VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

const RULES =
  "RULES:\n" +
  `The aim of the game is to get as close to ${BUST_LIMIT} as possible` +
  "without going over (bust).\n" +
  "1. You and the dealer are dealt two carsd each.\n" +
  "2. Your turn: keep getting another card (hit) until you bust or choose to stay.\n" +
  "3. Dealer turn: dealer may hit until dealer busts or chooses to stay.\n" +
  "4. The game ends if someone busts or both choose to stay.\n" +
  "5. Declaring the winner:\n" +
  "   - If you bust, the dealer wins.\n" +
  "   - If the dealer busts, you win.\n" +
  `   - Otherwise, the one with a card total closest to ${BUST_LIMIT} wins.\n` +
  "   - If your card totals are  equal, it's a draw.\n" +
  "\n Calculating card value total:\n" +
  "  - Value 2-10: face value\n" +
  "  - Jack, Queen, King: 10\n" +
  `  - Ace: 11, unless it pushes the card total over ${BUST_LIMIT}; then it's 1.\n`;

function newDeck() {
  let cards = [];

  SUITS.forEach((suit) => {
    CARD_VALUES.forEach((value) => {
      cards.push({ suit: suit, value: value });
    });
  });
  return cards;
}

function displayWelcomeMessage() {
  console.log("Welcome to TWENTY-ONE!\n");
  console.log(RULES);
}

function total(hand) {
  let sum = 0;
  let cardValues = hand.map((card) => card.value);

  cardValues.forEach((value) => {
    if (value === "Ace") {
      sum += ACE_VALUE;
    } else if (["Jack", "Queen", "King"].includes(value)) {
      sum += FACE_CARD_VALUE;
    } else {
      sum += Number(value);
    }
  });

  // Correct for aces
  cardValues
    .filter((value) => value === "Ace")
    .forEach((_) => {
      if (sum > BUST_LIMIT) sum -= ACE_CORRECTION_VALUE;
    });

  return sum;
}

function listOfCards(hand) {
  let cardValues = hand.map((card) => card.value);
  let allButLastValue = cardValues.slice(0, cardValues.length - 1);
  let lastValue = cardValues.slice(cardValues.length - 1);
  let stringOfValues;
  if (allButLastValue.length < 2) {
    stringOfValues = `${allButLastValue} and ${lastValue}`;
  } else {
    stringOfValues = `${allButLastValue.join(", ")}, and ${lastValue}`;
  }

  return stringOfValues;
}

function displayStartingHands() {
  let valueOfDealersFirstCard = DEALER.cards[0].value;
  console.log(`Dealer was dealt: ${valueOfDealersFirstCard} and unknown card`);
  console.log(
    `You were dealt: ${listOfCards(PLAYER.cards)} (total: ${PLAYER.total})`
  );
}
function displayHand(participant) {
  if (participant === "Player") {
    console.log(
      `Your cards: ${listOfCards(PLAYER.cards)} (total: ${PLAYER.total})`
    );
  } else {
    console.log(
      `Dealer's cards: ${listOfCards(DEALER.cards)} (total: ${DEALER.total})`
    );
  }
}

function dealCard(deck) {
  let cardIndex = Math.floor(Math.random() * deck.length);
  let card = deck[cardIndex];
  deck.splice(cardIndex, 1);
  return card;
}

function pressEnterToContinue() {
  read.question("\n\n>> Press <Enter> to continue <<");
}

function displayTurn(participant) {
  console.clear();

  if (participant === "Player") {
    console.log("YOUR TURN\n");
    displayHand("Player");
  } else {
    console.log("DEALER'S TURN\n");
    displayHand("Dealer");
  }
}

function hit(participant, deck) {
  if (participant === "Player") {
    PLAYER.cards.push(dealCard(deck));
    PLAYER.total = total(PLAYER.cards);
  } else {
    DEALER.cards.push(dealCard(deck));
    DEALER.total = total(DEALER.cards);
  }
}

function displayHit(participant) {
  console.clear();

  let lastCardDealt;
  if (participant === "Player") {
    lastCardDealt = PLAYER.cards[PLAYER.cards.length - 1];
    console.log("YOUR TURN\n");
  } else {
    lastCardDealt = DEALER.cards[DEALER.cards.length - 1];
    console.log("DEALER'S TURN\n");
  }
  console.log(`${participant} hits --> ${lastCardDealt.value}\n`);
  displayHand(participant);
}

function playerTurn(deck) {
  while (PLAYER.total < BUST_LIMIT) {
    let answer = read.question("\nHit or stay (h/s)? ").toLowerCase();
    if (answer === "s") {
      displayTurn("Player");
      console.log(`\nYou stay with a total of ${PLAYER.total}\n`);
      break;
    } else if (answer === "h") {
      hit("Player", deck);
      displayHit("Player");
    } else {
      console.log("Invalid input.");
    }
  }
  if (PLAYER.total === BUST_LIMIT) {
    console.log(`\nYou've got ${BUST_LIMIT}, let's stay!`);
  }
}

function dealerTurn(deck) {
  while (DEALER.total <= DEALER_LIMIT) {
    pressEnterToContinue();
    console.clear();
    console.log("DEALER'S TURN\n");

    hit("Dealer", deck);
    displayHit("Dealer");
    // displayHand("Dealer");
  }

  if (DEALER.total < BUST_LIMIT) {
    console.log(`\nDealer stays with a total of ${DEALER.total}`);
  }
}

function detectResults() {
  if (PLAYER.total > BUST_LIMIT) {
    return "PLAYER_BUST";
  } else if (DEALER.total > BUST_LIMIT) {
    return "DEALER_BUST";
  } else if (PLAYER.total > DEALER.total) {
    return "PLAYER";
  } else if (PLAYER.total < DEALER.total) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function displayResults() {
  let result = detectResults();

  switch (result) {
    case "PLAYER_BUST":
      console.log(`You busted! --> DEALER WINS!\n`);
      break;
    case "DEALER_BUST":
      console.log(`Dealer busted! --> YOU WIN!\n`);
      break;
    case "PLAYER":
      console.log("YOU WIN!\n");
      break;
    case "DEALER":
      console.log("DEALER WINS!\n");
      break;
    case "TIE":
      console.log("IT'S A TIE!\n");
  }
}

function updateMatchScore() {
  let result = detectResults();
  switch (result) {
    case "PLAYER_BUST":
      DEALER.score += 1;
      break;
    case "DEALER_BUST":
      PLAYER.score += 1;
      break;
    case "PLAYER":
      PLAYER.score += 1;
      break;
    case "DEALER":
      DEALER.score += 1;
      break;
  }
}

function matchWinner() {
  let winner;
  if (PLAYER.score === SCORE_TO_WIN) {
    winner = "PLAYER";
  } else if (DEALER.score === SCORE_TO_WIN) {
    winner = "DEALER";
  }
  return winner;
}

function displayMatchScore() {
  console.log(`SCORE: Player: ${PLAYER.score}  Dealer: ${DEALER.score}`);
}

function displayRoundSummary() {
  console.log("\n========================================");
  displayResults();
  displayHand("Dealer");
  displayHand("Player");
  console.log("");
  displayMatchScore();
  console.log("========================================");
}

function displayMatchWinner() {
  console.clear();
  console.log("\n**********************************");
  console.log("MATCH OVER\n");
  displayMatchScore();
  console.log(`\n${matchWinner()} is the Match winner!!`);
  console.log("**********************************\n");
}

function playAgain() {
  let again;
  while (true) {
    again = read.question("\nDo you want to play again (y/n)? ");
    if (["y", "yes"].includes(again.toLowerCase())) return "y";
    if (["n", "no"].includes(again.toLowerCase())) return null;
    console.log("Incorrect input.");
  }
}

// Match loop
let matchRound = 1;
while (true) {
  let round = 1;
  PLAYER.score = 0;
  DEALER.score = 0;

  console.clear();
  if (matchRound === 1) {
    displayWelcomeMessage();
  } else {
    console.log("ONE MORE TIME!");
  }
  console.log("\n*** Let's play best out of 5 ***\n\n");

  // Game loop
  while (!matchWinner()) {
    pressEnterToContinue();
    console.clear();
    console.log(`*** Round ${round} ***\n`);

    let deck = newDeck();
    PLAYER.cards = [dealCard(deck), dealCard(deck)];
    DEALER.cards = [dealCard(deck), dealCard(deck)];

    PLAYER.total = total(PLAYER.cards);
    DEALER.total = total(DEALER.cards);

    console.log("DEALING CARDS...\n");
    displayStartingHands();
    pressEnterToContinue();

    while (true) {
      displayTurn("Player");
      playerTurn(deck);
      if (PLAYER.total > BUST_LIMIT) break;

      pressEnterToContinue();
      displayTurn("Dealer");
      dealerTurn(deck);
      break;
    }

    updateMatchScore();
    displayRoundSummary();

    round++;
  }

  pressEnterToContinue();
  displayMatchWinner();

  matchRound += 1;
  if (!playAgain()) break;
}

console.log("Thanks for playing Twenty-One!");