// This class represents a todo item and its associated
// data: the todo title and a flag that shows whether the
// todo item is done.

class Todo {
    static  DONE_MARKER = 'X';
    static UNDONE_MARKER = '';

    constructor(title) {
      this.title = title;
      this.done = false;
    }

    toString() {
      let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
      return `[${marker}] ${this.title}`;
    }

    markDone() {
      this.done = true;
    }

    markUndone() {
      this.done = false;
    }

    isDone() {
      return this.done;
    }

    getTitle() {
      return this.title;
    }
}


// This class represents a collection of Todo objects.
// You can perform typical collection-oriented actions
// on a TodoList object, including iteration and selection.

class TodoList {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  //rest of the class needs implementation
  add(todo) {
    if (!(todo instanceof Todo)) throw new TypeError('can only add Todo instances');
    this.todos.push(todo);
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.size() - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index];
  }

  _validateIndex(index) {
    if (typeof index !== 'number' || index >= this.size()) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();

  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.isDone());
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    this._validateIndex(index);
    return this.todos.splice(index, 1);
  }

  toString() {
    let str = '---- Today\'s Todos ---- \n';
    this.todos.forEach(todo => str += `${todo.toString()} \n`);
    return str;
  }

  forEach(callbackFn) {
    for (let idx = 0; idx < this.size(); idx++) {
      let currElem = this.todos[idx];
      callbackFn(currElem);
    }
  }

  // filter(callbackFn) { //my original own version, deprecated

  //   let filtArr = [];
  //   for (let idx = 0; idx < this.size(); idx++) {
  //     let currElem = this.todos[idx];
  //     if (callbackFn(currElem)) filtArr.push(currElem);
  //   }
  //   return filtArr;
  // }

  filter(callbackFn) {
    let filteredList = new this.constructor(this.title);

    this.forEach(todo => {
      if (callbackFn(todo)) {
        filteredList.add(todo);
      }
    });

    return filteredList;
  }

  findByTitle(title) {

    let filteredList = this.filter(todoItem => {
      return todoItem.getTitle() === title;
    });

    return filteredList.first();
  }

  allDone() {
    let filteredList = this.filter(todoItem => {
      return todoItem.isDone();
    });

    return filteredList;
  }

  allNotDone() {
    let filteredList = this.filter(todoItem => {
      return !(todoItem.isDone());
    });

    return filteredList;
  }

  markDone(title) {
    let firstTodo = this.findByTitle(title);
    if (firstTodo) firstTodo.markDone();
  }

  markAllDone() {
    this.forEach(todo => {
      todo.markDone();
    });
  }

  markAllUndone() {
    this.forEach(todo => {
      todo.markUndone();
    });
  }

  toArray() {
    return this.todos.slice();
  }

}


let emptyList = new TodoList("Empty List");

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);
list.add(todo5);
list.add(todo6);
todo1.markDone();
todo5.markDone();

//let doneTodos = list.filter(todo => todo.isDone());
list.markAllUndone();
// console.log(list);
// let todosCopy = list.toArray();
// console.log(todosCopy);

let test = list.findByTitle('Clean room');
console.log(test);