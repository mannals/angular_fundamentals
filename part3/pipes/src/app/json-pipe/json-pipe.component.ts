import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-json-pipe',
  imports: [JsonPipe],
  templateUrl: './json-pipe.component.html',
  styleUrl: './json-pipe.component.css'
})
export class JsonPipeComponent {
  testObject: Object = { name: 'Sam', age: 51, job: 'Teacher' };
}
