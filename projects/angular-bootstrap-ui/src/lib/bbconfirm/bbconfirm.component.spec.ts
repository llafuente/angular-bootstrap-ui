import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBConfirmComponent } from './bbconfirm.component';

describe('BBConfirmComponent', () => {
  let component: BBConfirmComponent;
  let fixture: ComponentFixture<BBConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
