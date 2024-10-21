import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { NgxNullableOptions } from './ngx-nullable.interface';

export const NULLABLE_CHARACTER_TOKEN = new InjectionToken<string>('[ngxNullable] Nullable character');
export const NULLABLE_SEPARATOR_TOKEN = new InjectionToken<string>('[ngxNullable] Nullable separator');
export const DISPLAY_ZERO_TOKEN = new InjectionToken<boolean>('[ngxNullable] Display zero');

export const provideNullable = (options?: Partial<NgxNullableOptions>): EnvironmentProviders => {
  return makeEnvironmentProviders([
    {
      provide: NULLABLE_CHARACTER_TOKEN,
      useValue: options?.character ?? '—'
    },
    {
      provide: NULLABLE_SEPARATOR_TOKEN,
      useValue: options?.separator ?? ', '
    },
    {
      provide: DISPLAY_ZERO_TOKEN,
      useValue: options?.displayZero ?? true
    }
  ]);
};
