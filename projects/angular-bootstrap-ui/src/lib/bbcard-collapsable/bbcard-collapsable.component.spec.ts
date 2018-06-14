import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBCardCollapsableComponent } from './bbcard-collapsable.component';

describe('BBCardCollapsableComponent', () => {
  let component: BBCardCollapsableComponent;
  let fixture: ComponentFixture<BBCardCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBCardCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBCardCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
