function suffixFinder(century) {

  if (century[century.length - 2] !== '1') {

    switch (century[century.length - 1]) {
      case '1' :
        return 'st';
      case '2' :
        return 'nd';
      case '3' :
        return 'rd';
      default :
        return 'th';
    }
  } else {
    return 'th';
  }
}

function century(year) {

  let century = Math.ceil(year / 100);
  century = century.toString();

  let suffix = suffixFinder(century);

  century += suffix;

  return century;
}