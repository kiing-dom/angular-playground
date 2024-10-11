import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="onMouseOver()" (mouseout)="onMouseOut()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
  standalone: true,
})

export class AppComponent {
  message = "";

  onMouseOver() {
    this.message = "Way to go 🚀"
  };

  onMouseOut() {
    this.message = ""
  }
}