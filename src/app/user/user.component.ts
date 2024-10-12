import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    <p>Framework: {{ favoriteFramework }} </p>
    <label for="framework">
        Favorite Framework:
        <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
    <button (click)="showFramework()">Show Framework</button>
  `,
  imports: [FormsModule],
})
export class UserComponent {
  username: string = '@KIINGDOM';
  favoriteFramework: string = '';

  showFramework() {
    alert(this.favoriteFramework)
  }
}
