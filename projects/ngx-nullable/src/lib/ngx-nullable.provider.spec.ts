import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { NgxNullableOptions } from './ngx-nullable.interface';
import {
  DISPLAY_ZERO_TOKEN,
  NULLABLE_CHARACTER_TOKEN,
  NULLABLE_SEPARATOR_TOKEN,
  provideNullable
} from './ngx-nullable.provider';

describe('provideNullable', () => {
  const defaultCharacter = '—';
  const defaultSeparator = ', ';
  const defaultDisplayZero = true;

  describe('with default options', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [provideNullable()]
      });
    });

    it('should provide default nullable character', () => {
      const nullableCharacter = TestBed.inject(NULLABLE_CHARACTER_TOKEN);
      expect(nullableCharacter).toBe(defaultCharacter);
    });

    it('should provide default nullable separator', () => {
      const nullableSeparator = TestBed.inject(NULLABLE_SEPARATOR_TOKEN);
      expect(nullableSeparator).toBe(defaultSeparator);
    });

    it('should provide default displayZero value', () => {
      const displayZero = TestBed.inject(DISPLAY_ZERO_TOKEN);
      expect(displayZero).toBe(defaultDisplayZero);
    });
  });

  describe('with custom options', () => {
    const customOptions: Partial<NgxNullableOptions> = {
      character: '-',
      separator: '; ',
      displayZero: false
    };

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [provideNullable(customOptions)]
      });
    });

    it('should provide custom nullable character', () => {
      const nullableCharacter = TestBed.inject(NULLABLE_CHARACTER_TOKEN);
      expect(nullableCharacter).toBe(customOptions.character);
    });

    it('should provide custom nullable separator', () => {
      const nullableSeparator = TestBed.inject(NULLABLE_SEPARATOR_TOKEN);
      expect(nullableSeparator).toBe(customOptions.separator);
    });

    it('should provide custom displayZero value', () => {
      const displayZero = TestBed.inject(DISPLAY_ZERO_TOKEN);
      expect(displayZero).toBe(customOptions.displayZero);
    });
  });

  describe('with partial custom options', () => {
    const partialOptions: Partial<NgxNullableOptions> = {
      character: '*'
    };

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [provideNullable(partialOptions)]
      });
    });

    it('should provide custom nullable character and default for others', () => {
      const nullableCharacter = TestBed.inject(NULLABLE_CHARACTER_TOKEN);
      const nullableSeparator = TestBed.inject(NULLABLE_SEPARATOR_TOKEN);
      const displayZero = TestBed.inject(DISPLAY_ZERO_TOKEN);

      expect(nullableCharacter).toBe(partialOptions.character); // Custom character
      expect(nullableSeparator).toBe(defaultSeparator); // Default separator
      expect(displayZero).toBe(defaultDisplayZero); // Default displayZero
    });
  });
});
