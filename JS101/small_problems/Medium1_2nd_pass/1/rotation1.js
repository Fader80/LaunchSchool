function rotateArray(argArr) {
  if (!Array.isArray(argArr)) return undefined;
  if (argArr.length === 0) return argArr;

  let arrayCopy = argArr.slice();

  let firstElem = arrayCopy.shift();
  arrayCopy.push(firstElem);

  return arrayCopy;

}