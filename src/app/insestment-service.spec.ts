import { TestBed } from '@angular/core/testing';

import { InsestmentService } from './insestment-service';

describe('InsestmentService', () => {
  let service: InsestmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsestmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
