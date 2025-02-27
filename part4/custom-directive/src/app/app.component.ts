import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { ChangeBgDirective } from './change-bg.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeBgDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-directive';
}
