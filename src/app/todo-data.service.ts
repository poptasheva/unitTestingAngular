import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';


const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  todos: Todo[] = [];
  data: any;

  constructor(private http: HttpClient) {
  }

  // mock GET/all
  getAllTodos(): any {
    return this.http.get<Todo[]>(API_URL + '/todos');
  }

  // mock DELETE req
  deleteToDoById(id: number): any {
    const url = API_URL + `/todos/${id}`;
    return this.http.delete(url);
  }

  // mock POST req
  addToDo(todo: Todo): Observable<Todo> {
    // @ts-ignore
    return this.http.post(API_URL + '/todos', todo);
  }

  // mock GET/todos/:id req
  getToDoById(id: number): any {
    return id;
  }

  // mock PUT/todos/:id req
  updateToDoById(id: number, todo: Todo): Observable<Todo> {
    const todoID = this.getToDoById(id);
    if (!todoID) {
      return null;
    }
    const url = API_URL + `/todos/${todoID}`;
    // @ts-ignore
    return this.http.put(url, todo).pipe(
      catchError(this.handleError('updateTodo', todo)));
  }


  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
