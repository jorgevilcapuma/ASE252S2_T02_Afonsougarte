import { TestBed } from '@angular/core/testing';

import { AuthÇService } from './authç.service';

describe('AuthÇService', () => {
  let service: AuthÇService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthÇService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
