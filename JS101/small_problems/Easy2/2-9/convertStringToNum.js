function stringToInteger(numString) {
  let tenMultiplier = 0;

  let multiplesArr = [];

  for (let current = numString.length - 1; current >= 0; current -= 1) {
    let currentNum = numString[current] * 1;
    currentNum *= (10 ** tenMultiplier);
    multiplesArr.push(currentNum);
    tenMultiplier += 1;
  }

  return multiplesArr.reduce(function(accum, curr) {
    return accum + curr;
  });
}