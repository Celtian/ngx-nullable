import { TestBed } from '@angular/core/testing';
import { NgxNullableJoinPipe } from './ngx-nullable-join.pipe';
import { provideNullable } from './ngx-nullable.provider';
import { NgxNullableService } from './ngx-nullable.service';

describe('NgxNullableJoinPipe', () => {
  let pipe: NgxNullableJoinPipe;
  let nullableService: NgxNullableService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgxNullableJoinPipe,
        provideNullable({
          character: '-',
          separator: ',',
          displayZero: false
        })
      ]
    });

    pipe = TestBed.inject(NgxNullableJoinPipe);
    nullableService = TestBed.inject(NgxNullableService);
  });

  it('should be created', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform an array of strings using the nullable service', () => {
    const array = ['hello', 'world'];
    const separator = '-';

    // Spy on the service's join method to ensure it is called correctly
    const joinSpy = jest.spyOn(nullableService, 'join').mockReturnValue('hello-world');

    const result = pipe.transform(array, separator);
    expect(result).toBe('hello-world');
    expect(joinSpy).toHaveBeenCalledWith(array, separator);
  });

  it('should transform using the default separator when none is provided', () => {
    const array = ['hello', 'world'];

    // Spy on the service's join method to ensure it is called with the default separator
    const joinSpy = jest.spyOn(nullableService, 'join').mockReturnValue('hello,world');

    const result = pipe.transform(array);
    expect(result).toBe('hello,world');
    expect(joinSpy).toHaveBeenCalledWith(array, undefined); // Undefined separator defaults to the service's default
  });

  it('should handle null or empty array', () => {
    const emptyArray: string[] = [];

    // Mock the join method to return the nullable character for empty arrays
    jest.spyOn(nullableService, 'join').mockReturnValue('-');

    const result = pipe.transform(emptyArray);
    expect(result).toBe('-');
  });
});
