/*
declare a variable `arr` and initialise to an array of two items, `1` and `1`
declare and index `idx` and set it to 2
while the length of the final item in the array is less than `n`, iterate:
 - add a number to the end of `arr`. This is comprised of adding the elements of
  array at `idx` -1 and `idx` - 2
  if the length of the digits of the element of `arr` at `idx` is `n`, then stop
  iterating and  return `idx`

*/


function findFibonacciIndexByLength(argNum) {
  let arr = [1n, 1n];
  let idx = 2;
  let finalNumLength = String(arr[arr.length - 1]).length;

  while (finalNumLength < argNum) {
    arr.push(arr[idx - 1] + arr[idx - 2]);
    finalNumLength = String(arr[arr.length - 1]).length;
    idx++;
  }

  let resIdx = arr.indexOf(arr[arr.length - 1]) + 1;

  return resIdx;

}