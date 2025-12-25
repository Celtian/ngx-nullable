import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { provideNullable } from './ngx-nullable.provider';
import { NgxNullableService } from './ngx-nullable.service';

describe('NgxNullableService', () => {
  describe('toBeTruthy', () => {
    let service: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: true
          })
        ]
      });
      service = TestBed.inject(NgxNullableService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('join', () => {
    let service: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: true
          })
        ]
      });
      service = TestBed.inject(NgxNullableService);
    });

    it('should join an array of strings with default separator', () => {
      const result = service.join(['hello', 'world']);
      expect(result).toBe('hello,world'); // Using ',' as the separator
    });

    it('should join an array of strings with custom separator', () => {
      const result = service.join(['hello', 'world'], '-');
      expect(result).toBe('hello-world'); // Using '-' as the separator
    });

    it('should filter out null, undefined, or empty strings', () => {
      const result = service.join(['hello', null, 'world', undefined, '', ' ', 'foo']);
      expect(result).toBe('hello,world,foo');
    });

    it('should return nullable character if all elements are null, undefined, or empty strings', () => {
      const result = service.join([null, undefined, '', ' ']);
      expect(result).toBe('-'); // '-' is the default nullable character
    });
  });

  describe('fromString', () => {
    let service: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: true
          })
        ]
      });
      service = TestBed.inject(NgxNullableService);
    });

    it('should return the input string if it exists', () => {
      const result = service.fromString('hello');
      expect(result).toBe('hello');
    });

    it('should return nullable character if the input is null or undefined', () => {
      const result = service.fromString(null);
      expect(result).toBe('-');
      const result2 = service.fromString(undefined);
      expect(result2).toBe('-');
    });
  });

  describe('fromNumber', () => {
    let service: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: true
          })
        ]
      });
      service = TestBed.inject(NgxNullableService);
    });

    it('should return the number if input is non-null and non-zero', () => {
      const result = service.fromNumber(5);
      expect(result).toBe(5);
    });

    it('should return nullable character if input is null and displayZero is true', () => {
      const result = service.fromNumber(null);
      expect(result).toBe('-');
    });

    it('should return nullable character if input is undefined and displayZero is true', () => {
      const result = service.fromNumber(undefined);
      expect(result).toBe('-');
    });

    it('should return zero if input is zero and displayZero is true', () => {
      const result = service.fromNumber(0);
      expect(result).toBe(0);
    });
  });

  describe('displayZero', () => {
    let service: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: false
          })
        ]
      });
      service = TestBed.inject(NgxNullableService);
    });

    it('should return nullable character if input is zero and displayZero is false', () => {
      const result = service.fromNumber(0);
      expect(result).toBe('-'); // '-' is the nullable character
    });
  });
});
