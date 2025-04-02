import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { regsGuard } from './regs.guard';

describe('regsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => regsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
