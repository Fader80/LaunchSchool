function reverseNumber(argNum) {
  let reverseArr = [];
  let numStr = argNum.toString();

  for (let idx = numStr.length - 1; idx >= 0; idx--) {
    let currElem = numStr[idx];
    reverseArr.push(currElem);

  }

  let result = reverseArr.join('');
  return Number(result);

}