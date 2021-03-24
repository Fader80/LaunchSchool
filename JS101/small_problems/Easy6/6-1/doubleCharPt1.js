function repeater(argString) {
  let resultString = '';

  for (let idx = 0; idx < argString.length; idx++) {
    let currElem = argString[idx];
    resultString += currElem.repeat(2);
  }

  return resultString;
}