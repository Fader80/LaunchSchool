function rotateRightmostDigits(num, count) {

  let numArr = num.toString().split('');

  let targArr = [];

  targArr.push(...numArr.slice(0, numArr.length - count));

  targArr.push(...numArr.slice(numArr.length - (count - 1)));

  targArr.push(numArr[numArr.length - count]);

  return +targArr.join('');


}


function rotateRightmostDigitsAlt(num, count) {

  let numArr = num.toString().split('');

  let targArr = [];

  targArr.push(...numArr.slice(0, numArr.length - count));

  for (let idx = count - 1; idx > 0; idx--) {
    targArr.push(numArr[numArr.length - idx]);
  }


  targArr.push(numArr[numArr.length - count]);


  return +targArr.join('');


}