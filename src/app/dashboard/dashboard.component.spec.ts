import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import {DashboardComponent} from './dashboard.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {routes} from '../app-routing.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  // (1) declare these
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes(routes)], // (2) declare the import with the routes!!!
      providers: [Location] // (3) provide the location service so we can check the url in the browser
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;


    // (4) inject them in the service spec
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
   // router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "dashboard" redirects to /dashboard', fakeAsync(() => {
    router.navigate(['/dashboard']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));

  it('navigate to "routing" redirects to /routing', fakeAsync(() => {
    router.navigate(['/routing']).then(() => {
      expect(location.path()).toBe('/routing');
    });
  }));

  it('navigate to "/" redirects to /dashboard', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/dashboard');
    });
  }));
});
