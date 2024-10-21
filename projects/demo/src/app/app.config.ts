import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideNullable } from '../../../ngx-nullable/src/lib/ngx-nullable.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNullable({
      character: '🦄',
      separator: ' ',
      displayZero: true
    })
  ]
};
