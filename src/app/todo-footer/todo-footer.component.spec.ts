import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {TodoFooterComponent} from './todo-footer.component';
import {AddTokenService} from '../add-token.service';
import {FormsModule} from '@angular/forms';
import {ChangeDetectionStrategy, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';


describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;
  let service: AddTokenService;

  let el: DebugElement;
  let asyncEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoFooterComponent],
      imports: [FormsModule],
      providers: [AddTokenService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFooterComponent);
    component = fixture.componentInstance;

    service = new AddTokenService();
    component = new TodoFooterComponent(service);
    asyncEl = fixture.debugElement.query(By.css('span'));

    // fixture.debugElement.nativeElement.querySelector('#from').textContent).toContain('From Date');
    /* We can access it this way as well */
  });

  afterEach(() => {
    component = null;
    service = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  // we must call lifecycle hooks because they don't exist inside test units
  // we add a call back function using the spy which is called when the promise from the function
  // is resolved. if we know what to expect we can play with the value
  // when we are done with the async task we tell Jasmine via the done function
  */

  it('async code with done', (done) => {
    fixture.detectChanges();
    const spy = spyOn(service, 'isAuthenticatedAsynchronous').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // we have to call this function to detect changes in the DOM
      expect(asyncEl.nativeElement.textContent.trim()).toBe('false');
      done();
    });
  });

  /*
    this function executes the code inside its body in a special async test zone. this intercepts and keeps
    track of all promises inside its body. Only when all of these have been resolved then it returns the promise
    from whenStable().
   */

  it('async code with waitForAsync and whenStable', waitForAsync(() => {
    fixture.detectChanges();
    spyOn(service, 'isAuthenticatedAsynchronous').and.returnValue(Promise.resolve(true));
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(asyncEl.nativeElement.textContent.trim()).toBe('false');
    });
    component.ngOnInit();
  }));
  /*
  we still have a zone which keeps track of all promises created in this body. tick()
  blocks execution and simulates passage of time until ALL pending async activities
  are complete. can be with or without params.
  better because everything is linear and it actually is easier to understand
   */
  it('async code with fakeAsync and tick()', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(service, 'isAuthenticatedAsynchronous').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    tick();

    fixture.detectChanges();
    expect(asyncEl.nativeElement.textContent.trim()).toBe('false');
  }));


});
