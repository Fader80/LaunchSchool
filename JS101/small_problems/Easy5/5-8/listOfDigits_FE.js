function digitList_FE(argInteger) {
  let strArr = argInteger.toString().split('');

  let resArr = strArr.map(elem => Number(elem));
  return resArr;

}