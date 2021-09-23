import { TestBed } from '@angular/core/testing';

import { GetStaticDataService } from './get-static-data.service';

describe('GetStaticDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStaticDataService = TestBed.get(GetStaticDataService);
    expect(service).toBeTruthy();
  });
});
