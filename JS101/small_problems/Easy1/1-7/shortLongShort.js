function shortLongShort(string1, string2) {

  let resultString;

  if (string1.length > string2.length) {
    resultString = string2 + string1 + string2;
  } else {
    resultString = string1 + string2 + string1;
  }

  return resultString;
}