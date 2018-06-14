import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBInputContainerComponent } from './bbinput-container.component';

describe('BBInputContainerComponent', () => {
  let component: BBInputContainerComponent;
  let fixture: ComponentFixture<BBInputContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBInputContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBInputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
