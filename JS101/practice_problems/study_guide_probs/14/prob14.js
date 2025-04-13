function sevenEleven(argNum) {
  let multiplesSevenEleven = [];

  for (let idx = 1; idx < argNum; idx++) {
    if (idx % 7 === 0) multiplesSevenEleven.push(idx);
    if (idx % 11 === 0) multiplesSevenEleven.push(idx);
  }

  let uniqueArr = [];

  multiplesSevenEleven.forEach(num => {
    if (!uniqueArr.includes(num)) uniqueArr.push(num);
  });

  if (uniqueArr.length === 0) return 0;

  return uniqueArr.reduce((acc, elem) => acc + elem);
}