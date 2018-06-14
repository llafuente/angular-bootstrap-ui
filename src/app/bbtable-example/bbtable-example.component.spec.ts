import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBTableExampleComponent } from './bbtable-example.component';

describe('BBTableExampleComponent', () => {
  let component: BBTableExampleComponent;
  let fixture: ComponentFixture<BBTableExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBTableExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
