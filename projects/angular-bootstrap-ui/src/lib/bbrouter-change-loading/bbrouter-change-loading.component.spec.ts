import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBRouterChangeLoadingComponent } from './bbrouter-change-loading.component';

describe('BBRouterChangeLoadingComponent', () => {
  let component: BBRouterChangeLoadingComponent;
  let fixture: ComponentFixture<BBRouterChangeLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBRouterChangeLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBRouterChangeLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
