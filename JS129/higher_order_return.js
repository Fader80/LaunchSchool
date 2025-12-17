function createMultiplier(factor) {
  return number => number * factor;

}

let myFunc = createMultiplier(4);

console.log(myFunc(3)); //=> 12