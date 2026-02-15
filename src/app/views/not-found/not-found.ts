// src/app/views/not-found/not-found.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  template: `
    <h1>404 - Page non trouvée</h1>
    <p>La ressource que vous cherchez n'existe pas, désolée</p>
  `,
})
export class NotFound {}
