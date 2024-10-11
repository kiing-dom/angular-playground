import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    @if(isServerRunning) {
    <span>Yes, the server is running</span>
    }
    @else {
      <span>No, the server is not running</span>
    }
  `,
  standalone: true,
})
export class AppComponent {
  isServerRunning: boolean = true;
}
