import { TestBed } from '@angular/core/testing';

import { NatureServiceService } from './nature-service.service';

describe('NatureServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NatureServiceService = TestBed.get(NatureServiceService);
    expect(service).toBeTruthy();
  });
});
