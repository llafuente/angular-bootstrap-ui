import { TestBed, inject } from '@angular/core/testing';

import { BBErrorMessagesService } from './bberror-messages.service';

describe('BBErrorMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BBErrorMessagesService]
    });
  });

  it('should be created', inject([BBErrorMessagesService], (service: BBErrorMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
