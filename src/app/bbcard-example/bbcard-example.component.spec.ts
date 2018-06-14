import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBCardExampleComponent } from './bbcard-example.component';

describe('BBCardExampleComponent', () => {
  let component: BBCardExampleComponent;
  let fixture: ComponentFixture<BBCardExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBCardExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
