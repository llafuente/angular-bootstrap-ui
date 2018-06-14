import { TestBed, inject } from '@angular/core/testing';

import { AngularBootstrapUiService } from './angular-bootstrap-ui.service';

describe('AngularBootstrapUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularBootstrapUiService]
    });
  });

  it('should be created', inject([AngularBootstrapUiService], (service: AngularBootstrapUiService) => {
    expect(service).toBeTruthy();
  }));
});
