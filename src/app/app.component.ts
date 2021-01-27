import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];
  private readonly onDestroy = new Subject<void>();

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit(): any {
    this.listAll();
  }

  listAll(): any {
    this.todoDataService.getAllTodos().subscribe(data => {
      this.todos = data;
      console.log('Successfully fetched all todos');
    });
  }

  removeTodo(todo): any {
    this.todoDataService.deleteToDoById(todo.id).subscribe(() => {
      const removeIndex = this.todos.map(item => item.id).indexOf(todo.id);
      this.todos.splice(removeIndex, 1);
      console.log('Successfully deleted todo');
      this.listAll();
    });
  }

  addTodo(todo: Todo): any {
    this.todoDataService.addToDo(todo).subscribe((newTodo) => {
      this.todos.push(newTodo);
    });
    this.listAll();
    console.log('Successfully added todo');
  }

  toggleTodoComplete(id): any {
    id.complete = !id.complete;
    this.todoDataService.updateToDoById(id.id, id).subscribe(() => {
      console.log('Successfully updated todo');
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }
}
