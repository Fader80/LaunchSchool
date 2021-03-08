function runningTotalFE(array) {

  let sum = 0;

  let resArr = array.map(elem => sum += elem);

  return resArr;

}