function countOccurrences(argArr) {
  let uniqArr = [];

  argArr.forEach(elem => {
    if (!uniqArr.includes(elem)) {
      uniqArr.push(elem);
    }
  });

  uniqArr.forEach(elem => {
    let numEntries = argArr.filter(entry => elem === entry).length;
    console.log(`${elem} => ${numEntries}`);
  });


}