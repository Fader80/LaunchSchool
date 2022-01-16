
//my custom version:

function staggeredCase2(argStr) {
  let result = '';
  let flag = 0;

  for (let idx = 0; idx < argStr.length; idx++) {
    let currChar = argStr[idx];
    if (/[^\d\s]/.test(currChar)) {
      if (flag % 2 === 0) {
        result += currChar.toUpperCase();
        flag++;
      } else {
        result += currChar.toLowerCase();
        flag++;
      }

    } else {
      result += currChar;
    }
  }
  return result;
}


//version according to LS instruction to modify funtion from previous exercise:

function staggeredCase2LS(argStr) {
  let splitArr = argStr.split('');
  let flag = 0;


  let invertedArr = splitArr.map(elem => {
    if (/[^\d\s]/.test(elem)) {
      if (flag % 2 === 0) {
        flag++;
        return elem.toUpperCase();

      } else {
        flag++;
        return elem.toLowerCase();
      }

    } else {
      return elem;
    }
  });

  return invertedArr.join('');
}