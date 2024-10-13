import { Component } from "@angular/core";
import { ReversePipe } from "./pipes/reverse.pipe";
import { PalindromePipe } from "./pipes/palindrome.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    Reverse Machine: {{ word | reverse }} <br>
    Palindrome Machine: {{ word2 | palindrome }} <br>
    Palindrome Machine1: {{ word3 | palindrome }} <br>
    <img [src]="image"> <br>
    <button>Thank you for pushing</button>
    `,
  imports: [ReversePipe, PalindromePipe],
})

export class AppComponent {
  word = "moD gniiK ot ebircsbuS";
  word2 = "racecar";
  word3 = "bean";

  image = "/profile.jpg"

  onClick() {
    console.log("Thank you for pushing")
  }
}