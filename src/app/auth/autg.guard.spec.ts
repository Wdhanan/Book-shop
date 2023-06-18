import { TestBed } from '@angular/core/testing';

import { AutgGuard } from './autg.guard';

describe('AutgGuard', () => {
  let guard: AutgGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutgGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
