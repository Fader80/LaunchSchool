
function findHumanThreat(board, line) {
  let charsInLine = line.map(square => board[square]);

  if (charsInLine.filter(marker => marker === HUMAN_MARKER).length === 2) {
    let emptySquare = line.find(square => board[square] === INITIAL_MARKER);
    if (emptySquare !== undefined) {
      return emptySquare;
    } else {
      return null;
    }
  }
}


function computerChoosesSquare(board) {
  let square;

  for (let idx = 0; idx < WINNING_LINES.length; idx++) {
    let line = WINNING_LINES[idx];
    square = findHumanThreat(board, line);
    if (square) break;
  }

  if (!square) {

    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

    square = emptySquares(board)[randomIndex];
  }
  board[square] = COMPUTER_MARKER;
}