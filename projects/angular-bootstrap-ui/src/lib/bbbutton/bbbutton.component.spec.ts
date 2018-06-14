import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBButtonComponent } from './bbbutton.component';

describe('BBButtonComponent', () => {
  let component: BBButtonComponent;
  let fixture: ComponentFixture<BBButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
