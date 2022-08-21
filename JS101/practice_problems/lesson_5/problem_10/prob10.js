
//my solution

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let resArr = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) =>  b - a);
  } else {
    return subArr.slice().sort((a, b) => b.charCodeAt(b[0]) - a.charCodeAt(a[0]));
  }
});

