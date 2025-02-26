import { Component } from '@angular/core';
import { ChangeColorDirective } from '../change-color.directive';

@Component({
  selector: 'app-text-color',
  imports: [ChangeColorDirective],
  templateUrl: './text-color.component.html',
  styleUrl: './text-color.component.css'
})
export class TextColorComponent {

}
