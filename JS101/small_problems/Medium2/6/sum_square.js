function sumSquareDifference(argNum) {
  let firstCountNums = [];

  for (let idx = 1; idx <= argNum; idx++) {
    firstCountNums.push(idx);
  }

  let squareOfSum = firstCountNums.reduce((accum, elem) => accum + elem) ** 2;

  let sumOfSquares = firstCountNums.reduce((accum, elem) => accum + (elem ** 2), 0);

  return Math.abs(sumOfSquares - squareOfSum);

}