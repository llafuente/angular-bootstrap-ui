import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBDirectivesExampleComponent } from './bbdirectives-example.component';

describe('BBDirectivesExampleComponent', () => {
  let component: BBDirectivesExampleComponent;
  let fixture: ComponentFixture<BBDirectivesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBDirectivesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBDirectivesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
