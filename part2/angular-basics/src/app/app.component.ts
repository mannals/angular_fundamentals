import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherDataComponent } from './weather-data/weather-data.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, WeatherDataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fundamentals of Angular.js (nonstop, 3 ects)';
  myname = 'Anna';
}
