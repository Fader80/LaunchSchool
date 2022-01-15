function swapCase(argString) {
  let resultStr = '';

  for (let idx = 0; idx < argString.length; idx++) {
    let currChar = argString[idx];
    if (currChar === currChar.toUpperCase() && currChar === currChar.toLowerCase()) {
      resultStr += currChar
    } else if (currChar === currChar.toUpperCase()) {
      resultStr += currChar.toLowerCase();
    } else {
      resultStr += currChar.toUpperCase();
    }

  }
  return resultStr;
}