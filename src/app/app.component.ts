import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-user',
  template: `
    Username: {{ username }}
  `,
  standalone: true,
})
export class UserComponent {
  username = '1KiingDom'
}

@Component({
  selector: 'app-root',
  template: `<section><app-user /></section>`,
  imports: [UserComponent],
  standalone: true,
})

export class AppComponent {
  city: string = 'San Francisco' // can omit the type because of typescript's type inference
}
