import { TestBed } from '@angular/core/testing';

import { ErrorsHttpInterceptorService } from './errors-http-interceptor.service';

describe('ErrorsHttpInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorsHttpInterceptorService = TestBed.get(ErrorsHttpInterceptorService);
    expect(service).toBeTruthy();
  });
});
