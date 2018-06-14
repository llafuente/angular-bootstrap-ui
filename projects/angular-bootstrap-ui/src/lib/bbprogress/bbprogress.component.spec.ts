import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBProgressComponent } from './bbprogress.component';

describe('BBProgressComponent', () => {
  let component: BBProgressComponent;
  let fixture: ComponentFixture<BBProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
