import { TestBed } from '@angular/core/testing';

import { RandomToppingService } from './random-topping.service';

describe('RandomToppingService', () => {
  let service: RandomToppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomToppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
