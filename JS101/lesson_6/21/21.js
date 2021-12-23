const deck = {
  Hearts: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Diamonds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Clubs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Spades: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
};


const deckKeysArr = Object.keys(deck);

const NUMBER_OF_RANKS = 12;

let currentTotal;

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
function calculateHandTotal(hand) {
  let total = 0;

  hand.forEach(card => {
    total += calculateCardTotal(card);
  });
  return total;
}

//round starts here - should you display a welcome message?


const playerHand = handGenerator();

const dealerHand = handGenerator();

let playerTotal = calculateHandTotal(playerHand);

let dealerTotal = calculateHandTotal(dealerHand);
