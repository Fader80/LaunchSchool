//Write a function that takes a sorted Array of integers as an argument, and returns an array that
//  includes all of the missing integers (in order) between the first and last elements of the argument.

function missing(argArr) {
  let resArr  = [];
  let totRangeArr = [];

  for (let idx = argArr[0]; idx <= argArr[argArr.length - 1]; idx++) {
    totRangeArr.push(idx);
  }

  totRangeArr.forEach(num => {
    if (argArr.indexOf(num) === -1) resArr.push(num);
  });

  return resArr;

}


let p = console.log;

p(missing([-3, -2, 1, 5]));   // [-1, 0, 2, 3, 4]
p(missing([1, 2, 3, 4]));     // []
p(missing([1, 5]));           // [2, 3, 4]
p(missing([6]));              // []

//make a complete array in the range `totRangeArr`
//iterate through `totRangeArr`, and if the `currNum` doesn't appear in `argArr`, push to `resArr`
//return `resArr`