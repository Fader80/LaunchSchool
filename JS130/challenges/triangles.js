





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