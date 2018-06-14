import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBInputsExampleComponent } from './bbinputs-example.component';

describe('BBInputsExampleComponent', () => {
  let component: BBInputsExampleComponent;
  let fixture: ComponentFixture<BBInputsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBInputsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBInputsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
