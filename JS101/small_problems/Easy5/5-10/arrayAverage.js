function average(argArr) {
  let sumOfElements = argArr.reduce((accum, elem) => accum + elem);

  return Math.floor(sumOfElements / argArr.length);
}

//further exploration using forEach:

function averageForEach(argArr) {
  let sumOfElems = 0;
  argArr.forEach(elem => {
    sumOfElems += elem;
  });

  return Math.floor(sumOfElems / argArr.length);
}