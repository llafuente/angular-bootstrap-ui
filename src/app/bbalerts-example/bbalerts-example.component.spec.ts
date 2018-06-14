import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBAlertsExampleComponent } from './bbalerts-example.component';

describe('BBAlertsExampleComponent', () => {
  let component: BBAlertsExampleComponent;
  let fixture: ComponentFixture<BBAlertsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBAlertsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBAlertsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
