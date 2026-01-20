import {Component} from '@angular/core';
import {Home} from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  template:
    `
      <main>
        <header class="brand-name">
          <img class="brand-logo" src="logo.svg" alt="logo" aria-hidden="true" />
        </header>
        <section class="content">
          <app-home />
        </section>
      </main>
    `,
  styleUrls: ['./app.css'],
})
export class App {
  
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
