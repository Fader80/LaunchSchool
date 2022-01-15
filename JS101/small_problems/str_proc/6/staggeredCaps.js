function staggeredCase(argStr) {
  let splitArr = argStr.split('');

  let invertedArr = splitArr.map((elem, idx) => {
    if (idx % 2 === 1) {
      return elem.toUpperCase();
    } else {
      return elem.toLowerCase();
    }
  });

  return invertedArr.join('');
}