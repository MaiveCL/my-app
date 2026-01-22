import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideProtractorTestingSupport(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
