import { TestBed } from '@angular/core/testing';

import { TalentsApiService } from './talents-api.service';

describe('TalentsApiService', () => {
  let service: TalentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TalentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
