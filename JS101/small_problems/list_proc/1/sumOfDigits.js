function sum(argNum) {
  return argNum.toString().split('').map(elem => Number(elem)).reduce((accum, elem) => accum + elem);
}