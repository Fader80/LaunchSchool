function scramble(str1, str2) {
  let sortedStr1 = str1.split('').sort();
  let sortedStr2 = str2.split('').sort();


  for (let idx = 0; idx < sortedStr2.length; idx++) {
    let currChar = sortedStr2[idx];

    if (sortedStr1.includes(currChar)) {
      let indexOfChar = sortedStr1.indexOf(currChar);
      sortedStr1 = sortedStr1.slice(indexOfChar + 1);

    } else {
      return false;
    }
  }

  return true;

}