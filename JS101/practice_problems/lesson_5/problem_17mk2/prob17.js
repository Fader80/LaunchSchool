let charArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const segGen = function(length) { // helper
  let segment = '';

  for (let idx = 0; idx < length; idx++) {
    segment += charArr[Math.floor(Math.random() * charArr.length)];
  }

  return segment;
};


const idGen = function() {

  let segArr = [segGen(8), segGen(4), segGen(4), segGen(4), segGen(4), segGen(12)];

  return segArr.join('-');
};