import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css', '../app.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() remove: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit(): void {
  }

  removeTodo(todo): any {
    this.remove.emit(todo);
  }

  toggleTodoComplete(todo): any {
    this.toggleComplete.emit(todo);
  }
}
