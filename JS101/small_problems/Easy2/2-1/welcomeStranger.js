function greetings(array, object) {

  let nameString = array.join(' ');

  let valueArray = Object.values(object);

  let valueString = valueArray.join(' ');

  let greetString = `Hello, ${nameString}! Nice to have a ${valueString} around.`;

  return greetString;

}