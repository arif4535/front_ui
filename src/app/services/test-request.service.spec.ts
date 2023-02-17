import { TestBed } from '@angular/core/testing';

import { TestRequestService } from './test-request.service';

describe('TestRequestService', () => {
  let service: TestRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
