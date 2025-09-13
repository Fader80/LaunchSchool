function rotateRightmostDigits(argNum, count) { // helper function
  let numStr = String(argNum);

  let firstPart = numStr.slice(0, numStr.length - count);
  let secondPart = numStr.slice(numStr.length - count);

  secondPart = secondPart.split('');

  secondPart.push(secondPart.shift());
  secondPart = secondPart.join('');


  let resNum = Number(firstPart + secondPart);
  return resNum;
}

function maxRotation(argNum) {
  let strNum = String(argNum);
  let count = strNum.length;

  while (count >= 2) {
    strNum = rotateRightmostDigits(strNum, count);

    count--;
  }


  if (strNum[0] === '0') strNum = strNum.slice(1);
  let resNum = Number(strNum);
  return resNum;
}
