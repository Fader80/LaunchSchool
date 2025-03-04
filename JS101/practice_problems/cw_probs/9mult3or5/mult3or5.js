function solution(number) {
  if (number < 0) return 0;
  let multiples = [];

  for (let idx = 3; idx < number; idx++) {
    if (idx % 3 === 0 || idx % 5 === 0) multiples.push(idx);
  }

  return multiples.length ? multiples.reduce((acc, elem) => acc + elem) : 0;

}