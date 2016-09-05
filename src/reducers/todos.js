import { ImmutableReducer } from  'immutable-reducer';
import { createReducer } from 'redux-caller';
import { List } from 'immutable';
import {
  ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL,
    CLEAR_COMPLETED } from '../constants/ActionTypes'
import { Todo } from '../models/todo';

class TodoReducer extends ImmutableReducer {
      [ADD_TODO]({text}) {
        const maxById = this.todos.maxBy(todo => todo.id);
        const nextId = maxById ? maxById.id + 1 : 0;
        return this.update('todos', todos => todos.push(new Todo({id: nextId, text: text})));
      }
      [DELETE_TODO]({id}) {
        return this.update('todos', todos => todos.delete(this.getIndexById(id)));
      }
      [EDIT_TODO]({id, text}) {
        return this.updateIn(['todos', this.getIndexById(id)], todo => todo.updateText(text));
      }
      [COMPLETE_TODO]({id}) {
        return this.updateIn(['todos', this.getIndexById(id)], todo => todo.toggleComplete());
      }
      [COMPLETE_ALL]() {
        return this.update('todos', todos => todos.map(todo => todo.markCompleted()));
      }
      [CLEAR_COMPLETED]() {
        return this.update('todos', todos => todos.filter(todo => todo.isCompleted()));
      }
      getIndexById(id) {
        return this.todos.findIndex(todo => todo.id === id);
      }
}

TodoReducer.defaultProperties = {
  todos: List.of(new Todo({id: 0, text: 'Hello world!'}))
};

export const todoReducer = createReducer(new TodoReducer());
