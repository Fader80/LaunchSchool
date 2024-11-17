function sameDigitsHelper(num, sortedArgNum) {
  let sortedNum = +String(num).split('').sort((a, b) => a - b).join('');

  return sortedNum === sortedArgNum;
}

function nextSameDigits(argNum) {
  let sortedArgNum = +String(argNum).split('').sort((a, b) => a - b).join('');

  let sameDigArr = [];
  let numDigits = String(argNum).split('').length;
  let startNum = 10 ** (numDigits - 1);
  let endNum = 10 ** numDigits;


  for (let idx = startNum; idx < endNum; idx++) {

    if (sameDigitsHelper(idx, sortedArgNum)) sameDigArr.push(idx);
  }

  if (argNum === sameDigArr[sameDigArr.length - 1]) return -1;

  let onlyLargeArr = sameDigArr.filter(num => num > argNum);

  return Math.min(...onlyLargeArr);
}