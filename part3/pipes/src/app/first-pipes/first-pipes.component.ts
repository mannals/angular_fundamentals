import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-first-pipes',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './first-pipes.component.html',
  styleUrl: './first-pipes.component.css'
})
export class FirstPipesComponent {
  today: Date = new Date();
  money: number = 1500;
  weather: string = "snowy";
}
