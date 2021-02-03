import {Component, OnInit} from '@angular/core';
import {AddTokenService} from '../add-token.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  token: string;
  asyncNeedsLogin: boolean;
  loginStatus: boolean;

  constructor(private addTokenService: AddTokenService) {
  }

  ngOnInit(): void {
    this.addTokenService.setToken();
    this.token = localStorage.getItem('token');

    // async code
    this.addTokenService.isAuthenticatedAsynchronous().then((authenticated) => {
      this.asyncNeedsLogin = !authenticated;
    });
  }

  needsLogin(): boolean {
    this.loginStatus = this.addTokenService.isAuthenticated();
    return this.loginStatus;
  }
}
