import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBAlertGlobalComponent } from './bbalert-global.component';

describe('BBAlertGlobalComponent', () => {
  let component: BBAlertGlobalComponent;
  let fixture: ComponentFixture<BBAlertGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBAlertGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBAlertGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
