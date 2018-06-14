import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBErrorsComponent } from './bberrors.component';

describe('BBErrorsComponent', () => {
  let component: BBErrorsComponent;
  let fixture: ComponentFixture<BBErrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBErrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
