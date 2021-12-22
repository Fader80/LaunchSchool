function findComputerWinMove(board, line) {
  let emptySquare;
  let charsInLine = line.map(elem => board[elem]);

  if (charsInLine.filter(char => char === COMPUTER_MARKER).length === 2) {
    emptySquare = line.find(elem => board[elem] === INITIAL_MARKER);
  }
  if (emptySquare) {
    return emptySquare;
  } else {
    return null;
  }
}

