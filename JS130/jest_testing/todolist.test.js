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

  test(' list.markDoneAt should make `done` property `true` for given element, and  Reference error occurs if out of bounds index is passed', () => {
    //need to supply the first test

    expect(() => list.markDoneAt(3)).toThrow(ReferenceError);
  })

  test('list.markUndoneAt should make `done` property `false` for the given element of list.todos', () => {

  })


  
});