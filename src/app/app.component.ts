import { Component, inject } from '@angular/core';
import { CarService } from './car/car.service'

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<p> {{ carService.getCars() }} </p>`
})

export class AppComponent {
  carService = inject(CarService);
}