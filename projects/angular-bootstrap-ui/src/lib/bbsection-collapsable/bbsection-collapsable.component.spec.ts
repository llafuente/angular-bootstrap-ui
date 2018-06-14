import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBSectionCollapsableComponent } from './bbsection-collapsable.component';

describe('BBSectionCollapsableComponent', () => {
  let component: BBSectionCollapsableComponent;
  let fixture: ComponentFixture<BBSectionCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSectionCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSectionCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
