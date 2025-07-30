const rlsync = require('readline-sync');

const INITIAL_HAND_SIZE = 2;

class Card {
  constructor(suit, rank, points) {
    //STUB
    //What sort of state does a card need?
    //Rank? Suit? Points?
    this.suit = suit;
    this.rank = rank;
    this.points = points;
  }
}


class Deck {
  constructor() {
  //STUB
  //Whart sort of state does a deck need?
  //52 cards?
  //obviously, we need some data strucrture to keep track of cards
  //array, object, something else?
    this.reset();

  }

  reset() {
    let suits = ['♣', '♦', '♥', '♠'];
    let ranks = {2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
      Ace: 11, King: 10, Queen: 10, Jack: 10};

    this.cards = [];

    suits.forEach(suit => {


      for (let rank in ranks) {
        this.cards.push(new Card(suit, rank, ranks[rank]));
      }
    });

  }

  randomIdxGenerator() {
    return Math.floor(Math.random() * this.cards.length);
  }

   removeCard(randomIdx) {
    return this.cards.splice(randomIdx, 1)[0];
  }

  deal() {
    //STUB
    // does the dealer or the deck deal? // I think the dealer should
  }

}

class Participant {
  constructor() {
    //STUB
    // What sort of state does a participant need?
    //Score? Hand? Amount of money available?
    // What else goes here? All the redundant behaviours from Player and Dealer?

    this.money = 0;
    this.hand = [];
    this.handPoints = 0; // do we need this?

  }

  calcHandTotal() {
    let points = 0;

    this.hand.forEach(card => {
      //console.log(card); // for testing
      if (card.rank === 'Ace') {
        if ((points + card.points) > 21) {
          points += 1;
          return;
        }
      }

      points += card.points;
    });

    return points;
  }

  hit(cards) {
    //STUB
    this.hand.push(cards.pop());
  }

  stay() {
    console.log(``);
  }

  isBusted() {
    //STUB
  }

  displayHand() {
    console.log(`${this.name}'s hand:`, this.hand);
  }

  displayHandTotal() {
    console.log(`${this.name}'s points total is: ${this.calcHandTotal()}`);
  }


}

class Player extends Participant {
  constructor() {
    //STUB
    //What sort of state does a player need?
    //Score? Hand? Amount of money available?
    super();
    this.name = 'Player';
  }

  

  // hit() {
  //   //STUB
  // }

  stay() {
    console.log('You\'ve chosen to stay');
  }

  // isBusted() {
  //   //STUB
  // }

  score() { // do we need this?
    //STUB
  }

}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    //STUB
    //What sort of state does a dealer need?
    //Score? Hand? Deck of cards? Bow tie?
    super();
    this.name = 'Dealer';
  }

  // hit() {
  //   //STUB
  // }

  stay() {
    console.log('Dealer stays');
  }

  // isBusted() {
  //   //STUB
  // }

  score() { // do we need this?
    //STUB
  }

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }

  deal(deck, playerHand, dealerHand) {
    //STUB
    //Does the dealer or the deck deal? - I think the dealer should
    let randomIdx;

    for (let idx = 0; idx < INITIAL_HAND_SIZE; idx++) {
      randomIdx = deck.randomIdxGenerator();
      playerHand.push(deck.removeCard(randomIdx));

    }

    for (let idx = 0; idx < INITIAL_HAND_SIZE; idx++) {
      randomIdx = deck.randomIdxGenerator();
      dealerHand.push(deck.removeCard(randomIdx));
    }


    console.log(playerHand, dealerHand);

    //console.log(game);

  }

  initialDealerHandDisplay() {
    console.log('Dealer\'s Hand:', this.hand[0], {suit: '**', rank: '**', points: '**'});
  }

}

class TwentyOneGame {
  constructor() {
    //STUB
    //What sort of state does the game need?
    //A deck? Two participants?
    this.deck = new Deck();
    this.dealer = new Dealer();
    this.player = new Player();
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
    //console.log(this.deck.cards); // for testing, remove
    //console.log(this.deck.cards.length); // for testing

    this.dealer.deal(this.deck, this.player.hand, this.dealer.hand);
    //console.log('player hand points total is', this.player.calcHandTotal());
    this.dealer.initialDealerHandDisplay();
    this.player.displayHand();
    this.player.displayHandTotal();


  }

  dealCards() {
    //STUB
  }

  showCards() {
    //STUB
  }

  playerTurn() {
    //STUB
    let validChoices = ['h', 's'];
    let answer = rlsync.question('hit or stay?');

    while (!validChoices.includes(answer[0])) {
      answer = rlsync.question('sorry, that\'s not a valid choice - please choose hit or stay');
    }

    if (answer[0] === 'h') {
      this.player.hit(this.deck.cards);
      console.log(this.player.hand);
    } else {
      this.player.stay();
    }

  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    //STUB
    console.log('Welcome to 21!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing 21. Goodbye!');
  }

  displayResult() {
    //STUB
  }
}

let game = new TwentyOneGame();

game.start();


