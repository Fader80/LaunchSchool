function integerToString(num) {
  let numStringArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let resultArray = [];
  let tenPowerCount = 0;
  let digit;

  for (let counter = num; counter > 10; counter /= 10) {
    tenPowerCount += 1;
  }

  while (tenPowerCount >= 0) {
    digit = Math.floor(num / (10 ** tenPowerCount));
    resultArray.push(numStringArray[digit]);
    num -= digit * (10 ** tenPowerCount);
    tenPowerCount -= 1;
  }

  return resultArray.join('');
}


function signedIntegerToString(num) {
  if (num === 0) {
    return integerToString(0);
  } else if (Math.sign(num) === 1) {
    return `+${integerToString(num)}`;
  } else {
    return `-${integerToString(-num)}`;
  }
}

