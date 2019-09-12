import { TestBed } from '@angular/core/testing';

import { SecuritiesDataService } from './securities-data.service';

describe('SecuritiesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecuritiesDataService = TestBed.get(SecuritiesDataService);
    expect(service).toBeTruthy();
  });
});
