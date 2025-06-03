function pairs(argArr) {

  let count = 0;

  let countObj = {};

  for (let num of argArr) {
    if (countObj.hasOwnProperty(num)) {
      countObj[num] += 1;
    } else {
      countObj[num] = 1;
    }
  }

  for (let num in countObj) {
    let currDivide = Math.floor(countObj[num] / 2);
    count += currDivide;
  }
  return count;

}