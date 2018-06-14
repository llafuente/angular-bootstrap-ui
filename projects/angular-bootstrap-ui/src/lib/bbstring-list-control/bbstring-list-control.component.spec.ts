import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBStringListControlComponent } from './bbstring-list-control.component';

describe('BBStringListControlComponent', () => {
  let component: BBStringListControlComponent;
  let fixture: ComponentFixture<BBStringListControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBStringListControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBStringListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
