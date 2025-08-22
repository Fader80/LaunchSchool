function evenOddHelper(subArr) {

  for (let idx = 0; idx < subArr.length - 1; idx++) {
    let currChar = subArr[idx];
    let nextChar = subArr[idx + 1];

    if (currChar % 2 === 0) {
      if (nextChar % 2 === 0) return false;
    } else {
      if (nextChar % 2 === 1) return false;
    }
  }

  return true;

}

function longestAlternatingSubarray(argArr) {
  let allSubs = [];
  let allAlternateSubs = [];

  for (let idx = 0; idx < argArr.length; idx++) {
    for (let jdx = idx + 1; jdx <= argArr.length; jdx++) {
      allSubs.push(argArr.slice(idx, jdx));
    }
  }

  allSubs.forEach(sub => {
    if (evenOddHelper(sub)) allAlternateSubs.push(sub);
  });

  allAlternateSubs = allAlternateSubs.filter(sub => sub.length > 1);

  if (!allAlternateSubs.length) return [];

  allAlternateSubs.sort((a, b) => b.length - a.length);

  return allAlternateSubs[0];

}


console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]
console.log(longestAlternatingSubarray([4, 6, 7, 6, 7, 9, 17])); // [ 6, 7, 6, 7 ]
