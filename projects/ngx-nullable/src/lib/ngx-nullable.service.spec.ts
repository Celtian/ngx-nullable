import { TestBed } from '@angular/core/testing';

import { NgxNullableService } from './ngx-nullable.service';

describe('NgxNullableService', () => {
  let service: NgxNullableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNullableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
