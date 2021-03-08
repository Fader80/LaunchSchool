function hexadecimalToInteger(stringHex) {

  let hexObject = { 0: 0, 1: 1,  2: 2,  3: 3,  4: 4,  5: 5,  6: 6,  7: 7, 8: 8,
    9: 9, a: 10,  b: 11,  c: 12,  d: 13, e: 14,  f: 15
  };

  let integerArr = stringHex.split('').map(function(elem) {
    return hexObject[elem.toLowerCase()];
  });

  let value = 0;

  integerArr.forEach(function(elem) {
    value = ((16 * value) + elem);
  });

  return value;

}

