import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBLoadingPageComponent } from './bbloading-page.component';

describe('BBLoadingPageComponent', () => {
  let component: BBLoadingPageComponent;
  let fixture: ComponentFixture<BBLoadingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBLoadingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBLoadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
