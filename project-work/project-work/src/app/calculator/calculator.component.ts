import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  calculation: string = '0';
  currentInput: string = '';
  currentOperation: string = '';
  previousInput: string = '';

  appendNumber(nr: number) {
    this.currentInput += nr;
    console.log('appendNumber')
    this.calculation == '0' ? this.calculation = nr.toString() : this.calculation += nr.toString();
  }

  appendOperation(operation: string) {
    if (this.currentInput == '') return;

    if (this.previousInput != '') this.calculate();

    this.currentOperation = operation;
    this.previousInput = this.currentInput;
    this.currentInput = '';

    this.calculation = this.previousInput + this.currentOperation;
  }

  calculate() {
    if (this.previousInput == '' || this.currentInput == '') return;
    let result: number;

    let prev: number = parseFloat(this.previousInput);
    let curr: number = parseFloat(this.currentInput);

    switch (this.currentOperation) {
      case '+':
          result = prev + curr;
          break;
      case '-':
          result = prev - curr;
          break;
      case '*':
          result = prev * curr;
          break;
      case '/':
          if (curr === 0) {
              alert("Cannot divide by zero");
              return;
          }
          result = prev / curr;
          break;
      default:
          return;
    }

    this.currentInput = result.toString();
    this.currentOperation = '';
    this.previousInput = '';

    this.calculation = this.currentInput;
  }

  reset() {
    this.currentInput = '';
    this.previousInput = '';
    this.currentOperation = '';
    this.calculation = '0';
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

}
