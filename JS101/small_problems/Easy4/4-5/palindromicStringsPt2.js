function isPalindrome(argString) {
  let revString = argString.split('').reverse().join('');
  if (argString === revString) {
    return true;
  } else {
    return false;
  }
}

function isRealPalindrome(argString) {
  let alphaNumArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let processedArgArr = [];

  let argArr = argString.split('');

  for (let counter = 0; counter < argArr.length; counter++) {
    let lowerElem = argArr[counter].toLowerCase();
    if (alphaNumArr.includes(lowerElem)) {
      processedArgArr.push(lowerElem);
    }
  }

  let processedArgStr = processedArgArr.join('');

  return isPalindrome(processedArgStr);
}