import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config'; // contient les import des routes et etc.
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
