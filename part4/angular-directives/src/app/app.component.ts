import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeColorDirective } from './change-color.directive';
import { FontSizeDirective } from './font-size.directive';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeColorDirective, FontSizeDirective, NgIf, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angular-directives';
  clicked: boolean = false;

  onClick() {
    this.clicked = true;
  }
}
