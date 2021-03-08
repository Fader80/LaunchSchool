function evenities(inputArray) {
  let evenArray = [];

  inputArray.forEach(function(elem) {
    if (inputArray.indexOf(elem) % 2 !== 0) {
      evenArray.push(elem);
    }
  });

  return evenArray;
}