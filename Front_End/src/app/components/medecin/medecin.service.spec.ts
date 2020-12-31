import { TestBed } from '@angular/core/testing';

import { MedecinService } from './medecin.service';

describe('MedecinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedecinService = TestBed.get(MedecinService);
    expect(service).toBeTruthy();
  });
});
