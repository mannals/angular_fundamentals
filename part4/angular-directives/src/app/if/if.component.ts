import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-if',
  imports: [NgIf],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
  clicked: boolean = false;

  onClick() {
    this.clicked = true;
  }

}
