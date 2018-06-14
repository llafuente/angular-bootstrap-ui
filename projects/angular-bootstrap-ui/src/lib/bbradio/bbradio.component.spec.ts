import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBRadioComponent } from './bbradio.component';

describe('BBRadioComponent', () => {
  let component: BBRadioComponent;
  let fixture: ComponentFixture<BBRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
