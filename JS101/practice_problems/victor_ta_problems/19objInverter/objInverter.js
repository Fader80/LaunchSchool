function objectInvert(argObj) {
  let resObj = {};

  let objEntries = Object.entries(argObj);

  objEntries.forEach(keyValPair => {
    let [key, val] = keyValPair;
    if (!resObj.hasOwnProperty(val)) resObj[val] = key;
  });

  return resObj;

}

objectInvert({ a: 1, b: 2, c: 3, d: 1 }); //Output: Output: { '1': 'a', '2': 'b', '3': 'c' }