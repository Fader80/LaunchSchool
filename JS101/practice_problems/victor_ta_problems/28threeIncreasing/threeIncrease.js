function setHelper(subArr) {
  for (let idx = 0; idx < subArr.length; idx++) {
    let currElem = subArr[idx];
    let nextElem = subArr[idx + 1];

    if (currElem >= nextElem) return false;
  }
  return true;
}

function threeIncreasingSets(argArr) {
  let count = 0;
  let selectSubs = [];

  for (let idx = 0; idx < argArr.length; idx++) {
    for (let jdx = idx + 1; jdx <= argArr.length; jdx++) {
      let currSub = argArr.slice(idx, jdx);
      if (currSub.length === 3) selectSubs.push(currSub);
    }
  }

  selectSubs.forEach(sub => {
    if (setHelper(sub)) count++;
  });
  return count >= 3;
}

console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false