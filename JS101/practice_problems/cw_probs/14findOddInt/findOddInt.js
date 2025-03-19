function findOdd(argArr) {
  let freqObj = {};

  for (let idx = 0; idx < argArr.length; idx++) {
    let currElem = argArr[idx];
    if (freqObj.hasOwnProperty(currElem)) {
      freqObj[currElem] += 1;
    } else {
      freqObj[currElem] = 1;
    }
  }


  for (let key in freqObj) {
    if (freqObj[key] % 2 === 1) return +key;
  }
}