let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }

  getMarker() {
    return this.marker;
  }
}

class Board {
  constructor() {
    this.reset();

  }

  reset() {
    this.squares = {};

    for (let counter = 1; counter <= 9; counter++) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");

  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }


  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;

  }

  isFull() {
    return this.unusedSquares().length === 0;
  }


}


class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.score;
  }

  incrementScore() {
    this.score++;
  }


}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}


class TTTGame {
  static MATCH_GOAL = 3;

  static CENTRAL_SQUARE = '5';

  static POSSIBLE_WINNING_ROWS = [
    ['1', '2', '3'], // top row of board
    ['4', '5', '6'], // center row of board
    ['7', '8', '9'], // bottom row of board
    ['1', '4', '7'], // left column of board
    ['2', '5', '8'], // middle column of board
    ['3', '6', '9'], // right column of board
    ['1', '5', '9'], // diagonal: top left to bottom right
    ['3', '5', '7']  // diagonal: bottom left to top right
  ];

  constructor() {

    // Need a board and two players
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }


  play() {

    this.displayWelcomeMessage();

    this.playMatch();


    this.displayGoodbyeMessage();

  }


  playOneGame(firstMove, secondMove) {
    this.board.reset();

    this.board.display();
    while (true) {


      firstMove.call(this);
      if (this.gameOver()) break;


      this.board.displayWithClear();

      secondMove.call(this);
      if (this.gameOver()) break;


      this.board.displayWithClear();


    }
    this.board.displayWithClear();
    this.displayRoundResults();


  } // end of playOneGame

  playMatch() {
    console.log(`First player to win ${TTTGame.MATCH_GOAL} games wins the match.`);

    let [firstMove, secondMove] = this.selectWhoMovesFirst();


    while (true) {
      this.playOneGame(firstMove, secondMove);
      this.updateMatchScore(this.human, this.computer);
      this.displayMatchScore();
      if (this.someoneWonMatch()) break;
      if (!this.playAgain()) break;

      if (firstMove === this.humanMoves) {
        firstMove = this.computerMoves;
        secondMove = this.humanMoves;
      } else {
        firstMove = this.humanMoves;
        secondMove = this.computerMoves;
      }
    }

    this.displayMatchResults();

  }


  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Tic Tac Toe!');
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!');
  }

  displayRoundResults() {
    if (this.isRoundWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isRoundWinner(this.computer)) {
      console.log("I won! Take that, human!");
    } else {
      console.log("A tie game. How boring");
    }
  }

  isRoundWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === TTTGame.MATCH_GOAL;
    });
  }


  humanMoves() {
    let choice;


    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${this.joinOr(validChoices)}):`;
      choice = readline.question(prompt);


      if (validChoices.includes(choice)) break;

      console.log("sorry, that's not a valid choice");
      console.log("");

    }

    this.board.markSquareAt(choice, this.human.getMarker());

  }

  computerMoves() {

    let choice;

    if (this.calcThreatenedSquare(this.human, this.computer)) {

      choice = this.calcThreatenedSquare(this.human, this.computer);

    } else if (this.calcThreatenedSquare(this.computer, this.human)) {

      choice = this.calcThreatenedSquare(this.computer, this.human);

    } else if (this.board.squares[TTTGame.CENTRAL_SQUARE].getMarker() === " ") {

      choice = TTTGame.CENTRAL_SQUARE;

    } else {
      let validChoices = this.board.unusedSquares();

      do {
        choice = Math.floor((9 * Math.random()) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWonRound();

  }


  someoneWonRound() {
    return this.isRoundWinner(this.human) || this.isRoundWinner(this.computer);
  }

  joinOr(argArr, delimiter = `, `, word = `or`) {
    let resStr = '';
    if (argArr.length === 1) {
      resStr += argArr[0];
    } else if (argArr.length === 2) {
      resStr = `${argArr[0]} ${word} ${argArr[1]}`;
    } else {
      let lastBit = `${word} ${argArr[argArr.length - 1]}`;
      let firstBit = argArr.slice(0, argArr.length - 1);
      resStr = firstBit.join(delimiter);
      resStr = `${resStr}${delimiter}${lastBit}`;
    }
    return resStr;

  }

  playAgain() {
    let answer;

    while (true) {
      answer = readline.question('play again? y/n\n').toLowerCase();
      if (['y', 'n'].includes(answer[0])) break;
      console.log('sorry thats not a valid choice, please y/n\n');
    }

    return answer[0] === 'y';
  }

  calcThreatenedSquare(threatened, threatener) { // gets called in `computerMoves`
    let calcThreatenedSquare;
    let threatenedRow = TTTGame.POSSIBLE_WINNING_ROWS.find(row => {
      return this.board.countMarkersFor(threatener, row) === 2
      && this.board.countMarkersFor(threatened, row) === 0;
    });

    if (threatenedRow) {
      calcThreatenedSquare = threatenedRow.find(square => this.board.squares[square].getMarker() === " ");
    }


    return calcThreatenedSquare;

  }

  displayMatchScore() {
    console.log(`Your score: ${this.human.getScore()} Computer score: ${this.computer.getScore()}`);
  }

  isMatchWinner(player) {
    return player.getScore() === TTTGame.MATCH_GOAL;
  }

  someoneWonMatch() {
    return this.isMatchWinner(this.human) || this.isMatchWinner(this.computer);
  }

  updateMatchScore(human, computer) {
    if (this.isRoundWinner(human)) {
      this.human.incrementScore();
    } else if (this.isRoundWinner(computer)) {
      this.computer.incrementScore();
    }
  }

  displayMatchResults() {
    if (this.isMatchWinner(this.human)) {

      console.log("\n***You won the Match! Congratulations!***\n");
    } else {

      console.log("\nI won the match! hahahahaha\n");
    }
  }

  selectWhoMovesFirst() {

    let firstMove;
    let secondMove;
    let askFirstMove;

    while (true) {
      askFirstMove = readline.question('who goes first - human or computer?\n').toLowerCase();
      if (['h', 'c'].includes(askFirstMove[0])) break;
      console.log('sorry, that\'s not a valid choice');
    }

    if (askFirstMove[0] === 'h') {
      firstMove = this.humanMoves;
      secondMove = this.computerMoves;
    } else {
      firstMove = this.computerMoves;
      secondMove = this.humanMoves;
    }

    return [firstMove, secondMove];

  }


} //end of TTTGame object


let game = new TTTGame();


game.play();
