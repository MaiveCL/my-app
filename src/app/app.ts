import {Component, inject} from '@angular/core';
//import {Home} from './home/home'; // demandé par le tuto, warning comme inutilisé dans la console
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import {AuthService} from './services/authService';

@Component({
    selector: 'app-root',
    imports: [/*Home,*/ RouterOutlet, MatToolbarModule,
    MatIconModule, RouterLink, MatButtonModule], // demandé par le tuto, warning comme inutilisé dans la console
    template:
      `
      <main>

        <mat-toolbar>

            <a [routerLink]="['/']">
              <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
            </a>

            @if (auth.isLoggedIn) {
              <button matButton="elevated" class="primary" (click)="handleLogOut()">
                Se&nbsp;déconnecter
              </button>
            }
            @else {
              <button matButton="elevated" class="primary" (click)="goToLogin()">
                Se&nbsp;connecter
              </button>
            }

        </mat-toolbar>

          <section class="content">
            <router-outlet />
          </section>

      </main>
      `,
    styleUrls: ['./app.css'],
  })
  export class App {

    auth = inject(AuthService)

    private readonly router = inject(Router);
    title = 'homes';

    handleLogOut() {
        this.auth.logOut()
    }

    goToLogin() { 
    this.router.navigate(['/login']);
    //
    // Ça c'est NON : fait un refresh, c'est non, voir la mécanique du logo home
    // window.location.href = '/login'; 
  }
}