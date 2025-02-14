import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-button',
  imports: [FormsModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  color = "green";
  clicked = "";

  changeColor() {
    this.clicked = "Button was clicked!";
    this.color = (this.color === "green") ? "red" : "green";
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
  }
}
