import { TestBed } from '@angular/core/testing';

import { CanopyService } from './canopy.service';

describe('CanopyService', () => {
  let service: CanopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
