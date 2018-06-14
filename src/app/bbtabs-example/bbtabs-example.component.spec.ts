import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBTabsExampleComponent } from './bbtabs-example.component';

describe('BBTabsExampleComponent', () => {
  let component: BBTabsExampleComponent;
  let fixture: ComponentFixture<BBTabsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBTabsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBTabsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
