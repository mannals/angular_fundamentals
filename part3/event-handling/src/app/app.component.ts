import { Component } from '@angular/core';
import { RandomNumberButtonComponent } from './random-number-button/random-number-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RandomNumberButtonComponent, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-handling';
}
