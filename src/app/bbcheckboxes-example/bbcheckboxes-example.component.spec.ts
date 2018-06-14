import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBCheckboxesExampleComponent } from './bbcheckboxes-example.component';

describe('BBCheckboxesExampleComponent', () => {
  let component: BBCheckboxesExampleComponent;
  let fixture: ComponentFixture<BBCheckboxesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBCheckboxesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBCheckboxesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
