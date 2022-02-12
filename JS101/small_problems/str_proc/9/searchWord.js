function searchWord(argWord, argStr) {
  return argStr.split(' ').filter(word => word.toLowerCase() === argWord).length;
}