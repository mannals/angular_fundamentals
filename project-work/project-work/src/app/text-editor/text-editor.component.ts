import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TextFormatDirective } from '../text-format.directive';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-editor',
  standalone: true,
  imports: [NgIf, NgFor, TextFormatDirective, CommonModule, FormsModule],
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  submitted: boolean = false;
  isBold: boolean = false;
  isItalic: boolean = false;
  color: string = '';
  inputString: string = '';

  colors: string[] = ['red', 'blue', 'green'];

  textStyleControl = new FormControl();

  onSubmit() {
    this.submitted = true;
  }

}
