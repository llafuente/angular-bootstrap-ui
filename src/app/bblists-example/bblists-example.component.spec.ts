import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBListsExampleComponent } from './bblists-example.component';

describe('BBListsExampleComponent', () => {
  let component: BBListsExampleComponent;
  let fixture: ComponentFixture<BBListsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBListsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBListsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
