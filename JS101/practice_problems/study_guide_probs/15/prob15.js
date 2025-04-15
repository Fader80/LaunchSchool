function productHelper(subStr) {
  let product = subStr.split('').reduce((acc, elem) => acc * elem, 1);
  return product;

}

function greatestProduct(argStr) {
  let foursArr = [];
  let products = [];

  for (let idx = 0; idx < argStr.length - 3; idx++) {
    let fourPortion = argStr.slice(idx, idx + 4);
    foursArr.push(fourPortion);
  }

  foursArr.forEach(subStr => {
    products.push(productHelper(subStr));
  });

  return Math.max(...products);
}

const p = console.log;
p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6
