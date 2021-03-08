function runningTotals(argArray) {

  let resultArray = [];

  for (let counter = 0; counter < argArray.length; counter++) {
    let loopArray = [];
    for (let counter2 = counter; counter2 >= 0; counter2--) {
      loopArray.push(argArray[counter2]);
    }
    resultArray.push(loopArray.reduce((accum, curr) => accum + curr));
  }

  return resultArray;
}