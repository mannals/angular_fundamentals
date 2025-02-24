import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstPipesComponent } from './first-pipes/first-pipes.component';
import { JsonPipeComponent } from './json-pipe/json-pipe.component';
import { CommonModule } from '@angular/common';
import { StringTransformPipe } from './string-transform.pipe';
import {StringPipeComponent} from './string-pipe/string-pipe.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FirstPipesComponent, JsonPipeComponent, StringPipeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
}
