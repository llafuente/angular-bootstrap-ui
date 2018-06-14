import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBootstrapUiComponent } from './angular-bootstrap-ui.component';

describe('AngularBootstrapUiComponent', () => {
  let component: AngularBootstrapUiComponent;
  let fixture: ComponentFixture<AngularBootstrapUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularBootstrapUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBootstrapUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
