import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBButtonExampleComponent } from './bbbutton-example.component';

describe('BBButtonExampleComponent', () => {
  let component: BBButtonExampleComponent;
  let fixture: ComponentFixture<BBButtonExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBButtonExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
