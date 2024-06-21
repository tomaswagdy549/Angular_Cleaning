import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authorizedToEditOrDeleteGuard } from './authorized-to-edit-or-delete.guard';

describe('authorizedToEditOrDeleteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authorizedToEditOrDeleteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
