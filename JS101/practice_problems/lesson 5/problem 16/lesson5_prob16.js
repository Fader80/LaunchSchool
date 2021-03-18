//Given the following data structure, write some code that returns an object where 
//the key is the first item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', { 'c': 3 }], ['D', ['a', 'b', 'c']]];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

function arrToObj(argArr) {
  let newObj = {};
  argArr.forEach(elem => {
    newObj[elem[0]] = elem[1];
  });
  return newObj;
}
