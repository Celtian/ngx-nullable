import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideNullable } from '../../../ngx-nullable/src/public-api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideNullable({
      character: '---',
      separator: ' | ',
      displayZero: true
    })
  ]
};
