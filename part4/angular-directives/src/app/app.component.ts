import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextColorComponent } from './text-color/text-color.component';
import { TextSizeComponent } from './text-size/text-size.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TextColorComponent, TextSizeComponent, IfComponent, ForComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'angular-directives';
}
