import { TestBed, inject } from '@angular/core/testing';

import { BBConfirmService } from './bbconfirm.service';

describe('BBConfirmService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBConfirmService]
    });
  });

  it('should be created', inject([BBConfirmService], (service: BBConfirmService) => {
    expect(service).toBeTruthy();
  }));
});
