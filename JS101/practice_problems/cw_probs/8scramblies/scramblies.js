function scramble(str1, str2) {
  let str1Arr = str1.split('');
  let str2Arr = str2.split('');
  let str2Uniques = [];
  let flag = true;

  str2Arr.forEach(char => {
    if (!str2Uniques.includes(char)) str2Uniques.push(char);
  });

  str2Uniques.forEach(char => {
    let selectArr1 = str1Arr.filter(elem => elem === char);
    let selectArr2 = str2Arr.filter(elem => elem === char);
    if (selectArr1.length < selectArr2.length) flag = false;

  });

  return flag;
}
