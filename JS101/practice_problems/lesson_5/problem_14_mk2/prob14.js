let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

const capitaliser = function(word) {
  return word[0].toUpperCase() + word.slice(1);
};

const uppercaser = function(word) {
  let resultStr = '';
  for (let idx = 0; idx < word.length; idx++) {
    resultStr += word[idx].toUpperCase();
  }
  return resultStr;
};

let targArr = [];

for (let subObj in obj) {
  if (obj[subObj].type === 'fruit') {

    targArr.push(obj[subObj]['colors'].map(elem => capitaliser(elem)));
  } else {
    targArr.push(uppercaser(obj[subObj]['size']));
  }
}


