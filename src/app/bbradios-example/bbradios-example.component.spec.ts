import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBRadiosExampleComponent } from './bbradios-example.component';

describe('BBRadiosExampleComponent', () => {
  let component: BBRadiosExampleComponent;
  let fixture: ComponentFixture<BBRadiosExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBRadiosExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBRadiosExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
