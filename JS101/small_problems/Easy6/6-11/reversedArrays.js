function reverse(argArray) {
  for (let idx = 0; idx < argArray.length; idx++) {
    argArray.splice(idx, 0, argArray.pop());
  }
  return argArray;
}