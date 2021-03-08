function digitList(argInteger) {
  let targArr = [];
  let argIntStr = argInteger.toString();

  let strArr = argIntStr.split('');

  strArr.forEach(elem => targArr.push(Number(elem)));

  return targArr;
}