let deck = {
  Hearts: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Diamonds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Clubs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  Spades: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
};

let playerCards = [['Hearts', 2], ['Clubs', 'Jack']];

let test = deck['Hearts'][10];

//console.log(test);

let emptyDeck = [[], []];

const deckKeysArr = Object.keys(deck);

function suiteGenerator() {
  return Math.floor(Math.random() * deckKeysArr.length);
}


let deckSuite = deckKeysArr[suiteGenerator(deckKeysArr)];

//console.log(`this is the deckSuite: ${deckSuite}`); // for testing

function rankGenerator() {
  return Math.floor(Math.random() * 12); // 12 is a magic number, turn into a constant
}

console.log(rankGenerator());

let rankIdx = rankGenerator();

console.log(`this is the rankIdx: ${rankIdx}`); // for testing

emptyDeck[0][0] = deckSuite;
emptyDeck[0][1] = deck[deckSuite][rankIdx];

emptyDeck[1][0] = deckSuite;
emptyDeck[1][1] = deck[deckSuite][rankIdx];  // this process needs be extracted to a function to generate different cards - DONE
