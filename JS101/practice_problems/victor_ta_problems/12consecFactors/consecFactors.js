function factorHelper(arr, num) {
    let flag = true;
    arr.forEach(elem => {
      if (num % elem !== 0) flag = false;
    })
    
    return flag;
    
  }
  
  function longestConsecutiveFactors(argArr, targNum) {
    let longestSeq = [];
    
    for (let idx = 0; idx < argArr.length; idx++) {
      for (let jdx = idx + 1; jdx <= argArr.length; jdx++) {
        let subArr = argArr.slice(idx, jdx);
        if (factorHelper(subArr, targNum)) {
          if (subArr.length > longestSeq.length) longestSeq = subArr;
        }
      }
    }
    
    return longestSeq;
  }
  
  console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
  console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
  console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
  console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
  console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]//
  