function sumStringValues(argArr) {
  let regex = /\d/g;

  let allNumsArr = [];

  argArr.forEach(string => allNumsArr.push(string.match(regex)));

  let processedArr = allNumsArr.map(subArr => {
    if (subArr.length === 1) subArr.push(subArr[0]);
    let a = subArr[0];
    let b = subArr[subArr.length - 1];
    return Number(a + b);
  });

  return processedArr.reduce((a, b) => a + b);

}

console.log(
  sumStringValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
); // 142

console.log(
  sumStringValues([
    "ninesixthree8six8",
    "5tnzrrzmcsnfivefeightrjninexrhnnfbcb",
    "dcjcj2",
    "4fhcmhdtfourlzdphfxvlmvm6",
  ])
); // 211
