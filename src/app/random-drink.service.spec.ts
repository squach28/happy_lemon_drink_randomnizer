import { TestBed } from '@angular/core/testing';

import { RandomDrinkService } from './random-drink.service';

describe('RandomDrinkService', () => {
  let service: RandomDrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomDrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
