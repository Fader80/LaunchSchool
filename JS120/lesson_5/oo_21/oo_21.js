const rlsync = require('readline-sync');

const INIT_HAND_SIZE = 2;

const INIT_PLAYER_MONEY = 5;


class Card {
  constructor(suit, rank, points) {

    this.suit = suit;
    this.rank = rank;
    this.points = points;
  }
}


class Deck {
  constructor() {

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


}

class Participant {
  constructor() {

    this.hand = [];
    this.handTotal = 0;

  }

  calcHandTotal() {
    let points = 0;

    this.hand.forEach(card => {

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


  hit(deck) {
    let randomIdx = deck.randomIdxGenerator();
    this.hand.push(deck.removeCard(randomIdx));
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

  resetHand() {
    this.hand = [];
  }


}

class Player extends Participant {
  constructor() {
    super();
    this.name = 'Player';
    this.money = INIT_PLAYER_MONEY;
  }


}

class Dealer extends Participant {


  constructor() {
    super();
    this.name = 'Dealer';
  }


  deal(deck, player) {


    for (let idx = 0; idx < INIT_HAND_SIZE; idx++) {
      player.hit(deck);
    }

    for (let idx = 0; idx < INIT_HAND_SIZE; idx++) {
      this.hit(deck);
    }

  }

  displayInitialHand() {
    console.log('Dealer\'s Hand:', [this.hand[0], {suit: '**', rank: '**', points: '**'}]);
  }

}

class TwentyOneGame {


  static VALID_ROUND_CHOICES = ['h', 's'];

  static VALID_PLAYAGAIN_CHOICES = ['y', 'n'];

  static ROUND_MONEY = 1;

  static WINNING_SUM = 10;

  static LOSING_SUM = 0;


  constructor() {


    this.deck = new Deck();
    this.dealer = new Dealer();
    this.player = new Player();
    this.bustedPlayer = null;
    this.matchOutcome = null;
  }

  start() {

    this.displayWelcomeMessage();

    this.playMatch();

    this.displayResult();
    this.displayGoodbyeMessage();


  }


  dealCards() {
    this.dealer.deal(this.deck, this.player);
  }


  displayDealerRoundHand() {
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
      console.clear();
      this.displayPlayerRoundHands();
      answer = rlsync.question('hit or stay?\n').toLowerCase();

      while (!TwentyOneGame.VALID_ROUND_CHOICES.includes(answer[0])) {
        answer = rlsync.question('sorry, that\'s not a valid choice - please choose hit or stay\n');
      }

      if (answer[0] === 'h') {
        this.player.hit(this.deck);
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
    console.clear();
    this.displayDealerRoundHand();
    while (this.dealer.calcHandTotal() < 17) {
      this.dealer.hit(this.deck);
      this.dealer.updateHandTotal();
      console.clear();
      this.displayDealerRoundHand();
      if (this.dealer.isBusted()) {
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
    if (this.matchOutcome === 'win') {
      console.log('***Player won the match!***\n');
    } else if (this.matchOutcome === 'loss') {
      console.log('Player lost the match :(\n');
    }
  }

  calcOpposingPlayer(currPlayer) {
    return currPlayer.name === 'Player' ? 'Dealer' : 'Player';
  }


  playOneRound() {
    this.dealCards();
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


    this.displayRoundMoney();

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
    console.log(`${participant.name} busted, ${this.calcOpposingPlayer(participant)} won\n`);

  }

  displayNonBustedOutcome(outcome) {
    switch (outcome) {
      case 'draw' : {
        console.log('Round was a draw. Boring\n');
        break;
      } case 'Player' : {
        console.log('Player won the round on points\n');
        break;
      } case 'Dealer' : {
        console.log('Dealer won the round on points\n');
        break;
      }
    }
  }

  processRoundMoney(outcome) {

    if (outcome === 'Player') {
      this.player.money += TwentyOneGame.ROUND_MONEY;
    } else if (outcome === 'Dealer') {
      this.player.money -= TwentyOneGame.ROUND_MONEY;
    }
  }

  playMatch() {

    console.clear();

    let answer;

    while (true) {
      this.playOneRound();
      this.detectMatchOutcome();

      if (this.matchOutcome) break;

      this.postRoundReset();

      answer = rlsync.question('Would you like to play another round y/n?\n').toLowerCase();

      while (!TwentyOneGame.VALID_PLAYAGAIN_CHOICES.includes(answer[0])) {
        answer = rlsync.question('sorry, that\'s not a valid choice, choose yes or no\n');
      }

      if (answer === 'n') break;

    }


  }


  detectMatchOutcome() {

    if (this.player.money === TwentyOneGame.LOSING_SUM) {
      this.matchOutcome = 'loss';
    } else if (this.player.money === TwentyOneGame.WINNING_SUM) {
      this.matchOutcome = 'win';
    }
  }

  clearBothHands() {
    this.player.resetHand();
    this.dealer.resetHand();
  }

  displayRoundMoney() {
    console.log(`Player has $${this.player.money} in game money\n`);
  }

  postRoundReset() {
    this.clearBothHands();
    this.bustedPlayer = null;
    this.deck = new Deck();
  }

}


let game = new TwentyOneGame();

game.start();


