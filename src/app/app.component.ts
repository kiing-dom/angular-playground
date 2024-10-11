import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ city }}, {{ 1 + 1}}
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
  standalone: true,
})

export class AppComponent {
  city: string = 'San Francisco' // can omit the type because of typescript's type inference
}
