function distinctMultiples(argStr) {
  argStr = argStr.toLowerCase();

  let counter = 0;

  let charLookup = {};

  for (let idx = 0; idx < argStr.length; idx++) {
    let currChar = argStr[idx];
    if (charLookup.hasOwnProperty(currChar)) {
      charLookup[currChar] += 1;
    } else {
      charLookup[currChar] = 1;
    }
  }

  for (let prop in charLookup) {
    if (charLookup[prop] > 1) counter++;
  }

  return counter;
}

const p = console.log;
p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5
