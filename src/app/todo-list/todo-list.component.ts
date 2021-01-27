import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css', '../app.component.css']
})
export class TodoListComponent {

  newTodo: Todo = new Todo();
  @Input() todos: Todo[] = [];
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() add: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  onRemoveTodo(todo: Todo): any {
    this.remove.emit(todo);
  }

  onToggleTodoComplete(todo: Todo): any {
    this.toggleComplete.emit(todo);
  }

  onAddTodo(): any {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo();
  }
}
