import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  imports: [],
  templateUrl: './weather-data.component.html',
  styleUrl: './weather-data.component.css'
})
export class WeatherDataComponent {
  @Input()
  data!: string;
}
