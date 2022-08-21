let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let strArr = JSON.stringify(arr);

let clonedArr = JSON.parse(strArr);


clonedArr.forEach(subArr => {
  if (typeof subArr[0] === 'number') {
    subArr.sort((a, b) => a - b);
  } else {
    subArr.sort();
  }

});

//tests:

console.log(clonedArr);

console.log(arr);