import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeColorDirective } from './change-color.directive';
import { FontSizeDirective } from './font-size.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeColorDirective, FontSizeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-directives';
}
