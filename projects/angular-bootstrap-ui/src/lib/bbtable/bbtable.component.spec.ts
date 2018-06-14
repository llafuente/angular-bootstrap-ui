import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBTableComponent } from './bbtable.component';

describe('BBTableComponent', () => {
  let component: BBTableComponent;
  let fixture: ComponentFixture<BBTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
