import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBCheckComponent } from './bbcheck.component';

describe('BBCheckComponent', () => {
  let component: BBCheckComponent;
  let fixture: ComponentFixture<BBCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
