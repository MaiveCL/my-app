import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: ` <h1>Default</h1> `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';
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
