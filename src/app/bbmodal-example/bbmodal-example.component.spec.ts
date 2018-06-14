import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBModalExampleComponent } from './bbmodal-example.component';

describe('BBModalExampleComponent', () => {
  let component: BBModalExampleComponent;
  let fixture: ComponentFixture<BBModalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBModalExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBModalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
