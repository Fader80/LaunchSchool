function rotateRightmostDigits(argNum, count) {
  let numStr = String(argNum);

  let firstPart = numStr.slice(0, numStr.length - count);
  let secondPart = numStr.slice(numStr.length - count);

  secondPart = secondPart.split('');

  secondPart.push(secondPart.shift());
  secondPart = secondPart.join('');


  let resNum = Number(firstPart + secondPart);
  return resNum;
}
