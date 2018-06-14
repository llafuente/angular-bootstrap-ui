import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBLayoutComponent } from './bblayout.component';

describe('BBLayoutComponent', () => {
  let component: BBLayoutComponent;
  let fixture: ComponentFixture<BBLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
