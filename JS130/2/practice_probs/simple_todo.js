function makeList() {

  let list = [];

  return function(argStr) {
    if (!argStr) {
      if (!list.length) {
        console.log('the list is empty');
      } else {
        list.forEach(item => console.log(item));
      }
    } else if (!list.includes(argStr)) {
      list.push(argStr);
      console.log(`${argStr} added!`);
    } else {
      list.splice(list.indexOf(argStr), 1);
      console.log(`${argStr} removed!`);
    }
  };

}


let list = makeList();
list();
//The list is empty.

list("make breakfast");
//make breakfast added!

list("read book");
//read book added!

list();
//make breakfast
//read book

list("make breakfast");
//make breakfast removed!

list();
//read book