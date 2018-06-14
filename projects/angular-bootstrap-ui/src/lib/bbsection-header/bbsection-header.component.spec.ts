import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBSectionHeaderComponent } from './bbsection-header.component';

describe('BBSectionHeaderComponent', () => {
  let component: BBSectionHeaderComponent;
  let fixture: ComponentFixture<BBSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
