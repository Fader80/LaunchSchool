function primeHelper(argNum) {
  for (let idx = 2; idx < argNum; idx++) {
    if (argNum % idx === 0) return false;
  }
  return true;
}

function nearestPrimeSum(argArr) {
  let sumArr = argArr.reduce((acc, elem) => acc + elem);


  let increments = sumArr;

  while (true) {
    increments++;

    if (primeHelper(increments)) break;
  }

  return increments - sumArr;
}


nearestPrimeSum([1, 2, 3]);


const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37
// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);
