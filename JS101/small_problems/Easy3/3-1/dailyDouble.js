function crunch(argString) {
  let stringArray = argString.split('');

  for (let counter = 0; counter < stringArray.length; counter += 1) {
    if (stringArray[counter] === stringArray[counter + 1]) {
      stringArray.splice(counter, 1);
      counter -= 1;
    }
  }

  return stringArray.join('');
}