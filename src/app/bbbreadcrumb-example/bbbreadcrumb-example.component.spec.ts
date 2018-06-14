import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBBreadcrumbExampleComponent } from './bbbreadcrumb-example.component';

describe('BBBreadcrumbExampleComponent', () => {
  let component: BBBreadcrumbExampleComponent;
  let fixture: ComponentFixture<BBBreadcrumbExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBBreadcrumbExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBBreadcrumbExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
