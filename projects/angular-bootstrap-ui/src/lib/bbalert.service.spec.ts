import { TestBed, inject } from '@angular/core/testing';

import { BBAlertService } from './bbalert.service';

describe('BBAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBAlertService]
    });
  });

  it('should be created', inject([BBAlertService], (service: BBAlertService) => {
    expect(service).toBeTruthy();
  }));
});
