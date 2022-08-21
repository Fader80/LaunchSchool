
//helper function
function rotateRightmostDigits(num, count) {

  let numArr = num.toString().split('');

  let targArr = [];

  targArr.push(...numArr.slice(0, numArr.length - count));

  targArr.push(...numArr.slice(numArr.length - (count - 1)));

  targArr.push(numArr[numArr.length - count]);

  return +targArr.join('');


}


function maxRotation(argNum) {

  let numLength = argNum.toString().length;

  let resultVar = argNum;

  for (let idx = 0; idx <= numLength - 2; idx++) {
    let helperCount = numLength - idx;
    resultVar = rotateRightmostDigits(resultVar, helperCount);
  }

  return resultVar;
}
