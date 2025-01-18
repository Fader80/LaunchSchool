function repeatedSubstring(s) {
  let resStr = '';
  for (let idx = 0; idx < s.length; idx++) {
    let currFrag = s.slice(0, idx + 1);
    let count = 0;

    while (resStr.length < s.length) {
      resStr += currFrag;
      count++;
    }

    if (resStr === s) {
      return [currFrag, count];
    } else {
      resStr = '';
    }

  }
}