import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-for',
  imports: [NgFor],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  items: string[] = ['Finland','Sweden','Estonia','Spain','Japan','USA','Italy','Ireland','UK'];

}
