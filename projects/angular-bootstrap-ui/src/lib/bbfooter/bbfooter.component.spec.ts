import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBFooterComponent } from './bbfooter.component';

describe('BBFooterComponent', () => {
  let component: BBFooterComponent;
  let fixture: ComponentFixture<BBFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
