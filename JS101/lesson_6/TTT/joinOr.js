function joinOr(arr, sep = ', ', word = 'or') {

  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return `${arr[0]} ${word} ${arr[1]}`;
    default:
      return `${arr.slice(0, arr.length - 1).join(sep)}${sep}${word} ${arr[arr.length - 1]}`;
  }

}