let readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('^*^*Welcome to TicTacToe - first to 5 rounds wins*^*^\n');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const NUM_GAMES_TO_WIN = 5;
const FIRST_TURN = readline.question('Please choose who goes first - player or computer\n');
const VALID_CHOICES = ['y', 'n', 'yes', 'no'];
let roundAnswer;
let matchAnswer;


function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

let WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], //columns
  [1, 5, 9], [3, 5, 7] //diagonals
];


function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

//valid square choices are those 'board' keys whose values are spaces
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, sep = ', ', word = 'or') {

  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return `${arr[0]} ${word} ${arr[1]}`;
    default:
      return `${arr.slice(0, arr.length - 1).join(sep)}${sep}${word} ${arr[arr.length - 1]}`;
  }

}


function findAtRiskSquare(board, line, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let emptySquare = line.find(square => board[square] === INITIAL_MARKER);
    if (emptySquare !== undefined) {
      return emptySquare;
    }
  }
  return null;
}


function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'player') {
    return 'computer';
  } else {
    return 'player';
  }
}

function offensiveOrDefensiveSquare(board, marker) {
  let square;
  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = findAtRiskSquare(board, line, marker);
    if (square) return square;
  }
  return null;
}

function playerChoosesSquare(board) {
  let square; // declared here so we can use it outside the loop


  while (true) {
    prompt(`Choose one of the following squares - ${joinOr(emptySquares(board))}`);
    square = readline.question().trim(); // input trimmed to allow spaces in input

    if (emptySquares(board).includes(square)) break; // break if it's a valid square


    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square = offensiveOrDefensiveSquare(board, COMPUTER_MARKER);

  if (!square) {
    square = offensiveOrDefensiveSquare(board, HUMAN_MARKER);
  }

  if (!square) {
    if (board['5'] === INITIAL_MARKER) square = 5;
  }

  if (!square) {

    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}


function someoneWon(board) {
  return !!detectWinner(board);
}

function displayScores(playerScore, compScore) {
  prompt(`Your score: ${playerScore}   Computer's score: ${compScore}`);
}

function detectMatchWon(playerScore, compScore) {
  return playerScore === NUM_GAMES_TO_WIN || compScore === NUM_GAMES_TO_WIN;
}


function displayMatchWinner(playerScore) {
  if (playerScore === NUM_GAMES_TO_WIN) {
    prompt('***Player won the match!***');
  } else {
    prompt('***Computer won the match***');
  }
}

function playSingleRound(board, currentPlayer) {
  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
}

function askToPlayAnotherRound() {
  prompt('Play another round? y or n\n');
  roundAnswer = readline.question().toLowerCase();
  while (!VALID_CHOICES.includes(roundAnswer)) {
    prompt('must choose either y or n\n');
    roundAnswer = readline.question().toLowerCase();
  }
}

function askToPlayAnotherMatch() {
  prompt('Play another match? y or n\n');
  matchAnswer = readline.question().toLowerCase();
  while (!VALID_CHOICES.includes(matchAnswer)) {
    prompt('must choose either y or n\n');
    matchAnswer = readline.question().toLowerCase();
  }
}


//main game loop

while (true) {

  let board = initializeBoard();
  let playerScore = 0;
  let compScore = 0;


  while (true) { // start of additional inner loop
    board = initializeBoard();


    let currentPlayer = FIRST_TURN;

    playSingleRound(board, currentPlayer); //game loop function


    displayBoard(board);

    if (someoneWon(board)) { //added score incrementing in this conditional
      prompt(`${detectWinner(board)} won the round!`);
      detectWinner(board) === 'Player'? playerScore++ : compScore++;
    } else {
      prompt("It's a tie!");
    }

    displayScores(playerScore, compScore);

    if (detectMatchWon(playerScore, compScore)) {
      displayMatchWinner(playerScore, compScore);
      break;

    }

    askToPlayAnotherRound();

    if (roundAnswer.toLowerCase()[0] === 'n') break;

  } // end of additional inner loop

  askToPlayAnotherMatch();

  if (matchAnswer.toLowerCase()[0] === 'n') break;
}

prompt('Thanks for playing Tic Tac Toe!');