import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBBadgesExampleComponent } from './bbbadges-example.component';

describe('BBBadgesExampleComponent', () => {
  let component: BBBadgesExampleComponent;
  let fixture: ComponentFixture<BBBadgesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBBadgesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBBadgesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
