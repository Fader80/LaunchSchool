function isPrime(argNum) {
  let numArr = [];

  for (let idx = 2; idx < argNum; idx++) {
    numArr.push(idx);
  }

  for (let idx = 0; idx < numArr.length; idx++) {
    let currNum = numArr[idx];
    if (argNum % currNum !== 0) {
      continue;
    } else {
      return false;
    }
  }

  return true;

}