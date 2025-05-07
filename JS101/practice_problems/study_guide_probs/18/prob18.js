function sumHelper(subArr) {
  if (!subArr.length) return 0;

  return subArr.reduce((acc, elem) => acc + elem);
}

function equalSumIndex(argArr) {
  let resultIdx = -1;

  for (let idx = 0; idx < argArr.length; idx++) {
    let leftArr  = argArr.slice(0, idx);
    let rightArr = argArr.slice(idx + 1);

    if (sumHelper(leftArr) === sumHelper(rightArr)) {
      resultIdx = idx;
      break;
    }
  }

  return resultIdx;
}