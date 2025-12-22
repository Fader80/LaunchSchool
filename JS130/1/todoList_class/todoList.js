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
    this._validateIndex(index);
    //needs to be fleshed out

  }

  markUndoneAt(index) {
    //STUB
  }

}

let list = new TodoList("Today's Todos");
//console.log(list);


let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");

list.add(todo1);
list.add(todo2);
list.add(todo3);
list.add(todo4);


// Omitted code

// Omitted code

console.log(list.itemAt(1)); // delete this line after testing it


let emptyList = new TodoList("Empty List");

