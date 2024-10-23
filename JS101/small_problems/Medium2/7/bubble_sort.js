function bubbleSort(argArr) {

  while(true) {

    let passNeeded = false;

    for (let idx = 0; idx < argArr.length - 1; idx++) {

      let currElem = argArr[idx];
      let nextElem = argArr[idx + 1];

      if (currElem > nextElem) {
        argArr[idx] = nextElem;
        argArr[idx + 1] = currElem;
        passNeeded = true;
      } else {
        if (idx === argArr.length - 1) passNeeded = false;
      }

    }

    if (passNeeded === false) break;
  }

}