function sumPairs(argArr, targNum) {
  let processedArr = argArr.map((num, idx) => [num, idx]);

  let matches = [];

  for (let idx = 0; idx < processedArr.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < processedArr.length; jdx++) {
      let currSub = [processedArr[idx], processedArr[jdx]];
      let [a, b] = currSub;
      if (a[0] + b[0] === targNum) {
        currSub.sort((a, b) => a[1] - b[1]);
        matches.push(currSub);

      }

    }
  }

  matches.sort((a, b) => a[1][1] - b[1][1]);

  return matches[0].map(subArr => subArr[0]);

}

console.log(sumPairs([4, 3, 2, 3, 4], 6)); //[4,2]
console.log(sumPairs([4, 3, 2, 3, 4], 7)); //[4,3]
console.log(sumPairs([4, 3, 2, 3, 4], 5)); //[3,2]
console.log(sumPairs([4, 5, 1, 2, 3, 4, 6], 7)); //[5, 2]