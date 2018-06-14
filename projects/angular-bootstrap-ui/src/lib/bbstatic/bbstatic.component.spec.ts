import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBStaticComponent } from './bbstatic.component';

describe('BBStaticComponent', () => {
  let component: BBStaticComponent;
  let fixture: ComponentFixture<BBStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
