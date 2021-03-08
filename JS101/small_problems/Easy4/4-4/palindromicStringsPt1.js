function isPalindrome(argString) {
  let revString = argString.split('').reverse().join('');
  if (argString === revString) {
    return true;
  } else {
    return false;
  }
}