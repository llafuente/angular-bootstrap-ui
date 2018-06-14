import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBSwitchComponent } from './bbswitch.component';

describe('BBSwitchComponent', () => {
  let component: BBSwitchComponent;
  let fixture: ComponentFixture<BBSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
