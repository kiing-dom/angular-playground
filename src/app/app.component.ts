import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <div [contentEditable]="isEditable"></div>
  `,
  standalone: true
})

export class AppComponent {
  isEditable = true;
}