/* eslint-disable */

const Todo = require('./todo');
const TodoList = require('./todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  // your tests go here

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('list.toArray is an array of the todos', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  })

  test('list.first is the same as todo1', () => {
    expect(list.first()).toBe(todo1);
  })

  test('list.last is the same as todo3', () => {
    expect(list.last()).toBe(todo3);
  })

  test('list.shift should return todo1, and then list.todos should have first element missing', () => {
    expect(list.shift()).toBe(todo1);
    expect(list.todos).toEqual([todo2, todo3]);
  })

  test('list.pop should return todo3, and list.todos should have the last element missing', () => {
    expect(list.pop()).toEqual(todo3); // this was changed from toBe
    expect(list.todos).toEqual([todo1, todo2]);
  })

  test('list.isDone should return false if every todo is not done', () => {
    expect(list.isDone()).toBe(false);
  })

  test('TypeError occurs if adding non-object to list.todos', () => {
    expect(() => list.add('non-object')).toThrow(TypeError);
  })

  test('list.itemAt should return todo at specified index, also Reference error occurs if out of bounds index is passed', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(() => list.itemAt(3)).toThrow(ReferenceError);
  })

  test(' list.markDoneAt should make `done` property `true` for given element, and Reference error occurs if out of bounds index is passed', () => {
    
    list.markDoneAt(1);
    
    expect(list.todos[0].done).toBe(false);
    expect(list.todos[1].done).toBe(true);
    expect(list.todos[2].done).toBe(false);
    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  })

  test('list.markUndoneAt should make `done` property `false` for the given element of list.todos, and Reference Error occurs if out of bounds index passed', () => {
    list.todos.forEach(todo => todo.done = true);
    
    list.markUndoneAt(1);
    
    expect(todo1.done).toBe(true);
    expect(todo2.done).toBe(false);
    expect(todo3.done).toBe(true);
    expect(() => list.markUndoneAt(3)).toThrow(ReferenceError);

  })

  test('list.markAllDone should change the `done` property of all todos to `true`', () => {
    list.markAllDone();
    expect(todo1.done).toBe(true);
    expect(todo2.done).toBe(true);
    expect(todo3.done).toBe(true);
  })

  test('list.removeAt removes the todo at specified index, and throws Error if out of bounds index passed', () => {
    list.removeAt(1);
    expect(list.todos).toEqual([todo1, todo3]);
    expect(() => list.removeAt(3)).toThrow(ReferenceError);
  })

  test('toString returns string representation of the list', () => {
    let string = `---- Today's Todos ----
[ ] Buy milk
[ ] Clean room
[ ] Go to the gym`;

     expect(list.toString()).toBe(string);
  })

  test('toString returns string representation of list when a todo is done', () => {
    
    //todo1.done = true;
    list.markDoneAt(0);

    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    
    
    expect(list.toString()).toBe(string);
  })

  test('toString returns string representation of list when all todos are done', () => {
    
    list.markAllDone();
    let string = `---- Today's Todos ----
[X] Buy milk
[X] Clean room
[X] Go to the gym`;

  expect(list.toString()).toBe(string);
  })

  test('forEach should iterate over each of the todos of list', () => {
    let counter = 0;
    list.forEach(todo => counter++);

    expect(counter).toBe(3);

  })

   test('filter should select only todos that match the criterion', () => {
    list.markDoneAt(1);
    let filtList = list.filter(todo => todo.isDone());
    
    
    expect(filtList).toBeInstanceOf(TodoList);
    expect(filtList.toArray()).toEqual([todo2]);
  })

  
});