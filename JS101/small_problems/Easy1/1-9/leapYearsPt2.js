function isLeapYear2(year) {
  if (year < 1752) {
    return year % 4 === 0;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
