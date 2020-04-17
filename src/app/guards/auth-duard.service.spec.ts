import { TestBed } from '@angular/core/testing';

import { AuthDuardService } from './auth-duard.service';

describe('AuthDuardService', () => {
  let service: AuthDuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthDuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
