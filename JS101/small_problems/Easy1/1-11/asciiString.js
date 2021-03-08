function asciiValue(string) {
  let sum = 0;

  for (let letter of string) {
    sum += string.charCodeAt(string.indexOf(letter));
  }

  return sum;
}