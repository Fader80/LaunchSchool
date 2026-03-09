
const Triangle = require("./triangle");

let triangle1 = new Triangle(2, 3, 5);

//console.log(triangle1);


function triangles(triangleArg) {

  let sidesArr = [];

  for (let side in triangleArg) {
    sidesArr.push(triangleArg[side]);
  }

  let matchedSides = 0;

  for (let idx = 0; idx < sidesArr.length; idx++) {
    let currElem = sidesArr[idx];
    for (let jdx = 0; jdx < sidesArr.length; jdx++) {
      if (jdx === idx) continue;
      let otherElem = sidesArr[jdx];
      if (currElem === otherElem) matchedSides++;
    }
}

  switch (matchedSides) {
    case 0 : return 'scalene';
    case 2 : return 'isosceles';
    case 6 : return 'equilateral';
  }


}

triangles(triangle1);




function triangleValidityHelper(arr) { // helper function

  if (arr.some(num => num < 1)) return false;

  for (let idx = 0; idx < arr.length; idx++) {
    let currElem = arr[idx];
    let twoSideSum = 0;
    for (let jdx = 0; jdx < arr.length; jdx++) {
      if (jdx === idx) continue;
      twoSideSum += arr[jdx];
    } // end of inner loop
    //console.log(currElem, twoSideSum); // debugging
    if (twoSideSum <= currElem) return false;
  } // end of outer loop
  return true;
}