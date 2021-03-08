function findFibonacciIndexByLength(argInteger) {
  let fibIndex;
  let fibArray = [1, 1];

  for (let counter = 2; counter < 130; counter += 1) {
    fibArray.push(fibArray[counter - 2] + fibArray[counter - 1]);
  }

  for (let counter2 = 0; counter2 < fibArray.length; counter2 += 1) {
    if (Math.floor(fibArray[counter2] / (10 ** (argInteger - 1))) > 0) {
      fibIndex = counter2;
      break;
    }
  }

  return fibIndex + 1;
}