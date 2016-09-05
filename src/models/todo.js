import { ExtendableRecord } from 'extendable-record';

export class Todo extends ExtendableRecord {
  isCompleted() {
    return this.complete;
  }
  updateText(text) {
    return this.set('text', text);
  }
  toggleComplete() {
    return this.set('completed', !this.isCompleted());
  }
  markCompleted() {
    return this.set('completed', true);
  }
}

Todo.defaultProperties = {
  text: null,
  completed: false,
  id: null
};
