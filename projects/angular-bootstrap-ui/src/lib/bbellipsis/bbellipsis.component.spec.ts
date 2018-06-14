import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBEllipsisComponent } from './bbellipsis.component';

describe('BBEllipsisComponent', () => {
  let component: BBEllipsisComponent;
  let fixture: ComponentFixture<BBEllipsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBEllipsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBEllipsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
