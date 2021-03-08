function multiplyList(argArr1, argArr2) {
  let targArr = argArr1.map((elem, idx) => elem * argArr2[idx]);
  return targArr;
}