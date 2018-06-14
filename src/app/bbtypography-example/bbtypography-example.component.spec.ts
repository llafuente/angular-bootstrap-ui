import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBTypographyExampleComponent } from './bbtypography-example.component';

describe('BBTypographyExampleComponent', () => {
  let component: BBTypographyExampleComponent;
  let fixture: ComponentFixture<BBTypographyExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBTypographyExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBTypographyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
