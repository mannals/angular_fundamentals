import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-division',
  imports: [ReactiveFormsModule, NgIf, CommonModule],
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {
  @Input() dividend: number | null = null;
  divisorList: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  form = new FormGroup({
    divisor: new FormControl('', Validators.required)
  });
  divisionResult: number | null = null;
  divisionString: string | null = null;

  divisorControl = new FormControl();

  get f() {
    return this.form.controls;
  }

  submit() {
    const divisor = this.form.value.divisor;
    if (this.dividend != null && divisor != null) {
      this.divisionResult = this.dividend / parseInt(divisor);
      this.divisionString = `${this.dividend} / ${divisor} = ${this.divisionResult}`;
    }
  }

}
