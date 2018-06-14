import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBDatepickerComponent } from './bbdatepicker.component';

describe('BBDatepickerComponent', () => {
  let component: BBDatepickerComponent;
  let fixture: ComponentFixture<BBDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
