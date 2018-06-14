import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBModalComponent } from './bbmodal.component';

describe('BBModalComponent', () => {
  let component: BBModalComponent;
  let fixture: ComponentFixture<BBModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
