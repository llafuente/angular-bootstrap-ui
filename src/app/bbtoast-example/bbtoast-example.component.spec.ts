import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBToastExampleComponent } from './bbtoast-example.component';

describe('BBToastExampleComponent', () => {
  let component: BBToastExampleComponent;
  let fixture: ComponentFixture<BBToastExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBToastExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBToastExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
