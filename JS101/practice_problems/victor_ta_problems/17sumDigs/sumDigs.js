function sumHelper(argNum) {
  let digArr = argNum.toString().split('');
  return digArr.reduce((acc, elem) => +acc + +elem);
}

function sumDigits(argArr) {
  return argArr.map(num => sumHelper(num));
}

console.log(sumDigits([123, 45, 678])); // Output: [6, 9, 21];