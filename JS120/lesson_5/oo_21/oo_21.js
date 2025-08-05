const rlsync = require('readline-sync');

const INIT_HAND_SIZE = 2;

const INIT_PLAYER_MONEY = 5;


// const VALID_CHOICES = ['h', 's'];

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
  //obviously, we need some data structure to keep track of cards
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


    this.hand = [];
    this.handTotal = 0; // do we need this?

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
    this.hand.push(cards.pop());
  }

  stay() {
    console.log(`${this.name} has decided to stay\n`);
  }

  isBusted() {
    return this.handTotal > 21;
  }

  updateHandTotal() {
    this.handTotal = this.calcHandTotal();
  }

  displayHand() {
    console.log(`${this.name}'s hand:`, this.hand);
  }

  displayHandTotal() {
    console.log(`${this.name}'s points total is: ${this.calcHandTotal()}\n`);
  }


}

class Player extends Participant {
  constructor() {
    //STUB
    //What sort of state does a player need?
    //Score? Hand? Amount of money available?
    super();
    this.name = 'Player';
    this.money = INIT_PLAYER_MONEY;
  }


  // hit() {
  //   //STUB
  // }

  // stay() {
  //   console.log('You\'ve chosen to stay');
  // }

  // isBusted() {
  //   //STUB
  // }

  // score() { // do we need this?
  //   //STUB
  // }

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

  // stay() {
  //   console.log('Dealer stays');
  // }

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

    //Does the dealer or the deck deal? - I think the dealer should
    let randomIdx;

    for (let idx = 0; idx < INIT_HAND_SIZE; idx++) {
      randomIdx = deck.randomIdxGenerator();
      playerHand.push(deck.removeCard(randomIdx));

    }

    for (let idx = 0; idx < INIT_HAND_SIZE; idx++) {
      randomIdx = deck.randomIdxGenerator();
      dealerHand.push(deck.removeCard(randomIdx));
    }


    //console.log(playerHand, dealerHand);

    //console.log(game);

  }

  displayInitialHand() {
    console.log('Dealer\'s Hand:', [this.hand[0], {suit: '**', rank: '**', points: '**'}]);
  }

}

class TwentyOneGame {
  //static INITIAL_HAND_SIZE = 2;

  static VALID_ROUND_CHOICES = ['h', 's'];

  static VALID_PLAYAGAIN_CHOICES = ['y', 'n'];

  static ROUND_MONEY = 1;

  constructor() {
    //STUB
    //What sort of state does the game need?
    //A deck? Two participants?
    this.deck = new Deck();
    this.dealer = new Dealer();
    this.player = new Player();
    this.bustedPlayer = null;
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    //this.displayPlayerRoundHands();
    // this.playerTurn();
    // this.displayDealerRoundHand();
    // this.dealerTurn();
    // this.displayDealerRoundHand();// I put this in for debugging - remove?
    //this.playOneRound();
    this.playMatch();
    console.log('player money is', this.player.money); // debugging
    //console.log('dealer points total is', this.dealer.calcHandTotal());//debugging
    //this.displayDealerRoundHand(); // for testing - remove?
    this.displayResult();
    this.displayGoodbyeMessage();

    // this.player.displayHandTotal();
    // this.dealer.displayHandTotal();
    this.displayDealerRoundHand();


  }

  dealCards() {
    this.dealer.deal(this.deck, this.player.hand, this.dealer.hand);
  }

  displayDealerRoundHand() {
    //this.player.displayHand();
    this.dealer.displayHand();
    this.dealer.displayHandTotal();
  }

  displayPlayerRoundHands() {
    this.dealer.displayInitialHand();
    this.player.displayHand();
    this.player.displayHandTotal();
  }

  playerTurn() {

    let answer;

    while (true) {
      //console.clear();
      this.displayPlayerRoundHands();
      answer = rlsync.question('hit or stay?\n').toLowerCase();

      while (!TwentyOneGame.VALID_ROUND_CHOICES.includes(answer[0])) {
        answer = rlsync.question('sorry, that\'s not a valid choice - please choose hit or stay\n');
      }

      if (answer[0] === 'h') {
        this.player.hit(this.deck.cards);
        this.player.updateHandTotal();
        if (this.player.isBusted()) {
          this.bustedPlayer = 'Player';
          break;
        }

      } else {
        this.player.stay();
        break;
      }

    }

  }

