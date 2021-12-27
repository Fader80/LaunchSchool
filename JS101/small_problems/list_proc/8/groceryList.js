function buyFruit(argArr) {
  let targArr = [];

  argArr.forEach(subArr => {
    for (let idx = 0; idx < subArr[1]; idx++) {
      targArr.push(subArr[0]);
    }
  } );

  return targArr;
}