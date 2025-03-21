function findUniq(arr) {
  let freqObj = {};
  for (let idx = 0; idx < arr.length; idx++) {
    let currElem = arr[idx];

    if (freqObj.hasOwnProperty(currElem)) {
      freqObj[currElem] += 1;
    } else {
      freqObj[currElem] = 1;
    }
  }

  for (let key in freqObj) {
    if (freqObj[key] === 1) return +key;
  }
}
