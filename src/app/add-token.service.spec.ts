import {TestBed} from '@angular/core/testing';
import {AddTokenService} from './add-token.service';

describe('AddTokenService', () => {
  let service: AddTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTokenService);
  });
  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true if the function has a token', () => {
    localStorage.setItem('token', '1234');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false if the function does not have a token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
