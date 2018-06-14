import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBCardComponent } from './bbcard.component';

describe('BBCardComponent', () => {
  let component: BBCardComponent;
  let fixture: ComponentFixture<BBCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
