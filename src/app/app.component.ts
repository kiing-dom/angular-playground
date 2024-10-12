import { Component } from "@angular/core";
import { ReversePipe } from "./pipes/reverse.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` Reverse Machine: {{ word | reverse }} `,
  imports: [ReversePipe],
})

export class AppComponent {
  word = "moD gniiK ot ebircsbuS";
}