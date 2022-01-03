//helper function
function removeVowelsFromString(argStr) {

  let targStr = '';

  for (let idx = 0; idx < argStr.length; idx++) {
    let currLetter = argStr[idx];
    if ('aeiouAEIOU'.includes(currLetter)) continue;
    targStr += currLetter;
  }
  return targStr;
}

function removeVowels(argArr) {
  return argArr.map(string => removeVowelsFromString(string));
}