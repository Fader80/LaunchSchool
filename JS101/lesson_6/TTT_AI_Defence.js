function defensiveAI(board) {

  let completeLines = [
    [1,2,3], [4,5,6], [7,8,9], // rows
    [1,4,7], [2,5,8], [3,6,9], //columns
    [1,5,9], [3,5,7] // diagonals
  ];

  for (let line = 0; line < completeLines.length; line++) {
    let [sq1, sq2, sq3] = completeLines[line];
    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === INTIAL_MARKER
    ) {
      board[sq3] = COMPUTER_MARKER;
    } else if (
      board[sq1] === INITIAL_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      board[sq1] = COMPUTER_MARKER;
    }
  }
}