import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBFormsExampleComponent } from './bbforms-example.component';

describe('BBFormsExampleComponent', () => {
  let component: BBFormsExampleComponent;
  let fixture: ComponentFixture<BBFormsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBFormsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
