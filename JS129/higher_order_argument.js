function operateOnArray(numArr, callbackFn) {
  let newArr = [];
  for (let idx = 0; idx < numArr.length; idx++) {
    let currElem = numArr[idx];
    newArr[idx] = callbackFn(currElem);
  }

  return newArr;
}

let numbers = [1, 2, 3];
function square(num) {
  return num * num;
}

console.log(operateOnArray(numbers, square)); // Should return [1, 4, 9]
