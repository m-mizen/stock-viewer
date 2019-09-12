import { TestBed } from '@angular/core/testing';

import { AsxService } from './asx.service';

describe('AsxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsxService = TestBed.get(AsxService);
    expect(service).toBeTruthy();
  });
});
