import { TestBed } from '@angular/core/testing';

import { AdminGuradGuard } from './admin-gurad.guard';

describe('AdminGuradGuard', () => {
  let guard: AdminGuradGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminGuradGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
