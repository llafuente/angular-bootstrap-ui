import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBBreadcrumbComponent } from './bbbreadcrumb.component';

describe('BBBreadcrumbComponent', () => {
  let component: BBBreadcrumbComponent;
  let fixture: ComponentFixture<BBBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
