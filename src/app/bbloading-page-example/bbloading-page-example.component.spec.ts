import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBLoadingPageExampleComponent } from './bbloading-page-example.component';

describe('BBLoadingPageExampleComponent', () => {
  let component: BBLoadingPageExampleComponent;
  let fixture: ComponentFixture<BBLoadingPageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBLoadingPageExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBLoadingPageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
