//helper function:
function isVowel(argLetter) {
  return 'aeiouAEIOU'.includes(argLetter);
}

function removeVowels(argStr) {
  let targStr = '';

  for (let idx = 0; idx < argStr.length; idx++) {
    let currLetter = argStr[idx];
    if (isVowel(currLetter)) continue;
    targStr += currLetter;
  }

  return targStr;
}