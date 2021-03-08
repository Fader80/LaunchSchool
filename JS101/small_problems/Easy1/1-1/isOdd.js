function isOdd(integer) {
  let abs = Math.abs(integer);

  if (abs % 2 === 1) {
    return true;
  } else {
    return false;
  }
}


//test cases:

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true