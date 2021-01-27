export class Todo {
  id: number;
  title: string;
  complete: boolean;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}

const todo = new Todo({
  title: 'First ToDo Item in my list',
  complete: false
});
