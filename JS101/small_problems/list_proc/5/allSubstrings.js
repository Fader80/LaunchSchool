function leadingSubstrings(argString) { // helper function from previous exercise

  let targArr = [];

  for (let idx = 1; idx <= argString.length; idx++) {
    targArr.push(argString.slice(0, idx));
  }

  return targArr;
}


function substrings(argString) {

  let resultArr = [];

  for (let idx = 0; idx < argString.length; idx++) {
    let substrings  = leadingSubstrings(argString.slice(idx));
    resultArr.push(...substrings);
  }

  return resultArr;
}


//FE solution

//using map:

function substringsMap(argString) {

  let strArr = argString.split('');

  let resultArr = strArr.map(function(_, idx, arr) {
    let substrings = leadingSubstrings(arr.slice(idx).join(''));
    return substrings;
  });


  return resultArr.flat();
}

//using reduce:

function substringsReduce(argString) {

  let strArr = argString.split('');

  let resultArr = strArr.reduce(function(accum, _, idx, arr) {
    let substrings = leadingSubstrings(arr.slice(idx).join(''));
    substrings.forEach(elem => accum.push(elem)); // could have used concat instead as it flattens the added array
    return accum;
  }, []);


  return resultArr;
}