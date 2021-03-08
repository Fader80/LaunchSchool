//solution with forEach:

function interleaveForEach(argArr1, argArr2) {
  let targArr = [];

  argArr1.forEach((elem, idx) => targArr.push(elem, argArr2[idx]));

  return targArr;
}


//solution with map - I think it's suboptimal, as it doesn't properly use the
//return value of map, but the best I could do

function interleaveMap(argArr1, argArr2) {
  let targArr = [];

  argArr1.map(function(_,idx,) {
    targArr.push(argArr1[idx]);
    targArr.push(argArr2[idx]);
  });
}

//solution with reduce:

function interleaveReduce(argArr1, argArr2) {
  let resArr = argArr1.reduce((accum, curr,idx) => {
    accum.push(curr, argArr2[idx]);

    return accum;

  }, []);

  return resArr;
}