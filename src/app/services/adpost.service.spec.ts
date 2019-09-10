import { TestBed } from '@angular/core/testing';

import { AdpostService } from './adpost.service';

describe('AdpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdpostService = TestBed.get(AdpostService);
    expect(service).toBeTruthy();
  });
});
