
function objEven(obj) { // helper function
  let flag = true;
  for (let prop in obj) {
    if (obj[prop].filter(elem => elem % 2 === 0).length !== obj[prop].length) {
      flag = false;
    }
  }
  return flag;
}

let resultArr = arr.filter(subObj => objEven(subObj));