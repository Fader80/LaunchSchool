function primeHelper(argNum) {
  for (let idx = 2; idx < argNum; idx++) {
    if (argNum % idx === 0) return false;
  }
  return true;
}


function minimumNumber(numbers) {
  let count = 0;
  let sum = numbers.reduce((acc, elem) => acc + elem);

  while (true) {

    if (primeHelper(sum)) break;
    sum++;
    count++;
  }

  console.log(count);
}

minimumNumber([50, 39, 49, 6, 17, 28]);