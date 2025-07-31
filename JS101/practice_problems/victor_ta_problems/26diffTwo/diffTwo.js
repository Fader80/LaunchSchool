function differenceOfTwo(argArr) {
  let resArr = [];

  for (let idx = 0; idx < argArr.length - 1; idx++) {
    for (let jdx = idx + 1; jdx < argArr.length; jdx++) {

      let subArr = [argArr[idx], argArr[jdx]];

      let [a, b] = subArr;

      if (Math.abs(a - b) === 2) {
        subArr.sort((a, b) => a - b);
        resArr.push(subArr);
      }
    }
  }

  resArr.sort((a, b) => a[0] - b[0]);

  return resArr;

}


console.log(differenceOfTwo([1, 2, 3, 4]));
// [[1, 3], [2, 4]]
console.log(differenceOfTwo([4, 1, 2, 3]));
// // [[1, 3], [2, 4]]
console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// //  [[1, 3]]
console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // [[1, 3], [3, 5], [4, 6]]
console.log(differenceOfTwo([2, 4]));
// // [[2, 4]]
console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// []
