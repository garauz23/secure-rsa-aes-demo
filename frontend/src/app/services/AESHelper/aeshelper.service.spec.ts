import { TestBed } from '@angular/core/testing';

import { AESHelperService } from './aeshelper.service';

describe('AESHelperService', () => {
  let service: AESHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AESHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
