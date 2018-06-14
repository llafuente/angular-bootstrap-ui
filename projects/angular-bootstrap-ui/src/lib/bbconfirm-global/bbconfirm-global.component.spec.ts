import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBConfirmGlobalComponent } from './bbconfirm-global.component';

describe('BBConfirmGlobalComponent', () => {
  let component: BBConfirmGlobalComponent;
  let fixture: ComponentFixture<BBConfirmGlobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBConfirmGlobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBConfirmGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
