import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBSectionContentComponent } from './bbsection-content.component';

describe('BBSectionContentComponent', () => {
  let component: BBSectionContentComponent;
  let fixture: ComponentFixture<BBSectionContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSectionContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSectionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
