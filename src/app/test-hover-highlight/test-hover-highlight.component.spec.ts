import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHoverHighlightComponent } from './test-hover-highlight.component';

describe('TestHoverHighlightComponent', () => {
  let component: TestHoverHighlightComponent;
  let fixture: ComponentFixture<TestHoverHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHoverHighlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHoverHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
