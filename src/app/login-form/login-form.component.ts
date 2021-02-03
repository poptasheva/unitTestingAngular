import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class User {
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() enabled = true;
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  /*  this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('/^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]]
    });*/
  }

  login(email, password): void {
    if (email && password) {
      console.log('Emitting', 'Email: ' + email, 'Password: ' + password);
      this.loggedIn.emit(new User(email, password));
    }
  }
  /*login(): void {
    console.log('ana', this.form.controls.password);
    if (this.form.valid) {
      this.loggedIn.emit(new User(this.form.value.email, this.form.value.password));
    }
  }
*/
}
