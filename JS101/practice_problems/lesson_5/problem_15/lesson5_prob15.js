//Given the following data structure, write some code to return an array 
//which contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];


let newArr = arr.filter(obj => {
  let flag = true;
  for (let prop in obj) {
    obj[prop].forEach(elem => {
      if (elem % 2 === 1) {
        flag = false;
      }
    });
  }
  return flag;
});


//below is the official solution which contains more efficient 'every' method

let newArr2 = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(elem => elem % 2 === 0);
  });
});