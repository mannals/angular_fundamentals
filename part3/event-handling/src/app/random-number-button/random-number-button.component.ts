import { Component } from '@angular/core';
import {DivisionComponent} from '../division/division.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-random-number-button',
  imports: [CommonModule, DivisionComponent],
  templateUrl: './random-number-button.component.html',
  styleUrls: ['./random-number-button.component.css']
})
export class RandomNumberButtonComponent {
  color: string = "cyan";
  resultString: string | null = null;

  randNum: number = 0;
  inputNum: number | null = null;
  result: number | null = null;

  generated: boolean = false;

  generateNumber(event: Event) {
    event.preventDefault();
    let min = Math.ceil(1);
    let max = Math.floor(100);
    this.randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if (this.inputNum != null) {
      this.result = this.randNum + this.inputNum;
      this.resultString = this.randNum.toString() + " + " + this.inputNum.toString() + " = " + this.result.toString();
    } else {
      this.result = this.randNum;
      this.resultString = this.randNum.toString();
    }

    this.generated = true;
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.inputNum = parseInt(inputElement.value); 
  }

  

}
