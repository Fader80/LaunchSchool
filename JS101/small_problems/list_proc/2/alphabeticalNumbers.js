function alphabeticNumberSort(argArr) {
  const NUMERIC_NAMES = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


  let nameTargArr = [];

  for (let idx = 0; idx < argArr.length; idx++) {
    let currElem  = argArr[idx];
    nameTargArr.push(NUMERIC_NAMES[currElem]);
  }

  nameTargArr.sort();

  return nameTargArr.map(elem => NUMERIC_NAMES.indexOf(elem));

}