  dealerTurn() {
    //console.clear();
    this.displayDealerRoundHand();
    while (this.dealer.calcHandTotal() < 17) {
      this.dealer.hit(this.deck.cards);
      this.dealer.updateHandTotal();
      //console.clear();
      this.displayDealerRoundHand();
      if (this.dealer.isBusted()) {
        //console.log(`${this.dealer.name} busted, ${this.calcOpposingPlayer(this.dealer)} won`);
        // this.displayBustedOutcome(this.dealer);
        // this.processRoundMoney(this.calcOpposingPlayer(this.dealer));
        this.bustedPlayer = 'Dealer';
        break;
      }
    }
  }

  displayWelcomeMessage() {
    console.log('Welcome to 21!');
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing 21. Goodbye!');
  }

  displayResult() {
    //STUB
  }

  calcOpposingPlayer(currPlayer) {
    return currPlayer.name === 'Player' ? 'Dealer' : 'Player';
  }

  // playOneRound() { // older version, get rid
  //   this.playerTurn();
  //   if (!this.player.isBusted()) {
  //     this.dealerTurn();
  //     if (!this.dealer.isBusted()) {
  //      // this.calcRoundOutcome();
  //       //console.log('output of calcRoundOutcome:', this.calcRoundOutcome()); // for debugging
  //       this.processRoundMoney(this.calcRoundOutcome());
  //     }
  //   }
  // }

  playOneRound() {
    this.playerTurn();
    if (this.bustedPlayer !== 'Player') {
      this.dealerTurn();
      if (this.bustedPlayer !== 'Dealer') {
        //no one busted clause
        this.displayNonBustedOutcome(this.calcRoundOutcome());
        this.processRoundMoney(this.calcRoundOutcome());
      } else {
        //dealer busted clause
        this.displayBustedOutcome(this.dealer);
        this.processRoundMoney(this.calcOpposingPlayer(this.dealer));

      }
    } else {
      //player busted clause
      this.displayBustedOutcome(this.player);
      this.processRoundMoney(this.calcOpposingPlayer(this.player));
    }
  }

  calcRoundOutcome() { //if nobody busts during a round
    if (this.player.calcHandTotal() === this.dealer.calcHandTotal()) {
      return 'draw';
    } else if (this.player.calcHandTotal() > this.dealer.calcHandTotal()) {
      return 'Player';
    } else {
      return 'Dealer';
    }
  }

  displayBustedOutcome(participant) {
    console.log(`${participant.name} busted, ${this.calcOpposingPlayer(participant)} won`);
  }

  displayNonBustedOutcome(outcome) {
    switch (outcome) {
      case 'draw' : {
        console.log('Round was a draw. Boring');
        break;
      } case 'Player' : {
        console.log('Player won the round on points');
        break;
      } case 'Dealer' : {
        console.log('Dealer won the round on points');
        break;
      }
    }
  }

  processRoundMoney(outcome) {
    //STUB
    if (outcome === 'Player') {
      this.player.money += TwentyOneGame.ROUND_MONEY;
    } else if (outcome === 'Dealer') {
      this.player.money -= TwentyOneGame.ROUND_MONEY;
    }
  }

  playMatch() {
    //STUB
    //console.clear();
    let answer;
    while (true) {
      
      this.playOneRound();
      answer = rlsync.question('Would you like to play another round y/n?\n').toLowerCase();

      while (!TwentyOneGame.VALID_PLAYAGAIN_CHOICES.includes(answer[0])) {
        answer = rlsync.question('sorry, that\'s not a valid choice, choose yes or no\n');
      }

      if (answer === 'n') break;

      }
    }

     detectMatchWon() {
    //STUB
  }

  detectMatchLost() {
    //STUB
  }

   detectMatchEnd() {
    //STUB
    //this would be used instead of `detectMatchWon` or `detectMatchLost`
  }



  }

 

let game = new TwentyOneGame();

game.start();


