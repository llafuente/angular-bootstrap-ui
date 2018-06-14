import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBNavbarComponent } from './bbnavbar.component';

describe('BBNavbarComponent', () => {
  let component: BBNavbarComponent;
  let fixture: ComponentFixture<BBNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
