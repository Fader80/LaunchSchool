
function leadingSubstrings(argString) { // helper function from previous

  let targArr = [];

  for (let idx = 1; idx <= argString.length; idx++) {
    targArr.push(argString.slice(0, idx));
  }

  return targArr;
}


function substrings(argString) { // helper function from previous

  let resultArr = [];

  for (let idx = 0; idx < argString.length; idx++) {
    let substrings  = leadingSubstrings(argString.slice(idx));
    resultArr.push(...substrings);
  }

  return resultArr;
}

function isPalindrome(subStr) { // helper function

  let revStr = subStr.split('').reverse().join('');

  return subStr === revStr;
}


function palindromes(argStr) {

  let targArr = [];

  let subStrArr = substrings(argStr);

  for (let idx = 0; idx < subStrArr.length; idx++) {
    let currElem = subStrArr[idx];
    if (currElem.length < 2) continue;

    if (isPalindrome(currElem)) {
      targArr.push(currElem);
    }

  }

  return targArr;
}