function isPalindrome(argString) {
  let revString = argString.split('').reverse().join('');
  if (argString === revString) {
    return true;
  } else {
    return false;
  }
}

function isPalindromicNumber(argNum) {
  let argNumString = argNum.toString();

  return isPalindrome(argNumString);
}