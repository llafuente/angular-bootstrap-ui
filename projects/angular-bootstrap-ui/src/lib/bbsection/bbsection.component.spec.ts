import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBSectionComponent } from './bbsection.component';

describe('BBSectionComponent', () => {
  let component: BBSectionComponent;
  let fixture: ComponentFixture<BBSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
