const REGEX_WORD = /\w/;
const REGEX_AVOID = /[^aeiou]/;


function doubleConsonants(argString) {
  let doubleString = '';

  for (let idx = 0; idx < argString.length; idx++) {
    let currElem = argString[idx];
    if (REGEX_WORD.test(currElem) && REGEX_AVOID.test(currElem)) {
      doubleString += currElem.repeat(2);
    } else {
      doubleString += currElem;
    }
  }

  return doubleString;

}