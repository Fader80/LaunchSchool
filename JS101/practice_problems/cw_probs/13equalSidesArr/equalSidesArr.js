function findEvenIndex(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    let leftSlice = arr.slice(0, idx);
    let rightSlice = arr.slice(idx + 1);

    let leftSum = leftSlice.reduce((acc, elem) => acc + elem, 0);
    let rightSum = rightSlice.reduce((acc, elem) => acc + elem, 0);
    if (leftSum === rightSum) return idx;
  }

  return -1;
}