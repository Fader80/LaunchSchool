
function productHelper(argStr) {
  let product = 0;
  let numArr = argStr.split('');
  product = numArr.reduce((acc, elem) => acc * elem, 1);
  return product;

}

function greatestProduct(input) {
  let maxProduct = 0;
  let fiveDigits = [];
  for (let idx = 0; idx < input.length - 4; idx++) {
    let currPart = input.slice(idx, idx + 5);
    fiveDigits.push(currPart);
  }

  fiveDigits.forEach(part => {
    let currProduct = productHelper(part);
    if (currProduct > maxProduct) maxProduct = currProduct;
  });

  return maxProduct;
}


console.log(greatestProduct('92494737828244222221111111532909999'));