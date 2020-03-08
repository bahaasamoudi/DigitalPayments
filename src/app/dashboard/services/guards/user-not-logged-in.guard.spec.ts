import { TestBed } from '@angular/core/testing';

import { UserNotLoggedInGuard } from './user-not-logged-in.guard';

describe('UserNotLoggedInService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNotLoggedInGuard = TestBed.get(UserNotLoggedInGuard);
    expect(service).toBeTruthy();
  });
});
