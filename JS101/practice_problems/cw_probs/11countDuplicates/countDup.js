function duplicateCount(text) {
  text = text.toLowerCase();
  let count = 0;
  let freqObj = {};

  for (let idx = 0; idx < text.length; idx++) {
    let currElem = text[idx];
    if (freqObj.hasOwnProperty(currElem)) {
      freqObj[currElem] += 1;
    } else {
      freqObj[currElem] = 1;
    }
  }

  for (let prop in freqObj) {
    if (freqObj[prop] > 1) count++;
  }

  return count;
}

duplicateCount('indivisibility');