import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framwork: </p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/favicon.ico" alt="Icon" width="32" height="32" priority />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  imports: [NgOptimizedImage],
})

export class AppComponent {
  logoUrl: string = '/favicon.ico';
  logoAlt: string = 'Logo';
  username: string = '1KIINGDOM';
}