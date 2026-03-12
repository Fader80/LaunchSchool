

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.sidesArr = [this.side1, this.side2, this.side3];
    if (!this.validityHelper()) throw new Error();
  }


  validityHelper() {
    if (this.sidesArr.some(elem => typeof elem !== 'number')) return false; // my own edge case
    if (this.sidesArr.some(num => num <= 0)) return false;

    for (let idx = 0; idx < this.sidesArr.length; idx++) {
      let currElem = this.sidesArr[idx];
      let twoSideSum = 0;
      for (let jdx = 0; jdx < this.sidesArr.length; jdx++) {
        if (jdx === idx) continue;
        twoSideSum += this.sidesArr[jdx];
      } // end of inner loop
      if (twoSideSum <= currElem) return false;
    } // end of outer loop
    return true;
  }

  kind() {
    let matchedSides = 0;

    for (let idx = 0; idx < this.sidesArr.length; idx++) {
      let currElem = this.sidesArr[idx];
      for (let jdx = 0; jdx < this.sidesArr.length; jdx++) {
        if (jdx === idx) continue;
        let otherElem = this.sidesArr[jdx];
        if (currElem === otherElem) matchedSides++;
      }
    }

    switch (matchedSides) {
      case 0 : return 'scalene';
      case 2 : return 'isosceles';
      case 6 : return 'equilateral';
    }

  }
}


let triangle1 = new Triangle(3, 3, 3);

console.log(triangle1.kind());

module.exports = Triangle;


//legacy code before refactoring into class:

// function triangles(triangleArg) {

//   let sidesArr = [];

//   for (let side in triangleArg) {
//     sidesArr.push(triangleArg[side]);
//   }

//   if (!triangleValidityHelper(sidesArr)) return 'invalid triangle';

//   let matchedSides = 0;

//   for (let idx = 0; idx < sidesArr.length; idx++) {
//     let currElem = sidesArr[idx];
//     for (let jdx = 0; jdx < sidesArr.length; jdx++) {
//       if (jdx === idx) continue;
//       let otherElem = sidesArr[jdx];
//       if (currElem === otherElem) matchedSides++;
//     }
// }

//   switch (matchedSides) {
//     case 0 : return 'scalene';
//     case 2 : return 'isosceles';
//     case 6 : return 'equilateral';
//   }


// }

// //console.log(triangles(triangle1)); debugging


// function triangleValidityHelper(arr) { // helper function

//   if (arr.some(num => num < 1)) return false;

//   for (let idx = 0; idx < arr.length; idx++) {
//     let currElem = arr[idx];
//     let twoSideSum = 0;
//     for (let jdx = 0; jdx < arr.length; jdx++) {
//       if (jdx === idx) continue;
//       twoSideSum += arr[jdx];
//     } // end of inner loop
//     //console.log(currElem, twoSideSum); // debugging
//     if (twoSideSum <= currElem) return false;
//   } // end of outer loop
//   return true;
// }

