import { TestBed, inject } from '@angular/core/testing';

import { CachedService } from './cached.service';

describe('CachedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CachedService]
    });
  });

  it('should be created', inject([CachedService], (service: CachedService) => {
    expect(service).toBeTruthy();
  }));
});
