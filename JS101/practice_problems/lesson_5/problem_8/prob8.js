//first variant:

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let resArr = [];

for (let elem in obj) {
  obj[elem].forEach(item => {
    resArr.push(item.match(/[aeiouAEIOU]/g));
  });
}

console.log(resArr.flat());


//second variant:

let obj2 = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let resArr2 = [];

Object.values(obj2).forEach(arr => {

  arr.forEach(word => {
    word.match(/[aeiouAEIOU]/g).forEach(vowel => resArr2.push(vowel));
  });

});


console.log(resArr2);