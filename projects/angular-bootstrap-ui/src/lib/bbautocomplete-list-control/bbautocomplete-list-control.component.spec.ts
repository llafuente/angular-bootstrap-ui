import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BBAutocompleteListControlComponent } from './bbautocomplete-list-control.component';

describe('BBAutocompleteListControlComponent', () => {
  let component: BBAutocompleteListControlComponent;
  let fixture: ComponentFixture<BBAutocompleteListControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BBAutocompleteListControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BBAutocompleteListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
