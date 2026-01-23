import {Component} from '@angular/core';
//import {Home} from './home/home'; // demandé par le tuto, warning comme inutilisé dans la console
import {RouterLink, RouterOutlet} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  imports: [/*Home,*/ RouterOutlet, RouterLink, MatButtonModule], // demandé par le tuto, warning comme inutilisé dans la console
  template:
    `
    <main>
      <header class="brand-name">
        <a [routerLink]="['/']">
          <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
        </a>

        <button matButton="elevated" class="primary" type="button" (click)="goToLogin()">
          Se connecter
        </button>
      </header>

      <section class="content">
        <router-outlet />
      </section>
    </main>
    `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';

  goToLogin() {
  window.location.href = '/login';
}
}

// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('my-app');
// }
