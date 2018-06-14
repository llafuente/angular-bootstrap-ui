import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBSectionFooterComponent } from './bbsection-footer.component';

describe('BBSectionFooterComponent', () => {
  let component: BBSectionFooterComponent;
  let fixture: ComponentFixture<BBSectionFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBSectionFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBSectionFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
