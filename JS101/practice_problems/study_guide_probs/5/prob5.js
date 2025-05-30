function leastCommonChar(argStr) {
  let freqObj = {};
  let lettArr = argStr.split('');
  lettArr = lettArr.map(lett => lett.toLowerCase());

  for (let idx = 0; idx < lettArr.length; idx++) {
    let currLett = lettArr[idx];
    if (freqObj.hasOwnProperty(currLett)) {
      freqObj[currLett] += 1;
    } else {
      freqObj[currLett] = 1;
    }
  }

  let freqEntries = Object.entries(freqObj);
  freqEntries.sort((a, b) => a[1] - b[1]);

  let smallestVal = freqEntries[0][1];

  let selectedEntries = freqEntries.filter(pair => pair[1] === smallestVal);

  selectedEntries.sort((a, b) => lettArr.indexOf(a) - lettArr.indexOf(b));

  return selectedEntries[0][0];


}