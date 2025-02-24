import { Component } from '@angular/core';
import { StringTransformPipe } from '../string-transform.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-string-pipe',
  imports: [StringTransformPipe,FormsModule, CommonModule],
  templateUrl: './string-pipe.component.html',
  styleUrl: './string-pipe.component.css'
})
export class StringPipeComponent {
  inputString: string = '';
  showTransformed: boolean = false;  

  showFormattedString() {
    if (this.inputString) {
      this.showTransformed = true;
    }
  }

}
