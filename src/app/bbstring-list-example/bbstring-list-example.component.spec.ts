import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBStringListExampleComponent } from './bbstring-list-example.component';

describe('BBStringListExampleComponent', () => {
  let component: BBStringListExampleComponent;
  let fixture: ComponentFixture<BBStringListExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBStringListExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBStringListExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
