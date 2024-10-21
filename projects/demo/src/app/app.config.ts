import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideNullable } from '../../../ngx-nullable/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNullable({
      character: '---',
      separator: ' | ',
      displayZero: true
    })
  ]
};
