import { TestBed } from '@angular/core/testing';

import { JssService } from './jss.service';

describe('JssService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JssService = TestBed.get(JssService);
    expect(service).toBeTruthy();
  });
});
