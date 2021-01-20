import { TestBed } from '@angular/core/testing';

import { RendezVousService } from './rendez-vous.service';

describe('RendezVousService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RendezVousService = TestBed.get(RendezVousService);
    expect(service).toBeTruthy();
  });
});
