import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTokenService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(): any {
    return localStorage.setItem('token', '1234');
  }

  isAuthenticatedAsynchronous(): Promise<boolean> {
    return Promise.resolve(!!localStorage.getItem('token'));
  }

  constructor() {
  }
}
