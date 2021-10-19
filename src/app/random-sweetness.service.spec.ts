import { TestBed } from '@angular/core/testing';

import { RandomSweetnessService } from './random-sweetness.service';

describe('RandomSweetnessService', () => {
  let service: RandomSweetnessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomSweetnessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
