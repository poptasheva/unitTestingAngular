import {TestBed} from '@angular/core/testing';
import {TodoDataService} from './todo-data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Todo} from './todo';
import {HttpErrorResponse} from '@angular/common/http';

describe('TodoDataService', () => {
  let service: TodoDataService;
  // (1) declaring the controller
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // (2) we have to import this module
      providers: [
        TodoDataService
      ]
    });
    service = TestBed.inject(TodoDataService);
    // (3) we have to inject them for each test so we can use them as a reference
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('testing GET method', () => {
    // we have to have fake data that we can test against
    const mockTodo: Todo = {
      id: 1,
      title: 'Moe TODO',
      complete: true,
    };
    // we call the method and when the observable resolves we match the data
    service.getAllTodos().subscribe(data => {
      expect(data).toEqual(mockTodo);
    });

    // exceptOne will match the request's URL, if NO or MORE THAN ONE reqs matches this
    // will throw an error
    const req = httpTestingController.expectOne('http://localhost:3000/todos');

    // check that the method is actually GET
    expect(req.request.method).toEqual('GET');

    // resolves the request by returning a body plus additional HTTP info - like headers
    // returned in JSON by default
    req.flush(mockTodo);

    // assert that there are no left request to process
    // BETTER MOVE IT TO AFTER EACH BLOCK
    httpTestingController.verify();
  });

  it('testing POST method', () => {
    const mockTodo: Todo = {
      id: 1,
      title: 'Moe TODO',
      complete: true,
    };
    service.addToDo(mockTodo).subscribe(data => {
      expect(data).toEqual(mockTodo);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/todos');
    expect(req.request.method).toEqual('POST');
    req.flush(mockTodo);
    httpTestingController.verify();
  });

  it('testing PUT method', () => {
    const mockTodo: Todo = {
      id: 1,
      title: 'Moe TODO',
      complete: true,
    };
    service.updateToDoById(1, mockTodo).subscribe(data => {
      expect(data).toEqual(mockTodo);
    });
    const req = httpTestingController.expectOne('http://localhost:3000/todos/1');
    expect(req.request.method).toEqual('PUT');
    req.flush(mockTodo);
    httpTestingController.verify();
  });


  it('testing for 404 error', () => {
    const message = 'error 404 found';

    service.getAllTodos().subscribe(() =>
        fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404, status);
        expect(error.error).toEqual(message, 'message');
      });

    const req = httpTestingController.expectOne('http://localhost:3000/todos');
    req.flush(message, {status: 404, statusText: 'Not Found'});

  });
});

