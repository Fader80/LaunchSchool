function sequence(count, startNum) {
  let resultArr = [];

  for (let multiple = 1; multiple <= count; multiple++) {
    resultArr.push(multiple * startNum);
  }
  return resultArr;
}