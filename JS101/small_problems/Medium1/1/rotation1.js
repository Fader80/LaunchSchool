function rotateArray(argArr) {

  if (!Array.isArray(argArr)) return undefined;
  if (argArr.length === 0) return argArr;

  let resultArr = argArr.slice();
  let flip = resultArr.shift();

  resultArr[resultArr.length] = flip;

  return resultArr;
}