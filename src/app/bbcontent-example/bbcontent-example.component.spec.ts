import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBContentExampleComponent } from './bbcontent-example.component';

describe('BBContentExampleComponent', () => {
  let component: BBContentExampleComponent;
  let fixture: ComponentFixture<BBContentExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBContentExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
