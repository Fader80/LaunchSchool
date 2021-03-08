function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };

  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

function stringToSignedInteger(numString) {

  let cutString = numString.slice(1);


  if (!(isNaN((numString.charAt(0) / 1)))) {
    return stringToInteger(numString);
  } else if (numString.charAt(0) === '+') {
    return stringToInteger (cutString);
  } else {
    return -stringToInteger(cutString);
  }

}