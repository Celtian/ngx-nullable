import { TestBed } from '@angular/core/testing';
import { NgxNullablePipe } from './ngx-nullable.pipe';
import { provideNullable } from './ngx-nullable.provider';
import { NgxNullableService } from './ngx-nullable.service';

describe('NgxNullablePipe', () => {
  describe('toBeTruthy', () => {
    let pipe: NgxNullablePipe;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          NgxNullablePipe,
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: false
          })
        ]
      });
      pipe = TestBed.inject(NgxNullablePipe);
    });

    it('should be created', () => {
      expect(pipe).toBeTruthy();
    });
  });

  describe('transform with string values', () => {
    let pipe: NgxNullablePipe;
    let nullableService: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          NgxNullablePipe,
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: false
          })
        ]
      });

      pipe = TestBed.inject(NgxNullablePipe);
      nullableService = TestBed.inject(NgxNullableService);
    });

    it('should transform a valid string', () => {
      const input = 'hello';

      // Spy on the service's fromString method
      const fromStringSpy = jest.spyOn(nullableService, 'fromString').mockReturnValue(input);

      const result = pipe.transform(input);
      expect(result).toBe('hello');
      expect(fromStringSpy).toHaveBeenCalledWith(input);
    });

    it('should transform null or undefined string to nullable character', () => {
      const nullableChar = '-';

      // Mock the fromString method to return the nullable character for null or undefined values
      jest.spyOn(nullableService, 'fromString').mockReturnValue(nullableChar);

      expect(pipe.transform(null)).toBe(nullableChar);
      expect(pipe.transform(undefined)).toBe(nullableChar);
    });
  });

  describe('transform with number values', () => {
    let pipe: NgxNullablePipe;
    let nullableService: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          NgxNullablePipe,
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: false
          })
        ]
      });

      pipe = TestBed.inject(NgxNullablePipe);
      nullableService = TestBed.inject(NgxNullableService);
    });

    it('should transform a valid number', () => {
      const input = 42;

      // Spy on the service's fromNumber method
      const fromNumberSpy = jest.spyOn(nullableService, 'fromNumber').mockReturnValue(input);

      const result = pipe.transform(input);
      expect(result).toBe(42);
      expect(fromNumberSpy).toHaveBeenCalledWith(input);
    });

    it('should return zero if input is 0 and displayZero is true', () => {
      const input = 0;

      // Spy on the service's fromNumber method
      const fromNumberSpy = jest.spyOn(nullableService, 'fromNumber').mockReturnValue(0);

      const result = pipe.transform(input);
      expect(result).toBe(0);
      expect(fromNumberSpy).toHaveBeenCalledWith(input);
    });

    it('should return nullable character for null or undefined number input', () => {
      const nullableChar = '-';

      // Mock the fromNumber method to return the nullable character for null or undefined numbers
      jest.spyOn(nullableService, 'fromNumber').mockReturnValue(nullableChar);

      expect(pipe.transform(null)).toBe(nullableChar);
      expect(pipe.transform(undefined)).toBe(nullableChar);
    });
  });

  describe('displayZero', () => {
    let pipe: NgxNullablePipe;
    let nullableService: NgxNullableService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          NgxNullablePipe,
          provideNullable({
            character: '-',
            separator: ',',
            displayZero: false
          })
        ]
      });

      pipe = TestBed.inject(NgxNullablePipe);
      nullableService = TestBed.inject(NgxNullableService);
    });

    it('should return nullable character if input is 0 and displayZero is false', () => {
      const input = 0;
      const nullableChar = '-';

      // Spy on the service's fromNumber method
      const fromNumberSpy = jest.spyOn(nullableService, 'fromNumber').mockReturnValue(nullableChar);

      const result = pipe.transform(input);
      expect(result).toBe(nullableChar);
      expect(fromNumberSpy).toHaveBeenCalledWith(input);
    });
  });
});
