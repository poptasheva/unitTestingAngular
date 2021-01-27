import {TestBed} from '@angular/core/testing';

import {TodoDataService} from './todo-data.service';
import {inject} from '@angular/core';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // @ts-ignore
  it('should ...', inject([TodoDataService], (services: TodoDataService) => {
    expect(services).toBeTruthy();
  }));
});
