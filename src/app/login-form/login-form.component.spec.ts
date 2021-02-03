import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginFormComponent, User} from './login-form.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  // we declare these
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule, FormsModule] // (1)
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));

    component.ngOnInit(); // (2) we have to call this lifecycle because here we build the form
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting enabled to false, disables the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });

  it('entering email and password emits loggedin event', () => {
    let user: User;
    component.loggedIn.subscribe((value) => {
      user = value;
    });

    loginEl.nativeElement.value = 'poptasheva@yahoo.com';
    passwordEl.nativeElement.value = '1234';

    // we can call the function login to emit the event but the whole point
    // is to trigger it from the view, so we have to trigger a click event first but
    // we want to do that AFTER we are subscribed to an observable

    // we have to store the results from the observable into local variables and then
    // expect to be that result

    submitEl.triggerEventHandler('click', null);
    expect(user.email).toBe('poptasheva@yahoo.com');
    expect(user.password).toBe('1234');
  });

  // MODEL DRIVEN FORMS
  /* The first spec we want to check is that blank form is invalid */
/*

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('email and password field validity', () => {
    const email = component.form.controls.email;
    const password = component.form.controls.password;
    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  // we should check the validators as well, like required, min/max length

  it('form fields validity(required email)', () => {
    let errors;

    const email = component.form.controls.email;
    email.setValue('ana@yahoo.com');

    errors = email.errors || {};
    expect(errors.required).toBeFalsy();
  });

  it('form fields validity(pattern email)', () => {
    let errors;

    const email = component.form.controls.email;
    email.setValue('ana@yahoo.com');

    errors = email.errors || {};
    expect(errors.pattern).toBeTruthy();
  });

  it('form fields validity(password length)', () => {
    let errors;

    const password = component.form.controls.password;
    password.setValue('1234567');

    errors = password.errors || {};
    expect(errors.minlength).toBeFalsy(); // or truthy depends on the setValue
  });

  it('form fields validity(password required)', () => {
    let errors;

    const password = component.form.controls.password;
    password.setValue('1234567');

    errors = password.errors || {};
    expect(errors.required).toBeFalsy(); // or truthy depends on the setValue
  });
*/

});
