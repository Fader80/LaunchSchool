function longestVowelSubstring(argStr) {
  let vowels = `aeiou`;
  let resArr = [];
  let currStr = '';

  for (let idx = 0; idx < argStr.length; idx++) {
    let currChar = argStr[idx];
    let nextChar = argStr[idx + 1];

    if (vowels.includes(currChar)) {
      currStr += currChar;
      if (!vowels.includes(nextChar)) {
        resArr.push(currStr);
        currStr = '';
      }
    }
  }
  resArr.sort((a, b) => b.length - a.length);
  return resArr.length ? resArr[0].length : 0;
}