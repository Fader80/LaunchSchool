//Given the following data structure write some code to return an array containing the colors of the fruits
// and the sizes of the vegetables. The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

//[["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]

//for in loop, with if/then conditional

let resArr = [];

for (let subObj in obj) {

  if (obj[subObj]['type'] === 'fruit') {
    resArr.push(obj[subObj]['colors'].map(elem => {
      return elem[0].toUpperCase() + elem.slice(1);
    }));
  } else {
    resArr.push(obj[subObj]['size'].toUpperCase());
  }
}
